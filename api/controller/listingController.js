const PropertyModel = require("../models/PropertyModel")

const createListing = async (req, res) => {
    const { propname, desc, imageurls, userid, furnished, parking, beds, price, address, bathrooms, type } = req.body;

    const user = await PropertyModel.create({
        propname, desc, imageurls, userid, furnished, parking, beds, price, address, bathrooms, type
    })
    res.status(201).json({ user });
}

const getListing = async (req, res) => {
    try {
        const data = await PropertyModel.find({})
        res.status(200).json(data)
    } catch (error) {
        console.log(error)
        res.status(500).json("error occured")
    }
}



module.exports = {
    createListing,
    getListing
}