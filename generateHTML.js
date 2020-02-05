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

fs.readFile("./templates/main.html", "utf8", function(error, data) {

    if (error) {
      return console.log(error);
    }
  
    console.log(data);

    
  
  });

rowOpenHtml = '<div class="row justify-content-center ">'
rowCloseHtml = '</div>'



// fs.appendFile('./output/TeamSummary.html', 'data to append', function (err) {
//     if (err) throw err;
//     console.log('Saved!');
//   });



/* Use this to Iterate through multiple rows
//how many rows do I need in my html?
var neededRows = Math.ceil(output.length/4)

while (neededRows > 0){
    //append rowOpenHtml
    
    //iterate through first row

    //append rowCloseHtml
    neededRows--;
}

// for (i = 0; i < output.length; i++){
//     // console.log(output[i]);
//     // console.log(output[i].constructor.name);
//     if (output[i].constructor.name==="Manager"){
//         console.log("its a manager");
//     } 
// }
*/