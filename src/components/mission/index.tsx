import { useEffect, useState } from "react";
import styles from "./index.module.css";

export default function Mission() {
	const [windowWidth, setWindowWidth] = useState(0);
	const [isClient, setIsClient] = useState(false);

	useEffect(() => {
		// Ensure we're on the client
		setIsClient(true);

		// Set initial width
		setWindowWidth(window.innerWidth);

		// Handle resize events
		const handleResize = () => setWindowWidth(window.innerWidth);

		// Add event listener
		window.addEventListener("resize", handleResize);

		// Cleanup
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	// Choose the correct image based on window width
	const imageSrc = isClient
		? windowWidth < 1400
			? "doutores-small.jpg"
			: "doutores.jpg"
		: "doutores.jpg"; // Default during SSR
	return (
		<section className={styles.mission}>
			<img src={imageSrc} id="sobre" alt="Doutores da Odonto Gran Viana" />
			<div className={styles.main}>
				<h1>NOSSA MISSÃO</h1>
				<hr />
				<p>
					Pensando em cada detalhe, estamos sempre atentos em oferecer a melhor
					experiência. Trazendo assim um ambiente confortável e acolhedor que
					atende a necessidade de cada paciente. A nossa preocupação está em
					sempre alcançar um resultado totalmente satisfatório. Estamos aqui
					para cuidar da sua saúde e te proporcionar uma melhor qualidade de
					vida ao sorrir
				</p>
			</div>
		</section>
	);
}
