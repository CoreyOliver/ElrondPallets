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
    // createPallet: async (req, res) => {
    //     try{
    //         await Pallet.create({shipDate: req.body.shipDateR, accountName: req.body.customerNameR, cartonList: []})
    //         console.log(res.selected_item._id)
    //         res.render('palletBuilder.ejs')
    //     }
    //     catch(err) {
    //         console.log(err)
    //     }
    // }

    createPallet: async (req, res) => {
    try{
        await Pallet.create({shipDate: req.body.shipDateR, accountName: req.body.customerNameR, cartonList: req.body.cartonListR})
        res.render('palletBuilder.ejs')
        // console.log(req.body.shipDateR, req.body.customerNameR, req.body.cartonListR)
    }
    catch(err) {
        console.log(err)
    }
    }
}

//this is main