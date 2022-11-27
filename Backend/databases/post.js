const mongoose = require("mongoose");
const { Schema } = mongoose;

const PostSchema = new Schema({
  images: [
    {
      photo: {
        data: Buffer,
        contentType: String,
      },
      upvote: Number,
    },
  ],
  date: { type: Date, default: Date.now },
  expiryDate: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Post", PostSchema);
