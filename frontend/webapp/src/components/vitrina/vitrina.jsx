import styles from "./vitrina.css";

export function Vitrina() {
	return (
		<section className="vitrina" id="vitrina">
			<div className="vitrina__left-section">
				<div className="vitrina__left">
					<div className="vitrina__left-top__title">
						<span
							className=""
							style={{
								fontWeight: "500",
								fontSize: "38px",
							}}
						>
							Smart TV <span style={{ fontWeight: "300" }}> на базе</span>
						</span>
						<img
							style={{
								marginTop: "10px",
							}}
							src="./images/webos_logo.png"
							alt=""
							className="webos-logo"
						/>
					</div>
					<div className="vitrina__left-top-background">
						<img
							src="./images/стартовый-тв.png"
							alt=""
							style={{
								width: "650",
								height: "450px",
							}}
						/>
					</div>
				</div>
				<div className="vitrina__left-bottom">
					<span className="left-bottom-title">ВСТРОЕННЫЕ СЕРВИСЫ</span>
					<span className="left-bottom-description">
						При первом включении доступ к ТВ каналам, Фильмам Сериалам и другому
						контенту.
					</span>
					<div className="left-bottom-logos">
						<img className="allplay" src="./images/allplay.png" alt="" />
						<img className="youtube" src="./images/youtube.png" alt="" />
					</div>
				</div>
			</div>
			<div className="vitrina__right-section">
				<div className="vitrina__right-top">
					<div className="right-top-text">
						<span className="right-top-title">Ultra HD 4K</span>
						<span className="right-top-description">
							Дисплей с яркими Цветами
						</span>
					</div>
					<img
						className="right-top-image"
						src="./images/ssmart-tv-3.png"
						alt=""
					/>
				</div>
				<div className="vitrina__right-center">
					<div className="right-center-text">
						<span className="right-center-title">БЕЗРАМОЧНЫЙ</span>
						<span className="right-center-description">Дизайн корпуса</span>
						<img
							className="right-center-image"
							src="./images/ssmart-tv-5.png"
							alt=""
						/>
					</div>
				</div>
				<div className="vitrina__right-bottom">
					<div className="right-bottom-text">
						<span className="right-bottom-title">НЕВЕРОЯТНЫЙ</span>
						<span className="right-bottom-description">
							Звук от Dolby Digital
						</span>
						<img
							className="right-bottom-image"
							src="./images/Dolby_Atmos_Logo.png"
							alt=""
						/>
					</div>
				</div>
			</div>
		</section>
	);
}
