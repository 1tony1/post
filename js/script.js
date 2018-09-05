window.onload = function() {

	var imgBox = document.getElementById('imgBox');
	var imgs = imgBox.getElementsByTagName('img');
	var content = document.getElementById('content');
	var contentItems = content.getElementsByClassName('content_item');

	for (var i = 0; i < imgs.length; i++) {

		imgs[i].setAttribute('pid', i);

		imgBox.onclick = function(e) {

			e = window.event || e;

			var currObj = e.target || e.srcElement;
			if (currObj.className == 'f1') {
				var pid = currObj.getAttribute('pid');
				for (var i = 0; i < imgs.length; i++) {
					imgs[i].className = 'f1';
					contentItems[i].style.display = 'none';
				}
				imgs[pid].className = 'f1 border';
				contentItems[pid].style.display = 'block';
			}

		}

	}

}