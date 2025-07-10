import { useState } from "react";
import styles from "./index.module.css";

export default function TransformationsSection() {
	const [curr, setCurr] = useState<number>(0);
	const treatments = [
		{ title: "Lente em Resina", src: "lente_em_resina_1.png" },
		{ title: "Lente em Resina", src: "lentes_em_resina_2.png" },
		{ title: "Lente em Resina", src: "lentes_em_resina_3.png" },
		{ title: "Aparelho Invisível", src: "aparelho_invisivel_1.png" },
		{ title: "Aparelho Ortodôntico", src: "aparelho_ortodontico_1.png" },
		{ title: "Pé de Galinha", src: "pe_de_galinha_1.png" },
		{ title: "Preenchimento Labial", src: "preenchimento_labial_1.png" },
		{ title: "Preenchimento Labial", src: "preenchimento_labial_2.png" },
		{ title: "Clareamento Dental", src: "clareamento.jpg" },
		{ title: "Clareamento Dental", src: "clareamento-2.jpg" },
		{ title: "Clareamento Dental", src: "clareamento-3.jpg" },
	];

	const visibleImages = window.innerWidth <= 992 ? 1 : 2;
	const step = window.innerWidth <= 992 ? 1 : 2;
	const totalPages = Math.ceil(treatments.length / visibleImages);
	const maxScroll = Math.max(0, treatments.length - visibleImages);
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
		<section className={styles.dentalClinicSection} id="transformacoes">
			<div className={styles.main}>
				<h1>Nossas Transformações</h1>
				<hr />
			</div>
			<div className={styles.buttons}>
				<button onClick={prev}>&lt;</button>
				<button onClick={next}>&gt;</button>
			</div>
			<div className={styles.carousel}>
				<div
					className={styles.wrapper}
					style={{ transform: `translateX(-${curr * (100 / visibleImages)}%)` }}
				>
					{treatments.map((treatment) => (
						<div className={styles.treatmentImageWrapepr}>
							<img
								key={treatment.title}
								src={treatment.src}
								alt={treatment.src}
							/>
							<h1 className={styles.treatmentTitle}>{treatment.title}</h1>
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
