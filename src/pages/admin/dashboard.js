import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AppLayout from '@/components/Layouts/AppLayout';
/* global document  */
import Head from 'next/head';
import { FiSettings } from 'react-icons/fi';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import '../../styles/dashboard.module.css';


const Dashboard = () => {
    const activeMenu = true;

    return (
        <div>
            <AppLayout
                header={
                    <h2 className="font-semibold text-xl text-gray-800 leading-tight mt-4">
                        Dashboard
                    </h2>
                }>

                <Head>
                    <title>Account - Dashboard</title>
                </Head>
                
                {/* Dashboard Code */}
                <div className="flex relative dark:bg-main-dark-bg">
                    <div className="fixed right-4 bottom-4" style={{ zIndex: '1000'}}>
                        <TooltipComponent content="Settings" position="Top">
                            <button type="button" className="text-3xl p-3 hover:drop-shadow-xl hover:bg-light-gray text-white" style={{ background: 'blue', borderRadius: '50%'}}>
                                <FiSettings />
                            </button>
                        </TooltipComponent>
                    </div>

                    {/* Menu  */}
                    { activeMenu ? (
                        <div className="w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white">
                            Sidebar 
                        </div>
                    ) : (
                        <div className="w-0 dark:bg-secondary-dark-bg">
                            Diff Sidebar
                        </div>
                    ) }

                    {/* Navbar menu items if menu is active or not */}
                    <div className={ 
                        `dark:bg-main-bg bg-main-bg min-h-screen w-full ${ activeMenu ? 'md:ml-72': 'flex-2' }`
                     }>
                        <div className="fixed md:satic bg-main-bg dark:bg-main-dark-bg navbar w-full">
                            Navbar
                        </div>
                    </div>

                    
                </div>
            </AppLayout>
        </div>
    )
}


export default Dashboard

