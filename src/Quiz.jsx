import React, { useEffect, useState } from 'react';
import { useQuestionBank } from './context/questionContext';
import { Link } from 'react-router-dom';
import { useToggle } from './context/toggleContext';

const QuizComponent = () => {
    const { questionBank, setQuestionBank } = useQuestionBank();
    const [selectedOption, setSelectedOption] = useState('')
    const [selectedOptionsArray, setSelectedOptionsArray] = useState([])
    const [score, setScore] = useState(0);
    const [submitted, setSubmitted] = useState(false);
    const { navToggle, setNavToggle } = useToggle()

    

    const closeNav = () => {
        setNavToggle(false)
    }

    const selectOption = (option, questionIndex) => {
        setSelectedOption(option)
        const choosenAnswers = [...selectedOptionsArray]
        choosenAnswers[questionIndex] = option
        setSelectedOptionsArray(choosenAnswers)
        setSubmitted(false)

    }

    const handleSubmit = (e) => {
        e.preventDefault();
        let total = 0
        for (let i = 0; i < questionBank.length; i++) {
            if (selectedOptionsArray[i] !== questionBank[i].answer) {
                total += null
            }
            else {
                total += 1
            }
        }
        setScore(total)
        setSubmitted(true)
        setSelectedOptionsArray([])
    }

    return (


        <div>

            {questionBank.length == 0 ? (
                <>
                    <h1 className='appName'>QUIZ APP</h1>
                    <form action="" className='wrapper' onSubmit={handleSubmit}>
                        <center>
                            <i>
                                <h3>You have no question set on your app</h3>
                                <p>Click on the button below to add questions</p>
                                <Link to='/add-questions' onClick={closeNav}>
                                    <button type='button'>Go to Add Questions page</button>
                                </Link>
                            </i>
                        </center>
                    </form>
                </>
            ) : (
                <>
                    <h1 className='appName'>QUIZ APP</h1>
                    <form action="" className='wrapper' onSubmit={handleSubmit}>
                        {questionBank.map(({ question, options }, questionIndex) => (
                            <div key={questionIndex} className='individualQuestion'>
                                <h3 className='questionNo'>Question {questionIndex + 1}</h3>
                                <p className='question'>{question}</p>

                                {options.map((option, optionIndex) => (
                                    <div className='option' key={optionIndex}>
                                        <input
                                            type="radio"
                                            name={`ans${questionIndex}`}
                                            id={`input${questionIndex}${optionIndex}`}
                                            value={option}
                                            checked={selectedOptionsArray[questionIndex] == option}
                                            onChange={() => selectOption(option, questionIndex)}

                                        />
                                        <label htmlFor={`input${questionIndex}${optionIndex}`}>{String.fromCharCode(65 + optionIndex)}. {option}</label>
                                    </div>
                                ))}

                            </div>
                        ))}
                        <div className='button'>
                            <button type={`submit`} disabled={submitted ? true : false}>{submitted ? <p>Submitted</p> : <p>Submit</p>}</button>
                        </div>
                        <br />
                        <center>
                            {submitted &&
                                <div>
                                    <h2>Quiz Complete!</h2>
                                    <br />
                                    <p>Your score: <b><em>{score}</em></b> out of <b><em>{questionBank.length}</em></b></p>
                                    <br />
                                    <h4><em>Choose an option to begin test</em></h4>
                                </div>
                            }
                        </center>

                    </form>
                </>
            )}

        </div >
    );
}

export default QuizComponent;

