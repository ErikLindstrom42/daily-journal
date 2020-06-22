
const makeJournalEntryComponent = (journalEntry) => {
    // Create your own HTML structure for a journal entry
    return `
<div>${journalEntry.conceptsCovered}</div>
<div>${journalEntry.entry}</div>
<div>${journalEntry.journalDate}</div>
<div>${journalEntry.mood}</div>
`
}

export default makeJournalEntryComponent