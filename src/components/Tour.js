import { useState } from "react";
import "../App.css";

const Tour = ({ body, name, id, handleDelete }) => {
	let price = Math.floor(Math.random() * (100 - 3 + 1)) + 3;

	const [showMore, setShowMore] = useState(false);
	return ( 
		<article>
			<img src={`https://picsum.photos/200/300?random=${id}`} alt={name} />
			<div className="top-info">
				<h4 className="name">{name}</h4>
				<h4 className="price">${price}.00</h4>
			</div>
			<p className="body">
				{showMore ? body : body.substring(0, 90)}...{" "}
				<span onClick={() => setShowMore(!showMore)}>
					Read
					{showMore ? " Less" : " More"}{" "}
				</span>
			</p>
			<button onClick={() => handleDelete(id)}>Not Interested</button>
           </article>
	);
};

export default Tour;
