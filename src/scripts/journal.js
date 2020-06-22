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

let journalDate
let conceptsCovered
let entry
let mood



// journalDate = document.querySelector("#journalDate").value
// conceptsCovered = document.querySelector("#conceptsCovered").value
// entry = document.querySelector("#journalEntry").value
// mood = document.querySelector("#mood").value

const journalTestObject = newJournalObject(journalDate,conceptsCovered,entry,mood)





const recordButtonFunction = () =>  {
    
    
    const journalDate = document.querySelector("#journalDate").value
    const conceptsCovered = document.querySelector("#conceptsCovered").value
    const entry = document.querySelector("#journalEntry").value
    const mood = document.querySelector("#mood").value
    
    const finalEntry = newJournalObject(journalDate,conceptsCovered,entry,mood)
    API.saveJournalEntry(finalEntry).then(() => {
        API.getJournalEntries()
    }).then((domObject) => {
        makeJournalEntryComponent(domObject)
    })
}
document.getElementById("recordButton").addEventListener("click", recordButtonFunction);
// if(date === "" || concepts entry === "" 












// document.getElementById("recordButton").addEventListener("click", displayDate);

// function displayDate() {
//   alert("Eureka")
// }
