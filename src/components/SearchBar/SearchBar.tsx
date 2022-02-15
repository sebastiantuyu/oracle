import React, { BaseSyntheticEvent, useContext, useEffect, useState } from 'react'
import './SearchBar.scss'
import AppIcon from '../../assets/svgs/app-icon.svg'
import APIService from '../../services/APIService'
import { TailSpin } from 'react-loader-spinner'
import { QuerySearchContext } from '../../context/QuerySearchContext'
import { QueryResultsContext } from '../../context/QueryResultsContext'
import { useNavigate, useParams } from 'react-router-dom'

interface IProps {
  onSearch: any;
  shouldTriggerSearch: boolean;
  replaceOnSearch: boolean;
}


export default function SearchBar({ onSearch, shouldTriggerSearch, replaceOnSearch = false }: IProps) {
  const [_, setLastResults]: any = useContext(QueryResultsContext)
  const [query, setQuery]: any = useContext(QuerySearchContext)
  const [isSearching, setIsSearching] = useState(false)
  const [canReplace, setCanReplace] = useState(false)
  const param_ = useParams()
  const navigate = useNavigate();

  useEffect(() => {
    if((param_ as any).query) {
      setQuery((param_ as any).query);
      triggerSearch().then(() => setCanReplace(true))
    }
  }, [])

  const triggerSearch = async () => {
    if(shouldTriggerSearch && (query || param_.query)) {
      if(replaceOnSearch && canReplace) {
       navigate(`/search/${query}`)
      }

      // fetch to server
      setIsSearching(true)
      const response = await APIService.getResultsByQuery(query ?? param_.query);
      setLastResults(response)
      setIsSearching(false)
    }
    onSearch()
  }

  const goToHome = () => {
    navigate('/')
  }

  const renderButtonIcon = () => {
    return isSearching
      ? <TailSpin color="#000000" height={30} width={30} />
      : <img src={AppIcon} alt="oracle search icon" className='odl-searchbar__button--icon'/>
  }

  const submitFromEnterKey = (event: any) => {
    if(event.key === 'Enter') {
      triggerSearch()
    }
  }

  return (
    <>
    <div className="brand">
      <span className="brand__letters" onClick={() => goToHome()}>Oracle</span>
    </div>
    <div className='odl-searchbar'>
        <input
          type="text"
          name="query"
          className='odl-searchbar__input'
          onChange={(e: any) => setQuery(e.target.value)}
          onKeyPress={(event) => submitFromEnterKey(event)}
          placeholder="Why don't search something funny?"
          value={query}
        />
        <button
          className='odl-searchbar__button'
          onClick={() => triggerSearch()}
        >
          { renderButtonIcon() }
        </button>
    </div>
    </>
  )
}
