import React, { useState, FormEvent } from 'react';

interface BlessingFormProps {
    onSubmit: (data: { nama: string; kehadiran: string; jumlah: number; ucapan: string; createdAt: string }) => void;
}

const BlessingForm: React.FC<BlessingFormProps> = ({ onSubmit }) => {
    const [nama, setNama] = useState<string>('');
    const [kehadiran, setKehadiran] = useState<string>('');
    const [jumlah, setJumlah] = useState<string>('');
    const [ucapan, setUcapan] = useState<string>('');

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
        <form onSubmit={handleSubmit}>
            <h1 className='text-white text-[28px] mt-6 mb-2 font-edensor leading-[32px]'>
                MOHON KONFIRMASI KEHADIRAN ANDA DAN BAGIKAN DOA RESTU ANDA.
            </h1>
            <p className='text-white text-[14px] mt-4'>
            Kami dengan hormat meminta Anda untuk segera memberikan respon dan mengonfirmasi kehadiran Anda di acara kami yang akan datan.
            </p>
            <h1 className='my-2 text-white'>Nama</h1>
            <input
                type="text"
                value={nama}
                onChange={(e) => setNama(e.target.value)}
                className='w-full px-2 text-white bg-gray-700 bg-opacity-60 border-b-2 border-b-white rounded-none'
            />
            <h1 className='my-2 text-white'>Kehadiran</h1>
            <select
                value={kehadiran}
                onChange={(e) => setKehadiran(e.target.value)}
                className='w-full text-white bg-gray-700 bg-opacity-60 border-b-2 border-b-white rounded-none'
            >
                <option value=""></option>
                <option value="Hadir">Hadir</option>
                <option value="Tidak Hadir">Tidak Hadir</option>
            </select>
            <h1 className='my-2 text-white'>Jumlah</h1>
            <select
                value={jumlah}
                onChange={(e) => setJumlah(e.target.value)}
                className='w-full text-white bg-gray-700 bg-opacity-60 border-b-2 border-b-white rounded-none'
            >
                <option value=""></option>
                <option value="1">1</option>
                <option value="2">2</option>
            </select>
            <h1 className='my-2 text-white'>Ucapan</h1>
            <textarea
                value={ucapan}
                onChange={(e) => setUcapan(e.target.value)}
                className='w-full px-2 h-20 text-white bg-gray-700 bg-opacity-60 border-b-2 border-b-white rounded-none'
            />
            <button
                type="submit"
                className="mt-2 px-6 py-1 bg-white text-gray-800 opacity-80 font-semibold rounded-xl shadow text-[10px]"
            >
                Send
            </button>
        </form>
    );
};

export default BlessingForm;
