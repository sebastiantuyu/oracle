import React from 'react'
import './SearchBar.scss'
import AppIcon from '../../assets/svgs/app-icon.svg'

export default function SearchBar() {
  return (
    <div className='odl-searchbar'>
        <input type="text" name="query" className='odl-searchbar__input'/>
        <button className='odl-searchbar__button'>
          <img src={AppIcon} alt="oracle search icon" className='odl-searchbar__button--icon'/>
        </button>
    </div>
  )
}
