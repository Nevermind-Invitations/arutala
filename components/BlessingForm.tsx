import React, { useState, FormEvent } from 'react';
import { motion, useInView } from 'framer-motion';

interface BlessingFormProps {
    onSubmit: (data: { nama: string; kehadiran: string; jumlah: number; ucapan: string; createdAt: string }) => void;
}

const BlessingForm: React.FC<BlessingFormProps> = ({ onSubmit }) => {
    const [nama, setNama] = useState<string>('');
    const [kehadiran, setKehadiran] = useState<string>('');
    const [jumlah, setJumlah] = useState<string>('');
    const [ucapan, setUcapan] = useState<string>('');
    const ref = React.useRef<HTMLFormElement>(null);
    const isInView = useInView(ref, { once: true });

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        onSubmit({
            nama,
            kehadiran,
            jumlah: parseInt(jumlah),
            ucapan,
            createdAt: new Date().toISOString(),
        });
        // Reset form fields
        setNama('');
        setKehadiran('');
        setJumlah('');
        setUcapan('');
    };

    return (
        <motion.form
            ref={ref}
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
            transition={{ duration: 1.5 }}
        >
            <h1 className='text-black text-[28px] mt-6 mb-2 font-edensor leading-[32px]'>
                MOHON KONFIRMASI KEHADIRAN ANDA DAN BAGIKAN DOA RESTU ANDA.
            </h1>
            <p className='text-black text-[14px] mt-4'>
                Kami dengan hormat meminta Anda untuk segera memberikan respon dan mengonfirmasi kehadiran Anda di acara kami yang akan datang.
            </p>
            <h1 className='my-2 text-black'>Nama</h1>
            <input
                type="text"
                value={nama}
                onChange={(e) => setNama(e.target.value)}
                className='w-full px-2 text-white bg-gray-400 bg-opacity-60 rounded-lg'
            />
            <h1 className='my-2 text-black'>Kehadiran</h1>
            <select
                value={kehadiran}
                onChange={(e) => setKehadiran(e.target.value)}
                className='w-full px-2 text-white bg-gray-400 bg-opacity-60 rounded-lg'
            >
                <option value=""></option>
                <option value="Hadir">Hadir</option>
                <option value="Tidak Hadir">Tidak Hadir</option>
            </select>
            <h1 className='my-2 text-black'>Jumlah</h1>
            <select
                value={jumlah}
                onChange={(e) => setJumlah(e.target.value)}
                className='w-full px-2 text-white bg-gray-400 bg-opacity-60 rounded-lg'
            >
                <option value=""></option>
                <option value="1">1</option>
                <option value="2">2</option>
            </select>
            <h1 className='my-2 text-black'>Ucapan</h1>
            <textarea
                value={ucapan}
                onChange={(e) => setUcapan(e.target.value)}
                className='w-full px-2 h-20 text-white bg-gray-400 bg-opacity-60 rounded-lg'
            />
            <button
                type="submit"
                className="mt-2 px-6 py-1 bg-white text-gray-800 opacity-80 font-semibold rounded-xl shadow text-[10px]"
            >
                Send
            </button>
        </motion.form>
    );
};

export default BlessingForm;
