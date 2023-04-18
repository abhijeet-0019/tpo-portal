import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  success?: boolean;
  error?: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { id } = req.query;

  try {
    // Send a DELETE request to the backend API endpoint
    const response = await fetch(`http://localhost:5000/notification/${id}`, {
      method: 'DELETE'
    });

    if (!response.ok) {
      throw new Error('Failed to delete notification from database');
    }

    // Send a response indicating success
    res.status(200).json({
      success: true
    });
  } catch (error: any) {
    console.error(error);

    // Send a response indicating failure
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
}