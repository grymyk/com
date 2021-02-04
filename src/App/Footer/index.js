import React from 'react';

function Footer() {
	const name = 'myko@grymyk.com';

	return (
		<div className="email">
			<a href={`mailto:${name}`}>{name}</a>
		</div>
	)
}

export default Footer;
