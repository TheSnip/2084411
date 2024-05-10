function createItem(txt){
    return "<li>"+txt+"</li>";
}

function createList(tableau){
    return "<ul>"+createItem(tableau[0])+createItem(tableau[1]+createItem(tableau[2])+createItem(tableau[3]+"</ul>"))
}