import { useState, createContext, ReactNode } from 'react';
import Head from 'next/head';
import Header from '../Header';
import Footer from '../Footer';
import Modal from '@/ui-kit/Modal';

export const ModalContext = createContext<ILayoutContextType>({
	modalData: { isModalOpen: false, modalChildren: 'form' },
	setModalData: () => undefined
});

const Layout = ({ title = '', keywords = '', description = '', children }: IProps) => {
	const [modalData, setModalData] = useState<IModalData>({
		isModalOpen: false,
		modalChildren: 'form'
	});

	const modalContextValue = {
		modalData,
		setModalData
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
	modalData: IModalData;
	setModalData: any;
}
