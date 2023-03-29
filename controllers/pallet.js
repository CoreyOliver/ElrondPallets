const Pallet = require('../models/Pallet')

module.exports = {
    palletHome: async (req, res) =>{
        console.log(req.user)
        try{
            res.render('palletHome.ejs')
        }
        catch(err) {
            console.log(err)
        }
    },
    palletBuildHome: async (req, res) =>{
        console.log(req.user)
        try{
            res.render('palletHeader.ejs')
        }
        catch(err) {
            console.log(err)
        }
    },
    createPalletHeader: async (req, res) => {
        try{
            await console.log(req.body.customerNameR, req.body.shipDateR)
            console.log('Pallet Header Updated')
            res.render('palletHeader.ejs')
        }
        catch(err) {
            console.log(err)
        }
    }
}

//this is main