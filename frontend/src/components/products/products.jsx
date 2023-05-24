import { styles } from "./products.css";
import { useEffect, useState, useContext } from "react";
import { ProductsContainer } from "./products-container";
import { words } from "../words";
import { LanguageContext } from "../context/language";

export function Products() {
	const [products, setProducts] = useState([]);

	const { language } = useContext(LanguageContext);

	async function getProducts() {
		const response = await fetch("http://193.168.49.170/api/products/");
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
							width: "230px",
							height: "unset",
						}}
						src="./images/webos_logo.png"
						alt=""
					/>
					<span className="os-text">
						{words[language]["os_title"]}
						<br />
						<span className="os-text-light">
							{words[language]["os_description"]}
						</span>
					</span>
				</div>
				<img className="product-img" src="./images/os.jpeg" alt="" />
			</div>
			<img
				className="products__image-center"
				src="./images/remote.png"
				alt=""
			/>
			<h1 id="products__heading" className="products__heading">
				{words[language]["products_heading"]}
			</h1>
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
