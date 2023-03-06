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
       
    >
      <img
        src={Icon}
        alt="dubmle"
        styles={{ widows: "40px", height: "40px" }}
      />
    </Stack>
  );
};

export default BodyPart;
