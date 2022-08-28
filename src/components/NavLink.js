import Link from 'next/link'

export const NavLinkDark = ({ active = false, children, ...props }) => (
    <Link {...props}>
        <a
            className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium leading-5 focus:outline-none transition duration-150 ease-in-out no-underline ${
                active 
                    ? 'border-indigo-600 text-gray-200 hover:text-gray-100 hover:border-indigo-500 focus:border-indigo-300'
                    : 'border-transparent text-gray-500 hover:text-gray-400 hover:border-gray-700 focus:text-gray-400 focus:border-gray-700'
            }`}>
            {children}
        </a>
    </Link>
)

const NavLink = ({ active = false, children, ...props }) => (
    <Link {...props}>
        <a
            className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium leading-5 focus:outline-none transition duration-150 ease-in-out no-underline ${
                active 
                    ? 'border-indigo-400 text-gray-900 focus:border-indigo-700'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 focus:text-gray-700 focus:border-gray-300'
            }`}>
            {children}
        </a>
    </Link>
)

export default NavLink
