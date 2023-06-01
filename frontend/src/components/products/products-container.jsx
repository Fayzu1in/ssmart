import { styles } from "./products.css";
import { useEffect, useState, useContext } from "react";
import { LanguageContext } from "../context/language";
import { words } from "../words";
export function ProductsContainer({
	name,
	picture,
	os_type,
	is_new,
	display,
	resolution,
	brightness,
	contrast,
	voice,
	ac,
	system,
	wifi,
	ram,
	voice_control,
	tech,
	price,
	is_published,
}) {
	const { language } = useContext(LanguageContext);

	return (
		<div className="products__container">
			<div className="products__container-main">
				<div
					className="container-main-title"
					style={{
						display: "flex",
						width: "100%",
						justifyContent: "center",
						alignItems: "center",
						gap: "20px",
						marginTop: "20px",
					}}
				>
					<img
						style={{
							width: "200px",
						}}
						src={os_type}
						className="system"
					></img>
					{name}
				</div>
				<div
					className="products__main-picture"
					style={{
						backgroundImage: `url(${picture})`,
					}}
				></div>
				{/* <img
					className="products__main-picture"
					src={image1 || ""}
					alt="product"
				/> */}
				<div className="container-main-bottom">
					<span className="main-bottom-price">
						{price} {words[language]["currency"]}
					</span>
					<button className="btn-primary">{words[language]["buy"]}</button>
				</div>
			</div>
			<div className="products__container-left">
				<div className="vitrina__right-top product">
					<div className="right-top-text product">
						<span className="right-top-title product">{display}</span>
						<span className="right-top-description product">{display}</span>
					</div>
					<button
						style={{
							marginTop: "70px",
							fontSize: "24px",
						}}
						className="btn-primary"
					>
						{words[language]["more"]}
					</button>
					<div
						className="right-top-image"
						style={{
							backgroundImage: `url(${picture})`,
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
