import { ReactNode } from "react"

export interface IModalConfig {
    title?: string | ReactNode;
    subtitle?: string | ReactNode;
    content?: string | ReactNode;
}

export interface DumbModalProps {
    changeModal?: (modalConfig: IModalConfig) => void;
}