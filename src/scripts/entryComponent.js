
const makeJournalEntryComponent = (journalEntry) => {
    // Create your own HTML structure for a journal entry
    return `
<div>${journalEntry.concept}</div>
<div>${journalEntry.entry}</div>
<div>${journalEntry.date}</div>
<div>${journalEntry.mood}</div>
`
}

export default makeJournalEntryComponent