import React from "react";
import Counter from "../components/Counter/Counter";

const Page = (props) => {
	return (
		<div>
			<h1>{props.name}</h1>
			<h1>Название продукта</h1>
			<h3>
				Артикул: 0000000 *****
				<a href="/">отзывы</a>
			</h3>
			<img alt="Изображение товара" />
			<div className="about">
				<h2>Описание</h2>
				<p>
					Lorem, ipsum dolor sit amet consectetur adipisicing elit.
					Tempore autem laboriosam ipsa possimus quis officia quos
					accusantium impedit nostrum illum dolorum, eveniet rerum,
					dolore mollitia quas alias nulla cum debitis.
				</p>
			</div>
			<div className="specifications">
				<p>вес</p>
				<p>Цена</p>
				<p>Польза</p>
			</div>
			<div className="reviews">
				<h2>Отзывы</h2>
			</div>
			<Counter />
			<button type="yellow">В корзину</button>
			<button className="inFavorites">В избранное</button>
			<div className="tratsport">Инфо о доставке</div>
			<div className="assurance">Гарантии качества</div>
		</div>
	);
};

export default Page;
