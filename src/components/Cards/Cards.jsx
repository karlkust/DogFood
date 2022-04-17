import React from "react";
import Card from "../Card/Card.js";
import { Link } from "react-router-dom";

const Cards = ({ goods }) => {
	return (
		<div className="container">
			{goods.map((el) => (
				<Link to={"/product/" + el._id} key={el._id}>
					<Card {...el} key={el._id} />
				</Link>
			))}
		</div>
	);
};

export default Cards;
