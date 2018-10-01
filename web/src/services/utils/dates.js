
import moment 				from 'moment';

export default {

	getHumanDate(date) {
		return moment(date, 'YYYY-MM-DD').format('DD/MM/YYYY');
	},

	  
}
