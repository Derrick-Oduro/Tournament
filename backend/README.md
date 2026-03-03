# Tournament Backend API

Express.js REST API for the Tournament Simulation App

## 🚀 Quick Start

### Prerequisites

- Node.js (v16 or higher)
- PostgreSQL (v12 or higher)
- npm or yarn

### Installation

1. Install dependencies:

```bash
cd backend
npm install
```

2. Set up PostgreSQL database:

```sql
CREATE DATABASE tournament_db;
```

3. Configure environment variables:
   - Copy `.env.example` to `.env`
   - Update database credentials and JWT secrets

4. Start the server:

```bash
# Development mode with auto-reload
npm run dev

# Production mode
npm start
```

The server will start on `http://localhost:3000`

## 📁 Project Structure

```
backend/
├── src/
│   ├── config/          # Configuration files
│   │   ├── database.js  # Sequelize database config
│   │   ├── cloudinary.js # Image storage config
│   │   └── auth.js      # JWT configuration
│   ├── middleware/      # Express middleware
│   │   ├── auth.js      # JWT authentication
│   │   ├── validate.js  # Request validation
│   │   ├── errorHandler.js # Error handling
│   │   └── rateLimit.js # Rate limiting
│   ├── models/          # Sequelize models
│   │   ├── User.js      # User model
│   │   ├── Team.js      # Team model
│   │   ├── Tournament.js # Tournament model
│   │   └── index.js     # Model associations
│   ├── controllers/     # Route controllers
│   │   └── authController.js
│   ├── routes/          # API routes
│   │   └── auth.js      # Authentication routes
│   ├── services/        # Business logic services
│   ├── utils/           # Utility functions
│   │   └── validators.js # Joi validation schemas
│   └── app.js           # Express app setup
├── .env                 # Environment variables (not in git)
├── .env.example         # Environment template
├── .gitignore
├── package.json
└── server.js            # Entry point
```

## 🔑 API Endpoints

### Authentication Routes (`/api/auth`)

#### Register

```http
POST /api/auth/register
Content-Type: application/json

{
  "username": "johndoe",
  "email": "john@example.com",
  "password": "securepass123",
  "displayName": "John Doe"
}
```

#### Login

```http
POST /api/auth/login
Content-Type: application/json

{
  "email": "john@example.com",
  "password": "securepass123"
}
```

#### Get Current User

```http
GET /api/auth/me
Authorization: Bearer <access_token>
```

#### Refresh Token

```http
POST /api/auth/refresh-token
Content-Type: application/json

{
  "refreshToken": "<refresh_token>"
}
```

## 🗄️ Database Schema

The application uses PostgreSQL with Sequelize ORM. Tables are automatically created/updated when the server starts in development mode.

### Core Tables:

- `users` - User accounts
- `teams` - Teams created by users
- `tournaments` - Tournament configurations
- More tables will be added as features are implemented

## 🔐 Authentication

The API uses JWT (JSON Web Tokens) for authentication:

1. **Register** or **Login** to receive:
   - `accessToken` (24h lifespan) - Use for API requests
   - `refreshToken` (7d lifespan) - Use to get new access tokens

2. **Protected Routes** require the `Authorization` header:

```
Authorization: Bearer <access_token>
```

3. **Token Refresh**: When access token expires, use refresh token:

```http
POST /api/auth/refresh-token
{
  "refreshToken": "<your_refresh_token>"
}
```

## 🛠️ Development

### Available Scripts

```bash
# Start development server with auto-reload
npm run dev

# Start production server
npm start

# Run tests
npm test
```

### Adding New Routes

1. Create model in `src/models/`
2. Create controller in `src/controllers/`
3. Create validation schemas in `src/utils/validators.js`
4. Create route file in `src/routes/`
5. Register route in `src/app.js`

### Environment Variables

| Variable             | Description           | Default                 |
| -------------------- | --------------------- | ----------------------- |
| `PORT`               | Server port           | `3000`                  |
| `NODE_ENV`           | Environment           | `development`           |
| `DB_HOST`            | PostgreSQL host       | `localhost`             |
| `DB_PORT`            | PostgreSQL port       | `5432`                  |
| `DB_NAME`            | Database name         | `tournament_db`         |
| `DB_USER`            | Database user         | `postgres`              |
| `DB_PASSWORD`        | Database password     | -                       |
| `JWT_SECRET`         | JWT secret key        | -                       |
| `JWT_REFRESH_SECRET` | Refresh token secret  | -                       |
| `CLIENT_URL`         | Frontend URL for CORS | `http://localhost:8081` |

## 🚨 Error Handling

All API responses follow this format:

### Success Response

```json
{
  "success": true,
  "message": "Operation successful",
  "data": { ... }
}
```

### Error Response

```json
{
  "success": false,
  "message": "Error description",
  "errors": [ ... ]
}
```

## 📦 Dependencies

- **express** - Web framework
- **sequelize** - ORM for PostgreSQL
- **jsonwebtoken** - JWT authentication
- **bcrypt** - Password hashing
- **joi** - Request validation
- **helmet** - Security headers
- **cors** - CORS handling
- **morgan** - HTTP logging
- **multer** - File uploads
- **sharp** - Image processing
- **cloudinary** - Image storage

## 🔄 Next Steps

- [ ] Install backend dependencies: `cd backend && npm install`
- [ ] Set up PostgreSQL database
- [ ] Configure `.env` file
- [ ] Start the backend server: `npm run dev`
- [ ] Test API with Postman or curl
- [ ] Proceed to frontend integration

## 📝 Notes

- Database tables are auto-created in development mode
- For production, use migrations instead of `sequelize.sync()`
- Keep JWT secrets secure and never commit `.env` to git
- PostgreSQL must be running before starting the server
