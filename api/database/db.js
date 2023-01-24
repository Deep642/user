import mongoose from 'mongoose';

const Connection = async (username, password) => {
    const URL = `mongodb+srv://CRUD-Project:CRUD-Project@crud-project.jopaya8.mongodb.net/?retryWrites=true&w=majority`

    try {
        await mongoose.connect(URL, { useUnifiedTopology: true, useNewUrlParser: true });
        console.log('Database Connected Succesfully');
    } catch(error) {
        console.log('Error: ', error.message);
    }
}

export default Connection;