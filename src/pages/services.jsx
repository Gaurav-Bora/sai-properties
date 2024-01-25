// eslint-disable-next-line no-unused-vars
import React from 'react'
import MainFooter from '../Components/MainFooter'
import NewsLetter from '../Components/NewsLetter'
import Header from '../Components/headerComponent'
import Card from '../Components/Card'

const Services = () => {
  return (
    <div>
      <Header Heading='Services' />
      <Card />
      <Card />
      <div className='m-5'></div>
      <NewsLetter />
      <MainFooter />
    </div>
  )
}

export default Services