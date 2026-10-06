const mongoose =- require('mongose');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        enum: ['student', 'recruiter'],
        default: 'student'
    }
},{timestamps: true});

const user = mongoose.model('User', userSchema);

module.exports = user;