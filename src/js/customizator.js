export default class Customizator {
    constructor() {
        this.btnBlock = document.createElement('div');
        this.colorPicker = document.createElement('input');

        this.btnBlock.addEventListener('click', (e) => this.onScaleChange(e));
        this.colorPicker.addEventListener('input', (e) => this.onColorChange(e));
    }

    onScaleChange(e) {
        let scale;
        const body = document.querySelector('body');

        if (e.target.value) {
            scale = +e.target.value.replace(/X/g, '');
        }

        function recursy(element) {
            element.childNodes.forEach(node => {
                if (node.nodeName === '#text' && node.nodeValue.replace(/\s+/g, '').length > 0) {

                    if (!node.parentNode.getAttribute('data-fz')) {
                        let nodeFzStyles = window.getComputedStyle(node.parentNode, null).fontSize;

                        node.parentNode.setAttribute('data-fz', +nodeFzStyles.replace(/px/g, ''));
                        node.parentNode.style.fontSize = node.parentNode.getAttribute('data-fz') * scale + 'px';
                    } else {
                        node.parentNode.style.fontSize = node.parentNode.getAttribute('data-fz') * scale + 'px';
                    }

                } else {
                    recursy(node);
                }
            });
        }

        recursy(body);
    }

    onColorChange(e) {
        const body = document.querySelector('body');
        body.style.backgroundColor = e.target.value;
    
        console.log(e.target.value);
    }

    injectStyle() {
        const style = document.createElement('style');
        style.innerHTML = `
        .panel {
            display: flex;
            justify-content: space-around;
            align-items: center;
            position: fixed;
            top: 10px;
            right: 0;
            border: 1px solid rgba(0,0,0, .2);
            box-shadow: 0 0 20px rgba(0,0,0, .5);
            width: 300px;
            height: 60px;
            background-color: #fff;
        }
        
        .scale {
            display: flex;
            justify-content: space-around;
            align-items: center;
            width: 100px;
            height: 40px;    
        }

        .scale_btn {
            display: block;
            width: 40px;
            height: 40px;
            border: 1px solid rgba(0,0,0, .2);
            border-radius: 4px;
            font-size: 15px;
            transition: opacity .15s ease;
        }
        .scale_btn:hover {            
            background-color: rgba(0, 0, 0, .2);
        }
        
        .color {
            width: 40px;
            height: 40px;
        }        
        `;

        document.querySelector('head').appendChild(style);
    }

    render() {
        this.injectStyle();

        let scaleInputS = document.createElement('input'),
            scaleInputM = document.createElement('input'),
            panel = document.createElement('div');

        panel.append(this.btnBlock, this.colorPicker);

        scaleInputS.classList.add('scale_btn');
        scaleInputM.classList.add('scale_btn');
        this.btnBlock.classList.add('scale');
        this.colorPicker.classList.add('color');

        scaleInputS.setAttribute('type', 'button');
        scaleInputM.setAttribute('type', 'button');
        scaleInputS.setAttribute('value', '1X');
        scaleInputM.setAttribute('value', '1.5X');
        this.colorPicker.setAttribute('type', 'color');
        this.colorPicker.setAttribute('value', '#ffffff');

        this.btnBlock.append(scaleInputS, scaleInputM);

        panel.classList.add('panel');

        document.querySelector('body').append(panel);
    }
}
