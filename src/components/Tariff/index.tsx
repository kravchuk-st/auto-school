import styles from './tariff.module.scss';

const Tariff = () => {
	return (
		<section>
			<div className='container'>
				<h2>Цены на обучение</h2>
				<p className='subtitle'>Выбери тариф и узнай стоимость Вашего обучения</p>
				<div className={styles.tabs}>
					<div className={styles.tabs__nav}></div>
				</div>
			</div>
		</section>
	);
};

export default Tariff;
