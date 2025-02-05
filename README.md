

# 🎬 Movie Portal – Server  

🚀 **Movie Portal Server** is the backend service for the **Movie Portal** application, built with **Node.js, Express.js, and MongoDB**. It manages movie data storage, authentication, and API endpoints for seamless communication with the frontend.  

## 🛠 Tech Stack  

- **Backend**: Node.js, Express.js  
- **Database**: MongoDB  
- **Environment Variables**: dotenv  
- **Security**: CORS  

## 📦 Dependencies  

```json
"dependencies": {
  "cors": "^2.8.5",
  "dotenv": "^16.4.6",
  "express": "^4.21.1",
  "mongodb": "^6.11.0"
}
```

## 🚀 Installation  

1️⃣ **Clone the repository**  
```sh
git clone https://github.com/your-username/movie-portal-server.git
cd movie-portal-server
```

2️⃣ **Install dependencies**  
```sh
npm install
```

3️⃣ **Configure Environment Variables**  

Create a `.env` file in the root directory and add:  

```sh
db_user=MoviePortal
UserPassword=lfT332UREnHY9VDB
MONGO_URI=mongodb+srv://MoviePortal:lfT332UREnHY9VDB@your-cluster.mongodb.net/moviesDB?retryWrites=true&w=majority
PORT=5000
```

4️⃣ **Run the Server**  
```sh
npm start
```

The backend will run on `http://localhost:5000`.  

## 📂 Project Structure  

```
📦 movie-portal-server
 ┣ 📂 routes      # API routes
 ┣ 📂 models      # Database schemas
 ┣ 📜 server.js   # Main server entry
 ┣ 📜 .env        # Environment variables
 ┣ 📜 package.json  # Dependencies and scripts
 ┣ 📜 README.md   # Documentation
```

## 🚀 API Endpoints  

| Method | Endpoint         | Description                 |
|--------|-----------------|-----------------------------|
| GET    | `/movies`       | Get all movies             |
| POST   | `/movies`       | Add a new movie            |
| DELETE | `/movies/:id`   | Remove a movie             |

## 🤝 Contributing  

Contributions are welcome! Follow the standard Git workflow:  

1. Fork the project  
2. Create a new branch (`git checkout -b feature-branch`)  
3. Commit your changes (`git commit -m "Added new feature"`)  
4. Push to the branch (`git push origin feature-branch`)  
5. Open a Pull Request  

## 📜 License  

This project is licensed under the **ISC License**.  

---

🔗 **Follow Me** – [GitHub](https://github.com/your-username) | [Portfolio](https://your-portfolio.com)  🚀
