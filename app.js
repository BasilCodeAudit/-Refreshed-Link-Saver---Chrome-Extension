let storedLinks = []

const textInput = document.getElementById("input-el")
const saveInputBtn = document.getElementById("input-btn")
const listContainer = document.getElementById("ul-el")
const clearBtn = document.getElementById("delete-btn")
const saveTabBtn = document.getElementById("tab-btn")

const cachedLinks = JSON.parse(localStorage.getItem("storedLinks"))

if (cachedLinks) {
    storedLinks = cachedLinks
    displayLinks(storedLinks)
}

saveTabBtn.addEventListener("click", function() {
    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
        storedLinks.push(tabs[0].url)
        localStorage.setItem("storedLinks", JSON.stringify(storedLinks))
        displayLinks(storedLinks)
    })
})

saveInputBtn.addEventListener("click", function() {
    if (textInput.value.trim() !== "") {
        storedLinks.push(textInput.value)
        textInput.value = ""
        localStorage.setItem("storedLinks", JSON.stringify(storedLinks))
        displayLinks(storedLinks)
    }
})

clearBtn.addEventListener("dblclick", function() {
    localStorage.clear()
    storedLinks = []
    displayLinks(storedLinks)
})

function displayLinks(links) {
    let listItems = ""
    for (let i = 0; i < links.length; i++) {
        listItems += `
            <li>
                <a href="${links[i]}" target="_blank">${links[i]}</a>
            </li>
        `
    }
    listContainer.innerHTML = listItems
}
