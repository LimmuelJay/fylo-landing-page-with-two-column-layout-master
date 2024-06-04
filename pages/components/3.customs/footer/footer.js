import FooterStyled from "@/pages/components/3.customs/footer/footer.styled"

const Footer = () => {
    return (
        <FooterStyled>
            <div className="main">
                <div className="logo">
                    <img className="img-logo" src="/assets/images/logo-white.svg" alt="logo" />
                    <div className="contact-info">
                        <div className="phone">
                            <img src="/assets/images/icon-phone.svg" alt="phone icon"/>
                            <p>Phone: +1-543-123-4567</p>
                        </div>
                        <div className="email">
                            <img src="/assets/images/icon-email.svg" alt="email icon"/>
                            <p>example@fylo.com</p>
                        </div>
                    </div>
                </div>

                <div className="buttons">
                    <a href="#">Contact Us</a>
                    <a href="#">About Us</a>
                    <a href="#">Jobs</a>
                    <a href="#">Terms</a>
                    <a href="#">Press</a>
                    <a href="#">Privacy</a>
                    <a href="#">Blog</a>
                </div>

                <div className="icons">
                    <img src="/assets/images/icon-facebook.svg" alt="facebook icon" />
                    <img src="/assets/images/icon-instagram.svg" alt="instagram icon" />
                    <img src="/assets/images/icon-twitter.svg" alt="twitter icon" />
                </div>
            </div>
        </FooterStyled>
    );
}
 
export default Footer;