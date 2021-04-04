const express = require('express')
const router = express.Router()
const appleHandle = require('./models/AppleModel')

router.get('/', async (req, res) => {
    try{
        const appleEx = await appleHandle.find();
        res.json(appleEx);
    }
    catch(er)
    {
        console.log(' error : ' + er)
    }

})

router.post('/', async (req, res) => {
    console.log('object ..', req.body.name)
    const appleExEntry  = new appleHandle({
        name: req.body.name,
        tech: req.body.tech,
        sub: req.body.sub
    })
    try {        
        const appleExEntryRes = await appleExEntry.save();
        res.json(appleExEntryRes);
    }
    catch(er)
    {
        console.log(' error : ' + er)
    }

})

module.exports = router