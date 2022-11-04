$(document).ready(function() {
    document.write('<br>*찍기 5단계<br>');

    for(let j=0; j < 5; j++) {
        for(let w=5; w > j; w--) {
            document.write('&nbsp;');
        }
        for(let m=-1; m < j; m++) {
            
            document.write('*');
        }
        for(let i=0; i<=j; i++) {
            document.write('*');
        }
        document.write('<br>');
    }

    
    document.write('<br>*찍기 6단계<br>');
    for(let j=0; j < 5; j++) {
        for(let w=5; w > j; w--) {
            document.write('&nbsp;');
        }
        for(let m=-1; m < j; m++) {
            
            document.write('*');
        }
        for(let i=0; i<=j; i++) {
            document.write('*');
        }
        document.write('<br>');
    }
    for(let i=0; i < 5; i++) {
        for(let n=0; n <= i; n++) {
        document.write('&nbsp;');
        }
        for(let l=4; l >= i; l--) {
            document.write('*');
        }
        for(let f=4; f >= i; f--) {
            document.write('*');
        }
        
        document.write('<br>');
        // for(let w=5; w > i; w--) {
        //     document.write('&nbsp;');
        // }
        // for(let m=-1; m < i; m++) {
            
        //     document.write('*');
        // }
        // document.write('<br>');
    }

});