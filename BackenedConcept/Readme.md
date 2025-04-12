#### 🧑‍💻 Industry level Backened Development 

### Middleware
## cookie-parser
cookie-parser is a middleware that helps handle cookies in your Express application.

## express.json()
# Express JSON Middleware Explanation

## app.use(express.json({limit:"16kb"}))

This middleware is crucial for handling JSON data in Express applications. Here's what it does:

##Parses JSON Data
- Converts JSON data sent in the request body into a JavaScript object
- Makes the parsed data available in `req.body`
- Automatically handles the parsing of JSON-formatted requests

##The `limit` Option
- `limit: "16kb"` sets the maximum size of the JSON payload
- If the incoming JSON is larger than 16kb, it will return an error
- This is a security measure to prevent large payload attacks
- Helps protect your server from being overwhelmed by large requests

##Common Use Cases
1. API Endpoints: Receiving JSON data from frontend
2. Form Submissions: Handling form data sent as JSON
3. API Integrations: Processing data from other services

This middleware is essential for any professional Express application that needs to handle JSON data in requests.

## express.static()
# Express Static Files Middleware

## app.use(express.static("public"))

This middleware serves static files from a specified directory. Here's what it does:

### Static File Serving
- Serves static files (images, CSS, JavaScript, etc.) from the specified directory
- Automatically handles file requests without needing route handlers
- Makes files publicly accessible through the web server

### How it Works
- When a request comes in for a static file (e.g., `/images/logo.png`)
- Express looks for the file in the specified directory (`public` in this case)
- If found, it serves the file automatically
- If not found, it passes the request to the next middleware

### Common Use Cases
1. Serving website assets (images, CSS, JavaScript)
2. Hosting downloadable files
3. Serving client-side resources
4. Making media files accessible

### Example Directory Structure
```
public/
  ├── images/
 

### Security Considerations
- Only serve files that should be publicly accessible
- Don't use this for sensitive files
- Consider using a CDN for better performance with static files
This middleware is essential for serving static content in web applications.


middleware url = https://app.eraser.io/workspace/RojkipZhSvXo5srE8yrJ?origin=share

# 🚀 API Response and Error Handling

This documentation explains how to use the `ApiResponse` and `ApiError` classes for consistent API responses and error handling.

## 📦 ApiResponse Class

The `ApiResponse` class helps create consistent success responses for your API.

### 🎯 Usage

```javascript
class ApiResponse {
    constructor(statusCode, data, message = "Success") {
        this.statusCode = statusCode;
        this.data = data;
        this.message = message;
        this.success = statusCode < 400;
    }
}
```

### ✨ Example Responses

1. **Successful Login**:
```javascript
const response = new ApiResponse(200, {
    id: 1,
    name: "John Doe",
    email: "john@example.com"
}, "Login successful");

// Response:
{
    statusCode: 200,
    data: {
        id: 1,
        name: "John Doe",
        email: "john@example.com"
    },
    message: "Login successful",
    success: true
}
```

2. **Create Resource**:
```javascript
const response = new ApiResponse(201, {
    id: 1,
    title: "New Post",
    content: "Hello World"
}, "Post created successfully");

// Response:
{
    statusCode: 201,
    data: {
        id: 1,
        title: "New Post",
        content: "Hello World"
    },
    message: "Post created successfully",
    success: true
}
```

## 🚨 ApiError Class

The `ApiError` class helps create consistent error responses for your API.

### 🎯 Usage

```javascript
class ApiError extends Error {
    constructor(
        statusCode,
        message = "Something went wrong",
        errors = [],
        stack = ""
    ) {
        super(message)
        this.statusCode = statusCode
        this.data = null
        this.message = message
        this.success = false
        this.errors = errors

        if (stack) {
            this.stack = stack
        } else {
            Error.captureStackTrace(this, ApiError)
        }
    }
}
```

### ✨ Example Error Responses

1. **Not Found Error**:
```javascript
throw new ApiError(404, "User not found");

// Response:
{
    statusCode: 404,
    message: "User not found",
    success: false,
    errors: [],
    data: null
}
```

2. **Validation Error**:
```javascript
throw new ApiError(400, "Validation failed", [
    { field: "email", message: "Invalid email format" },
    { field: "password", message: "Password too short" }
]);

// Response:
{
    statusCode: 400,
    message: "Validation failed",
    success: false,
    errors: [
        { field: "email", message: "Invalid email format" },
        { field: "password", message: "Password too short" }
    ],
    data: null
}
```

## 📋 Common Status Codes

| Status Code | Description | Use Case |
|------------|-------------|----------|
| 200 | OK | Successful GET requests |
| 201 | Created | Successful POST requests |
| 204 | No Content | Successful DELETE requests |
| 400 | Bad Request | Validation errors |
| 401 | Unauthorized | Authentication required |
| 403 | Forbidden | Permission denied |
| 404 | Not Found | Resource not found |
| 500 | Server Error | Internal server error |

## 🎯 Best Practices

1. **Use ApiResponse for Success**:
   - Always use `ApiResponse` for successful operations
   - Include meaningful messages
   - Set appropriate status codes

2. **Use ApiError for Errors**:
   - Always use `ApiError` for error cases
   - Provide clear error messages
   - Include specific errors for validation

3. **Consistent Structure**:
   - Follow the same response format
   - Use appropriate status codes
   - Include relevant data

## 🔄 Example Usage in Routes

```javascript
router.get('/users/:id', async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        
        if (!user) {
            throw new ApiError(404, "User not found");
        }
        
        const response = new ApiResponse(200, user, "User retrieved successfully");
        res.status(200).json(response);
        
    } catch (error) {
        if (error instanceof ApiError) {
            throw error;
        }
        throw new ApiError(500, "Internal server error");
    }
});
```

## 📚 Additional Resources

- [HTTP Status Codes](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status)
- [REST API Best Practices](https://www.moesif.com/blog/technical/api-design/REST-API-Design-Best-Practices-for-Sub-Resources/)
- [Error Handling in Node.js](https://nodejs.org/api/errors.html)