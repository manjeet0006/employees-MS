import React, { useState } from 'react';

const Login = ({ handleLogin }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const submitHandler = (e) => {
        e.preventDefault();
        handleLogin(email, password);
        setEmail('');
        setPassword('');
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-background">
            <h1 className="text-4xl text-highlight mt-5">Employees Management System</h1>

            <div className="flex items-center justify-center w-full mt-12">
                <div className="bg-box border border-border px-10 py-10 rounded-2xl shadow-lg">
                    <h1 className="text-3xl text-highlight font-semibold text-center mb-6">Login</h1>
                    
                    <form onSubmit={submitHandler} className="flex flex-col gap-4">
                        <input
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className="w-72 bg-input border border-border text-white text-lg py-3 px-5 rounded-full outline-none focus:ring-2 focus:ring-highlight placeholder-gray-400"
                            type="email"
                            placeholder="Enter your email"
                        />
                        <input
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            className="w-72 bg-input border border-border text-text text-lg py-3 px-5 rounded-full outline-none focus:ring-2 focus:ring-highlight placeholder-gray-400"
                            type="password"
                            placeholder="Enter password"
                        />
                        <button className="w-full bg-button hover:bg-buttonHover text-black font-semibold py-3 rounded-full transition duration-300">
                            Log in
                        </button>
                    </form>

                    <p className="text-center text-text text-sm mt-4">
                        Forgot password? <a href="https://www.linkedin.com/in/manjeet-kumar-50a463301/" target="_blank" className="text-highlight font-medium hover:underline">Contact here..</a>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;
