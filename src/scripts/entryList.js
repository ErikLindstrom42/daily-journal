import makeJournalEntryComponent from './entryComponent.js'

const renderJournalEntries = (journalEntries) => {


    document.querySelector(".entryLog").innerHTML = ""

    for (const entry of journalEntries) {
        const journalHTML = makeJournalEntryComponent(entry)
        const journalArticalElement = document.querySelector(".entryLog")

        journalArticalElement.innerHTML += journalHTML
        console.log(entry)
    }
}
export default renderJournalEntries