import React , { useState } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

function SearchItem({items}) {

    return (
        <div className='card mt-3 shadow p-3 mb-3 bg-body rounded'>
            <div className='row g-0'>
                <div className='col-md-2'>
                    <div className='d-none d-lg-block'>
                        <img src={items.imageUrl}
                        width = '160'
                        height = '150'
                        alt="item img"
                        />
                    </div>
                </div>

            <div className='col-md-6'>
                <div className='card-body'>
                  <h4>
                  {items.name}
                  </h4>
                  <h5>₹{items.price}</h5>
                  <h6>{items.available}</h6>
                  <button className="addToCart_btn">
                   Add to Cart 
                  </button>
                </div>
            </div>
            </div>
        </div>
    );
}

export default SearchItem;