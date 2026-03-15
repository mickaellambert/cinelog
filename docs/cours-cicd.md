# Cours — CI/CD

**Durée :** 16h00 – 17h00
**Niveau :** Découverte

---

## Slide 1 — Titre

**CI/CD**
*Ne plus jamais livrer du code cassé sans le savoir*

---

## Slide 2 — Le problème sans CI/CD

Imagine cette situation :

> Trois développeurs travaillent sur le même projet.
> Chacun code dans son coin pendant 3 jours.
> Vendredi après-midi, ils mettent tout en commun.
> Ça marche sur la machine de chacun.
> Ça ne marche plus du tout ensemble.

C'est ce qu'on appelle **l'enfer de l'intégration** — et c'était le quotidien avant CI/CD.

Les causes les plus fréquentes :
- Un développeur a oublié de mettre à jour une dépendance
- Deux développeurs ont modifié le même fichier différemment
- Le code passe les tests en local mais pas sur la machine des autres
- Un bug introduit il y a 3 jours n'est découvert qu'au moment de livrer

> **Le problème n'est pas le code. C'est l'attente.**
> Plus on attend avant d'intégrer, plus les conflits s'accumulent et plus ils coûtent cher à résoudre.

---

## Slide 3 — C'est quoi la CI ?

**CI = Intégration Continue** *(Continuous Integration)*

L'idée est simple : **intégrer son code le plus souvent possible** — idéalement plusieurs fois par jour — et vérifier automatiquement à chaque fois que rien n'est cassé.

**Analogie :**
Imagine que tu cuisines un plat avec quelqu'un d'autre.
- **Sans CI :** chacun prépare sa moitié dans son coin, on assemble à la fin, et on découvre que les saveurs ne vont pas ensemble.
- **Avec CI :** on goûte ensemble toutes les 10 minutes. Les problèmes sont détectés et corrigés immédiatement, quand c'est encore simple.

**Concrètement, la CI c'est :**
1. Un développeur pousse son code sur le dépôt
2. Automatiquement : le projet se build, les tests tournent
3. Si quelque chose casse → alerte immédiate, avant que ça parte en production
4. Si tout passe → le code est validé et prêt à être livré

> La CI ne remplace pas la revue de code. Elle garantit que le code *fonctionne* avant même que quelqu'un le lise.

---

## Slide 4 — C'est quoi le CD ?

**CD = Livraison Continue** *(Continuous Delivery)*

Si la CI vérifie que le code *fonctionne*, la livraison continue garantit que le code est **toujours dans un état prêt à être livré** en production.

**La distinction importante :**

| | Ce que ça fait |
|---|---|
| **Intégration Continue (CI)** | Build + tests automatiques à chaque push |
| **Livraison Continue (CD)** | Le code validé est automatiquement *prêt* à partir en production |
| **Déploiement Continu** | Le code validé *part* automatiquement en production, sans intervention humaine |

En livraison continue, **un humain décide encore quand livrer** — mais le code est toujours prêt. C'est le bouton vert qu'on peut appuyer à tout moment avec confiance.

> Pour la plupart des équipes débutantes, la livraison continue est la bonne cible.
> Le déploiement entièrement automatique demande une confiance totale dans sa suite de tests.

---

## Slide 5 — Le pipeline — vue d'ensemble

Un **pipeline CI/CD** c'est une suite d'étapes qui s'enchaînent automatiquement après chaque push.

```
  Push du code
      │
      ▼
  ┌─────────┐
  │  Build  │  → Le projet compile-t-il sans erreur ?
  └────┬────┘
       │ ✅
       ▼
  ┌─────────┐
  │  Tests  │  → Les tests unitaires, d'intégration passent-ils ?
  └────┬────┘
       │ ✅
       ▼
  ┌──────────────┐
  │   Livraison  │  → Le code est prêt. Un humain peut déployer.
  └──────────────┘

  Si une étape échoue → le pipeline s'arrête et alerte l'équipe.
```

**La règle d'or :** si le pipeline est rouge, corriger devient la priorité absolue de l'équipe. Personne ne merge tant que c'est cassé.

---

## Slide 6 — GitHub Actions — l'outil

**Pourquoi GitHub Actions ?**
- Intégré directement dans GitHub — pas de service externe à configurer
- Gratuit pour les projets publics et généreux pour les projets privés
- Utilisé par des milliers d'équipes en production
- La syntaxe est lisible sans être expert

**Comment ça fonctionne ?**
On place un fichier de configuration dans le dépôt :

```
mon-projet/
└── .github/
    └── workflows/
        └── ci.yml   ← c'est ici que tout se passe
```

GitHub lit ce fichier et exécute automatiquement les instructions qu'il contient à chaque push.

> Les autres outils populaires : GitLab CI, CircleCI, Jenkins.
> La syntaxe change, le concept est identique.

---

## Slide 7 — Anatomie d'un fichier workflow

Voici un workflow CI typique pour un projet JavaScript. On le lit ensemble, ligne par ligne.

```yaml
name: CI                          # Nom affiché dans l'interface GitHub

on:
  push:                           # Se déclenche à chaque push...
    branches: [main]              # ...uniquement sur la branche main
  pull_request:                   # ...et à chaque Pull Request
    branches: [main]

jobs:
  test:                           # Nom du job
    runs-on: ubuntu-latest        # Sur quelle machine tourner

    steps:
      - name: Récupérer le code
        uses: actions/checkout@v4       # Action officielle : clone le repo

      - name: Installer Node.js
        uses: actions/setup-node@v4
        with:
          node-version: 20

      - name: Installer les dépendances
        run: npm install                # Commande shell classique

      - name: Lancer les tests
        run: npm test                   # Si les tests échouent → pipeline rouge
```

**Ce que ce fichier dit en français :**
> *"À chaque push sur main ou chaque Pull Request vers main, récupère le code, installe les dépendances et lance les tests. Si les tests échouent, signale-le."*

---

## Slide 8 — Ce que CI/CD change dans le quotidien

**Avant CI/CD :**
- On teste en local — mais pas forcément tous les tests, pas forcément dans le bon ordre
- On livre en croisant les doigts
- Les bugs de régression sont découverts par les utilisateurs
- Le vendredi soir, personne ne veut merger

**Après CI/CD :**
- Chaque push est validé — automatiquement, sur une machine neutre
- On sait en 2 minutes si le code est sain
- Les bugs de régression sont détectés avant de partir en production
- Le pipeline vert = permission de merger avec confiance

**Ce que ça force à faire bien :**
- Écrire des tests — sans tests, le pipeline ne sert à rien
- Faire des petits commits fréquents — un gros commit qui casse tout est plus difficile à déboguer
- Garder le build rapide — un pipeline qui prend 30 minutes, personne ne le surveille

---

## Slide 9 — Les limites et les pièges

**Piège 1 — Le pipeline passe, mais le bug est en prod**

Un pipeline vert ne signifie pas que le code est correct.
Il signifie que le code passe *les tests qu'on a écrits*.
Si les tests ne couvrent pas un cas, le pipeline ne le verra pas.

> CI/CD est aussi puissant que ta suite de tests. Pas plus.

---

**Piège 2 — La fausse sécurité**

> *"Le pipeline est vert, donc je peux merger sans lire le code."*

Le pipeline vérifie le comportement fonctionnel. Il ne vérifie pas la lisibilité, la sécurité, les performances, ou les décisions d'architecture. La revue de code reste indispensable.

---

**Piège 3 — Le pipeline lent**

Un pipeline qui prend 20 minutes, c'est un pipeline qu'on finit par ignorer.
Si les tests sont trop lents, les développeurs arrêtent d'attendre le résultat avant de continuer à travailler.

> Objectif : un pipeline CI sous 5 minutes. Au-delà, on réfléchit à optimiser.

---

## Slide 10 — Conclusion (1/2)

**Ce qu'il faut retenir**

- **CI** = vérifier automatiquement que le code fonctionne à chaque push
- **CD** = garantir que le code est toujours prêt à être livré
- Le pipeline s'arrête dès qu'une étape échoue — réparer devient la priorité
- CI/CD est aussi fiable que les tests qu'il exécute — sans tests, c'est une coquille vide
- GitHub Actions permet de mettre ça en place en quelques dizaines de lignes

---

## Slide 11 — Conclusion (2/2)

**La question à se poser avant de merger**

> *"Est-ce que le pipeline est vert ?"*

Si oui → le code compile, les tests passent, la livraison est possible.
Si non → on corrige avant de faire autre chose.

C'est simple. C'est mécanique. Et c'est exactement pour ça que ça marche.

> CI/CD ne remplace pas le jugement humain.
> Il libère le jugement humain des vérifications répétitives
> pour le concentrer sur ce qui compte vraiment : la qualité du code.
