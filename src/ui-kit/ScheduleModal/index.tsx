import ScheduleItem from '../ScheduleItem';
import List from '@/components/List';
import styles from './schedule-modal.module.scss';

const scheduleData = [
	{
		id: 0,
		data: '24 марта',
		day: 'Пятница',
		days: 'ПН ВТ СР ЧТ ПТ СБ ВС',
		time: 'ПН, СР, ПТ 20:00-22:00; ВТ, ЧТ 19:00-21:00; СБ, ВС 15:00-17:00',
		group: 'Вебинар-группа №360'
	},
	{
		id: 1,
		data: '29 марта',
		day: 'Среда',
		days: 'ПН ВТ СР ЧТ ПТ СБ ВС',
		time: '19:30-21:30',
		group: 'Очная группа'
	},
	{
		id: 2,
		data: '24 марта',
		day: 'Пятница',
		days: 'ПН ВТ СР ЧТ ПТ СБ ВС',
		time: 'ПН, СР, ПТ 20:00-22:00; ВТ, ЧТ 19:00-21:00; СБ, ВС 15:00-17:00',
		group: 'Вебинар-группа №360'
	},
	{
		id: 3,
		data: '29 марта',
		day: 'Среда',
		days: 'ПН ВТ СР ЧТ ПТ СБ ВС',
		time: '19:30-21:30',
		group: 'Очная группа'
	}
];

const ScheduleModal = ({ title }: IProps) => {
	return (
		<div>
			<h3 className={styles.title}>{title}</h3>
			<div className={styles.list}>
				<List items={scheduleData} renderItem={(i) => <ScheduleItem item={i} key={i.id} />} />
			</div>
		</div>
	);
};

export default ScheduleModal;

interface IProps {
	title: string;
}
