import { useState, createContext, ReactNode } from 'react';
import Head from 'next/head';
import Header from '../Header';
import Footer from '../Footer';
import Modal from '@/ui-kit/Modal';
import { ModalContent } from '@/types';

export const ModalContext = createContext<ILayoutContextType>({
	showModal: () => undefined,
	hideModal: () => undefined
});

const Layout = ({ title = '', keywords = '', description = '', children }: IProps) => {
	const [modalData, setModalData] = useState<IModalData>({
		isModalOpen: false,
		modalChildren: ModalContent.FORM
	});

	const showModal = (content: string) => {
		setModalData((prevState: IModalData) => {
			return { ...prevState, isModalOpen: true, modalChildren: content };
		});
	};

	const hideModal = () => {
		setModalData((prevState: IModalData) => {
			return { ...prevState, isModalOpen: false };
		});
	};

	const modalContextValue = {
		showModal,
		hideModal
	};

	return (
		<ModalContext.Provider value={modalContextValue}>
			<Head>
				<meta charSet='utf-8' />
				<meta name='viewport' content='width=device-width, initial-scale=1, shrink-to-fit=no' />
				<meta name='keywords' content={keywords} />
				<meta name='description' content={description} />
				<title>{title}</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<Header />
			<main>{children}</main>
			<Footer />
			<Modal isOpen={modalData.isModalOpen} modalChildren={modalData.modalChildren} />
		</ModalContext.Provider>
	);
};

export default Layout;

interface IProps {
	title?: string;
	keywords?: string;
	description?: string;
	children?: ReactNode;
}

interface IModalData {
	isModalOpen: boolean;
	modalChildren: string;
}

interface ILayoutContextType {
	showModal: Function;
	hideModal: Function;
}
