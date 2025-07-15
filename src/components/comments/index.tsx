import { useState } from "react";
import styles from "./index.module.css";

export default function CommentsSection() {
	const [curr, setCurr] = useState<number>(0);
	const arrayOfComments = [
		{
			name: "Randal Silva",
			comment:
				"A Dra. Tatiane é super atenciosa, muito prestativa e transmite total confiança no atendimento. Sempre preocupada com o bem-estar do paciente, explica tudo com clareza e cuidado. Além disso, oferece um ótimo custo-benefício, o que torna o serviço ainda mais acessível e justo. Super recomendo!",
			img: "R.png",
		},
		{
			name: "Ingrid Prado",
			comment:
				"Atendimento excepcional desde o primeiro contato! A equipe é extremamente profissional, atenciosa e dedicada, proporcionando um ambiente acolhedor e confortável. As instalações são modernas e bem equipadas, garantindo tratamentos de alta qualidade. Recomendo fortemente a Gran Viana para quem busca excelência em serviços odontológicos.",
			img: "IngridPrado.png",
		},
		{
			name: "Ruth War",
			comment:
				"Precisei fazer um tratamento de canal e uma coroa. O trabalho e o atendimento que recebi foram excelentes. Toda a equipe é muito profissional, gentil, atenciosa e presta um serviço fantástico. Sou dos Estados Unidos e recebi um atendimento melhor aqui do que em qualquer outro dentista nos EUA. Recomendo este dentista a todos (especialmente se você tem um pouco de medo ou não gosta de ir ao dentista como eu :)) Great job and thank you very much!",
			img: "RuthWar.png",
		},
		{
			name: "Thais Araujo",
			comment:
				"Atendimento excepcional! Fiz limpeza e, clareamento . Sem palavras para o resultado do meu clareamento, as pessoas elogiam o tempo todo. Já indiquei aos amigos e vou continuar indicando a Dr Tatiane  e o Dr Patrick nota 1000!",
			img: "thaisAraujo.png",
		},
		{
			name: "Priscila",
			comment:
				"Sou muito bem atendida nesta clínica. Os serviços e a atenção são diferenciados com preço justo. Indico com certeza.",
			img: "P.png",
		},
		{
			name: "João Paulo",
			comment:
				"Ótimos profissionais. Me atenderam em uma emergência com maestria. Educados, simpáticos do início ao fim. Consultório aconchegante e confortável. Muito limpo e organizado. Eu recomendo!",
			img: "joaoPaulo.png",
		},
		{
			name: "Cintia Bribean Rogovschi",
			comment:
				"A clínica é ótima! Dra Tatiana é super cuidadosa, profissional e delicada durante os procedimentos. Sou muito criteriosa com higiene e bio segurança e me senti segura. Fiz algumas restaurações e limpeza. Recomendo!!",
			img: "cintiaBribeanRogovschi.png",
		},
		{
			name: "Lucas Brisola",
			comment:
				"Estou muito satisfeito com o atendimento da clínica odontológica da Dra. Tatiana! Desde o momento em que entrei, fui recebido com muita cordialidade pela equipe, A Dra. Tatiana é extremamente profissional, atenciosa e competente, explicou detalhadamente o diagnóstico e as opções de tratamento. Fiquei impressionado com a qualidade do atendimento e os resultados dos procedimentos. Sem dúvida, recomendo a todos que buscam um atendimento odontológico de excelência!",
			img: "lucasBrisola.png",
		},
		{
			name: "Leila Freitas",
			comment:
				"Excelente atendimento, Doutora Tatiane super atenciosa. Fez um excelente trabalho nos meus dentes limpeza incrível. Super recomendo.",
			img: "leilaFreitas.png",
		},
		{
			name: "Janaina Leal",
			comment:
				"Eu e meu filho estamos fazendo tratamento dentário como limpeza e restaurações. Estamos bem satisfeitos com o atendimento e a qualidade dos serviços prestados pela clínica.",
			img: "janainaLeal.png",
		},
	];
	const visibleCom = window.innerWidth <= 1200 ? 1 : 2;
	const step = window.innerWidth <= 1200 ? 1 : 2;
	const totalPages = Math.ceil(arrayOfComments.length / visibleCom);
	const maxScroll = Math.max(0, arrayOfComments.length - visibleCom);
	const currentPage = Math.floor(curr / step);

	const prev = () => {
		setCurr((prev) => (prev - 1 < 0 ? maxScroll : Math.max(prev - step, 0)));
	};

	const next = () => {
		setCurr((prev) =>
			prev + 1 > maxScroll ? 0 : Math.min(prev + step, maxScroll)
		);
	};
	return (
		<section className={styles.dentalClinicSection} id="depoimentos">
			<div className={styles.main}>
				<h1>
					COMENTÁRIOS SOBRE NOSSA CLÍNICA <br /> E NOSSO TRABALHO
				</h1>
			</div>
			<div className={styles.buttons}>
				<button onClick={prev}>&lt;</button>
				<button onClick={next}>&gt;</button>
			</div>
			<div className={styles.carousel}>
				<div
					className={styles.wrapper}
					style={{ transform: `translateX(-${curr * (100 / visibleCom)}%)` }}
				>
					{arrayOfComments.map((comment, index) => (
						<div key={index} className={styles.comment}>
							<div className={styles.clientInformation}>
								<img src={comment.img} alt="Women Profile" />
								<div className={styles.info}>
									<h1>{comment.name}</h1>
									<div className={styles.stars}>
										<i className={`fa-solid fa-star ${styles.starOne}`}></i>
										<i className={`fa-solid fa-star ${styles.starTwo}`}></i>
										<i className={`fa-solid fa-star ${styles.starThree}`}></i>
										<i className={`fa-solid fa-star ${styles.starFour}`}></i>
										<i className={`fa-solid fa-star ${styles.starFive}`}></i>
									</div>
								</div>
							</div>
							<p>{comment.comment}</p>
						</div>
					))}
				</div>
			</div>
			<div className={styles.controls}>
				{Array.from({ length: totalPages }).map((_, index) => (
					<div
						key={index}
						className={`${styles.control} ${
							index === currentPage ? styles.active : ""
						}`}
						onClick={() => setCurr(index * step)}
					></div>
				))}
			</div>
		</section>
	);
}
