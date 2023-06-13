
const BookedData = (props) => {
	const { data } = props;
	return (
		<>
			{data ? (
				<div className="booking">
					<div className="bookingDetails main_heading">
						<span> Last Booking Details:</span>
					</div>
					<div className="bookingDetails">
						<span className="bookingDetails_heading">Movie</span>
						<span className="bookingDetails_content">{data.movie}</span>
					</div>
					<div className="bookingDetails">
						<span className="bookingDetails_heading">Slot</span>
						<span className="bookingDetails_content">{data.slot}</span>
					</div>
					<div className="bookingDetails">
						<span className="bookingDetails_heading">Seats</span>
						<span className="bookingDetails_seats">
							{Object.keys(data.seats).map((seat, i) => {
								return (
									<span
										key={i}
										className="bookingDetails_content"
										style={
											Object.values(data.seats)[i] > 0
												? {}
												: {
														backgroundColor: "rgb(255 255 255 / 15%)",
														color: "white",
												  }
										}>
										{" "}
										{seat} : {Object.values(data.seats)[i]}
									</span>
								);
							})}
						</span>
					</div>
				</div>
			) : (
				<>
					<div className="no_booking">No Bookings yet</div>
				</>
			)}
		</>
	);
};

export default BookedData;
