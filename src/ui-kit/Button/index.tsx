import styles from './button.module.scss';

interface IProps {
	title?: string;
	styleName?: string;
	type?: 'button' | 'submit' | 'reset';
	fn?: () => void;
}

const Button = ({ title = 'Записаться на обучение', styleName = 'btn', type = 'button', fn }: IProps) => {
	return (
		<button className={styleName} type={type} onClick={fn}>
			{title}
		</button>
	);
};

export default Button;
