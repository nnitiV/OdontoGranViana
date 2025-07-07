import styles from "./index.module.css";

export default function Footer() {
	return (
		<footer className={styles.footer}>
			<div className={styles.content}>
				<img src="logo_site.webp" alt="Logo Odonto Gran Viana" />
				<div>
					<div>
						<i className="fa-solid fa-phone"></i>
						<div>
							<h2>Telefone</h2>
							<p>+55 11 92018-3075</p>
						</div>
					</div>
					<div>
						<i className="fa-solid fa-envelope"></i>
						<div>
							<h2>Email</h2>
							<p>odontogravianna@gmail.com</p>
						</div>
					</div>
					<div>
						<i className="fa-solid fa-location-dot"></i>
						<div>
							<h2>Email</h2>
							<p>Av. São Camilo, 899 - Granja Viana, Cotia - SP, 06709-150</p>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
}
