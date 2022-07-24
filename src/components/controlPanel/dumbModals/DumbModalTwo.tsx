import { FC } from 'react';
import { block } from 'bem-cn';
import { DumbModalProps } from '../../../interfaces/index';
import DumbModalOne from './DumbModalOne';
import "./dumbModal.scss"

const b = block("dumb");

const DumbModalTwo: FC<DumbModalProps> = ({changeModal}) => {

    const modalConfig = {
        title: "Модальное окно 1",
        content: <DumbModalOne changeModal={changeModal} />
    }

    return (
        <div className={b()}>
            <div className={b("title")}>Модальное окно 2</div>
            {changeModal && (<button onClick={() => changeModal(modalConfig)}>Заменить окно</button>)}
        </div>
    );
}

export default DumbModalTwo;