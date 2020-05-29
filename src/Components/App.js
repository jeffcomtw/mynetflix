import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getAll, removeFromList, moveToMyList } from "../redux/actions";
import List from "./List";
import "./App.css";
import "./spinner.css";

const App = (props) => {
	useEffect(() => {
		props.getAll();
	}, []);

	const {
		mylist,
		recommendations,
		error,
		isLoading,
		removeFromList,
		moveToMyList,
	} = props;

	return (
		<div className="container">
			<div className="title-bar-container">
				<img
					className="title-img"
					alt="logo"
					src="https://assets.brand.microsites.netflix.io/assets/1ed15bca-b389-11e7-9274-06c476b5c346_cm_800w.png?v=21"
				/>
			</div>
			{error && <div className="error-message">{error}</div>}
			{!error && isLoading && (
				<div className="lds-spinner">
					<div></div>
					<div></div>
					<div></div>
					<div></div>
					<div></div>
					<div></div>
					<div></div>
					<div></div>
					<div></div>
					<div></div>
					<div></div>
					<div></div>
				</div>
			)}
			{!error && !isLoading && (
				<div className="list-wrapper">
					<List
						name="My List"
						list={mylist || []}
						click={removeFromList}
						btnName="Remove"
					/>
					<List
						name="Recommendations"
						list={recommendations || []}
						click={moveToMyList}
						btnName="Add to MyList"
					/>
				</div>
			)}
			<div className="list-title-container">
				{mylist && (
					<ul>
						{mylist.map((item) => {
							return (
								<li key={item.id}>
									<h4>{item.title}</h4>
								</li>
							);
						})}
					</ul>
				)}
			</div>
		</div>
	);
};

const mapStateToProps = ({ mylist, recommendations, error, isLoading }) => ({
	mylist,
	recommendations,
	error,
	isLoading,
});

const mapDispatchToProps = (dispatch) => {
	return {
		getAll: () => {
			dispatch(getAll());
		},
		removeFromList: (id) => {
			dispatch(removeFromList(id));
		},
		moveToMyList: (id) => {
			dispatch(moveToMyList(id));
		},
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
