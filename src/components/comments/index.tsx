import styles from "./index.module.css";

export default function CommentsSection() {
	return (
		<section className={styles.dentalClinicSection}>
			<div className={styles.main}>
				<h1>
					COMENTÁRIOS SOBRE NOSSA CLÍNICA <br /> E NOSSO TRABALHO
				</h1>
			</div>
			<div className={styles.carousel}>
				<div className={styles.comment}>
					<div className={styles.clientInformation}>
						<img src="women_profile.png" alt="Women Profile" />
						<div className={styles.info}>
							<h1>Laura Mendes</h1>
							<div className={styles.stars}>
								<i className={`fa-solid fa-star ${styles.starOne}`}></i>
								<i className={`fa-solid fa-star ${styles.starTwo}`}></i>
								<i className={`fa-solid fa-star ${styles.starThree}`}></i>
								<i className={`fa-solid fa-star ${styles.starFour}`}></i>
								<i className={`fa-solid fa-star ${styles.starFive}`}></i>
							</div>
						</div>
					</div>
					<p>
						Foi uma experiência ótima, foi uma longa jornada mas valeu muito a
						pena. Melhorou minha auto-estima, meu sorriso, virei outra pessoa.
						Hoje sorrio muito mais do que sorria antes.
					</p>
				</div>
				<div className={styles.comment}>
					<div className={styles.clientInformation}>
						<img src="women_profile.png" alt="Women Profile" />
						<div className={styles.info}>
							<h1>Laura Mendes</h1>
							<div className={styles.stars}>
								<i className={`fa-solid fa-star ${styles.starOne}`}></i>
								<i className={`fa-solid fa-star ${styles.starTwo}`}></i>
								<i className={`fa-solid fa-star ${styles.starThree}`}></i>
								<i className={`fa-solid fa-star ${styles.starFour}`}></i>
								<i className={`fa-solid fa-star ${styles.starFive}`}></i>
							</div>
						</div>
					</div>
					<p>
						Foi uma experiência ótima, foi uma longa jornada mas valeu muito a
						pena. Melhorou minha auto-estima, meu sorriso, virei outra pessoa.
						Hoje sorrio muito mais do que sorria antes.
					</p>
				</div>
			</div>
			<div className={styles.controls}>
				<div className={`${styles.control} ${styles.active}`}></div>
				<div className={styles.control}></div>
				<div className={styles.control}></div>
				<div className={styles.control}></div>
				<div className={styles.control}></div>
			</div>
		</section>
	);
}
