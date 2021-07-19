import styled from "styled-components";

export const TestimonialsSection = styled.div`
    background-color: #F4F5F7;
    height: 100vh;
    padding: 2rem 10%;
    .title-wrapper{
        margin: 0 auto;
        text-align: center;
    }
    h1,h3{
        color: #1C1259; 
    }
    h1{
        font-size: 3rem;
    }
    h3{
        font-size: 1.125rem;
        margin: 0 0 2rem 0;
    }

    .container {
        display: flex;
        margin-bottom: 4rem;
    }
    .card-container{
        width: 30%;
        margin: 0 2rem;
        display:flex;
        flex-direction:column;
        align-items:center;
    }
    .card{
        width: 100%;
        margin: 2rem;

    }
    .card:after{
  
        content: '';
        position: absolute;
        top: 100%;
        left: calc(50% - 10px);
        background: #FFFFFF;
        width: 20px;
        height: 20px;
        clip-path: polygon(0 0, 100% 0, 50% 100%);
      }
    .details{
        width: 100%;
        text-align: center;
    }
    .imgbx{
        width:65px;
        height:65px;
        border-radius:50%;
        overflow:hidden;
        margin: 0 auto;

    }
    button{

    }
    .imgbx img{
      height: 100%;
      width: 100%;
    }
    .slick-dots li  button{
      height: 14px;
      width: 12.703702926635742px;
      left: 18.148193359375px;
      top: 0px;
      border-radius: 50%;
      top: 0%;
      bottom: 0%;
      border: 3px solid #2EC5CE;
      box-sizing: border-box;
    }
    .slick-dots li.slick-active button{
        background-color:#2EC5CE;
    }
    h2{
        color: #1C1259
    }
    p{
        color: #1C1259
    }
    span{
       color: #474A57
    }

    @media screen and (max-width: 1024px) {
        .container{
            flex-wrap: wrap;
        }
        .card-container{
            width: 40%;
        }
    }

    @media screen and (max-width: 830px){
        .container{
            flex-direction: column
            flex-wrap: nowrap;
        }
        .card-container{
            width: 100%;
        }
    }
`;

