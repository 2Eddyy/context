import React, { useState, useContext } from 'react';
import { StateContext } from '../Context/Context';
// import Password from './Password.json'
import { useNavigate } from 'react-router-dom';
import './Login.css'
const Login = () => {
    const data = [
        {
            userName: 'Edwin',
            passWord: 'Edwin@123',
        },
        {
            userName: 'Raja',
            passWord: 'Edwin@123',
        },
    ]
    const { dispatch } = useContext(StateContext)
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [pass, setPassWord] = useState('');
    const [showPassWord, setShowPassWord] = useState(false);

    const handleUserName = (event) => {
        setName(event.target.value)
    }

    const handlepassWord = (event) => {
        setPassWord(event.target.value)
    }
    const handleSubmit = (event) => {
        localStorage.setItem("userLogin", true)
        dispatch(
            {
                type: "login",
                payload: { isAthentication: true }
            }
        );
        // console.log(payload);

        event.preventDefault();
        const exit = data.find((h) => h.userName == name);
        if (exit) {
            console.log('username correct');
        }
        else {
            console.log('username wrong');
        }

        const exitPassword = exit.passWord === pass;
        if (exitPassword) {
            console.log('pass correct');
            navigate('profile');
        }
        else {
            console.log('wrong pass');
            navigate('/');
        }
        console.log(exitPassword);
    }



    return (
        <div className='login'>
            <form >
                <span>userName:</span><input name='username' onChange={handleUserName} /><br /><br />
                <span>passWord:</span><input type={showPassWord ? 'text' : 'password'} name='password'
                    onChange={handlepassWord} />
                {showPassWord ? (
                    <button onClick={() => setShowPassWord(true)}>show</button>
                ) : (
                    <span onClick={() => setShowPassWord(false)}></span>
                )}
                <br /><br />
                <input onClick={handleSubmit} type='submit' />
            </form>
        </div>
    )
}

export default Login