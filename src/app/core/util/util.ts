export function calculateNumberOfDays(selectedRange) {
  const currentDate = new Date();
  const oneDayInMilliseconds = 1000 * 60 * 60 * 24;
  var numberOfDays = 0;

  switch (selectedRange) {
    case "TODAY":
      numberOfDays = 1;
      break;
    case "YESTERDAY":
      numberOfDays = 1;
      break;
    case "LAST_7_DAYS":
      numberOfDays = 7;
      break;
    case "LAST_BUSINESS_WEEK":
      numberOfDays = currentDate.getDay() === 1 ? 5 : 7;
      break;
    case "THIS_MONTH":
      const currentMonth = currentDate.getMonth();
      const currentYear = currentDate.getFullYear();
      const firstDayOfMonth = new Date(currentYear, currentMonth, 1);
      const lastDayOfMonth = new Date(currentYear, currentMonth + 1, 0);
      const timeDiff = lastDayOfMonth.getTime() - firstDayOfMonth.getTime();
      numberOfDays = Math.ceil(timeDiff / oneDayInMilliseconds) + 1;
      break;
    case "LAST_MONTH":
      const previousMonth = currentDate.getMonth() - 1;
      const previousYear = currentDate.getFullYear();
      const firstDayOfPreviousMonth = new Date(previousYear, previousMonth, 1);
      const lastDayOfPreviousMonth = new Date(
        previousYear,
        previousMonth + 1,
        0
      );
      const timeDiffPrev =
        lastDayOfPreviousMonth.getTime() - firstDayOfPreviousMonth.getTime();
      numberOfDays = Math.ceil(timeDiffPrev / oneDayInMilliseconds) + 1;
      break;
    case "LAST_14_DAYS":
      numberOfDays = 14;
      break;
    case "LAST_30_DAYS":
      numberOfDays = 30;
      break;
    default:
      numberOfDays = 0;
  }
  console.log("calculateNumberOfDays", numberOfDays);
  return numberOfDays;
}
