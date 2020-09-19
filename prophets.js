const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';
 
fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  
  .then(function (jsonObject) {
    //console.table(jsonObject);        // temporary checking for valid response and data parsing 

    const prophets1 = jsonObject['prophets'];
   /* recorrer*/
    for (let i = 0; i < prophets1.length; i++ ) {
      let card = document.createElement('section');
      let h2 = document.createElement('h2');
      let birthdate = document.createElement('p');
      let birthplace = document.createElement('p');
      let image = document.createElement('img');



        h2.textContent = prophets1[i].name + ' ' + prophets1[i].lastname; 
        birthdate.textContent = "Date of Birth: " + prophets1[i].birthdate;
        birthplace.textContent = "Place of Birth: " + prophets1[i].birthplace;
        image.setAttribute('src', prophets1[i].imageurl);
        image.setAttribute('alt', prophets1[i].name + ' ' + prophets1[i].lastname + '-' + [i]);


        card.appendChild(h2);
        card.appendChild(birthdate);
        card.appendChild(birthplace);
        card.appendChild(image);

        document.querySelector('div.cards').appendChild(card);
}
});

<a href="soda.html">Soda Springs</a>