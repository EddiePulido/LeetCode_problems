const numberOfDays = (year, month) => {
  const isLeapYear = year => {
      if(year % 100 === 0){
          if(year % 400 === 0) return true
          return false
      }

      return year % 4 === 0
  }

  // January, March, May, July, August, October, and December.


  const days = { 1: 31, 2: 28, 3: 31, 4: 30, 5: 31, 6: 30, 7: 31, 8: 31, 9: 30, 10: 31, 11: 30, 12: 31 }

  if(month === 2){
      return isLeapYear(year) ? 29 : 28
  }

  return days[month]
}