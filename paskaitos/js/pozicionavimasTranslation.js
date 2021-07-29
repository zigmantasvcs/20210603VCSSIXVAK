function doTranslations(language){
    let translation = getLanguageTranslations(language);

    // aprasysime vertimo logika
    //console.log(translation);

    // document.querySelectorAll("[translate-menu-main]")[0].innerText = translation.menu.main;
    // document.querySelectorAll("[translate-menu-main]")[1].innerText = translation.menu.main;
    // document.querySelectorAll("[translate-menu-services]").innerText = translation.menu.services;
    // document.querySelectorAll("[translate-menu-contact]").innerText = translation.menu.contact;
    // document.querySelectorAll("[translate-menu-partners]").innerText = translation.menu.partners;
    // document.querySelectorAll("[translate-menu-gallery]").innerText = translation.menu.gallery;

    doElementsTranslation(document.querySelectorAll("[translate-menu-main]"), translation.menu.main);
    doElementsTranslation(document.querySelectorAll("[translate-menu-services]"), translation.menu.services);
    doElementsTranslation(document.querySelectorAll("[translate-menu-contact]"), translation.menu.contact);
    doElementsTranslation(document.querySelectorAll("[translate-menu-partners]"), translation.menu.partners);
    doElementsTranslation(document.querySelectorAll("[translate-menu-gallery]"), translation.menu.gallery);
}

function doElementsTranslation(elements, text){
    for (let index = 0; index < elements.length; index++) {
        const element = elements[index];
        element.innerText = text;
    }
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