//Pulls data from fields

const newJournalObject = (date, concept, entry, mood) => {
    const newEntryObject = {
        journalDate: date,
        conceptsCovered: concept,
        entry: entry,
        mood: mood
    }
    return newEntryObject
}

export default newJournalObject














// const entryDate = document.querySelector(".journalDate").value
// const conceptsCovered = document.querySelector(".conceptsCovered").value
// const journalEntry = document.querySelector(".journalEntry").value
// const mood = document.querySelector(".mood").value
// alert(newEntryObject)