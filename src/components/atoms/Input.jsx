const Input = (props) => {
    const { type, placeholder } = props
    return(
        <input type={type} className="border-2 border-lightgray bg-white h-[45px] w-full px-5 pr-5 rounded-md text-sm focus:outline-none" placeholder={placeholder}></input>
    )
    
}

export default Input;