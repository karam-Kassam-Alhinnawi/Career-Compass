import React, { useState } from 'react';
import { questions } from '../../../data/data'; // Adjust the import path as needed
import { majorDetails } from '../../../data/data'; // Adjust the import path as needed

const Quiz = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [result, setResult] = useState(null);

  const handleAnswerClick = (category, score) => {
    setAnswers(prevAnswers => ({
      ...prevAnswers,
      [currentQuestionIndex]: { category, score }
    }));
    
  };

  const displayResults = () => {
    const categoryScores = questions.reduce((acc, question, index) => {
      const answer = answers[index];
      if (answer) {
        acc[answer.category] = (acc[answer.category] || 0) + answer.score;
      }
      return acc;
    }, {});

    const highestScoreCategory = Object.keys(categoryScores).reduce((a, b) => categoryScores[a] > categoryScores[b] ? a : b);

    setResult(highestScoreCategory);
  };

  const currentQuestion = questions[currentQuestionIndex];

  const nextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else{
      displayResults();
    }
  }

  const previousQuestion = () => {
    setCurrentQuestionIndex(currentQuestionIndex - 1);
  }

  const major = majorDetails[result]

  return (
    <div className="quiz-container">
      {result === null ? (
        <>
         
         <div className='mb-14 mt-8'>
           <p className='font-bold text-lg'>Quiz Progress</p>
           <p>Question {currentQuestionIndex + 1} of {questions.length}</p>

          <progress className='progress-bar mt-5 w-[400px]' 
          value={currentQuestionIndex + 1} max={questions.length}></progress>

         </div>
        
          <h1 className="question">{currentQuestion.question}</h1>
          <div className='flex flex-col'>
          {currentQuestion.answers.map((answer, index) => (

             <label htmlFor={index} className='border-2 my-2 p-4' >
             <input type="radio" className='p-4 mr-3' name='radiobtn' id={index} onClick={() => handleAnswerClick(answer.category, answer.score)} />
             {answer.text}
             </label>
             
            ))}

           <div className='flex items-center justify-between mt-2'>

           <button onClick={previousQuestion} className='bg-[#6d31ed] p-3 rounded text-white'>Previous Question</button>

           <button onClick={nextQuestion} className='bg-[#6d31ed] p-3 rounded text-white'>
           {currentQuestionIndex >= questions.length - 1 ? 'Finish The Quiz' : "Next Question"}</button>


           </div>


          </div>
        </>
      ) : (
        
        <div className="result-container h-[60vh] flex flex-col items-center">
          <p className="result text-center text-3xl font-bold">Based on your answers, you might enjoy a major in {result}</p>
          {major && (
            <>
              <p className="major-description text-sm max-w-[950px] text-center m-auto my-10">{major.description}</p>
                <p className='font-bold'>Majors Related to {result}:</p>

              <div className='flex items-center justify-center md:justify-normal gap-10 flex-wrap'>
              {major.relatedMajors.map((relatedMajor, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow-lg w-[300px] md:w-[400px] mt-10 border-2">

            <img 
              src={relatedMajor.img} 
              alt={relatedMajor.name} 
              className="w-full h-40 object-cover rounded-lg mb-4"
            />

            <h3 className="text-lg font-semibold mb-2">{relatedMajor.name}</h3>
            <p>{relatedMajor.description}</p>

          
          </div>
        ))}

              </div>
              
              <div className='mb-10 flex flex-col'>
              <p className='font-bold text-3xl mt-10'>Articles Related To The Major:</p>
              {major.Links.map((link) => (
                  <a target='_blank' className='my-5 underline' href={link.link}>{link.name}</a>
              ))}
              </div>

            </>
          )}
          
        </div>
      )}
    </div>
  );
};

export default Quiz;