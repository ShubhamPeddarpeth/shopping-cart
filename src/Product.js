import React, { useState } from "react";
import './App.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Product = ({ prod, count, setcount }) => {
    let [cart, setcart] = useState(true);

    function addtocart() {
        setcount(count + 1);
        setcart(!cart);
    }
    function removefromcart() {
        setcount(count - 1);
        setcart(!cart);
    }

    return (
        <div>
            <Card style={{ width: '18rem' }} className='Card'>
                <div className='img'>
                    <div className='sale'>
                        {prod.sale !== "" ?
                            <p id="sale">{prod.sale}</p> : ""
                        }
                    </div><div className='img_content'>450X300</div></div>
                <Card.Body>
                    <Card.Title className='item_name'>{prod.item}</Card.Title>
                    <Card.Title className='rating'>{prod.rating}</Card.Title>
                    <Card.Title><span id="old_price">{prod.price}</span>{prod.price1}</Card.Title>
                    {cart ? <Button id="primary" variant="primary"
                        onClick={addtocart}
                    >Add to Cart</Button>
                        :
                        <Button id="danger" variant="danger"
                            onClick={removefromcart}
                        >Remove from Cart</Button>
                    }

                </Card.Body>
            </Card>
        </div>
    );
}

export default Product