$(document).ready(function() {
    document.write('<br>*찍기 3단계<br>');
    for(let i=0; i < 5; i++) {
        for(let n=0; n <= i; n++) {
        document.write('\n');
        console.log('안');
        }
        for(let l=5; l >= i; l--) {
            document.write('*');
        }
        document.write('<br>');
        
        console.log('ㅇㅇ');
    }

    document.write('<br>*찍기 4단계<br>');

    for(let j=0; j < 5; j++) {
        for(let w=5; w > j; w--) {
            document.write('&nbsp;');
        }
        for(let m=-1; m < j; m++) {
            
            document.write('*');
        }
        document.write('<br>');
    }
});