import React, { BaseSyntheticEvent, useEffect, useState } from 'react'
import './SearchBar.scss'
import AppIcon from '../../assets/svgs/app-icon.svg'
import APIService from '../../services/APIService'
import { TailSpin } from 'react-loader-spinner'

interface IProps {
  onSearch: any
}


export default function SearchBar({ onSearch }: IProps) {
  const [query, setQuery] = useState('')
  const [isSearching, setIsSearching] = useState(false)

  const triggerSearch = async () => {
    // fetch to server 
    setIsSearching(true)
    const response = await APIService.getResultsByQuery(query);
    
    // after sucess
    onSearch(response)
    setIsSearching(false)
  }

  const renderButtonIcon = () => {
    return isSearching 
      ? <TailSpin color="#000000" height={30} width={30} />
      : <img src={AppIcon} alt="oracle search icon" className='odl-searchbar__button--icon'/>
  }

  return (
    <div className='odl-searchbar'>
        <input 
          type="text"
          name="query"
          className='odl-searchbar__input'
          onChange={(e: any) => setQuery(e.target.value)}
        />
        <button className='odl-searchbar__button' onClick={() => triggerSearch()}>
          { renderButtonIcon() }
        </button>
    </div>
  )
}
