import React from 'react'
import Logo from '../assets/logo.svg'
import Layout from '../widgets/Layout'
export default function About() {
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
