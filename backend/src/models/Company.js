import mongoose from "mongoose";

const companySchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    industry: String,
    location: String,
    size: String,
    founded: Number,
    website: String,
    description: String,
    techStack: [String],
  },
  { timestamps: true }
);

companySchema.index({
  name: "text",
  description: "text",
  industry: "text",
  techStack: "text",
});

export default mongoose.model("Company", companySchema);
