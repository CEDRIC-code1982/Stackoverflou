# Stackoverflou

## Etape 1 : création du back-end

1. Création du serveur 
2. Création des models et routes **utilisateur** : register et log in (jsonwebtoken)
3. Création des models et routes **topics** : en CRUD
4. Création des models et routes **messages** : en CRUD 
5. Création d’une route vérifiant la validation d’un token

**Structure des données**

- utilisateur : id, firstname, lastname, nickname, email, password, creationDate
- topics : id, title, description, user_id, creationDate
- message :  id, content, user_id, topic_id, creationDate

## Etape 2 : création du front-end (part 1)

1. Installation du projet React 
2. Création des pages register, log in, log out  
3. Création du système de connexion avec Redux 
4. Création d’un HOC, vérification du token

npm init pour initiliser le projet 
npm i node-dev
npm install dotenv
npm install express 