import { NextApiRequest, NextApiResponse } from 'next';
import clientPromise from '@/lib/mongodb';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    res.status(200).json({ message: 'API route is working' });
    return;
  }

  try {
    const client = await clientPromise;
    if (!client) {
      throw new Error('Failed to connect to the database');
    }
    const db = client.db(); // Use the default database
    const collection = db.collection('test'); // You can specify any collection
    console.log('Connection successful!');
    res.status(200).json({ message: 'Connection successful!' });
  } catch (e) {
    console.error(e);
    res.status(500).json({ message: 'Error connecting to the database' });
  }
}