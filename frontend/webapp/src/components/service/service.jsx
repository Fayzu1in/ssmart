import { styles } from "./service.css";
import { useState, useEffect } from "react";
export function Service() {
	const [partners, setPartners] = useState([]);
	const [banner, setBanner] = useState("");

	async function getPartners() {
		const response = await fetch("http://localhost:8000/partners/");
		const data = await response.json();
		setPartners(data);
	}

	async function getBanner() {
		const response = await fetch("http://localhost:8000/adverts/");
		const data = await response.json();
		setBanner(data);
	}

	useEffect(() => {
		getPartners();
		getBanner();
	}, []);

	console.log(partners);
	console.log(banner);

	return (
		<section className="service" id="service">
			<div className="banner">
				<h1
					style={{
						textAlign: "center",
						color: "white",
					}}
				>
					Reklama
				</h1>
				<img
					style={{
						width: "100%",
						height: "100%",
					}}
					src={banner[0]?.image || "./images/tv-dolby-8.png"}
					alt=""
				/>
			</div>
			<h1 className="service-heading">Гарантия и Сервис</h1>
			<div className="service__container">
				<div className="service__container-left">
					<span className="left-title">СЕРВИС</span>
					<div className="left-bottom">
						<img src="./images/map-128.png" alt="" />
						<div className="service-left-bottom-text">
							<span className="service-left-bottom-title">Адреса</span>
							<a className="service-left-bottom-link" href="">
								Сервис центров
							</a>
						</div>
					</div>
				</div>
				<div className="service__container-right">
					<div className="service-right-top">
						<div className="service-right-top-text">
							<span className="service-right-top-title">УСЛОВИЯ ГАРАНТИИ</span>
							<a className="service-right-top-link" href="">
								Узнать подробнее
							</a>
						</div>
					</div>
					<div className="service-right-bottom">
						<a href="" className="service-right-bottom-title">
							ГДЕ КУПИТЬ ?
						</a>
					</div>
				</div>
			</div>
			<div className="partners">
				<h2 className="partners__heading">Партнеры</h2>
				<div className="partners__container">
					{partners.map((partner) => (
						<div
							style={{
								backgroundImage: `url(${partner.image})`,
								backgroundSize: "cover",
								backgroundPosition: "center",
							}}
							className="partners__container-item"
						>
							{/* <img
								key={partner.id}
								className="partners__image"
								src={partner.image}
								alt=""
							/> */}
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
