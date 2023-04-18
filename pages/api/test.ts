import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string,
  success?: boolean,
  error?: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { data } = req.body;

  try {
    // Send a POST request to the backend API endpoint
    const response = await fetch('http://localhost:5000/notification', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });

    if (!response.ok) {
      throw new Error('Failed to push data to database');
    }

    // Send a response indicating success
    res.status(200).json({
      success: true,
      name: 'notification push'
    });
  } catch (error: any) {
    console.error(error);

    // Send a response indicating failure
    res.status(500).json({
      success: false, error: error.message,
      name: 'notification push'
    });
  }
}
