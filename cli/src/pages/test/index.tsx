import {useState, useEffect} from "react";
import Link from "next/link";
import {Data, initialTestData, initialSelectedOptions} from "@/data/inititalTestData"
import AnswersField from "@/components/AnswersField";
import styles from "@/styles/test.module.css";
import Image from "next/image";
import Chart from "@/components/Chart";

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
                    "#77e873" :
                    "#e16b60",
                    opacity: 0.8}
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
        return Math.round((correctNumber / allNumber) * 100)
    }

    const replayTest = () => {
        setSelectedOptions(initialSelectedOptions)
        setAnswersChecked(false)
        window.scrollTo({top: 0, behavior: 'smooth'})
    }

    const checkAnswers = () => {
        setAnswersChecked(true)
        window.scrollTo({top: 0, behavior: 'smooth'})
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
            <div className={styles.test_header}>
                <p className={styles.test_header_name}>Тест по городам-героям</p>
                <p className={styles.test_header_desc}>
                    <p>Узнайте, насколько хорошо вы знаете историю городов героев.</p>
                    <p>Предварительно <Link className={styles.learn_material_href} href="/">изучите материалы</Link> по данной теме.</p>
                    <p>Желаем удачи.</p>
                </p>
            </div>
            {answersChecked ?
                <div className={styles.your_result_container}>
                    <div className={styles.your_result}>
                        {Chart(calculateResult())}
                    </div>
                </div>
                :
                null
            }
            <div className={styles.test_base}>
                <div className={styles.test_base_list}>
                    {idsArray.map((questionId) => (
                        <div key={questionId} className={styles.question_block}>
                            <div className={styles.question_res_line} style={getColoredQuestionBlock(questionId)}>&nbsp;</div>
                            <div key={questionId} className={styles.question}>
                                <div className={styles.question_header}>
                                    <p className={styles.question_header_count}>{questionId} / {idsArray.length}</p>
                                    <p className={styles.question_header_desc}>{testData[questionId].value}</p>
                                </div>
                                {AnswersField(
                                    testData[questionId],
                                    questionId,
                                    selectedOptions,
                                    handleOptionsChange,
                                    answersChecked
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className={styles.test_footer}>
                <div className={styles.test_footer_container}>
                    <button className={styles.bottom_button} onClick={() => checkAnswers()}>
                        Проверить
                        <div className={styles.bottom_button_icon_check}>
                            <Image src="/check.svg" alt="arrow" width={20} height={20}/>
                        </div>
                    </button>
                    <button className={styles.bottom_button} onClick={() => replayTest()}>
                        Пройти заново
                        <div className={styles.bottom_button_icon_restart}>
                            <Image src="/restart.svg" alt="arrow" width={20} height={20}/>
                        </div>
                    </button>
                </div>
            </div>
        </div>
    );
};
