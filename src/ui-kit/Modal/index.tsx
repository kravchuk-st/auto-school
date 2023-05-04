import type { ReactNode } from 'react';
import { useContext } from 'react';
import { ModalContext } from '@/components/Layout/index';
import FormModal from '../FormModal';
import Button from '../Button';
import stylesHelper from '@/helpers/stylesHelper';
import styles from './modal.module.scss';

const Modal = ({ isOpen, modalChildren, styleNameContent = '' }: IProps) => {
	const { setModalData } = useContext(ModalContext);

	const handlerClick = () => {
		setModalData((prevState: IModalData) => {
			return { ...prevState, isModalOpen: false };
		});
	};

	let children;
	switch (modalChildren) {
		case 'form':
			children = <FormModal />;
			break;
		case 'Papayas':
			console.log('Mangoes and papayas are $2.79 a pound.');
			break;
		default:
			console.error(`Sorry, we are out of ${modalChildren}.`);
	}

	return (
		<div className={stylesHelper(styles.wrapper, isOpen ? styles.active : '')} onClick={handlerClick}>
			<div
				className={stylesHelper(styles.content, modalChildren === 'form' ? styles.content_form : '')}
				onClick={(e) => e.stopPropagation()}
			>
				<Button title='×' styleName={styles.close_btn} fn={handlerClick} />
				{children}
			</div>
		</div>
	);
};

export default Modal;

interface IProps {
	isOpen: boolean;
	modalChildren: string;
	styleNameContent?: string;
}

interface IModalData {
	isModalOpen: boolean;
	modalChildren: string;
}
