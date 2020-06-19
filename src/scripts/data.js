
const getJournalEntries = () => {
    return fetch("http://localhost:8088/entries").then(
        (response) => {
        
            return response.json()
        } )
    

}