import React, { useState, useContext, useEffect } from "react";
import styled, { createGlobalStyle } from "styled-components";
import styles from "./burgerMenu.css";
import { words } from "../words";
import { LanguageContext } from "../context/language";

export const BurgerMenu = () => {
	const [isOpen, setIsOpen] = useState(false);

	const toggleMenu = () => {
		setIsOpen(!isOpen);
	};

	const { language, changeLanguage } = useContext(LanguageContext);

	return (
		<div className="menu-container">
			{isOpen ? (
				<span className="menu-title">
					<img
						style={{
							width: "26px",
						}}
						src="./images/close.png"
						alt=""
						onClick={() => {
							setIsOpen(false);
						}}
					/>
				</span>
			) : (
				<span className="menu-title">
					<img
						style={{
							width: "26px",
						}}
						src="./images/menu.png"
						alt=""
						onClick={() => {
							setIsOpen(true);
						}}
					/>
				</span>
			)}
			{isOpen ? (
				<ul
					className="menu-list"
					style={{
						display: "flex",
					}}
				>
					<li className="menu-list-item">
						<a href="/request">{words[language]["dealers"]}</a>
					</li>
					<li className="menu-list-item">
						{" "}
						<a href="/products">{words[language]["products"]}</a>
					</li>
					<li className="menu-list-item">
						{" "}
						<a href="/service">{words[language]["warranty"]}</a>
					</li>
				</ul>
			) : (
				<ul
					className="menu-list"
					style={{
						display: "none",
					}}
				>
					{/* <li className="menu-list-item">
						<a href="/request">{words[language]["dealers"]}</a>
					</li>
					<li className="menu-list-item">
						{" "}
						<a href="/products">{words[language]["products"]}</a>
					</li>
					<li className="menu-list-item">
						{" "}
						<a href="/service">{words[language]["warranty"]}</a>
					</li> */}
				</ul>
			)}
		</div>
	);
};
