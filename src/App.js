
import { React } from 'react';
import { Box } from '@mui/system';
import { Grid, ButtonGroup, Button, TextField } from '@mui/material';


function addToEq(character) {
  let equation = document.getElementById("equation");
  if (character === "C") {
    equation.value = "";
  } else if (character === "=") {
    try {
      // eslint-disable-next-line no-eval
      equation.value = eval(equation.value);
    } catch (e) {
      equation.value = "Error";
      setTimeout(() => {
        equation.value = "";
      }, 1000);
    }
  } else {
    equation.value += character;
  }
}


function Equation() {
  return (
    <Box p={2}>
      <TextField id="equation"  variant="filled" fullWidth />
    </Box>
  );
}

function Numbers(props) {
  return (    
      <ButtonGroup variant="outlined" aria-label="large button group">
        {props.nums.map(num => <Box p={5} onClick={() => addToEq(num)}><Button>{num}</Button></Box>)}        
      </ButtonGroup>
  );
}

function App() {
  return (
  <Grid container spacing={2}>      
    <Grid item xs={4} />   
    <Grid item xs={4}>        
    <Equation />
      <Numbers nums={[1,2,3,"C"]}></Numbers>
      <Numbers nums={[1,2,3,"+"]}></Numbers>
      <Numbers nums={[1,2,3,"-"]}></Numbers>
      <Numbers nums={["=",0,"/","*"]}></Numbers>
    </Grid>   
    <Grid item xs={4} />   
  </Grid>
  );
}

export default App;
