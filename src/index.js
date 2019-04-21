import _lodash from 'lodash';
import './css/index.css';
import myImgFile from './assets/images/timg.jpg';

function getComponent(ele) {
    // 异步加载js
    return import(/* webpackChunkName: "list" */ './js/list').then(rst => {
        const listEle= document.createElement('div');
        listEle.innerHTML= rst.default();
        ele.appendChild(listEle);
    }).catch(error => 'An error occurred while loading the component');
}

function component() {
    const element = document.createElement('div');
    const btn = document.createElement('button');

    // Lodash（目前通过一个 script 脚本引入）对于执行这一行是必需的
    // element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.innerHTML = "Hello World!";
    const myImg = new Image();
    myImg.src = myImgFile;
    element.appendChild(myImg);

    btn.innerHTML = '点我啊';
    btn.onclick = function() {
        getComponent(element);
    };
    element.appendChild(btn);

    return element;
}

document.body.appendChild(component());