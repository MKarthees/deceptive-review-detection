import mongoose from 'mongoose'

export const connectDB = async (req, res) => {
  const MONGODB_URL =
    'mongodb+srv://karthees:pass123@cluster0.6a5in.mongodb.net/DeceptiveReviewDetection'
  await mongoose
    .connect(MONGODB_URL)
    .then(() => {
      console.log('DB Connected')
    })
    .catch(() => {
      console.log('Network Problem')
    })
}
