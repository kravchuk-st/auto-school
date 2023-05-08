import { useContext } from 'react';
import { ModalContext } from '@/components/Layout';
import { ModalContent } from '@/types';
import Button from '@/ui-kit/Button';
import styles from './advantage-card.module.scss';

const AdvantageCard = ({ id, address }: IProps) => {
	const { showModal } = useContext(ModalContext);

	return (
		<div
			className={styles.item}
			style={{
				backgroundImage: `url("/img/advantage/${id}.png")`
			}}
		>
			<p className={styles.address}>{address}</p>
			<Button title='Подробнее' styleName={styles.btn} onClick={() => showModal(ModalContent.SCHEDULE)} />
		</div>
	);
};

export default AdvantageCard;

interface IProps {
	id: number;
	address: string;
}
