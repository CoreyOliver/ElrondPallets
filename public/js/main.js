//in line function call to add line for pallet builder

function clickThatButton(e) {
    if(e.key === 'Enter') {
        const myButton = document.getElementById('cartonAddButton')
        myButton.click()
    }
}

async function createPalletHeader() {
    const shipDateR = document.getElementById('shipDateS').value
    const customerNameR = document.getElementById('customerNameS').value
    try{
        const request = await fetch('/pallet/buildPallet/createPallet', {
            method: 'POST',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                'shipDateR': shipDateR,
                'customerNameR' : customerNameR
            })
        })
        const data = await response.json()
        
    }
    catch(err) {
        console.log(err)
    }
    // console.log(shipDateR, customerNameR)
}
