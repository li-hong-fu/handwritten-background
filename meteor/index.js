const PAGE = {
    data: {
        list: 50,
        rightList: 20,
        width: document.body.offsetWidth,
    },
    init() {
        this.render()
    },
    render() {
        const box = document.getElementById('landing');
        const { list, rightList, width } = this.data;
        const rightWidth = width / 2;
        for (let i = 0; i < list; i++) {
            let rightNum = this.randomInteger(5, width);
            let right = parseInt(rightNum / width * 100);
            let delay = this.randomDecimal(0, 1);
            let duration = this.randomDecimal(1, 2);
            let opacity = this.randomDecimal(0.3, 0.6); // 下雨效果用这个
            let style = `right:${right}%;animation-delay:${delay}s;animation-duration:${duration}s;opacity:${opacity};`;
            let item = this.createdTag('span', { class: 'landing-item', style });
            box.append(item)
        }

        for (let i = 0; i < rightList; i++) {
            let rightNum = this.randomInteger(rightWidth, width);
            let left = parseInt(rightNum / width * 200);
            let delay = this.randomDecimal(0, 1);
            let duration = this.randomDecimal(1, 2);
            let opacity = this.randomDecimal(0.3, 0.6); // 下雨效果用这个
            let style = `left:${left}%;animation-delay:${delay}s;animation-duration:${duration}s;opacity:${opacity};`;
            let item = this.createdTag('span', { class: 'landing-item', style });
            box.append(item)
        }

    },


    /**
    * 创建普通标签函数
    * @param {string} tag 
    * @param {object} objAttr 
    * @returns 
    */
    createdTag(tag, objAttr) {
        let oTag = document.createElement(tag);
        for (let attr in objAttr) {
            oTag.setAttribute(attr, objAttr[attr])
        }
        return oTag;
    },
    /**
    * 随机整数
    * @param {Number} min 最小数
    * @param {Number} max 最大数
    * @returns {Number}
    */
    randomInteger(min, max) {
        let range = max - min;
        let rand = Math.random();
        return min + Math.round(rand * range);
    },
    /**
     * 随机小数(保留一位小数)
     * @returns {Number}
     */
    randomDecimal(min, max) {
        let range = max - min;
        let rand = Math.random();
        return min + Math.round(range * rand * 10) / 10;
    },
}

PAGE.init()