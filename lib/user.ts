import{ Schema, Document, model, models } from 'mongoose';

export type Event = Document & {
  title: string;
  discription: string;
  imageUrl: string;
  time: Date | string
}

export type User = Document & {
  name: string;
  email: string;
  picture: string;
  events: Event[];
}

const eventSchema = new Schema({
    title:{
        type:String,
        required:true
    },
    discription:{
        type:String,
    },
    imageUrl:{
        type: String,
    },
    time:{
        type: Date 
    }
})
const userSchema = new Schema({
    email:{
        type:String,
        unique:[true,"email already exists"],
        required:[true,"please provide email"]
    },
    name:{
        type:String,
        required:[true,"please provied your name"]
    },
    image:{
        type:String
    },
    event:[eventSchema]
})
  
export const User = models.user || model<User>('user', userSchema);