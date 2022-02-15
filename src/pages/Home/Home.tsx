import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import SearchBar from '../../components/SearchBar/SearchBar';
import { QuerySearchContext } from '../../context/QuerySearchContext';
import './Home.scss'

function Home() {
  const navigateTo = useNavigate();
  const [globalQuery, _] = useContext(QuerySearchContext);

  const proceedToSearch = () => {
    navigateTo(`/search/${globalQuery}`)
  }

  return (
    <div className="odl-container">
      <div className="odl-container__wrapper">
          <SearchBar
            onSearch={proceedToSearch}
            shouldTriggerSearch={false}
            replaceOnSearch={false}
            />
      </div>
    </div>
  )
}

export default Home;
