import React from 'react';
import GoogleLogin from 'react-google-login';

const clientId = "289231711202-0pelq139lb7eb5aig4a70mso59dbg3a7.apps.googleusercontent.com";

export default function GoogleLoginBtn({ onGoogleLogin }){
    const onSuccess = async(response) => {
        const { googleId, profileObj : { email, name } } = response;
        
        await onGoogleLogin (
          // 구글 로그인 성공시 서버에 전달할 데이터
        );
    }

    const onFailure = (error) => {
        console.log(error);
    }

    return(
        <div>
            <GoogleLogin
                clientId={clientId}
                render={renderProps => (
                    <button onClick={renderProps.onClick} disabled={renderProps.disabled} style={{borderRadius:"8px",width:"100%", height:"45px",border:"none", backgroundColor:"#fff",fontWeight:"600", color:"#222222", fontSize:"14px"}}>구글로 로그인하기</button>
                  )}
                buttonText="Login"
                onSuccess={onSuccess}
                onFailure={onFailure}
                cookiePolicy={'single_host_origin'}
            />
        </div>
    )
}