import styles from "./index.module.css";
import video from "/welcome.mp4";
export default function WelcomeSection() {
	return (
		<section className={styles.welcomeSection}>
			<div className={styles.main}>
				<h1>
					SEJA BEM-VINDO À <br /> ODONTO GRAN VIANA
				</h1>
				<hr />
				<p>
					Na Odonto Gran Viana, cada detalhe foi pensado para você se sentir
					bem, desde o primeiro atendimento até o momento de ver seu novo
					sorriso no espelho. Com técnicas personalizadas, ambiente aconchegante
					e uma abordagem diferenciada, oferecemos muito mais que estética:
					entregamos autoestima, confiança e cuidado de verdade. Trabalhamos com
					tecnologias exclusivas como a odontologia digital e a sedação
					consciente, para que sua experiência seja ainda mais confortável e
					segura
				</p>
			</div>
			<div className={styles.video}>
				<video controls playsInline autoPlay loop>
					<source src={video} type="video/mp4" />
				</video>
			</div>
		</section>
	);
}
