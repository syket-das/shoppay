import mongoose from 'mongoose';

const connection = {};

export async function connectDB() {
  if (connection.isConnected) {
    return;
  }
  if (mongoose.connections.length > 0) {
    connection.isConnected = mongoose.connections[0].readyState;
    if (connection.isConnected === 1) {
      console.log('Using existing connection');
      return;
    }
    await mongoose.disconnect();
  }

  mongoose.set('strictQuery', true);
  const db = await mongoose.connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  console.log('DB Connected');

  connection.isConnected = db.connections[0].readyState;
}


export async function disconnectDB() {
    if (connection.isConnected) {
        if (process.env.NODE_ENV === 'production') {
        await mongoose.disconnect();
        connection.isConnected = false;
        } else {
        console.log('Not disconnected');
        }
    }
}

const db = {
    connectDB,
    disconnectDB,
}

export default db;