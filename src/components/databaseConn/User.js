//mysql connection 
import mysql from 'mysql2';

// import dotenv from 'dotenv';
// dotenv.config();

const pool = mysql.createPool({
    host: '127.0.0.1',
    user: 'Isaac',
    password: '0000',
    database: 'databasePro'
}).promise();


async function User() {
    try {
        const [rows] = await pool.query('SELECT * FROM user');
        return rows;
    } catch (error) {
        console.error('Error fetching user data:', error);
        throw error;
    }
};

const user_data = await User();

console.log("some details ",  user_data);

export default User;