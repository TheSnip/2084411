function execute(operateur,a,b)
{
    if(typeof operateur != "string")
    {
        if(typeof operateur !="number")
        {
            return operateur(a,b);
        }
        else
        {
            return "Type d'operation inconnue";
        }
    }
    else
    {
        switch(operateur)
        {
            case "ADD":
                return a+b;
            case "SUB":
                return a-b;
            case "MUL":
                return a*b;
            default: 
            return "Nom d'operation inconnu";
        }
    }
}