import styles from "./hero.css";

export function Hero() {
	return (
		<>
			<section>
				<div className="hero__main">
					<div className="hero__main__ttile">
						<span className="text">Powered by</span>
						<img
							className="webos-logo"
							style={{
								marginTop: "20px",
							}}
							src="./images/webos_logo.png"
							alt=""
						/>
					</div>
					<div className="hero__main__picture"></div>
					<div className="hero__logos">
						<img src="./images/hdmi.png" alt="" className="hero__logos__hdmi" />
						<img
							src="./images/wi-fi.png"
							alt=""
							className="hero__logos__wifi"
						/>
						<img
							src="./images/bluetooth-2.png"
							alt=""
							className="hero__logos__bluetooth"
						/>
						<div className="hero__logos__4k">4K</div>
						<img
							className="hero__logos__allplay"
							src="./images/allplay.png"
							alt=""
						/>
						<img
							className="hero__logos__dolby"
							src="./images/dolby.png"
							alt=""
						/>
					</div>
				</div>
			</section>
			<div className="rectangle"></div>
			<span className="rectangle__title">НОВИНКА</span>
		</>
	);
}
