<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Online Learning Platform</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      line-height: 1.6;
      color: #333;
      background-color: #f4f4f4;
      margin: 0;
      padding: 0;
    }
    header {
      background-color: #4CAF50;
      color: white;
      padding: 10px 0;
      text-align: center;
    }
    h1, h2 {
      color: #333;
    }
    h3 {
      color: #555;
    }
    p {
      font-size: 1.1em;
    }
    .content {
      margin: 20px;
      padding: 20px;
      background-color: white;
      border-radius: 8px;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }
    code {
      background-color: #f4f4f4;
      padding: 5px 10px;
      border-radius: 4px;
    }
    pre {
      background-color: #2c3e50;
      color: white;
      padding: 15px;
      border-radius: 5px;
      overflow: auto;
      margin-top: 10px;
    }
    .section-title {
      color: #4CAF50;
      font-weight: bold;
    }
    ul {
      list-style-type: none;
    }
    li {
      margin: 10px 0;
    }
    footer {
      background-color: #333;
      color: white;
      padding: 10px;
      text-align: center;
      margin-top: 20px;
    }
  </style>
</head>
<body>

<header>
  <h1>Online Learning Platform</h1>
</header>

<div class="content">
  <h2>Description</h2>
  <p>This is an online learning platform built using the MERN (MongoDB, Express.js, React.js, Node.js) stack. The platform provides a comprehensive environment for students and teachers, including features like courses, an inbuilt IDE, a resume builder, and separate logins for teachers/instructors and students.</p>

  <h2 class="section-title">Features</h2>
  <ul>
    <li><strong>User Authentication</strong>: Separate logins for teachers and students with secure authentication.</li>
    <li><strong>Course Management</strong>: Teachers can create, update, and delete courses; students can enroll and access course materials.</li>
    <li><strong>Inbuilt IDE</strong>: An integrated development environment for students to practice code directly within the platform.</li>
    <li><strong>Resume Builder</strong>: A resume-building tool to help students create professional resumes.</li>
    <li><strong>Admin Panel</strong>: Manage users, courses, and other platform settings.</li>
  </ul>

  <h2 class="section-title">Tech Stack</h2>
  <ul>
    <li><strong>Frontend</strong>: React.js, Redux for state management, and CSS for styling.</li>
    <li><strong>Backend</strong>: Node.js, Express.js.</li>
    <li><strong>Database</strong>: MongoDB.</li>
    <li><strong>Authentication</strong>: JSON Web Token (JWT) and bcrypt for secure user authentication.</li>
  </ul>

  <h2 class="section-title">Getting Started</h2>
  <h3>Prerequisites</h3>
  <p>Ensure you have the following installed:</p>
  <ul>
    <li><strong>Node.js</strong> (v14 or later)</li>
    <li><strong>MongoDB</strong> (Local or MongoDB Atlas)</li>
    <li><strong>npm</strong> (v6 or later)</li>
  </ul>

  <h3>Installation</h3>
  <p>Follow these steps to set up the application:</p>
  <pre><code>git clone https://github.com/yourusername/online-learning-platform.git
cd online-learning-platform
cd client
npm install
cd ../server
npm install</code></pre>
  
  <p>Set up environment variables. Create a <code>.env</code> file in the <code>server</code> folder with the following:</p>
  <pre><code>PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key</code></pre>

  <h3>Running the Application</h3>
  <p>To run the application, follow these steps:</p>
  <ul>
    <li>Start MongoDB locally or connect to MongoDB Atlas.</li>
    <li>Run the server:</li>
    <pre><code>cd server
npm start</code></pre>
    <li>Run the client:</li>
    <pre><code>cd client
npm start</code></pre>
  </ul>

  <p>The application will be available at <strong>http://localhost:3000</strong>.</p>

  <h2 class="section-title">Folder Structure</h2>
  <pre><code>online-learning-platform
│
├── client            # React frontend
│   ├── src           # React source files
│   ├── public        # Public assets
│   └── ...
│
└── server            # Node.js backend
    ├── models        # Mongoose models
    ├── routes        # Express routes
    ├── controllers   # Route handlers
    └── ...</code></pre>

  <h2 class="section-title">Key Modules</h2>
  <ul>
    <li><strong>Authentication</strong>: JWT for managing sessions and bcrypt for password hashing.</li>
    <li><strong>Courses</strong>: Teachers can create and manage courses; students can browse and enroll.</li>
    <li><strong>Inbuilt IDE</strong>: Simple IDE supporting syntax highlighting and code execution.</li>
    <li><strong>Resume Builder</strong>: Step-by-step tool to create and download resumes in different templates.</li>
  </ul>

  <h2 class="section-title">Future Enhancements</h2>
  <ul>
    <li>Add support for video conferencing for live sessions.</li>
    <li>Implement chat or discussion forums for student-teacher interaction.</li>
    <li>Add a grading and feedback system for assignments.</li>
    <li>Improve IDE capabilities with debugging features.</li>
  </ul>

  <h2 class="section-title">Contributing</h2>
  <p>Contributions are welcome! Please create an issue to discuss any feature requests, bug reports, or improvements. Fork the repository and submit a pull request for review.</p>

  <h2 class="section-title">License</h2>
  <p>This project is licensed under the MIT License.</p>
</div>

<footer>
  <p>&copy; 2024 Online Learning Platform. All rights reserved.</p>
</footer>

</body>
</html>
