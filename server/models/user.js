const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const randomstring = require('randomstring');
const config = require('../config/index')
const { sendConfirmLink } = require('../config/nodemailer');
const SALT_I = 10;

const ObjectId = mongoose.Schema.Types.ObjectId;

const userSchema = new mongoose.Schema({
	email: {
		type: String, 
		required: true,
		trim: true,
		unique: 1
	},
	password: {
		type: String,
        required: true,
        trim: true,
		minlength: 6
	},
	name: {
        type: String,
        trim: true,
        required: true,
		maxlength: 100
	},
	projects: [{
		type: ObjectId,
		ref: 'Project'
	}],
	activated: {
		type: Boolean,
		default: false
	},
	activationToken: {
		type: String
	}
});

userSchema.pre('save', function(next) {
	let user = this;
	
	if (user.isModified('password')) {
		bcrypt.hash(user.password, SALT_I, (err, hash) => {
			if (err) return next(err);
			user.password = hash;
			next();
		});
	} else {
		next();
	}

	if (!user.activated) {
		user.activationToken = randomstring.generate({length: 64});
		sendConfirmLink(user.email, user.name, `${config.SERVER_URL}/api/activation/${user._id}/${user.activationToken}`);
	}

}); 

userSchema.methods.comparePassword = function(candidatePassword, cb) {
	bcrypt.compare(candidatePassword, this.password, (err, isMatch) => {
		if (err) return cb(err);
		cb(null, isMatch);
	});
};

const User = mongoose.model('User', userSchema);

module.exports = {
	User
};