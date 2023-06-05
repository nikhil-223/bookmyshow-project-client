import React from "react";

const BookBtn = (props) => {
	const domain = "https://bookmyshow-backend-28y2.onrender.com/";
	const { myShow, setMyShow, setBookedData, setIsBooking, initialState } =
		props;

	const bookShow = () => {
		setIsBooking(true);
		let seatsSelected = Object.values(myShow.seats).filter((seatNo) => {
			return seatNo !== 0;
		});
		const bookShow = async () => {
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
				}
			} catch (error) {
				console.log(error);
			}
		};

		if (myShow.movie === "") console.log("please select a movie");
		else if (myShow.slot === "") console.log("please select a slot");
		else if (seatsSelected[0] === undefined)
			console.log("please select a seat no.");
		else {
			bookShow();
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
