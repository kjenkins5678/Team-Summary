const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');

const fs = require('fs');

//output list like results from app.js
var output = [];

//Some fake data so I don't have keep going through that prompt
var boss = new Manager("Tina", "Manager", 1);
output.push(boss);
var engin = new Engineer("Sara", "Engineer", 2);
output.push(engin);
// var engin2 = new Engineer("Tim", "Engineer", 4);
// output.push(engin2);
var intern = new Intern("Bob", "Intern", 3);
output.push(intern);
// var intern2 = new Intern("Mary", "Intern", 5);
// output.push(intern2);

//html needed to patch the peices together

rowOpenHtml = `
<div class="row justify-content-center ">`
rowCloseHtml = `</div>`
closeFile = `
</div>
</body>
</html>`

//how many rows do I need in my html?

// fs.readFile("./templates/main.html", "utf8", function(error, data) {

//     if (error) {
//       return console.log(error);
//     }
  
//     fs.writeFile('./output/TeamSummary.html', data, function(err) {

//       if (err) {
//         return console.log(err);
//       }

//       console.log("Created File!");

//       // Use this to Iterate through multiple rows

//       while (neededRows > 0){
//           //append rowOpenHtml
//           fs.appendFile('./output/TeamSummary.html', rowOpenHtml, function(err){
//             if (err){
//               return console.log(err);
//             }

//             console.log("Added row open html to file");
            
//           });

//           //iterate through first row


//           //append rowCloseHtml
//           fs.appendFile('./output/TeamSummary.html', rowCloseHtml, function(err){
//             if (err){
//               return console.log(err);
//             }
    
//             console.log("Added row close html to file");
//           });

//           //Decrement needed rows
//           neededRows--;
//       }

//       fs.appendFile('./output/TeamSummary.html', closeFile, function(err){
//         if (err){
//           return console.log(err);
//         }

//         console.log("Added closing html to file");
//       });
      
//     });
//   });


function writeCard(cardtype, i){
  fs.readFile("./templates/" + cardtype + ".html", "utf8", function(error, data) {

    if (error) {
      return console.log(error);
    }

    var res = data.replace("#name", output[i].name);
    res = res.replace("#id", output[i].id);

    fs.appendFile('./output/TeamSummary.html', res, function(err){
      if (err){
        return console.log(err);
      }

      console.log("Added card closing html to file");

    });
  });
};

for (i = 0; i < output.length; i++){
    if (output[i].constructor.name==="Manager"){
      console.log("its a manager");
      let cardtype = "intern"
      writeCard(cardtype, i);

    } else if (output[i].constructor.name==="Engineer"){
      console.log("its an Engineer");
      let cardtype = "engineer"
      writeCard(cardtype, i);

    } else if (output[i].constructor.name==="Intern"){
      console.log("its an intern");
      let cardtype = "intern"
      writeCard(cardtype, i);

    }
}