import { styles } from "./footer.css";
import { useContext } from "react";
import { LanguageContext } from "../context/language";
import { words, footer } from "../words";

export function Footer() {
	const { language, changeLanguage } = useContext(LanguageContext);

	return (
		<footer className="foot">
			<div className="footer__container">
				<ul className="footer__list">
					<span className="footer__list-title">
						{footer[language]["support"]}
					</span>
					<li className="footer__list-item">
						<a href="/support">Поддержка Ssmart</a>
					</li>
					<li className="footer__list-item">
						<a href="/where-to-buy">Где купить ?</a>
					</li>
					<li className="footer__list-item">
						<a href="">Руководство пользователя</a>
					</li>

					<li className="footer__list-item">
						<a href="/service">Условия Гарантии</a>
					</li>

					<li className="footer__list-item">
						<a href="/request">Дилерам</a>
					</li>
				</ul>
				<ul className="footer__list">
					<span className="footer__list-title">
						{footer[language]["about"]}
					</span>
					<li className="footer__list-item">
						<a href="/about-us">Ssmart</a>
					</li>
					<li className="footer__list-item">
						<a href="/about-us">Производство</a>
					</li>
					<li className="footer__list-item">
						<a href="">Политика конфиденциальности</a>
					</li>
				</ul>
				<ul className="footer__list">
					<span className="footer__list-title">
						{footer[language]["products"]}
					</span>
					<li className="footer__list-item">
						<a href="products">Все товары</a>
					</li>
					<li className="footer__list-item">
						<a href="products">Ssmart Web OS</a>
					</li>
					<li className="footer__list-item">
						<a href="products">Ssmart Android</a>
					</li>
				</ul>
				<ul className="footer__list">
					<span className="footer__list-title">
						{footer[language]["contact"]}
					</span>
					<li className="footer__list-item">
						<a href="mailto: info@ssmart.uz">Эл.почта</a>
					</li>
					<li className="footer__list-item">
						<a href="tel:+998712209009">Колл-центр : +998 75 220 00 55</a>
					</li>
					<li className="footer__list-item">
						<a href="">Часы работы : с 9:00 до 18:00 Карши</a>
					</li>

					<li className="footer__list-item">
						<a href="/support">Онлайн поддержка</a>
					</li>
				</ul>
			</div>
			<div className="footer-rectangle"></div>
			<div className="footer-rectangle-title"></div>
			<img
				src="./images/logo.png"
				alt=""
				className="footer-rectangle-title main__logo"
				style={{
					height: "60px",
				}}
			/>
			<div className="footer__social">
				<span className="footer__news-title">Новости Ssmart</span>
				<div className="footer__news-logos">
					<a href="">
						<div className="instagram">
							<img src="./images/instagram.png" alt="" />
						</div>
						instagram
					</a>
					<a href="">
						<div className="telegram">
							<img src="./images/telegram.png" alt="" />
						</div>
						telegram
					</a>
				</div>
			</div>
			<hr
				style={{
					width: "100%",
					border: "1px solid #E5E5E5",
					position: "absolute",
					bottom: "6%",
				}}
			/>
			<span className="copyright-text">
				Ssmart 2014-2023 все права защищены
			</span>
		</footer>
	);
}
