import Head from 'next/head'

const GuestLayout = ({ children }) => {
    return (
        <div>
            <Head>
                <title>Laravel</title>
            </Head>

            <div className="font-sans text-[#1E2E4D] antialiased">
                {children}
            </div>
        </div>
    )
}

export default GuestLayout
