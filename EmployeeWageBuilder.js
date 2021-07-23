// UC-2
// Calculate daily employee wage based on part time or full time work.
const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR = 20;
const MAX_HRS_IN_MONTH = 100;
const NUM_OF_WORKING_DAYS = 10;

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

// UC-6
// Refactor the code to write a function to calculate the daily wage
function calcDailywage(empHrs) {
	return empHrs * WAGE_PER_HOUR;
}

let totalEmpHrs = 0;
let totalWorkingDays = 0;
let empDailyHrsAndWageArr = new Array();
while (totalEmpHrs <= MAX_HRS_IN_MONTH && totalWorkingDays < NUM_OF_WORKING_DAYS) {
	totalWorkingDays++;
	let empCheck = Math.floor(Math.random() * 10) % 3;
	let empHrs = getWorkingHours(empCheck);
	totalEmpHrs += empHrs;
	empDailyHrsAndWageArr.push(
		{
			dayNum : totalWorkingDays,
			dailyHours : empHrs,
			dailyWage : calcDailywage(empHrs),
			toString() {
				return '\nDay' + this.dayNum + ' => Working Hours is ' + this.dailyHours +
				       ' And Wage Earned = ' + this.dailyWage
			},
		});
}

let empWage = calcDailywage(totalEmpHrs);
console.log("UC6 - Total Days: " + totalWorkingDays + ", Total Hrs: " + totalEmpHrs + ", Emp Wage: " + empWage);
