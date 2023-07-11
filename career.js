function toggleContent(contentId) {
    var contentElement = document.getElementById('content' + contentId);
    if (contentElement.style.display === 'none') {
      contentElement.style.display = 'block';
    } else {
      contentElement.style.display = 'none';
    }
  }
  
  var subheadings = document.getElementsByClassName('subheading');
  for (var i = 0; i < subheadings.length; i++) {
    subheadings[i].addEventListener('click', function() {
      var contentElement = this.nextElementSibling;
      if (contentElement.style.display === 'none') {
        contentElement.style.display = 'block';
      } else {
        contentElement.style.display = 'none';
      }
    });
  }
  