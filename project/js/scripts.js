/*-------------------- CURRENT DATE ----------------------*/
//const options = {weekday: 'long', day: 'numeric', month: 'long', year:'numeric'};
//document.getElementById('currentdate').textContent = new Date().toLocaleDateString('en-US', options);

// day names array
const dayNames = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
    
];

// Long month names array
const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
];

const todaysdate = new Date();
const dayName = dayNames[todaysdate.getDay()];
const monthName = months[todaysdate.getMonth()];
const currentdate = dayName + ", " + todaysdate.getDate() + " " + monthName + " " + todaysdate.getFullYear();

// document.getElementById('currentDate').textContent = currentdate;

document.getElementById("copyrightYear").innerHTML = todaysdate.getFullYear();

/*-------------------- HAMBURGER MENU ----------------------*/
const hambutton = document.querySelector('.ham');
const mainnav = document.querySelector('.navigation');

const closebutton = document.querySelector('.alertclose');

// hambutton.addEventListener('click', () => {mainnav.classList.toggle('responsive')}, false);
// put back line above

// To solve the mid resizing issue with responsive class on
window.onresize = () => {if (window.innerWidth > 760) mainnav.classList.remove('responsive')};

/*-------------------- WEB FONT LOADER ----------------------*/
WebFont.load({google: {families: ['Goblin One', 'Raleway']}});

/*----------------------- API live weather data ----------------------*/
locationid = 'lat=47.6813&lon=-117.2827'; //millwood, wa
// locationid = 'lat=47.135178&lon=-115.876603'; //fish hook test
const apiURL = `https://api.openweathermap.org/data/2.5/onecall?${locationid}&exclude=minutely,hourly&units=imperial&appid=9d82d746ab9b4a97a81f74aae8a3582b`;

fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => { 
        console.log(jsObject);

    const currdesc = document.querySelector('#currdesc');
    const humidity = document.querySelector('#humidity');
    const curtemp = document.querySelector('#currtemp');

    currdesc.innerHTML = jsObject.current.weather[0].description;
    curtemp.innerHTML = Math.round(jsObject.current.temp);
    humidity.innerHTML = jsObject.current.humidity;
      
    
    // let day = 0;
    // const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    // document.getElementById(`dayofweek${day+1}`).textContent = weekdays[d.getDay()+1];
    // document.getElementById(`dayofweek${day+2}`).textContent = weekdays[d.getDay()+2];
    // document.getElementById(`dayofweek${day+3}`).textContent = weekdays[d.getDay()+3];

    // document.getElementById(`forecast${day+1}`).textContent = Math.round(jsObject.daily[1].temp.day);
    // document.getElementById(`forecast${day+2}`).textContent = Math.round(jsObject.daily[2].temp.day);
    // document.getElementById(`forecast${day+3}`).textContent = Math.round(jsObject.daily[3].temp.day);


// for reference
// const forecast = jsObject.list.filter(x => x.dt_txt.includes('18:00:00'));
    // const forecast = jsObject.daily.filter(x => x.dt);
    const forecast = jsObject.daily;
    let day=1;
forecast.forEach(x => {
    const d = new Date(jsObject.daily[day].dt*1000);
    const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    console.log(`test: ${weekdays[d.getDay()]}`);
    document.getElementById(`dayofweek${day}`).textContent = weekdays[d.getDay()];
    document.getElementById(`forecast${day}`).textContent = Math.round(x.temp.day);
    day++;
}); // goes with for each

    // const weathericon = document.querySelector(`icon${day+1}`);
        // const imagesrc = 'https://openweathermap.org/img/w/' + jsObject.weather[0].icon + '.png';
//rather do string interpolation below instead
// const isrc = `https://openweathermap.org/img/w/${forecast[day].weather[0].icon}.png`;
// const desc = forecast[day].weather[0].description; //delete
// reference end

/*-------------------- WEATHER ALERT SECTION ----------------------*/
// const alertaway = document.querySelector('.alerts');
// alertaway.addEventListener('.alerts', () => {
//     styleMedia.display = 'none';
// });
// document.querySelector('.alerts').style.display = 'none';
// onclick="this.parentElement.style.display='none';"
// onclick=this.style.display='none';

// document.getElementsByClassName('.btn').addEventListener('click',() => {this.parentElement.style.display='none'});

// if close button clicked, or no alerts available (= null?) 
// display: none
// else display: block;

    // document.querySelector(".message").style.backgroundColor = "pink";
    // document.querySelector(".message").style.visibility = "visible";

    // document.querySelector(".alerts").style.display = "block";
    
    // document.querySelector(".alerts").textContent = 'no alerts today';
    // document.querySelector(".alertmessage").textContent = jsObject.alerts[0].description;
    // put back


    
  });
