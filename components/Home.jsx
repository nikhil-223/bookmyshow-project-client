"use client";

import React, { useEffect, useState } from "react";
import "@styles/home.css";
import {
	BookedData
,MovieSelection
,TimeSlotSelection
,BookBtn
,SeatSelection
,Alert
} from "@components";

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
	const [myShow, setMyShow] = useState(initialState);
	const [isBooking, setIsBooking] = useState(false)
	const [bookedData, setBookedData] = useState(null)
	const [alert, setAlert] = useState({
		isAlert: false,
		type:'success',
		message:''
	})

	return (
		<section className="home">
			<div className="container">
				<MovieSelection myShow={myShow} setMyShow={setMyShow} />
				<div className="container_item last_booking">
					{bookedData ? (
						<BookedData data={bookedData} isBooking={isBooking} />
					) : (
						<>
							<div className="no_booking">No Bookings yet</div>
						</>
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
