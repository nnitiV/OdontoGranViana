import AboutSection from "./components/about";
import DentalClinicSection from "./components/clinic";
import CommentsSection from "./components/comments";
import Footer from "./components/footer";
import Header from "./components/header";
import Mission from "./components/mission";
import TransformationsSection from "./components/transformations";
import Treatments from "./components/treatments";
import WelcomeSection from "./components/welcome";
import styles from "./index.module.css";
import bgImg from "/office-horizontal.jpg";
import bgImg2 from "/office.jpg";

function App() {
	return (
		<>
			<section
				className={`${styles.blueBg} ${styles.bgImg}`}
				style={{
					backgroundImage:
						'url("' + (window.innerWidth <= 928 ? bgImg2 : bgImg) + '")',
				}}
			>
				<div className={styles.cover}>
					<Header />
					<AboutSection />
				</div>
			</section>
			<section className={`${styles.blueBg}`}>
				<WelcomeSection />
			</section>
			<section className={styles.whiteBg}>
				<Mission />
			</section>
			<section className={styles.blueBg}>
				<DentalClinicSection />
			</section>
			<section className={styles.whiteBg}>
				<Treatments />
			</section>
			<section className={styles.blueBg}>
				<TransformationsSection />
			</section>
			<section className={styles.darkerBlueBg}>
				<CommentsSection />
			</section>
			<div className={styles.noCovenant}>Não aceitamos convênios</div>
			<Footer />
		</>
	);
}

export default App;
