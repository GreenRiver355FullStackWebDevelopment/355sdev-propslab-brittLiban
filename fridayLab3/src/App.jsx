import './App.css'

import {recipes} from './data.js'

import RecipieContainer from './componets/RecipieContainer.jsx'

function App() {

  return (
    <>
      <RecipieContainer data={recipes}/>
    </>
  )
}

export default App
