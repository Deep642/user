const express =require ('express');
const bodyParser =require ('body-parser'); 
const dotenv =require('dotenv');
const cors =require('cors');
// import path from "path";
// import { fileURLToPath } from 'url';

const Routes =require('./server/route.js');
const Connection =require ('./database/db.js');

// const __filename = fileURLToPath(import.meta.url);

// const __dirname = path.dirname(__filename);
const app = express();

// app.use(express.static(path.join(__dirname,"./build")));
// app.get("*",(req,res)=>{
// res.sendFile(path.join(__dirname,"./build/index.html"));
// });

dotenv.config();

app.use(bodyParser.json({extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.use('/', Routes);

const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;
const PORT = process.env.PORT || 9889;

Connection(USERNAME, PASSWORD);
 
app.listen(PORT, () => console.log(`Server is running successfully on PORT ${PORT}`));
