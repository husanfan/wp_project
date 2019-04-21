export default function list() {
    const listArr = [1, 2, 3];
    const listStr = listArr.reduce((pre, val, index) => {
        const cur = "<div>" + val + "<div/>";
        return index > 0 ? pre + cur : cur;
    }, listArr[0])
    return listStr;
}