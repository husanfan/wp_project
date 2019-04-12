import _lodash from 'lodash';
import './css/index.css';
import myImgFile from './assets/images/timg.jpg'

function component() {
    var element = document.createElement('div');

    // Lodash（目前通过一个 script 脚本引入）对于执行这一行是必需的
    // element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.innerHTML = "Hello World!";
    const myImg = new Image();
    myImg.src = myImgFile;
    element.appendChild(myImg);

    return element;
}

document.body.appendChild(component());