import React from 'react'
import Logo from '../assets/logo.svg'
import Layout from '../widgets/Layout'
export default function About() {
    return (
        <Layout>
            <div className="flex flex-col justify-center h-screen items-center">
                <div className="flex flex-row items-center">
                    <img
                        alt=""
                        className="h-14 w-14"
                        src={Logo} />
                    <h1 className="text-2xl font-bold ml-4 text-natural0 text-center">Snacken 17</h1>
                </div>

                <div className="flex flex-col justify-center items-center mt-8">
                    <p className="text-natural0 text-center">Snacken 17 adalah <span className='text-primary'>Modern Outlet</span> yang Menyediakan Makanan Ringan dan Minuman untuk para siswa SMKN 17 Jakarta</p>
                    <p className="text-natural0 text-center">Kami Menyediakan Cimol Mercon dan Es Lumut. Cimol Mercon terdiri dari 3 level dan terdapat rasa lain seperti balado, barbeque, serta jagung Manis</p>
                    <p className="text-natural0 text-center">Kalian dapat memesan melalui Whatsapp, atau melalui Website & aplikasi yang kami sediakan.</p>
                </div>
            </div>
        </Layout >
    )
}
