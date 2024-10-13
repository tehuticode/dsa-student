const HashTable = require('./hash-table.js');

// Create a hash table and insert sample data
const phoneBook = new HashTable();
const entries = [
  ['Lucie', '0312 897 654'],
  ['Nancy', '0436 123 987'],
  ['Jamie', '0412 345 789'],
  ['Davis', '0326 654 321'],
  ['Marissa', '0415 888 999'],
  ['Jack', '0478 852 963'],
  ['Larry', '0385 785 126']
];

entries.forEach(([name, number]) => phoneBook.insert(name, number));

console.log("Q2: Create a hash table object with sample data and display the whole hash table");
console.log(phoneBook.display());

console.log("\nQ3: Search function returning at least one phone book item");
console.log("Searching for names starting with 'J':");
const jNames = phoneBook.search(entry => entry.name.startsWith('J'));
console.log(jNames);

console.log("\nQ4: Search function returning no nodes");
console.log("Searching for names starting with 'Z':");
const zNames = phoneBook.search(entry => entry.name.startsWith('Z'));
console.log(zNames);
