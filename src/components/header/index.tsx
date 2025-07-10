import { useState } from "react";
import styles from "./index.module.css";

export default function Header() {
	const [isActive, setIsActive] = useState<boolean>(false);
	const redirectToWhatsapp = () =>
		window.location.replace(
			"https://wa.me/+5511920183075?text=Ol%C3%A1.%20Vim%20do%20Google%2C%20gostaria%20de%20agendar%20uma%20avalia%C3%A7%C3%A3o.%20"
		);
	return (
		<header className={styles.header}>
			<img src="logo_site.png" alt="Site logo" />
			<nav className={styles.fullNavbar}>
				<ul>
					<li>
						<a href="#sobre">Sobre</a>
					</li>
					<li>
						<a href="#tratamentos">Tratamentos</a>
					</li>
					<li>
						<a href="#clinica">Clínica</a>
					</li>
					<li>
						<a href="#transformacoes">Transformações</a>
					</li>
					<li>
						<a href="#depoimentos">Depoimentos</a>
					</li>
				</ul>
			</nav>
			<button className={styles.fullNavbar} onClick={redirectToWhatsapp}>
				Contato
			</button>
			<div className={styles.sideMenu}>
				<i className={`fa-solid fa-bars`} onClick={() => setIsActive(true)}></i>
				<div className={`${styles.wrapper} ${isActive && styles.active}`}>
					<nav
						className={`${styles.sideOptionsMenu} ${isActive && styles.active}`}
					>
						<ul>
							<li onClick={() => setIsActive(false)}>
								<img
									src="close_24dp_FFFFFF_FILL0_wght400_GRAD0_opsz24.svg"
									alt="close button"
									className={styles.closeButton}
								/>
							</li>
							<li onClick={() => setIsActive(false)}>
								<a href="#sobre">Sobre</a>
							</li>
							<li onClick={() => setIsActive(false)}>
								<a href="#tratamentos">Tratamentos</a>
							</li>
							<li onClick={() => setIsActive(false)}>
								<a href="#clinica">Clínica</a>
							</li>
							<li onClick={() => setIsActive(false)}>
								<a href="#transformacoes">Transformações</a>
							</li>
							<li onClick={() => setIsActive(false)}>
								<a href="#depoimentos">Depoimentos</a>
							</li>
						</ul>
						<button onClick={redirectToWhatsapp}>Contato</button>
					</nav>
				</div>
			</div>
		</header>
	);
}
