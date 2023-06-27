// import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Col, Row } from 'reactstrap';
// import { getCurrentUserDetail} from '../Auth';
// import { useParams } from 'react-router-dom';
import "../Css/Detail.css";
import { createComment, loadComment } from '../Service/Comment-service';

export default function Comment({ animeId }) {
    const [comment, setComment] = useState([]);
    // const [user, setUser] = useState(undefined)

    // let userId=user.userId
    // let params = useParams();
    // const animeId = params.animeId;
    console.log(animeId)
    useEffect(() => {
        loadComment(animeId).then(data => {
            // console.log(data)
            setComment(data);
        }).catch(err => {
            console.log(err);
        })
        // console.log(animeId);
    }, [animeId])
    const [content, setContent] = useState("");
    const [reviews, setReviews] = useState([]);

    const textHandler = (e) => {
        setContent(e.target.value);
        // console.log(animeId);
    }
    const submitHandler = async (e) => {
        e.preventDefault();
        try {
            if (content.trim === "") {
                return;
            }
            //  axios.post(`http://localhost:8081/api/v1/comment/1/${animeId}`, { content: content });
            // const updatedReview = [...reviews, { content: content }];
            // setReviews(updatedReview);
            // console.log(reviews);
            // setContent("")

            createComment(content, animeId)
                .then(data => {
                    // console.log(data)
                    setReviews({
                        ...reviews,
                        comments: [...reviews.comments, data.data]
                    })
                    setContent("");
                })

        } catch (error) {
            console.log(error)
        }

    }
    return (
        <div>
            <h1>Comments</h1>
            <form onSubmit={submitHandler}>
                <input type="text" name="text" value={content} onChange={textHandler} className='search' placeholder="comment here..." required="" />
                <button className='btn btn-primary'  >Submit</button>
            </form>

            <div className='reviewList posi'>
                {comment?.map(c => (
                    <div className='reviewLists '>
                        <Row>
                            <Col md={8}><h5>*{c.content}</h5></Col>
                            <Col><p>{c.user.name}</p></Col>
                        </Row>

                    </div>
                )
                )}

            </div>
        </div>
    )
}
