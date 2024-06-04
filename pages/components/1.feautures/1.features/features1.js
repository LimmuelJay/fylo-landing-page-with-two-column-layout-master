import Features1Styled from "@/pages/components/1.feautures/1.features/features1.styled";

const Features1 = () => {
    return (
        <Features1Styled>
            <div className="descriptions">
                <div className="title">
                    <h2>All your files in one secure location, accessible anywhere.</h2>
                </div>
                <div className="details">
                    <p>Fylo stores your most important files in one secure location. Access them wherever you need, share and collaborate with friends, family, and co-workers.</p>
                </div>
                <div className="actions">
                    <input type="text" placeholder="Enter your email.."/>
                    <button>
                        Get Started
                    </button>
                </div>
            </div>

            <div className="illustration">
                <div className="img-container">
                    <img src="/assets/images/illustration-1.svg" alt="illustration" />
                </div>
            </div>
        </Features1Styled>
    );
}
 
export default Features1;