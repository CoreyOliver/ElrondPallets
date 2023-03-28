//in line function call to add line for pallet builder
function addCarton() {
    const cartonIdToAdd = document.createElement('li')
    const cartonID = document.getElementById('cartonIdAdd').value
    const textNode = document.createTextNode(cartonID)
    cartonIdToAdd.appendChild(textNode)
    if(cartonID != '') {
    document.getElementById('cartonListS').appendChild(cartonIdToAdd)
    }
    document.getElementById('cartonIdAdd').value = ''    
}

function clickThatButton(e) {
    if(e.key === 'Enter') {
        const myButton = document.getElementById('cartonAddButton')
        myButton.click()
    }
}

async function postPallet(e) {
    const shipDateR = 
    const customerNameR = 
    const cartonListR = 
    try{
        const response
    }
}
