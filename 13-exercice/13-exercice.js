function BouclerContinue() {
    for(var i=0; i<5; i++) {
        if(i == 2){ 
            continue;
        }
        document.write("<br> i est : "+i);
    }
}