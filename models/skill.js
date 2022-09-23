import mongoose from 'mongoose'

const Schema = mongoose.Schema

const skillSchema = new Schema({
  text:String,
  learned:Boolean,
  unit:Number,
})

const Skill = mongoose.model('Skill', skillSchema)

export {
  Skill
}