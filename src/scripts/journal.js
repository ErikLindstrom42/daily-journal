// const { getJournalEntries } = require("./data")

/*
    Main application logic that uses the functions and objects
    defined in the other JavaScript files.

    Change the fake variable names below to what they should be
    to get the data and display it.
*/

import renderJournalEntries from './entryList.js'
import getJournalEntries from './data.js'


getJournalEntries()
.then((response) => renderJournalEntries(response))
//objectWithGetterMethod.methodToGetData().then(functionThatRendersData)

