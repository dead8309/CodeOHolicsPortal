import mongoose from "mongoose"

export const connectDB = async () => {
    try {
        await mongoose.connect(process.env.DATABASE_URL as string)
        console.log('Database connected')
    } catch (error) {
        console.log(error)
    }
}
