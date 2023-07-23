import { useState } from 'react';
import { questionBank as initialquestionBank } from './assets/questionBank'
import InputQuestion from './InputQuestion';
import QuizComponent from './QuizComponent';
import Quizz from './Quizz'

function App() {
  const [questionBank, setquestionBank] = useState([]);
  const [preload, setpreload] = useState(false);


  const handleAddQuestions = (questionObject) => {
    setquestionBank((questionBank) => [...questionBank, questionObject])
  }


  setTimeout(() => {
    setpreload(true)
  }, 5000);
  // useEffect(() => {


  //   return () => {

  //   };
  // }, []);

  return (
    <>
      {!preload ? <center><br /><br /><br /><br /><h2> WELCOME TO MY QUIZ APP</h2></center> : <div className='flexer'>
        {/* <QuizComponent questionBank={questionBank} /> */}
        <div>
          <div>
            <InputQuestion
              peace='ready'
              onAddQuestion={handleAddQuestions}
            />

          </div>
        </div>
        <div>
          <Quizz questionBank={questionBank} />
        </div>
      </div>}
    </>
  )
}

export default App
