import MainStyled from "@/pages/components/2.main/main.styled";
import Header from "@/pages/components/3.customs/header/header";
import Footer from "@/pages/components/3.customs/footer/footer";
import Features1 from "@/pages/components/1.feautures/1.features/features1";
import Features2 from "@/pages/components/1.feautures/2.features/features2";
import SignUp from "@/pages/components/1.feautures/3.sign-up/sign-up";

const Main = () => {
    return (
        <MainStyled>
            <Header />
            <Features1 />
            <Features2 />
            <SignUp />
            <Footer />
        </MainStyled>
    );
}
 
export default Main;   