import _lodash from 'lodash';
import './css/index.css';
import myImgFile from './assets/images/timg.jpg';
import print from './print';

function component() {
    var element = document.createElement('div');
    var btn = document.createElement('button');

    // Lodash（目前通过一个 script 脚本引入）对于执行这一行是必需的
    // element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.innerHTML = "Hello World!";
    const myImg = new Image();
    myImg.src = myImgFile;
    element.appendChild(myImg);

    btn.innerHTML = '点我啊';
    btn.onclick = print;
    element.appendChild(btn);

    return element;
}

document.body.appendChild(component());