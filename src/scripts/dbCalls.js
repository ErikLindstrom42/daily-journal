const url = "http://localhost:8088"




const API = {
    getJournalEntries() {
    return fetch(`${url}/entries`).then(
        (response) => {
        
            return response.json()
            console.log(get)
        } )
    
    },


  saveJournalEntry(newEntryObject) {
        return fetch(`${url}/entries`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newEntryObject)
        })
    }
}
export default API
