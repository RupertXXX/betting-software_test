import { useContext } from "react";
import { block } from 'bem-cn';
import { ModalContext } from "../modalProvider/ModalProvider";
import DumbModalOne from "./dumbModals/DumbModalOne";
import DumbModalTwo from "./dumbModals/DumbModalTwo";
import RegisterModal from "./registerModal/RegisterModal";
import "./controlPanel.scss";

const b = block('control-panel');

export default function ControlPanel() {
    const { openModal, changeModal } = useContext(ModalContext);

    const handleClickOne = () => {
        openModal({
            title: "Модальное окно 1",
            content: <DumbModalOne changeModal={changeModal} />
        });
    }

    const handleClickTwo = () => {
        openModal({
            title: 'Модальное окно 2',
            content: <DumbModalTwo changeModal={changeModal} />
        });
    }

    const handleClickRegister = () => {
        openModal({
            title: 'Регистрация',
            subtitle: "Быстро и легко",
            content: <RegisterModal />
        });
    }

    return (
        <div className={b()}>
            <button className={b("button")} onClick={handleClickOne}>Модальное окно 1</button>
            <button className={b("button")} onClick={handleClickTwo}>Модальное окно 2</button>
            <button className={b("button")} onClick={handleClickRegister}>Регистрация</button>
        </div>
    )
}