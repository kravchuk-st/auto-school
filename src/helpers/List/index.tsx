import { ReactNode } from 'react';

export default function List<T>(props: IProps<T>) {
	return <>{props.items.map(props.renderItem)}</>;
}

interface IProps<T> {
	items: T[];
	renderItem: (item: T) => ReactNode;
}
