import styles from "./index.module.css";

export default function Treatments() {
	return (
		<section className={styles.treatmentsSection}>
			<div className={styles.main}>
				<h1>Nossos tratamentos</h1>
				<hr />
			</div>
			<div className={styles.treatmentsDiv}>
				<div className={styles.treatmentsOptions}>
					<h3 className={styles.active}>Lentes em resina</h3>
					<h3>Limpeza Dental</h3>
					<h3>
						Tratamento <br /> de Canal
					</h3>
					<h3>
						Harmonização <br /> Facil
					</h3>
					<h3>
						Aparelhos <br /> Odontológicos
					</h3>
					<h3>
						Clareamento <br /> Dental
					</h3>
					<h3>Odontopediatria</h3>
				</div>
				<div className={styles.treatmentExplanation}>
					<h2>
						A Beleza de um <br /> Sorriso Transformado
					</h2>
					<div>
						<p>
							Investir em lentes de resina de alta qualidade é revolucionar seu
							sorriso com segurança: um cuidado especializado que entrega
							harmonia estética e resultados naturais, sempre com acompanhamento
							de um dentista qualificado para garantir durabilidade e confiança
							em cada sorriso.
						</p>
						<img src="smile.png" alt="Lentes em resina" />
					</div>
					<button>AGENDE AGORA SUA CONSULTA</button>
				</div>
			</div>
		</section>
	);
}
