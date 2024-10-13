// Test script for WeekList
const WeekList = require('./weeklist'); // Assuming your WeekList class is in a file named weeklist.js

console.log("Q2: Create a list object with sample data and display the whole list");
const myWeek = new WeekList();
myWeek.addDay('Monday');
myWeek.addDay('Tuesday');
myWeek.addDay('Wednesday');
myWeek.addDay('Thursday');
myWeek.addDay('Friday');
console.log("Initial week:");
myWeek.printWeek();

console.log("\nQ3: Call CRUD functions and display the updated list");
console.log("Adding 'Sunday' at the beginning:");
myWeek.addDayAtBeginning('Sunday');
myWeek.printWeek();

console.log("\nInserting 'Hump Day' at index 3:");
myWeek.insertDay(3, "Hump Day");
myWeek.printWeek();

console.log("\nUpdating day at index 5 to 'TGIF':");
myWeek.updateDay(5, "TGIF");
myWeek.printWeek();

console.log("\nDeleting the first day:");
myWeek.deleteDay(0);
myWeek.printWeek();

console.log("\nDeleting the last day:");
myWeek.deleteLastDay();
myWeek.printWeek();

console.log("\nQ4: Search function returning at least one node");
console.log("Searching for days starting with 'T':");
const tDays = myWeek.searchDays(day => day.startsWith('T'));
console.log(tDays);

console.log("\nQ5: Search function returning no nodes");
console.log("Searching for days with exactly 10 characters:");
const tenCharDays = myWeek.searchDays(day => day.length === 10);
console.log(tenCharDays);
