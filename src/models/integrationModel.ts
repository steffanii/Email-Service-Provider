import mongoose from "mongoose";

const integrationSchema = new mongoose.Schema({
    provider: {type: String, enum: ["mailchimp","getResponse"], required: true},
    apiKey: { type:String, required: true},
    createdAt: {type : Date, default: Date.now}
});


export default mongoose.model("integration", integrationSchema);