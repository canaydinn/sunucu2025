class APIError extends Error {
    constructor(message, statusCode = 400) {
      super(message);  // Call the parent class constructor with the message
      this.statusCode = statusCode;  // Set the status code
      this.name = this.constructor.name;  // Automatically set the error's name to the class name (i.e., 'APIError')
      Error.captureStackTrace(this, this.constructor);  // Capture the stack trace for debugging
    }
  }
  
  module.exports = APIError;
  