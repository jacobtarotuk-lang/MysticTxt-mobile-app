// Sign-Up Screen
import { useState } from 'react';
import { supabase } from '../../services/supabase';

const Signup = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSignup = async () => {
        const { user, error } = await supabase.auth.signUp({
            email,
            password,
        });
        if (error) console.log('Error signing up:', error);
        else console.log('User signed up:', user);
    };

    return (
        <div>
            <input type="text" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
            <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
            <button onClick={handleSignup}>Sign Up</button>
        </div>
    );
};

export default Signup;