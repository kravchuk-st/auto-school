import styles from './education.module.scss';

const Education = () => {
	return (
		<section>
			<div className='container'>
				<h2>Онлайн обучение</h2>
				<p className='subtitle'>Некогда посещать автошколу? Обучайся где, как и когда удобно.</p>
				<div className={styles.content}>
					<div className={styles.item}>
						<p className={styles.item__text}>Удобное мобильное приложение для изучения теории</p>
					</div>
					<div className={styles.item}>
						<p className={styles.item__text}>Онлайн обучение начни хоть сегодня</p>
					</div>
					<div className={styles.item}>
						<p className={styles.item__text}>Преподаватели всегда на связи с&nbsp;9:00-20:00</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Education;
