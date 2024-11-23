# Instabytes Backend

![GitHub repo size](https://img.shields.io/github/repo-size/beatrizgouveia03/instalike-back?style=for-the-badge)
![GitHub language count](https://img.shields.io/github/languages/count/beatrizgouveia03/instalike-back?style=for-the-badge)

Welcome to the **Instabytes** backend repository! This is the component responsible for managing the business logic, data handling, and database integration for the Instabytes project. 

## Table of Contents

1. [🌟 Alura BackEnd Immersion](#-alura-backend-immersion)
2. [🚀 Technologies and Tools](#-technologies-and-tools)
3. [📚 Project Structure](#-project-structure)
4. [🔧 Installation and Setup](#-installation-and-setup)
5. [🤝 Contributing](#-contributing)


## 🌟 Alura BackEnd Immersion  
This project was developed during the **Alura BackEnd Immersion**, a course focused on teaching the fundamentals of backend development using **Node.js**, **Express.js**, and **MongoDB**.  

### Key Learning Outcomes:  

- **Building RESTful APIs**: Design and implementation of scalable API endpoints.  
- **Database Integration**: Using MongoDB for data persistence and understanding CRUD operations.  
- **Middleware in Express.js**: Leveraging middleware to handle requests and error management.  
- **Environment Management**: Using `.env` files for configuration and best practices in handling sensitive data.  
- **Testing**: Introduction to testing APIs with tools like Postman, Thunder Client and basic unit testing.  
- **Deployment**: Deploying the application to **Google Cloud** using **Cloud Run**.

The project not only provided hands-on experience but also emphasized the importance of writing clean, maintainable, and scalable backend code.  

## 🚀 Technologies and Tools

- **Language**: JavaScript, Shell
- **Database**: MongoDB
- **Framework**: Express.js
- **Other Tools**: Node.js, PostMan, ThunderClient, Multer

## 📂 Project Structure

```plaintext
instabytes-back/
├── src/
│   ├── config/           # Configuration files
│   ├── controllers/      # Controllers logic
│   ├── models/           # Data models
│   ├── routes/           # API routes
│   └─ services/          # Business rules
├── uploads/              # Images uploaded by users
├── README.md             # Main documentation
├── package.json          # Dependencies and project configuration
├── server.js             # Main application entry point
└── services.sh           # Script to start the google cloud necessary services 
```

## 🔧 Installation and Setup

1. Clone this repository:
   ```bash
   git clone https://github.com/beatrizgouveia03/instabytes-back.git
   cd instabytes-back
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Configure environment variables:
   - Rename the `.env.example` file to `.env` and update it with your details.

4. Start the server:
   ```bash
   npm run dev
   ```

## 🤝 Contributing

1. Fork the repository.
2. Create a branch for your feature:
   ```bash
   git checkout -b my-new-feature
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add new feature"
   ```
4. Push your branch:
   ```bash
   git push origin my-new-feature
   ```
5. Open a pull request.
