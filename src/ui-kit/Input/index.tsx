import { useState } from 'react';

interface IProps {
	styleName: string;
	name: string;
	placeholder: string;
	type?: string;
}

const Input = ({ styleName, type = 'text', name, placeholder }: IProps) => {
	const [inputValue, setInputValue] = useState('');

	return (
		<input
			className={styleName}
			type={type}
			name={name}
			placeholder={placeholder}
			autoComplete='off'
			value={inputValue}
			onChange={(e) => setInputValue(e.currentTarget.value)}
		/>
	);
};

export default Input;
