import { styles } from "./footer.css";

export function Footer() {
	return (
		<footer className="foot">
			<div className="footer__container">
				<ul className="footer__list">
					<span className="footer__list-title">Поддержка</span>
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
					<span className="footer__list-title">О НАС</span>
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
					<span className="footer__list-title">ПРОДУКЦИЯ</span>
					<li className="footer__list-item">
						<a href="">Все товары</a>
					</li>
					<li className="footer__list-item">
						<a href="">Ssmart Web OS</a>
					</li>
					<li className="footer__list-item">
						<a href="">Ssmart Android</a>
					</li>
				</ul>
				<ul className="footer__list">
					<span className="footer__list-title">СВЯЗАТЬСЯ С НАМИ</span>
					<li className="footer__list-item">
						<a href="mailto: abc@example.com">Эл.почта</a>
					</li>
					<li className="footer__list-item">
						<a href="tel:+998712209009">Колл-центр : +998 71 220 90 09</a>
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
