function timer(){

    const currentTime = new Date();
    let currentHour = currentTime.getHours();
    const currentMinute = currentTime.getMinutes().toString().padStart(2, 0);
    const currentSecond = currentTime.getSeconds().toString().padStart(2, 0);
    
    const hour = currentHour>=12 ? "PM" : "AM";
    const meridiem = currentHour%12 || 12 ;
    currentHour = meridiem.toString().padStart(2, 0);

    document.getElementById("clock").textContent = `${currentHour}:${currentMinute}:${currentSecond} ${hour} `;
    
}

setInterval(timer, 1000);