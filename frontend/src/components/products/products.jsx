import { styles } from "./products.css";
import { useEffect, useState } from "react";
import { ProductsContainer } from "./products-container";

export function Products() {
	const [products, setProducts] = useState([]);

	async function getProducts() {
		const response = await fetch("http://193.168.49.170/api/products");
		const data = await response.json();
		setProducts(data);
	}

	useEffect(() => {
		getProducts();
	}, []);
	// getProducts();
	console.log(products);

	return (
		<section className="products" id="products">
			{/* <h1 style={{ textAlign: "center" }}>Products</h1> */}
			<div className="product__os">
				<div className="product__os-text">
					<img
						className="webos-logo"
						style={{
							marginTop: "20px",
						}}
						src="./images/webos_logo.png"
						alt=""
					/>
					<span className="os-text">
						ОПЕРАЦИОННАЯ СИСТЕМА И МАГАЗИН ПРИЛОЖЕНИЙ
						<br />
						<span className="os-text-light">ОТ КОМПАНИИ LG</span>
					</span>
				</div>
				<img className="product-img" src="./images/os.jpeg" alt="" />
			</div>
			<img
				className="products__image-center"
				src="./images/remote.png"
				alt=""
			/>
			<h1 className="products__heading">Продукция</h1>
			{/* <div className="products__container">
				<div className="products__container-main">
					<span className="container-main-title">{title}</span>
					<img
						className="products__main-picture"
						src="./images/ssmart-tv-5.png"
						alt=""
					/>
					<div className="container-main-bottom">
						<span className="main-bottom-price">{price} Сум</span>
						<button className="btn-primary">Купить</button>
					</div>
				</div>
				<div className="products__container-left">
					<div className="vitrina__right-top product">
						<div className="right-top-text product">
							<span className="right-top-title product">{character}</span>
							<span className="right-top-description product">
								{description}
							</span>
						</div>
						<button
							style={{
								marginTop: "70px",
							}}
							className="btn-primary"
						>
							Подробнее
						</button>
						<img
							className="right-top-image"
							src="./images/ssmart-tv-3.png"
							alt=""
						/>
						<span className="characteristics">Характеристики</span>
					</div>
					<img
						className="products__image-right"
						src="./images/webos-2.png"
						alt=""
					/>
				</div>
			</div> */}
			{/* <ProductsContainer
				title={"Smart WEB OS 43’’"}
				price={"4 200 000"}
				character={"Ultra HD 4K"}
				description={"Дисплей с яркими Цветами"}
				image1={"./images/ssmart-tv-5.png"}
				image2={"./images/ssmart-tv-3.png"}
			/> */}
			{products.map((product) => (
				<ProductsContainer
					title={product.name}
					price={product.price}
					character={product.character}
					description={product.description}
					image1={product.image1}
					image2={product.image2}
					key={product.id}
				/>
			))}
		</section>
	);
}
