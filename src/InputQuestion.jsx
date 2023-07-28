import React, { useEffect, useState } from 'react';
import { useQuestionBank } from './context/questionContext';

const InputQuestion = () => {
    const { questionBank, setQuestionBank } = useQuestionBank();
    const [question, setQuestion] = useState('')
    const [correctAnswer, setcorrectAnswer] = useState('');
    const [options, setoptions] = useState(['', '', '', ''])

    //to get the question
    const handleQuestion = (e) => {
        const { value } = e.target
        setQuestion(value)
    }

    //to get the different options
    const handleOption = (e, index) => {
        const { value } = e.target
        const optionsArray = [...options]
        optionsArray[index] = value
        setoptions(optionsArray)
    }

    //to get the correct option 
    const handleCorrectAnswer = (e) => {
        const { value } = e.target
        setcorrectAnswer(value)
    }


    const questionObject = {
        question: question.trim(),
        answer: correctAnswer.trim(),
        options: options.reduce((result, each, index) => {
            result[index] = each.trim()
            return result
        }, [])
    }


    const handleSubmit = (e) => {
        e.preventDefault();

        if (
            question.trim() === '' ||
            correctAnswer.trim() === '' ||
            options.some((option) => option.trim() === '')) {
            alert('please fill in the fields')
        } else {
            let localQuestion;
            localQuestion = localStorage.getItem('QuestionBank')

            if (!localStorage) {
                localQuestion = localStorage.setItem('QuestionBank', JSON.stringify([questionObject]))
            } else {
                localQuestion = localStorage.getItem('QuestionBank')
                localQuestion = JSON.parse(localQuestion)
                localQuestion = [...localQuestion, questionObject]
                localQuestion = JSON.stringify(localQuestion)
                localStorage.setItem('QuestionBank', localQuestion)
                setQuestionBank(JSON.parse(localQuestion))
            }

            setQuestion('')
            setcorrectAnswer('')
            setoptions(['', '', '', ''])
        }
    }

    return (
        <div>
            <form action="" className='wrapper addQuestion' onSubmit={handleSubmit}>
                <center><h2>ADD QUESTION</h2></center>
                <div>
                    <em>
                        <h4>Note:</h4>
                        <p>Write the Questions, Correct answer and Options in sentence case</p>
                        <p></p>
                    </em>
                </div>
                <br />
                <div className='flex'>
                    <div>
                        <label htmlFor="" className=''><b>Question:</b></label>
                        <textarea name="" id="" rows="5"
                            value={question}
                            onChange={handleQuestion} className='input textarea' placeholder='Enter Question'></textarea>
                    </div>

                    {options.map((option, index) => (
                        <div key={index} className='optionClass'>
                            <label htmlFor=""><b>{String.fromCharCode(65 + index)}</b></label>
                            <input type="text" className='input'
                                value={option}
                                placeholder='Enter option' onChange={(e) => handleOption(e, index)} />
                        </div>
                    ))}

                    <div>
                        <label htmlFor=""><b>Correct Answer:</b></label>
                        <input type="text" className='input' placeholder='Enter correct answer' value={correctAnswer} onChange={handleCorrectAnswer} />
                    </div>
                </div>
                <center><button type='submit'>Add Question</button></center>
            </form>
        </div>
    );
}

export default InputQuestion;
