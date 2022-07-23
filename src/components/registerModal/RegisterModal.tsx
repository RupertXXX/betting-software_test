import { block } from 'bem-cn';
import "./registerModal.scss"

const months = [
    "Январь",
    "Февраль",
    "Март",
    "Апрель",
    "Май",
    "Июнь",
    "Июль",
    "Август",
    "Сентябрь",
    "Октябрь",
    "Ноябрь",
    "Декабрь"
];
const currentYear = (new Date()).getFullYear();

const b = block("modal");

export default function RegisterModal() {
    return (
        <div className={b()}>
            <div className={b("top")}>
                <div className={b("title")}>Регистрация</div>
                <div className={b("subtitle")}>Быстро и легко</div>
            </div>
            <div className={b("bottom")}>
                <input className={b("input").mix("input")} placeholder="email" type="text" />
                <div className={b("row")}>
                    <input className={b("input", {half: true}).mix("input")} placeholder="Пароль" type="password" />
                    <input className={b("input", {half: true}).mix("input")} placeholder="Повторите пароль" type="password" />
                </div>
                <div className={b("row")}>
                    <input className={b("input", {half: true}).mix("input")} placeholder="Имя" type="text" />
                    <input className={b("input", {half: true}).mix("input")} placeholder="Фамилия" type="text" />
                </div>
                <div className={b("input-title")}>
                    День рождения
                </div>
                <div className={b("row")}>
                    <select title="День" className={b("input", {third: true}).mix("input")}>
                        { [...Array(31)].map((el, i) => <option key={i} value={i+1}>{i+1}</option> ) }
                    </select>
                    <select title="Месяц" className={b("input", {third: true}).mix("input")}>
                        { months.map((el, i) => <option key={i} value={el}>{el}</option> ) }
                    </select>
                    <select title="Год" className={b("input", {third: true}).mix("input")}>
                        { [...Array(120)].map((el, i) => <option key={i} value={currentYear - i}>{currentYear - i}</option> ) }
                    </select>
                </div>
                <button className={b("button")}>
                    Регистрация
                </button>
            </div>
        </div>
    );
}
