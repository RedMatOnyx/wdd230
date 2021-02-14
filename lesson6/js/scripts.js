// ============== HAMBURGER MENU ================= //
const hambutton = document.querySelector('.ham');
const mainnav = document.querySelector('.navigation');
hambutton.addEventListener('click', () => {mainnav.classList.toggle('responsive')}, false);
// To solve the mid resizing issue with responsive class on
window.onresize = () => {if (window.innerWidth > 592) mainnav.classList.remove('responsive')};

// ============== CURRENT DATE ================= //
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

// ============== COPYRIGHT YEAR (must follow current date script above)================= //
document.getElementById("copyrightYear").innerHTML = todaysdate.getFullYear();