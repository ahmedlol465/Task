interface IProps {
    msg: string
}


const ErrorMeassage = ({msg}: IProps) => {
    console.log(msg)
    return msg ? <span className="block text-red-600 font-semibold text-sm">{msg}</span> : null
    
}

export default ErrorMeassage;