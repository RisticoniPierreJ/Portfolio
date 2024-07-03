// Fonction pour importer les Url de toutes les images du dossier spécifié
function getImageUrl(name) {
    return new URL(`../assets/images/icons/${name}`, import.meta.url).href;
}

export { getImageUrl };
