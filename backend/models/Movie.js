const mongoose = require('mongoose')

let movieSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
        trim: true
    },
    ratings:{
        type:Number,
        require:true
     },
    language:{
        type:[],
        require:true
    },
    duration:{
        type:String,
        require:true
    },
    genre:{
        type:String,
        require:true
    },
    certificate:{
        type:String,
        require:true
    },
    releaseDate:{
        type:String,
        require:true
    },
    desc:{
        type:String,
        require:true
    },
    cast:[{
        name:String,
        role:String,
        img:String,
        require:true
    }],
    crew:[{
        name:String,
        role:String,
        img:String,
        require:true
    }],
    bgimage:{
        type:String,
        require:true
    },
    poster:{
        type:String,
        require:true
    },
    reviews:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Review'
    },
    cinemas: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Cinema'
        }
    ]
})

let Movie = mongoose.model('Movie', movieSchema);
module.exports = Movie;