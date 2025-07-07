import styles from "./index.module.css";

export default function Mission() {
	return (
		<section className={styles.mission}>
			<img src="doutores.jpg" alt="Doutores da Odonto Gran Viana" />
			<div className={styles.main}>
				<h1>NOSSA MISSÃO</h1>
				<hr />
				<p>
					Pensando em cada detalhe, estamos sempre atentos em oferecer a melhor
					experiência. Trazendo assim um ambiente confortável e acolhedor que
					atende a necessidade de cada paciente. A nossa preocupação está em
					sempre alcançar um resultado totalmente satisfatório. Estamos aqui
					para cuidar da sua saúde e te proporcionar uma melhor qualidade de
					vida ao sorrir 😀
				</p>
			</div>
		</section>
	);
}
