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
                cartonList: req.body.cartonListR.split('\r\n').filter(e => e != ''), 
                distributionCenter: req.body.dcR
            })
            const palletToPrint = await Pallet.find({}).sort({_id: -1}).limit(1)
            console.log(palletToPrint)
            // how to get this to render WTF
            // res.render('palletLabel.ejs', {
            //         palletDC: palletToPrint.distributionCenter, 
            //         palletAcct: palletToPrint.accountName, 
            //         palletCount: palletToPrint.cartonList, 
            //         shipDate: palletToPrint.shipDate
            //     })
            }
            catch(err) {
                console.log(err)
            }
            console.log('pallet created')
    },

    palletLabel: async(req, res) => {
        try{
            //attach parameters from get router. copy binary upload boom param pull
        }
        catch(err) {
            console.log(err)
        }
    }
}

//this is main