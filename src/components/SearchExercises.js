import { Stack, Box } from "@mui/system";
import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import { Button, TextField } from "@mui/material";
import { fetchData } from "../utils/fetchData";

const SearchExercises = () => {
  const [search, setSearch] = useState('')

  const handleSearch = async() => {
    
  }
  return (
    <Stack alignItems="center" mt="37px" justifyContent="center" p="20px">
      <Typography
        fontWeight={700}
        sx={{ fontSize: { lg: "44px", xs: "30px" } }}
        mb="50px"
        textAlign="center"
      >
        Awasome Exercises You <br /> should know
      </Typography>
      <Box position="relative" mb="72px">
        <TextField
          sx={{
            input: { fontWeight: "700", border: "none", borderRadius: "40px" },
            width: { lg: "800px", xs: "300px" },
            background: "#fff",
            borderRadius: "40px",
          }}
          height="76px"
          value={search}
          onChange={(e) => setSearch(e.target.value.toLowerCase())}
          placeholder="Search Exercise"
          type="text"
        />
        <Button
          className="search-btn"
          sx={{
            bgcolor: "#FF2625",
            color: "#fff",
            textTransform: "nono ",
            width: { lg: "173px", xs: "80px" },
            fontSize: { lg: "20px", xs: "14px" },
            height: '56px',
            position: 'absolute',
            right: '0'
          }}
          onClick={handleSearch}
        >
          Search
        </Button>
      </Box>
    </Stack>
  );
};

export default SearchExercises;
