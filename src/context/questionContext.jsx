import React, { createContext, useContext, useState } from 'react'

const QuestionContext = createContext();


function QuestionProvider({ children }) {
    const [questionBank, setQuestionBank] = useState([])

    const value = { questionBank, setQuestionBank }
    return (
        <QuestionContext.Provider value={value}>
            {children}
        </QuestionContext.Provider>
    );
}

function useQuestionBank() {
    const context = useContext(QuestionContext);
    if (!context) {
        throw new Error(`useQuestion must be used within a QuestionProvider`)
    }
    return context;

}

export { QuestionProvider, useQuestionBank }; 
