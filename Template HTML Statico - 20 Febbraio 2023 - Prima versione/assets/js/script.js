/**
 * Qui abbiamo tutti i nostri script principali
 * 
 * Realizzato da Michele Mincone - 13/02/2023 - https://michelemincone.com - Codice OpenSource
 */

/**
 * Header Mobile Menu
 */
const siteHeader = document.querySelector('.site-header');
const hamburgerMenu = document.querySelector('.header__mobile_nav .mobile-menu-trigger');
const mobileMenu = document.querySelector('.site-header .header__menu_wrap');

hamburgerMenu.addEventListener('click', openMobileMenu);

function openMobileMenu() {
    mobileMenu.classList.toggle("show");
    siteHeader.classList.toggle("menu-mobile-active-header");
}

/**
 * Sticky Header
 */
if (window.innerWidth <= 1024 || window.innerWidth >= 1024) {
    window.addEventListener('scroll', listenForStickyHeader);

    function listenForStickyHeader() {
        if (window.pageYOffset >= 100) {
            siteHeader.classList.add("sticky-header-mode");
        } else {
            siteHeader.classList.remove("sticky-header-mode");
        }
    }
}

/**
 * Search Modal
 */
const searchIcon = document.querySelector('.site-header .header__search')
const searchModal = document.querySelector('.search-modal');
const closeSearchModalIcon = document.querySelector('.close-search-modal-icon-wrap');
const pageBody = document.querySelector('body');

searchIcon.addEventListener('click', openSearchModal);
closeSearchModalIcon.addEventListener('click', closeSearchModal);

function openSearchModal() {
    // Mostra popup
    searchModal.classList.add("show-modal");

    // Blocca overflow body
    pageBody.classList.add("hidden-overflow");
}

function closeSearchModal() {
    // Chiudi popup
    searchModal.classList.remove("show-modal");

    // Permeti l'overflow del body
    pageBody.classList.remove("hidden-overflow");
}

/**
 * Search Modal > Search Input Animations
 */
const searchInputLabel = document.querySelector('.search-modal #kinetic-form-label');
const searchInputElement = document.querySelector('.search-modal #search-bar');

searchInputElement.addEventListener('focus', inputFocusInAction);
searchInputElement.addEventListener('focusout', inputFocusOutAction)

function inputFocusInAction() {
    searchInputLabel.classList.add('form-label-focus');
}

function inputFocusOutAction() {
    if (searchInputElement.value === '') {
        searchInputLabel.classList.remove('form-label-focus');
    }
}