import styles from "./hero.css";

export function Hero() {
	return (
		<>
			<section>
				<div className="hero__main">
					<div className="hero__main__ttile">
						<span className="text">Powered by</span>
						<span className="text-title">
							web<span className="text-title-red">OS</span>
						</span>
					</div>
					<div className="hero__main__picture"></div>
				</div>
			</section>
			<div className="rectangle"></div>
			<span className="rectangle__title">НОВИНКА</span>
		</>
	);
}
