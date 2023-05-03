import Link from 'next/link';
import Image from 'next/image';
import SocialLinks from '@/ui-kit/SocialLinks';
import Button from '@/ui-kit/Button';
import stylesHelper from '@/helpers/stylesHelper';
import styles from './footer.module.scss';

const Footer = () => {
	return (
		<footer className={styles.footer}>
			<div className='container'>
				<div className={styles.logo}>
					<Link className={styles.logo__link} href='./'>
						<Image className={styles.logo__img} src='./svg/logo.svg' width={255} height={68} alt='logo' />
					</Link>
					<p className={styles.logo__text}>
						Обучение на права <span className='text-gray'>в&nbsp;Екатеринбурге всего за</span> 4,817 руб/месяц
					</p>
				</div>
				<div className={stylesHelper(styles.col, styles.col__links)}>
					<div className={styles.social}>
						<span className='text-gray'>Наши мессенджеры:</span>
						<SocialLinks styleName={styles.social__links} />
					</div>
					<div className={styles.workTime}>
						<span className='text-gray'>Время работы:</span>
						<div className={styles.workTime__descr}>
							<span>ПН-ПТ 10:00 – 20:00</span>
							<span>СБ, ВС 10:00 – 20:00</span>
						</div>
					</div>
				</div>
				<div className={stylesHelper(styles.col, styles.col__info)}>
					<div className={styles.phone}>
						<span className='text-gray'>Телефон для связи:</span>
						<Link className={styles.phone__link} href='tel:+73432891040'>
							+7 (343)289-10-40
						</Link>
					</div>
					<div className={styles.policy}>
						<Link className={styles.policy__link} href='#'>
							Сведения об организации
						</Link>
						<Link className={styles.policy__link} href='#'>
							Политика конфидициальности
						</Link>
					</div>
				</div>
				<Button styleName={styles.btn} title='ОБРАТНЫЙ ЗВОНОК' />
			</div>
		</footer>
	);
};

export default Footer;
