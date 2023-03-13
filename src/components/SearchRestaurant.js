import React , { useState } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

function SearchRestaurant({restaurant}) {

    return (
        <div className='card mt-3 shadow p-3 mb-3 bg-body rounded'>
          <div className='row g-0'>
            <div className='col-md-2'>
                    <div className='d-none d-lg-block'>
                        <img src={restaurant.imageUrl}
                        width = '90'
                        height = '70'
                        alt="restaurant img"
                        />
                    </div>
                </div>

               <div className='col-md-6'>
                <div className='card-body'>
                <h4>
                  {restaurant.restaurantName}
                </h4>
                <Link
                    className="btn btn-primary mx-2"
                    to={`/Itemspage/${restaurant.id}`}>
                    View Items
                </Link>
                
                </div>
               </div>
            </div>
        </div>
    );
}

export default SearchRestaurant;