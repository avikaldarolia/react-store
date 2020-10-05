import React, { Component } from 'react';
import {ProductConsumer} from '../context';
import styled from 'styled-components';
import {ButtonContainer} from './Button';
import {Link} from 'react-router-dom';

export default class Modal extends Component {
    render() {
        return (
           <ProductConsumer>
               {value =>{
                   const {modalOpen, closeModal} = value;
                   const {img, title, price} = value.modalProduct;
                   if(!modalOpen){
                    return null;
                   }
                   else{
                       return(
                       <ModalWrapper>
                        <div className="container">
                         <div className="row">
                            <div id="modal" className="col-8 mx-auto col-md-6 col-lg text-center text-capitalize p-5">
                                <h5>Item added to Cart</h5>
                                <img src={img} className="img-fluid" alt="product" />
                                <h5>{title}</h5> 
                                <h5 className="text-muted">Price: ${price}</h5>  
                                <Link to="/">
                                    <ButtonContainer onClick = { ()=>closeModal()}>
                                     Store
                                    </ButtonContainer>
                                </Link>
                                <Link to="/cart">
                                    <ButtonContainer cart onClick = { ()=>closeModal()} className="ml-3">
                                     Go to cart
                                    </ButtonContainer>
                                </Link>
                            </div>
                        </div>
                        </div>
                       </ModalWrapper>
                       )
                   }
                   
               }}
           </ProductConsumer>
        );
    }
}
// making pos fixed and top-0 and right-0 makes it take the full page
const ModalWrapper = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0; 
    background: rgba(0,0,0,0.3);
    display: flex;
    align-items: center;
    justify-content: center;
    #modal{
        background: var(--mainWhite);
    }

`