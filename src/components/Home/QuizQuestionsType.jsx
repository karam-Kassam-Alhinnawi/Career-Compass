import React from 'react'
import { questionsCategories } from '../../../data/data'

export const QuizQuestionsType = () => {
  return (
    <div className='flex flex-col justify-center md:px-20'>
      <h2 className='font-bold text-3xl mt-10 mb-5 text-center lg:text-left'>Quiz Questions Type</h2>
      <p className='text-center lg:text-left'>The Quiz Will Test You In These Catogeries, And Then It Will Determine What Major Fits You The Most. </p>


      {/*The Quiz Categories*/}

      <div className='categories flex flex-wrap items-center justify-evenly gap-y-10 gap-x-16 my-6 '>
        {questionsCategories.map((question) => (
            <div className='flex items-center justify-between border-2 w-[380px] md:w-[400px] p-6 rounded-lg'>
                <div className=''>
                <h2 className='font-bold'>{question.name}</h2>
                <p className='text-sm text-gray-700'>{question.desc}</p>
                </div>
               <img src={question.img} className='w-36' alt="" />
            </div>
        ))}
      </div>

    </div>
  )
}
