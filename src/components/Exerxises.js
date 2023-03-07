import React from 'react'
import { Pagination } from '@mui/material'
import { exercisesOptions, fetchData } from '../utils/fetchData'
import { Box, Stack } from '@mui/system'
import Typography from "@mui/material/Typography";
import ExerciseCard from './ExerciseCard';

const Exerxises = ({ exercises, setExercise, bodyPart }) => {
  console.log(exercises)
  return (
    <Box id="exercise" sx={{mt: { lg: '110px' }}} mt="50px" p="20px" >
      <Typography variant='h3' mb='46px'>
        Showing Result
      </Typography>
      <Stack direction='row' sx={{ gap: { lg: '110px', xs: '50px'}}} flexWrap="wrap" justifyContent="center" >
        {exercises.map((exercise, index)=> (
          <ExerciseCard key={index} exercise={exercise} />
        ))}
      </Stack>
    </Box>
  )
}

export default Exerxises