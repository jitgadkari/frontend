import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import "../Css/Trending.css";
import { loadAnimeCategoryWise } from '../Service/anime-service';

export default function Trendingcard() {
    const [trending, setTrending] = useState([]);
    const navigate = useNavigate();
    const navigatetodetail = (animeId) => {
        navigate(`/details/${animeId}`);

    }
   
    let categoryId = 3;
 
    
    useEffect(() => {
        loadAnimeCategoryWise(categoryId).then(data => {
            console.log(data);
            setTrending(data)
        }).catch(error => {
            console.log(error)
          
        });
    }, [categoryId])

    return (

        <section>
            <div className='title'>
                <h1>Trending</h1>
            </div>
            <div className="cards-wrapper" >
                {trending.map((trending) =>  (
                    <div className='box' onClick={() => { navigatetodetail(trending.animeId) }}>
                        <div className="card size h-100">
                      
                            <img src={trending.img} class="card-img-top" alt="..." />
                            <div className="card-body">

                                <h5 className="card-title">{trending.title}</h5>
                                <p className="card-text">{trending.Descrip}</p>
                                <span className='pos'>{trending.trendingPosition}</span>
                            </div>
                            {/* <div class="hover">
                    <h5 class="card-title">{title}</h5>
                    <p class="card-text">{Descrip}</p>
                </div> */}

                        </div>
                    </div>
                ))}
            </div >
        </section>


    )
}
