import List from '../List';
import Advantage from '../Advantage';
import styles from './advantages.module.scss';

const advantagesData = [
	{
		id: 0,
		title: 'Обучайтесь теории в любое время',
		text: 'Доступно очное обучение, выходного дня или онлайн. Обучайтесь хоть сегодня'
	},
	{
		id: 1,
		title: 'Учим уверенному вождению',
		text: 'Обучение вождению по ЕКБ и по экзаменационному маршруту'
	},
	{
		id: 2,
		title: 'Всего 3 месяца',
		text: 'Срок обучения и доведения Вас до экзаменов'
	},
	{
		id: 3,
		title: 'Компетентные преподаватели',
		text: 'Дипломированные преподаватели теоретического курса с большим опытом работы'
	},
	{
		id: 4,
		title: 'Лояльные инструктора',
		text: 'Высококвалифицированные инструктора никогда не повысят голос'
	},
	{
		id: 5,
		title: 'Сопровождение на экзаменах',
		text: 'Обеспечим организацию экзаменов в ГИБДД. Вы будете чувствовать себя уверенно и спокойно!'
	}
];

const Advantages = () => {
	return (
		<section>
			<div className='container'>
				<h2 className={styles.title}>
					Научись первоклассно водить и <span className='text-black'>сдай на права с 1 раза!</span>
				</h2>
				<div className={styles.list}>
					<List items={advantagesData} renderItem={(i) => <Advantage item={i} key={i.id} />} />
				</div>
			</div>
		</section>
	);
};

export default Advantages;
