-- Supabase Schema

-- Create profiles table
CREATE TABLE profiles (
    id SERIAL PRIMARY KEY,
    username VARCHAR(50) NOT NULL UNIQUE,
    email VARCHAR(100) NOT NULL UNIQUE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Create services table
CREATE TABLE services (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    description TEXT,
    user_id INT REFERENCES profiles(id),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Create orders table
CREATE TABLE orders (
    id SERIAL PRIMARY KEY,
    service_id INT REFERENCES services(id),
    user_id INT REFERENCES profiles(id),
    status VARCHAR(50),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Create deliveries table
CREATE TABLE deliveries (
    id SERIAL PRIMARY KEY,
    order_id INT REFERENCES orders(id),
    delivery_time TIMESTAMP WITH TIME ZONE,
    status VARCHAR(50),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Row Level Security Rules
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;
CREATE POLICY select_profiles ON profiles FOR SELECT USING (auth.uid() = id);
CREATE POLICY select_services ON services FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY insert_orders ON orders FOR INSERT USING (auth.uid() = user_id);
CREATE POLICY select_deliveries ON deliveries FOR SELECT USING (auth.uid() = order_id);
