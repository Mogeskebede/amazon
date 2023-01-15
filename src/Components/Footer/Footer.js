import React, { useEffect } from 'react'
import './Footer.css'
import PropsFooter from './PropsFooter'
function Footer() {

    // 👇️ scroll to top on page load
    const backToTop = () => { window.scrollTo({ top: 0, left: 0, behavior: 'smooth' }); }


    return (
        <>
        
            <div className="navFooterBackToTop">
                <div className="backToTop">
                    <p onClick={backToTop}>Back to top</p>
                    </div>
            </div>
            <div className="footer_row-div">
                <div className="footer_row">
                    <h3>Get to Know Us</h3>
                    <ul>
                    <PropsFooter links={[    
                                         "Careers",
                                        "Amazon",
                                        "Newsletter",
                                        "About Amazon",
                                        "Sustainability",
                                        "Press Center",
                                        "Investor Relations",
                                        "Amazon Devices",
                                        "Amazon Science",
                                             ]}/>
					</ul>
                    
                </div>
                 <div className="footer_row">
                    <h3>	
                        Make Money with Us</h3>
                    <ul>
                    <PropsFooter links={[    
                                         "Sell products on Amazon",
                                        "Sell apps on Amazon",
                                        "Sell apps on Amazon",
                                        "Supply to Amazon",
                                        "Protect & Build Your Brand",
                                        "Become an Affiliate",
                                        "Become a Delivery Driver",
                                        "Start a package delivery business",
                            "Advertise Your Products",
                                        "Self-Publish with Us",
                                        "Host an Amazon Hub",
                                        "See More Ways to Make Mone",
                                   
                                             ]}/>
					</ul>
                </div>
                 <div className="footer_row">
                    <h3>	
                        Amazon Payment Products</h3>
                    <ul>
                      <PropsFooter links={[    
                                         "Amazon Rewards Visa Signature Cards",
                                        "Amazon Store Card",
                                        "Amazon Secured Card",
                                        "Amazon Business Card",
                                        "Shop with Points",
                                        "Credit Card Marketplace",
                                        "Investor Relations",
                                        "Reload Your Balance",
                                        "Amazon Currency Converter",
                                             ]}/>
					</ul>
                </div>
                 <div className="footer_row">
                    <h3>Let Us Help You</h3>
                       <ul>
                    <PropsFooter links={[    
                                         "Amazon and COVID-19",
                                        "Your Account",
                                        "Your Orders",
                                        "Shipping Rates & Policies",
                                        "Amazon Prime",
                                        "Returns & Replacements",
                                        "Manage Your Content and Devices",
                                        "Your Recalls and Product Safety Alerts",
                                       "Amazon Assistant",
                                        "Help",
                                             ]}/>
					</ul>
                </div>
                Built by Moges Kebedew
            </div>
            <hr />
          
        </>
    )
}

export default Footer
