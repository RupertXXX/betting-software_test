import { createContext, FC, ReactNode, useState } from "react";
import { IModalConfig } from "../../interfaces";
import Modal from "./modal/Modal";

export const ModalContext = createContext({
    openModal: (modalConfig: IModalConfig) => {},
    changeModal: (modalConfig: IModalConfig) => {},
    closeModal: () => {},
})

interface ModalProviderProps {
    children: ReactNode;
}

export const ModalProvider: FC<ModalProviderProps> = ({ children }) => {
    const [isModal, setIsModal] = useState(false);
    const [modal, setModal] = useState<IModalConfig>({});
    
    const openModal = (modalConfig: IModalConfig) => {
        setModal(modalConfig);
        setIsModal(true);
    }
    const closeModal = () => {
        setIsModal(false);
    }
    const changeModal = (modalConfig: IModalConfig) => {
        closeModal();
        openModal(modalConfig);
    }

    return (
        <ModalContext.Provider value={{
            openModal,
            closeModal,
            changeModal,
        }}>
            {isModal && <Modal {...modal} />}
            {children}
        </ModalContext.Provider>
    )
}