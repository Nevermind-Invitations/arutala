import type { NextApiRequest, NextApiResponse } from 'next';
import connectMongo from '../../lib/mongodb';
import Blessing from '../../models/Blessing';

// Tipe respons untuk API
type ResponseData = {
    message: string;
    blessing?: any;
    blessings?: any;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<ResponseData>) {
    // Koneksi ke MongoDB
    await connectMongo();

    if (req.method === 'POST') {
        try {
            const { nama, kehadiran, jumlah, ucapan } = req.body;

            const blessing = new Blessing({
                nama,
                kehadiran,
                jumlah,
                ucapan,
            });

            // Simpan data ke MongoDB
            await blessing.save();

            res.status(201).json({ message: 'Data successfully submitted', blessing });
        } catch (error) {
            res.status(500).json({ message: 'Error submitting data', blessing: null });
        }
    } else if (req.method === 'GET') {
        try {
            const blessings = await Blessing.find();
            res.status(200).json({
                blessings,
                message: ''
            });
        } catch (error) {
            res.status(500).json({ message: 'Error fetching data', blessings: null });
        }
    } else {
        res.status(405).json({ message: 'Method not allowed' });
    }
}
