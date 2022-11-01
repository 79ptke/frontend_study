$(document).ready(function() {
    for(let i=2; i<10; i++) {
        document.write(i + '단 <br>' );
        for(let n=1; n<10; n++) {
            document.write(i + 'X' + n + "=" + i*n + '<br>');
        }
    }
});