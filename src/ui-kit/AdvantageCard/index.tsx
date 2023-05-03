import Button from '@/ui-kit/Button';
import styles from './advantage-card.module.scss';

interface IProps {
	id: number;
	address: string;
}

const AdvantageCard = ({ id, address }: IProps) => {
	return (
		<div
			className={styles.item}
			style={{
				backgroundImage: `url("./img/advantage/${id}.png")`
			}}
		>
			<p className={styles.address}>{address}</p>
			<Button title='Подробнее' styleName={styles.btn} />
		</div>
	);
};

export default AdvantageCard;
