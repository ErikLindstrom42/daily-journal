const updateFields = (journalData) => {
    const hiddenId = document.querySelector("#entryId")
    const journalDate = document.querySelector("#journalDate")
    const conceptsCovered = document.querySelector("#conceptsCovered")
    const journalEntry = document.querySelector("#journalEntry")
    const mood = document.querySelector("#mood")

hiddenId.value = journalData.hiddenId
journalDate.value = journalData.journalDate
conceptsCovered.value = journalData.conceptsCovered
journalEntry.value = journalData.journalEntry
mood.value = journalData.mood

}

export default updateFields