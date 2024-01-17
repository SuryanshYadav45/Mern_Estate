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
const userListing = async (req, res) => {
    try {

        const data = await PropertyModel.find({ userid: req.params.id });
        data != 0 ? res.status(200).json(data) : res.status(404).json("no listing found");


    } catch (error) {
        console.log(error)
        res.status(500).json("error occured")
    }
}

const deleteListing = async (req, res) => {
    try {
        const { userid } = req.body;
        const property = await PropertyModel.findById(req.params.id)
        if (!property) {
            res.status(404).json("no property found")
        }

        if (userid != property.userid) {
            res.status(403).json("You can only delete the listing created by you")
        }
        await PropertyModel.findByIdAndDelete(req.params.id);
        res.status(200).json("property deleted successfully");


    } catch (error) {
        console.log(error)
        res.status(500).json("error occured")
    }
}
const updateListing = async (req, res) => {
    try {
        const { userid } = req.headers;
        const id = req.params.id
        const property = await PropertyModel.findById(req.params.id)
        if (!property) {
            res.status(404).json("no property found")
        }

        if (userid != property.userid) {
            res.status(403).json("You can only delete the listing created by you")
        }
        const updatedData = await PropertyModel.findByIdAndUpdate(id, req.body, { new: true })
        res.status(200).json(updatedData);


    } catch (error) {
        console.log(error)
        res.status(500).json("error occured")
    }
}
const getUserListing = async (req, res) => {
    const listing = await PropertyModel.findById(req.params.id);

    listing ? res.status(200).json(listing) : res.status(404).json("no listing found");

}
const searchListing = async (req, res) => {
    const searchTerm = req.query.q;
    try {
        const searchRegex = new RegExp(searchTerm,'i');
        const results = await PropertyModel.find({propname:searchRegex});

        res.json(results);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
};





module.exports = {
    createListing,
    getListing,
    userListing,
    deleteListing,
    updateListing,
    getUserListing,
    searchListing
}