import Layout from '@/components/Layout';
import Banner from '@/components/Banner';
import Advantages from '@/components/Advantages';
import Categories from '@/components/Categories';
import Tariff from '@/components/Tariff';
import Schedule from '@/components/Schedule';
import Education from '@/components/Education';
import ContacyForm from '@/components/ContactForm';
import Articles from '@/components/Articles';
import Slider from '@/components/Slider';
import FAQ from '@/components/FAQ';

export default function Home() {
	return (
		<Layout>
			<Banner />
			<Advantages />
			<Categories />
			<Tariff />
			<Schedule />
			<Education />
			<ContacyForm />
			<Articles />
			<Slider />
			<FAQ />
		</Layout>
	);
}
