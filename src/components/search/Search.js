import React, { useEffect, useState } from 'react';
import ImageResults from '../imageResults/ImageResults';
import './Search.css'
import axios from 'axios';

const base_path = 'https://pixabay.com/api/';
const key = '42538103-f3185c93970c2dadd8a0a3584'

function Search() {
    const [results, setResults] = useState([]);
    const [searchText,setSearchText] = useState('')

    const handleSearch = (e) => {
        setSearchText(e.target.value)
    }

    useEffect(() => {
        getData()
    }, [searchText])

    const getData = () => {
        axios
            .get(
                `${base_path}?key=${key}&q=${searchText}&image_type=photo&safesearch=true`
            )
            .then((res) => {
                setResults(res.data.hits)
            })
            .catch((err) => console.log(err))
    }
    
    return (
        <>        
        <div className='search-wrapper'>
            <input placeholder='Search for image' value={searchText} name='searchImage' onChange={handleSearch}></input>
        </div>
        <ImageResults images={results}></ImageResults>
        </>
    ) 
}

export default Search;