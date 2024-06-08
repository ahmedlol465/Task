import { ButtonHTMLAttributes, ReactNode } from "react"

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode // to recieve the inside content
    className?: string
}

const Button = ({children, className, ...rest}: IProps) => {
    return (
        <button className={`${className}=text-white px-3 py-1 w-full rounded-lg hover:bg-gray-600`} {...rest}>{children}</button>
    )
}


export default Button