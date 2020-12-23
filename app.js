"use strict"

const fs = require("fs");
console.log("start app");

const sortItemsByName = (a, b) => {
    if (a.name < b.name) return -1;
    else if (a.name > b.name) return 1;
    else return 0;
}

const sortCollection = collection => {
    console.log(collection);
    let sortedItems;
    if (collection.item) {
        console.log(collection.item);
        sortedItems = collection.item
            .map(item => {
            return sortCollection(item);
        })
            .sort(sortItemsByName);
        collection.item = sortedItems;
    }
    return collection;
}

const rawdata = fs.readFileSync('input.json');
const collection = JSON.parse(rawdata);
const sortedCollection = sortCollection(collection);
const result = JSON.stringify(sortedCollection);
fs.writeFileSync("output.json", result);


