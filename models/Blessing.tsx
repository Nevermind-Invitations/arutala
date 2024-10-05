import mongoose, { Document, Schema } from 'mongoose';

// Interface TypeScript untuk dokumen Blessing
interface IBlessing extends Document {
    nama: string;
    kehadiran: string;
    jumlah: number;
    ucapan: string;
    createdAt: string;
}

// Schema Mongoose untuk Blessing
const BlessingSchema: Schema = new mongoose.Schema({
    nama: { type: String, required: true },
    kehadiran: { type: String, required: true },
    jumlah: { type: Number, required: true },
    ucapan: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
});

export default mongoose.models.Blessing || mongoose.model<IBlessing>('Blessing', BlessingSchema);
