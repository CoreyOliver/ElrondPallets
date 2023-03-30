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
            res.render('palletBuilder.ejs')
        }
        catch(err) {
            console.log(err)
        }
    },

    createPallet: async (req, res) => {
        try{
            await Pallet.create({shipDate: req.body.shipDateR, accountName: req.body.customerNameR, cartonList: req.body.cartonListR})
            console.log(req.body)
            // res.render('palletBuilder.ejs')
            // console.log(req.body.shipDateR, req.body.customerNameR, req.body.cartonListR)
        }
        catch(err) {
            console.log(err)
        }
    }
}

//this is main