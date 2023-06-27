// import React, { useState } from 'react'
// import Axios from 'axios';
import { useEffect, useState } from 'react';
// import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import "../Css/Header.css";
import { loadAnimeCategoryWise, viewHandle } from '../Service/anime-service';

export default function AnimeCarousel() {
    const [anime, setAnime] = useState([]);
    const Navigate = useNavigate();
    const detailHandler = (animeId) => {
        Navigate(`details/${animeId}`);

    }
    let categoryId = 5

    useEffect(() => {
        loadAnimeCategoryWise(categoryId).then(data => {
            console.log(data);
            setAnime(data)
        }).catch(error => {
            console.log(error)
        });
    }, [categoryId])


    const watchHandler = (animeId, views) => {
        views += 1;
        console.log(animeId, views);
        viewHandle(animeId, views).then(data => {
            console.log(data)
        })
            .catch(error => {
                console.log(error);
            })
    }

    // Axios.patch(`http://localhost:8081/api/v1/anime/${animeId}`, { views: views })
    // .then(res => {
    //     console.log(res)
    // })
    return (
        <div>
            <section className='perfect'>
                <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner ">
                        {anime.map((anime) => (
                            <div class="carousel-item active " >
                                <img src={anime.img} class="d-block w-100 perfectback " alt="..." />
                                <div class="carousel-caption d-none d-md-block">
                                    <div className='alignment'>
                                        <h1 style={{ color: 'white' }}>{anime.title}</h1>
                                        <p>{anime.detail}</p>
                                        {/* {console.log(anime.trailerLink)} */}
                                        <Link to={`/Trailer/${anime.trailerLink.substring(anime.trailerLink.length - 11)}`}>
                                            {/* <FontAwesomeIcon className="play-button-icon"
                                    icon={faCirclePlay}
                                /> */}
                                            <button className='btn btn-primary ' onClick={() => { watchHandler(anime?.animeId, anime?.views) }}><i class="fa-solid fa-play"></i> Watch Now</button>
                                        </Link>
                                        <span><button className=' details' onClick={() => { detailHandler(anime.animeId) }} > Detail <i class="fa-solid fa-angle-right"></i></button>
                                        </span>
                                        <i class="fa-solid fa-eye p-2"> {anime.views}</i>


                                    </div>


                                </div>
                            </div>
                        ))}

                    </div>
                    {/* <div className='alignment'>
                        {animeTrending?.map((animeTrending)=> <div> 
                            <h1>{animeTrending.title}</h1>
                            <p>{animeTrending.detail}</p>
                    </div>)}
                    </div> */}

                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </section>

        </div>

    )
}
