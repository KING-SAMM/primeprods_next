import Head from 'next/head'
import Link from 'next/link'
import Card from '@/components/Card'
import { getAllPrototypes } from "@/lib/fetch";
import { useAuth } from '@/hooks/auth'
import PrototypeCard from '@/components/PrototypeCard'

export default function Home({ prototypes }) {
    const { user } = useAuth()
    
    let url

    // Image variable 
    const imgUrl = "https://www.notebookcheck.net/fileadmin/_processed_/f/3/csm_csm_Oppo_Watch_3_Render_2_7ef6882bff_4393f5078f.jpg"

    return (
        <>
            <Head>
                <title>Prime Protoypes</title>
            </Head>

            <div className="relative flex items-top justify-center min-h-screen bg-gray-100 dark:bg-gray-900 sm:items-center sm:pt-0">
                <div className="hidden fixed top-0 right-0 px-6 py-4 sm:block">
                    <Link href="/">
                            <a className="mx-4 text-sm text-gray-700 underline">
                                Prototypes
                            </a>
                    </Link>

                    {user ?
                        <Link href="/dashboard">
                            <a className="ml-4 text-sm text-gray-700 underline">
                                Dashboard
                            </a>
                        </Link>
                        :
                        <>
                            <Link href="/login">
                                <a className="text-sm text-gray-700 underline">Login</a>
                            </Link>

                            <Link href="/register">
                                <a className="ml-4 text-sm text-gray-700 underline">
                                    Register
                                </a>
                            </Link>
                        </>
                    }
                </div>

                <div className="max-w-6xl mx-auto sm:px-6 lg:px-8">

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