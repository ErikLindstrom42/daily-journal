const renderJournalEntries = (journalEntries) => {
    console.log(journalEntries)
    for (entry of journalEntries) {
        const journalHTML = makeJournalEntryComponent(entry)
        const journalArticalElement = document.querySelector(".entryLog")

        journalArticalElement.innerHTML += journalHTML
        console.log(entry)
    }
}

// Invoke the render function
