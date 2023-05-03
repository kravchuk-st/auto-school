import { useState } from 'react';
import Image from 'next/image';
import stylesHelper from '@/helpers/stylesHelper/index';
import styles from './accordion.module.scss';

interface IProps {
	title: string;
	text: string;
}

const AccordionItem = ({ title, text }: IProps) => {
	const [isOpen, setIsOpen] = useState(false);
	return (
		<div className={stylesHelper(styles.item, isOpen ? styles.item_active : '')}>
			<div className={styles.item__header} onClick={() => setIsOpen(!isOpen)}>
				<span className={styles.item__title}>{title}</span>
				<Image className={styles.item__arrow} src={'/svg/arrow-down.svg'} width='12' height='7' alt='arrow' />
			</div>
			<div className={styles.item__body} aria-hidden={!isOpen}>
				<span className={styles.item__text}>{text}</span>
			</div>
		</div>
	);
};

export default AccordionItem;
