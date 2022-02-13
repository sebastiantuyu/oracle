import React, { useEffect } from 'react'
import SearchBar from '../../components/SearchBar/SearchBar';
import APIService from '../../services/APIService';
import './Home.scss'

function Home() {
  return (
    <div className="odl-container">

      <div className="odl-container__wrapper">
        <div className="odl-container__wrapper--brand">Oracle</div>
          <SearchBar />
      </div>
    </div>
  )
}

export default Home;
