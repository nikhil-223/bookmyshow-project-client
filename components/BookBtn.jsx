"use client";

import React, { useEffect, useState } from "react";

const BookBtn = (props) => {
	const domain = "https://bookmyshow-backend-28y2.onrender.com/";
	const {
		myShow,
		setMyShow,
		setBookedData,
		setIsBooking,
		initialState,
		setAlert,
	} = props;

	const [scrollDown, setScrollDown] = useState(false);

	const showAlert = (type, message) => {
		setTimeout(() => {
			setAlert({
				isAlert: false,
				type: "success",
				message: "",
			});
		}, 2000);
		setAlert({
			isAlert: true,
			type: type,
			message: message,
		});
	};

	useEffect(() => {
		if (scrollDown) {
			window.scrollTo(0, document.body.scrollHeight);
			setScrollDown(false);
		}
	}, [scrollDown]);

	const bookShow = () => {
		
		let seatsSelected = Object.values(myShow.seats).filter((seatNo) => {
			return seatNo !== 0;
		});
		const bookShowApi = async () => {
			setIsBooking(true);
			showAlert("success", "..Booking Please wait");
			try {
				const response = await fetch(`${domain}api/booking`, {
					method: "POST",
					headers: {
						"Content-Type": "application/json; charset=utf-8",
					},
					body: JSON.stringify({
						movie: myShow.movie,
						slot: myShow.slot,
						seats: myShow.seats,
					}),
				});

				const data = await response.json();
				if (data) {
					const response = await fetch(`${domain}api/booking`, {
						method: "GET",
					});

					const data = await response.json();
					setBookedData(data.data);
					setMyShow(initialState);
				}
			} catch (error) {
				console.log(error);
			} finally {
				showAlert("success", "Booking is successfull");
				setScrollDown(true);
			}
		};

		if (myShow.movie === "") showAlert("error", "Please select a movie");
		else if (myShow.slot === "") showAlert("error", "Please select a slot");
		else if (seatsSelected[0] === undefined)
			showAlert("error", "Please select seats");
		else {
			bookShowApi();
			setIsBooking(false);
		}
	};
	return (
		<div className="container_item btn_area">
			<button className="btn" onClick={bookShow}>
				Book
			</button>
			<button
				className="btn"
				onClick={() => {
					setMyShow(initialState);
				}}>
				Clear
			</button>
		</div>
	);
};

export default BookBtn;
