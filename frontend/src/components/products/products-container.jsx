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
			<div
				className="products__container-main"
				style={{
					height: "700px",
				}}
			>
				<div
					className="container-main-title"
					style={{
						display: "flex",
						width: "100%",
						justifyContent: "center",
						alignItems: "center",
						gap: "0",
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
				<div className="product__character">
					<div
						className="character-title"
						style={{
							fontSize: "32px",
							padding: "12px 32px",
							width: "500px",
							textAlign: "center",
							backgroundColor: "rgb(223, 223, 223)",
							borderRadius: "20px",
							marginBottom: "20px",
						}}
					>
						Характеристики
					</div>
					<div
						className="character__info"
						style={{
							fontSize: "20px",
							padding: "12px 32px",
							width: "500px",
							backgroundColor: "rgb(223, 223, 223)",
							borderRadius: "20px",
							display: "flex",
							flexDirection: "column",
							justifyContent: "center",
							gap: "28px",
							height: "607px",
						}}
					>
						<span className="display" style={{}}>
							<b>Экран - {display}</b>
						</span>
						<span className="display" style={{}}>
							<b>Разрешения - {resolution}</b>
						</span>
						<span className="display" style={{}}>
							<b>Яркость - {brightness}</b>
						</span>
						<span className="display" style={{}}>
							<b>Контраст - {contrast}</b>
						</span>
						<span className="display" style={{}}>
							<b>Звук - {voice}</b>
						</span>
						<span className="display" style={{}}>
							<b>Блок Питания - {ac}</b>
						</span>
						<span className="display" style={{}}>
							<b>Wi-Fi/Bluetooth - {wifi}</b>
						</span>
						<span className="display" style={{}}>
							<b>RAM/DDR - {ram}</b>
						</span>
						<span className="display" style={{}}>
							<b>Голосовое управление - {voice_control}</b>
						</span>
						<span className="display" style={{}}>
							<b>Технологии - {tech}</b>
						</span>
					</div>
				</div>
				{/* <div className="vitrina__right-top product">
			
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
					<span className="characteristics">Характеристики</span>
				</div> */}
				{/* <img
					className="products__image-right"
					src="./images/webos-2.png"
					alt=""
				/> */}
			</div>
		</div>
	);
}
