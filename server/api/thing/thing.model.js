'use strict';

import mongoose from 'mongoose';

var CommentSchema=new mongoose.Schema({
  content:String,
  author:String,
  created_at:{type:Date}
});

var ThingSchema = new mongoose.Schema({
  title: String,
  info: String,
  story:String,
  technology:String,
  video_online:String,
  created_at:{type:Date},
  author:String,
  project_info_type:String,
  project_info_difficulty:String,
  project_info_estimated_time:String,
  project_info_published:{type:Date},
  project_info_license:String,
  comments:[CommentSchema]
});

export default mongoose.model('Thing', ThingSchema);
