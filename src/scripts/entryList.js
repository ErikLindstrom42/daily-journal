const renderJournalEntries = (journalEntries) => {
    for (entry of journalEntries) {
        const journalHTML = makeJournalEntryComponent(entry)
        const journalArticalElement = document.querySelector(".entryLog")

        journalArticalElement.innerHTML += journalHTML
    }
}

// Invoke the render function
renderJournalEntries(journalEntries)