import React, { useEffect, useState, useReducer, useContext, createContext } from 'react'
import { Button, Card, Col, Row } from 'react-bootstrap'
import Cart, { CartContex } from './Cart'

// const reducer = (count, actions) => {
//     switch(actions){
//         case 'add':

//     }
// }
// const [item, dispatch] = useReducer(reducer, 0)

let itemsComplete = []

export const ItemContext = createContext(itemsComplete)

function Products() {
    var [products, setProducts] = useState([])
    var [isLoading, setIsLoading] = useState(false);
    var data, response;

    console.log("Tehmoor: ", ItemContext.ItemsObj)
    useEffect(async () => {
        response = await fetch('https://fakestoreapi.com/products/')
        data = await response.json()
        setProducts(() =>
            [...data]
        )

        setIsLoading(() => !isLoading)
        console.log("Done: ", products)

    }, [data])


    const add = (id) =>{
        let i = id -1
        itemsComplete.push(products[i])
        console.log("Complete: ", itemsComplete)
        console.log(typeof itemsComplete[0])
    }


    const myCard = (products, ind) => {
        return (
            <div className='col col-md-3 m-5' style={{display:'inline-flex'}}>
                 <Card >
                <Card.Header>
                    <img src={products.image} style={{ "height": "50px", "width": "250px" }}></img>

                </Card.Header>
                <Card.Body>
                    <Card.Title>{products.title}</Card.Title>
                    <Card.Text>
                        With supporting text below as a natural lead-in to additional content.
                    </Card.Text>
                    <Button variant="primary" size="lg" onClick={() => add(products.id)}>
                        Add to Cart
                    </Button>
                </Card.Body>
            </Card>
            </div>
           )
    }


    {
        console.log("Here: Before: ", products)
        if (!isLoading) {
            return (
                <div>Loading...</div>
            )
        }
        else {
            return (
                <div col >
                    {products.map(myCard)}
                    <ItemContext.Provider value={itemsComplete}>
                        <Cart />
                    </ItemContext.Provider>
                </div >
            )
        }
    }
}

export default Products;
