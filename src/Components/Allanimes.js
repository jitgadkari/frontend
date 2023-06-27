import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "../Css/Allanimes.css"

import { loadAllAnime, searchAnime } from '../Service/anime-service';

export default function Allanimes({ animeId }) {
    const [all, setAll] = useState([]);
    const [newTrendingData, setNewTrendingData] = useState([]);
    const navigate = useNavigate();
    const navigatetodetail = (animeId) => {
        navigate(`/details/${animeId}`);

    }

    const [enteredTitle, setEnterdTitle] = useState("");
    const searchHandler = (event) => {
        setEnterdTitle(event.target.value);
    }

    useEffect(() => {
        loadAllAnime().then(data => {
            console.log(data);
            setAll(data)

        }).catch(error => {
            console.log(error)
        });
    }, [enteredTitle])




    useEffect(() => {
        searchAnime(enteredTitle).then(data => {
            console.log(data);
            setNewTrendingData(data)

        }).catch(error => {
            console.log(error)
        });
    }, [enteredTitle])

    return (

        <div>
            <div className='fix'>
                <span> <h1 className='title'>Latest Episodes </h1>
                    <form action="/search" >
                        <input type="text" name="keyword" onChange={searchHandler} value={enteredTitle} className='search' placeholder="Search anime..." required="" />
                    </form>
                </span>
            </div>
           
                {enteredTitle ?
                    <div className='latestc'>
                        {newTrendingData.map((newTrendingData) => (
                            <div className='latestcard' onClick={() => { navigatetodetail(animeId) }}>
                                <div class="card h-70 size">
                                    <img src={newTrendingData.poster} class="card-img-top" alt="..." />
                                    <div class="card-body">
                                        <h5 class="card-title">{newTrendingData.title}</h5>
                                        <p class="card-text">{newTrendingData.Descrip}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div> :
                    <div className='latestc'>
                        {all.map((all) => (
                            <div className='latestcard' onClick={() => { navigatetodetail(animeId) }}>
                                <div class="card h-70 size">
                                    <img src={all.poster} class="card-img-top" alt="..." />
                                    <div class="card-body">
                                        <h5 class="card-title">{all.title}</h5>
                                        <p class="card-text">{all.Descrip}</p>
                                    </div>


                                </div>
                            </div>
                        ))}
                    </div>

                }

        </div>
    )
}
