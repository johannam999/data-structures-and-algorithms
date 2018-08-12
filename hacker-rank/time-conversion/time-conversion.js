'use strict';

function timeConversion(s) {
  const divided = s.split(':');
  let hours = Number(divided[0]);
  const minutes = divided[1];
  const seconds = divided[2].substr(0, 2);
  const pm = divided[2].substr(2);

  if (pm === 'PM' && hours < 12) {
    hours += 12;
  }
  if (pm === 'AM' && hours === 12) {
    hours = 0;
  }
  if (hours < 10) {
    hours = `0${hours}`; 
  }
  const time = [hours, minutes, seconds].join(':');
  return time;
}

timeConversion();

