const requestURL ='https://dcastelar78byui.github.io/assignments/finalSite/personal.json';
 
fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  
  .then(function (jsonObject) {
    //console.table(jsonObject);        // temporary checking for valid response and data parsing 

    const riverguide1 = jsonObject['riverguide'];
   /* recorrer*/
    for (let i = 0; i < riverguide1.length; i++ ) {
      let card = document.createElement('section');
      let h2 = document.createElement('h2');
      let certification = document.createElement('h3');
      let year1 = document.createElement('p');
      let email1 = document.createElement('email');
      let image = document.createElement('img');

      
        h2.textContent = riverguide1[i].name;   //h2//
        image.setAttribute('src', riverguide1[i].imageurl);      //img//
        image.setAttribute('alt', riverguide1[i].name);
        certification.textContent = "Certification:     " + riverguide1[i].certification;  //p//
        year1.textContent = "Years of Experience: " + riverguide1[i].years;  //p//
        email1.textContent = "Email: " + riverguide1[i].email;  //p//


        card.appendChild(h2);
        card.appendChild(image);
        card.appendChild(certification);
        card.appendChild(year1);
        card.appendChild(email1);

        document.querySelector('div.cards').appendChild(card);  //save in div.cards//
}
});