import React from 'react'

const NotFoundResource = ({ code, title }) => {
  return (
    <div className="relative flex items-top justify-center max-h-screen bg-gray-100 dark:bg-gray-900 sm:items-center sm:pt-0">
        <div className="max-w-xl mx-auto sm:px-6 lg:px-8">
            <div className="flex items-center pt-8 sm:justify-start sm:pt-0">
                <div className="px-4 text-lg text-gray-500 border-r border-gray-400 tracking-wider">
                    { code }
                </div>

                <div className="ml-4 text-lg text-gray-500 uppercase tracking-wider">
                    { title }
                </div>
            </div>
        </div>
    </div>
  )
}

export default NotFoundResource