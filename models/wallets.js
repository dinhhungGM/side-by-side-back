const mongoose = require('mongoose')
const Schema = mongoose.Schema
const mongoose_delete = require('mongoose-delete');

const WalletSchema = new Schema({
    renterId : {type: String, required: true},
    balance : {type: Number, default: 0},
    
}, {timestamps: true})

WalletSchema.plugin(WalletSchema)
module.exports = mongoose.model('wallets', WalletSchema)