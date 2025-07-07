import styles from "./index.module.css";

export default function TransformationsSection() {
	return (
		<section className={styles.dentalClinicSection}>
			<div className={styles.main}>
				<h1>Nossas Transformações</h1>
				<hr />
			</div>
			<div className={styles.carousel}>
				<img src="lente_em_resina_1.png" alt="Office" />
				<img src="lentes_em_resina_3.png" alt="Office" />
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
