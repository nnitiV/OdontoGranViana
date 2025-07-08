import { useState } from "react";
import styles from "./index.module.css";

export default function TransformationsSection() {
	const [curr, setCurr] = useState<number>(0);
	const arrayOfImages = Array(10).fill(1);
	const visibleImages = 2;
	const step = 2;
	const totalPages = Math.ceil(arrayOfImages.length / visibleImages);
	const maxScroll = Math.max(0, arrayOfImages.length - visibleImages);
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
					{arrayOfImages.map((img) => (
						<img key={img} src="lente_em_resina_1.png" alt="Office" />
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
