const express = require('express');
const cors = require('cors');
const cookieSession = require('cookie-session');

const app = express();

var corsOptions = {
  origin: 'http://localhost:8081',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

app.use(cors(corsOptions))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(
  cookieSession({
    name: 'session',
    keys: ["COOKIE_SECRET"],
    // maxAge: 24 * 60 * 60 * 1000,
    httpOnly: true
  })
)

app.get("/", (req, res) => {
  res.json({message: 'Welcome to application.'})
})

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
})