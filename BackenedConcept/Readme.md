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