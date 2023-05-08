import Link from 'next/link';
import styles from './article-card.module.scss';

const ArticleCard = ({ item }: IProps) => {
	return (
		<div
			className={styles.item}
			style={{
				backgroundImage: `url("/img/advantage/90.png")`
			}}
		>
			<p className={styles.address}>{item.title}</p>
			<Link className={`btn ${styles.btn}`} href='#'>
				Подробнее
			</Link>
		</div>
	);
};

export default ArticleCard;

interface IArticle {
	id: number;
	title: string;
}

interface IProps {
	item: IArticle;
}
