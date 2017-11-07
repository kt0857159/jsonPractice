const json = require('json-file');
const _ = require('lodash')

const file = json.read('./data.json');
console.log('Item 1:');
_.forEach(file.data.items[0], function(value){
    console.log(value);
});
console.log('Item 2:');
_.forEach(file.data.items[1], function(value){
    console.log(value);
});