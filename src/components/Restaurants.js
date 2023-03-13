import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

export default function Restaurants() {
  const [restaurant, setRestaurant] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    loadRestaurants();
  }, []);

  const loadRestaurants = async () => {
    const restaurants = await axios.get("http://localhost:8080/api/restaurant/viewall");
    setRestaurant(restaurants.data);
  };


  return (
    <div className = 'container'>
        <div className='row justify-content-center'>
            <div className='col-sm-6'>
                {restaurant.map(restaurant => (
                    
                    <div className = 'card mt-3 shadow p-3 mb-3 bg-body rounded'>
                        <div className='row g-0'>
                            <div className='col-md-4'>

                                <div className='d-none d-lg-block'>
                                    
                                    <img src = {restaurant.imageUrl} 
                                    width = '90'
                                    height = '70'
                                    alt="restaurant img"
                                    />
                                </div>
                            </div>

                            <div className='col-md-4'>
                                <div className='card-body'>
                                    <h4>
                                        {restaurant.restaurantName}
                                    </h4>
                                    <Link className="btn btn-primary mx-2"
                                    to={`/Itemspage/${restaurant.id}`}>
                                     View Items
                                    </Link>

                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>

  );

}