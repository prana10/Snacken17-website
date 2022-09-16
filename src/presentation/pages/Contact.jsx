import React from 'react'
import Layout from '../widgets/Layout'
import Logo from '../assets/logo.svg'
import { FaWhatsapp } from 'react-icons/fa'
import PrimaryButton from '../widgets/buttons/PrimaryButton'

export default function Contact() {
    const openWhatsapp = () => {
        const phone = '6281293515740'
        let baseUrl = `https://api.whatsapp.com/send?phone=${phone}`;
        window.open(baseUrl);
    }

    return (
        <Layout>
            <div className="flex flex-col justify-center h-screen items-center">
                <div className="flex flex-row justify-center items-center">
                    <img
                        alt=""
                        className="h-14 w-14"
                        src={Logo} />
                    <h1 className="text-2xl font-bold ml-4 text-natural0 text-center">Snacken 17</h1>
                </div>
                <div className="flex flex-col justify-center items-center mt-8">
                    <PrimaryButton className='w-full flex flex-row items-center justify-center' onClick={openWhatsapp}>
                        <FaWhatsapp className='text-white mr-2 w-5 h-5' />Hubungi Kami
                    </PrimaryButton>
                </div>
            </div>
        </Layout>
    )
}
