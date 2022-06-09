import { Box, FormControl, TextField } from '@mui/material'
import React from 'react'
import { useDispatch } from 'react-redux';
import { changeAmount } from '../redux/actions';

const TextFieldComp = () => {
    const dispatch = useDispatch(); 
    const handleChange = (e) => {
        dispatch(changeAmount(e.target.value));
    }
  return (
      <Box mt={3}>
            <FormControl variant="outlined" fullWidth size="small">
                <TextField
                    onChange={handleChange}
                    variant="outlined"
                    label="Amount of Questions"
                    type="number"
                    size="small"

                />
            </FormControl>
        </Box>
  )
}

export default TextFieldComp