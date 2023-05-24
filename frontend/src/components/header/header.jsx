import { words } from "../words";
import { LanguageContext } from "../context/language";
import styles from "./header.css";
import React, { useEffect, useState, createContext, useContext } from "react";
export { Header };

function Header() {
	// const [language, setLanguage] = useState("ru");

	const { language, changeLanguage } = useContext(LanguageContext);

	function LanguageCall(event) {
		console.log(event.target);
		let header__language = document.querySelector(".header__language");
		header__language.classList.toggle("active");
	}

	const HandleClick = (e, lang) => {
		// console.log(e.target.classList.toggle("active"));
		let en = document.getElementById("en");
		let ru = document.getElementById("ru");
		let uz = document.getElementById("uz");
		if (lang === "en") {
			en.classList.add("active");
			ru.classList.remove("active");
			uz.classList.remove("active");
			changeLanguage("en");
		} else if (lang === "ru") {
			en.classList.remove("active");
			ru.classList.add("active");
			uz.classList.remove("active");
			changeLanguage("ru");
		} else if (lang === "uz") {
			en.classList.remove("active");
			ru.classList.remove("active");
			uz.classList.add("active");
			changeLanguage("uz");
		}
	};

	useEffect(() => {
		localStorage.setItem("language", language);
		changeLanguage(language);
	}, [language]);

	return (
		<header className="header__main">
			<div className="header__left">
				<div className="header__main__logo">
					<a href="/">
						<img className="main__logo" src="./images/logo.png" alt="" />
					</a>
				</div>
				<nav className="header__main__nav">
					<ul className="header__main__nav__list">
						{/* <li className="header__main__nav__list__item">
							<a href="about-us">{words[language]["about"]}</a>
						</li> */}
						<li className="header__main__nav__list__item">
							<a href="http://localhost:3000#vitrina">
								{words[language]["dealers"]}
							</a>
						</li>
						<li className="header__main__nav__list__item">
							<a href="http://localhost:3000#products__heading">
								{words[language]["products"]}
							</a>
						</li>
						<li className="header__main__nav__list__item">
							<a href="/service">{words[language]["warranty"]}</a>
						</li>
						<li
							style={{
								position: "relative",
								display: "flex",
								flexDirection: "column",
								justifyContent: "center",
							}}
						>
							<img
								style={{
									margin: "0 auto 0 auto",
								}}
								className="globe"
								src="./images/globe(1).png"
								alt=""
								id="globe"
								onClick={LanguageCall}
							/>
							<div className="header__language" id="header__language">
								<div
									onClick={(e) => HandleClick(e, "en")}
									id="en"
									className="language-item"
								>
									{/* <a href="">EN</a> */}
									EN
								</div>
								<div
									onClick={(e) => HandleClick(e, "ru")}
									id="ru"
									className="language-item active"
								>
									{/* <a href="">RU</a> */}
									RU
								</div>
								<div
									onClick={(e) => HandleClick(e, "uz")}
									id="uz"
									className="language-item"
								>
									{/* <a href="">UZ</a> */}
									UZ
								</div>
							</div>
						</li>
					</ul>
				</nav>
			</div>
			<div className="header__main__user not">
				<a href="" className="btn">
					{words[language]["support"]}
				</a>
				<a href="" className="btn">
					<img width={"24px"} src="./images/basket(2).png" alt="" />
				</a>
				<a href="" className="btn">
					<img width={"24px"} src="./images/user.png" alt="" />
				</a>
			</div>
		</header>
	);
}
