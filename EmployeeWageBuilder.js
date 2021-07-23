// UC-2
// Calculate daily employee wage based on part time or full time work.
const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR = 20;

// UC-3
// Refactor the code to write a function to get work hours
function getWorkingHours(empCheck) {
	switch (empCheck) {
		case IS_PART_TIME:
			return PART_TIME_HOURS;
		case IS_FULL_TIME:
			return FULL_TIME_HOURS;
		default: 
			return 0;
	}
}

// UC-5
// Calculating Wages till Number of Working Days or Total Working Hours per month is Reached

const MAX_HRS_IN_MONTH = 100;
const NUM_OF_WORKING_DAYS = 10;
let totalEmpHrs = 0;
let totalWorkingDays = 0;
while (totalEmpHrs <= MAX_HRS_IN_MONTH && totalWorkingDays < NUM_OF_WORKING_DAYS) {
	totalWorkingDays++;
	let empCheck = Math.floor(Math.random() * 10) % 3;
	totalEmpHrs += getWorkingHours(empCheck);
}
let empWage = totalEmpHrs * WAGE_PER_HOUR;
console.log("UC5 - Total Days : " + totalWorkingDays + ", Total Hrs : " + totalEmpHrs + ", Emp Wage : " + empWage);
 
