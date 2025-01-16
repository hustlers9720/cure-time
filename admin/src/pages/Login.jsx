import React from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import { AdminContext } from '../context/AdminContext';
import axios from 'axios'
import { toast } from 'react-toastify';

const Login = () => {
    const [state, setState] = useState('Admin');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')
    const { setAToken, backendUrl } = useContext(AdminContext)

    const onSubmitHandeler = async (event) => {
        event.preventDefault();
        try {
            if (state === 'Admin') {
                const { data } = await axios.post(backendUrl + '/api/admin/login', { email, password })
                // console.log(data);
                // console.log(data.token);

                if (data.success) {
                    localStorage.setItem('atoken', data.token)
                    setAToken(data.token);

                }
                else {
                    toast.header(data.message)
                }
            } else {

            }
        } catch (error) {

        }
    }
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-teal-100 via-white to-green-100">
            <form onSubmit={onSubmitHandeler} className="bg-white shadow-lg rounded-lg p-6 sm:p-8 w-full max-w-md">
                <div>
                    <p className="text-xl font-semibold text-gray-800 text-center mb-6">
                        <span className="text-teal-500">{state}</span> Login
                    </p>
                    <div className="mb-4">
                        <label className="block text-gray-700 font-medium mb-2" htmlFor="email">
                            Email
                        </label>
                        <input
                            onChange={(e) => setEmail(e.target.value)}
                            id="email"
                            type="email"
                            required
                            value={email}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-400 focus:outline-none"
                        />
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700 font-medium mb-2" htmlFor="password">
                            Password
                        </label>
                        <input
                            onChange={(e) => setPassword(e.target.value)}
                            id="password"
                            type="password"
                            required
                            value={password}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-400 focus:outline-none"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-teal-500 hover:bg-teal-600 text-white font-medium py-2 rounded-md transition duration-200"
                    >
                        Login
                    </button>
                    {state === 'Admin' ? (
                        <p className="text-gray-600 text-center mt-4">
                            Doctor Login?{' '}
                            <span
                                onClick={() => setState('Doctor')}
                                className="text-teal-500 cursor-pointer hover:underline"
                            >
                                Click Here
                            </span>
                        </p>
                    ) : (
                        <p className="text-gray-600 text-center mt-4">
                            Admin Login?{' '}
                            <span
                                onClick={() => setState('Admin')}
                                className="text-teal-500 cursor-pointer hover:underline"
                            >
                                Click Here
                            </span>
                        </p>
                    )}
                </div>
            </form>
        </div>
    );
};

export default Login;  