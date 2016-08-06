module.exports = {
	filter(array, searchText){

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
	}
};
