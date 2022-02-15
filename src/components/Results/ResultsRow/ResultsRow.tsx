import React from 'react'
import { useNavigate } from 'react-router-dom'
import IResultsRow from "../../../DTOs/DTOs"
import "./ResultsRow.scss"

interface IProps {
    data: IResultsRow;
}

export default function ResultsRow({ data }: IProps) {
  const navigateTo = useNavigate()
  
  const goToResultPage = () => {
    navigateTo(`/result/${data.id}`)
  }
  
  return (
    <div onClick={() => goToResultPage()}
      className="odl-resultsrow vertical--center">
        <div className="odl-resultsrow__title vertical--center">
            {data.title}
        </div>
        <div className="odl-resultsrow__thumbnail">
            <img className="odl-resultsrow__thumbnail--img" src={data.photo} alt={data.shortDescription} />
        </div>
    </div>
  )
}
