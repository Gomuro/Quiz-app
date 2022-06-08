import { Box, Typography, Button, CircularProgress } from '@mui/material'
import React from 'react'
import SelectField from '../components/SelectField'
import TextFieldComp from '../components/TextFieldComp'
import useAxios from '../hooks/useAxios'

const Settings = () => {
    const { response, error, loading } = useAxios({ url: "/api_category.php" });
    if(loading) {
        return (
            <Box mt={3}>
                <CircularProgress />
            </Box>
        )
    }
    if (error) {
        return (
            <Box mt={3}>
                <Typography variant="h6" mt={20} color="red">
                    something went wrong
                </Typography>
            </Box>
        )
    }
    const difficultyOptions = [
        { id: "easy", name: "Easy" },
        { id: "medium", name: "Medium" },
        { id: "hard", name: "Hard" },
      ];
    
      const typeOptions = [
        { id: "multiple", name: "Multiple Choise" },
        { id: "boolean", name: "True/False" },
      ];
    const handleSubmit = e => {
        e.preventDefault();
        
    }

  return (
    <>
        <Typography variant="h2" fontWeight={"bold"}>
            Quiz App
        </Typography>
        <form onSubmit={handleSubmit}>
            <SelectField options={response.trivia_categories} label="Category" />
            <SelectField options={difficultyOptions} label="Difficulty" />
            <SelectField options={typeOptions} label="Type" />
            <TextFieldComp />
            <Box mt={3}>
                <Button variant="contained"  size="small">Start Quiz</Button>
            </Box>
        </form>
    </>
  )
}

export default Settings