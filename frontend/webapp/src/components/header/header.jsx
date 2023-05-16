import { BrowserRouter } from "react-router-dom";
import { Routes, Route, Link } from "react-router-dom";
import { Home } from "../../pages/home";
import styles from "./header.css";
import React, { useContext } from "react";
import { Dealers } from "../../pages/dealers";

export { Header };

function Header() {
	return (
		<header className="header__main">
			<div className="header__left">
				<div className="header__main__logo">
					<a href="/">
						<img className="main__logo" src="./images/logo.png" alt="" />
					</a>
					{/* <a href="">
						<img src="./images/logo.png" alt="" />
					</a> */}
				</div>
				<nav className="header__main__nav">
					<ul className="header__main__nav__list">
						<li className="header__main__nav__list__item">
							<a href="#vitrina">Дилерам</a>
							{/* <Link to="/test">Дилерам</Link> */}
						</li>
						<li className="header__main__nav__list__item">
							<a href="#products">Продукция</a>
						</li>
						<li className="header__main__nav__list__item">
							<a href="#service">Гарантия/Сервис</a>
						</li>
						<li>
							<a href="">
								<img className="globe" src="./images/globe(1).png" alt="" />
							</a>
						</li>
						{/* <li className="header__main__nav__list__item">
						<a href="">About us</a>
					</li> */}
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
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/dealers" element={<Dealers />} />
				<Route path="/products" element={<Home />} />
				<Route path="/service" element={<Home />} />
			</Routes>
		</header>
	);
}
