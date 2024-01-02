<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body>

<h1>SparkHub - Your Ultimate Dating Platform</h1>

<p>Welcome to SparkHub, a modern dating platform designed to connect people and spark meaningful relationships. This repository contains the source code for the SparkHub web application. Check out the <a href="https://github.com/srose0040/SparkHub/blob/master/Video%20Recording%20Of%20App%20Functionality.mkv">video demonstration</a> to see the app in action!</p>

<h2>Table of Contents</h2>
<ul>
  <li><a href="#introduction">Introduction</a></li>
  <li><a href="#features">Features</a></li>
  <li><a href="#getting-started">Getting Started</a></li>
  <li><a href="#usage">Usage</a></li>
  <li><a href="#contributing">Contributing</a></li>
  <li><a href="#license">License</a></li>
</ul>

<h2>Introduction</h2>

<p>SparkHub is a feature-rich dating platform built with React for the frontend and Express for the backend. It provides users with a seamless experience to create accounts, match with others, and engage in conversations. The app incorporates secure user authentication, real-time messaging, and profile customization.</p>

<h2>Features</h2>

<ul>
  <li><strong>User Authentication:</strong> Secure user sign-up and login with password hashing to protect user data.</li>
  <li><strong>Matching Algorithm:</strong> Advanced matching algorithm to connect users based on their preferences.</li>
  <li><strong>Profile Customization:</strong> Personalize your profile by adding details about yourself, interests, and profile pictures.</li>
  <li><strong>Real-time Messaging:</strong> Engage in real-time conversations with matched users through a user-friendly messaging system.</li>
  <li><strong>Dashboard and Matches Display:</strong> Intuitive dashboard layout with a display of matched profiles for easy navigation.</li>
  <li><strong>Onboarding Process:</strong> A smooth onboarding process allowing users to input their interests and personal information.</li>
  <li><strong>User Profile Retrieval:</strong> Retrieve and display user profiles based on various filters, such as gender preferences.</li>
</ul>

<h2>Getting Started</h2>

<p>To run SparkHub locally, follow these steps:</p>

<ol>
  <li>Clone the repository:</li>
  <pre><code>git clone https://github.com/srose0040/SparkHub.git</code></pre>

  <li>Install dependencies for both the frontend and backend:</li>
  <pre><code>cd SparkHub/Client
npm install</code></pre>

  <pre><code>cd ../Server
npm install</code></pre>

  <li>Set up your MongoDB URI in the .env file:</li>
  <pre><code>URI=your_mongodb_uri_here</code></pre>

  <li>Start the frontend and backend servers:</li>
  <pre><code>cd SparkHub/Client
npm start:frontend</code></pre>

  <pre><code>cd ../Server
npm start:backend</code></pre>

  <li>Visit <a href="http://localhost:3000">http://localhost:3000</a> in your browser to access SparkHub.</li>
</ol>

<h2>Usage</h2>

<p>Sign up for a new account or log in with your existing credentials. Customize your profile in the onboarding process. Explore potential matches in the dashboard. Engage in conversations with matched users through real-time messaging. Enjoy the SparkHub dating experience!</p>

<h2>Contributing</h2>

<p>Contributions are welcome! If you have ideas for improvements, bug fixes, or new features, feel free to open an issue or submit a pull request.</p>

<h2>License</h2>

<p>This project is licensed under the MIT License.</p>

</body>
</html>
