import React, { useState } from 'react';

const InputQuestion = ({ onAddQuestion }) => {
    const [question, setquestion] = useState('');
    const [correctAnswer, setcorrectAnswer] = useState('');
    const [options, setoptions] = useState(['', '', '', ''])

    const handleQuestion = (e) => {
        const { value } = e.target
        setquestion(value)
    }

    const handleOption = (e, index) => {
        const { value } = e.target
        const optionsArray = [...options]
        optionsArray[index] = value
        setoptions(optionsArray)
    }

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

        if (question.trim() === '' || correctAnswer.trim() === '' || options.some((option) => option.trim() === '')) {
            alert('please fill in the fields')
        } else {
            onAddQuestion(questionObject)
        }

        setquestion('')
        setcorrectAnswer('')
        setoptions(['', '', '', ''])

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
                        <textarea name="" id="" rows="5" value={question} onChange={handleQuestion} className='input' placeholder='Enter Question'></textarea>
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
