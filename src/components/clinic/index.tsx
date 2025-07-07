import styles from "./index.module.css";

export default function DentalClinicSection() {
	return (
		<section className={styles.dentalClinicSection}>
			<div className={styles.main}>
				<h1>Nossa Clínica</h1>
				<hr />
			</div>
			<div className={styles.carousel}>
				<img src="office.jpg" alt="Office" />
				<img src="office.jpg" alt="Office" />
				<img src="office.jpg" alt="Office" />
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
