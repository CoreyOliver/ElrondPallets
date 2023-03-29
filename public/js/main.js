//in line function call to add line for pallet builder

// add carton test one
// function addCarton() {
//     const cartonIdToAdd = document.createElement('li')
//     const cartonID = document.getElementById('cartonIdAdd').value
//     const textNode = document.createTextNode(cartonID)
//     cartonIdToAdd.appendChild(textNode)
//     if(cartonID != '') {
//     document.getElementById('cartonListS').appendChild(cartonIdToAdd)
//     }
//     document.getElementById('cartonIdAdd').value = ''    
// }


function addCarton() {
    
}
function clickThatButton(e) {
    if(e.key === 'Enter') {
        const myButton = document.getElementById('cartonAddButton')
        myButton.click()
    }
}

function testPost() {
    const cartonListR = document.getElementById('cartonListS').value
    console.log(cartonListR)
}
// async function postPallet(e) {
//     const shipDateR = document.getElementById('shipDateS').value
//     const customerNameR = document.getElementById('customerNameS').value
//     const cartonListR = 
//     try{
//         const response
//     }
// }
