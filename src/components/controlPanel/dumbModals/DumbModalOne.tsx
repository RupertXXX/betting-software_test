import { FC } from 'react';
import { block } from 'bem-cn';
import { DumbModalProps } from '../../../interfaces/index';
import DumbModalTwo from './DumbModalTwo';
import "./dumbModal.scss"

const b = block("dumb");

const DumbModalOne: FC<DumbModalProps> = ({changeModal}) => {

    const modalConfig = {
        title: "Модальное окно 2",
        content: <DumbModalTwo changeModal={changeModal} />
    }

    return (
        <div className={b()}>
            <div className={b("title")}>Модальное окно 1</div>
            <div className={b("paragraph")}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>
            {changeModal && (<button onClick={() => changeModal(modalConfig)}>Заменить окно</button>)}
        </div>
    );
}

export default DumbModalOne;