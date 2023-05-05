import Image from 'next/image';
import styles from './not-found.module.scss';

const NotFound = () => {
	return (
		<section className={styles.page}>
			<h1 className={styles.title}>Ой, кажется, мы потеряли эту страницу!</h1>
			<p className={styles.subtitle}>Ошибка 404</p>
			<p className={styles.text}>Но не волнуйтесь, наши водители точно не теряются на дороге!</p>
			<Image src={'/img/404/not-found.png'} width={860} height={477} alt='404' />
		</section>
	);
};

export default NotFound;
