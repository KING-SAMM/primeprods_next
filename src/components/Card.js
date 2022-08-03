const Card = ({ children, className } ) => {
  return (
    <div className={ `${className} bg-[#1E2E4D] rounded-lg` }>
        { children }
    </div>
  )
}

export default Card