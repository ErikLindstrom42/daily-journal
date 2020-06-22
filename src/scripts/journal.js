// const { getJournalEntries } = require("./data")

/*
    Main application logic that uses the functions and objects
    defined in the other JavaScript files.

    Change the fake variable names below to what they should be
    to get the data and display it.
*/

import renderJournalEntries from './entryList.js'
import API from './data.js'
import newJournalObject from './createEntry.js'
import makeJournalEntryComponent from './entryComponent.js'

API.getJournalEntries()
.then((response) => renderJournalEntries(response))
//objectWithGetterMethod.methodToGetData().then(functionThatRendersData)





// const recordButtonFunction = () =>  {
    
    
//     const journalDate = document.querySelector("#journalDate").value
//     const conceptsCovered = document.querySelector("#conceptsCovered").value
//     const entry = document.querySelector("#journalEntry").value
//     const mood = document.querySelector("#mood").value
    
//     const finalEntry = newJournalObject(journalDate,conceptsCovered,entry,mood)
//  API.saveJournalEntry(finalEntry).then(API.getJournalEntries()
// .then(makeJournalEntryComponent()))
// console.log("HELP ME")

// }
document.getElementById("recordButton").addEventListener("click", event => {
    const journalDate = document.querySelector("#journalDate").value
    const conceptsCovered = document.querySelector("#conceptsCovered").value
    const entry = document.querySelector("#journalEntry").value
    const mood = document.querySelector("#mood").value
    
//latest
const finalEntry = newJournalObject(journalDate,conceptsCovered,entry,mood)
API.saveJournalEntry(finalEntry).then(API.getJournalEntries())
.then(makeJournalEntryComponent())
} );
// if(date === "" || concepts entry === "" 



// const finalEntry = newJournalObject(journalDate,conceptsCovered,entry,mood)
// API.saveJournalEntry(finalEntry).then((API.getJournalEntries()
// .then(makeJournalEntryComponent(domObject))))

// //latest
// const finalEntry = newJournalObject(journalDate,conceptsCovered,entry,mood)
// API.saveJournalEntry(finalEntry).then(API.getJournalEntries())
// .then(makeJournalEntryComponent())





// document.getElementById("recordButton").addEventListener("click", displayDate);

// function displayDate() {
//   alert("Eureka")
// }
