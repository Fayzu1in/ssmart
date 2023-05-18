import styles from "./App.css";
import { Header } from "./components/header/header";
import { CCarouselCaption } from "@coreui/react";
import { CCarouselItem } from "@coreui/react";
import { CCarousel } from "@coreui/react";
import { CImage } from "@coreui/react";
import "@coreui/coreui/dist/css/coreui.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Hero } from "./components/hero/hero";
import { Vitrina } from "./components/vitrina/vitrina";
import { Products } from "./components/products/products";
import { Service } from "./components/service/service";
import { Footer } from "./components/footer/footer";
import { Routes, Route, Link } from "react-router-dom";
import { Home } from "./pages/home";
import { Dealers } from "./pages/dealers";
import { WarrantyComponent } from "./components/warranty/warranty";
import { Warranty } from "./pages/warranty-service";
function App() {
	const [pictures, setPictures] = React.useState([]);

	async function fetchPictures() {
		const response = await fetch("http://193.168.49.170/api/products/");
		const data = await response.json();
		setPictures(data);
	}

	React.useEffect(() => {
		fetchPictures();
	}, []);

	return (
		<div className="App">
			<BrowserRouter>
				<Header />
				{/* <Hero /> */}
				{/* <Vitrina /> */}
				{/* <Products /> */}
				{/* <Service /> */}
				{/* <WarrantyComponent /> */}
				{/* <Footer /> */}
				<Routes>
					<Route path="/" element={<Home />} />
					{/* <Route path="/dealers" element={<Dealers />} />
					<Route path="/products" element={<Home />} /> */}
					<Route path="/service" element={<Warranty />} />
				</Routes>
			</BrowserRouter>
			{/* <CCarousel controls indicators dark>
				{pictures.map((picture) => (
					<CCarouselItem key={picture.id}>
						<CImage
							className="carousel__image"
							src={picture.image}
							alt={picture.id}
						/>
						<CCarouselCaption className="d-none d-md-block caption">
							<h5>{picture.characteristics}</h5>
							<p>{picture.status}</p>
						</CCarouselCaption>
					</CCarouselItem>
				))}
			</CCarousel> */}
			;
		</div>
	);
}

export default App;
