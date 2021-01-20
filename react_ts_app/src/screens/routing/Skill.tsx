import React from "react";

class Skill extends React.Component {
    render() {
        return (
            <>
                <div id="Skill" className="main">
                    <p className="Paragrahsize">Skill</p>
                    <div className="BoxIn">
                        <div className="Boxhalf">
                            <div className="skillbox">
                                <h2>
                                    Python
                                </h2>

                                <p>
                                    Webアプリケーション開発やデータ取得・処理等に利用しています．
                                </p>
                                <ul className="leftsort">
                                    <li>FastAPI</li>
                                    <li>Django</li>
                                    <li>Beautiful Soup4</li>
                                    <li>Selenium</li>
                                </ul>
                            </div>
                            <div className="skillbox">
                                <h2>
                                    Competition programming
                                </h2>
                                <p>
                                    競技プログラミングに参加をしております．(2020/08/25)
                                </p>
                                <ul className="leftsort">
                                    <li>Atcoder MaxRating: 736</li>
                                </ul>
                            </div>
                        </div>
                        <div className="Boxhalf">
                            <div className="skillbox">
                                <h2>
                                    Cloud
                                </h2>
                                <p>
                                    アプリケーションを公開する際に利用しています．
                                </p>
                                <ul className="leftsort">
                                    <li>Amazon Web Service（ECS・Fargate・EC2・RDS・S3）</li>
                                    <li>Google Cloud Platform（GCE・CloudAPI）</li>
                                </ul>
                            </div>
                            <div className="skillbox">
                                <h2>
                                    JavaScript・TypeScript
                                </h2>
                                <p>
                                    Webアプリケーション開発に利用しています．
                                </p>
                                <ul className="leftsort">
                                    <li>React</li>
                                    <li>Vue.js</li>
                                    <li>deck.gl</li>
                                    <li>D3.js</li>
                                </ul>
                            </div>
                        </div>
                        <div className="Boxhalf">
                            <div className="skillbox">
                                <h2>
                                    Container Service
                                </h2>
                                <p>
                                    Webアプリケーション公開等に利用しています．
                                </p>
                                <ul className="leftsort">
                                    <li>Docker</li>
                                    <li>Docker-compose</li>
                                </ul>
                            </div>
                            <div className="skillbox">
                                <h2>
                                    Linux
                                </h2>
                                <p>
                                    Webアプリケーション公開やサーバ運営等，様々な用途に利用しています．
                                </p>
                                <ul className="leftsort">
                                    <li>Ubuntu</li>
                                    <li>FreeBSD</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default Skill;