import mongoose from "mongoose";

const VideoSchema = new mongoose.Schema({
    fileUrl: {
        type: String,
        required: 'File URL is required'
    },
    title: {
        type: String,
        required: 'Title is required'
    },
    description: String,
    views: {
        type: Number,
        default: 0
    },
    createdAt: {
        type: Date,
        default: Date.now //현재 날짜를 반환
    },

    comments: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Comment" // 모델의 이름
    }]
});

const model = mongoose.model("Video", VideoSchema);
export default model;