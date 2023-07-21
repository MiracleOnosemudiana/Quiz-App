import React, { useState } from 'react';

const QuizComponent = ({ questionBank }) => {
    const [currentQuestion, setCurrentQuestion] = useState(0)
    const [selectedOption, setSelectedOption] = useState('')
    const [score, setScore] = useState(0);
    const [selectedAnswers, setSelectedAnswers] = useState([]);

    const correctAnswers = []
    for (let i = 0; i < questionBank.length; i++) {
        correctAnswers.push(questionBank[i].answer)

    }

    const selectOption = (option) => {
        const arr = [...selectedAnswers];
        setSelectedOption(option)
        arr[currentQuestion] = option;
        setSelectedAnswers(arr);

    }


    const handleNext = () => {
        setCurrentQuestion(currentQuestion + 1)

    }

    const handlePrevious = () => {

        setCurrentQuestion(currentQuestion - 1)

    }

    const handleSubmit = (e) => {

        e.preventDefault();
        let total = 0;
        setCurrentQuestion(questionBank.length)
        for (let i = 0; i < questionBank.length; i++) {
            if (correctAnswers[i] === selectedAnswers[i]) {
                total++;
            }
        }
        setScore(total)
    }

    return (
        <div>
            <h1 className='appName'>QUIZ APP</h1>
            <form action="" className='wrapper' onSubmit={handleSubmit}>
                {currentQuestion < questionBank.length ? (
                    <>
                        <h2>QUESTION {currentQuestion + 1}</h2>
                        <p className='question'>{questionBank[currentQuestion].question}</p>

                        {questionBank[currentQuestion].options.map((option, index) => (
                            <div className='option' key={index}>
                                <input
                                    type="radio"
                                    name="ans"
                                    id={`input${index}`}
                                    value={option}
                                    checked={selectedOption === option}
                                    onChange={() => selectOption(option)}
                                />
                                <label htmlFor={`input${index}`}>{String.fromCharCode(65 + index)}. {option}</label>
                            </div>
                        ))}



                        <div className='button'>

                            {currentQuestion > 0 && <button type="button" onClick={handlePrevious}>Previous</button>}

                            {currentQuestion < questionBank.length - 1 && <button type='button' onClick={handleNext}>Next</button>}

                            {currentQuestion == questionBank.length - 1 ? <button type='submit'>Submit</button> : <button type='submit'>Submit Now</button>}

                        </div>

                    </>
                ) : (
                    <div>
                        <h2>Quiz Complete!</h2>
                        <p>Your score: {score} out of {questionBank.length}</p>

                    </div>
                )}
            </form>
        </div>
    );
}

export default QuizComponent;

