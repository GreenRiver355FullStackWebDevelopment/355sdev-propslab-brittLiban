function Recipie({name, ingredients}) {

  return (
    <div>
        {/* I AM PRINTING THE NAME */}
      <h1>{name}</h1>
      <ul>The ingredients are...</ul>


      {/* ITERATING THROUGH EVERY SINGLE INGREDIENT */}

        {ingredients.map(ingredient => (
            
            <li>{ingredient}</li>

        )
            


        )}
    </div>
  )
}

/// NORMAL ARROW FUNCTION
// const test = () => {

// }

export default Recipie