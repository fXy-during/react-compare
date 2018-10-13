module.exports = function compare (nextProps, thisProps, obj) {
    const keys = Object.keys(nextProps);
    let changeList = [];
    keys.forEach(prop => {
        const isType = typeof nextProps[prop];
        let hasChange = false;

        if (isType === "object") {
            // obj arr null
            hasChange =
                JSON.stringify(nextProps[prop]) !==
                JSON.stringify(thisProps[prop]);
        } else if (isType === "function") {
            // TODO
            // 函数类型待处理
        } else {
            // 值类型
            // string number undefined
            hasChange = nextProps[prop] !== thisProps[prop];
        }
        if (hasChange) {
            // 判断该字段是否注册过函数

            obj[prop] &&
                typeof obj[prop] === "function" &&
                obj[prop](nextProps[prop]);
            changeList.push(prop);
        }
    });
    // console.log("-----This turn props change list-----", changeList.join(" ,"));
}
