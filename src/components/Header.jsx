import React, {useRef, useState, useContext} from 'react';
import Context from '../Context';

function Header(props) {
	const {performSearch} = useContext(Context);
	const [query, setQuery] = useState('');
	const searchbar = useRef('');

	function handleChange() {
		setQuery(searchbar.current.value);
		console.log(query)
	}

	function handleSubmit(e) {
		e.preventDefault();
		performSearch(query);
		window.location.href='/search';
	}

  return (
    <div>
		<div id="site-content">
			<header className="site-header">
				<div className="container">
					<a href="/" id="branding">
						<img src="images/logo.png" alt="" className="logo" />
						<div className="logo-copy">
							<h1 className="site-title">JJSMHL Movie Site</h1>
							<small className="site-description">Free us</small>
						</div>
					</a> 

					<div className="main-navigation">
						<button type="button" className="menu-toggle"><i className="fa fa-bars"></i></button>
						<ul className="menu">
							<li className="menu-item current-menu-item"><a href="/">Home</a></li>
							<li className="menu-item"><a href="/">About</a></li>
							<li className="menu-item"><a href="/">Movie reviews</a></li>
							<li className="menu-item"><a href="/">Join us</a></li>
							<li className="menu-item"><a href="/">Contact</a></li>
						</ul>

						<form onSubmit={handleSubmit}>
							<input type="search" ref={searchbar} onChange={handleChange} placeholder="Search..." />
							<button>Go</button>
						</form>

					</div>
				</div>
			</header>
      </div>
      </div>
  )
};

export default Header;
