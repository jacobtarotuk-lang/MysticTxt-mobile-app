// Log-In Screen for Supabase Authentication
import { useState } from 'react';
import { supabase } from '../../services/supabase';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async () => {
        const { user, error } = await supabase.auth.signInWithPassword({
            email,
            password,
        });
        if (error) console.log('Error logging in:', error);
        else console.log('User logged in:', user);
    };

    return (
        <div>
            <input type="text" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
            <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
            <button onClick={handleLogin}>Log In</button>
        </div>
    );
};

export default Login;