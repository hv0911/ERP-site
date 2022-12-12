const mongoose = require("mongoose");


exports.connectDatabase = () => {

    mongoose.set("debug", true);
    mongoose.set("strictQuery", false);


    mongoose.connect(process.env.MONGO_URI || "mongodb://127.0.0.1/my_database",
        { useNewUrlParser: true, useUnifiedTopology: true }
    )
        .then(con => { console.log(`Database Connected: ${con.connection.host}`) })
        .catch((err) => console.log(err))
};

