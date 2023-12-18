// eslint-disable-next-line no-unused-vars
import React from 'react'
import MainFooter from '../Components/MainFooter'
import SearchHome from '../Components/SearchHome'
import NewsLetter from '../Components/NewsLetter'
// import PropertyFirstComp from '../Components/smallComponents/headerComponent'
import Header from '../Components/headerComponent'

const Property = () => {
  return (
    <div>
      <Header Heading="Property" subHeading="Home Property" />
      <SearchHome />
      <NewsLetter />
      <MainFooter />
    </div>
  )
}

export default Property