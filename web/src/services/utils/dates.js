
import moment 				from 'moment';

export default {

	getHumanDate(date) {
		return moment(date, 'YYYY-MM-DD').format('DD/MM/YYYY');
	},


	frontEndDateFormat (date) {
		return moment(date, 'YYYY-MM-DD').format('DD/MM/YYYY');
	},

	backEndDateFormat (date) {
		return moment(date, 'DD/MM/YYYY').format('YYYY-MM-DD').toISOString();
	}
	  
}
