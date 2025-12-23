CREATE TABLE admins (
  id SERIAL PRIMARY KEY,
  username VARCHAR(50) UNIQUE NOT NULL,
  password TEXT NOT NULL
);

CREATE TABLE bookings (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100),
  email VARCHAR(100),
  phone VARCHAR(20),
  booking_type VARCHAR(50),
  event_date DATE,
  message TEXT,
  status VARCHAR(20) DEFAULT 'pending',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE albums (
  id SERIAL PRIMARY KEY,
  title VARCHAR(100),
  category VARCHAR(50)
);

CREATE TABLE photos (
  id SERIAL PRIMARY KEY,
  album_id INT REFERENCES albums(id) ON DELETE CASCADE,
  image_url TEXT,
  uploaded_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE gear (
  id SERIAL PRIMARY KEY,
  type VARCHAR(50),
  name VARCHAR(100)
);
