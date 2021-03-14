// ========= THIS FILE ONLY USED ON API-TEST.HTML AND IS NOT SUBMITTED ======= //

const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&appid=9d82d746ab9b4a97a81f74aae8a3582b";
fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {console.log(jsObject);

    const curtemp = document.querySelector('#current-temp');
    const windy = document.querySelector('#breezepace');
    const iconsource = document.querySelector('#imagesrc');
    const weathericon = document.querySelector('#icon');

    curtemp.innerHTML = jsObject.main.temp;
    windy.innerHTML = jsObject.wind.speed;

    iconsource.textContent = `https://openweathermap.org/img/w/${jsObject.weather[0].icon}.png`;

    // const imagesrc = 'https://openweathermap.org/img/w/' + jsObject.weather[0].icon + '.png';
    //rather do string interpolation below instead
    const isrc = `https://openweathermap.org/img/w/${jsObject.weather[0].icon}.png`
    
    weathericon.setAttribute('src', isrc);  // focus on setAttribute()
    weathericon.setAttribute('alt', jsObject.weather[0].description);

  });