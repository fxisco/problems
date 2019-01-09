/**
 * Challenge
 * Have the function TimeDifference(strArr) read the array of
 * strings stored in strArr which will be an unsorted list of
 * times in a twelve-hour format like so: HH:MM(am/pm).
 * Your goal is to determine the smallest difference in minutes
 * between two of the times in the list.
 *
 * For example: if strArr is ["2:10pm", "1:30pm", "10:30am", "4:42pm"]
 * then your program should return 40 because the smallest difference
 * is between 1:30pm and 2:10pm with a difference of 40 minutes.
 * The input array will always contain at least two elements and
 * all of the elements will be in the correct format and unique.
 */

 const MINS_IN_HOUR = 60;

 function getTime(element) {
  const matches = element.match(/(a|p)m/g);
  let result;

  if (matches) {
    const meridiem = matches[0];
    const time = element.replace(meridiem, '');
    const [first, second] = time.split(':');
    let hour = parseInt(first);
    let min = parseInt(second);

    if (meridiem === 'pm') {
      hour += 12;
    }

    result = {
      hour,
      min,
      meridiem
    };
  }

  return result;
 }

 function convertToDates(strArr) {
   return strArr.reduce((accum, item) => {
     accum.push(getTime(item));

     return accum;
  }, []);
 }

 function getDifference(date1, date2) {
  let diff = 0;

  if (date1.meridiem === date2.meridiem) {
    diff = Math.abs(
      (date1.hour * MINS_IN_HOUR + date1.min) -
      (date2.hour * MINS_IN_HOUR + date2.min)
    );
  }

  // Convert to minutes
  return diff;
 }

 function TimeDifference(strArr) {
   // Convert to dates
  const dates = convertToDates(strArr);
  let i = 0;
  let j = 1;

  // Compare between two
  while (i < strArr.length - 1) {
    getDifference(dates[i], dates[j]);

    if (j === strArr.length - 1) {
      i++;
      j = i + 1;
    } else {
      j++;
    }
  }

  // Find difference

  // Return smallest
 }

 console.log(TimeDifference(["1:10pm", "4:40am", "5:00pm"]))

// Input:"1:10pm", "4:40am", "5:00pm"
// Output:230


// Input:"10:00am", "11:45pm", "5:00am", "12:01am"
// Output:16
