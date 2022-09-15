import React from 'react'
import Layout from '../widgets/Layout'
import PrimaryButton from '../widgets/buttons/PrimaryButton'
import Logo from '../assets/logo.svg'

export default function Form() {

    const senDataToWhatsapp = () => {
        const phone = '6281293515740'
        const name = document.getElementById('name').value;
        const kelas = document.getElementById('kelas').value;
        let baseUrl = `https://api.whatsapp.com/send?phone=${phone}`;
        baseUrl += `&text=Halo, Saya ${name} dari ${kelas} ingin memesan produk anda.&app_absent=0`;
        window.open(baseUrl);
        window.location.href = '/';
    }

    return (
        <Layout>
            <div className="flex justify-center h-screen items-center">
                <img
                    alt=""
                    className="h-14 w-14"
                    src={Logo} />
                <h1 className="text-2xl font-bold ml-4 text-natural0 text-center">Snacken 17</h1>

            </div>
        </Layout>
    )
}
