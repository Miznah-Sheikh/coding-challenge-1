


// Task 1 - Employee Information
let employeeName = "Aaliyah Kim"; //Employers name
const employeeID = 21116277; //ID
var isActive = true; // Employee is active

console.log("Task 1 - Employee Information:");
console.log("Employee Name:", employeeName, "| Type:", typeof employeeName);
console.log("Employee ID:", employeeID, "| Type:", typeof employeeID);
console.log("Is Active:", isActive, "| Type:", typeof isActive);

// Task 2 - Product Details
let productName = "SwiftLink Pro"; // Products name
const productPrice = 40.99; // Product price
var isAvailable = true; // Product availability

console.log("\nTask 2 - Product Details:");
console.log("Product Name:", productName, "| Type:", typeof productName);
console.log("Product Price:", productPrice, "| Type:", typeof productPrice);
console.log("Is Available:", isAvailable, "| Type:", typeof isAvailable);

// Task 3 - Financial Transactions
let accountBalance = 1200; // Initial balance
console.log("\nTask 3 - Financial Transactions:");
console.log("Initial Balance:", accountBalance);

accountBalance += 200; // Add 200
console.log("After Adding 200:", accountBalance);

accountBalance -= 120; // Subtract 120
console.log("After Subtracting 150:", accountBalance);

accountBalance *= 1.20; // Increase by 4%
console.log("After Increasing by 5%:", accountBalance);

accountBalance /= 2; // Divide balance by 2
console.log("After Dividing by 2:", accountBalance);

// Task 4 - Customer Messaging
let customerName = "Aaliyah Kim"; // Customer name
console.log("\nTask 4 - Customer Messaging:");
let welcomeMessage = "Hola, " + customerName + "! COME JOIN US";
console.log(welcomeMessage);

// Task 5 - Access Control
let isLoggedIn = true; // User login status
console.log("\nTask 5 - Access Control:");
console.log("Is Logged In:", isLoggedIn);

let hasAccess = isLoggedIn && isActive; // Logical and operation
console.log("Has Access (Logged In and Active):", hasAccess);

let isRestricted = !isLoggedIn; // Logical NOT operation
console.log("Is Restricted (Not Logged In):", isRestricted);
