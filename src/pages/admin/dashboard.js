import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AppLayout from '@/components/Layouts/AppLayout';
/* global document  */
import Head from 'next/head';
import { FiSettings } from 'react-icons/fi';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';


const Dashboard = () => {
    

    return (
        <div>
            
                {/* <AppLayout
                    header={
                        <h2 className="font-semibold text-xl text-gray-800 leading-tight mt-4">
                            Dashboard
                        </h2>
                    }>

                    <Head>
                        <title>Account - Dashboard</title>
                    </Head>
                
                </AppLayout> */}

                {/* Dashboard Code */}
                <div className="flex relative dark:bg-main-dark-bg">
                    <div className="fixed right-4 bottom-4" style={{ zIndex: '1000'}}>
                        <TooltipComponent content="Settings" position="Top">
                            <button>
                                <FiSettings />
                            </button>
                        </TooltipComponent>
                    </div>
                </div>
            
        </div>
    )
}

export async function getStaticProps() {
    let data = null;

    return {
        props: { data }
    }
}



export default Dashboard

