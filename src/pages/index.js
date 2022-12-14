import Head from 'next/head'
import Link from 'next/link'
import Card from '@/components/Card'
import { imgUrl } from '@/constants';
import HeroLayout from '@/components/Layouts/HeroLayout';
import { getAllPrototypes } from "@/lib/fetch";
import { useAuth } from '@/hooks/auth'
import { useState, useEffect } from 'react';
import PrototypeCard from '@/components/PrototypeCard'
import GuestNavigationDark from '@/components/Layouts/GuestNavigationDark';
import { useFetch } from '@/hooks/useFetch';
import { useRouter } from 'next/router';

export default function Home({ ...prototypesObj }) {
    const { user } = useAuth()
    const router = useRouter();
    // const { getPage } = useFetch();

    const [dark, setDark] = useState("true");
    const [isLoading, setIsLoading] = useState(true);
    const [errors, setErrors] = useState(null)

    // Destructure properties from prototypes object
    let {
        first_page,
        last_page,
        first_page_url,
        last_page_url,
        prev_page_url,
        next_page_url,
        current_page,
        data,
        from,
    } = prototypesObj;


    // Initial state of prototypes listings
    const [prototypesList, setPrototypesList] = useState(data);
    //Inital page is first page (i.e 1)
    let [currentPage, setCurrentPage] = useState(1);

    // console.log("Initial current_page is: ", current_page);

    // Previous Page 
    const loadPreviousPrototypes = async (prevPrototypesObj) => {
        current_page = currentPage;
        
        // if the current_page is lower than first (invalid) set currentPage 
        // to be the first page. Else move current_page to a lower page
        (current_page <= first_page) ? setCurrentPage(first_page) : (current_page = current_page - 1);
        
        // Fetch prototypesObject from this current page
        prevPrototypesObj = await useFetch(`http://localhost:8000/api?page=${ current_page }`, setErrors, current_page );

        // Redirect if prototypes object is not received
        if (! prevPrototypesObj) return router.push('/404');   

        // Destructure properties e.g new current_page and new data from new prototypesObj (i.e prevPrototypesObj)
        ({ current_page, data } = prevPrototypesObj );

        // Set currentPage value to be same as current_page
        currentPage = current_page;

        // Update prototypes list to reflect new data from new current page
        // Update currentPage with current_page
        setPrototypesList(data);
        setCurrentPage(current_page);
    }

    // Next Page
    const loadNextPrototypes = async (nextPrototypesObj) => {
        current_page = currentPage;
        (current_page >= last_page) ? setCurrentPage(last_page): (current_page = current_page + 1);
    
        nextPrototypesObj = await useFetch(`http://localhost:8000/api?page=${ current_page }`, setErrors, current_page );

        if (! nextPrototypesObj) return router.push('/404');        
        ({ current_page, data } = nextPrototypesObj );

        currentPage = current_page;
        setPrototypesList(data);
        setCurrentPage(current_page);
    };

    useEffect(() => {
      setPrototypesList(data);
      setIsLoading(false);
    }, [isLoading])
    
    
    console.log("Global pototypesList is", prototypesList);
        
    return (
        <>
            <Head>
                <title>Prime Protoypes</title>
            </Head>
            <GuestNavigationDark user={ user } dark={ dark } className="bg-transparent backdrop-blur-md fixed top-0 z-10 w-full" />

            <HeroLayout />
 
            <div className="relative flex items-top justify-center min-h-screen bg-gray-100 dark:bg-gray-900 sm:items-center sm:pt-0">
                <div className="mt-24 max-w-6xl mx-auto sm:px-6 lg:px-8">

                    {/* Prototype card  */}
                      <PrototypeCard 
                        prototypesList={ prototypesList } isLoading={ isLoading } /> 
                </div>

                <button 
                    onClick={ loadPreviousPrototypes }
                    className='text-red-900 text-2xl fixed bottom-6 left-6'>
                        Prev
                </button>
                <button 
                    onClick={ loadNextPrototypes }
                    className='text-red-900 text-2xl fixed bottom-6 left-16 ml-4'>
                        Next
                </button>
            </div>
        </>
    )
}


export async function getStaticProps() {
    const prototypesObj = await getAllPrototypes()
    
    return {
      props: {
        ...prototypesObj
      }
    }
}