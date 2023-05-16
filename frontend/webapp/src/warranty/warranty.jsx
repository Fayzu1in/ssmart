import { styles } from "./warranty.css";

export function WarrantyComponent() {
	return (
		<>
			<section className="warranty">
				<span className="heading">Гарантии</span>
				<span className="subheading">
					Мы предоставляем вам информацию о гарантии Ssmart здесь
				</span>
				<div className="heading__main">
					<div className="heading__main-form">
						<span className="form-heading">АКТИВАЦИЯ ГАРАНТИИ</span>
						<form className="heading__form" action="">
							<span className="form-subtitle">
								Заполните поля для активации гарантии
							</span>
							<div className="form-group">
								<div className="form__input">
									<label htmlFor="name">1</label>
									<input type="text" name="name" id="name" />
									<label htmlFor="name">Серийный номер</label>
								</div>
								<div className="form__input">
									<label htmlFor="name">2</label>
									<input type="text" name="name" id="name" />
									<label htmlFor="name">No гарантийного Талона</label>
								</div>
								<div className="form__input">
									<label htmlFor="name">3</label>
									<input type="text" name="name" id="name" />
									<label htmlFor="name">И.Ф.О.</label>
								</div>
								<div className="form__input">
									<label htmlFor="name">4</label>
									<input type="text" name="name" id="name" />
									<label htmlFor="name">Номер телефона</label>
								</div>
								<div className="form__input">
									<label htmlFor="name">5</label>
									<input type="text" name="name" id="name" />
									<label htmlFor="name">Город</label>
								</div>
								<div className="form__input">
									<label htmlFor="name">6</label>
									<input type="text" name="name" id="name" />
									<label htmlFor="name">Продавец/Диллер</label>
								</div>
							</div>
							<button className="btn-submit" type="submit">
								АКТИВИРОВАТЬ ГАРАНТИЮ
							</button>
						</form>
					</div>
				</div>
			</section>
		</>
	);
}
