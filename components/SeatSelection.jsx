import React from "react";

const SeatSelection = (props) => {

    const {myShow,setMyShow}=props;

	const setNumberOfSeats = (seat, e) => {
		const seats = { ...myShow.seats, [`${seat}`]: e.target.value };
		setMyShow({ ...myShow, seats: seats });
	};

	return (
		<div className="container_item seats">
			<span className="container_item_heading"> Select Seats :</span>
			<div className="list">
				{Object.keys(myShow.seats).map((seat, i) => (
					<div key={i} className="option seat_option">
						<span className="">{seat}</span>
						<input
							type="number"
							min="0"
							placeholder="0"
							style={
								Object.values(myShow.seats)[i] > 0
									? {
											backgroundColor: "rgb(0, 162, 255)",
											color: "black",
											borderColor: "rgb(0, 162, 255)",
									  }
									: {}
							}
							value={Object.values(myShow.seats)[i]}
							onChange={(e) => {
								setNumberOfSeats(seat, e);
							}}></input>
					</div>
				))}
			</div>
		</div>
	);
};

export default SeatSelection;
