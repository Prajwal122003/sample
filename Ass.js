var links = document.querySelectorAll('.sidebar a');
var pages = document.querySelectorAll('.page');

for (var i = 0; i < links.length; i++) {
    links[i].addEventListener('click', function(e) {
        e.preventDefault();
        var targetId = this.getAttribute('href').substr(1);
        for (var j = 0; j < pages.length; j++) {
            if (pages[j].id === targetId) {
                pages[j].classList.add('active');
            } else {
                pages[j].classList.remove('active');
            }
        }
    });
}
