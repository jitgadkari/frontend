
// import item1 from "./1.jpeg";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Base from "../Components/Base";
import Comment from "../Components/Comment";
import "../Css/Detail.css";
import { loadAnime } from "../Service/anime-service";
export default function Detail() {
    const [details, setDetails] = useState([]);
    const navigate=useNavigate();
    let params = useParams();
    const animeId = params.animeId;
    useEffect(() => {
        loadAnime(animeId).then(data => {
            setDetails(data);
        }).catch(error => {
            console.log(error)
        });
    }, [animeId])

    const navtoeoisodeplayer=(animeId)=>{
        navigate(`/episode/${animeId}`);
    }

    console.log(details)

    return (
        <div>

            <Base>

                <div>
                    <div className='bg' style={{ backgroundImage: `url( ${details.img} ` }}>
                    </div>
                    <div className='details-view'>
                        <div className='image-view'>
                            <img src={details.poster} class="card-img-top" alt="..." />
                        </div>
                        <div className='info-view'>
                            <h1>{details.title}</h1>
                            <br></br>
                            <button className='btn btn-primary '  onClick={() => {navtoeoisodeplayer(details.animeId)}}><i class="fa-solid fa-play"></i> Watch Now</button>
                            <button className='btn btn-primary details' >Add to list + </button>
                            <br></br>
                            <br></br>
                            <p className="para">{details.detail}</p>

                        </div>
                        <div className='review'>
                            <Comment animeId={animeId} />
                        </div>
                    </div>
                </div>
            </Base>

        </div>
    )
}
