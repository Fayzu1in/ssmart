import styles from "./header.css";
import React, { useState } from "react";
export { Header };

function Header() {
	const [language, setLanguage] = useState("ru");

	function LanguageCall(event) {
		console.log(event.target);
		let header__language = document.querySelector(".header__language");
		header__language.classList.toggle("active");
	}

	function HandleClick(event) {
		console.log(event.target.classList.toggle("active"));
		setLanguage(event.target.id);
		console.log(language);
	}

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
							<a href="#vitrina">Дилерам</a>
						</li>
						<li className="header__main__nav__list__item">
							<a href="#products">Продукция</a>
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
							<div
								className="header__language"
								id="header__language"
							>
								<div
									onClick={HandleClick}
									id="en"
									className="language-item active"
								>
									{/* <a href="">EN</a> */}
									EN
								</div>
								<div onClick={HandleClick} id="ru" className="language-item">
									{/* <a href="">RU</a> */}
									RU
								</div>
								<div onClick={HandleClick} id="uz" className="language-item">
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
