import Link from 'next/link';
import Button from '@/ui-kit/Button/index';
import AdvantageCard from '@/ui-kit/AdvantageCard/index';
import styles from './articles.module.scss';

const ArticlesData = [
	{
		id: 0,
		title: 'Статья1'
	},
	{
		id: 1,
		title: 'Статья1'
	},
	{
		id: 2,
		title: 'Статья1'
	},
	{
		id: 3,
		title: 'Статья1'
	},
	{
		id: 4,
		title: 'Статья1'
	}
];

const Articles = () => {
	return (
		<section>
			<div className='container'>
				<h2>Последние статьи в блоге:</h2>
				<div className={styles.sort}>
					<Button title='Обучение в автошколе' styleName={styles.sort__btn} />
					<Button title='Советы по вождению' styleName={styles.sort__btn} />
					<Button title='Правила дорожного движения' styleName={styles.sort__btn} />
					<Button title='Экзамены в ГИБДД' styleName={styles.sort__btn} />
					<Button title='Выбор автомобиля' styleName={styles.sort__btn} />
				</div>
				<div className={styles.cards}>
					{ArticlesData.map((el) => (
						<AdvantageCard id={90} address={el.title} key={el.id} />
					))}
					<Link className={styles.cards__link} href='#'>
						Читать блог
					</Link>
				</div>
			</div>
		</section>
	);
};

export default Articles;
