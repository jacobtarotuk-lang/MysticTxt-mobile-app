import { createClient } from '@supabase/supabase-js';

// Replace these with your own Supabase details
const SUPABASE_URL = 'https://your-supabase-url.supabase.co';
const SUPABASE_ANON_KEY = 'your-public-anon-key';

const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

export default supabase;
