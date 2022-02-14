import React, { useEffect, useState } from 'react'
import ResultsTable from '../../components/Results/ResultsTable/ResultsTable';
import SearchBar from '../../components/SearchBar/SearchBar';
import IResultsRow from '../../DTOs/DTOs';
import './Home.scss'

function Home() {
  const [results, setResults] = useState<IResultsRow[]>([])
  
  return (
    <div className="odl-container">

      <div className="odl-container__wrapper">
        <div className="odl-container__wrapper--brand">Oracle</div>
          <SearchBar onSearch={setResults}/>
      </div>


      <ResultsTable results={results}/>
    </div>
  )
}

export default Home;
