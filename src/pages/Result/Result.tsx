import React from 'react'
import { useNavigate } from 'react-router-dom';

function Result() {
  const navigation = useNavigate()
  
  const goBack = () => {
    navigation(-1)
  }
  
  return (
    <>
    <div>Result</div>
    <button onClick={() => goBack()}>go back</button>
    </>
  )
}

export default Result;