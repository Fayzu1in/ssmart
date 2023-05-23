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
import { AboutUs } from "./pages/about-us";
function App() {
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
					<Route path="/about-us" element={<AboutUs />} />
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
