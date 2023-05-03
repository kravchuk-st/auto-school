import Image from 'next/image';
import SocialLinks from '@/ui-kit/SocialLinks';
import Input from '@/ui-kit/Input';
import Button from '@/ui-kit/Button';
import styles from './contact-form.module.scss';

const ContacyForm = () => {
	return (
		<section>
			<div className='container'>
				<h2>
					Попробуй 7 дней обучения <span className='text-danger'>БЕСПЛАТНО</span>
				</h2>
				<div className={styles.content}>
					<Image className={styles.img} src={'/img/contact-form.jpg'} width='720' height='662' alt='form' />
					<div className={styles.form_content}>
						<h3 className={styles.title}>ОСТАВЬ ЗАЯВКУ</h3>
						<h4 className={styles.subtitle}>и получи расписание на месяц вперед</h4>
						<form className={styles.form} action='#' method='post'>
							<Input styleName={styles.form__input} name='name' placeholder='Укажите ваше имя' />
							<Input styleName={styles.form__input} name='tel' placeholder='Укажите ваш номер телефона' type='tel' />
							<div className={styles.social}>
								<p className={styles.social__text}>Связаться через:</p>
								<SocialLinks styleName={styles.social_list} />
							</div>
							<Button title='попробовать бесплатно' styleName={styles.form__btn} type='submit' />
							<p className={styles.form__info}>
								Оставляя данные, вы даете согласие на обработку&nbsp;персональных данных и соглашаетесь c политикой
								конфиденциальности
							</p>
						</form>
					</div>
				</div>
			</div>
		</section>
	);
};

export default ContacyForm;
