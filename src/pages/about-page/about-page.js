import React from 'react';
import './about-page.css'
import {useNavigate} from "react-router-dom";
import {Button} from "../../components/ui/buttons";

export const AboutPage = () => {
	const navigate = useNavigate()
	const goBack = () => navigate(-1)
	return (
			<div className='about-page'>
				<div className="about-page__description">
					<h1>Just remember!</h1>
					<p className='text'>If you fall asleep now, you will dream. If you study now, you will live your dream!</p>
					<Button className={'btn btn--primary btn--medium'} onClick={goBack}>Go back and teach!</Button>
				</div>
				<div className="about-page__img"></div>
			</div>
	);
};

