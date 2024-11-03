module.exports.forgot_password = ({link}) =>
     `<!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <title>Welcome onboard</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <style>
            * {
                margin: 0;
                padding: 0;
                text-align: center;
                box-sizing: border-box;
                font-family: sans-serif;
            }
    
            body {
                gap: 2em;
                width: 100vw;
                height: 100vh;
                display: flex;
                background: #fff;
                align-items: center;
                flex-direction: column;
                justify-content: center;
            }
    
            .head {
                gap: 12px;
                display: flex;
                color: #0D3573;
                font-weight: 800;
                align-items: center;
                justify-content: center;
                margin-bottom:35px;
                font-size: 34px;
            }
    
                p {
                justify-content:"center";
                align-items:"center";
                color: #0D3573;
                font-weight: 600;
            }
    
            h3 span {
                font-size: 36px;
                text-decoration: underline;
               
            }

            .otp {
                display:"block";
                justify-content:center;
                align-items:center;
            }
    
            img {
                width: 170px;
                height: 170px;
                object-fit: cover;
                justify-content:center;
                align-items:center;
                background-position: right;
                margin-bottom:"15px";
                margin-left:27px;
            }
            .text {
                font-size: 36px;
            }

            svg {
                margin-bottom: 2em;
            }
    
            div {
                color: #0D3573;
                max-width: min(450px, 100vw);
            }
    
            div span {
                color: inherit;
                font-weight: 400;
            }
        </style>
    </head>
    
    <body>
        
        <div class="otp">
        <p class="head" >Verification link</p>
        <p>click on this link to reset your password</p>
        
        </div>
    
     
        <div>
            <span>
              <a href="${link}"><button>Reset password</button></a>
            </span>
            <br>
            <span>
                Please note that we will never ask for any sensitive information from you,
                so please be careful not to fall victim of spam e-mails claiming to be from us. Thank you😊
            </span>
        </div>
    </body>
    <script>
        const code = document.querySelector('h3');
        code.innerHTML = code.textContent.replace(/./g, '<span>$&</span>');
    </script>
    </html>`; 