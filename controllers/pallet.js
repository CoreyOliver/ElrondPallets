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
    }
}