import React, { useState } from 'react';


export default function Login() {
    const [formData, setFormData] = useState({ email: '', password: '' });
    const [message, setMessage] = useState('');

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleLogin = async (e) => {
        e.preventDefault();

        const res = await fetch('http://localhost:3000/api/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            credentials: 'include', // to send cookies
            body: JSON.stringify(formData),
        });

        const data = await res.json();
        setMessage(data.message);
    };

    return (
        <form onSubmit={handleLogin} className="form">
            <h2>Login</h2>
            <input name="email" type="email" placeholder="Email" onChange={handleChange} required />
            <input name="password" type="password" placeholder="Password" onChange={handleChange} required />
            <button type="submit">Login</button>
            <p>{message}</p>
        </form>
    );
}



