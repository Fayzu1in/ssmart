import styles from "./header.css";
import React, { useEffect, useState } from "react";
export { Header };

function Header() {
	const [language, setLanguage] = useState("ru");

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
			setLanguage("en");
		} else if (lang === "ru") {
			en.classList.remove("active");
			ru.classList.add("active");
			uz.classList.remove("active");
			setLanguage("ru");
		} else if (lang === "uz") {
			en.classList.remove("active");
			ru.classList.remove("active");
			uz.classList.add("active");
			setLanguage("uz");
		}
	};

	useEffect(() => {
		console.log(language);
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
						<li className="header__main__nav__list__item">
							<a href="http://localhost:3000#vitrina">Дилерам</a>
						</li>
						<li className="header__main__nav__list__item">
							<a href="http://localhost:3000#products__heading">Продукция</a>
						</li>
						<li className="header__main__nav__list__item">
							<a href="/service">Гарантия/Сервис</a>
						</li>
						<li
							style={{
								position: "relative",
								display: "flex",
								flexDirection: "column",
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
					Поддержка
				</a>
				<a href="" className="btn">
					<img src="./images/basket(2).png" alt="" />
				</a>
				<a href="" className="btn">
					<img src="./images/user.png" alt="" />
				</a>
			</div>
		</header>
	);
}
