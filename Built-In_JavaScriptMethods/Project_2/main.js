let endDate = new Date("6/23/2022 18:00:00");
console.log(endDate);

function countdown(date) {
   let currentDate = Date.now();
   let dateFromParam = Date.parse(date);

   let timeRemaining = dateFromParam - currentDate;
   let daysRemaining = timeRemaining / 1000 / 60 / 60 / 24 ;
   let hoursRemaining = (daysRemaining - Math.floor(daysRemaining)) * 24;
   let minutesRemaining = (hoursRemaining - Math.floor(hoursRemaining)) * 60;
   let secondsRemaining = (minutesRemaining - Math.floor(minutesRemaining)) * 60;
   let milisecondsRemaining =(secondsRemaining - Math.floor(secondsRemaining)) * 1000;

   console.log(`
      ${Math.floor(daysRemaining)} Day  
      ${Math.floor(hoursRemaining)}h ${Math.floor(minutesRemaining)}m ${Math.floor(secondsRemaining)}sec
      ${Math.floor(milisecondsRemaining)} milisec
    `);
}

countdown(endDate);