const requestURL = "json/directory.json";

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing
    const people = jsonObject['people']; // inserted line from virtual lab
    // for (let i = 0; i < prophets.length; i++ ) { // refactored below
    people.forEach(person => {
    let card = document.createElement('section');
    let h3 = document.createElement('h2');
    let p1 = document.createElement('p');
    let p2 = document.createElement('p');
    // let image = document.createElement('img'); //taken out
    // h2.textContent = prophets[i].name + ' ' + prophets[i].lastname; / use string interpolation instead, below

    //add details and attributes
    // h2.innerHTML = `${prophets[i].name} <span class="highlight">${prophets[i].lastname}</span> - Children: ${prophets[i].numofchildren}`;
    h3.innerHTML = `${person.name}`; // </span> - Children: ${prophet.numofchildren}`;
    p1.innerHTML = `Office: ${person.office}`;
    p2.innerHTML = `Email: ${person.email}`;
    // image.setAttribute('src', prophets[i].imageurl);
    // image.setAttribute('src', prophet.imageurl);
    // image.setAttribute('alt', `Official Portrait of ${prophets[i].name} ${prophets[i].lastname}`);
    // image.setAttribute('alt', `Official Portrait of ${prophet.name} ${prophet.lastname} - ${prophet.order}`); //taken out
// actually add the content to the container
    card.appendChild(h3);
    card.appendChild(p1);
    card.appendChild(p2);
    // card.appendChild(image); //taken out

    document.querySelector('div.cards').appendChild(card);

    }); //added parenthesis and semi-colon per refactoring function above

});
