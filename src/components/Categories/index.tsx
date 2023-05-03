import Category from '../Category';
import styles from './categories.module.scss';

const categoriesData = [
	{
		id: 0,
		title: 'Легковое авто',
		category: 'B'
	},
	{
		id: 1,
		title: 'Легкие мотоциклы',
		category: 'A1'
	},
	{
		id: 2,
		title: 'Мопеды',
		category: 'M'
	},
	{
		id: 3,
		title: 'Легковые с прицепом',
		category: 'BE'
	},
	{
		id: 4,
		title: 'Грузовые с прицепом',
		category: 'CE'
	},
	{
		id: 5,
		title: 'Мотоциклы',
		category: 'A'
	},
	{
		id: 6,
		title: 'Автобусы',
		category: 'D'
	},
	{
		id: 7,
		title: 'Автобусы с прицепом',
		category: 'DE'
	},
	{
		id: 8,
		title: 'Сочлененные автобусы',
		category: 'E'
	}
];

const Categories = () => {
	return (
		<section>
			<div className='container'>
				<h2 className={styles.title}>Категории прав</h2>
				<p className='subtitle'>У нас вы можете обучиться на следующие категории</p>
				<div className={styles.list}>
					{categoriesData.map((el) => (
						<Category {...el} key={el.id} />
					))}
				</div>
			</div>
		</section>
	);
};

export default Categories;
