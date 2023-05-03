import Image from 'next/image';
import styles from './advantage.module.scss';

interface IProps {
	id: number;
	title: string;
	text: string;
}

const Advantage = ({ id, title, text }: IProps) => {
	return (
		<div className={styles.advantage}>
			<div className={styles.header}>
				<Image src={`./svg/advantage/${id}.svg`} width={60} height={60} alt='advantage' />
				<h5 className={styles.title}>{title}</h5>
			</div>
			<p className={styles.text}>{text}</p>
		</div>
	);
};

export default Advantage;
