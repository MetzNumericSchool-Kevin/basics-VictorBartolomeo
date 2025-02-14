//Définition de variables

const wizardName = "Archibald"
const storeName = "Valinor";
let stockHealthPotion = 10;
let costHealtPotion = 50
let isStoreOpen = false;
const localMoney = " 🪙"

//Affichage conditionnel
// if (isStoreOpen)
//     console.log("Bienvenue dans la boutique \"" + storeName + "\" Aventurier ! 🎉");
// else
//     console.log("La boutique \"" + storeName + "\" est fermée, revenez plus tard Aventurier ! 😴");

//Affichage conditionnel avec switch

// let menu = prompt("Bienvenue dans mon humble boutique Aventurier. Que veux-tu savoir ? 🤔\n" +
//     "1. Le nom de la boutique\n" +
//     "2. Le nom du Sorcier\n" +
//     "3. Le prix d'un potion de soin\n" +
//     "4. La quantité d'une potion de soin");
//
// switch (parseInt(menu)) { //initialement case "1", case "2", etc... mais j'ai parseInt comme demandé.
//     case 1:
//         console.log("Vous baissez les yeux et voyez le nom \"" + storeName + "\" inscrit sur le comptoir. Vous vous sentez honteux...")
//         break;
//     case 2:
//         console.log("Mon nom est " + wizardName + " mais tu peux m'appeler, archi-chauve.")
//         break;
//     case 3:
//         console.log(costHealtPotion + localMoney)
//         break;
//     case 4:
//         console.log("Stock de potions : " + stockHealthPotion)
//         break;
//     default:
//         console.log("Mh... Désolé aventurier, je ne comprends pas ce que tu souhaites. Refais ton choix ! 😕")
// }

//Calcul du prix total d'une commande de potion 🪙

// let buyPotions = prompt("Combien de potion souhaitez-vous acheter ?")
// if (buyPotions > stockHealthPotion) {
//     console.log("Il n'y a pas assez de potions en stock ! Cependant je peux te dire que cela t'aurai couté " + ((buyPotions * costHealtPotion) + localMoney))
// }
// if (buyPotions <= stockHealthPotion) {
//     console.log(buyPotions + " potions ? J'ai ça en stock ! Cela va te couter " + (buyPotions * costHealtPotion) + localMoney)
// } else {
//     console.log("À mon grand âge, je n'ai pas compris ce que tu as essayé de dire, articule s'il te plait !")
// }

//Bourse de l'Aventurier 💰

// let adventurerMoney = 250;
// let buyPotions = prompt("Combien de potion souhaitez-vous acheter ?")
// let spendedMoney = buyPotions * costHealtPotion
// if ((costHealtPotion * buyPotions) > adventurerMoney) {
//     console.log("Tu n'as pas assez d'argent pour m'acheter autant de potions...Il te manque encore " + ((costHealtPotion * buyPotions) - adventurerMoney) + localMoney);
// } else {
//     if (buyPotions > stockHealthPotion) {
//         console.log("Il n'y a pas assez de potions en stock ! Cependant je peux te dire que cela t'aurai couté " + ((buyPotions * costHealtPotion) + localMoney))
//     }
//     if (buyPotions <= stockHealthPotion) {
//         console.log(buyPotions + " potions ? J'ai ça en stock ! Cela va te couter " + (buyPotions * costHealtPotion) + localMoney)
//         adventurerMoney = adventurerMoney - spendedMoney;
//         console.log("Il te reste " + adventurerMoney + localMoney + " !");
//     }
// }

//Liste des potions

// let listPotions=["Health Potion","Mana Potion","Inn Potion"];
// console.log(listPotions);

//Affichage des potions

// console.log(listPotions[0]);
// console.log(listPotions[listPotions.length-1]);
// for (const listPotionsKey in listPotions) {
//     console.log("Nous avons de la \""+listPotions[listPotionsKey]+"\" !");
// }

//Ajout d'une nouvelle potion

// listPotions.push("Magical Potion");
// console.log(listPotions);

//Finaly, nope.

// listPotions.pop();
// console.log(listPotions);

//Rangeons les informations de la potion de soin dans un objet 🧹

let healthPotion = {Nom: "Health Potion", Prix: 50, Stock: 10}
console.log(healthPotion)

//Affichons les informations de la potion

console.log(healthPotion.Nom);
console.log(healthPotion["Prix"]);

//C'est l'heure de faire l'inventaire...

const inventory = [healthPotion = {Nom: "Health Potion", Prix: 50, Stock: 10},
    manaPotion = {Nom: "Mana Potion", Prix: 35, Stock: 8},
    innPotion = {Nom: "Inn Potion", Prix: 10, Stock: 25}
]
// inventory.push(healthPotion = {Nom: "Health Potion", Prix: 50, Stock: 10})
// inventory.push(manaPotion = {Nom: "Mana Potion", Prix: 35, Stock: 8})
// inventory.push(innPotion = {Nom: "Inn Potion", Prix: 10, Stock: 25})
console.log(inventory)

//Aventurier, regarde tout ce que je vends !

for (const inventoryKey in inventory) {
    console.log(inventory[inventoryKey].Nom)
    console.log(inventory[inventoryKey].Prix)
    console.log(inventory[inventoryKey].Stock)
}
console.log("Autre version :\n" +
    "\n")
//Alternate version
for (const inventoryKey in inventory) {
    for (const inventoryKeyKey in inventory[inventoryKey]) {
        console.log(inventory[inventoryKey][inventoryKeyKey])
    }
}