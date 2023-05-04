import { useContext } from 'react';
import { ModalContext } from '../Layout';
import { ModalContent } from '@/types';
import Button from '../../ui-kit/Button';
import styles from './banner.module.scss';

const Banner = () => {
	const { showModal } = useContext(ModalContext);

	return (
		<section className={styles.banner}>
			<div className='container'>
				<div className={styles.content}>
					<div>
						<h1 className={styles.title}>
							<span className='text-black'>Обучение на права</span> в&nbsp;Екатеринбурге всего за{' '}
							<span className='text-black'>4,817 руб/месяц</span>
						</h1>
						<ul className={styles.list}>
							<li className={styles.list__item}>За 2022 год 81% курсантов сдали экзамен с первого раза</li>
							<li className={styles.list__item}>Тренируем по маршруту ГИБДД в Екатеринбурге</li>
							<li className={styles.list__item}>Без дополнительных платежей с гарантией в договоре</li>
						</ul>
						<Button onClick={() => showModal(ModalContent.FORM)} />
					</div>
					<div className={styles.info}>
						<span className={styles.line} />
						<div className={styles.info__item}>
							<h5 className={styles.info__title}>7068</h5>
							<span className={styles.info__text}>Учеников ездят по</span>
							<span className={styles.info__text}>городу мимо Вас</span>
						</div>
						<div className={styles.info__item}>
							<h5 className={styles.info__title}>5</h5>
							<span className={styles.info__text}>Классов в Екатеринбурге.</span>
							<span className={styles.info__text}>Всегда рядом с домом</span>
						</div>
						<div className={styles.info__item}>
							<h5 className={styles.info__title}>2</h5>
							<span className={styles.info__text}>Место в рейтинге</span>
							<span className={styles.info__text}>автошкол ГИБДД</span>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Banner;
