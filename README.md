# 💄 GlowUpBeauty E-Commerce Website

**GlowUpBeauty** is a modern, fully responsive **E-Commerce Website** built using the MERN stack. It enables users to browse beauty products, add them to cart, and place orders. This is a complete **end-to-end full-stack web application** with both frontend and backend deployed using **AWS services**.

🚀 **Live Site**: http://glowupbeauty-cosmetics.s3-website.eu-north-1.amazonaws.com/

---

## 🖥️ Tech Stack

- ⚛️ **Frontend**: React.js
- 🖥️ **Backend**: Node.js, Express.js
- 🗃️ **Database**: MongoDB Atlas (Cloud NoSQL)
- ☁️ **Cloud Hosting**: Amazon Web Services (AWS)
- **Frontend Hosting**: AWS S3 Static Website Hosting
- **Backend Server**: AWS EC2 (Ubuntu)
- **Process Manager**: PM2 for managing backend Node server
- 🌐 **Routing**: React Router, Express.js
- 🔒 **Authentication** :JWT, bcrypt

---

## 🧱 Folder Structure (Simplified)

GlowUpBeauty-Ecommerce/
├── backend/ # Express backend API
│ └── models/ # MongoDB Mongoose models
│ └── routes/ # API routes for cart, auth, etc.
│ └── server.js # Backend entry point
│ └── .env # Environment variables
├── frontend/ # React frontend
│ └── src/
│ └── components/
│ └── pages/
│ └── App.js
│ └── public/
│ └── package.json

## 🏗️ Hosting Architecture (AWS Deployment)

Here's how GlowUpBeauty is deployed using AWS infrastructure:

             +------------------------------+
             |        User's Browser        |
             +------------------------------+
                        |
                        ▼
            +------------------------+
            |     AWS S3 Bucket      |  ← React Frontend
            | Static Website Hosting |
            +------------------------+
                        |
                        ▼
            +-------------------------+
            |     AWS EC2 Instance     | ← Backend (Node.js + Express)
            |      Ubuntu + PM2        |
            +-------------------------+
                        |
                        ▼
             +---------------------+
             | MongoDB Atlas (Cloud)|
             +---------------------+

📌 Author
👩‍💻 Developed by Gummala Likhitha 
📫 Contact: LinkedIn (https://www.linkedin.com/in/gummalalikhitha/)

🔗 GitHub Repo
git clone https://github.com/Gummalalikhitha/GlowUpBeauty-Ecommerce.git



