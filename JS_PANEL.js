
document.addEventListener('DOMContentLoaded', function () {
    elementsWithOnClick.forEach(function (element) {element.style.userSelect = "none";});
    elementsWithOnInput.forEach(function (element) {
        element.style.userSelect = "none";});
    elementsWithOnChange.forEach(function (element) {
        element.style.userSelect = "none";
    });
    show_panel('panel-begin');

    setTimeout(function () {
        show_panel('panel-admin');
    }, 2500);

    document.getElementById('btn-darkmode').addEventListener('click', function () {
        toggleDarkMode();
    });
});

function show_panel(id) {
    var panels = document.getElementById('panel').children;
    for (var i = 0; i < panels.length; i++) {
        var section = panels[i];
        if (section.id == id) {
            section.classList.remove('hidden');
        } else {
            section.classList.add('hidden');
        }
    }
}

function toggleDarkMode() {
    var body = document.body;
    var logoImg = document.querySelector('img');

    // Kiểm tra nếu body đang có lớp 'dark-mode'
    if (body.classList.contains('dark-mode')) {
        body.classList.remove('dark-mode');
        body.classList.add('light-mode');
        logoImg.classList.toggle('inverted-color');
    } else {
        body.classList.remove('light-mode');
        body.classList.add('dark-mode');
        logoImg.classList.toggle('inverted-color');
    }
}
