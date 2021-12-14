import React, {useEffect} from 'react'


function Home(){

    useEffect(async () => {
          let response = await  fetch('https://fakestoreapi.com/products/')
          let data = await response.json()
          console.log("We are Here: ",data)

        return () => {
            //
        }
    }, [])

    return(
        <div>
            <h1>Welcome to Khan Store...</h1>
        </div>
    )
}

export default Home;