const btn = document.getElementById('button');
const rainbow = ['red','orange','yellow','green','blue','rebeccapurple','violet'];
function change() {      
    document.body.style.background = rainbow[Math.floor(7*Math.random())];
}
btn.addEventListener('click', change);


const requestURL = 'https://github.com/dcastelar78byui/WDD330/blob/master/intro/week.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  
  .then(function (jsonObject) {
    //console.table(jsonObject);        // temporary checking for valid response and data parsing 

    const weekFile = jsonObject['week'];
   /* recorrer*/
    for (let i = 0; i < weekFile.length; i++ ) {
      let card = document.createElement('section');
      let h2 = document.createElement('h2');
      let link = document.createElement('a');
      let descrip = document.createElement('p');
      



        h2.textContent = weekFile[i].Number; 
        link.textContent = "Link: " + weekFile[i].Url;
        descrip.textContent = "Place of Birth: " + weekFile[i].description;
        

        card.appendChild(h2);
        card.appendChild(link);
        card.appendChild(descrip);
        

        document.querySelector('div.cards').appendChild(card);
    }
});