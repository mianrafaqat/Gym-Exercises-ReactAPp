import React from "react";
import Typography from "@mui/material/Typography";
import Icon from "../assets/icons/gym.png";
import { Stack } from "@mui/system";

const BodyPart = ({ item, bodyPart, setBodyPart }) => {
  return (
    <Stack
      type="button"
      alignItems="center"
      justifyContent="center"
      className="bodyPart-card"
      sx={{
        borderTop:  bodyPart === item ? '4px solid #ff2625' : '',
        backgroundColor: "#fff",
        borderBottomLeftRadius: '20px',
        width: '270px',
        height: '280px',
        cursor: 'pointer',
        gap: '47px'
      } }
      onClick={() => {
        setBodyPart(item)
        window.scrollTo({top: 1800, left: 100, behavior: 'smooth' })
      }}
       
    >
      <img
        src={Icon}
        alt="dubmle"
        style={{ width: "40px", height: "40px" }}
      />
      <Typography fontSize="24px" fontWeight="bold" color="#3A1212" textTransform="capitalize" >
        {item}
      </Typography>
    </Stack>
  );
};

export default BodyPart;
