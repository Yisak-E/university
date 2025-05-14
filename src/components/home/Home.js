import React from 'react';
import './Home.css';
import Main from '../homeBody/Main';
import { useState } from 'react';
import Footer from '../footer/Footer';
import User from '../databaseConn/User';


const LoginPage = ({ count, setCount }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle login logic here
        console.log('Username:', username);
        console.log('Password:', password);
        // Reset form fields
        setUsername('');
        setPassword('');
    }
    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === 'username') {
            setUsername(value);
        } else if (name === 'password') {
            setPassword(value);
        }
    }
    const handleClick = () => {
        // Handle button click logic here
        console.log('Button clicked!');
    }
    return (
        <div className='login-form'>
            <div>
                <h2>Login Page</h2>
                <form>
                    <label>
                        Username:
                        <input type="text" name="username" />
                    </label>
                <br />
                <label>
                    Password:
                    <input type="password" name="password" />
                </label>
                <br />
                <button type="submit" id="submit" onClick={() => setCount(count + 1)}>Login</button>
            </form>
            </div>
        </div>
    );
}

const Options = () => {
    
    return (
        <div>
            <h2>Options</h2>
            <ul>
                <li>Option 1</li>
                <li>Option 2</li>
                <li>Option 3</li>
            </ul>
        </div>
    );
}

function Home() {
 const [isLoggedIn, setIsLoggedIn] = React.useState(false);
 const [count, setCount] = useState(0);
    const login = () => {
        setIsLoggedIn(!isLoggedIn);
    }


    return (
        <div>
          <header>
                <h1>University Course Management System</h1>
                <nav>
                <ul class="nav_bar">
                    <li><a href="#home" id="home">Home</a></li>
                    <li><a href="#courses">Courses</a></li>
                    <li><a href="#students">Students</a></li>
                    <li><a href="#faculty">Faculty</a></li>
                    <li><a href="#contact">Contact</a></li>
                    <li ><button onClick={login}>{isLoggedIn ? "Logout" : "Login"}</button></li>
                </ul>
                </nav>
               
            </header>
             <div className="">
              {isLoggedIn ? (<><LoginPage /><Footer /></>) : (<Main />)}
                </div>
              
           
        </div>
    );
}




export default Home;
