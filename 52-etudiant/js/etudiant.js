const etudiants = [
    { id: 12, name: 'Martin' },
    { id: 20, name: 'Pierre' },
    { id: 15, name: 'Julie' },
    { id: 32, name: 'Patrick' },
    { id: 43, name: 'Claude' },
    { id: 13, name: 'Judith' }
]

const resultats = [
    { id: 20, total: 56 },
    { id: 13, total: 34 },
    { id: 43, total: 98 },
    { id: 50, total: 67 },
    { id: 67, total: 90 },
    { id: 15, total: 65 },
    { id: 23, total: 78 },
    { id: 70, total: 88 },
    { id: 88, total: 95 }
]

function resultat(id){
    for(var i=0;i<resultats.length;i++)
    {
        if(id==resultats[i].id)
        {
            return resultats[i].total;
        }
    }
    return 0;
}

function AfficherTableau()
{
    for(var i=0; i<etudiants.length;i++)
        {
            document.write("<tr> <td>"+etudiants[i].id+"</td> <td>"+etudiants[i].name+"</td> <td>"+resultat(etudiants[i].id)+"</td> </tr>");
        }
}
AfficherTableau();