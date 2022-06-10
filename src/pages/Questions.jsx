import { Box, Button, CircularProgress, Typography } from "@mui/material";
import { decode } from "html-entities";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import useAxios from "../hooks/useAxios";
import { changeScore } from "../redux/actions";

const getRandomInt = (max) => {
  return Math.floor(Math.random() * Math.floor(max));
};
const Questions = () => {
  const {
    question_category,
    question_difficulty,
    question_type,
    amount_of_questions,
    score,
  } = useSelector((state) => state);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  let apiUrl = `api.php?amount=${amount_of_questions}`;

  if (question_category) {
    apiUrl = apiUrl.concat(`&category=${question_category}`);
  }
  if (question_difficulty) {
    apiUrl = apiUrl.concat(`&difficulty=${question_difficulty}`);
  }
  if (question_type) {
    apiUrl = apiUrl.concat(`&type=${question_type}`);
  }
  const { response, loading } = useAxios({ url: apiUrl });
  const [questionIndex, setQuestionindex] = useState(0);
  const [options, setOptions] = useState([]);
  console.log(
    "🚀 ~ file: Questions.jsx ~ line 34 ~ Questions ~ options",
    options
  );

  useEffect(() => {
    if (response?.results.length) {
      const question = response.results[questionIndex];
      let answers = [...question.incorrect_answers];
      answers.splice(
        getRandomInt(question.incorrect_answers.length),
        0,
        question.correct_answer
      );
      setOptions(answers);
    }
  }, [response, questionIndex]);

  if (loading) {
    return (
      <Box mt={3}>
        <CircularProgress />
      </Box>
    );
  }

  const handleClickAnswer = (e) => {
    const question = response.results[questionIndex];
    if (e.target.textContent === question.correct_answer) {
      dispatch(changeScore(score + 1));
    }

    if (questionIndex + 1 < response.results.length) {
      setQuestionindex(questionIndex + 1);
    } else {
      navigate("/score");
    }
  };

  return (
    <Box>
      <Typography variant="h4">Question {questionIndex + 1}</Typography>
      <Typography mt={5}>
        {decode(response.results[questionIndex].question)}
      </Typography>
      <Box mt={3}>
        {options.map((option, index) => (
          <Box mt={10} key={index}>
            <Button
              onClick={handleClickAnswer}
              variant="contained"
              color="primary"
              fullWidth
            >
              {decode(option)}
            </Button>
          </Box>
        ))}
        <Box mt={8}>
          score: {score} / {response.results.length}
        </Box>
      </Box>
    </Box>
  );
};

export default Questions;
