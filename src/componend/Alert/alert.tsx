
import { ReactNode } from "react";
import "./index.scss";
import { Apple, X } from 'lucide-react';
import { AlertTypes } from "../../types";
interface IProps {
    title: string;
    icone: ReactNode;
    type: AlertTypes;
    describtion?: ReactNode; // jsx element
    children?: ReactNode
}

const Alert = ({ type = "alert-error", icone, title, describtion, children}: IProps) => {
    return (
        <div className={type}>
            <div className="alert-header">
                  <div className="title">
                    <span>
                    {icone}
                    </span>
                     <h3>{title}</h3>
                  </div>
                        <X className="close" size={20}/>
            </div>

            <p>
                {children ? children : describtion}
            </p>
        </div>
        
    )
}

export default Alert;