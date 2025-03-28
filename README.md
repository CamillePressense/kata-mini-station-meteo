# Kata 2 ADATECH SCHOOL

☀️ Mini-Station Météo

L'objectif de ce kata est de faire une mini-station météo qui donne la température actuelle dans une ville donnée !

## Objectifs pédagogiques

- Définir et expliquer les concepts de base de la programmation asynchrone (callbacks, promesses, async/await)
- Utiliser des callbacks pour gérer des opérations asynchrones
- Utiliser **`fetch`** pour effectuer des requêtes HTTP et gérer les promesses retournées
- Utiliser les mots-clés **`async`** et **`await`** pour écrire du code asynchrone plus lisible et maintenable
- Manipuler les réponses HTTP pour extraire les données retournées
- Expliquer la relation client / serveur dans le cadre de l’utilisation d’une API
- Construire des URL complètes avec les paramètres nécessaires (query parameters, path parameters).
- Gérer les réponses des API par la manipulation de JSON

## 💻  **Etape 1: Récupère le code source de base**

**Tu ne dois te concentrer que sur la partie Javascript pour ce kata !**

## 📍 **Etape 2: Récupérer les coordonnées de la ville**

En tant qu’utilisateur·ice:

- Je saisis une ville dans le champ texte
- Je clique sur le bouton “OK”

Je vois alors s’afficher  sur la page les coordonnées GPS de la ville 

Tu vas pouvoir récupérer ces informations avec **l'API de Geocoding de Open Street Map**. Pour une ville donnée, elle te retournera différentes informations dont les coordonnées GPS (propriétés **lat** et **lon**). 

## 🌤️ Etape 3: Affiche la température courante de la ville

En tant qu’utilisateur·ice:

- Je saisis une ville dans le champ texte
- Je clique sur le bouton “OK”

Je vois alors s’afficher  sur la page les coordonnées GPS **ET** la température actuelle de la ville. 

**Contrainte technique imposée**

Les deux appels d’API doivent se faire dans deux fonctions distinctes: `fetchCoordinates` et `fetchWeather` !
L’API “Météo” ne peut se déclencher que si l’API “Coordonnées GPS” a bien fait son travail …

Tu vas utiliser l’API Open-Météo pour récupérer les informations liées à la température. Elle prend en paramètre une *latitude* et une *longitude.* Tu es censé·e avoir une fonction faite à l’étape précédente qui te permet de récupérer ces infos 👀

## 🛠️ Etape 4 : Gère les erreurs

En tant qu’utilisateur·ice:

- Je saisis n’importe quoi dans le champ texte (ex: “DFGoiuretkjh”)
- Je clique sur le bouton “OK”

Je dois voir un message d’erreur “Ville non trouvée”. 

**Contrainte technique**: 

L’API “Weather” ne doit pas se déclencher puisque l’API Open Street Map n’a pas retourné de coordonnées saines. 

### Tu as fini ce kata et tu souhaites aller plus loin ?

- Affiche d'autres informations provenant de l'API : le taux d'humidité, la précipitation.
- Déploie ton application finie sur Github Pages.
- 💪🏼 Etape bonus et *un peu plus costaud* 👇🏼
    - Affiche les informations des précipitations ou des températures des 3 derniers jours par heure sur un graphique en utilisant [Chart.js](https://www.chartjs.org/docs/latest/getting-started/)
   

