'use client'
import styles from './styles.module.scss';
import Head from 'next/head'
import Image from 'next/image'
import goatLogo from 'public/assets/logos/goat_white.svg';
import LangSwitch from 'comps/app/LangSwitch/LangSwitch';
import HomeNav from 'comps/app/HomeNav/HomeNav';
import LanguageContextProvider from '@/contexts/LanguageContext';
import LinksTerms from '../LinksTerms/LinksTerms';

const HomeScreen: React.FC = () => {
	return (
		<>
			<Head>
				<title>GOAT.CORP</title>
				{/* <meta name="description" content="Generated by create next app" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" /> */}
			</Head>

			<main className={styles.home}>
				<div className={styles.homeInnerWrap}>
					<section className={styles.langSection}>
						<LangSwitch orient="col"/>
					</section>
					<div className={styles.centerContent}>
						<section className={styles.logoSection}>
							<Image className={styles.logo} height={170} src={goatLogo} alt="" />
						</section>
						<section className={styles.navSection}>
							<HomeNav />
						</section>
					</div>
					<section className={styles.footerSection}>
						<LinksTerms />
					</section>
				</div>
			</main>
		</>
	);
}
 
export default HomeScreen;