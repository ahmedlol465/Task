import { InputHTMLAttributes } from "react"

interface IProps extends InputHTMLAttributes<HTMLInputElement> {

}

const Input = ({...rest}: IProps) => {
    return (

            <input id="" name="" type="text" className="border-2 border-gray-300 w-full p-1 shadow-md 
            focus:border-indigo-500 focus: outline-none focus:ring-1 focus:ring-indigo-500 rounded-md px-3 text-md
            " {...rest}/>
    )
}

export default Input