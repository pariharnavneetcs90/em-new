require('dotenv').config();
const Razorpay = require('razorpay');

const apiKey = process.env.Razorpay_API_KEY
const apiSecret = process.env.Razorpay_API_SECRET

const razorpay = new Razorpay({
    key_id: apiKey,
    key_secret: apiSecret,
  });
  module.exports=razorpay;