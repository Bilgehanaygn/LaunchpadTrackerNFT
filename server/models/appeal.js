import mongoose from "mongoose";

const appealSchema = mongoose.Schema({
  projectName: String,
  appealType: String,
  applicantName: String,
  status: Number,
  result: Number,
  userId: String
});

const Appeal = mongoose.model("Appeal", appealSchema);

export default Appeal;