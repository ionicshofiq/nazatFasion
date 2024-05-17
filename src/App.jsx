// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './styles.css';

// import required modules
import { Autoplay, Navigation } from 'swiper/modules';

import image from './assets/Nairah-03_22.png.webp';
import { useEffect, useState } from 'react';
// import { data } from 'autoprefixer';

function App() {
	const [data, setData] = useState();

	useEffect(() => {
		fetch('https://ecommerce.ionicerp.xyz/api/method/item')
			.then((response) => {
				if (!response.ok) {
					throw new Error(
						'Network response was not ok ' + response.statusText
					);
				}
				return response.json(); // parse the JSON from the response
			})
			.then((responseData) => {
				// Log the data from the API
				setData(responseData); // Update the state with fetched data
			})
			.catch((error) => {
				console.error(
					'There was a problem with the fetch operation:',
					error
				);
			});
	}, []);

	console.log('data', data);

	return (
		<div>
			{data?.data?.map((item, index) => (
				<div key={index}>
					<div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10 max-w-[1200px] mx-auto'>
						<div className=' border-[#D6AC2B] border-2 p-3 h-[650px]'>
							<Swiper
								spaceBetween={30}
								centeredSlides={true}
								autoplay={{
									delay: 2500,
									disableOnInteraction: false,
								}}
								navigation={true}
								modules={[Autoplay, Navigation]}
								className='mySwiper'
							>
								<SwiperSlide>
									<div className='flex justify-center items-center'>
										<img
											className='h-[500px] w-80'
											src={item?.image}
											alt='Product image'
										/>
									</div>
									<h1 className='text-[#D6AC2B] text-center font-medium text-3xl py-5'>
										জিনাত আল আবায়া
									</h1>
									<div className='text-center'>
										<button className='bg-[#D6AC2B] text-white w-36 h-10 rounded-md'>
											অর্ডার করুন
										</button>
									</div>
								</SwiperSlide>
								<SwiperSlide>
									<div className='flex justify-center items-center'>
										<img
											className='h-[500px] w-80'
											src={image}
										/>
									</div>
									<h1 className='text-[#D6AC2B] text-center font-medium text-3xl py-5'>
										জিনাত আল আবায়া
									</h1>
									<div className='text-center'>
										<button className='bg-[#D6AC2B] text-white w-36 h-10 rounded-md'>
											অর্ডার করুন
										</button>
									</div>
								</SwiperSlide>
								<SwiperSlide>
									<div className='flex justify-center items-center'>
										<img
											className='h-[500px] w-80'
											src={image}
										/>
									</div>
									<h1 className='text-[#D6AC2B] text-center font-medium text-3xl py-5'>
										জিনাত আল আবায়া
									</h1>
									<div className='text-center'>
										<button className='bg-[#D6AC2B] text-white w-36 h-10 rounded-md'>
											অর্ডার করুন
										</button>
									</div>
								</SwiperSlide>
								<SwiperSlide>
									<div className='flex justify-center items-center'>
										<img
											className='h-[500px] w-80'
											src={image}
										/>
									</div>
									<h1 className='text-[#D6AC2B] text-center font-medium text-3xl py-5'>
										জিনাত আল আবায়া
									</h1>
									<div className='text-center'>
										<button className='bg-[#D6AC2B] text-white w-36 h-10 rounded-md'>
											অর্ডার করুন
										</button>
									</div>
								</SwiperSlide>
								<SwiperSlide>
									<div className='flex justify-center items-center'>
										<img
											className='h-[500px] w-80'
											src={image}
										/>
									</div>
									<h1 className='text-[#D6AC2B] text-center font-medium text-3xl py-5'>
										জিনাত আল আবায়া
									</h1>
									<div className='text-center'>
										<button className='bg-[#D6AC2B] text-white w-36 h-10 rounded-md'>
											অর্ডার করুন
										</button>
									</div>
								</SwiperSlide>
								<SwiperSlide>
									<div className='flex justify-center items-center'>
										<img
											className='h-[500px] w-80'
											src={image}
										/>
									</div>
									<h1 className='text-[#D6AC2B] text-center font-medium text-3xl py-5'>
										জিনাত আল আবায়া
									</h1>
									<div className='text-center'>
										<button className='bg-[#D6AC2B] text-white w-36 h-10 rounded-md'>
											অর্ডার করুন
										</button>
									</div>
								</SwiperSlide>
							</Swiper>
						</div>
						<div className=' border-[#D6AC2B] border-2 p-3 h-[650px]'>
							<Swiper
								spaceBetween={30}
								centeredSlides={true}
								autoplay={{
									delay: 2500,
									disableOnInteraction: false,
								}}
								navigation={true}
								modules={[Autoplay, Navigation]}
								className='mySwiper'
							>
								<SwiperSlide>
									<div className='flex justify-center items-center'>
										<img
											className='h-[500px] w-80'
											src={image}
										/>
									</div>
									<h1 className='text-[#D6AC2B] text-center font-medium text-3xl py-5'>
										জিনাত আল আবায়া
									</h1>
									<div className='text-center'>
										<button className='bg-[#D6AC2B] text-white w-36 h-10 rounded-md'>
											অর্ডার করুন
										</button>
									</div>
								</SwiperSlide>
								<SwiperSlide>
									<div className='flex justify-center items-center'>
										<img
											className='h-[500px] w-80'
											src={image}
										/>
									</div>
									<h1 className='text-[#D6AC2B] text-center font-medium text-3xl py-5'>
										জিনাত আল আবায়া
									</h1>
									<div className='text-center'>
										<button className='bg-[#D6AC2B] text-white w-36 h-10 rounded-md'>
											অর্ডার করুন
										</button>
									</div>
								</SwiperSlide>
								<SwiperSlide>
									<div className='flex justify-center items-center'>
										<img
											className='h-[500px] w-80'
											src={image}
										/>
									</div>
									<h1 className='text-[#D6AC2B] text-center font-medium text-3xl py-5'>
										জিনাত আল আবায়া
									</h1>
									<div className='text-center'>
										<button className='bg-[#D6AC2B] text-white w-36 h-10 rounded-md'>
											অর্ডার করুন
										</button>
									</div>
								</SwiperSlide>
								<SwiperSlide>
									<div className='flex justify-center items-center'>
										<img
											className='h-[500px] w-80'
											src={image}
										/>
									</div>
									<h1 className='text-[#D6AC2B] text-center font-medium text-3xl py-5'>
										জিনাত আল আবায়া
									</h1>
									<div className='text-center'>
										<button className='bg-[#D6AC2B] text-white w-36 h-10 rounded-md'>
											অর্ডার করুন
										</button>
									</div>
								</SwiperSlide>
								<SwiperSlide>
									<div className='flex justify-center items-center'>
										<img
											className='h-[500px] w-80'
											src={image}
										/>
									</div>
									<h1 className='text-[#D6AC2B] text-center font-medium text-3xl py-5'>
										জিনাত আল আবায়া
									</h1>
									<div className='text-center'>
										<button className='bg-[#D6AC2B] text-white w-36 h-10 rounded-md'>
											অর্ডার করুন
										</button>
									</div>
								</SwiperSlide>
								<SwiperSlide>
									<div className='flex justify-center items-center'>
										<img
											className='h-[500px] w-80'
											src={image}
										/>
									</div>
									<h1 className='text-[#D6AC2B] text-center font-medium text-3xl py-5'>
										জিনাত আল আবায়া
									</h1>
									<div className='text-center'>
										<button className='bg-[#D6AC2B] text-white w-36 h-10 rounded-md'>
											অর্ডার করুন
										</button>
									</div>
								</SwiperSlide>
							</Swiper>
						</div>
						<div className=' border-[#D6AC2B] border-2 p-3 h-[650px]'>
							<Swiper
								spaceBetween={30}
								centeredSlides={true}
								autoplay={{
									delay: 2500,
									disableOnInteraction: false,
								}}
								navigation={true}
								modules={[Autoplay, Navigation]}
								className='mySwiper'
							>
								<SwiperSlide>
									<div className='flex justify-center items-center'>
										<img
											className='h-[500px] w-80'
											src={image}
										/>
									</div>
									<h1 className='text-[#D6AC2B] text-center font-medium text-3xl py-5'>
										জিনাত আল আবায়া
									</h1>
									<div className='text-center'>
										<button className='bg-[#D6AC2B] text-white w-36 h-10 rounded-md'>
											অর্ডার করুন
										</button>
									</div>
								</SwiperSlide>
								<SwiperSlide>
									<div className='flex justify-center items-center'>
										<img
											className='h-[500px] w-80'
											src={image}
										/>
									</div>
									<h1 className='text-[#D6AC2B] text-center font-medium text-3xl py-5'>
										জিনাত আল আবায়া
									</h1>
									<div className='text-center'>
										<button className='bg-[#D6AC2B] text-white w-36 h-10 rounded-md'>
											অর্ডার করুন
										</button>
									</div>
								</SwiperSlide>
								<SwiperSlide>
									<div className='flex justify-center items-center'>
										<img
											className='h-[500px] w-80'
											src={image}
										/>
									</div>
									<h1 className='text-[#D6AC2B] text-center font-medium text-3xl py-5'>
										জিনাত আল আবায়া
									</h1>
									<div className='text-center'>
										<button className='bg-[#D6AC2B] text-white w-36 h-10 rounded-md'>
											অর্ডার করুন
										</button>
									</div>
								</SwiperSlide>
								<SwiperSlide>
									<div className='flex justify-center items-center'>
										<img
											className='h-[500px] w-80'
											src={image}
										/>
									</div>
									<h1 className='text-[#D6AC2B] text-center font-medium text-3xl py-5'>
										জিনাত আল আবায়া
									</h1>
									<div className='text-center'>
										<button className='bg-[#D6AC2B] text-white w-36 h-10 rounded-md'>
											অর্ডার করুন
										</button>
									</div>
								</SwiperSlide>
								<SwiperSlide>
									<div className='flex justify-center items-center'>
										<img
											className='h-[500px] w-80'
											src={image}
										/>
									</div>
									<h1 className='text-[#D6AC2B] text-center font-medium text-3xl py-5'>
										জিনাত আল আবায়া
									</h1>
									<div className='text-center'>
										<button className='bg-[#D6AC2B] text-white w-36 h-10 rounded-md'>
											অর্ডার করুন
										</button>
									</div>
								</SwiperSlide>
								<SwiperSlide>
									<div className='flex justify-center items-center'>
										<img
											className='h-[500px] w-80'
											src={image}
										/>
									</div>
									<h1 className='text-[#D6AC2B] text-center font-medium text-3xl py-5'>
										জিনাত আল আবায়া
									</h1>
									<div className='text-center'>
										<button className='bg-[#D6AC2B] text-white w-36 h-10 rounded-md'>
											অর্ডার করুন
										</button>
									</div>
								</SwiperSlide>
							</Swiper>
						</div>
						<div className=' border-[#D6AC2B] border-2 p-3 h-[650px]'>
							<Swiper
								spaceBetween={30}
								centeredSlides={true}
								autoplay={{
									delay: 2500,
									disableOnInteraction: false,
								}}
								navigation={true}
								modules={[Autoplay, Navigation]}
								className='mySwiper'
							>
								<SwiperSlide>
									<div className='flex justify-center items-center'>
										<img
											className='h-[500px] w-80'
											src={image}
										/>
									</div>
									<h1 className='text-[#D6AC2B] text-center font-medium text-3xl py-5'>
										জিনাত আল আবায়া
									</h1>
									<div className='text-center'>
										<button className='bg-[#D6AC2B] text-white w-36 h-10 rounded-md'>
											অর্ডার করুন
										</button>
									</div>
								</SwiperSlide>
								<SwiperSlide>
									<div className='flex justify-center items-center'>
										<img
											className='h-[500px] w-80'
											src={image}
										/>
									</div>
									<h1 className='text-[#D6AC2B] text-center font-medium text-3xl py-5'>
										জিনাত আল আবায়া
									</h1>
									<div className='text-center'>
										<button className='bg-[#D6AC2B] text-white w-36 h-10 rounded-md'>
											অর্ডার করুন
										</button>
									</div>
								</SwiperSlide>
								<SwiperSlide>
									<div className='flex justify-center items-center'>
										<img
											className='h-[500px] w-80'
											src={image}
										/>
									</div>
									<h1 className='text-[#D6AC2B] text-center font-medium text-3xl py-5'>
										জিনাত আল আবায়া
									</h1>
									<div className='text-center'>
										<button className='bg-[#D6AC2B] text-white w-36 h-10 rounded-md'>
											অর্ডার করুন
										</button>
									</div>
								</SwiperSlide>
								<SwiperSlide>
									<div className='flex justify-center items-center'>
										<img
											className='h-[500px] w-80'
											src={image}
										/>
									</div>
									<h1 className='text-[#D6AC2B] text-center font-medium text-3xl py-5'>
										জিনাত আল আবায়া
									</h1>
									<div className='text-center'>
										<button className='bg-[#D6AC2B] text-white w-36 h-10 rounded-md'>
											অর্ডার করুন
										</button>
									</div>
								</SwiperSlide>
								<SwiperSlide>
									<div className='flex justify-center items-center'>
										<img
											className='h-[500px] w-80'
											src={image}
										/>
									</div>
									<h1 className='text-[#D6AC2B] text-center font-medium text-3xl py-5'>
										জিনাত আল আবায়া
									</h1>
									<div className='text-center'>
										<button className='bg-[#D6AC2B] text-white w-36 h-10 rounded-md'>
											অর্ডার করুন
										</button>
									</div>
								</SwiperSlide>
								<SwiperSlide>
									<div className='flex justify-center items-center'>
										<img
											className='h-[500px] w-80'
											src={image}
										/>
									</div>
									<h1 className='text-[#D6AC2B] text-center font-medium text-3xl py-5'>
										জিনাত আল আবায়া
									</h1>
									<div className='text-center'>
										<button className='bg-[#D6AC2B] text-white w-36 h-10 rounded-md'>
											অর্ডার করুন
										</button>
									</div>
								</SwiperSlide>
							</Swiper>
						</div>
						<div className=' border-[#D6AC2B] border-2 p-3 h-[650px]'>
							<Swiper
								spaceBetween={30}
								centeredSlides={true}
								autoplay={{
									delay: 2500,
									disableOnInteraction: false,
								}}
								navigation={true}
								modules={[Autoplay, Navigation]}
								className='mySwiper'
							>
								<SwiperSlide>
									<div className='flex justify-center items-center'>
										<img
											className='h-[500px] w-80'
											src={image}
										/>
									</div>
									<h1 className='text-[#D6AC2B] text-center font-medium text-3xl py-5'>
										জিনাত আল আবায়া
									</h1>
									<div className='text-center'>
										<button className='bg-[#D6AC2B] text-white w-36 h-10 rounded-md'>
											অর্ডার করুন
										</button>
									</div>
								</SwiperSlide>
								<SwiperSlide>
									<div className='flex justify-center items-center'>
										<img
											className='h-[500px] w-80'
											src={image}
										/>
									</div>
									<h1 className='text-[#D6AC2B] text-center font-medium text-3xl py-5'>
										জিনাত আল আবায়া
									</h1>
									<div className='text-center'>
										<button className='bg-[#D6AC2B] text-white w-36 h-10 rounded-md'>
											অর্ডার করুন
										</button>
									</div>
								</SwiperSlide>
								<SwiperSlide>
									<div className='flex justify-center items-center'>
										<img
											className='h-[500px] w-80'
											src={image}
										/>
									</div>
									<h1 className='text-[#D6AC2B] text-center font-medium text-3xl py-5'>
										জিনাত আল আবায়া
									</h1>
									<div className='text-center'>
										<button className='bg-[#D6AC2B] text-white w-36 h-10 rounded-md'>
											অর্ডার করুন
										</button>
									</div>
								</SwiperSlide>
								<SwiperSlide>
									<div className='flex justify-center items-center'>
										<img
											className='h-[500px] w-80'
											src={image}
										/>
									</div>
									<h1 className='text-[#D6AC2B] text-center font-medium text-3xl py-5'>
										জিনাত আল আবায়া
									</h1>
									<div className='text-center'>
										<button className='bg-[#D6AC2B] text-white w-36 h-10 rounded-md'>
											অর্ডার করুন
										</button>
									</div>
								</SwiperSlide>
								<SwiperSlide>
									<div className='flex justify-center items-center'>
										<img
											className='h-[500px] w-80'
											src={image}
										/>
									</div>
									<h1 className='text-[#D6AC2B] text-center font-medium text-3xl py-5'>
										জিনাত আল আবায়া
									</h1>
									<div className='text-center'>
										<button className='bg-[#D6AC2B] text-white w-36 h-10 rounded-md'>
											অর্ডার করুন
										</button>
									</div>
								</SwiperSlide>
								<SwiperSlide>
									<div className='flex justify-center items-center'>
										<img
											className='h-[500px] w-80'
											src={image}
										/>
									</div>
									<h1 className='text-[#D6AC2B] text-center font-medium text-3xl py-5'>
										জিনাত আল আবায়া
									</h1>
									<div className='text-center'>
										<button className='bg-[#D6AC2B] text-white w-36 h-10 rounded-md'>
											অর্ডার করুন
										</button>
									</div>
								</SwiperSlide>
							</Swiper>
						</div>
						<div className=' border-[#D6AC2B] border-2 p-3 h-[650px]'>
							<Swiper
								spaceBetween={30}
								centeredSlides={true}
								autoplay={{
									delay: 2500,
									disableOnInteraction: false,
								}}
								navigation={true}
								modules={[Autoplay, Navigation]}
								className='mySwiper'
							>
								<SwiperSlide>
									<div className='flex justify-center items-center'>
										<img
											className='h-[500px] w-80'
											src={image}
										/>
									</div>
									<h1 className='text-[#D6AC2B] text-center font-medium text-3xl py-5'>
										জিনাত আল আবায়া
									</h1>
									<div className='text-center'>
										<button className='bg-[#D6AC2B] text-white w-36 h-10 rounded-md'>
											অর্ডার করুন
										</button>
									</div>
								</SwiperSlide>
								<SwiperSlide>
									<div className='flex justify-center items-center'>
										<img
											className='h-[500px] w-80'
											src={image}
										/>
									</div>
									<h1 className='text-[#D6AC2B] text-center font-medium text-3xl py-5'>
										জিনাত আল আবায়া
									</h1>
									<div className='text-center'>
										<button className='bg-[#D6AC2B] text-white w-36 h-10 rounded-md'>
											অর্ডার করুন
										</button>
									</div>
								</SwiperSlide>
								<SwiperSlide>
									<div className='flex justify-center items-center'>
										<img
											className='h-[500px] w-80'
											src={image}
										/>
									</div>
									<h1 className='text-[#D6AC2B] text-center font-medium text-3xl py-5'>
										জিনাত আল আবায়া
									</h1>
									<div className='text-center'>
										<button className='bg-[#D6AC2B] text-white w-36 h-10 rounded-md'>
											অর্ডার করুন
										</button>
									</div>
								</SwiperSlide>
								<SwiperSlide>
									<div className='flex justify-center items-center'>
										<img
											className='h-[500px] w-80'
											src={image}
										/>
									</div>
									<h1 className='text-[#D6AC2B] text-center font-medium text-3xl py-5'>
										জিনাত আল আবায়া
									</h1>
									<div className='text-center'>
										<button className='bg-[#D6AC2B] text-white w-36 h-10 rounded-md'>
											অর্ডার করুন
										</button>
									</div>
								</SwiperSlide>
								<SwiperSlide>
									<div className='flex justify-center items-center'>
										<img
											className='h-[500px] w-80'
											src={image}
										/>
									</div>
									<h1 className='text-[#D6AC2B] text-center font-medium text-3xl py-5'>
										জিনাত আল আবায়া
									</h1>
									<div className='text-center'>
										<button className='bg-[#D6AC2B] text-white w-36 h-10 rounded-md'>
											অর্ডার করুন
										</button>
									</div>
								</SwiperSlide>
								<SwiperSlide>
									<div className='flex justify-center items-center'>
										<img
											className='h-[500px] w-80'
											src={image}
										/>
									</div>
									<h1 className='text-[#D6AC2B] text-center font-medium text-3xl py-5'>
										জিনাত আল আবায়া
									</h1>
									<div className='text-center'>
										<button className='bg-[#D6AC2B] text-white w-36 h-10 rounded-md'>
											অর্ডার করুন
										</button>
									</div>
								</SwiperSlide>
							</Swiper>
						</div>
						<div className=' border-[#D6AC2B] border-2 p-3 h-[650px]'>
							<Swiper
								spaceBetween={30}
								centeredSlides={true}
								autoplay={{
									delay: 2500,
									disableOnInteraction: false,
								}}
								navigation={true}
								modules={[Autoplay, Navigation]}
								className='mySwiper'
							>
								<SwiperSlide>
									<div className='flex justify-center items-center'>
										<img
											className='h-[500px] w-80'
											src={image}
										/>
									</div>
									<h1 className='text-[#D6AC2B] text-center font-medium text-3xl py-5'>
										জিনাত আল আবায়া
									</h1>
									<div className='text-center'>
										<button className='bg-[#D6AC2B] text-white w-36 h-10 rounded-md'>
											অর্ডার করুন
										</button>
									</div>
								</SwiperSlide>
								<SwiperSlide>
									<div className='flex justify-center items-center'>
										<img
											className='h-[500px] w-80'
											src={image}
										/>
									</div>
									<h1 className='text-[#D6AC2B] text-center font-medium text-3xl py-5'>
										জিনাত আল আবায়া
									</h1>
									<div className='text-center'>
										<button className='bg-[#D6AC2B] text-white w-36 h-10 rounded-md'>
											অর্ডার করুন
										</button>
									</div>
								</SwiperSlide>
								<SwiperSlide>
									<div className='flex justify-center items-center'>
										<img
											className='h-[500px] w-80'
											src={image}
										/>
									</div>
									<h1 className='text-[#D6AC2B] text-center font-medium text-3xl py-5'>
										জিনাত আল আবায়া
									</h1>
									<div className='text-center'>
										<button className='bg-[#D6AC2B] text-white w-36 h-10 rounded-md'>
											অর্ডার করুন
										</button>
									</div>
								</SwiperSlide>
								<SwiperSlide>
									<div className='flex justify-center items-center'>
										<img
											className='h-[500px] w-80'
											src={image}
										/>
									</div>
									<h1 className='text-[#D6AC2B] text-center font-medium text-3xl py-5'>
										জিনাত আল আবায়া
									</h1>
									<div className='text-center'>
										<button className='bg-[#D6AC2B] text-white w-36 h-10 rounded-md'>
											অর্ডার করুন
										</button>
									</div>
								</SwiperSlide>
								<SwiperSlide>
									<div className='flex justify-center items-center'>
										<img
											className='h-[500px] w-80'
											src={image}
										/>
									</div>
									<h1 className='text-[#D6AC2B] text-center font-medium text-3xl py-5'>
										জিনাত আল আবায়া
									</h1>
									<div className='text-center'>
										<button className='bg-[#D6AC2B] text-white w-36 h-10 rounded-md'>
											অর্ডার করুন
										</button>
									</div>
								</SwiperSlide>
								<SwiperSlide>
									<div className='flex justify-center items-center'>
										<img
											className='h-[500px] w-80'
											src={image}
										/>
									</div>
									<h1 className='text-[#D6AC2B] text-center font-medium text-3xl py-5'>
										জিনাত আল আবায়া
									</h1>
									<div className='text-center'>
										<button className='bg-[#D6AC2B] text-white w-36 h-10 rounded-md'>
											অর্ডার করুন
										</button>
									</div>
								</SwiperSlide>
							</Swiper>
						</div>
						<div className=' border-[#D6AC2B] border-2 p-3 h-[650px]'>
							<Swiper
								spaceBetween={30}
								centeredSlides={true}
								autoplay={{
									delay: 2500,
									disableOnInteraction: false,
								}}
								navigation={true}
								modules={[Autoplay, Navigation]}
								className='mySwiper'
							>
								<SwiperSlide>
									<div className='flex justify-center items-center'>
										<img
											className='h-[500px] w-80'
											src={image}
										/>
									</div>
									<h1 className='text-[#D6AC2B] text-center font-medium text-3xl py-5'>
										জিনাত আল আবায়া
									</h1>
									<div className='text-center'>
										<button className='bg-[#D6AC2B] text-white w-36 h-10 rounded-md'>
											অর্ডার করুন
										</button>
									</div>
								</SwiperSlide>
								<SwiperSlide>
									<div className='flex justify-center items-center'>
										<img
											className='h-[500px] w-80'
											src={image}
										/>
									</div>
									<h1 className='text-[#D6AC2B] text-center font-medium text-3xl py-5'>
										জিনাত আল আবায়া
									</h1>
									<div className='text-center'>
										<button className='bg-[#D6AC2B] text-white w-36 h-10 rounded-md'>
											অর্ডার করুন
										</button>
									</div>
								</SwiperSlide>
								<SwiperSlide>
									<div className='flex justify-center items-center'>
										<img
											className='h-[500px] w-80'
											src={image}
										/>
									</div>
									<h1 className='text-[#D6AC2B] text-center font-medium text-3xl py-5'>
										জিনাত আল আবায়া
									</h1>
									<div className='text-center'>
										<button className='bg-[#D6AC2B] text-white w-36 h-10 rounded-md'>
											অর্ডার করুন
										</button>
									</div>
								</SwiperSlide>
								<SwiperSlide>
									<div className='flex justify-center items-center'>
										<img
											className='h-[500px] w-80'
											src={image}
										/>
									</div>
									<h1 className='text-[#D6AC2B] text-center font-medium text-3xl py-5'>
										জিনাত আল আবায়া
									</h1>
									<div className='text-center'>
										<button className='bg-[#D6AC2B] text-white w-36 h-10 rounded-md'>
											অর্ডার করুন
										</button>
									</div>
								</SwiperSlide>
								<SwiperSlide>
									<div className='flex justify-center items-center'>
										<img
											className='h-[500px] w-80'
											src={image}
										/>
									</div>
									<h1 className='text-[#D6AC2B] text-center font-medium text-3xl py-5'>
										জিনাত আল আবায়া
									</h1>
									<div className='text-center'>
										<button className='bg-[#D6AC2B] text-white w-36 h-10 rounded-md'>
											অর্ডার করুন
										</button>
									</div>
								</SwiperSlide>
								<SwiperSlide>
									<div className='flex justify-center items-center'>
										<img
											className='h-[500px] w-80'
											src={image}
										/>
									</div>
									<h1 className='text-[#D6AC2B] text-center font-medium text-3xl py-5'>
										জিনাত আল আবায়া
									</h1>
									<div className='text-center'>
										<button className='bg-[#D6AC2B] text-white w-36 h-10 rounded-md'>
											অর্ডার করুন
										</button>
									</div>
								</SwiperSlide>
							</Swiper>
						</div>
						<div className=' border-[#D6AC2B] border-2 p-3 h-[650px]'>
							<Swiper
								spaceBetween={30}
								centeredSlides={true}
								autoplay={{
									delay: 2500,
									disableOnInteraction: false,
								}}
								navigation={true}
								modules={[Autoplay, Navigation]}
								className='mySwiper'
							>
								<SwiperSlide>
									<div className='flex justify-center items-center'>
										<img
											className='h-[500px] w-80'
											src={image}
										/>
									</div>
									<h1 className='text-[#D6AC2B] text-center font-medium text-3xl py-5'>
										জিনাত আল আবায়া
									</h1>
									<div className='text-center'>
										<button className='bg-[#D6AC2B] text-white w-36 h-10 rounded-md'>
											অর্ডার করুন
										</button>
									</div>
								</SwiperSlide>
								<SwiperSlide>
									<div className='flex justify-center items-center'>
										<img
											className='h-[500px] w-80'
											src={image}
										/>
									</div>
									<h1 className='text-[#D6AC2B] text-center font-medium text-3xl py-5'>
										জিনাত আল আবায়া
									</h1>
									<div className='text-center'>
										<button className='bg-[#D6AC2B] text-white w-36 h-10 rounded-md'>
											অর্ডার করুন
										</button>
									</div>
								</SwiperSlide>
								<SwiperSlide>
									<div className='flex justify-center items-center'>
										<img
											className='h-[500px] w-80'
											src={image}
										/>
									</div>
									<h1 className='text-[#D6AC2B] text-center font-medium text-3xl py-5'>
										জিনাত আল আবায়া
									</h1>
									<div className='text-center'>
										<button className='bg-[#D6AC2B] text-white w-36 h-10 rounded-md'>
											অর্ডার করুন
										</button>
									</div>
								</SwiperSlide>
								<SwiperSlide>
									<div className='flex justify-center items-center'>
										<img
											className='h-[500px] w-80'
											src={image}
										/>
									</div>
									<h1 className='text-[#D6AC2B] text-center font-medium text-3xl py-5'>
										জিনাত আল আবায়া
									</h1>
									<div className='text-center'>
										<button className='bg-[#D6AC2B] text-white w-36 h-10 rounded-md'>
											অর্ডার করুন
										</button>
									</div>
								</SwiperSlide>
								<SwiperSlide>
									<div className='flex justify-center items-center'>
										<img
											className='h-[500px] w-80'
											src={image}
										/>
									</div>
									<h1 className='text-[#D6AC2B] text-center font-medium text-3xl py-5'>
										জিনাত আল আবায়া
									</h1>
									<div className='text-center'>
										<button className='bg-[#D6AC2B] text-white w-36 h-10 rounded-md'>
											অর্ডার করুন
										</button>
									</div>
								</SwiperSlide>
								<SwiperSlide>
									<div className='flex justify-center items-center'>
										<img
											className='h-[500px] w-80'
											src={image}
										/>
									</div>
									<h1 className='text-[#D6AC2B] text-center font-medium text-3xl py-5'>
										জিনাত আল আবায়া
									</h1>
									<div className='text-center'>
										<button className='bg-[#D6AC2B] text-white w-36 h-10 rounded-md'>
											অর্ডার করুন
										</button>
									</div>
								</SwiperSlide>
							</Swiper>
						</div>
					</div>
				</div>
			))}
		</div>
	);
}

export default App;
