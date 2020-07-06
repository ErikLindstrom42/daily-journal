
const makeJournalEntryComponent = (journalEntry) => {
    // Create your own HTML structure for a journal entry
    return `
<div>${journalEntry.conceptsCovered}</div>
<div>${journalEntry.entry}</div>
<div>${journalEntry.journalDate}</div>
<div>${journalEntry.mood}</div>
<button id="editEntry--${journalEntry.id}">Edit</button>
<button id="deleteEntry--${journalEntry.id}">Delete</button>
`
}

export default makeJournalEntryComponent