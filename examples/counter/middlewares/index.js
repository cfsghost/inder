export default function(context, state) {

	context.on('action.INCREMENT', async (state = 0) => {
		return state + 1;
	});

	context.on('action.DECREMENT', async (state = 0) => {
		return state - 1;
	});

	return 0;
};
