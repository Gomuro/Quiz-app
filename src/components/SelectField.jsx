import { Box, FormControl, InputLabel, MenuItem, Select } from '@mui/material'
import React, { useState } from 'react'

const SelectField = props => {
    const {label, options} = props; 
    // console.log("🚀 ~ file: SelectField.jsx ~ line 6 ~ options", options)
    const [value, setValue] = useState('');
    const handleChange = (e) => {
        setValue(e.target.value);
    }
  return (
    <Box mt={3} fullWidth>
        <FormControl size="small" fullWidth>
            <InputLabel>{label}</InputLabel>
            <Select value={value} label={label} onChange={handleChange}>
                
                {options.map(({ id, name }) => (
                    <MenuItem value={id} key={id}>
                        {name}
                    </MenuItem>
                ))}
            </Select>
        </FormControl>
    </Box>
  )
}

export default SelectField