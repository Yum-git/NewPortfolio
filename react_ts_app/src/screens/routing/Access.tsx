import React from "react";

class Access extends React.Component {
    render() {
        return (
            <div>
                <>
                    <div id="access" className="main">
                        <p className="Paragrahsize">Access</p>
                        <p>
                            連絡先は下記の通りです．
                        </p>
                        <div className="BoxIn">
                            <div className="BoxFourDiv">
                                <div className="skillbox">
                                    <h2>
                                        Gmail
                                    </h2>
                                    <i className="fas fa-envelope fa-9x"></i>
                                    <p>
                                        yzk.yuma@gmail.com
                                    </p>
                                </div>
                                <div className="skillbox">
                                    <h2>
                                        GitHub
                                    </h2>
                                    <a href="https://github.com/Yum-git">
                                        <i className="fab fa-github-square fa-9x"></i>
                                    </a>
                                    <p>
                                        Yum-git
                                    </p>
                                </div>
                                <div className="skillbox">
                                    <h2>
                                        Twitter
                                    </h2>
                                    <a href="https://twitter.com/yuma_1999_">
                                        <i className="fab fa-twitter fa-9x"></i>
                                    </a>
                                    <p>
                                        @yuma_1999_
                                    </p>
                                </div>
                                <div className="skillbox">
                                    <h2>
                                        blog
                                    </h2>
                                    <a href="https://yzk-yzk-yzk.hatenablog.com/">
                                        <i className="fas fa-blog fa-9x"></i>
                                    </a>
                                    <p>
                                        yzk_yzk_yzk’s blog
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            </div>
        );
    }
}

export default Access;