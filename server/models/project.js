const mongoose = require('mongoose');

const ObjectId = mongoose.Schema.Types.ObjectId;

const taskSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
		maxlength: 100
    },
    creator: {
        type: ObjectId,
        required: true
    },
	finishTime: {
        type: Date
    },
    timeSetted: {
        type: Boolean,
        default: false
    },
    finished: {
        type: Boolean,
        default: false
    }
}, {
    timestamps: true
});

const projectSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true, 
        required: true,
		maxlength: 100
    },
    tasks: [taskSchema],
    creator: {
        type: ObjectId,
        required: true
    },
    members: [ObjectId]
});

const Project = mongoose.model('Project', projectSchema);

module.exports = {
	Project
};