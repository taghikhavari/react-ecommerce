import React from "react";
import "./menu-item.styles.scss";
import { useHistory } from "react-router-dom";

interface IProps {
  title: string;
  imageUrl: string;
  size?: string;
  link: string;
}

const MenuItem = ({ title, imageUrl, size, link }: IProps) => {
  const history = useHistory();

  const handleClick = () => {
    history.push(`/${link}`)
  }

  return(
	<div className={`menu-item ${size}`} onClick={handleClick} >
    <div className="background-image" style={{
    backgroundImage: `url(${imageUrl})`
  }}/>
		<div className="content">
			<h1 className="title">{title.toUpperCase()}</h1>
			<span className="subtitle">Shop Now</span>
		</div>
	</div>
)}

export default MenuItem;
