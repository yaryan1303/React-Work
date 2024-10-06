const end="6 October 2024 08:20:00 PM"

document.querySelector("#date").innerHTML=end;

let inputtext=document.querySelectorAll("input");

function clock()
{
    const newend=new Date(end);

    console.log(newend);
    const now=new Date();

    console.log(now);

    const diff=(newend-now)/1000;

    const days = Math.floor(diff / (24 * 60 * 60));
    const hours = Math.floor((diff % (24 * 60 * 60)) / (60 * 60));
    const minutes = Math.floor((diff % (60 * 60)) / 60);
    const seconds = Math.floor(diff % 60);

    // Update the input fields (days, hours, minutes, seconds)
    inputtext[0].value = days;
    inputtext[1].value = hours;
    inputtext[2].value = minutes;
    inputtext[3].value = seconds;
}

clock();

setInterval(clock,1000);