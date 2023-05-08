import stylesHelper from '@/helpers/stylesHelper';
import styles from './social.module.scss';

interface IProps {
	styleName?: string;
}

const SocialLinks = ({ styleName = '' }: IProps) => {
	return (
		<ul className={stylesHelper(styles.social__list, styleName)}>
			<li className={styles.social__item}>
				<a className={styles.social__link} href='#' target='_blank' rel='noreferrer'>
					<svg className={stylesHelper(styles.social__img, styles.social__img_wa)}>
						<use xlinkHref='/svg/social/whatsapp.svg#social' />
					</svg>
				</a>
			</li>
			<li className={styles.social__item}>
				<a className={styles.social__link} href='#' target='_blank' rel='noreferrer'>
					<svg className={stylesHelper(styles.social__img, styles.social__img_tg)}>
						<use xlinkHref='/svg/social/telegram.svg#social' />
					</svg>
				</a>
			</li>
			<li className={styles.social__item}>
				<a className={styles.social__link} href='#' target='_blank' rel='noreferrer'>
					<svg className={stylesHelper(styles.social__img, styles.social__img_v)}>
						<use xlinkHref='/svg/social/viber.svg#social' />
					</svg>
				</a>
			</li>
		</ul>
	);
};

export default SocialLinks;
