
    const weekFile =  [
        {
          Number: "Week 1",
          Url: "./weeks/week1.html",
          Description: "Table dynamic"
         
        },
        {
          Number: "Week 2",
          Url: "https://www.google.com",
          Description: ""
        }
      ]
    
    

   /* recorrer*/
    for (let i = 0; i < weekFile.length; i++ ) {
      let Links = document.createElement('li');
      let h2 = document.createElement('h2');
      let link = document.createElement('a');
      let descrip = document.createElement('p');
      



        h2.textContent = weekFile[i].Number; 
        link.textContent = "Link: ";
        link.href = weekFile[i].Url;
        descrip.textContent = "Brief Description: " + weekFile[i].Description;
        

        Links.appendChild(h2);
        Links.appendChild(link);
        Links.appendChild(descrip);
        

        document.querySelector('div.linksW1').appendChild(Links);
    }
;
