# Node.js Password-Protected File Transfer System

This project is a simple Node.js application that provides a secure way to transfer files with password protection. Users can upload files, set optional passwords, and share download links. The server ensures that only users with the correct password can download the files.

## Features

- **File Upload:** Users can upload files to the server.

- **Password Protection:** Users can set passwords for their uploaded files, adding an extra layer of security.

- **Download Link Generation:** After uploading a file, users receive a unique download link.

- **Download Verification:** Before downloading a file, users must provide the correct password.

- **Download Count:** The system keeps track of the number of times a file is downloaded.

## Dependencies

- `express`: Web framework for Node.js
- `mongoose`: MongoDB object modeling for Node.js
- `multer`: Middleware for handling `multipart/form-data`, used for file uploads
- `bcrypt`: Library for hashing passwords
 


## Project Structure

- `server.js`: Main application file containing the server logic.
- `db.js`: Database connection setup and file model definition.
- `uploads/`: Directory where uploaded files are stored.

## Notes

- The application uses EJS as the view engine for rendering HTML pages.
- Make sure to customize the project to suit your security and deployment needs, especially if used in a production environment.

