import React from 'react';

function GetTime(){
  const date = new Date();
  const hours = date.getHours();
  const mins = date.getMinutes();
  //const secs = date.getSeconds();
  let twelveHour;
  let meridiem;
  let timeOfDay;


  if(hours < 12){
    timeOfDay = 'Morning';
    twelveHour = hours;
    meridiem = "AM";
  }else if(hours > 12 || hours < 17){
    timeOfDay = 'Afternoon';
    twelveHour = hours;
    meridiem = "PM";
  }else{
    timeOfDay = 'Night';
    twelveHour = hours - 12;
    meridiem = "PM";
  }

  return(
    <div>
      <h2>Good {timeOfDay}!</h2>
      <h5>{twelveHour + ':' + mins + ' ' + meridiem}</h5>
    </div>
  );
}

export default GetTime;
