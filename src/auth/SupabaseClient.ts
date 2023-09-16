import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://eoiyedzpwmkxcmcdxvqo.supabase.co'
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_CLIENT;

console.log(supabaseUrl);

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
