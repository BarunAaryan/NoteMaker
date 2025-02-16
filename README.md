# Note Maker

A full-stack note-taking application that allows users to create, update, and delete notes.

## Features
- Create new notes
- Update existing notes
- Delete notes
- Responsive grid layout

## Technologies Used
- **Frontend**: React, Vite, Tailwind CSS, Axios
- **Backend**: Node.js, Express, Mongoose
- **Database**: MongoDB

## Installation

1. Clone the repository
   ```bash
   git clone https://github.com/your-repo/NoteMaker.git
   cd NoteMaker
   ```

2. Install backend dependencies
   ```bash
   cd backend
   npm install
   ```

3. Install frontend dependencies
   ```bash
   cd ../frontend
   npm install
   ```

4. Create .env files
   - Backend:
     ```bash
     cd ../backend
     touch .env
     ```
   - Frontend:
     ```bash
     cd ../frontend
     touch .env
     ```

## .env Configuration

### Backend .env
Add the following environment variables to your backend .env file:
```env
MONGODB_URI=your_mongodb_connection_string

```

### Frontend .env
Add the following environment variable to your frontend .env file:
```env
VITE_API_URL=http://localhost:5000/api/notes
```

## Running the Application

1. Start the backend server
   ```bash
   cd backend
   npm run start
   ```

2. Start the frontend development server
   ```bash
   cd ../frontend
   npm run dev
   ```

3. Open your browser and navigate to `http://localhost:5173`

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

