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
    document.querySelector(".alertmessage").textContent = jsObject.alerts[0].description;
    

    // To change the display property in JavaScript, consider the use of .style.display = "block" in a selection structure 