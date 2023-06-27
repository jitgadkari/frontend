import React from 'react'
import { useParams } from 'react-router-dom'
import Base from '../Components/Base'
import Episodes from '../Components/Episodes'


export default function EpisodePlayer() {
    let param = useParams();
    const animeId=param.animeId;

 
  return (
    <div>
        <Base>
        <Episodes animeId={animeId} />
        </Base>
        
    </div>
  )
}
