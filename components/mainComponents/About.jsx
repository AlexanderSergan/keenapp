About = React.createClass({


  render: () => {
    return   (<div>
                    <h2>About</h2>
                    <br />
                    <p>Hello, %username%!</p>
                    <p>This is a small pet project made by way of better understanding and
                    enchancing skills in <a href='https://facebook.github.io/react/'>
                    React</a> and <a href='https://www.meteor.com/'>Meteor</a>.</p>
                    <p>Sources on GitHub: <a href='https://github.com/AlexanderSergan/keenapp'>link</a> </p>
                    <p>List of libraries used in the app: </p>
                    <ul>
                      <li><a href='https://github.com/FezVrasta/bootstrap-material-design'>FezVrasta:bootstrap-material-design</a>, MIT</li>
                      <li><a href='https://github.com/255kb/md-snackbars/'>255kb:md-snackbars</a>, MIT</li>
                      <li><a href='https://github.com/ubilabs/geocomplete'>ubilabs:geocomplete</a>, MIT</li>
                      <li><a href='https://github.com/p-j/meteor-crypto-md5/'>jparker:crypto-md5</a>, BSD 3-Clause</li>
                      <li><a href='https://github.com/kadirahq/flow-router/'>kadirahq:flow-router</a>, MIT</li>
                    </ul>
                    <br />
                    {/**<pre>
                    888b     d8888888888888888888888888888888888 .d88888b. 8888888b.
8888b   d8888888           888    888       d88P" "Y88b888   Y88b
88888b.d88888888           888    888       888     888888    888
888Y88888P8888888888       888    8888888   888     888888   d88P
888 Y888P 888888           888    888       888     8888888888P"
888  Y8P  888888           888    888       888     888888 T88b
888   "   888888           888    888       Y88b. .d88P888  T88b
888       8888888888888    888    8888888888 "Y88888P" 888   T88b
             _                       _
            | |                     (_)
            | | ___  __ _ _ __ _ __  _ _ __   __ _
            | |/ _ \/ _` | '__| '_ \| | '_ \ / _` |
            | |  __/ (_| | |  | | | | | | | | (_| |
            |_|\___|\__,_|_|  |_| |_|_|_| |_|\__, |
                                              __/ |
                                             |___/
 _____ _                   _         _____
|  _  | |___ _ _ ___ ___ _| |___ ___|   __|___ ___ ___ ___ ___
|     | | -_|_'_| .'|   | . | -_|  _|__   | -_|  _| . | .'|   |
|__|__|_|___|_,_|__,|_|_|___|___|_| |_____|___|_| |_  |__,|_|_|
                                                  |___|
-----------------------------------------------------------------
                        ／ﾌﾌ ▔▔▔▔▔▔▔ム｀ヽ
                    / ノ) 　　　　　　　 　）ヽ　　　　　　　 　
                    / ｜　　( ͡° ͜ʖ ͡°）ノ⌒（ゝ._,ノ　　　　　
                    /　ﾉ⌒7⌒ヽーく　 ＼　／　　　　
                    丶＿ ノ ｡　　 ノ､　｡|/　　　　　　 　 　　　　
                    　　 `ヽ `ー-'_人`ーﾉ　　　　　　 　　
                    　　　 丶 ￣ _人'彡ﾉ

                    </pre>  **/}
                         </div>);
  }
});
