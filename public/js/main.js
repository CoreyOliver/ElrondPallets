//in line function call to add line for pallet builder

function clickThatButton(e) {
    if(e.key === 'Enter') {
        const myButton = document.getElementById('cartonAddButton')
        myButton.click()
    }
}

function textAreaAdjust(element) {
    element.style.height = '1px'
    element.style.height = (16+element.scrollHeight)+'px'
}

async function createPalletHeader() {
    const shipDateR = document.getElementById('shipDateS').value
    const customerNameR = document.getElementById('customerNameS').value
    const cartonListR = document.getElementById('cartonListS').value.split('\n').filter(e => e != '')
    try{
        const req = await fetch('/pallet/buildPallet/createPallet', {
            method: 'POST',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                'shipDateR': shipDateR,
                'customerNameR' : customerNameR,
                'cartonListR' : cartonListR
            })
        })
        const data = await res.json()
        
    }
    catch(err) {
        console.log(err)
    }
    // console.log(shipDateR, customerNameR)
}
