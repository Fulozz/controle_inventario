const Item = require('../models/Item.model')

exports.registerNewItem = async (req, res) => {
    try {
        let isItem = await Item.findOne({ serial_number: req.body.serial_number });

        if (isItem.length >= 1) {
            return res.status(409).json({ message: 'Sorry! This email is already registered!' });
        }
        const newItem = new Item(req.body);
        const item = await newItem.save();
        return res.status(201).json({ message: 'Item created successfully!', item })
    } catch (error) {
        res.status(400).json({ error: error })
    }
};

exports.allItems = async(req, res) =>{
    try{
        let allItem = await Item.find()

        return allItem
    }
    catch (error) {
        res.status(400).json({ error: error })
    }
}