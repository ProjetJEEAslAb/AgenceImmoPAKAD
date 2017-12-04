//Creation du service de traduction
immoApp.config(function ($translateProvider) {

    $translateProvider.translations('fr', {

    	 BOUTON_LANG_FR:'FRANCAIS',
         BOUTON_LANG_ES:'ESPAGNOL',
         home:'Page Accueil',
         classes:'Classes Standards',
         afficher:'Afficher',
         ajouter:'Ajouter',
         modifier:'Modifier',
         supprimer:'Supprimer',
         rechercher:'Rechercher',
         location:'Locations',
         achat:'Achats',
         client:'Clients',
         proprietaire:'Proprietaires',
         visite:'Visites',
         contrat:'Contrats'
        
    });

    $translateProvider.translations('es', {

    	 BOUTON_LANG_FR:'FRANCES',
         BOUTON_LANG_ES:'ESPAÑOL',
         home:'Página Principal',
         classes:'Clases Estándar',
         afficher:'Visualizar',
         ajouter:'Añadir',
         modifier:'Modificar',
         supprimer:'Borrar',
         rechercher:'Buscar',
         location:'Alquileres',
         achat:'Adquisiciones',
         client:'Clientes',
         proprietaire:'Proprietarios',
         visite:'Visitas',
         contrat:'Contratos'
        

    });

    $translateProvider.preferredLanguage('fr')
})