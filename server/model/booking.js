const mongoose=require('mongoose');

const bookingschema=mongoose.Schema({
    room:{
        type:String,
        required:true
    },
    roomid :{
        type:String ,
        required: true
    },
    userid:{
        type:String ,
        required:true
    },
    fromdate:{
        type:String,
        required:true
    },

    todate:{
        type:toString,
        required:true
    },
    type:{
        type:String,
        required:true
    },
    totalamount:{
        type:Number,
        required:true
    },
    totaldays:{
        type:Number,
        required:true
    
    },
    status:{
        type:String,
        required:true,
        default:"booked"
    }
},
{
timeStamp : true,
},

{
    collection:"bookings"
}
)

const bookingModel =mongoose.model('bookings',bookingschema);

module.exports=bookingModel