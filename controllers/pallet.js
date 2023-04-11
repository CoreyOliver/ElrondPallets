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
            console.log(req.body)
            await Pallet.create({
                shipDate: req.body.shipDateR,
                accountName: req.body.customerNameR, 
                cartonList: req.body.cartonListR.split('\r\n').filter(e => e != ''),
                distributionCenter: req.body.dcR
            })
            const palletToPrint = await Pallet.find({}).sort({_id: -1}).limit(1)
            console.log(palletToPrint)
            res.redirect(`/pallet/label/${palletToPrint[0]._id}`)
            }
            catch(err) {
                console.log(err)
            }
            console.log('pallet created')
    },

    palletLabel: async(req, res) => {
        try{
            const palletR = await Pallet.find({_id: req.params.id})
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
    },

    recCustomer: async(req, res) => {
        try {
            res.render('recCustomerList.ejs')
        }
        catch(err) {
            console.log(err)
        }
    },

    recCustomerDate: async(req,res) => {
        try {
            const datesToShip = await Pallet.aggregate([
                {$match: {
                    accountName: req.params.customerName
                }},

                {$group : {
                    _id: '$shipDate',
                    accountName: {$first: '$accountName'},
                    totalPallets: {$count: {}}
                }}
            ])
            console.log(datesToShip)
            res.render('recCustDateList.ejs' , {
                pallets: datesToShip
            })
            console.log(datesToShip)
        }
        catch(err) {
            console.log(err)
        }
    },

    recCustDatePalletList: async(req, res) => {
        try{
            const palletsAgg = await Pallet.aggregate([
                    {$match : {
                        accountName: req.params.customerName,
                        shipDate: req.params.shipDate
                    }},      
                    {$group : {
                        _id: '$distributionCenter',
                        palletCount: {$count: {}},
                        totalCount: {$sum: {$size: "$cartonList"}}
                    }},
                    {$sort : {
                        _id: -1
                    }}
            ])
            const palletsToCheck = await Pallet.aggregate([{
                $match: {
                    accountName: req.params.customerName,
                    shipDate: req.params.shipDate
                }

            }])
            console.log(palletsToCheck, palletsAgg)
            res.render('palletList.ejs', {
                pallets: palletsToCheck,
                palletsAgg: palletsAgg
            })
        }
        catch(err){
            console.log(err)
        }
    }


}

