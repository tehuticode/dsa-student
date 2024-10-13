/**
 * Represents a single entry in the phone book.
 */
class PhoneBookEntry {
  /**
   * @param {string} name - The name of the person.
   * @param {string} phoneNumber - The phone number of the person.
   */
  constructor(name, phoneNumber) {
    this.name = name;
    this.phoneNumber = phoneNumber;
  }
}

/**
 * Represents a hash table for storing phone book entries.
 */
class HashTable {
  constructor() {
    this.table = {};
  }

  /**
   * Hashes a name to determine its index in the table.
   * @param {string} name - The name to hash.
   * @returns {string} The first character of the name, converted to uppercase.
   */
  hash(name) {
    return name.charAt(0).toUpperCase();
  }

  /**
   * Inserts a new entry into the hash table.
   * @param {string} name - The name of the person.
   * @param {string} phoneNumber - The phone number of the person.
   */
  insert(name, phoneNumber) {
    const index = this.hash(name);
    if (!this.table[index]) {
      this.table[index] = [];
    }
    this.table[index].push(new PhoneBookEntry(name, phoneNumber));
  }

  /**
   * Displays the entire hash table.
   * @returns {string} A string representation of the hash table.
   */
  display() {
    let output = "";
    for (const [key, value] of Object.entries(this.table)) {
      output += `${key}:\n`;
      value.forEach(entry => {
        output += `  ${entry.name}: ${entry.phoneNumber}\n`;
      });
    }
    return output;
  }

  /**
   * Searches the hash table based on a given criteria.
   * @param {function} criteria - A function that takes a PhoneBookEntry and returns a boolean.
   * @returns {PhoneBookEntry[]} An array of entries that meet the criteria.
   */
  search(criteria) {
    let results = [];
    for (const entries of Object.values(this.table)) {
      results = results.concat(entries.filter(criteria));
    }
    return results;
  }
}

module.exports = HashTable;
