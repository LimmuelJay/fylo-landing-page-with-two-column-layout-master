import {styled} from "styled-components"

const Features2Styled = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 120px;
    background-color: #F9F8FE;

    .top {
        display: flex;
        width: 100%;
        background-color: white;

        /* @media screen and (max-width:768px) {
            background-image: url('/assets/images/bg-curve-mobile.svg');
        } */

        img {
            width: 100%;
        }
    }

    .bot {
        display: flex;
        width: 90%;
        margin-bottom: 30px;
        margin-top: 100px   ;
        gap: 20px;

        @media screen and (max-width:768px) {
            flex-direction: column-reverse;
        }
    }

    .descriptions {
        width: 50%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 20px;

        @media screen and (max-width:768px) {
            width: 100%;
            justify-content: center;
            align-items: center;
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
            display: flex;
            flex-direction: column;
            gap: 20px;

            @media screen and (max-width:768px) {
                p {
                    text-align: center;
                    line-height: 25px;
                }
            }
        }

        .actions {
            display: flex;

            @media screen and (max-width:768px) {
                align-items: center;
                justify-content: center;
            }

            button {
                display: flex;
                border: none;
                column-gap: 5px;
                border-bottom: 1px hsl(170, 45%, 43%) solid;
                background-color: #F9F8FE;
                
                p {
                    color: hsl(170, 45%, 43%);
                }
            }
        }

        .quote {
           width: 60%;
           display: flex;
           flex-direction: column;
           row-gap: 15px;
           padding: 20px;
           border-radius: 5px;
           background-color: white;
            
           @media screen and (max-width:375px) {
                width: 90%;
            }

           img {
            width: 20px;
            height: 20px;
           }

           p {
            line-height: 25px;

            @media screen and (max-width:375px) {
                font-size: 0.85rem;
            }
           }

           .profile-pic {
            display: flex;
            column-gap: 20px;

            img {
                border-radius: 50%;
                height: 40px;
                width: 40px;
            }

            .profile-description {
                display: flex;
                flex-direction: column;
                justify-content: center;

                p {
                    line-height: normal;
                    width: auto;

                    @media screen and (max-width:375px) {
                        font-size: 0.85rem;
                    }
                }

                .name {
                    font-weight: bold;
                }
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
export default Features2Styled