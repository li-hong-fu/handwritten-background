const PAGE = {
    // 数据集
    data: {
        bodyHeight: document.body.offsetHeight, // body高
        bodyWidth: document.body.offsetWidth, // body宽
        hgrid: 5,   // 横杆
        vgrid: 9,   // 竖杠
        hgArr: [],
        vgArr: [],
    },
    // 初始函数
    init() {
        this.render();
    },

    // 渲染方法
    render() {
        const box = document.getElementById('landing');
        const hgrid = this.getHgrid(); // 获取横杠
        const vgrid = this.getVgrid(); // 获取竖杠
        const cross = this.getCross(); //获取交叉点

        box.append(hgrid, vgrid, cross)
    },

    // 生成横杆
    getHgrid() {
        let box = this.createdTag('div', { 'class': 'hgrid-box' });
        let { bodyHeight, hgrid, hgArr } = this.data;
        let num = this.getNum(bodyHeight, hgrid, 3.2);


        for (let i = 0; i < hgrid; i++) {
            let top = parseInt(num * (i + 1))
            let item = this.createdTag('p', {
                class: `hgrid-item hgrid_${i + 1}`,
                style: `top:${top}%;animation:hgrid-${i + 1} 3s linear 1`
            });
            hgArr.push(top)
            box.append(item)
        }


        return box;

    },
    // 生成横杆
    getVgrid() {
        let box = this.createdTag('div', { 'class': 'vgrid-box' });
        let { bodyWidth, vgrid, vgArr } = this.data
        let num = this.getNum(bodyWidth, vgrid, 1)

        for (let i = 0; i < vgrid; i++) {
            let left = parseInt(num) * (i + 1);
            let item = this.createdTag('p', {
                class: `vgrid-item vgrid_${i + 1}`,
                style: `left:${left}%;`
            });
            vgArr.push(left)
            box.append(item)
        }

        return box;

    },
    // 生成交叉点
    getCross() {
        let box = this.createdTag('div', { 'class': 'cross-box' });
        let { hgArr, vgArr } = this.data
        let crossItem = []
        vgArr.filter((item, index) => {
            let items = []
            if (index % 2 === 0) {
                hgArr.filter((newItem, newIndex) => {
                    if (newIndex % 2 === 0) items.push([item, newItem])
                })
            } else {
                hgArr.filter((newItem, newIndex) => {
                    if (newIndex % 2 !== 0) items.push([item, newItem])
                })
            }
            crossItem.push(items)
        })

        let arr = [].concat(...crossItem);
        for (let i = 0; i < arr.length; i++) {
            let item = this.createdTag('p', {
                class: `cross-item cross_${i + 1}`,
                style: `left:${arr[i][0]}%;top:${arr[i][1]}%`
            });
            box.append(item)
        }

        return box;

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

    getNum(m, n, num) {
        return m / n / m * 100 - num
    }
}

PAGE.init()