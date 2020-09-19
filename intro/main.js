
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
      let Links = document.createElement('section');
      let h2 = document.createElement('h2');
      let link = document.createElement('a');
      let descrip = document.createElement('p');
      



        h2.textContent = weekFile[i].Number; 
        link.textContent = "Link: " + weekFile[i].Url;
        descrip.textContent = "brief description " + weekFile[i].Description;
        

        Links.appendChild(h2);
        Links.appendChild(link);
        Links.appendChild(descrip);
        

        document.querySelector('div.linksW1').appendChild(Links);
    }
;