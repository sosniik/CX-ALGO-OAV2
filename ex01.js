function tri(tab){
    var changed;
    do{
        changed = false;
        for(var i=0; i < tab.length-1; i++) {
            if(tab[i] > tab[i+1]) {
                var tmp = tab[i];
                tab[i] = tab[i+1];
                tab[i+1] = tmp;
                changed = true;
            }
        }
    } while(changed);
}

var tab = [6, 9, 3, 15, 2, 17, 1];
tri(tab);
console.log(tab);
