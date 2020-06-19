let journalEntries = []
const getJournalEntries = () => {
    return fetch("http://localhost:8088/entries").then(
        (response) => {
            response.json()
        }
    )


        .then(
            (journalArray) => {
                journalEntries = journalArray
            }

        )
}