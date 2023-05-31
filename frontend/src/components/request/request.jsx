import "./request.css";
import { Footer } from "../../components/footer/footer";

export function Request() {
	return (
		<>
			<section className="request">
				<h1 className="main__title">КАК СТАТЬ НАШИМ ДИЛЕРОМ ?</h1>
				<div
					className="about__text"
					style={{
						background: "#5e5e5e",
						fontSize: "26px",
						color: "#fff",
					}}
				>
					<p>Подайте заявку через форму что бы стать дилером Ssmart</p>
				</div>
				<div className="form-box">
					<div className="form-box-left">
						<form action="">
							<div className="input__group">
								<label htmlFor="name">Наименование юридического лица</label>
								<input type="text" name="name" />
							</div>
							<div className="input__group-row">
								<div
									className="input__group"
									style={{ width: "40%", gap: "5px" }}
								>
									<label htmlFor="name">ИНН*</label>
									<input type="text" name="name" />
								</div>
								<div
									className="input__group"
									style={{ width: "60%", gap: "5px" }}
								>
									<label htmlFor="name">
										Город осуществления деятельности*
									</label>
									<input type="text" name="name" />
								</div>
							</div>
							<div className="input__group-row">
								<div
									className="input__group"
									style={{ width: "40%", gap: "5px" }}
								>
									<label htmlFor="name">Кол-во магазинов*</label>
									<input type="text" name="name" />
								</div>
								<div
									className="input__group"
									style={{ width: "60%", gap: "5px" }}
								>
									<label htmlFor="name">
										Тип продаж (Розница или Оптовые)*
									</label>
									<input type="text" name="name" />
								</div>
							</div>
							<label htmlFor="text">Введите дополнительную информацию</label>
							<textarea name="text" id="text" cols="30" rows="10"></textarea>
							<button
								className="btn-primary"
								style={{
									width: "270px",
									fontSize: "20px",
									height: "85px",
									margin: "20px auto",
								}}
							>
								ОТПРАВИТЬ ЗАЯВКУ
							</button>
						</form>
					</div>
					<div
						className="right-logos"
						style={{
							display: "flex",
							alignItems: "center",
						}}
					>
						<img
							style={{
								width: "240px",
							}}
							src="./images/logo.png"
							alt=""
						/>
					</div>
				</div>
			</section>
			<Footer />
		</>
	);
}
