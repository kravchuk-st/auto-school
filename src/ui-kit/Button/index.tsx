import styles from './button.module.scss';

interface IProps {
	title?: string;
	styleName?: string;
	type?: 'button' | 'submit' | 'reset';
	onClick?: any;
}

const Button = ({ title = 'Записаться на обучение', styleName = 'btn', type = 'button', onClick }: IProps) => {
	return (
		<button className={styleName} type={type} onClick={onClick}>
			{title}
		</button>
	);
};

export default Button;
