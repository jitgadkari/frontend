import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import { Col, Row } from "reactstrap";
import { loadAnime } from "../Service/anime-service";
import "../Css/EpisodePlayer.css"
export default function Episodes({animeId}) {
  let key = "sd";
 
  
  const [singleAnime,setSingleAnime]=useState([]);
  useEffect(() => {
      loadAnime(animeId).then(data => {
          setSingleAnime(data);
      }).catch(error => {
          console.log(error)
      });
  }, [animeId])
 let episodes=singleAnime.episodes;
  return (
    <div className="body">
      <Row className= "my-3 mx-2">
        <Row style={{textAlign:"left"}}>
        <h5>List of Episodes</h5>
        </Row>
        
        <Col md={2} className="colr">
        {episodes?.map((episodes)=>(
            
            <h5 className="c">{episodes.episodeNo} {episodes.episodeTitle.substring(0, 20) + "...." }</h5>
        ))
          
        }
        </Col>
        <Col md={8}>
          <div>
            <div className="react-player-container">
              {key != null ? (
                <ReactPlayer
                  controls="true"
                  playing={true}
                  url={`https://youtu.be/lnlB2ze0xZg`}
                  width="65vw"
                  height="80vh"
                />
              ) : null}
            </div>
          </div>
        </Col>
        <Col   >
          <div className="l">
            <img src={singleAnime.poster} class="card-img-top" alt="..." />
          </div>
        </Col>
      </Row>
    </div>
  );
}
