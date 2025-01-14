import React, { useState } from 'react';

const Login = () => {
    const [state, setState] = useState('Sign Up');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');

    const onSubmitHandler = async (event) => {
        event.preventDefault();
        // Handle form submission
    };

    return (
        <form
            onSubmit={onSubmitHandler}
            className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-blue-300 px-4 py-10 relative"
        >
            {/* Background Design */}
            <div className="absolute inset-0 bg-cover bg-center opacity-10" style={{ backgroundImage: `url('https://via.placeholder.com/150x150?text=Doctor+Icon')` }}></div>
            <div className="absolute inset-0 bg-cover bg-center opacity-20" style={{ backgroundImage: `url('https://via.placeholder.com/200x200?text=Stethoscope')` }}></div>
            <div className="absolute inset-0 bg-cover bg-center opacity-30" style={{ backgroundImage: `url('https://via.placeholder.com/250x250?text=Medical+Kit')` }}></div>

            {/* Form Container */}
            <div className="bg-white p-8 md:p-12 rounded-lg shadow-lg w-full max-w-md z-10">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">
                    {state === 'Sign Up' ? 'Create Account' : 'Log In'}
                </h2>
                <p className="text-gray-600 mb-8 text-center">
                    Please {state === 'Sign Up' ? 'sign up' : 'log in'} to book an appointment.
                </p>
                <div className="space-y-4">
                    {state === 'Sign Up' && (
                        <div>
                            <label className="block text-gray-700 font-medium mb-1">Full Name</label>
                            <input
                                type="text"
                                placeholder="Enter your name"
                                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </div>
                    )}
                    <div>
                        <label className="block text-gray-700 font-medium mb-1">Email</label>
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700 font-medium mb-1">Password</label>
                        <input
                            type="password"
                            placeholder="Enter your password"
                            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                </div>
                <button
                    type="submit"
                    className="mt-6 w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition duration-300"
                >
                    {state === 'Sign Up' ? 'Create Account' : 'Log In'}
                </button>
                <div className="mt-6 text-center text-sm">
                    {state === 'Sign Up' ? (
                        <p>
                            Already have an account?{' '}
                            <span
                                onClick={() => setState('Log In')}
                                className="text-blue-600 cursor-pointer hover:underline"
                            >
                                Log In
                            </span>
                        </p>
                    ) : (
                        <p>
                            Don't have an account?{' '}
                            <span
                                onClick={() => setState('Sign Up')}
                                className="text-blue-600 cursor-pointer hover:underline"
                            >
                                Sign Up
                            </span>
                        </p>
                    )}
                </div>
            </div>
        </form>
    );
};

export default Login;
