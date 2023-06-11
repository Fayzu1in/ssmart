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
	url,
	is_published,
}) {
	const { language } = useContext(LanguageContext);

	return (
		<div className="products__container">
			<div
				className="products__container-main"
				style={{
					height: "620px",
					width: "465px",
				}}
			>
				<div
					className="container-main-title"
					style={{
						display: "flex",
						width: "100%",
						fontSize: "28px",
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
					<a
						href={url}
						style={{
							textDecoration: "none",
							cursor: "pointer",
						}}
						className="btn-primary"
					>
						{words[language]["buy"]}
					</a>
				</div>
			</div>
			<div className="products__container-left">
				<div className="product__character">
					<div
						className="character-title"
						style={{
							fontSize: "26px",
							padding: "12px 32px",
							width: "500px",
							textAlign: "center",
							backgroundColor: "rgb(223, 223, 223)",
							borderRadius: "20px",
							marginBottom: "20px",
						}}
					>
						{words[language]["character"]}
					</div>
					<div
						className="character__info"
						style={{
							fontSize: "16px",
							padding: "12px 32px",
							width: "500px",
							backgroundColor: "rgb(223, 223, 223)",
							borderRadius: "20px",
							display: "flex",
							flexDirection: "column",
							justifyContent: "center",
							gap: "20px",
							height: "535px",
						}}
					>
						<span className="display" style={{}}>
							<b>{words[language]["display"]}</b> - {display}
						</span>
						<span className="display" style={{}}>
							<b>{words[language]["resolution"]}</b> - {resolution}
						</span>
						<span className="display" style={{}}>
							<b>{words[language]["brightness"]}</b> - {brightness}
						</span>
						<span className="display" style={{}}>
							<b>{words[language]["contrast"]}</b> - {contrast}
						</span>
						<span className="display" style={{}}>
							<b>{words[language]["sound"]}</b> - {voice}
						</span>
						<span className="display" style={{}}>
							<b>{words[language]["ac"]}</b> - {ac}
						</span>
						<span className="display" style={{}}>
							<b>{words[language]["system"]}</b> - {system}
						</span>
						<span className="display" style={{}}>
							<b>Wi-Fi/Bluetooth</b> - {wifi}
						</span>
						<span className="display" style={{}}>
							<b>RAM/DDR</b> - {ram}
						</span>
						<span className="display" style={{}}>
							<b>{words[language]["voice"]}</b> - {voice_control}
						</span>
						<span className="display" style={{}}>
							<b>{words[language]["tech"]}</b> - {tech}
						</span>
					</div>
				</div>
			</div>
		</div>
	);
}
