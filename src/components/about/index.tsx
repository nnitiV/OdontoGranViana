import styles from "./index.module.css";

export default function AboutSection() {
	return (
		<section className={styles.aboutSection}>
			<div className={styles.main}>
				<h2>Odonto Gran Viana</h2>
				<hr />
				<h1>
					Um pouco sobre a <br />
					Odonto Gran <br /> Viana
				</h1>
				<p>
					A Odonto Gran Viana é uma clínica odontológica localizada no coração
					da Granja viana, em Cotia SP. Com anos de experiência, nos dedicamos a
					oferecer serviços odontológicos de alta qualidade para pacientes de
					todas as idades. Com ajuda da tecnologia, nossos especialistas estão
					se atualizando em tempo real para um planejamento totalmente eficaz!
					Contando sempre com equipamentos de ponta para melhor resultado <br />
					em cada tratamento
				</p>
			</div>
			<div className={styles.agende}>
				<h3>Agende sua avaliação</h3>
				<hr />
				<button>
					<i className="fa-brands fa-whatsapp"></i> <p>Agendar agora</p>
				</button>
			</div>
		</section>
	);
}
