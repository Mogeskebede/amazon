import React, { useEffect, useState } from 'react'
import Product from '../Product/Product'
import './Home.css'
 import Footer from '../Footer/Footer'
function Home() {
	const [imageData, setimageData] = useState([]);
	const [currentIndex, setCurrentIndex] = useState(0);
	useEffect(() => {
		fetch("/images.json")
			.then((res) => res.json())
			.then((items) => {
				setimageData(items.data)
			})
			.catch(() => console.log("Error: unable to fetch data"))
	}, []);

	return (
		

<div className='home'>
			
				{imageData?.map((results, index) => {
					// let photos = results.image
					// console.log(photos);
				
		return (	<div className="home_image">
			<img className='home_image' src={results.image
		} alt="" />
			  <h2>{results.id}</h2>
				</div>
			)})}
			  <div className="home_row">
						<Product
							id="3"
							title="Learn JavaScript Quickly: A Complete Beginner’s Guide to Learning JavaScript, Even If You’re New to Programming (Crash Course With Hands-On Project)"
							price={16.89}
							rating={4}
							 image="https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/41BhGsAx7lL._SX384_BO1,204,203,200_.jpg" 
						/>
						<Product
							id="4"
							 title="The Road to React: Your journey to master React.js in JavaScript (2022 Edition) Kindle Edition"
                            price={34.99}
                            rating={4}
						image="https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/41m+5+-JRNL.jpg"
						/>
						
					<Product
							id="3"
							title="Arozzi Verona V2 Ergonomic Computer Gaming Chair Office Chair with High Backrest Recliner Swivel Tilt Rocker Adjustable Height and Adjustable Lumbar and Neck Support - Red"
							price={199.99}
							rating={4}
							 image="https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/61Ia8htAuNL._AC_SL1500_.jpg" class="fullscreen" style="position: relative; left: 296.5px; top: 0px" 
						/>
					</div>
				<div className="home_row">
					<Product
							id="5"
							title="Beginning Node.js, Express & MongoDB Development"
							price={17.99}
							rating={4}
							 image="https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/418H3vYA2tL._SX404_BO1,204,203,200_.jpg"
						/>
                    
						<Product
							id="12321341"
							title="Real-World Next.js: Build scalable, high-performance, and modern web applications using Next.js, the React framework for production"
							price={39.99}
							rating={5}
							image="https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/515qPbQE+HL._SX404_BO1,204,203,200_.jpg"
						/>
						<Product
							id="12321341"
							title="
Apple iMac 27-Inch Desktop, 3.4 GHz Intel Core i7 Processor, 16 GB memory, 1TB HDD (Renewed)"
							price={1248.99}
							rating={5}
							image="https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/41o4CCowRML._AC_.jpg" 

					/>
				</div>
				<div className="home_row">
						<Product
							id="33"
							title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
							price={1094.98}
							rating={4}
							 image="https://images-na.ssl-images-amazon.com/images/I/81r8JazRcoL._AC_SL1500_.jpg
0_.jpg" 
					/>
					</div>
                <div className="home_row">
                    <Product
							id="2"
							 title="Front-End Back-End Development with HTML, CSS, JavaScript, jQuery, PHP, and MySQL 1st Edition"
							price={70.99}
							rating={5}
							image="https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/415WjrD6bZL._SX435_BO1,204,203,200_.jpg"
						/>
						<Product
							id="3"
							title="Beats Solo Pro Wireless Noise Cancelling On-Ear Headphones - Apple H1 Headphone Chip, Class 1 Bluetooth, 22 Hours of Listening Time, Built-in Microphone - Dark Blue"
							price={169.99}
							rating={5}
							image="https://images-na.ssl-images-amazon.com/images/I/61KSB0XUzjL._AC_SX342_.jpg"
						/>
						
                </div>
                <div className="home_row">
                    <Product
							id="4"
							title="Ibanez 4 String Bass Guitar, Right, Brown Sunburst (GSRM20BS)"
							price={179.99}
							rating={5}
							image="https://images-na.ssl-images-amazon.com/images/I/716KDhgBb2L._AC_SL1500_.jpg"
						/>
						<Product
							id="5"
							title="4K Video Camera Camcorder with Microphone, VAFOTON 48MP Vlogging Camera for YouTube 16X Zoom 3.0 Touch Screen IR Night Vision Wi-Fi Vlog Cameras Webcam with Handheld Stabilizer Remote Control"
							price={139.99}
							rating={4}
							image="https://images-na.ssl-images-amazon.com/images/I/81T6hx8XDTL._AC_SL1500_.jpg"
						/>
                </div>
					<div className="home_row">
						<Product
							id="6"
							title="YAMAHA P125 88-Key Weighted Action Digital Piano With Power Supply And Sustain Pedal, Black"
							price={649.99}
							rating={3}
							image="https://images-na.ssl-images-amazon.com/images/I/71aFZyG4THL._AC_SL1500_.jpg"
                    />
                    <Product
                    id="6"
							title="Funny Software Developer Gifts for Geek Boyfriend, Men, Him, Friend, Coworker, Computer Geek, Programmers, Coding, Software Engineers - I'm That Cute Guy Who Is Also A Software Developer - Coffee Mug"
							price={11}
							rating={1}
							image="https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/51MnGO7FPhL._AC_SX466_.jpg"
                    
                    />
					</div>
			</div>
	
		
    )
}


 export default Home
