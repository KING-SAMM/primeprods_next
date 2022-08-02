const Label = ({ className, children, ...props }) => (
    <label
        className={`${className} block font-medium text-sm text-[#3E4E6D]`}
        {...props}>
        {children}
    </label>
)

export default Label
