import React, { useEffect, useState } from 'react'
import { TailSpin } from 'react-loader-spinner';
import { useNavigate, useParams } from 'react-router-dom';
import IResultsRow from '../../DTOs/DTOs';
import APIService from '../../services/APIService';
import GoBackArrow from "../../assets/svgs/go-back-arrow.svg";
import "./Result.scss"
import LoaderWrapper from '../../components/LoaderWrapper/LoaderWrapper';

function Result() {
  const navigation = useNavigate()
  const [item, setItem] = useState<IResultsRow>()
  const [isLoading, setIsLoading] = useState(true)
  const params = useParams()

  useEffect(() => {

    if (params.id) {
      APIService.getResultsById(params.id.toString())
        .then((result) => {
          setItem(result)
          setIsLoading(false)
        })
        .catch((e) => console.error(e))
    }
  }, []);

  const goBack = () => {
    navigation(-1)
  }

  const renderContentOrSpinner = () => {
    return isLoading
      ? <TailSpin width={80} height={80} color="#000000" />
      : <img src={item?.photo} alt={item?.shortDescription} />
  }

  return (
    <div className="odl-result">
      <div className="odl-result__left">

        <button
          onClick={() => goBack()}
          className="goback--button"
        >
          <img src={GoBackArrow} alt="go-back-arrow" />
        </button>

        <div className="information-box">
          <LoaderWrapper loading={isLoading}>
            <div className="information-box__title">
                {item?.title}
            </div>
          </LoaderWrapper>

          <p className="information-box__sectionHeader">Descripcion</p>
          <LoaderWrapper style={{ height: `${200}px` }} loading={isLoading}>
            <div className="information-box__description">
              {item?.description}
            </div>
          </LoaderWrapper>
        </div>
      </div>
      <div className="odl-result__right">
        { renderContentOrSpinner() }
      </div>
    </div>
  )
}

export default Result;