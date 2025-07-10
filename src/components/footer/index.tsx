import styles from "./index.module.css";

export default function Footer() {
	return (
		<footer className={styles.footer}>
			<div className={styles.content}>
				<img src="logo_site.webp" alt="Logo Odonto Gran Viana" />
				<div className={styles.wrapper}>
					<div>
						<div>
							<h2>
								<i className="fa-solid fa-phone"></i>Telefone
							</h2>
							<p>(11) 92018-3075</p>
						</div>
					</div>
					<div>
						<div>
							<h2>
								<i className="fa-solid fa-envelope"></i>Email
							</h2>
							<p>odontograviana@gmail.com</p>
						</div>
					</div>
					<div>
						<div>
							<h2>
								<i className="fa-solid fa-location-dot"></i>Endereço
							</h2>
							<p>
								<a
									href="https://maps.app.goo.gl/sZaB8fx7Xfz9sCzXA"
									style={{ textDecoration: "none", color: "#5A666B" }}
								>
									Av. São Camilo, 899 - Granja Viana, Cotia - SP, 06709-150
								</a>
							</p>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
}
