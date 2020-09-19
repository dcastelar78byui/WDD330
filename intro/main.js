
    const weekFile =  [
        {
          Number: "Week 1",
          Url: "www.google.com",
          Description: "Table dynamic"
         
        },
        {
          Number: "Week 2",
          Url: "www.facebook.com",
          Description: "Table dynamic 2nd part"
        }
      ]
    
    

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