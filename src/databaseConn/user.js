//mysql connection 
const mysql = require('mysql2');
const db = mysql.createConnection({
    host: '127.0.0.1',
    user: 'Isaac',
    password: '0000',
    database: 'databasePro',
    port: 3306
});

// Handle connection errors
function handleConnection() {
    db.connect((err) => {
        if (err) {
            console.error('Error connecting to the database:', err);
            setTimeout(handleConnection, 2000); // Retry connection after 2 seconds
        } else {
            console.log('Connected to the database');
        }
    });
}

// Establish the connection
handleConnection();

function getUsers() {
    return new Promise((resolve, reject) => {
        db.query('SELECT * FROM user', (err, results) => {
            if (err) {
                console.error('Error fetching users:', err);
                reject(err);
            } else {
                console.log('Users fetched successfully');
                resolve(results.map((user) => ({
                    id: user.user_id,
                    name: user.username,
                    password: user.password,
                    role: user.role,
                    faculty_id: user.faculty_id,
                    student_id: user.student_id,
                })));
            }
        });
    });
}

// Example usage:
getUsers()
    .then(users => console.log(users))
    .catch(err => console.error(err));