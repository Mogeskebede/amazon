import React from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from "react-router-dom";
import { useStateValue } from "../../dataLayer/StateProvider/stateProvider";
import { auth } from "../../dataLayer/fireBase";
import NavBAR from "../NavBar/NavBAR.js";
function Header() {
	const [{ basket, user }, dispatch] = useStateValue();
	const handleAuthentication = () => {
		if (user) {
			auth.signOut();
		}
		
	}
	return (
		<>
			
		<div className="header">
			<Link to ="/">
				<img
					src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
					alt="amazon_logo"
					className="header__logo"
				/>
				</Link>
			 <div className="header__search">
        <input className="header__searchInput" type="text" />
      </div>
      <SearchIcon className="header__searchIcon" />
			   
			<div className="header__nav">
				<Link to ="/Login" className="header__clearlink">
					<div onClick={handleAuthentication} className="header__option">
						<span className="header__optionLineOne"> Hello {!user ? "Guest" : user.email}
						</span>
						<span className="header__optionLineTwo">{user ? 'Sign Out' : 'Sign In'}
						</span>
					</div>
					</Link>
					<Link to ="/orders" className="header__clearlink">
					<div className="header__option">
						<span className="header__optionLineOne">Returns</span>
						<span className="header__optionLineTwo">&Orders</span>
						</div>
						</Link>
				<div className="header__option">
					<span className="header__optionLineOne">Your</span>
					<span className="header__optionLineTwo">Prime</span>
				</div>
				<Link to="/CheckOut" className="header__clearlink">
					<div className="header__optionBasket">
						<ShoppingCartIcon />
						<span className="header__optionLineTwo header__basketCount">
							{basket.length}
						</span>
					</div>
					</Link>
			
			</div>
			</div>
			
      <NavBAR />
			</>
	);
};

export default Header;

