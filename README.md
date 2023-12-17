# HRNet

HRNet est une application interne à l'entreprise WEALTH HEALTH permettant l'enregistrement de nouveaux employés ainsi que la visualisation de la liste globale des employés.

## Refonte en React

La base du code initial était constituée de plugins jQuery, ce qui entraînait de nombreux bugs. Afin d'améliorer la fiabilité et la maintenabilité du système, une refonte totale a été entreprise en utilisant React. La plupart des composants ont été créés de zéro, à l'exception du composant "DataTableComponent", qui a été développé en utilisant la bibliothèque "react-data-table-component". L'application utilise également la bibliothèque [@nairodp/modal](https://github.com/NairodP/Modal_Plugin) disponible sur npm [ici](https://www.npmjs.com/package/@nairodp/modal?activeTab=code).

## Style Moderne

Pour le rendu visuel, j'ai apporté des modifications pour moderniser l'interface sans altérer sa fonctionnalité. Le but était de rendre l'application visuellement plus agréable.

## Composant Personnalisé en attente d'implémentation d'une librairy

L'entièreté des composants hormis "DataTableComponent" ont été réalisé par moi-même.
L'un des composants gère actuellement la fenêtre modale de confirmation lors de l'enregistrement d'un nouvel employé, remplaçant ainsi le plugin jQuery initial "jquery-modal". Ce plugin va entièrement être converti en React et sera, une fois terminé, utilisé dans le projet. La version React de celui-ci sera disponible sur NPM Package une fois terminé.

## Contribution

Toutes les contributions sont les bienvenues. N'hésitez pas à signaler des problèmes, suggérer des améliorations au projet.
