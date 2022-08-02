const AuthCard = ({ header, children }) => (
    <div className="min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0 bg-gray-100">
        <div>{header}</div>

        <div className="w-full sm:max-w-md mt-6 px-6 py-4 bg-white text-[#3E4E6D] shadow-md overflow-hidden sm:rounded-lg">
            {children}
        </div>
    </div>
)

export default AuthCard
