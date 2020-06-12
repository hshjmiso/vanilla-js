class sample {
	constructor(props) {
		this.initProperty();
		this.mergeFunc();
		Object.keys(props).forEach(key => {
			this[key] = props[key];
		});

		this.init();
	}

	initProperty() {
		this.vm = null;
		this.dom = null;
	}

	mergeFunc() {
		// 모듈메서드 연결
		// Object.assign(this, sampleMouseEvent);
	}

	init() {
		this.initSizeProps();
		this.initDataProps();
		this.initCanvas();
	}

	initSizeProps() {
		this.domWidth = this.getWidth();
		this.domHeight = this.getHeight();
	}

	getWidth() {
		return this.dom.clientWidth || this.dom.width;
	}

	getHeight() {
		return this.dom.clientHeight || this.dom.height;
	}

	initDataProps() {}

	initCanvas() {
		this.sampleBG = document.createElement('canvas');
		this.ctxBG = this.sampleBG.getContext('2d');
		this.sampleBG.className = 'sampleBG';

		this.initCanvasSize();
		this.initCanvasEvent();

		this.dom.appendChild(this.sampleBG);
	}

	initCanvasSize() {
		this.sampleBG.setAttribute('width', this.domWidth);
		this.sampleBG.setAttribute('height', this.domHeight);
		this.sampleBG.setAttribute('style', 'position:absolute; top:0px; left:0px;');
	}

	initCanvasEvent() {
		// this.killEvent();
		// this.createMouseEvents();
	}

	draw() {}

	redraw() {}

	clearCtx(ctx, canvas) {
		ctx.clearRect(0, 0, canvas.width, canvas.height);
	}

	resize() {
		this.initSizeProps();
		this.initCanvasSize();
	}
}

export default sample;