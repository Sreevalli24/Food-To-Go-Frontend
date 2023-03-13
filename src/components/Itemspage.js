import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import "../App.css";

export default function Itemspage(){
    const [items, setItems] = useState([]);

    const { id } = useParams();

  useEffect(() => {
    loadItems();
  }, []);

  const loadItems = async () => {
    const items = await axios.get(`http://localhost:8080/api/items/restaurant/${id}`);
    setItems(items.data);
  };

  return (
    <div className = 'container'>
        <div className='row justify-content-center'>
            <div className='col-sm-6'>
                {items.map(items => (

                    <div className = 'card mt-3 shadow p-3 mb-3 bg-body rounded'>
                        <div className='row g-0'>
                            <div className='col-md-4'>
                                <div className='d-none d-lg-block'>
                                    
                                    <img src = {items.imageUrl} 
                                    width = '160'
                                    height = '150'
                                    />
                                </div>
                            </div>

                            <div className='col-md-4'>
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
                ))}
                
                <Link className="btn btn-primary" to={"/Consumerview"}>
                    Back to Home
                </Link>

            </div>
        </div>
    </div>

  );

}