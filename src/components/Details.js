import React, { Component } from 'react';
import  {Link} from 'react-router-dom';
import {ProductConsumer} from '../context';
import {ButtonContainer} from './Button';


class Details extends Component {
    render() {
        return (
            <ProductConsumer>
                {(value)=>{
                    const {id,company, title, img, info, price, inCart} = value.detailProduct;
                    return (
                        <div className="container py-5">
                           {/* title  */}
                            <div className="row">
                                <div className="col-10 mx-auto text-center text-slanted text-blue my-5">
                                    <h1>{title}</h1>
                                </div>
                            </div>
                            {/* end title */}

                            {/* Product Info  */}
                             <div className="row">
                                 <div className="col-10 mx-auto col-md-6 my-3 ">
                                    <img src={img} alt="Product" className="img-fluid"/>
                                 </div>
                                 {/* Product Text Now */}
                                <div className="col-10 mx-auto col-md-6 my-3">
                                    <h2>Model: {title}</h2> 
                                    <h4 className="text-title text-uppercase text-muted mt-3 mb-2">
                                        Made by: <span className="text-uppercase"> {company} </span>
                                    </h4>
                                    <h4 className="text-blue">
                                        <strong> 
                                            Price: <span>$</span>{price}
                                        </strong>
                                    </h4>
                                    <p className="text-capitalize font-weight-bold mt-3 mb-0">
                                        some information about the product 
                                    </p>
                                    <p className="text-muted lead">{info}</p>
                                    {/* Buttons  */}
                                    <Link to='/'>
                                        <ButtonContainer >
                                            Back to Products
                                        </ButtonContainer>
                                    </Link>
                                    <ButtonContainer cart
                                        disabled = {inCart?true:false} onClick = {()=>{
                                            value.addToCart(id); 
                                            value.openModal(id);
                                        }} className="ml-3"
                                    >
                                        {inCart?"In Cart": "add to cart"}
                                    </ButtonContainer>
                                </div>
                             </div>
                        </div> 
                    )
                }}
            </ProductConsumer>
        );
    }
}

export default Details;
