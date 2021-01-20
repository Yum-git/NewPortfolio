import React from "react";

import deck_gl_png from '../../static/img/Deck_gl.png';
import music_png from  '../../static/img/fig1.png';
import vpn_png from  '../../static/img/Presen_VPN.png';
import alarm_png from '../../static/img/CaptureAlarm.png';

class Product extends React.Component {
    render() {
        return (
            <>
                <div id="Production" className="main">
                    <p className="Paragrahsize">Production</p>
                    <div className="BoxIn">
                        <div className="Boxhalf">
                            <div className="skillbox">
                                <div className="TextBox">
                                    <h2>
                                        deck.glを利用した浸水予測データの視覚化
                                    </h2>
                                    <p>
                                        進捗状況：試作完成・ブラッシュアップ中
                                    </p>
                                    <p>
                                        ハッカソンイベント「Geospatial Hackers Program 東海」（3位入賞）にて開発したプログラミングです．<br />
                                        5人で開発を行い，私はフロントエンドをメインに担当しました．<br />
                                    </p>
                                </div>
                                <div className="PictureBox">
                                    <img src={deck_gl_png} />
                                </div>
                                <div className="techbox">
                                    <p>
                                        フロントエンド:javaScript，React，deck.gl<br />
                                        バックエンド:Node.js
                                    </p>
                                    <a href="https://github.com/Yum-git/suitter_new">ソースコード</a>
                                </div>
                            </div>
                            <div className="skillbox">
                                <div className="TextBox">
                                    <h2>
                                        自身の思いを音楽に変換するWebアプリ
                                    </h2>
                                    <p>
                                        進捗状況：制作完了・改善中
                                    </p>
                                    <p>
                                        ハッカソンイベント「ウインターハッカソン〜オンラインでLVupする開発合宿vol4〜」にて制作されたWebアプリです．<br />
                                        3人で開発を行い，私はバックエンド基盤を担当しました．<br />
                                    </p>
                                </div>
                                <div className="PictureBox">
                                    <img src={music_png} />
                                </div>
                                <div className="techbox">
                                    <p>
                                        フロント:Vue.js, Vuetify<br />
                                        バックエンド:FastAPI<br />
                                        インフラ:AWS(Fargate), Unicorn, Nginx
                                    </p>
                                    <a href="https://github.com/Yum-git/jojoen">ダウンロード先（ソースコード）</a>
                                </div>
                            </div>
                        </div>
                        <div className="Boxhalf">
                            <div className="skillbox">
                                <div className="TextBox">
                                    <h2>
                                        VPNサーバサービス構築
                                    </h2>
                                    <p>
                                        進捗状況：クラウドにおける構築完了・大学内のサーバにて構築中
                                    </p>
                                    <p>
                                        学生団体「ConvivialNet」にて構築しているVPNサーバサービスです．現在実験的にクラウドにて構築を完了しています．<br />
                                        <br />
                                    </p>
                                </div>
                                <div className="PictureBox">
                                    <img src={vpn_png} />
                                </div>
                                <div className="techbox">
                                    <p>
                                        インフラ（クラウド）:Google Compute Engine，Ubuntu，OpenVPN<br />
                                        インフラ（オンプレ）:FreeBSD, OpenVPN
                                    </p>
                                </div>
                            </div>
                            <div className="skillbox">
                                <div className="TextBox">
                                    <h2>
                                        二度寝防止Webアプリ
                                    </h2>
                                    <p>
                                        進捗状況：ハッカソンにて開発完了・ネイティブアプリ検討中
                                    </p>
                                    <p>
                                        ハッカソンイベント「サマーハッカソン〜オンラインでLVupする夏合宿〜」にて制作されたWebアプリです．<br />
                                        友人と2人で開発を行い，私はバックエンドを担当しました．<br />
                                    </p>
                                </div>
                                <div className="PictureBox">
                                    <img src={alarm_png} />
                                </div>
                                <div className="techbox">
                                    <p>
                                        フロント:javaScript，JQuery<br />
                                        バックエンド:flask，Cloud API<br />
                                        インフラ:Heroku
                                    </p>
                                    <a href="https://hackson-yakiniku-flask.herokuapp.com/">実際のサイト</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default Product;