import Link from 'next/link';
import List from '@/components/List';
import Button from '@/ui-kit/Button';
import ArticleCard from '@/ui-kit/ArticleCard';
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
					<List items={ArticlesData} renderItem={(i) => <ArticleCard item={i} key={i.id} />} />
					<div className={styles.cards__item}>
						<Link className={styles.cards__link} href='#'>
							Читать блог
						</Link>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Articles;
