// eslint-disable-next-line no-unused-vars
import React from 'react'
import MainFooter from '../Components/MainFooter'
import NewsLetter from '../Components/NewsLetter'
import Header from '../Components/headerComponent'

const Services = () => {
  return (
    <div>
      <Header Heading='Services' subHeading='Home Services' />
      <NewsLetter />
      <MainFooter />
    </div>
  )
}

export default Services