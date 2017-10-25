export function queryData(request) {
	return dispatch => {
		console.log("Pulling data!")
		var data = null;
		var response;
		var xhr = new XMLHttpRequest();
		xhr.withCredentials = true;

		xhr.addEventListener("readystatechange", (x) => {
		  if (x.readyState === x.DONE) {
		    console.log(x.currentTarget);
		    response = x.currentTarget.responseText;
		    // response = JSON.parse(response)
		    this.setState({responseData:response})
		  }
		});

		xhr.open("POST", "http://localhost:5000/datapull");
		xhr.setRequestHeader("content-type", "application/json");

		xhr.send(data);
		setTimeout(() => {
			dispatch({
				type:"QUERY_DATA",
				payload: responseText
			})
		}, 2000)
	}	
}