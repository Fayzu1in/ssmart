import { useState, useEffect, useContext } from "react";
import { LanguageContext } from "../components/context/language";
import { Header } from "../components/header/header";
import { ProductsContainer } from "../components/products/products-container";
import { Vitrina } from "../components/vitrina/vitrina";
import { words } from "../components/words";

export function AllProducts() {
	const [products, setProducts] = useState([]);

	const { language } = useContext(LanguageContext);

	async function getProducts() {
		const response = await fetch("https://ssmart.uz/api/products/");
		const data = await response.json();
		setProducts(data);
	}

	useEffect(() => {
		getProducts();
	}, []);
	// getProducts();
	console.log(products);

	return (
		<section
			className="all__products"
			style={{
				padding: "60px 0",
				display: "flex",
				flexDirection: "column",
				gap: "50px",
			}}
		>
			{/* <Header /> */}
			<h1
				className="products__heading"
				style={{
					marginTop: "35px",
				}}
			>
				Продукция
			</h1>
			{products.map((product) => (
				<ProductsContainer
					name={product.name}
					picture={product.picture}
					os_type={product.os_type}
					is_new={product.is_new}
					display={product.display}
					resolution={product.resolution}
					brightness={product.brightness}
					contrast={product.contrast}
					voice={product.voice}
					ac={product.ac}
					system={product.system}
					wifi={product.wifi}
					ram={product.ram}
					voice_control={product.voice_control}
					tech={product.tech}
					price={product.price}
					is_published={product.is_published}
					key={product.id}
				/>
			))}
		</section>
	);
}
