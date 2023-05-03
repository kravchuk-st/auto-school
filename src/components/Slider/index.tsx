import { useRef } from 'react';
import stylesHelper from '@/helpers/stylesHelper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Swiper as SwiperType, Autoplay, Navigation } from 'swiper';
import 'swiper/css';
import styles from './slider.module.scss';

const Slider = () => {
	const swiperRef = useRef<SwiperType>();

	return (
		<section>
			<h2>Обучайтесь на права выгодно!</h2>
			<div className={styles.content}>
				<Swiper
					loop={true}
					spaceBetween={80}
					slidesPerView={3}
					autoplay={{
						delay: 3500,
						disableOnInteraction: false
					}}
					modules={[Autoplay, Navigation]}
					onBeforeInit={(swiper) => {
						swiperRef.current = swiper;
					}}
					className={styles.mySwiper}
				>
					<SwiperSlide className={styles.slide}>Slide 1</SwiperSlide>
					<SwiperSlide className={styles.slide}>Slide 2</SwiperSlide>
					<SwiperSlide className={styles.slide}>Slide 3</SwiperSlide>
					<SwiperSlide className={styles.slide}>Slide 4</SwiperSlide>
					<SwiperSlide className={styles.slide}>Slide 5</SwiperSlide>
					<SwiperSlide className={styles.slide}>Slide 6</SwiperSlide>
					<SwiperSlide className={styles.slide}>Slide 7</SwiperSlide>
					<SwiperSlide className={styles.slide}>Slide 8</SwiperSlide>
					<SwiperSlide className={styles.slide}>Slide 9</SwiperSlide>
				</Swiper>
				<div className={styles.control}>
					<button className={stylesHelper(styles.btn, styles.prevBtn)} onClick={() => swiperRef.current?.slidePrev()} />
					<button className={stylesHelper(styles.btn, styles.nextBtn)} onClick={() => swiperRef.current?.slideNext()} />
				</div>
			</div>
		</section>
	);
};

export default Slider;
