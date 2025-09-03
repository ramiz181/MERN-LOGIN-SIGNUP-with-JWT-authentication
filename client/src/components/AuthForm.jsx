import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function AuthForm() {
    const [isLogin, setIsLogin] = useState(false);

    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: ''
    });

    const [message, setMessage] = useState('');


    const handleChange = (e) => {
        const { name, value } = e.target;
        console.log("Line 20", formData.username);
        setFormData(prev => ({ ...prev, [name]: value }));
        // console.log("previous", prev)
    };

    // console.log(formData);


    const handleRegisterSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('http://localhost:3000/api/auth/register', {

                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)


            })

            const result = await response.json();
            setMessage(result.message);

            if (response.ok) {

                setFormData({
                    username: '',
                    email: '',
                    password: ''
                });

                // console.log(response.message);

                // setIsLogin(true);
            }

        } catch (error) {
            // console.log("Error", error);
            setMessage(error.message);

        }

    };

    const handleLoginSubmit = async (e) => {

        e.preventDefault();

        // console.log('login fucntion running...');


        try {
            const response = await fetch('http://localhost:3000/api/auth/login', {

                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email: formData.email,
                    password: formData.password
                })
            })
            const result = await response.json();
            setMessage(result.message);
            x
            if (response.ok) {

                setFormData({
                    username: '',
                    email: '',
                    password: ''
                });

                localStorage.setItem('token', result.token)

                navigate('/');

                // console.log(result);

            }


        } catch (error) {

            // console.log(error);
            setMessage(error.message)
        }

    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
                <h2 className="text-2xl font-bold text-center mb-6">
                    {isLogin ? 'Login to Your Account' : 'Create an Account'}
                </h2>

                <form onSubmit={!isLogin ? handleRegisterSubmit : handleLoginSubmit} className="space-y-4">
                    {!isLogin && (
                        <div>
                            <label className="block text-gray-700">Username</label>
                            <input
                                type="text"
                                name="username"
                                value={formData.username}
                                onChange={handleChange}
                                // required
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                    )}

                    <div>
                        <label className="block text-gray-700">Email</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            // required
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <div>
                        <label className="block text-gray-700">Password</label>
                        <input
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            // required
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
                    >
                        {isLogin ? 'Login' : 'Sign Up'}
                    </button>
                </form>

                <p className="text-center mt-4 text-sm text-gray-600">

                    {isLogin ? "Don't have an account?" : 'Already have an account?'}{' '}
                    <button
                        className="text-blue-600 hover:underline"
                        onClick={() => setIsLogin(!isLogin)}
                    >
                        {isLogin ? 'Sign up' : 'Login'}
                    </button>

                </p>
                {message && <p className="text-center text-red-500 mt-2">{message}</p>}
            </div>
        </div>
    );
}
