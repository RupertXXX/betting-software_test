import { FC, useContext, useState } from "react";
import { ModalContext } from "../ModalProvider";
import { block } from 'bem-cn';
import { IModalConfig } from "../../../interfaces";
import "./modal.scss";

const b = block('modal');

const Modal: FC<IModalConfig> = ({ content, title, subtitle }) => {

    const { closeModal } = useContext(ModalContext);

    const [isClosing, setIsClosing] = useState(false);

    const handleClose = () => {
        setIsClosing(true);

        const closeTimeout = setTimeout(() => {
            closeModal();
            clearTimeout(closeTimeout);
        }, 175)    
    }

    return (
        <div onClick={handleClose} className={b({disappearing: isClosing})}>
            <div onClick={(e) => e.stopPropagation()} className={b("body", {disappearing: isClosing})}>
                <div className={b("header")}>
                    <img onClick={handleClose} className={b("cross")} src="img/grey-cross.png" />
                    <div className={b("title")}>{title}</div>
                    <div className={b("subtitle")}>{subtitle}</div>
                </div>
                <div className={b("content")}>
                    {content}
                </div>
            </div>
        </div>
    );
}

export default Modal;