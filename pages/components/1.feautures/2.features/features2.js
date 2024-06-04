import Features2Styled from "@/pages/components/1.feautures/2.features/features2.styled";

const Features2 = () => {
    return (
        <Features2Styled>
            <div className="top">
                <img src="/assets/images/bg-curve-desktop.svg" />
            </div>

            <div className="bot">
                <div className="descriptions">
                    <div className="title">
                        <h2>Stay productive, wherever you are</h2>
                    </div>

                    <div className="details">
                        <p>Never let location be an issue when accessing your files. Fylo has you covered for all of your file storage needs.</p>
                        <p>Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required!</p>
                    </div>

                    <div className="actions">
                        <button>
                            <p>See how Fylo works</p>
                            <img src="/assets/images/icon-arrow.svg" />
                        </button>
                    </div>

                    <div className="quote">
                        <img src="/assets/images/icon-quotes.svg" alt="quote" />

                        <p>Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.</p>

                        <div className="profile-pic">
                            <img src="/assets/images/avatar-testimonial.jpg" alt="profile picture" />
                            <div className="profile-description">
                                <p className="name">Kyle Burton</p>
                                <p>Founder & CEO, Huddle</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="illustration">
                    <div className="img-container">
                        <img src="/assets/images/illustration-2.svg" alt="illustration" />
                    </div>
                </div>
            </div>

        </Features2Styled>
    );
}
 
export default Features2;