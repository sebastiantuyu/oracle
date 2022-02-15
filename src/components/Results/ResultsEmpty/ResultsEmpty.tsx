import React from 'react'
import "./ResultsEmpty.scss"
import DeadIcon from "../../../assets/svgs/dead-icon.svg"

export default function ResultsEmpty() {
  return (
    <div className="odl-empres">
        <p className="odl-empres__icon">
            <img src={DeadIcon} className="odl-empres__icon--img" alt="result not found" />
        </p>
        <p className="odl-empres__text">
            Ups, we couldn't find anything.
        </p>
    </div>
  )
}
