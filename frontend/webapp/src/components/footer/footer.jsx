import { styles } from "./footer.css";

export function Footer() {
	return (
		<footer className="footer">
			<div className="footer__container">
				<ul className="footer__list">
					<span className="footer__list-title">Поддержка</span>
					<li className="footer__list-item">
						<a href="">Поддержка Ssmart</a>
					</li>
					<li className="footer__list-item">
						<a href="">Где купить ?</a>
					</li>
					<li className="footer__list-item">
						<a href="">Руководство пользователя</a>
					</li>

					<li className="footer__list-item">
						<a href="">Условия Гарантии</a>
					</li>

					<li className="footer__list-item">
						<a href="">Дилерам</a>
					</li>
				</ul>
				<ul className="footer__list">
					<span className="footer__list-title">О НАС</span>
					<li className="footer__list-item">
						<a href="">Ssmart</a>
					</li>
					<li className="footer__list-item">
						<a href="">Команда</a>
					</li>
					<li className="footer__list-item">
						<a href="">Производство</a>
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
						<a href="">Эл.почта</a>
					</li>
					<li className="footer__list-item">
						<a href="">Колл-центр : +998 71 200 00 000</a>
					</li>
					<li className="footer__list-item">
						<a href="">Часы работы : с 9:00 до 18:00 Карши</a>
					</li>

					<li className="footer__list-item">
						<a href="">Онлайн поддержка</a>
					</li>
				</ul>
			</div>
			<div className="footer-rectangle"></div>
			<span className="footer-rectangle-title">Smart</span>
			<div className="footer__news">
				<span className="footer__news-title">Новости Ssmart</span>
				<div className="footer__news-logos">
					<a href="">instagram</a>
					<a href="">telegram</a>
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
			<span className="copyright-text">Ssmart 2014-2023 все права защищены</span>
		</footer>
	);
}
