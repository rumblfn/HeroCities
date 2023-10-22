export const initialSelectedOptions = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]

export type AnswerVariant = {
    id: number,
    value: string;
}

export type AnswerVariantsData = Array<AnswerVariant>

export type QuestionData = {
    value: string,
    answerVariants: AnswerVariantsData,
    correctAnswerId: number
}

export type Data = {
    [key: number]: QuestionData
}

export const initialTestData: Data = {
    1: {
        value: "Есть ли у Москвы звание Город-Герой?",
        answerVariants: [
            {id: 1, value: "-Да, получено 14 сентября 1973"},
            {id: 2, value: "-Нет, Москва была Городом-Героем с 8 мая 1965 до 15 января 1991"},
            {id: 3, value: "-Да, получено 8 мая 1965"},
            {id: 4, value: "-Нет, Москва никогда не имела такого звания"},
        ],
        correctAnswerId: 3,
    },
    2: {
        value: "Есть ли у Волгограда (Сталинградa) звание Город-Герой?",
        answerVariants: [
            {id: 1, value: "-Нет, Волгоград никогда не был Городом-Героем"},
            {id: 2, value: "-Да, получено 25 июня 1974"},
            {id: 3, value: "-Да, получено 8 мая 1965"},
            {id: 4, value: "-Нет, Волгоград лишили этого звания после переименования"}
        ],
        correctAnswerId: 3,
    },
    3: {
        value: "Есть ли у Новосибирска звание Город-Герой?",
        answerVariants: [
            {id: 1, value: "-Да, получено 7 декабря 1976"},
            {id: 2, value: "-Нет, никогда не было"},
            {id: 3, value: "-Да, получено 15 августа 2006"},
            {id: 4, value: "-Нет, Новосибирск был Городом-Героем с 8 мая 1985 до 21 ноября 1999"}
        ],
        correctAnswerId: 2,
    },
    4: {
        value: "Является ли Одесса Городом-Героем?",
        answerVariants: [
            {id: 1, value: "-Да, с 8 мая 1965"},
            {id: 2, value: "-Нет, её лишили этого звания после начала СВО"},
            {id: 3, value: "-Нет, никогда не была"},
        ],
        correctAnswerId: 1,
    },
    5: {
        value: "Сколько длилась блокада Ленинграда?",
        answerVariants: [
            {id: 1, value: "-На протяжении всей ВОВ"},
            {id: 2, value: "-Более 2 лет"},
            {id: 3, value: "-Немецкие войска так и не подошли к Ленинграду"},
        ],
        correctAnswerId: 2,
    },
    6: {
        value: "Является ли Минск Городом-Героем?",
        answerVariants: [
            {id: 1, value: "-Нет, он потерял это звание после распада СССР"},
            {id: 2, value: "-Да, начиная с 7 декабря 1976"},
            {id: 3, value: "-Да, начиная с 26 июня 1974"},
            {id: 4, value: "-Нет, никогда не был"}
        ],
        correctAnswerId: 3,
    },
    7: {
        value: "Есть ли у Новорссийска звание Город-Герой?",
        answerVariants: [
            {id: 1, value: "-Нет, никогда не было"},
            {id: 2, value: "-Да, получено 14 сентября 1973"},
            {id: 3, value: "-Да, получено 8 мая 1965"},
        ],
        correctAnswerId: 2,
    },
    8: {
        value: "Есть ли у Киева звание Город-Герой?",
        answerVariants: [
            {id: 1, value: "-Да, с 8 мая 1965"},
            {id: 2, value: "-Нет, Киев лишили этого звания после распада СССР"},
            {id: 3, value: "-Нет, Киев лишили этого звания после начала СВО"},
            {id: 4, value: "-Да, с 26 июня 1974"}
        ],
        correctAnswerId: 1,
    },
    9: {
        value: "Является ли Брест Городом-Героем?",
        answerVariants: [
            {id: 1, value: "-Да, с 8 мая 1965"},
            {id: 2, value: "-Нет, никогда не являлся"},
            {id: 3, value: "-Да, с 6 мая 1965"},
            {id: 4, value: "-Нет, перестал быть после развала СССР"}
        ],
        correctAnswerId: 2,
    },
    10: {
        value: "Является ли Тула Городом-Героем?",
        answerVariants: [
            {id: 1, value: "-Да, с 8 мая 1985"},
            {id: 2, value: "-Да, с 7 декабря 1976"},
            {id: 3, value: "-Нет, никогда не была"}
        ],
        correctAnswerId: 1,
    },
    11: {
        value: "Является ли Симферополь Городом-Героем?",
        answerVariants: [
            {id: 1, value: "-Да, с 8 мая 1965"},
            {id: 2, value: "-Нет, после передачи Крыма Украине"},
            {id: 3, value: "-Нет, никогда не был"}
        ],
        correctAnswerId: 3
    },
    12: {
        value: "Сколько длилась оборона Киева?",
        answerVariants: [
            {id: 1, value: "-Почти два года"},
            {id: 2, value: "-814 дней"},
            {id: 3, value: "-70 дней"},
            {id: 4, value: "-Нисколько, немецкие войска так и не дошли"}
        ],
        correctAnswerId: 3,
    },
    13: {
        value: "Есть ли у Керчи звание Город-Герой?",
        answerVariants: [
            {id: 1, value: "-Да, получено 14 Сентября 1973"},
            {id: 2, value: "-Да, получено 8 мая 1965"},
            {id: 3, value: "-Нет, никогда не было"}
        ],
        correctAnswerId: 1
    },
    14: {
        value: "Есть ли у Смоленска звание Город-Герой?",
        answerVariants: [
            {id: 1, value: "-Да, получено 25 января 1973"},
            {id: 2, value: "-Нет, никогда не было"},
            {id: 3, value: "-Нет, Смоленск был Городом-Героем с 25 января 1973 до 11 апреля 1995"},
            {id: 4, value: "-Да, получено 6 мая 1985"}
        ],
        correctAnswerId: 4,
    },
    15: {
        value: "Является ли Севастополь Городом-Героем?",
        answerVariants: [
            {id: 1, value: "-Нет, никогда не был"},
            {id: 2, value: "-Да, с 7 декабря 1976"},
            {id: 3, value: "-Нет, перестал быть после передачи Крыма Украине"},
            {id: 4, value: "-Да, с 8 мая 1965"}
        ],
        correctAnswerId: 4
    },
    16: {
        value: "Является ли Мурманск Городом-Героем?",
        answerVariants: [
            {id: 1, value: "-Да, с 8 мая 1985"},
            {id: 2, value: "-Нет, никогда не был"},
            {id: 3, value: "-Да, с 6 мая 1985"}
        ],
        correctAnswerId: 3
    }
}
