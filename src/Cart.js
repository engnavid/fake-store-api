import React, { useContext, useState } from 'react'
import Products, { ItemContext } from './Products'
import { Button, Card, Col, Row } from 'react-bootstrap'

let items2;
// var [itm, setItm] = [];
var removeF;
function Cart() {
    const items = useContext(ItemContext)

    console.log("Itm: ", items)
    // if(items.length>0)
    const [itm, setItm] = useState(items)
    console.log("Here it is ", itm)
    removeF = (index) => {
        // let i = id - 1;
        console.log("click", itm.splice(index, 1))
        setItm(
            itm.filter(id => id != index)
        )

    }

    return (
        <div style={{ backgroundColor: "yellow" }}>
            <h1>Cart.....</h1>
            {itm.map(myCard)}
            {console.log("useContext: ", items)}
        </div>
    )
}


const myCard = (products, ind) => {
    return (
        <div className='col col-md-3 m-5' style={{ display: 'inline-flex' }}>
            <Card key={ind}>
                <Card.Header>
                    <img src={products.image} style={{ "height": "50px", "width": "250px" }}></img>

                </Card.Header>
                <Card.Body>
                    <Card.Title>{products.title}</Card.Title>
                    <Card.Text>
                        With supporting text below as a natural lead-in to additional content.
                    </Card.Text>
                    <Button variant="primary" size="lg" onClick={() => removeF(ind)}>
                        Remove from Cart
                    </Button>
                </Card.Body>
            </Card>
        </div>
    )
}


export default Cart
