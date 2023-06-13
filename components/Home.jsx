"use client";

import React, { useEffect, useState } from "react";
import "@styles/home.css";
import {
	BookedData,
	MovieSelection,
	TimeSlotSelection,
	BookBtn,
	SeatSelection,
	Alert,
} from "@components";
import Image from "next/image";

const Home = () => {
	
	
	
	const initialState = {
		movie: "",
		slot: "",
		seats: {
			A1: 0,
			A2: 0,
			A3: 0,
			A4: 0,
			D1: 0,
			D2: 0,
		},
	};
	
	const [localStorageBooking, setLocalStorageBooking] = useState(null)
	const [myShow, setMyShow] = useState(initialState);
	const [isBooking, setIsBooking] = useState(false);
	const [bookedData, setBookedData] = useState(null);
	const [alert, setAlert] = useState({
		isAlert: false,
		type: "success",
		message: "",
	});

	useEffect(() => {
		let booking = JSON.parse(localStorage.getItem("booking"));
	  	setLocalStorageBooking(booking)
	}, [])
	

	useEffect(() => {
		if (localStorageBooking) {
			setBookedData(localStorageBooking)
		}
	}, [localStorageBooking]);

	return (
		<section className="home">
			<div className="container">
				<MovieSelection myShow={myShow} setMyShow={setMyShow} />
				<div className="container_item last_booking">
					{isBooking ? (
						<div className="loading">
					<Image
						alt="loading"
						width={100}
						height={100}
						unoptimized={true}
						src="https://i.gifer.com/yy3.gif"
					/>
				</div>
					) : (
						
				<BookedData data={bookedData}  />
						
					)}
				</div>
				<TimeSlotSelection myShow={myShow} setMyShow={setMyShow} />
				<SeatSelection myShow={myShow} setMyShow={setMyShow} />
				<BookBtn
					myShow={myShow}
					setMyShow={setMyShow}
					setBookedData={setBookedData}
					setIsBooking={setIsBooking}
					setAlert={setAlert}
					initialState={initialState}
				/>
				<Alert alert={alert} />
			</div>
		</section>
	);
};

export default Home;
