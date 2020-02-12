const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');

const fs = require('fs');

/*
* Creating Test Object
*/

//output list like results from app.js
var output = [];

//Some fake data so I don't have keep going through that prompt
var boss = new Manager("Tina", "Manager", 1);
output.push(boss);
var engin = new Engineer("Sara", "Engineer", 2);
output.push(engin);
var engin2 = new Engineer("Tim", "Engineer", 4);
output.push(engin2);
var intern = new Intern("Bob", "Intern", 3);
output.push(intern);
var intern2 = new Intern("Mary", "Intern", 5);
output.push(intern2);

/*
* Breaking object up so that no row has more than 4 cards.
* If more than 4, create a new row
*/

function chunkArray(array, chunkSize) {
    return Array.from(
      { length: Math.ceil(array.length / chunkSize) },
      (_, index) => array.slice(index * chunkSize, (index + 1) * chunkSize)   
    );
  }

var newOutput = chunkArray(output, 4)

/*
* Gather HTML into a String
*/

html = null;
managerHtml = null;
engineerHtml = null;

//row html
rowOpenHtml = `
<div class="row justify-content-center mb-3">`
rowCloseHtml = `</div>`
closeFile = `
</div>
</body>
</html>`


fs.readFile("./templates/main.html", "utf8", function(error, data) {

    if (error) {
      return console.log(error);
    }

    html = data;

    fs.readFile("./templates/manager.html", "utf8", function(error, data) {

        if (error) {
            return console.log(error);
        }

        managerHtml = data;

        fs.readFile("./templates/engineer.html", "utf8", function(error, data) {

            if (error) {
                return console.log(error);
            }
    
            engineerHtml = data;
    
            fs.readFile("./templates/intern.html", "utf8", function(error, data) {

                if (error) {
                    return console.log(error);
                }
        
                internHtml = data;
        
                for (i = 0; i < newOutput.length; i++){
                    // console.log("row #: " + i);
                
                    html += rowOpenHtml;
                
                    for (k = 0; k < newOutput[i].length; k++){
                
                        if (newOutput[i][k].constructor.name==="Manager"){
                            console.log("its a manager");

                            let newCard = managerHtml;

                            let newCardName = newCard.replace("#name", newOutput[i][k].name);

                            let newCardID = newCardName.replace("#id", newOutput[i][k].id);

                            html += newCardID;
                    
                        } else if (newOutput[i][k].constructor.name==="Engineer"){
                            console.log("its an Engineer");

                            let newCard = engineerHtml;

                            let newCardName = newCard.replace("#name", newOutput[i][k].name);

                            let newCardID = newCardName.replace("#id", newOutput[i][k].id);

                            html += newCardID;
                    
                        } else if (newOutput[i][k].constructor.name==="Intern"){
                            console.log("its an intern");

                            let newCard = internHtml;

                            let newCardName = newCard.replace("#name", newOutput[i][k].name);

                            let newCardID = newCardName.replace("#id", newOutput[i][k].id);

                            html += newCardID;
                            }
                        }
                    
                    html += rowCloseHtml;
                    
                    };
                
                    html += closeFile
                
                    // console.log(html);

                    fs.writeFile('./output/TeamSummary.html', html, function(err) {

                        if (err) {
                          return console.log(err);
                        }

                        console.log("Created new HTML file");

                    });
        
            });
    
        });

    });

});