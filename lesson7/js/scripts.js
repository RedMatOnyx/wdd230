// ::::::::::CURRENT DATE ::::::::::::::::
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

// ::::::::::HAMBURGER MENU ::::::::::::::::
const hambutton = document.querySelector('.ham');
const mainnav = document.querySelector('.navigation');

hambutton.addEventListener('click', () => {mainnav.classList.toggle('responsive')}, false);

// To solve the mid resizing issue with responsive class on
window.onresize = () => {if (window.innerWidth > 760) mainnav.classList.remove('responsive')};

// :::::::::::PANCAKE NOTICE ON FRIDAYS ::::::::::::::::::::
let day = new Date().getDay();
if (day == 5) {
    // document.querySelector(".message").style.backgroundColor = "pink";
    // document.querySelector(".message").style.visibility = "visible";

document.querySelector(".message").style.display = "block";
}
// To change the display property in JavaScript, consider the use of .style.display = "block" in a selection structure 
// where the condition looks at the day of the week through the Date() object and getDay() method.

// ::::::::::::::WEB FONT LOADER ::::::::::::::::::::
WebFont.load({google: {families: ['Kufam']}});
          //  'Montserrat+Alternates:wght@800&family=Noto+Serif&display=swap'

// :::::::::::::::WIND CHILL CALCULATION ::::::::::::::::
// temporarily removed for this week


// ::::::::::::CONTACT SYMBOLS :::::::::::::::::::::::::
src='https://kit.fontawesome.com/a076d05399.js'

// :::::::::::::PROGRESSIVE LAZY LOAD GALLERY IMAGES :::::::::::::::::
// found in lazy.js