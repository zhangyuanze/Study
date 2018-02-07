		function getDaysInMonth(year, month) {
			month = parseInt(month, 10);
			var temp = new Date(year, month, 0);
			return temp.getDate();
		}
