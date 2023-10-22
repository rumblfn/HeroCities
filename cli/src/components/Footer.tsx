import {FC} from "react";

export const Footer: FC = () => {
  return <footer className="footer">
    <div className="container">
      <div style={{display: "flex", flexDirection: "column", gap: 6, lineHeight: "85%"}}>
        <p>Октябрь 2023 - группа БПИ235</p>
        <p>Проект по дисциплине "Основам российской государственности".</p>
        <p>Авторы: Вечеровский Роберт, Тазеев Алмаз, Кабиров Роман, Валиахметов Шамиль, Михаил Лукашук.</p>
      </div>
    </div>
  </footer>
}
