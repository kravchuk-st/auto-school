import { useState } from 'react';
import Image from 'next/image';
import List from '@/components/List';
import Button from '@/ui-kit/Button';
import stylesHelper from '@/helpers/stylesHelper';
import styles from './tabs.module.scss';

const listItems = (arr: string[]) => arr.map((str, i) => <li key={i}>{str}</li>);

const Tabs = ({ tabsData }: ITabsProps) => {
	const [activeTab, setActiveTab] = useState(0);

	return (
		<>
			<div className={styles.header}>
				<List
					items={tabsData}
					renderItem={(i: ITabs) => (
						<Button
							styleName={stylesHelper(styles.btn, activeTab === i.id ? styles.btn_active : '')}
							title={`Категория ${i.category}`}
							onClick={() => {
								setActiveTab(i.id);
								console.log(i.id);
							}}
							key={i.id}
						/>
					)}
				/>
			</div>
			<div className={styles.body}>
				<div className={stylesHelper(styles.tariff_online, styles.tariff_col)}>
					<Image className={styles.online_img} src={'/img/tariff/iPad.png'} width={200} height={165} alt='iPad' />
					<span className={styles.tariff_descr}>
						<span className={styles.price}>{tabsData[activeTab].onlinePrice}</span> в&nbsp;рассрочку без&nbsp;банков
					</span>
					<h3 className={styles.tariff_title}>Онлайн &#34;Продвинутый&#34;</h3>
					<ul className={styles.tariff__list}>{listItems(tabsData[activeTab].onlineDescr)}</ul>
					<Button styleName={styles.tariff_btn} />
				</div>
				<div className={stylesHelper(styles.tariff_offline, styles.tariff_col)}>
					<Image className={styles.offline_img} src={'/img/tariff/cars/0.png'} width={295} height={164} alt='iPad' />
					<span className={styles.tariff_descr}>
						<span className={styles.price}>{tabsData[activeTab].offlinePrice}</span> в&nbsp;рассрочку без&nbsp;банков
					</span>
					<h3 className={styles.tariff_title}>Очный &#34;Базовый&#34;</h3>
					<ul className={styles.tariff__list}>{listItems(tabsData[activeTab].offlineDescr)}</ul>
					<Button styleName={styles.tariff_btn} />
				</div>
			</div>
		</>
	);
};

export default Tabs;

interface ITabs {
	id: number;
	category: string;
	onlinePrice: string;
	onlineDescr: string[];
	offlinePrice: string;
	offlineImgSrc: string;
	offlineDescr: string[];
}

interface ITabsProps {
	tabsData: ITabs[];
}
