// @ts-nocheck

import {readFileSync} from 'fs';


let body = readFileSync('List.json', 'utf8');
let bodyObject = JSON.parse(body);


bodyObject.lists.forEach(element => {
    console.log(`List ID is ${element.id}, \nList Name is ${element.name} \n`)
});