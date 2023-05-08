const Button = ({ title = 'Записаться на обучение', styleName = '', type = 'button', onClick }: IProps) => {
	return (
		<button className={`btn ${styleName}`} type={type} onClick={onClick}>
			{title}
		</button>
	);
};

export default Button;

interface IProps {
	title?: string;
	styleName?: string;
	type?: 'button' | 'submit' | 'reset';
	onClick?: () => undefined;
}
