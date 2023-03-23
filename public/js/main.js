//in line function call to add line for pallet builder
function addLineForCarton(e) {
    let clone = e.parentNode.cloneNode(true)
    e.parentNode.after(clone)
    console.log(clone)
}

function clickThatButton(e) {
    if(e.key === 'Enter') {
        // e.preventDefault()
        // e.lastChild().click()
        // console.log(e.parentNode.lastChild)
    }
}

console.log('connected')