import dotenv from "dotenv";
import path from "path";

dotenv.config({ path: path.join(process.cwd(), ".env") });

export default {
    port: process.env.PORT,
    database_url: process.env.MONGODB_URI,
    jwt_secret: process.env.JWT_SECRET,
    jwt_refresh_secret:process.env.JWT_REFRESH_SECRET,
    node_env:process.env.NODE_ENV,
    
   
};

