import {FC} from "react";

export const Footer: FC = () => {
  return <footer className="footer">
    <div className="container">
      <div style={{display: "flex", flexDirection: "column", gap: 6, lineHeight: "80%"}}>
        <p>2023 - группа 235</p>
        <p>Проект по основам Российской государственности.</p>
        <p>В ролях: Вечеровский Роберт, Тазеев Алмаз, Кабиров Роман, Валиахметов Шамиль, Михаил Лукашук.</p>
      </div>
    </div>
  </footer>
}