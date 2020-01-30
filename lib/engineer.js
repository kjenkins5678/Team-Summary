const axios = require('axios')
const Employee = require('./employee');

class Engineer extends Employee {
    constructor(name, title, id, githubName){
        super(name, title, id);
        this.githubName = githubName;
    }
    getRole() {
        return 'Engineer';
      }

    getGithub() {
        const queryUrl = `https://api.github.com/users/${this.githubName}`;
        axios.get(queryUrl)
            .then(function (response) {
                // handle success
                console.log(response.data.html_url);
            })
            .catch(function (error) {
                // handle error
                console.log("get github url failed");

            })
    }
}

module.exports = Engineer;