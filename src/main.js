var heartbeat = (timeInMilliSeconds)=>{
	var api ={}
	api.time = timeInMilliSeconds

	api.totalElapsedTime = 0;

	// Our time interval variable associated with this object
	api.interval = undefined;

	api.start = (callback)=>{
		api.interval = setInterval(()=>{
			api.totalElapsedTime += api.time
			callback()
		},api.time)
	}
	api.getElapsedTime = ()=>{
		return api.totalElapsedTime
	}

	api.stop = ()=>{
		clearInterval(api.interval)
	}

	return api;
}