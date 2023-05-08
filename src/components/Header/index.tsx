import { useContext } from 'react';
import { useRouter } from 'next/router';
import { ModalContext } from '../Layout';
import Link from 'next/link';
import Image from 'next/image';
import Button from '@/ui-kit/Button';
import SocialLinks from '@/ui-kit/SocialLinks';
import { ModalContent } from '@/types';
import stylesHelper from '@/helpers/stylesHelper';
import styles from './header.module.scss';

const Header = () => {
	const { showModal } = useContext(ModalContext);

	const rout = useRouter();

	return (
		<header className={styles.header}>
			<div className='container'>
				<div className={styles.header__row}>
					<Link className={styles.logo} href='./'>
						<Image src='/svg/logo-fill.svg' width={255} height={68} alt='logo' />
					</Link>
					<div className={styles.workTime}>
						<span>Время работы:</span>
						<span>ПН-ПТ 10:00 – 20:00</span>
						<span>СБ, ВС 10:00 – 20:00</span>
					</div>
					<div className={styles.social}>
						<span className={styles.social__title}>Наши мессенджеры:</span>
						<SocialLinks />
					</div>
					<div className={styles.phone}>
						<span className={styles.phone__title}>Телефон для связи:</span>
						<Link className={styles.phone__link} href='tel:+73432891040'>
							+7 (343) 289-10-40
						</Link>
					</div>
					<Button title='ОБРАТНЫЙ ЗВОНОК' styleName={styles.modalBtn} onClick={() => showModal(ModalContent.FORM)} />
				</div>
				<nav className={styles.nav}>
					<ul className={styles.nav__list}>
						<li className={styles.nav__item}>
							<Link
								className={stylesHelper(styles.nav__link, rout.pathname === '/' ? styles.nav__link_active : '')}
								href='./'
							>
								Главная
							</Link>
						</li>
						<li className={styles.nav__item}>
							<Link className={styles.nav__link} href='#'>
								Цены
							</Link>
						</li>
						<li className={styles.nav__item}>
							<Link
								className={stylesHelper(styles.nav__link, rout.pathname === '/about' ? styles.nav__link_active : '')}
								href='#'
							>
								Расписание
							</Link>
						</li>
						<li className={styles.nav__item}>
							<Link className={styles.nav__link} href='#'>
								Категории прав
							</Link>
						</li>
						<li className={styles.nav__item}>
							<Link className={styles.nav__link} href='#'>
								Онлайн обучение
							</Link>
						</li>
						<li className={styles.nav__item}>
							<Link className={styles.nav__link} href='./about'>
								О компании
							</Link>
						</li>
						<li className={styles.nav__item}>
							<Link className={styles.nav__link} href='./contacts'>
								Контакты
							</Link>
						</li>
					</ul>
				</nav>
			</div>
		</header>
	);
};

export default Header;

interface IModalData {
	isModalOpen: boolean;
	modalChildren: string;
}
