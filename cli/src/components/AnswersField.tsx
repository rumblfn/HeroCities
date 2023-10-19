import {AnswerVariantsData} from "@/data/inititalTestData"
import styles from "@/styles/test.module.css";

export default function AnswersField(answerVariants: AnswerVariantsData,
                                     questionId: number,
                                     selectedOptions: number[],
                                     handleOptionsChange: (questionId: number, optionId: number) => void,
                                     answersChecked: boolean){

    return (
        <div className={styles.answer_variants_container}>
            {answerVariants.map((answer) => (
                <div className={styles.answer_block} key={answer.id}>
                    <input
                        key={answer.id}
                        type="radio"
                        checked={selectedOptions[questionId - 1] === answer.id}
                        onChange={() => handleOptionsChange(questionId, answer.id)}
                        disabled={answersChecked}
                    />
                    <p>&nbsp;{answer.value}</p>
                </div>
            ))}
        </div>
    )
}