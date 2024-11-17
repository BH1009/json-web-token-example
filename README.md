# JWT-Based Authentication with Express.js

This project demonstrates a simple API built with **Express.js** that uses **JSON Web Tokens (JWT)** for authentication. It includes three endpoints: one public, one private, and one that provides the user data associated with the token. The private endpoints require a valid JWT for access.

---

## Features

- **JWT Token Generation**: Generate JWT tokens with user information.
- **Public Endpoint**: Accessible without authentication.
- **Private Endpoint**: Requires a valid JWT token in the `Authorization` header.
- **User Info Endpoint**: Retrieves user data associated with the token.
- **Token Expiry Handling**: Includes logic to check for expired tokens.
- **Logging**: Uses `morgan` to log HTTP requests.

---

## Prerequisites

Ensure you have the following installed:

- **Node.js** (v14 or newer recommended)
- **npm** (comes with Node.js)

---

## Setup

1. Clone the repository or copy the code into a file (e.g., `app.js`).

2. Install dependencies:
   ```bash
   npm install express jsonwebtoken morgan dotenv
