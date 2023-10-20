import {AnswerVariant, QuestionData} from "@/data/inititalTestData"
import styles from "@/styles/test.module.css";

export default function AnswersField(questionData: QuestionData,
                                     questionId: number,
                                     selectedOptions: number[],
                                     handleOptionsChange: (questionId: number, optionId: number) => void,
                                     answersChecked: boolean){

    const getColoredRightAnswer = (answer: AnswerVariant) : Object => {
        let style: Object = {}
        if (answersChecked) {
            style = questionData.correctAnswerId == answer.id ?
                    {
                        color: "var(--secondary)"
                    } :
                    {}
        }
        return style
    }

    return (
        <div className={styles.answer_variants_container}>
            {questionData.answerVariants.map((answer) => (
                <div className={styles.answer_block} key={answer.id}>
                    <input
                        key={answer.id}
                        type="radio"
                        checked={selectedOptions[questionId - 1] === answer.id}
                        onChange={() => handleOptionsChange(questionId, answer.id)}
                        disabled={answersChecked}
                    />
                    <div style={getColoredRightAnswer(answer)}>{answer.value}</div>
                </div>
            ))}
        </div>
    )
}