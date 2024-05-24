function showCoords(evt) {
	var form = document.forms.form_coqrds;
	var parent_id = evt.target.parentNode.id;
	form.parentId.value = parent_id;
	form.pageXCoords.value = evt.pageX;
	form.pageYCoords.value = evt.pageY;
	form.layerXCoords.value = evt.pageX;
	form.layerYCoords.value = evt.pageY;
}