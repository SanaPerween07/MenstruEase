import React from 'react';
import { Button } from "./ui/button";

const Dashbody = () => {
    return(
    <div className="pe-0 pe-md-5 mt-5">
		<div className="pe-0 pe-md-5">
			<h3 className="tagline">
				Empowering Women with Knowledge and Convenience
			</h3>
			<h1 className="hero-heading">
				Your Ultimate Solution For Menstrual Health
			</h1>
			<p className="hero-content">
				Take charge of your menstrual cycle with our all-in-one
				platform. Get period tracking, sustainable products, expert
				consultations, and more to empower your reproductive health.
			</p>
			<Button className="btn btn-primary" variant='default' size='sm'>Get Strated</Button>
		</div>
	</div>
    )
}

export default Dashbody;
