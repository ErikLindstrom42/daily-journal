const journalEntries = [
    {
        "concept": "Array methods",
        "date": "07/24/2018",
        "entry": "We learned about array methods, but only forEach made sense",
        "mood": "Ok"
    }
]

/*
    Purpose: To create, and return, a string template that
    represents a single journal entry object as HTML

    Arguments: journalEntry (object)
*/
const makeJournalEntryComponent = (journalEntry) => {
    // Create your own HTML structure for a journal entry
    return `
 <div>${journalEntry.concept}</div>
 <div>${journalEntry.entry}</div>
 <div>${journalEntry.date}</div>
 <div>${journalEntry.mood}</div>
    `
}

/*
    Purpose: To render all journal entries to the DOM

    Arguments: entries (array of objects)
*/
const renderJournalEntries = (entries) => {
for(entry of journalEntries) {
    const journalHTML = makeJournalEntryComponent(entry)
    const journalArticalElement = document.querySelector(".entryLog")

    journalArticalElement.innerHTML += journalHTML
}
}

// Invoke the render function
renderJournalEntries(journalEntries)