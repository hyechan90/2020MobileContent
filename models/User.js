const mongoose = require('mongoose')

const UserSchema = mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	password: {
		type: String,
		require: true,
	},
	email: {
		type: String,
		require: true,
	},
	mbti: {
		type: String,
		require: true,
	},
	date: {
		type: Date,
		defalut: Date.now,
	},
})
module.exports = mongoose.model('User', UserSchema)
