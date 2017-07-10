/**
 * A custom function that computes a KPIs progress through the year. This function
 * takes in three numbers (baseline, current, and target) and returns the percent
 * progress to the target from the baseline.
 * 
 * @param {Number} baseline The KPI's baseline.
 * @param {Number} current The current value of the KPI.
 * @param {Number} target The EOY target value of the KPI.
 * @param {Number} is_target_larger Is the baseline value expected to be greater than the target (optional, default: TRUE). Set to false if the metric ought to be lower by EOY.
 * @retun {Number|String} a number between 0 and 1 that represents how complete a task is.
 */
function PERCENTCOMPLETE(baseline,current,target,is_target_larger) {

  var percent_complete = calculate_percentage(baseline,current,target);
  var is_achieved = false;
  
  if (is_target_larger === undefined) {
    is_target_larger = true;
  }
  
  if (target > 0 && current === target) {
    percent_complete = 1;
  }
  
  if (is_target_larger) {
    if (current > target) {
      is_achieved = true;
      percent_complete = 1;
    }
  } else {
    if (current < target) {
      is_achieved = true;
      percent_complete = 1;
    }
  }
  
  if (percent_complete < 0) {
    percent_complete = 0;
  }
  if (isNaN(percent_complete)) {
    percent_complete = "";
  }

  return percent_complete;
}

function calculate_percentage(baseline,current,target) {
  return ((baseline-target)-(current-target))/(baseline-target);
}

/** Tests */
// For running locally.
if (!Logger) {
  var Logger = console;
}
// Not a number. 
var value_not_a_number = PERCENTCOMPLETE(0,0,0);
if (value_not_a_number === "") {
  Logger.log("PASS: Not a number. %s",value_not_a_number);
} else {
  Logger.log("FAIL: Not a number. %s",value_not_a_number);
}
// Past the limit. 1.0
var value_greater_than_target = PERCENTCOMPLETE(0,60.43,60);
if (value_greater_than_target === 1.0) {
  Logger.log("PASS: Past the limit. %s",value_greater_than_target);
} else {
  Logger.log("FAIL: Past the limit. %s",value_greater_than_target);
}
// Showing progress. 0.5
var value_progress_fifty_percent = PERCENTCOMPLETE(50,55,60);
if (value_progress_fifty_percent === 0.5) {
  Logger.log("PASS: Showing progress. %s",value_progress_fifty_percent);
} else {
  Logger.log("FAIL: Showing progress. %s",value_progress_fifty_percent);
}
// Staying the same.
var values_all_the_same = PERCENTCOMPLETE(60,60,60);
if (values_all_the_same === 1.0) {
  Logger.log("PASS: Staying the same. %s",values_all_the_same);
} else {
  Logger.log("FAIL: Staying the same. %s",values_all_the_same);
}
// Going the wrong way. 0.0
var values_going_the_wrong_way = PERCENTCOMPLETE(59,58,60);
if (values_going_the_wrong_way === 0) {
  Logger.log("PASS: Going the wrong way. %s",values_going_the_wrong_way);
} else {
  Logger.log("FAIL: Going the wrong way. %s",values_going_the_wrong_way);
}
// Going the wrong way. 1.0
var values_going_the_wrong_way_but_still_good = PERCENTCOMPLETE(99.99,99.98,99);
if (values_going_the_wrong_way_but_still_good === 1.0) {
  Logger.log("PASS: Already done, but going in reverse. %s",values_going_the_wrong_way_but_still_good);
} else {
  Logger.log("FAIL: Already done, but going in reverse. %s",values_going_the_wrong_way_but_still_good);
}
// Going from a larger number to a smaller one.
var values_larger_to_smaller = PERCENTCOMPLETE(10,7,5,false);
if (values_larger_to_smaller === 0.6) {
  Logger.log("PASS: Going from a larger number to a smaller one. %s",values_larger_to_smaller);
} else {
  Logger.log("FAIL: Going from a larger number to a smaller one. %s",values_larger_to_smaller);
}
// END Tests */