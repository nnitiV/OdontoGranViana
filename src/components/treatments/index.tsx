import { useState } from "react";
import styles from "./index.module.css";

export default function Treatments() {
	const treatments = [
		{
			title: "A Beleza de um Sorriso Transformado",
			description:
				" Se você tem espaço entre os dentes, se eles estão levemente desalinhados e você não quer usar aparelho, ou se eles são amarelados e até mesmo quebrados. Resolva tudo isso em um único dia, com as lentes em resina você terá um sorriso de milhões",
		},
		{
			title: "Limpeza Dental Profunda",
			description:
				"Sangramento gengival ou mau hálito constante? Nossa limpeza especializada remove tártaro invisível e manchas profundas, prevenindo cáries e doenças periodontais. Em 40 minutos, saia com a sensação refrescante de um sorriso renovado - essencial para saúde bucal e geral!",
		},
		{
			title: "Tratamento de Canal <br /> sem Trauma",
			description:
				"Se a cárie no seu dente evoluiu e você precisa fazer um tratamento de canal, você está no lugar certo. Nossa especialista realizará o seu tratamento em sessão única, sem dor e sem medo, já que você estará relaxado ouvindo uma bela música com fones de ouvido que abafam qualquer barulho exterior!",
		},
		{
			title: "Harmonização Facial Natural",
			description:
				"Realce sua beleza única com proporções faciais equilibradas! Combinando toxina botulínica e preenchedores de ácido hialurônico, suavizamos rugas, definimos contornos e corrigimos assimetrias. Resultados progressivos e naturais em apenas 15 minutos - seu rosto mais harmonioso te espera!",
		},
		{
			title: "Aparelhos Invisíveis",
			description:
				"Trabalhamos com previsibilidade de término de tratamento, nada de ficar três , quatro anos ou mais usando aparelho!!! Nossa especialista renomada em ortodontia escolherá o aparelho ideal a ser usado no seu caso. E na maioria das vezes finalizando em 18 meses á 24 meses de tratamento com resultados totalmente satisfatórios!!!",
		},
		{
			title: "Clareamento Dental <br /> Profissional",
			description:
				" Com zero sensibilidade, efetuamos sessões de dessensibilizantes!!!  O clareamento remove manchas e realça a cor natural dos dentes, deixando seu sorriso mais branco e brilhante. Pode ser feito no consultório, em casa com supervisão ou de forma combinada. A opção ideal para um sorriso bonito de forma prática e segura!",
		},
		{
			title: "Implante dentário perfeito",
			description:
				"Volte a sorrir e mastigar com prazer e segurança com nossos implantes em porcelana, que são mais resistentes que o próprio dente!Nossa especialista renomada em implantodontia realizará o seu procedimento em vinte minutinhos sem dor e de forma totalmente segura!",
		},
	];

	const redirectToWhatsapp = () =>
		window.location.replace(
			"https://wa.me/+5511920183075?text=Ol%C3%A1.%20Vim%20do%20Google%2C%20gostaria%20de%20agendar%20uma%20avalia%C3%A7%C3%A3o.%20"
		);

	const [curr, setCurr] = useState<number>(0);
	return (
		<section className={styles.treatmentsSection} id="tratamentos">
			<div className={styles.main}>
				<h1>Nossos tratamentos</h1>
				<hr />
			</div>
			<div className={styles.treatmentsDiv}>
				<div className={styles.treatmentsOptions}>
					<h3
						className={`${curr == 0 && styles.active}`}
						onClick={() => setCurr(0)}
					>
						Lentes em resina
					</h3>
					<h3
						className={`${curr == 1 && styles.active}`}
						onClick={() => setCurr(1)}
					>
						Limpeza Dental
					</h3>
					<h3
						className={`${curr == 2 && styles.active}`}
						onClick={() => setCurr(2)}
					>
						Tratamento <br /> de Canal
					</h3>
					<h3
						className={`${curr == 3 && styles.active}`}
						onClick={() => setCurr(3)}
					>
						Harmonização <br /> Facil
					</h3>
					<h3
						className={`${curr == 4 && styles.active}`}
						onClick={() => setCurr(4)}
					>
						Aparelhos <br /> Odontológicos
					</h3>
					<h3
						className={`${curr == 5 && styles.active}`}
						onClick={() => setCurr(5)}
					>
						Clareamento <br /> Dental
					</h3>
					<h3
						className={`${curr == 6 && styles.active}`}
						onClick={() => setCurr(6)}
					>
						Implante dentário
					</h3>
				</div>
				<div className={styles.treatmentExplanation}>
					<h2 dangerouslySetInnerHTML={{ __html: treatments[curr].title }} />
					<div>
						<p
							dangerouslySetInnerHTML={{ __html: treatments[curr].description }}
						></p>
					</div>
					<button onClick={redirectToWhatsapp}>
						AGENDE AGORA SUA CONSULTA
					</button>
				</div>
			</div>
		</section>
	);
}
