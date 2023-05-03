import AdvantageCard from '@/ui-kit/AdvantageCard';
import styles from './schedule.module.scss';

const scheduleData = [
	{
		id: 0,
		address: 'Центр - Малышева 85а'
	},
	{
		id: 1,
		address: 'Эльмаш - Краснофлотцев 3, метро Уралмаш'
	},
	{
		id: 2,
		address: 'Академика Шварца, 8/3'
	},
	{
		id: 3,
		address: 'Уктусская, 10'
	},
	{
		id: 4,
		address: 'ул. Комсомольская 71'
	},
	{
		id: 5,
		address: 'ул. Волгоградская 45'
	}
];

const Schedule = () => {
	return (
		<section>
			<div className='container'>
				<h2>Расписание занятий</h2>
				<p className='subtitle'>Выбери филиал и узнай график занятий</p>
				<div className={styles.list}>
					{scheduleData.map((el) => (
						<AdvantageCard {...el} key={el.id} />
					))}
				</div>
			</div>
		</section>
	);
};

export default Schedule;
