import { Guidance } from "../guidance/guidance";
import { styles } from "./warranty.css";
import { useRef, useState } from "react";

export function WarrantyComponent() {
	const formRef = useRef(null);

	const [formData, setFormData] = useState({
		series: "",
		talon: "",
		name: "",
		phone: "",
		city: "",
		dealer: "",
	});
	const [formStatus, setFormStatus] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();
		// Send POST request here
		sendFormData(formData);
	};

	const handleChange = (e) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});
	};

	const sendFormData = async (data) => {
		try {
			const response = await fetch("http://193.168.49.170/api/warranty/", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(data),
			});

			if (response.ok) {
				console.log("Form data sent successfully!");
				setFormStatus("success");
				formRef.current.reset();
				setFormData({
					series: "",
					talon: "",
					name: "",
					phone: "",
					city: "",
					dealer: "",
				});
				// Do something with the response if needed
			} else {
				console.log("Form data failed to send.");
				setFormStatus("error");
			}
		} catch (error) {
			console.error("Error sending form data:", error);
			setFormStatus("error");
		}
	};

	return (
		<>
			<section className="warranty">
				<span className="heading">ГАРАНТИЯ</span>
				<span className="subheading">
					Мы предоставляем вам информацию о гарантии Ssmart здесь
				</span>
				<div className="heading__main">
					<div className="heading__main-form">
						<span className="form-heading">АКТИВАЦИЯ ГАРАНТИИ</span>
						<form
							ref={formRef}
							className="heading__form"
							method="POST"
							onSubmit={handleSubmit}
						>
							<span className="form-subtitle">
								Заполните поля для активации гарантии
							</span>
							<div className="form-group">
								<div className="form__input">
									<label htmlFor="series">1</label>
									<input
										onChange={handleChange}
										type="text"
										name="series"
										id="series"
										required
									/>
									<label className="label-main" htmlFor="series">
										Серийный номер
									</label>
								</div>
								<div className="form__input">
									<label htmlFor="talon">2</label>
									<input
										onChange={handleChange}
										type="text"
										name="talon"
										id="talon"
										required
									/>
									<label className="label-main" htmlFor="talon">
										No гарантийного Талона
									</label>
								</div>
								<div className="form__input">
									<label htmlFor="name">3</label>
									<input
										onChange={handleChange}
										type="text"
										name="name"
										id="name"
										required
									/>
									<label className="label-main" htmlFor="name">
										И.Ф.О.
									</label>
								</div>
								<div className="form__input">
									<label htmlFor="phone">4</label>
									<input
										onChange={handleChange}
										type="text"
										name="phone"
										id="phone"
										required
									/>
									<label className="label-main" htmlFor="phone">
										Номер телефона
									</label>
								</div>
								<div className="form__input">
									<label htmlFor="city">5</label>
									<input
										onChange={handleChange}
										type="text"
										name="city"
										id="city"
										required
									/>
									<label className="label-main" htmlFor="city">
										Город
									</label>
								</div>
								<div className="form__input">
									<label htmlFor="dealer">6</label>
									<input
										onChange={handleChange}
										type="text"
										name="dealer"
										id="dealer"
										required
									/>
									<label className="label-main" htmlFor="dealer">
										Продавец/Диллер
									</label>
								</div>
							</div>
							{formStatus === "success" && (
								<span className="success">Успешно!</span>
							)}
							{formStatus === "error" && <span className="error">Ошибка!</span>}
							<button className="btn-submit" type="submit">
								АКТИВИРОВАТЬ ГАРАНТИЮ
							</button>
						</form>
					</div>
					<div className="heading__left">
						<div className="heading__main-info">
							<span className="form-heading">ИНФОРМАЦИЯ О ГАРАНТИИ</span>
							<div className="info__block">
								<span className="info__block-subtitle">
									Как активировать гарантию гарантию на приобретенную продукцию
									«Ssmart» ?
								</span>
								<ol className="info__block-list">
									<li className="block-list-item">
										Вам необходимо вписать в первое поле серийный номер
										устройства, который находится на боковой части коробки.
										Серийный номер состоит из 15 символов ( букв и цифр) пример
										SM552305A110223 после вам станут доступы остальные поля.
									</li>
									<li className="block-list-item">
										Вам необходимо вписать во второе поле номер гарантийного
										талона, который заполнил вам продавец при покупки устройства
										Ssmart. No гарантийного талона уникален у каждого продавца
									</li>
									<li className="block-list-item">
										Вам необходимо вписать в третье поле имя ,фамилию , отчества
										человека на кого был оформлен гарантийный талон.
									</li>
									<li className="block-list-item">
										Вам необходимо вписать в четвертое поле номер вашего
										телефона
									</li>
									<li className="block-list-item">
										Вам необходимо вписать в пятое поле город в котором вы
										приобрели устройство «Ssmart».
									</li>
									<li className="block-list-item">
										Вам необходимо вписать в шестое поле ИНН продавца у которого
										вы приобрели устройство «Ssmart»
									</li>
								</ol>
							</div>
						</div>
						<div className="heading__main-warning">
							<span className="warning-heading">ЭТО ВАЖНО</span>
							<div className="warning-box">
								Активацию гарантии должен осуществлять продавец!
							</div>
						</div>
					</div>
				</div>
				<Guidance />
			</section>
		</>
	);
}
