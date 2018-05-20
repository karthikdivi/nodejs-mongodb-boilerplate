var express = require('express');
var router = express.Router();
var db = require('../db');

// create
router.post('/', async (req, res) => {
    await db.collection('users').save(req.body)
    res.send('success')
})

// read
router.get('/:id', async (req, res) => {
    var userObj = await db.collection('users').findOne({ _id : req.params.id })
    res.send(userObj)
});

// update
router.put('/', async (req, res) => {
    await db.collection('users').save(req.body)
    res.send('success')
})

// delete
router.delete('/:id', async (req, res) => {
    await db.collection('users').deleteOne({ _id : req.params.id });
    res.send('Deleted Successfully')
})

module.exports = router;
