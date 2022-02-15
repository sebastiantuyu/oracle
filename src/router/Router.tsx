
import React, { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { QueryResultsContext } from '../context/QueryResultsContext';
import { QuerySearchContext } from '../context/QuerySearchContext';
import IResultsRow from '../DTOs/DTOs';
import Home from '../pages/Home/Home'
import Result from '../pages/Result/Result'
import Search from '../pages/Search/Search';

export default function Router() {
  const [globalQuery, setGlobalQuery]: any = useState("")
  const [lastResults, setLastResults]: any = useState<IResultsRow[]>([])

  return (
    <QuerySearchContext.Provider value={[globalQuery, setGlobalQuery]}>
      <QueryResultsContext.Provider value={[lastResults, setLastResults]}>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/search/:query" element={<Search />}/>
              <Route path="/result/:id" element={<Result />} />
            </Routes>
          </BrowserRouter>
      </QueryResultsContext.Provider>
    </QuerySearchContext.Provider>
  )
}
