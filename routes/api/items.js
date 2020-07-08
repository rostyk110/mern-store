const express = require('express')
const router = express.Router()
const auth = require('../../middleware/auth')

// Item Model
const Item = require('../../models/Item')

// @route   GET api/items
// @desc    Get All items
// @access  Public
router.get('/', (req, res) => {
    Item.find()
        .sort({date: -1})
        .then(items => {
            res.json(items)
        })
        .catch(e => {
            console.log(e)
        })
})

// @route   POST api/items
// @desc    Create An Item
// @access  Private
router.post('/', auth,(req, res) => {
    const newItem = new Item({
        name: req.body.name
    })

    newItem.save().then(item => res.json(item))
})

// @route   DELETE api/items
// @desc    Delete An Item
// @access  Private
router.delete('/:id', auth,(req, res) => {
    Item.findOneAndDelete({
        _id: req.params.id
    })
        .then(() => res.json({success: true}))
        .catch(() => res.json({success: false}))
})

module.exports = router
