import React from 'react'
import Exerxises from '../components/Exerxises'
import SearchExercises from '../components/SearchExercises'
import HeroBanner from '../components/HeroBanner'
import { Box } from '@mui/system'

const Home = () => {
  return (
    <Box>
      <HeroBanner />
      <SearchExercises />
      <Exerxises />
    </Box>
  )
}

export default Home