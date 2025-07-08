import { useState } from "react";
import styles from "./index.module.css";

export default function CommentsSection() {
	const [curr, setCurr] = useState<number>(0);
	const arrayOfComments = Array(10).fill(1);
	const visibleCom = 2;
	const step = 2;
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
					{arrayOfComments.map((img) => (
						<div key={img} className={styles.comment}>
							<div className={styles.clientInformation}>
								<img src="women_profile.png" alt="Women Profile" />
								<div className={styles.info}>
									<h1>Laura Mendes</h1>
									<div className={styles.stars}>
										<i className={`fa-solid fa-star ${styles.starOne}`}></i>
										<i className={`fa-solid fa-star ${styles.starTwo}`}></i>
										<i className={`fa-solid fa-star ${styles.starThree}`}></i>
										<i className={`fa-solid fa-star ${styles.starFour}`}></i>
										<i className={`fa-solid fa-star ${styles.starFive}`}></i>
									</div>
								</div>
							</div>
							<p>
								Foi uma experiência ótima, foi uma longa jornada mas valeu muito
								a pena. Melhorou minha auto-estima, meu sorriso, virei outra
								pessoa. Hoje sorrio muito mais do que sorria antes.
							</p>
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
