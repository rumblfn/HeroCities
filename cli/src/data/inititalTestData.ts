export const initialSelectedOptions = [0, 0, 0, 0, 0]

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
        value: "В каком году Москва стала городом героем?",
        answerVariants: [
            {id: 1, value: "1800"},
            {id: 2, value: "1965"},
            {id: 3, value: "2000"},
            {id: 4, value: "2009"},
        ],
        correctAnswerId: 2,
    },
    2: {
        value: "В каком году Москва стала городом городом городом героем?",
        answerVariants: [
            {id: 1, value: "1800"},
            {id: 2, value: "1965"},
            {id: 3, value: "2000"},
        ],
        correctAnswerId: 2,
    },
    3: {
        value: "В каком году Москва стала?",
        answerVariants: [
            {id: 1, value: "1800"},
            {id: 2, value: "1965"},
            {id: 3, value: "2000"},
        ],
        correctAnswerId: 2,
    },
    4: {
        value: "В каком году Москва стала городом городом героем?",
        answerVariants: [
            {id: 1, value: "1800"},
            {id: 2, value: "1965"},
            {id: 3, value: "2000"},
        ],
        correctAnswerId: 2,
    },
    5: {
        value: "В году Москва стала городом героем?",
        answerVariants: [
            {id: 1, value: "1800"},
            {id: 2, value: "1965"},
            {id: 3, value: "2000"},
        ],
        correctAnswerId: 2,
    }
}