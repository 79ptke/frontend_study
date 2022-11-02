$(document).ready(function() {
    document.write('<br>*찍기 1단계<br>');
    for(let i=0; i < 5; i++) {
        for(let n=0; n < 5; n++) {
            document.write('*');
        }
        document.write('<br>');
    }

    document.write('<br>*찍기 2단계<br>');

    for(let j=0; j < 5; j++) {
        for(let m=0; m <= j; m++) {
            document.write('*');
        }
        document.write('<br>');
    }
});