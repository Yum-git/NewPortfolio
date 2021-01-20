import React from "react";

// import Me from '../../static/img/me.jpg';
// import Totoro from '../../static/img/totoro.jpg'
import Kyoto from '../../static/img/Kyoto.jpg'

class Profile extends React.Component {
    render() {
        return (
            <>
                <div id="profile" className="main">
                    <p className="Paragrahsize">Profile</p>
                    <div className="block-ja">
                        <p>
                            中京大学工学部情報工学科3年の太田 悠馬です．
                        </p>
                        <p>
                            Webアプリケーション開発やデータ処理・分析などを主に行っている学生です．<br />
                            現在「株式会社マインディア」にて長期インターンシップとして所属しています．
                        </p>
                        <p>
                            趣味としては，オフシーズンにスキーを滑ったりボルダリングを少し嗜んでおります．
                        </p>
                        <p>
                            (2021/01/11)
                        </p>

                    </div>
                    <div className="block-ja me">
                        <img src={Kyoto}/>
                    </div>
                </div>
            </>
        );
    }
}

export default Profile;