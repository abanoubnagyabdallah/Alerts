import { X } from "lucide-react";
import "./alert.scss";
import { ReactNode } from "react";
import { alertTypes } from "../../types";

interface IProps {
    type: alertTypes;
    icon: ReactNode;
    title: string;
    description: ReactNode;
    children?: ReactNode;
}

export default function Alert({ type = "alert-danger", icon, title, description, children }: IProps) {
    return (
        <>
            <div className={type}>
                <div className="alert-control">
                    <div className="alert-header">
                        <span>
                            {icon}
                        </span>
                        <h4>{title}</h4>
                    </div>
                    <X className="close" />
                </div>
                {children ? children : <p>{description}</p>}
            </div>
        </>
    );
}
