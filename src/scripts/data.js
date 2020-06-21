


const API = {
    getJournalEntries:  () => {
    return fetch("http://localhost:8088/entries").then(
        (response) => {
        
            return response.json()
        } )
    
    },


  saveJournalEntry: (newEntryObject) => {
        return fetch("http://localhost:8088/entries", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newEntryObject)
        })
    }
}

//export default API
export default API

