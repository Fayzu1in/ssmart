import React from "react";
import { stles } from "./about.css";

export function AboutUsComponent() {
	return (
		<section className="about">
			<h1 className="main__title">О КОМПАНИИ</h1>
			<div
				className="about__smart"
				style={{
					backgroundColor: "#bf1d69",
					color: "#fff",
				}}
			>
				<div className="about__smart-left">
					<img className="about-logo" src="./images/logo.png" alt="" />
				</div>
				<div className="about__smart-right">
					<p>
						SSMART® — это собственная торговая марка компании ЧП ALP TEXNO
						SERVIS. Светодиодные телевизоры SSMART — «МЫ ПРОИЗВОДИМ
						УЗБЕКИСТАНЕ». Мы гордость Узбекской промышленности состоящая из
						команды экспертов с современной инфраструктурой, позволяющей
						разрабатывать и производить первоклассные продукты экономически
						эффективным способом
					</p>
				</div>
			</div>
			<div className="about__text">
				<p>
					ЧП ALP TEXNO SERVIS - ЭТО ОДИН ИЗ КРУПНЕЙШИХ ОЕМ ЗАВОДОВ В РЕСПУБЛИКЕ
					УЗБЕКИСТАН ПО ПРОИЗВОДУ ТЕЛЕВИЗОРОВ С ПЛОСКИМ ЭКРАНОМ.
				</p>
			</div>
			<div
				className="about__smart"
				style={{
					backgroundColor: "#e2e2e2",
					height: "145px",
					fontSize: "20px",
				}}
			>
				<div
					className="about__smart-left"
					style={{
						borderRight: "3px solid #000",
						height: "125px",
						padding: "unset",
						textAlign: "center",
					}}
				>
					<span>
						КОМПАНИЯ ОСНОВАННА <br /> В 2017 ГОДУ
					</span>
				</div>
				<div
					className="about__smart-right"
					style={{
						paddingRight: "15px",
						paddingLeft: "15px",
						textAlign: "center",
						display: "flex",
						justifyContent: "center",
						width: "60%",
					}}
				>
					<span>КОЛИЧЕСТВО СОТРУДНИКОВ "300" ЧЕЛОВЕК</span>
				</div>
			</div>
			<div className="about__text-second">
				<div className="text-second-left">
					<span>
						ЭКСПОРТ
						<br />
						70 000 ШТ В ГОД
					</span>
				</div>
				<div className="text-second-right">
					<span>
						ПЛОЩАДЬ ЗАВОДА <br /> 10 000 м2
					</span>
				</div>
			</div>
			<div className="about__text">
				<span>ПРОИЗВОДСТВЕННАЯ МОЩНОСТЬ 100 000 ТЕЛЕВИЗОРОВ В ГОД</span>
			</div>
		</section>
	);
}
