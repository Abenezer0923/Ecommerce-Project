import mongoose from "mongoose";

const ConnDb = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO);
        console.log(`Mongodb is coonected :${conn.connection.host}`)
    } catch(error) {
        console.log(error.message);
        process.exit(1);
    }
}

export default ConnDb;