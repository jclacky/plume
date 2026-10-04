# Base de connaissances de Plume

Cette base, c'est **ce qu'on apprend à l'IA**. On ne « ré-entraîne » pas l'IA : on lui donne, à chaque correction, les fiches utiles de cette base, avec le texte de l'apprenant. Elle s'appuie dessus pour évaluer, corriger et expliquer. (Le nom technique est RAG : recherche + génération.)

## Règle d'or

On **lit** les sources, puis on **écrit nos propres fiches avec nos mots**, en citant la source en bas de chaque fiche. On ne copie jamais un document entier. Grâce à ça, la base nous appartient : on peut la publier en open source ou la vendre.

## Organisation

| Dossier | Contenu | Sert à | Sources principales |
|---|---|---|---|
| `niveaux/` | Une fiche par niveau (B1, B2, C1, C2) : ce qu'on sait faire, surtout à l'écrit, et ce que l'IA doit vérifier | Test de niveau, choix des sujets, barres de progression | Référentiels de cours (Alliance française), descripteurs CECRL |
| `grammaire/` | Une fiche par règle : la règle, des exemples, les pièges, le nom officiel | Explications de l'IA | Terminologie grammaticale (Eduscol) |
| `methodes/` | Construire une phrase, un paragraphe, un plan, une dissertation, un rapport, un compte rendu | Fiches « Méthodes » et correction de la structure | Guide de rédaction (HEC Montréal), méthodologie (A. Baillot) |
| `examens/` | Format des épreuves et grilles de notation | Test de niveau | Démos DELF / DALF |

## Format d'une fiche

Chaque fiche est un fichier Markdown court (une page au maximum), avec :
1. un titre et le niveau concerné ;
2. le contenu, écrit avec nos mots ;
3. une partie **« Pour l'IA »** : ce qu'elle doit vérifier ou faire ;
4. la **source** en bas.

## État

- [x] `niveaux/` : B1, B2, C1, C2 (première version)
- [ ] `grammaire/`
- [ ] `methodes/`
- [ ] `examens/`
