const Button = ({ type = 'submit', className, ...props }) => (
    <button
        type={type}
        className={`${className} inline-flex items-center px-4 py-2 bg-[#2E3E5D] border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-[#3E4E6D] active:bg-[#1E2E4D] focus:outline-none focus:border-[#1E2E4D] focus:ring ring-[#9EAECD] disabled:opacity-25 transition ease-in-out duration-150`}
        {...props}
    />
)

export default Button
