module.exports = {
	filter(array, searchText){

		console.log(array);
		var filteredArray = array;

		filteredArray = array.filter((element) => {
			var fieldOne = element.firstName.toLowerCase();
			var fieldTwo = element.lastName.toLowerCase();

			return searchText.length === 0 || fieldOne.indexOf(searchText) > -1 || fieldTwo.indexOf(searchText) > -1;
		});

		filteredArray.sort((a,b) => {

			if (a.id < b.id){
				return 1;
			}
			else if (a.id > b.id){
				return -1;
			}
			else{
				return 0;
			}

		});

		return filteredArray;
	},

	filterEvents(array, searchText){
		var filteredArray;

		filteredArray = array.filter((event) => {
			var eventName = event.name.toLowerCase();
			return searchText.length === 0 || eventName.indexOf(searchText) > -1;
		});

		filteredArray.sort((a,b) => {

			if (a.id < b.id){
				return 1;
			}
			else if (a.id > b.id){
				return -1;
			}
			else{
				return 0;
			}

		});

		return filteredArray;
	}
};
