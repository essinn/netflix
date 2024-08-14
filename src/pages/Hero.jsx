import React from 'react'
import Header from '../components/Header'
import Row from '../components/Row'
import requests from '../Requests'

const Hero = () => {
  return (
    <>
        <Header />
        <Row rowId='1' title='Up Coming' fetchUrl={requests.requestUpcoming} />
        <Row rowId='2' title='Popular' fetchUrl={requests.requestPopular} />
        <Row rowId='3' title='Trending' fetchUrl={requests.requestTrending} />
        <Row rowId='4' title='Top Rated' fetchUrl={requests.requestTopRated} />
        <Row rowId='5' title='Horror' fetchUrl={requests.requestHorror} />
    </>
  )
}

export default Hero