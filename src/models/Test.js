import mongoose, {Schema} from 'mongoose'

const TestSchema = new Schema({
    valueone: Number,
    valuetwo: Number,
    created: Date
},
{
    timestamps: false
})

const Test = mongoose.model('Test', TestSchema);

export default Test;