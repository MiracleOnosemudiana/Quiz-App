// import { questionBank as initialquestionBank } from './assets/questionBank'
// import QuizComponent from './QuizComponent';
import { useEffect, useState } from 'react';
import InputQuestion from './InputQuestion';
import Quiz from './Quiz'
import { useQuestionBank } from './context/questionContext';
import RemoveQuestion from './RemoveQuestion';
import AuthenticationPage from './AuthenticationPage';
import { useAuth } from './context/authContext';
import { Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';

function App() {
  const { questionBank, setQuestionBank } = useQuestionBank();
  const { authenticted, setAuthenticated } = useAuth()
  useEffect(() => {
    let localQuestion = localStorage.getItem("QuestionBank");
    if (localQuestion) {
      localQuestion = JSON.parse(localQuestion);
      setQuestionBank(localQuestion)
    } else {
      localStorage.setItem('QuestionBank', JSON.stringify(questionBank))
    }
  }, []) //run just once

  useEffect(() => {
    let isAuth = localStorage.getItem('isLoggedIn')
    if (isAuth) {
      const auth = JSON.parse(isAuth)
      setAuthenticated(auth)
    }
  }, [questionBank]);

  return (
    <>
      <div>
        {/* <QuizComponent questionBank={questionBank} /> */}
        {!authenticted ? <AuthenticationPage /> :
          <div>
            <Navbar />
            <Routes>
              <Route exact path='/' element={<Home />} />
              <Route path="/quiz" element={<Quiz />} />
              <Route path="/add-questions" element={<InputQuestion />} />
              <Route path="/remove-questions" element={<RemoveQuestion />} />
            </Routes>

          </div>
        }
      </div>
    </>
  )
}

export default App
