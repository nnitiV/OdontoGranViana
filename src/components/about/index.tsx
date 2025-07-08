import styles from "./index.module.css";

export default function AboutSection() {
	const redirectToWhatsapp = () =>
		window.location.replace(
			"https://wa.me/+5511920183075?text=Ol%C3%A1.%20Vim%20do%20Google%2C%20gostaria%20de%20agendar%20uma%20avalia%C3%A7%C3%A3o.%20"
		);
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
				<button onClick={redirectToWhatsapp}>
					<i className="fa-brands fa-whatsapp"></i> <p>Agendar agora</p>
				</button>
			</div>
		</section>
	);
}
