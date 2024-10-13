/**
 * Represents a node in the double-linked list.
 */
class DayNode {
  
  constructor(day) {
    this.day = day;
    this.next = null;
    this.prev = null;
  }
}

/**
 * Represents a double-linked list of days.
 */
class WeekList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  /**
   * Adds a new day to the beginning of the list.
   * @param {string} day - The name of the day to add.
   */
  addDayAtBeginning(day) {
    const newDay = new DayNode(day);
    if (!this.head) {
      this.head = newDay;
      this.tail = newDay;
    } else {
      newDay.next = this.head;
      this.head.prev = newDay;
      this.head = newDay;
    }
  }

  /**
   * Adds a new day to the end of the list.
   * @param {string} day - The name of the day to add.
   */
  addDay(day) {
    const newDay = new DayNode(day);
    if (!this.head) {
      this.head = newDay;
      this.tail = newDay;
    } else {
      this.tail.next = newDay;
      newDay.prev = this.tail;
      this.tail = newDay;
    }
  }

  /**
   * Finds and returns the day at a specific position (index).
   * @param {number} index - The index of the day to read.
   * @returns {string|null} The day at the specified index, or null if not found.
   */
  readDay(index) {
    let current = this.head;
    let count = 0;
    while (current && count < index) {
      current = current.next;
      count++;
    }
    return current ? current.day : null;
  }

  /**
   * Inserts a new day at the desired position.
   * @param {number} index - The index at which to insert the new day.
   * @param {string} day - The name of the day to insert.
   */
  insertDay(index, day) {
    const newDay = new DayNode(day);
    if (index === 0) {
      this.addDayAtBeginning(day);
      return;
    }
    let current = this.head;
    let count = 0;
    while (current && count < index - 1) {
      current = current.next;
      count++;
    }
    if (current) {
      newDay.next = current.next;
      newDay.prev = current;
      if (current.next) current.next.prev = newDay;
      current.next = newDay;
      if (!newDay.next) this.tail = newDay;
    }
  }

  /**
   * Changes the name of a day at a specific index.
   * @param {number} index - The index of the day to update.
   * @param {string} newDay - The new name for the day.
   */
  updateDay(index, newDay) {
    let current = this.head;
    let count = 0;
    while (current && count < index) {
      current = current.next;
      count++;
    }
    if (current) current.day = newDay;
  }

  /**
   * Removes a day from a specific position.
   * @param {number} index - The index of the day to delete.
   */
  deleteDay(index) {
    if (index === 0) {
      this.head = this.head.next;
      if (this.head) this.head.prev = null;
      else this.tail = null;
      return;
    }
    let current = this.head;
    let count = 0;
    while (current && count < index) {
      current = current.next;
      count++;
    }
    if (current) {
      if (current.prev) current.prev.next = current.next;
      if (current.next) current.next.prev = current.prev;
      else this.tail = current.prev;
    }
  }

  /**
   * Removes the last day from the list.
   */
  deleteLastDay() {
    if (!this.tail) return;
    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = this.tail.prev;
      this.tail.next = null;
    }
  }

  /**
   * Prints all days in the list.
   */
  printWeek() {
    let current = this.head;
    while (current) {
      console.log(current.day);
      current = current.next;
    }
  }

  /**
   * Searches the list for days matching a given criteria.
   * @param {function} criteria - A function that takes a day name and returns a boolean.
   * @returns {string[]} An array of day names that match the criteria.
   */
  searchDays(criteria) {
    let results = [];
    let current = this.head;
    while (current) {
      if (criteria(current.day)) {
        results.push(current.day);
      }
      current = current.next;
    }
    return results;
  }
}

module.exports = WeekList;

