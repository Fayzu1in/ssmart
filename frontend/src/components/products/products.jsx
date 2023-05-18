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
