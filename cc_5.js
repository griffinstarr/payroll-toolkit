// =============================================
//  Payroll Processing Toolkit – cc_5.js
// =============================================

// ----- Employee Data -----
const employees = [
  { name: "Alice Johnson",  hourlyRate: 25,  hoursWorked: 45 },
  { name: "Bob Martinez",   hourlyRate: 18,  hoursWorked: 40 },
  { name: "Carmen Lee",     hourlyRate: 32,  hoursWorked: 52 },
  { name: "David Okafor",   hourlyRate: 20,  hoursWorked: 38 },
  { name: "Eva Nguyen",     hourlyRate: 28,  hoursWorked: 60 },
];


// ----- Step 3: Calculate Base Pay (up to 40 hours) -----
function calculateBasePay(rate, hours) {
  const regularHours = Math.min(hours, 40);
  return rate * regularHours;
}


// ----- Step 4: Calculate Overtime Pay (hours beyond 40 at 1.5x rate) -----
function calculateOvertimePay(rate, hours) {
  if (hours <= 40) return 0;
  const overtimeHours = hours - 40;
  return rate * 1.5 * overtimeHours;
}


// ----- Step 5: Calculate Taxes (15% deducted from gross pay) -----
function calculateTaxes(grossPay) {
  return grossPay * 0.15;
}


// ----- Step 6: Process Full Payroll for One Employee -----
function processPayroll(employee) {
  const { name, hourlyRate, hoursWorked } = employee;

  const basePay     = calculateBasePay(hourlyRate, hoursWorked);
  const overtimePay = calculateOvertimePay(hourlyRate, hoursWorked);
  const grossPay    = basePay + overtimePay;
  const taxes       = calculateTaxes(grossPay);
  const netPay      = grossPay - taxes;

  return {
    name,
    basePay:     parseFloat(basePay.toFixed(2)),
    overtimePay: parseFloat(overtimePay.toFixed(2)),
    grossPay:    parseFloat(grossPay.toFixed(2)),
    taxes:       parseFloat(taxes.toFixed(2)),
    netPay:      parseFloat(netPay.toFixed(2)),
  };
}


// ----- Step 7: Loop Through Employees and Log Payroll -----
console.log("========== PAYROLL REPORT ==========\n");

employees.forEach((employee) => {
  const payroll = processPayroll(employee);
  console.log(`Employee : ${payroll.name}`);
  console.log(`  Base Pay     : $${payroll.basePay}`);
  console.log(`  Overtime Pay : $${payroll.overtimePay}`);
  console.log(`  Gross Pay    : $${payroll.grossPay}`);
  console.log(`  Taxes (15%)  : $${payroll.taxes}`);
  console.log(`  Net Pay      : $${payroll.netPay}`);
  console.log("------------------------------------");
});


// ----- Individual Function Tests -----
console.log("\n--- Function Tests ---");
console.log("calculateBasePay(20, 50)      =>", calculateBasePay(20, 50));      // 800
console.log("calculateBasePay(20, 35)      =>", calculateBasePay(20, 35));      // 700
console.log("calculateOvertimePay(20, 50)  =>", calculateOvertimePay(20, 50)); // 300
console.log("calculateOvertimePay(20, 40)  =>", calculateOvertimePay(20, 40)); // 0
console.log("calculateTaxes(1000)          =>", calculateTaxes(1000));          // 150