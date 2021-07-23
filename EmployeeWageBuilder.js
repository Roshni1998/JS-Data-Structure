// UC-6 Arrays and 7 Maps

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
let empDailyWageArr = new Array();
let empDailyWageMap = new Map();
let empDailyHrsMap = new Map();
while (totalEmpHrs <= MAX_HRS_IN_MONTH && totalWorkingDays < NUM_OF_WORKING_DAYS) {
	totalWorkingDays++;
	let empCheck = Math.floor(Math.random() * 10) % 3;
	let empHrs = getWorkingHours(empCheck);
	totalEmpHrs += empHrs;
	empDailyWageArr.push(calcDailywage(empHrs));
	empDailyHrsMap.set(totalWorkingDays, empHrs);
   empDailyWageMap.set(totalWorkingDays, calcDailywage(empHrs));
}

let empWage = calcDailywage(totalEmpHrs);
console.log("UC6 - Total Days: " + totalWorkingDays + ", Total Hrs: " + totalEmpHrs + ", Emp Wage: " + empWage);

// Array Helper functions
// UC 7A - Calculate total wage using Array for each traversal or reduce method
let totalEmpWage = 0;
function sum(dailyWage) {
	totalEmpWage += dailyWage;
}
empDailyHrsAndWageArr.forEach(sum);
console.log("UC 7A - Total Days : " + totalWorkingDays + ", Total Hrs : " + totalEmpHrs + ", Emp Wage : " + empWage);

function totalWages(totalWage, dailyWage) {
	return totalWage + dailyWage;
}
console.log("UC 7A - Emp Wage with reduce : " + empDailyWageArr.reduce(totalWages, 0));

// UC 7B - Show the day along with daily Wage using Array map helper function
let dailyCntr = 0;
function mapDayWithWage(dailyWage) {
	dailyCntr++;
	return dailyCntr + " = " + dailyWage;
}
let mapDayWithWageArr = empDailyWageArr.map(mapDayWithWage);
console.log("UC 7B - Daily Wage Map");
console.log(mapDayWithWageArr);

//UC 7C - Show days when full time wage of 160 were earned
function fulltimeWage(dailyWage) {
	return dailyWage.includes("160");
}
let fullDayWageArr = mapDayWithWageArr.filter(fulltimeWage);
console.log("UC 7C - Daily wage filter when fulltime wage earned");
console.log(fullDayWageArr);

// UC 7D - Find the first occurrence when full time wage was earned using find function
function findFulltimeWage(dailyWage) {
	return dailyWage.includes("160");
}
console.log("UC 7D - First time Fulltime wage was earned on Day: " + mapDayWithWageArr.find(findFulltimeWage));

// UC 7E - Check if every element of full time wage is truely holding full time wage
function isAllFulltimeWage(dailyWage) {
	return dailyWage.includes("160"); 
} 
console.log("UC 7E - Check All Element have full time wage : " + fullDayWageArr.every(isAllFulltimeWage));

// UC 7F - Check if there is any part time wage
function isAnyPartTimeWage(dailyWage) {
	return dailyWage.includes("80");
}
console.log("UC 7F - Check if any part time wage: " + mapDayWithWageArr.some(isAnyPartTimeWage));

// UC 7G - Find the number of days the employee worked
function totalDaysWorked(numOfDays, dailyWage) {
	if (dailyWage > 0) return numOfDays+1;
	return numOfDays;
}
console.log("UC 7G - Number of days emp worked : " + empDailyWageArr.reduce(totalDaysWorked, 0));

// UC-8 Map Function
console.log(empDailyWageMap);
console.log(empDailyHrsMap);
console.log("UC 8 - Emp Wage Map totalHrs : " + Array.from(empDailyWageMap.values()).reduce(totalWages, 0));

