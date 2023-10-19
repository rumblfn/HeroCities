import {useState, useEffect} from "react";
import {Data, initialTestData, initialSelectedOptions} from "@/data/inititalTestData"
import AnswersField from "@/components/AnswersField";
import styles from "@/styles/test.module.css";

export default function Test() {
    const [idsArray, setIdsArray] = useState<number[]>([])
    const [answersChecked, setAnswersChecked] = useState<boolean>(false)
    const [testData, setTestData] = useState<Data>({});
    const [selectedOptions, setSelectedOptions] = useState<number[]>(initialSelectedOptions);

    const handleOptionsChange = (questionId: number, optionId: number) : void => {
        const updatedSelectedOptions = selectedOptions.map((oldOptionId, i) => {
            return i != questionId - 1 ? oldOptionId : optionId
        })
        setSelectedOptions(updatedSelectedOptions);
    }

    const getColoredQuestionBlock = (questionId : number) : Object => {
        let style: Object = {}
        if (answersChecked) {
            style = {backgroundColor: selectedOptions[questionId - 1] == testData[questionId].correctAnswerId ?
                    "#d3ffce" :
                    "#fa8072"}
        }
        return style
    }

    const calculateResult = () : number => {
        const allNumber: number = idsArray.length
        let correctNumber: number = 0
        for (const i of idsArray) {
            if (testData[i].correctAnswerId == selectedOptions[i - 1]){
                correctNumber += 1
            }
        }
        return (correctNumber / allNumber) * 100
    }

    useEffect(() => {
        setTestData(initialTestData)
        const numberIdsArray = Object.keys(initialTestData).map((id) => Number(id))
        setIdsArray(numberIdsArray)
    }, [])

    if (Object.keys(testData).length == 0) {
        return null
    }

    return (
        <div className="container">
            {idsArray.map((questionId) => (
                <div key={questionId} className={styles.question_block} style={getColoredQuestionBlock(questionId)}>
                    <div className={styles.question_header}>
                        <p>Вопрос {questionId}:</p>
                        <p>{testData[questionId].value}</p>
                    </div>
                    {AnswersField(
                        testData[questionId].answerVariants,
                        questionId,
                        selectedOptions,
                        handleOptionsChange,
                        answersChecked
                    )}
                </div>
            ))}
            <button className={styles.check_answers} onClick={() => setAnswersChecked(true)}>Check answers</button>
            {answersChecked ?
                <p className={styles.your_result}>Your result is {calculateResult()}%</p> :
                null
            }
        </div>
    );
};