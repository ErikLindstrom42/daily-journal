import API from './dbCalls.js'
import renderJournalEntries from './entryList.js'
import updateFields from './updateFields.js'

document.getElementById("editButton").addEventListener("click", event => {
    console.log("HAHA THIS WORKED")
    
})

const registerListeners = () => {
    
    entryLog.addEventListener("click", event => {
        console.log("you clicked on the log")
        if(event.target.id.startsWith("deleteEntry--")) {
            const entryToDelete = event.target.id.split("--")[1]
            console.log(entryToDelete)

            API.deleteEntry(entryToDelete).then(renderJournalEntries())
        }

        if(event.target.id.startsWith("editEntry--")) {
            const entrytoEdit = event.target.id.split("--")[1]
            console.log(entrytoEdit)


        }
    
        
    })
}


export default registerListeners