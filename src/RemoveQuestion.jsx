import React, { useState } from 'react';
import { useQuestionBank } from './context/questionContext';

const RemoveQuestion = () => {
    const { questionBank, setQuestionBank } = useQuestionBank();
    const [indexNum, setIndexNum] = useState('');
    const getIndex = (e) => {
        const { value } = e.target
        setIndexNum(value)
    }
    const handleClick = () => {
        localStorage.setItem('QuestionBank', JSON.stringify([]))
        setQuestionBank([])


    }

    const handleSubmit = (e) => {
        e.preventDefault();
        let localQuestion;
        localQuestion = localStorage.getItem('QuestionBank')
        if (!localQuestion) {
            alert('THERE ARE NO QUESTIONS TO DELETE')
        } else {
            localQuestion = JSON.parse(localQuestion)
            delete localQuestion[indexNum - 1]

            localQuestion = localQuestion.filter(localQuestionItem => {
                return localQuestionItem !== undefined
            })
            localQuestion = JSON.stringify(localQuestion)
            localStorage.setItem('QuestionBank', localQuestion)
            setQuestionBank(JSON.parse(localQuestion))

        }
        setIndexNum('')


    }
    return (
        <div>
            <form action="" className='wrapper' onSubmit={handleSubmit}>
                <center><h2>REMOVE QUESTION</h2></center>
                <div>
                    <em>
                        <h4>Note:</h4>
                        <p>Insert the number of the question you want to remove</p>
                        <p></p>
                    </em>
                </div>
                <br />
                <div className='flex'>
                    <div>
                        <label htmlFor=""><b>Question number</b></label>
                        <input type='number'
                            value={indexNum}
                            className='input' placeholder='Insert question number' onChange={getIndex} />
                    </div>
                </div>
                <center><button type='submit'>Remove Question</button></center>
                <br />
                <hr />
                <center><button type='button' onClick={handleClick}>Remove All Questions</button></center>
            </form>
        </div>
    );
}

export default RemoveQuestion;
