import React from 'react'
import IResultsRow from '../../../DTOs/DTOs'
import ResultsRow from '../ResultsRow/ResultsRow'
import "./ResultsTable.scss"

interface IProps {
    results: IResultsRow[];
}

export default function ResultsTable({ results }: IProps) {
    const renderRows = () => {
        return results.map((e: IResultsRow, index: number) => {
            return (
                <ResultsRow data={e} key={index}/>
            )
        })
    }

    const enableScrollItems = () => {
        return "odl-resultstable "
            + ((results.length > 7) 
            ? "enable--scroll"
            : "")
    }
  
    return (
    <div className={enableScrollItems()}>
        <div
         className="odl-resultstable__container">
            {renderRows()}
        </div>
    </div>
  )
}