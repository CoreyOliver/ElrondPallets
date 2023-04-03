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
            await Pallet.create({
                shipDate: req.body.shipDateR, 
                accountName: req.body.customerNameR, 
                cartonList: req.body.cartonListR, 
                distributionCenter: req.body.dcR
            })
            const palletToPrint = await Pallet.find({}).sort({_id: -1}).limit(1)
            //how to get this to render WTF
            res.render('palletLabel.ejs', {
                palletDC: palletToPrint.distributionCenter, 
                palletAcct: palletToPrint.accountName, 
                palletCount: palletToPrint.cartonList, 
                shipDate: palletToPrint.shipDate
            })
            console.log(palletToPrint)
            // res.render('palletBuilder.ejs')
            // console.log('Pallet Created')
        }
        catch(err) {
            console.log(err)
        }
    }
}

//this is main