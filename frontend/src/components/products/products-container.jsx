import { styles } from "./products.css";

export function ProductsContainer({
	title,
	price = 0,
	image1,
	image2,
	character,
	description,
}) {
	return (
		<div className="products__container">
			<div className="products__container-main">
				<span className="container-main-title">{title}</span>
				<div
					className="products__main-picture"
					style={{
						backgroundImage: `url(${image1})`,
					}}
				></div>
				{/* <img
					className="products__main-picture"
					src={image1 || ""}
					alt="product"
				/> */}
				<div className="container-main-bottom">
					<span className="main-bottom-price">{price} Сум</span>
					<button className="btn-primary">Купить</button>
				</div>
			</div>
			<div className="products__container-left">
				<div className="vitrina__right-top product">
					<div className="right-top-text product">
						<span className="right-top-title product">{character}</span>
						<span className="right-top-description product">{description}</span>
					</div>
					<button
						style={{
							marginTop: "70px",
						}}
						className="btn-primary"
					>
						Подробнее
					</button>
					<div
						className="right-top-image"
						style={{
							backgroundImage: `url(${image2})`,
						}}
					></div>
					{/* <img
						className="right-top-image"
						src={image2 || "./images/ssmart-tv-3.png"}
						alt=""
					/> */}
					<span className="characteristics">Характеристики</span>
				</div>
				<img
					className="products__image-right"
					src="./images/webos-2.png"
					alt=""
				/>
			</div>
		</div>
	);
}
