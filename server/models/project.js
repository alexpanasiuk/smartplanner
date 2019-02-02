const mongoose = require('mongoose');
const randomstring = require('randomstring');

const ObjectId = mongoose.Schema.Types.ObjectId;

const commentSchema = new mongoose.Schema({
    text: {
        type: String,
        required: true
    },
    creatorId: {
        type: ObjectId,
        ref: 'User',
        required: true
    },
    creatorName:{
        type: String,
        required: true
    },
	time: {
        type: Date,
        default: Date.now()
    },
});


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
    },
    comments: [commentSchema]
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
    inviteSecret: {
        type: String
    },
    members: [ObjectId]
});

projectSchema.pre('save', function(next) {
	let project = this;
	
	if (!project.inviteSecret) {
        project.inviteSecret = randomstring.generate({length: 12});
        next();
	} else {
		next();
	}
}); 

const Project = mongoose.model('Project', projectSchema);

module.exports = {
	Project
};