import styles from './category.module.scss';

const Category = ({ id, title, category }: IProps) => {
	return (
		<article className={styles.item}>
			<div className={styles.header}>
				<span className={styles.text_warning}>Категория</span>
				<span className={styles.text_danger}>с 18 лет</span>
			</div>
			<div
				className={styles.body}
				style={{
					backgroundImage: `url("./img/category/${id}.png")`
				}}
			>
				<div className={styles.body__content}>
					<h3 className={styles.body__title}>{title}</h3>
					<h4 className={styles.body__category}>{category}</h4>
				</div>
			</div>
		</article>
	);
};

export default Category;

interface IProps {
	id: number;
	title: string;
	category: string;
}
