import { questionBank } from './assets/questionBank'
import QuizComponent from './QuizComponent';
import Quizz from './Quizz'

function App() {

  return (
    <div className=''>
      {/* <QuizComponent questionBank={questionBank} /> */}
      <Quizz questionBank={questionBank} />
    </div>
  )
}

export default App
