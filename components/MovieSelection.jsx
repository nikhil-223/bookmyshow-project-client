import React from "react";

const MovieSelection = (props) => {

	const { myShow, setMyShow } = props;

	const moviesList = ["Ye jawani hai diwani", "Kerela story", "shuzume"];

	const setMovie = (e) => {
		setMyShow({ ...myShow, movie: e.target.innerHTML });
	};
	return (
		<div className="container_item movies">
			<span className="container_item_heading"> Select a Movie :</span>
			<div className="list">
				{moviesList.map((movie, i) => (
					<div
						key={i}
						className="option"
						style={
							myShow.movie === movie
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
	);
};

export default MovieSelection;
