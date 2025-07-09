import { useState } from "react";
import styles from "./index.module.css";

export default function Treatments() {
	const treatments = [
		{
			title: "A Beleza de um Sorriso Transformado",
			description:
				"Imagine recuperar a confiança para sorrir livremente em qualquer ocasião! Nossas lentes de resina personalizadas corrigem imperfeições, fecham espaços e claream dentes em apenas 2-3 visitas. Resultados imediatos com aparência 100% natural - seu sorriso dos sonhos está mais próximo do que imagina!",
		},
		{
			title: "Limpeza Dental Profunda",
			description:
				"Sangramento gengival ou mau hálito constante? Nossa limpeza especializada remove tártaro invisível e manchas profundas, prevenindo cáries e doenças periodontais. Em 40 minutos, saia com a sensação refrescante de um sorriso renovado - essencial para saúde bucal e geral!",
		},
		{
			title: "Tratamento de Canal <br /> sem Trauma",
			description:
				"Dor ao mastigar ou sensibilidade extrema? Nosso tratamento endodôntico de última geração preserva seu dente natural com tecnologia indolor. Esqueça o mito da dor: com anestesia moderna e microscópio digital, você mantém seu sorriso completo sem extrações!",
		},
		{
			title: "Harmonização Facial Natural",
			description:
				"Realce sua beleza única com proporções faciais equilibradas! Combinando toxina botulínica e preenchedores de ácido hialurônico, suavizamos rugas, definimos contornos e corrigimos assimetrias. Resultados progressivos e naturais em apenas 15 minutos - seu rosto mais harmonioso te espera!",
		},
		{
			title: "Aparelhos Invisíveis",
			description:
				"Alinhar os dentes sem comprometer sua estética! Nossos alinhadores transparentes corrigem mordidas e apinhamentos discretamente, removíveis para refeições e higienização. Monitore seu progresso 3D virtualmente - comece hoje sua jornada para o sorriso perfeitamente alinhado!",
		},
		{
			title: "Clareamento Dental <br /> Profissional",
			description:
				"Sorriso amarelado por café ou cigarro? Nosso clareamento em consultório alcança até 10 tons a mais de branco em 1 hora, com proteção total contra sensibilidade. Combinado com tratamento domiciliar, mantemos seus resultados por anos - reviva o brilho do seu sorriso juvenil!",
		},
		{
			title: "Odontopediatria Afetiva",
			description:
				"Transforme a experiência dentária do seu filho! Nossa abordagem lúdica com técnicas de distração cria memórias positivas enquanto prevenimos cáries e monitoramos desenvolvimento. Presenteie-os com um sorriso saudável desde a infância - a melhor herança para sua saúde futura!",
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
						Odontopediatria
					</h3>
				</div>
				<div className={styles.treatmentExplanation}>
					<h2 dangerouslySetInnerHTML={{ __html: treatments[curr].title }} />
					<div>
						<p>{treatments[curr].description}</p>
					</div>
					<button onClick={redirectToWhatsapp}>
						AGENDE AGORA SUA CONSULTA
					</button>
				</div>
			</div>
		</section>
	);
}
