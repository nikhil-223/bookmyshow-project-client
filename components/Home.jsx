"use client";

import React, { useEffect, useState } from "react";
import "@styles/home.css";

const Home = () => {
	const moviesList = ["Ye jawani hai diwani", "Kerela story", "shuzume"];
	const timeSlot = ["10:00 AM", "1:00 PM", "3:00 PM", "8:00 PM"];

	const initialState = {
		movie: "",
		slot: "",
		seats: [
			{ type: "A1", value: 0 },
			{ type: "A2", value: 0 },
			{ type: "A3", value: 0 },
			{ type: "A4", value: 0 },
			{ type: "D1", value: 0 },
			{ type: "D2", value: 0 },
		],
	};
	const [myShow, setMyShow] = useState(initialState);

	const [booking, setBooking] = useState({});
	const [showBooking, setShowBooking] = useState(false);

	useEffect(() => {
		let seats = {
			A1: myShow.seats[0].value,
			A2: myShow.seats[1].value,
			A3: myShow.seats[2].value,
			A4: myShow.seats[3].value,
			D1: myShow.seats[4].value,
			D2: myShow.seats[5].value,
		};
		setBooking({ ...myShow, seats: seats });
	}, [myShow]);

	const setMovie = (e) => {
		setMyShow({ ...myShow, movie: e.target.innerHTML });
	};

	const setTimeSlot = (e) => {
		setMyShow({ ...myShow, slot: e.target.innerHTML });
	};

	const setNumberOfSeats = (i, e) => {
		console.log(e.target.value);
		const seats = myShow.seats.map((seat, index) => {
			if (index === i) return { ...seat, value: Number(e.target.value) };
			else return seat;
		});
		setMyShow({ ...myShow, seats: seats });
	};

	const bookShow = () => {
		let seatsSelected = myShow.seats.filter((seat) => {
			return seat.value !== 0;
		});

		if (myShow.movie === "") console.log("please select a movie");
		else if (myShow.slot === "") console.log("please select a slot");
		else if (seatsSelected[0] === undefined)
			console.log("please select a seat no.");
		else setShowBooking(true);
	};

	return (
		<section className="home">
			<div className="container">
				<div className="container_item movies">
					<span className="container_item_heading"> Select a Movie :</span>
					<div className="list">
						{moviesList.map((movie, i) => (
							<div
								key={i}
								className="option"
								style={
									booking.movie === movie
										? {
												backgroundColor: "rgb(0, 162, 255)",
												color: "black",
												borderColor: "rgb(0, 162, 255)",
										  }
										: {}
								}
								onClick={setMovie}>
								{movie}
							</div>
						))}
					</div>
				</div>
				<div className="container_item last_booking">
					{showBooking ? (
						<>
							<div className="bookingDetails">
								<span className="bookingDetails_heading">Movie</span>
								<span className="bookingDetails_content">{myShow.movie}</span>
							</div>
							<div className="bookingDetails">
								<span className="bookingDetails_heading">Slot</span>
								<span className="bookingDetails_content">{myShow.slot}</span>
							</div>
							<div className="bookingDetails">
								<span className="bookingDetails_heading">Seats</span>
								<span className="bookingDetails_seats">
									{myShow.seats.map((seat) => {
										return (
											<span
												className="bookingDetails_content"
												style={
													seat.value > 0
														? {}
														: {
																backgroundColor: "rgb(255 255 255 / 15%)",
																color: "white",
														  }
												}>
												{" "}
												{seat.type} : {seat.value}
											</span>
										);
									})}
								</span>
							</div>
						</>
					) : (
						<>
							<div className="no_booking">No Bookings yet</div>
						</>
					)}
				</div>
				<div className="container_item time_slot">
					<span className="container_item_heading"> Select a Time Slot :</span>
					<div className="list">
						{timeSlot.map((time, i) => (
							<div
								key={i}
								className="option"
								style={
									booking.slot === time
										? {
												backgroundColor: "rgb(0, 162, 255)",
												color: "black",
												borderColor: "rgb(0, 162, 255)",
										  }
										: {}
								}
								onClick={setTimeSlot}>
								{time}
							</div>
						))}
					</div>
				</div>
				<div className="container_item seats">
					<span className="container_item_heading"> Select Seats :</span>
					<div className="list">
						{myShow.seats.map((seat, i) => (
							<div key={i} className="option seat_option">
								<span className="">{seat.type}</span>
								<input
									type="number"
									min="0"
									placeholder="0"
									style={
										seat.value > 0
											? {
													backgroundColor: "rgb(0, 162, 255)",
													color: "black",
													borderColor: "rgb(0, 162, 255)",
											  }
											: {}
									}
									value={seat.value}
									onChange={(e) => {
										setNumberOfSeats(i, e);
									}}></input>
							</div>
						))}
					</div>
				</div>
				<div className="container_item btn_area">
					<button className="btn" onClick={bookShow}>
						Book
					</button>
					<button
						className="btn"
						onClick={() => {
							setMyShow(initialState);
							setShowBooking(false);
						}}>
						Clear
					</button>
				</div>
			</div>
		</section>
	);
};

export default Home;
