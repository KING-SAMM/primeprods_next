import Head from 'next/head'
import Link from 'next/link'
import { useAuth } from '@/hooks/auth'
import PrototypeCard from '@/components/PrototypeCard'

export default function Home() {
    const { user } = useAuth({ middleware: 'guest' })
    

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
                    <PrototypeCard />
                </div>
            </div>
        </>
    )
}
