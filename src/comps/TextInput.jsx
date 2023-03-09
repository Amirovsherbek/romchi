import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export  function Soni() {
  return (
    <Box
      component="form"
      height={50}
      autoComplete="off"
    >
      <TextField id="outlined-basic" label="Outlined" variant="outlined" 
       type={'number'}
       InputLabelProps={{
          fontSize:'20px'
       }}
        InputProps={{
        style: {
           width:'140px',
           height:'50px',
           borderRadius: '5px',
        }
      }}

      />
    </Box>
  );
}
