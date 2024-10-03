// types/global.d.ts

import { MongoClient } from 'mongodb';

declare global {
    namespace NodeJS {
        interface Global {
            _mongoClientPromise: Promise<MongoClient>; // Use optional chaining to prevent undefined error
        }
    }
}
