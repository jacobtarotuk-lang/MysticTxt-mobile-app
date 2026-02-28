import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://your-supabase-url.supabase.co';
const supabaseKey = 'your-supabase-public-anon-key';
const supabase = createClient(supabaseUrl, supabaseKey);

// Signup function
export const signup = async (email, password) => {
    try {
        const { user, error } = await supabase.auth.signUp({ email, password });
        if (error) throw error;
        return { user };
    } catch (error) {
        console.error('Signup error:', error.message);
        throw error;
    }
};

// Login function
export const login = async (email, password) => {
    try {
        const { user, error } = await supabase.auth.signIn({ email, password });
        if (error) throw error;
        return { user };
    } catch (error) {
        console.error('Login error:', error.message);
        throw error;
    }
};

// Logout function
export const logout = async () => {
    try {
        const { error } = await supabase.auth.signOut();
        if (error) throw error;
        return { success: true };
    } catch (error) {
        console.error('Logout error:', error.message);
        throw error;
    }
};