import Input from '@/ui-kit/Input';
import Button from '@/ui-kit/Button';
import styles from './form-modal.module.scss';

const FormModal = () => {
	return (
		<div className={styles.content}>
			<h3 className={styles.title}>ОСТАВЬ ЗАЯВКУ</h3>
			<p className={styles.subtitle}>и узнай о нашей деятельности больше</p>
			<form className={styles.form} action='#' method='post' onSubmit={(e) => e.preventDefault}>
				<Input styleName={styles.form__input} name='name' placeholder='Укажите ваше имя' />
				<Input styleName={styles.form__input} type='phone' name='phone' placeholder='Укажите ваш номер телефона' />
				<Button title='УЗНАТЬ БОЛЬШЕ О НАС' styleName={styles.form_btn} type='submit' />
			</form>
			<p className={styles.info}>
				Оставляя данные, вы даете согласие на обработку персональных данных и соглашаетесь c политикой
				конфиденциальности
			</p>
		</div>
	);
};

export default FormModal;
