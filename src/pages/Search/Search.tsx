import React, { useContext } from 'react'
import ResultsTable from '../../components/Results/ResultsTable/ResultsTable'
import SearchBar from '../../components/SearchBar/SearchBar'
import { QueryResultsContext } from '../../context/QueryResultsContext'
import "./Search.scss"

export default function Search() {
  const [lastResults, ,]: any = useContext(QueryResultsContext)

  return (
    <div className="odl-search">
      <div className="odl-search__wrapper">
        <SearchBar
          onSearch={() => {}}
          shouldTriggerSearch
          replaceOnSearch
        />

        <ResultsTable results={lastResults} />
      </div>
    </div>
  )
}
