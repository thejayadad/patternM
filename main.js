

for (let i = 0; i<6; i++){
    for (let j = 0; j<7; j++){
        if( j==0 || j==6 || (i==j || i+j==6) && i<4){
            document.write("X")
        } else {
            document.write("&nbsp ");
        }

    }
    document.write("<br/>")

}