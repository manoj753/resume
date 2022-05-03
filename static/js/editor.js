function format(command, value) {
    document.execCommand(command, false, value);
}
function formatFontSize(){
    document.execCommand('fontSize', false, document.getElementById('fontSize').value);
}
function formatFontName(){
    document.execCommand('fontName', false, document.getElementById('fontName').value);
}