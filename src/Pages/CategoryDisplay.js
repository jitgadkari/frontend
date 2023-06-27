import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Base from '../Components/Base'

import "../Css/Allanimes.css"
import { loadAnimeCategoryWise } from '../Service/anime-service';
export default function CategoryDisplay() {
    const [catData, setCatData] = useState([]);

    // let params = useParams()
    // let catId = params.categoryId;
    const navigate = useNavigate();
    const navigatetodetail = (animeId) => {
        navigate(`/details/${animeId}`);

    }


let catId=5;
    useEffect(() => {
        loadAnimeCategoryWise(catId).then(data => {
            console.log(data);
            setCatData(data);
        }).catch(error => {
            console.log(error)
        });
    }, [catId])
    return (
        <div>
            <Base>

                <div className='latestc'>
                    {catData.map((catData) => (
                        <div className='latestcard' onClick={() => { navigatetodetail(catData.animeId) }}>
                            <div class="card h-70 size">
                                <img src={catData.poster} class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title">{catData.title}</h5>
                                    <p class="card-text">{catData.Descrip}</p>
                                </div>


                            </div>
                        </div>
                    ))}
                </div>
            </Base>
        </div>
    )
}
