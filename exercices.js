//Définition de variables

const wizardName="Archibald"
const storeName = "Valinor";
let stockHealthPotion = 10;
let costHealtPotion = 50
let isStoreOpen = false;
const localMoney="🪙"

//Affichage conditionnel
if (isStoreOpen)
console.log("Bienvenue dans la boutique \"" + storeName + "\" Aventurier ! 🎉");
else
console.log("La boutique \""+ storeName+ "\" est fermée, revenez plus tard Aventurier ! 😴");

//Affichage conditionnel avec switch

let menu=prompt("Bienvenue dans mon humble boutique Aventurier. Que veux-tu savoir ? 🤔\n" +
    "1. Le nom de la boutique\n" +
    "2. Le nom du Sorcier\n" +
    "3. Le prix d'un potion de soin\n" +
    "4. La quantité d'une potion de soin");

switch (parseInt(menu)) { //initialement case "1", case "2", etc... mais j'ai parseInt comme demandé.
    case 1:
        console.log("Vous baissez les yeux et voyez le nom \""+storeName+"\" inscrit sur le comptoir. Vous vous sentez honteux...")
        break;
    case 2:
        console.log("Mon nom est "+wizardName+" mais tu peux m'appeler, archi-chauve.")
        break;
    case 3:
        console.log(costHealtPotion+localMoney)
        break;
    case 4:
        console.log("Stock de potions : " +stockHealthPotion)
        break;
    default:
        console.log("Mh... Désolé aventurier, je ne comprends pas ce que tu souhaites. Refais ton choix ! 😕")
}
