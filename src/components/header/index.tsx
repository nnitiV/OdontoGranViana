import { useState } from "react";
import styles from "./index.module.css";

export default function Header() {
	const [isActive, setIsActive] = useState<boolean>(false);
	return (
		<header className={styles.header}>
			<img src="logo_site.webp" alt="Site logo" />
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
			<button className={styles.fullNavbar}>Contato</button>
			<div className={styles.sideMenu}>
				<i className={`fa-solid fa-bars`} onClick={() => setIsActive(true)}></i>
				<div
					className={`${styles.wrapper} ${isActive && styles.active}`}
					onClick={() => setIsActive(false)}
				>
					<nav
						className={`${styles.sideOptionsMenu} ${isActive && styles.active}`}
					>
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
						<button>Contato</button>
					</nav>
				</div>
			</div>
		</header>
	);
}
