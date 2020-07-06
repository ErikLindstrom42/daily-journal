import renderJournalEntries from './entryList.js'
import API from './dbCalls.js'
import newJournalObject from './createEntry.js'
import makeJournalEntryComponent from './entryComponent.js'

//objectWithGetterMethod.methodToGetData().then(functionThatRendersData)










API.getJournalEntries()
.then((response) => renderJournalEntries(response))



const recordNew = () => {
    const journalDate = document.querySelector("#journalDate").value
    const conceptsCovered = document.querySelector("#conceptsCovered").value
    const entry = document.querySelector("#journalEntry").value
    const mood = document.querySelector("#mood").value
    
    
    
    const finalEntry = newJournalObject(journalDate, conceptsCovered, entry, mood)
    const allEntries = () => {
        API.getJournalEntries()
        .then((entries) => {
            renderJournalEntries(entries)
        })
    }
    
    API.saveJournalEntry(finalEntry)
    .then(() => {
        allEntries()
        
    })
}

document.getElementById("recordButton").addEventListener("click", recordNew)










// const recordButtonFunction = () =>  {
    
    
    //     const journalDate = document.querySelector("#journalDate").value
    //     const conceptsCovered = document.querySelector("#conceptsCovered").value
    //     const entry = document.querySelector("#journalEntry").value
    //     const mood = document.querySelector("#mood").value
    
    //     const finalEntry = newJournalObject(journalDate,conceptsCovered,entry,mood)
    //  API.saveJournalEntry(finalEntry).then(API.getJournalEntries()
    // .then(makeJournalEntryComponent()))
    // console.log("HELP ME")





// const finalEntry = newJournalObject(journalDate,conceptsCovered,entry,mood)
// API.saveJournalEntry(finalEntry).then((API.getJournalEntries()
// .then(makeJournalEntryComponent(domObject))))

// //latest
// const finalEntry = newJournalObject(journalDate,conceptsCovered,entry,mood)
// API.saveJournalEntry(finalEntry).then(API.getJournalEntries())
// .then(makeJournalEntryComponent())




