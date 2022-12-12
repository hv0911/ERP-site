const app = require('./app');
const { connectDatabase } = require("./config/database")

const port = process.env.PORT || 4000
//      <--   Code here -->

connectDatabase();

app.listen(port, () => {
    console.log(`server is listening on port ${port}`);
})