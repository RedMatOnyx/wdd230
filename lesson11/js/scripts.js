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

document.getElementById('currentDate').textContent = currentdate;

document.getElementById("copyrightYear").innerHTML = todaysdate.getFullYear();

/*-------------------- HAMBURGER MENU ----------------------*/
const hambutton = document.querySelector('.ham');
const mainnav = document.querySelector('.navigation');

hambutton.addEventListener('click', () => {mainnav.classList.toggle('responsive')}, false);

// To solve the mid resizing issue with responsive class on
window.onresize = () => {if (window.innerWidth > 760) mainnav.classList.remove('responsive')};

/*-------------------- PANCAKE NOTICE ON FRIDAYS ----------------------*/
let day = new Date().getDay();
if (day == 5) {
    // document.querySelector(".message").style.backgroundColor = "pink";
    // document.querySelector(".message").style.visibility = "visible";

document.querySelector(".message").style.display = "block";
}
// To change the display property in JavaScript, consider the use of .style.display = "block" in a selection structure 
// where the condition looks at the day of the week through the Date() object and getDay() method.

/*-------------------- WEB FONT LOADER ----------------------*/
WebFont.load({google: {families: ['Kufam']}});

/*--------------------CONTACT SYMBOLS ----------------------*/
src='https://kit.fontawesome.com/a076d05399.js'

/*-------------------- PROGRESSIVE LAZY LOAD GALLERY IMAGES -----------------*/
// done seperately in lazy.js

/*--------------------- STORM CENTER SEVERITY RANGE INPUT ---------------*/
function adjustRating(rating) {
    document.getElementById("ratingvalue").innerHTML = rating;
}

/*----------------------- API live weather data ----------------------*/

const whichtown = document.querySelector('.active a').textContent;
if (whichtown.includes("Preston")) {
    locationid = 'id=5604473';
}
else if (whichtown.includes("Soda")) {
    locationid = 'id=5607916';
}
else {
    locationid = 'lat=42.0380399&lon=-111.4048681';
}

const apiURL = `https://api.openweathermap.org/data/2.5/weather?${locationid}&units=imperial&appid=9d82d746ab9b4a97a81f74aae8a3582b`;

// 5604473 for preston
// 5607916 for Soda Springs
// lat=42.0380399&lon=-111.4048681 for Fish Haven

fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => { 
      //   console.log(jsObject);

    const currdesc = document.querySelector('#currdesc');
    const humidity = document.querySelector('#humidity');
    const curtemp = document.querySelector('#currtemp');
    const windy = document.querySelector('#speed');
    const iconsource = document.querySelector('#imagesrc');
    const weathericon = document.querySelector('#icon');

    currdesc.innerHTML = jsObject.weather[0].main;
    curtemp.innerHTML = Math.round(jsObject.main.temp);
    windy.innerHTML = Math.round(jsObject.wind.speed);
    humidity.innerHTML = jsObject.main.humidity;

// wind chill code pulled from lesson 7
if(jsObject.main.temp < 50 && jsObject.wind.speed > 3) {
    let windchill = Math.round(35.74 + 0.6215 * jsObject.main.temp - 35.75 * jsObject.wind.speed **0.16 + 0.4275 * jsObject.main.temp * jsObject.wind.speed**0.16);
    document.getElementById("chill").innerHTML = `${windchill} &#8457;`;
} else {document.getElementById("chill").innerHTML = "N/A"}
  });

  /*---------------------- 5 DAY FORCAST API ------------------------*/
    const apiURL2 = `https://api.openweathermap.org/data/2.5/forecast?${locationid}&units=imperial&appid=9d82d746ab9b4a97a81f74aae8a3582b`;
fetch(apiURL2)
  .then(response => response.json())
  .then(jsObject => { 
    // console.log(jsObject);

    //string.includes(18:00:00) Method ... or string.indexof()
    const forecast = jsObject.list.filter(x => x.dt_txt.includes('18:00:00'));
        // console.log(forecast);
        let day = 0;
    const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    forecast.forEach(x => {
        const d = new Date(x.dt_txt);

        document.getElementById(`dayofweek${day+1}`).textContent = weekdays[d.getDay()];
        document.getElementById(`forecast${day+1}`).textContent = Math.round(x.main.temp);
    
        const weathericon = document.querySelector(`icon${day+1}`);
            // const imagesrc = 'https://openweathermap.org/img/w/' + jsObject.weather[0].icon + '.png';
    //rather do string interpolation below instead
    const isrc = `https://openweathermap.org/img/w/${forecast[day].weather[0].icon}.png`;
    const desc = forecast[day].weather[0].description; //delete
    // weathericon.setAttribute('src', isrc);  // focus on setAttribute()
    // weathericon.setAttribute('alt', jsObject.weather[0].description);
    document.getElementById(`icon${day+1}`).setAttribute('src', isrc);
    document.getElementById(`icon${day+1}`).setAttribute('alt', desc);
        day++;
    })
  });