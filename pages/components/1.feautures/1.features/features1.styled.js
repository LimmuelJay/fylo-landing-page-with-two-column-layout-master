import {styled} from "styled-components"

const Features1Styled = styled.div`
    width: 90%;
    display: flex;
    margin-top: 100px;
    gap: 20px;

    @media screen and (max-width:768px) {
        flex-direction: column-reverse;
    }

    .descriptions {
        width: 50%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 20px;

        @media screen and (max-width:768px) {
            width: 100%;
        }

        .title {
            width: 100%;

            h2 {
                font-size: 2.2rem;
                line-height: 40px;
                font-weight: 700;

                @media screen and (max-width:768px) {
                    text-align: center;
                }
            }
        }

        .details {
            width: 100%;

            @media screen and (max-width:768px) {
                p {
                    text-align: center;
                    line-height: 25px;
                }
            }
        }

        .actions {
            width: 100%;
            display: flex;
            gap: 15px;

            input {
                height: 40px;
                width: 65%;
                padding: 20px;
            }

            button {
                display: flex;
                justify-content: center;
                align-items: center;
                background-color: hsl(224, 93%, 58%);
                border: 0;
                height: 43px;
                width: 35%;
                color: hsl(240, 75%, 98%);
            }

            @media screen and (max-width:768px) {
                flex-direction: column;
                justify-content: center;
                align-items: center;

                input {
                    width: 80%;
                }

                button {
                    width: 80%;
                }
            }
        }
    }

    .illustration {
        width: 50%;
        height: 100%;

        @media screen and (max-width:768px) {
            width: 100%;
        }

        .img-container {
            display: flex;

            img {
                width: 100%;
                height: 100%;
            }
        }
    }

`
export default Features1Styled