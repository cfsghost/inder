import EventLoop from './eventloop';

class Inder extends EventLoop {
	constructor() {
		super();

		this.state = null;
	}

	inject(middlewares) {
		this.state = middlewares(this, this.state);
	}

	getState() {
		return this.state;
	}

	dispatch(data) {

		return new Promise(async (resolve, reject) => {

			this.state = await this.emit(data.type, this.state, data);

			resolve();

			this.emit('stateChanged', this.state);
		});
	}
}

export default Inder;
