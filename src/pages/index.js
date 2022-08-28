import Head from 'next/head'
import Link from 'next/link'
import Card from '@/components/Card'
import { getAllPrototypes } from "@/lib/fetch";
import { useAuth } from '@/hooks/auth'
import { useState } from 'react';
import PrototypeCard from '@/components/PrototypeCard'
import GuestNavigationDark from '@/components/Layouts/GuestNavigationDark';

export default function Home({ prototypes }) {
    const { user } = useAuth()

    const [dark, setDark] = useState(true)
    
    let url

    // Image variable 
    const imgUrl = "https://www.notebookcheck.net/fileadmin/_processed_/f/3/csm_csm_Oppo_Watch_3_Render_2_7ef6882bff_4393f5078f.jpg"

    return (
        <>
            <Head>
                <title>Prime Protoypes</title>
            </Head>
            <GuestNavigationDark user={ user } dark={ dark } className="bg-transparent backdrop-blur-md fixed top-0 z-10 w-full" />
            <div className="relative flex items-top justify-center min-h-screen bg-gray-100 dark:bg-gray-900 sm:items-center sm:pt-0">
                {/* <div className="hidden flex w-full z-10 fixed flex-row top-0 px-6 min-h-12 sm:block backdrop-blur-md float-right py-2"> */}
                    {/* Logo */}
                    {/* <div className="flex-shrink-0">
                        <Link href="/">
                            <a> 
                                <img
                                    src='/images/logo4.PNG'
                                    className='block h-12 w-auto fill-current'
                                    />
                            </a>
                        </Link>
                    </div> */}
                    {/* Mav Links  */}
                    {/* <div className='absolute right-6 bottom-6'>
                        <Link href="/">
                                <a className="mx-4 text-sm text-gray-300 no-underline">
                                    Prototypes
                                </a>
                        </Link>

                        {user ?
                            <Link href="/admin/dashboard">
                                <a className="ml-4 text-sm text-gray-300 no-underline">
                                    Dashboard
                                </a>
                            </Link>
                            :
                            <>
                                <Link href="/login">
                                    <a className="text-sm text-gray-300 no-underline">Login</a>
                                </Link>

                                <Link href="/register">
                                    <a className="ml-4 text-sm text-gray-300 no-underline">
                                        Register
                                    </a>
                                </Link>
                            </>
                        }
                    </div> */}
                {/* </div> */}
                <div className="mt-24 max-w-6xl mx-auto sm:px-6 lg:px-8">

                    {/* Prototype card  */}
                    <PrototypeCard prototypes={ prototypes } />
                </div>
            </div>
        </>
    )
}


export async function getStaticProps() {
    const prototypes = await getAllPrototypes()

    return {
      props: { prototypes }
    }
}