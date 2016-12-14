import Ember from 'ember';

export function bookmarkTitle([title, about]/*, hash*/) {
	let returnstr = title;
	if(about != null) {
		returnstr += ' - ' + about;
	}
  	return returnstr;
}

export default Ember.Helper.helper(bookmarkTitle);
