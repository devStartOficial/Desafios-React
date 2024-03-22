/* eslint-disable react/prop-types */
import { useState } from "react";

export default function Tour({ id, image, info, name, price, romeveTour}){
    const [readMore, setReadMore] = useState(false)

    return(
        <article className="single-tour">
            <img src={image} />
            <footer>
                <div className="tour-info">
                    <h4>{name}</h4>
                    <h4>{price}</h4>
                </div>
                <p>
                    {readMore ? info : `${info.substring(0,200)}...`}
                    <button onClick={()=> setReadMore(!readMore)}>
                        { readMore ? 'Show less' : 'Read More'}
                    </button>
                </p>
                <button className="delete-btn" onClick={()=> romeveTour(id)}>Not interested</button>
            </footer>
        </article>
    )
}