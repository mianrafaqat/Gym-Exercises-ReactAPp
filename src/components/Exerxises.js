import React, { useState } from "react";
import { Pagination } from "@mui/material";
import { exercisesOptions, fetchData } from "../utils/fetchData";
import { Box, Stack } from "@mui/system";
import Typography from "@mui/material/Typography";
import ExerciseCard from "./ExerciseCard";

const Exerxises = ({ exercises, setExercise, bodyPart }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const exercisesPerPage = 9;

  const indexOfLastExxercise = currentPage * exercisesPerPage;
  const indexOfFirstExercise = indexOfLastExxercise - exercisesPerPage;
  const currentExercises = exercises.slice(
    indexOfFirstExercise,
    indexOfLastExxercise
  );
  const Paginate = (e, value) => {
    setCurrentPage(value);
    window.scrollTo({ top: 1800, behavior: "smooth" });
  };
  return (
    <Box id="exercise" sx={{ mt: { lg: "110px" } }} mt="50px" p="20px">
      <Typography variant="h3" mb="46px">
        Showing Result
      </Typography>
      <Stack
        direction="row"
        sx={{ gap: { lg: "110px", xs: "50px" } }}
        flexWrap="wrap"
        justifyContent="center"
      >
        {currentExercises.map((exercise, index) => (
          <ExerciseCard key={index} exercise={exercise} />
        ))}
      </Stack>
      <Stack mt="100px" alignItems="center">
        {exercises.length > 9 && (
          <Pagination
            color="standard"
            shape="rounded"
            defaultPage={1}
            count={Math.ceil(exercises.length / exercisesPerPage)}
            page={currentPage}
            onChange={Paginate}
            size="large"
          />
        )}
      </Stack>
    </Box>
  );
};

export default Exerxises;
