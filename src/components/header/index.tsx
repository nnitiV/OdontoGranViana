import styles from "./index.module.css";

export default function Header() {
	return (
		<header className={styles.header}>
			<img src="logo_site.webp" alt="Site logo" />
			<nav>
				<ul>
					<li>Sobre</li>
					<li>Tratamentos</li>
					<li>Depoimentos</li>
					<li>Transformações</li>
				</ul>
			</nav>
			<button>Contato</button>
		</header>
	);
}
