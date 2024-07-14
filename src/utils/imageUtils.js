// Fonctions pour importer les Url des images du dossier spécifié
function getIconUrl(name) {
    return new URL(`../assets/images/techIcons/${name}`, import.meta.url).href;
}

export { getIconUrl };

function getProjectCoverUrl(name) {
    return new URL(`../assets/images/projectCover/${name}`, import.meta.url)
        .href;
}

export { getProjectCoverUrl };

function getProjectFullpageUrl(name) {
    return new URL(`../assets/images/projectFullpage/${name}`, import.meta.url)
        .href;
}

export { getProjectFullpageUrl };

function getProjectLogoUrl(name) {
    return new URL(`../assets/images/projectLogo/${name}`, import.meta.url)
        .href;
}

export { getProjectLogoUrl };
