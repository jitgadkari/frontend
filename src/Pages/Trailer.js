import React from 'react'
import { useParams } from 'react-router-dom';
import ReactPlayer from 'react-player';
import '../Css/Trailer.css';
import Base from '../Components/Base';

export default function Trailer() {

    let params = useParams();
    let key = params.ytTrailerId;
  
    return (
        <div>
            <h1>kmlscxzm</h1>
            <Base>
                <div>
                    <div className="react-player-container">
                        {(key != null) ? <ReactPlayer controls="true" playing={true} url={`https://www.youtube.com/watch?v=${key}`}
                            width='100%' height='100%' /> : null}
                    </div>
                </div>
            </Base>
        </div>
    )
}
