const mongoose = require('mongoose')
const Schema = mongoose.Schema
const mongoose_delete = require('mongoose-delete')

const PlayerSchema = new Schema(
  {
    avatar: { type: String },
    firstName: { type: String },
    lastName: { type: String },
    price: { type: Number },
    albums: [],
    renterId: { type: Schema.Types.ObjectId, ref: 'renters', unique: true },
  },
  { timestamps: true }
)

PlayerSchema.plugin(mongoose_delete, {
  overrideMethods: 'all',
  deletedAt: true,
})
module.exports = mongoose.model('players', PlayerSchema)
