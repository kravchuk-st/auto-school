import Image from 'next/image';
import styles from './advantage.module.scss';

const Advantage = ({ item }: IProps) => {
	return (
		<div className={styles.advantage}>
			<div className={styles.header}>
				<Image src={`./svg/advantage/${item.id}.svg`} width={60} height={60} alt='advantage' />
				<h5 className={styles.title}>{item.title}</h5>
			</div>
			<p className={styles.text}>{item.text}</p>
		</div>
	);
};

export default Advantage;

interface IAdvantage {
	id: number;
	title: string;
	text: string;
}

interface IProps {
	item: IAdvantage;
}
