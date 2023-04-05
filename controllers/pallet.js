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
            res.redirect(`/pallet/label/${palletToPrint[0]._id}`)
            }
            catch(err) {
                console.log(err)
            }
            console.log('pallet created')
    },

    palletLabel: async(req, res) => {
        // console.log(req.params.id)
        try{
            const palletR = await Pallet.find({_id: req.params.id})
            // console.log(palletR, palletR[0].shipDate)
            res.render('palletLabel.ejs', {
                shipDate: palletR[0].shipDate,
                accountName: palletR[0].accountName,
                distributionCenter: palletR[0].distributionCenter,
                cartonCount: palletR[0].cartonList
            })
            
        }
        catch(err) {
            console.log(err)
        }
    }
}

//this is main