import Head from 'next/head';
import Sidebar from '../components/Sidebar';

const styles = {
	container: `h-full w-full flex bg-[#fff]`,
};

export default function Home() {
	return (
		<div className={styles.container}>
			<Head>
				<title>Eureka!</title>
				<meta name="description" content="A next app" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Sidebar />
			{/* <Main /> */}
		</div>
	);
}
