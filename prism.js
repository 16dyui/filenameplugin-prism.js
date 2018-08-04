/*custom file name*/
Prism.plugins.toolbar.registerButton('show-filename', function(env) {
	if(env.element.parentNode.getAttribute('data-file') == null) {
		return '';
	} else {
		elet = document.createElement('span');
		elet.textContent = env.element.parentNode.getAttribute('data-file');
		return elet;
	}
});
