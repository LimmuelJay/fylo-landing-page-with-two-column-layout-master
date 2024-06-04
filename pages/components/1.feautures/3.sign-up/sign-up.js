import SignUpStyled from "@/pages/components/1.feautures/3.sign-up/sign-up.styled";

const SignUp = () => {
    return ( 
        <SignUpStyled>
            <div className="main">
                <div className="description">
                    <h2>Get early access today</h2>
                    <p>It only takes a minute to sign up and our free starter tier is extremely generous. If you have any questions, our support team would be happy to help you.</p>
                </div>

                <div className="sign-up">
                    <button>
                        <p>Get Started For Free</p>
                    </button>
                    <input type="text" placeholder="email@example.com"/>
                </div>
            </div>
        </SignUpStyled>
    );
}
 
export default SignUp;

