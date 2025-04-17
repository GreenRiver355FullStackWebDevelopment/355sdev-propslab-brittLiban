import Recipie from './Reciepie.jsx'


//Destructuring it?

function RecipieContainer(props) {


   
    //make a map
  return (
    <>

    {props.data.map((prop, index) =>
    <Recipie key={`${prop.name}${index}`}
    
    name = {prop.name}
    ingredients = {prop.ingredients}
    
    />
    
    )
    } 
    </>
  )
}

export default RecipieContainer