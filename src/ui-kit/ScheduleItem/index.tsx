import styles from './schedule-item.module.scss';
import stylesHelper from '@/helpers/stylesHelper/index';
import Button from '@/ui-kit/Button';

const ScheduleItem = ({ item }: IProps) => {
	return (
		<div className={styles.row}>
			<div className={stylesHelper(styles.col, styles.data)}>
				<span>{item.data}</span>
				<span>{item.day}</span>
			</div>
			<div className={stylesHelper(styles.col, styles.time)}>
				<span>{item.days}</span>
				<span>{item.time}</span>
			</div>
			<div className={stylesHelper(styles.col, styles.group)}>
				<span>{item.group}</span>
			</div>
			<div className={stylesHelper(styles.col, styles.step)}>
				<Button title='Записаться на курс' styleName={styles.btn} />
			</div>
		</div>
	);
};

export default ScheduleItem;

interface ISchedule {
	data: string;
	day: string;
	days: string;
	time: string;
	group: string;
}

interface IProps {
	item: ISchedule;
}
