import './App.css'
import React from 'react';
import Button from '@mui/material/Button';
import {createTheme, ThemeProvider} from '@mui/material/styles'



import {recipes} from './data.js'

import RecipieContainer from './componets/RecipieContainer.jsx'

function App() {

  return (
    <>
      <Button>My mini test pilot of using MUI ... Yikes</Button>
      <RecipieContainer data={recipes}/>
     
    </>
  )
}

export default App
