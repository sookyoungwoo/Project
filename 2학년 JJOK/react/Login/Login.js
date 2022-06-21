import './Login.css';
export default function Login(){
    return(
        <div className="Login_tit">
            <div id="Login_text">
                <p>Log in</p>
            </div>
            <div className="Login_input">
                <div id="Login_id_text">
                    <input type="text" id="id_text" placeholder="ID"/>
                </div>
                <div id ="Login_pw_text">
                    <input type="password" id="pw_text" placeholder="PW"/>
                </div>
                <div className="login_button_className">
                    <button id="Login_button">확인</button>
                </div>
            </div>
            <div className ="login_add_button">
                <div id = "signup_button">
                    <button id ="sign_up" type="button">
                        회원가입
                    </button>
                </div>
                <div id="find_id_pw">
                    <button id="find" type="button">
                    아이디/비밀번호를 잊어버리셨나요?
                    </button>
                </div>
            </div>
        </div>
    )
}