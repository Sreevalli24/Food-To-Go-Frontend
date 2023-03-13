import React , { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import SearchRestaurant from './SearchRestaurant';

function SearchRestaurantsPage(props) {

    const [search, setSearch] = useState('');
    const [searchUrl, setSearchUrl] = useState('');
    const [restaurant, setRestaurant] = useState([]);


    useEffect(() => {
        loadData();
    }, [searchUrl])

    const loadData = async () => {

        const baseUrl = "http://localhost:8080";
        let url = '';
        if (searchUrl === '') {
            url = baseUrl + "/api/restaurant/viewall";
        } else {
            url = baseUrl + searchUrl;
        }
        const response = await fetch(url);
        const responseJson = await response.json();

        setRestaurant(responseJson);
        console.log(responseJson);
    }

    const searchHandleChange = () => {
        if (search === '') {
            setSearchUrl('');
        } else {
            setSearchUrl(`/api/restaurant/${search}`)
        }
    }

    return (
        <div className='container'>
            <div className="row justify-content-center">
                <div className="col-sm-6">
                    <div className='d-flex'>
                        <input className='form-control me-2' type='search'
                            placeholder='Search' aria-labelledby='Search'
                            onChange={e => setSearch(e.target.value)} />
                        <button className='btn btn-outline-success'
                            onClick={() => searchHandleChange()}>
                            Search
                        </button>
                    </div>
                </div>
            </div>
            <>
                {restaurant.map(restaurant => (
                    <SearchRestaurant key={restaurant.id} restaurant={restaurant} />
                ))}
            </>
            <Link className="btn btn-primary" to={"/Consumerview"}>
                Back to Home
            </Link>
        </div>
    );
}

export default SearchRestaurantsPage;
