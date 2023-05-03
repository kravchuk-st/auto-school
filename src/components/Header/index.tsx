import { useContext } from 'react';
import { ModalContext } from '../Layout';
import Link from 'next/link';
import Image from 'next/image';
import Button from '@/ui-kit/Button';
import SocialLinks from '@/ui-kit/SocialLinks';
import styles from './header.module.scss';

const Header = () => {
	const { setModalData } = useContext(ModalContext);

	const handlerClick = () => {
		setModalData((prevState: IModalData) => {
			return { ...prevState, isModalOpen: true };
		});
	};

	return (
		<header className={styles.header}>
			<div className='container'>
				<div className={styles.header__row}>
					<Link className={styles.logo} href='./'>
						<Image src='./svg/logo-fill.svg' width={255} height={68} alt='logo' />
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
					<Button title='ОБРАТНЫЙ ЗВОНОК' styleName={styles.modalBtn} fn={handlerClick} />
				</div>
				<nav className={styles.nav}>
					<ul className={styles.nav__list}>
						<li className={styles.nav__item}>
							<Link className={styles.nav__link} href='./about'>
								О нас
							</Link>
						</li>
						<li className={styles.nav__item}>
							<Link className={styles.nav__link} href='./about'>
								Цены
							</Link>
						</li>
						<li className={styles.nav__item}>
							<Link className={styles.nav__link} href='./about'>
								Расписание
							</Link>
						</li>
						<li className={styles.nav__item}>
							<Link className={styles.nav__link} href='./about'>
								Категории прав
							</Link>
						</li>
						<li className={styles.nav__item}>
							<Link className={styles.nav__link} href='./about'>
								Онлайн обучение
							</Link>
						</li>
						<li className={styles.nav__item}>
							<Link className={styles.nav__link} href='./about'>
								Акции
							</Link>
						</li>
						<li className={styles.nav__item}>
							<Link className={styles.nav__link} href='./about'>
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
