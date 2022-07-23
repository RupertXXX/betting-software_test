import { block } from 'bem-cn';

const b = block('modal');

export default function ModalContainer() {
    return (
        <>
            <div className={b("", {back: true})}>

            </div>
            <div className={b()}>
                
            </div>
        </>
    );
}
