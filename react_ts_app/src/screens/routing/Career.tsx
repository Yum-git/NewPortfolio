import React from "react";

const career_list = [
    {'title': 'インターン', 'company': '株式会社マインディア', 'time': '2020/10/01 ～ Today', 'sentence': 'データ分析のプロダクト開発を担当しています．\nPythonやAWSを利用しています．'},
    {'title': 'インターン', 'company': '株式会社ブレインパッド', 'time': '2020/08/17 ～ 2020/08/22', 'sentence': 'マッチングデータを評価するための可視化ツールの企画の立案から開発までを行いました．\n私はPython(Flask)を利用したバックエンド開発を担当しました．'},
    {'title': '研究室', 'company': 'ITソフトウェア開発研究室（ラシキアゼミ）', 'time': '2019/10/01 ～ 2022/03/31', 'sentence': '情報科学におけるIT分野の研究を行いつつ，工学に役立つソフトを開発する研究室に所属しています．'},
    {'title': '学生団体', 'company': 'ConvivialNet', 'time': '2019/05/01 ～ 2022/03/31', 'sentence': 'ネットワークサービスを学生に提供することを目指している学生団体です．\n2020/04/01よりプロジェクトリーダーを任されています．'},
    {'title': '学士課程(在学中)', 'company': '中京大学', 'time': '2018/04/01 ～ 2022/03/31', 'sentence': '情報工学の基礎やアルゴリズム，プログラミング言語などを学びました．'}];

const career_output = career_list.map((value, key) => {
    return (
         <div className="career-box">
            <div className="career-title">
                {value['title']}
            </div>
            <div className="career-company">
                {value['company']}
            </div>
            <div className="career-time">
                {value['time']}
            </div>
            <div className="career-sentence">
                {value['sentence']}
            </div>
        </div>
    );
});

class About extends React.Component {
    render() {
        return (
            <>
                <div id="career" className="main">
                    <p className="Paragrahsize">Career</p>
                    <div className="career-ticket-list">
                        <div className="career-ticket">
                            {career_output}
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default About;