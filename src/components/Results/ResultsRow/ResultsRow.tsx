import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import IResultsRow from "../../../DTOs/DTOs"
import LoaderWrapper from '../../LoaderWrapper/LoaderWrapper'
import "./ResultsRow.scss"

interface IProps {
    data: IResultsRow;
}

export default function ResultsRow({ data }: IProps) {
  const navigateTo = useNavigate()
  const [isLoaded, setIsLoaded] = useState(false);

  const goToResultPage = () => {
    navigateTo(`/result/${data.id}`)
  }

  const toggleDisplay = (shouldShow: boolean) => {
    return shouldShow ? 'block' : 'none'
  }

  const parseToThumbnail = (url: string): string => {
    const splitedURL = url.split('/upload/')
    if(splitedURL.length > 1) {
      return splitedURL[0] + '/upload/w_150/' + splitedURL[1]
    }
    return url;
  }

  return (
    <div onClick={() => goToResultPage()}
      className="odl-resultsrow vertical--center">
        <div className="odl-resultsrow__thumbnail">
            <img
              style={{ display: toggleDisplay(isLoaded)}}
              className="odl-resultsrow__thumbnail--img"
              onLoad={() => setIsLoaded(true)}
              src={parseToThumbnail(data.photo)}
              alt={data.shortDescription}
            />
            <LoaderWrapper
              loading={true}
              style={{ width: '100%', height: '100%', margin: 0, borderRadius: 0,  display: toggleDisplay(!isLoaded) }}
            ><></></LoaderWrapper>
        </div>
        <div className="odl-resultsrow__title vertical--center">
            <p>{data.title}</p>
            <p className="odl-resultsrow__title--sub">{data.shortDescription}</p>
        </div>
    </div>
  )
}
