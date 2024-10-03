// lib/mongodb.ts

import { MongoClient } from 'mongodb';

declare global {
  var _mongoClientPromise: Promise<MongoClient> | undefined;
}

if (!process.env.MONGODB_URI) {
  throw new Error('Invalid/Missing environment variable: "MONGODB_URI"');
}

// MongoDB URI and options
const uri = process.env.MONGODB_URI;
const options = {};

let client: MongoClient | null = null;
let clientPromise: Promise<MongoClient> | null = null;

// Check the environment
if (process.env.NODE_ENV === 'development') {
  // Development mode
  if (!global._mongoClientPromise) {
    client = new MongoClient(uri, options);
    global._mongoClientPromise = client.connect(); // Store the promise in global
  }
  clientPromise = global._mongoClientPromise; // Use the existing connection
  
} else {
  // Production mode
  if (!clientPromise) {
    client = new MongoClient(uri, options);
    clientPromise = client.connect(); // Create a new connection
  }
}

// Export the promise for use in your application
export default clientPromise;
