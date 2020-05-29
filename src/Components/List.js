import React from "react";
import "./App.css";

const List = (props) => {
	return (
		<div className="lists">
			<h1 color="white">{props.name} : </h1>
			<ul className="title-wrapper">
				{props.list.map((item) => {
					return (
						<li key={item.id}>
							<h4 color="white">{item.title}</h4>
							<div className="img-btn-container">
								<img src={item.img} alt={item.title} />
								<button className="button" onClick={() => props.click(item.id)}>
									{props.btnName}
								</button>
							</div>
						</li>
					);
				})}
			</ul>
		</div>
	);
};

export default List;
