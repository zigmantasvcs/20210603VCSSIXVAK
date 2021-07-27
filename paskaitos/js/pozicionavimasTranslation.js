function doTranslations(language){
    let translation = getLanguageTranslations(language);

    // aprasysime vertimo logika
    //console.log(translation);

    document.querySelector("[translate-menu-main]").innerText = translation.menu.main;
    document.querySelector("[translate-menu-services]").innerText = translation.menu.services;
    document.querySelector("[translate-menu-contact]").innerText = translation.menu.contact;
    document.querySelector("[translate-menu-partners]").innerText = translation.menu.partners;
    document.querySelector("[translate-menu-gallery]").innerText = translation.menu.gallery;
}

function getLanguageTranslations(language){
    let translations = {
        en: {
            menu: {
                main: "Title",
                services: "Services",
                contact: "Contact us",
                partners: "Partners",
                gallery: "Gallery"
            },
            footer: {
                anything: "Anything"
            }
        },
        lt: {
            menu:{
                main: "Pagrindinis",
                services: "Paslaugos",
                contact: "Susisiekite",
                partners: "Partneriai",
                gallery: "Galerija"
            },
            footer: {
                anything: "Belekas"
            }
        }
    };

    return translations[language];
}