import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { changeScore } from "../redux/actions";
import { changeAmount } from "../redux/actions";

const Score = () => {
  const { score } = useSelector((state) => state);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleBackToSettings = () => {
    dispatch(changeScore(0));
    dispatch(changeAmount(0));
    navigate("/");
  };

  return (
    <Box mt={30}>
      <Typography variant="h5" fontWeight="bold" mb={10}>
        Final Score {score}
      </Typography>
      <Button
        onClick={handleBackToSettings}
        variant="contained"
        color="primary"
      >
        Back to Settings
      </Button>
    </Box>
  );
};

export default Score;
