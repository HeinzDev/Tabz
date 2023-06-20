const mongoose = require('mongoose');

const riffSchema = new mongoose.Schema({
    name: {
        type: String,
        required: false,
    },
    content: {
        type: String,
        required: true,
    },
    pastaId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Pasta'
      },
    tuning : {
        type: String,
        required: true,
    },
    favorite: {
        type: Boolean,
        required: false,
    },
})

const Riff = mongoose.model("Riff", riffSchema);

module.exports = Riff;