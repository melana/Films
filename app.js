const fs = require('fs');
const path = require('path');

const csvtojson = require('csvtojson');
const csvFilePath = 'films.csv';

csvtojson({ delimiter: ';'}).fromFile(csvFilePath)
    .then(films => {
        console.log(films);
        fs.writeFileSync("out.json", JSON.stringify(films, 'utf8', function(err){console.log(err);}))
    }).catch(err => {
        console.log(err);
});


