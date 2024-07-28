import { NextApiRequest, NextApiResponse } from 'next';
import cron from '../../../cronJob';

export default function handler(req, res) {
  res.status(200).json({ message: 'Cron job started' });
}