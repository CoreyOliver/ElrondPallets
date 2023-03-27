//in line function call to add line for pallet builder
function addLineForCarton(e) {
    let clone = e.parentNode.cloneNode(true)
    clone.innerText.value = ''
    e.parentNode.after(clone)
    // console.log(clone)
}

function clickThatButton(e) {
    if(e.key === 'Enter') {
        let myButton = e.srcElement.parentNode.children[1]
        let childPlacement = (myButton.parentNode.parentNode.children.length)
        //on enter select the button to add another line
        myButton.click()
        
        myButton.parentNode.parentNode.children[childPlacement].children[0].focus()
    }
}

console.log('connected')