
class EventScheduler {
	constructor() {
		this.listeners = [];
	}

	addListener(listener) {
		this.listeners.push(listener);
	}

	async emit(state, args) {
		var newState = state;

		for (var index in this.listeners) {
			var listener = this.listeners[index];

			newState = await listener(newState);
		}

		return newState;
	}
}

class EventLoop {

	constructor() {
		this.events = {};
	}

	on(eventName, handler) {
		var scheduler = this.events[eventName] || null;

		if (!scheduler) {
			this.events[eventName] = scheduler = new EventScheduler();
		}

		scheduler.addListener(handler);
	}

	emit(eventName, state, ...args) {
		var scheduler = this.events[eventName] || null;

		return new Promise(async (resolve, reject) => {
			if (!scheduler)
				return resolve();

			var newState = await scheduler.emit(state, args);

			resolve(newState);
		});
	}
}

export default EventLoop;
