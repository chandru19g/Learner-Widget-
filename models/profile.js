const mongoose = require("mongoose");

const profileSchema = new mongoose.Schema(
	{
		user: {
			type: mongoose.Schema.ObjectId,
			ref: "User",
		},
		profession: {
			type: String,
		},
		description: {
			type: String,
			trim: true,
		},
		skills: {
			type: Array,
			default: [],
		},
		profile_picture: {
			type: String,
		},
		phone_number: {
			type: String,
			trim: true,
		},
		portfolio: {
			type: String,
			trim: true,
		},
	},
	{timestamps: true},
);

module.exports = Profile = mongoose.model("Profile", profileSchema);
