import HeaderStyled from "@/pages/components/3.customs/header/header.styled";

const Header = () => {
    return (
        <HeaderStyled>
            <div className="logo-wrapper">
                <div className="logo">
                    <img src="/assets/images/logo.svg" alt="logo" />
                </div>
            </div>
            
            <div className="nav-list-wrapper">
                <div className="nav-list">
                    <a href="#">Features</a>
                    <a href="#">Team</a>
                    <a href="#">Sign In</a>
                </div>
            </div>
        </HeaderStyled>
    );
}
 
export default Header;