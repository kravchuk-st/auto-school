import { useContext } from 'react';
import { ModalContext } from '@/components/Layout/index';
import FormModal from '../FormModal';
import ScheduleModal from '../ScheduleModal';
import Button from '../Button';
import stylesHelper from '@/helpers/stylesHelper';
import { ModalContent } from '@/types';
import styles from './modal.module.scss';

const Modal = ({ isOpen, modalChildren, styleNameContent = '' }: IProps) => {
	const { hideModal } = useContext(ModalContext);

	let children;
	switch (modalChildren) {
		case ModalContent.FORM:
			children = <FormModal />;
			break;
		case ModalContent.SCHEDULE:
			children = <ScheduleModal title='Центр - Малышева 85а' />;
			break;
		default:
			console.error(`Sorry, we are out of ${modalChildren}.`);
	}

	return (
		<div className={stylesHelper(styles.wrapper, isOpen ? styles.active : '')} onClick={() => hideModal()}>
			<div
				className={stylesHelper(styles.content, modalChildren === 'form' ? styles.content_form : '')}
				onClick={(e) => e.stopPropagation()}
			>
				<Button title='×' styleName={styles.close_btn} onClick={hideModal} />
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
