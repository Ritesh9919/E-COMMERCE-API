const mongoose = require('mongoose');

async function main() {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log('Database connected successfully');
    } catch (err) {
        console.log(err);
    }
}

main();