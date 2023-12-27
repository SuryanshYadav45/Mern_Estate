const mongoose =require("mongoose");

const userSchema = mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    }
}, {
    timestamps: true, // Automatically add createdAt and updatedAt timestamps
});

const UserModel = mongoose.model('user', userSchema);

module.exports = UserModel;