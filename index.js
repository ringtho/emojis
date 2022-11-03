let myEmojis = []
const emojiInput = document.getElementById("emoji-input")
const shiftBtn = document.getElementById("shift-btn")
const unshiftBtn = document.getElementById("unshift-btn")
const pushBtn = document.getElementById("push-btn")
const popBtn = document.getElementById("pop-btn")
const clearBtn = document.getElementById("clear-btn")

let emojisFromLocalStorage = JSON.parse(localStorage.getItem("emojis"))
if(emojisFromLocalStorage){
    myEmojis = emojisFromLocalStorage
    renderEmojis()
}

function modifyLocalStorage(arr){
    localStorage.setItem("emojis", JSON.stringify(arr))
}

function renderEmojis() {
    const emojiContainer = document.getElementById("emoji-container")
    emojiContainer.innerHTML = ""
    for (let i = 0; i < myEmojis.length; i++) {
        const emoji = document.createElement('span')
        emoji.textContent = myEmojis[i]
        emojiContainer.append(emoji)
    }
}

pushBtn.addEventListener("click", function(){   
    if (emojiInput.value) {
        myEmojis.push(emojiInput.value)
        emojiInput.value = ""
        modifyLocalStorage(myEmojis)
        renderEmojis()
    }
})

unshiftBtn.addEventListener("click", function(){
    if (emojiInput.value) {
        myEmojis.unshift(emojiInput.value)
        emojiInput.value = ""
        modifyLocalStorage(myEmojis)
        renderEmojis()
    }
})

popBtn.addEventListener("click", function(){
    myEmojis.pop()
    modifyLocalStorage(myEmojis)
    renderEmojis()
})

shiftBtn.addEventListener("click", function(){
    myEmojis.shift()
    modifyLocalStorage(myEmojis)
    renderEmojis()
})

clearBtn.addEventListener("click", function(){
    localStorage.clear()
    myEmojis = ""
    renderEmojis()
})