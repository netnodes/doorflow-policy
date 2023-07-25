function onPageLoad() {

  let cookieConsent = getCookieByName( 'cookieConsent' );
  updateCookieDecision(cookieConsent);

  document.querySelector('button.dark').addEventListener("click", accept);
  document.querySelector('button.light').addEventListener("click", decline);

  if( document.querySelector('button.review-cookie-decision') ) {
    document.querySelector('button.review-cookie-decision').addEventListener("click", reset);
  }

  if ( cookieConsent === 'OK' || cookieConsent === 'NotOK' ) {

    if ( cookieConsent === 'NotOK') {
      removeCookies();
    }

    document.querySelector( '.cookies' ).classList.add('hidden');

  } else {

    document.querySelector( '.cookies' ).classList.remove('hidden');

  }

}

function updateCookieDecision(decision) {

  let decisionText = "You have allowed us to monitor your activity on this site."

  if( decision === 'NotOK') {
    decisionText = "You have not allowed us to monitor your activity on this site."
  }

  if( document.querySelector( 'cookie-status' ) ) {
    console.log( decisionText )
    document.querySelector( '.cookie-status p' ).textContent = decisionText;
  }
}

function reset() {
  document.querySelector( '.cookies' ).classList.remove('hidden');
}

function accept() {
  updateCookieDecision('OK');
  document.querySelector( '.cookies' ).classList.add('hidden');
  document.cookie = 'cookieConsent=OK; expires=Thu, 31 Dec 2099 23:59:59 UTC; domain=doorflow.com; path=/';
}

function decline() {
  updateCookieDecision('NotOK');
  document.querySelector( '.cookies' ).classList.add('hidden');
  document.cookie = 'cookieConsent=NotOK; expires=Thu, 31 Dec 2099 23:59:59 UTC; domain=doorflow.com; path=/';
  removeCookies();
}

function getCookieByName(cookie) {
  // With thanks to w3schools.com
  let name = cookie + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for(let i = 0; i <ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

function getCookieNamesArray() {
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for(let i = 0; i <ca.length; i++) {
    let endOfName = ca[i].indexOf('=');
    if( endOfName > 0 ) {
      ca[i] = ca[i].substring( 0, endOfName ).trim();
    } else {
      ca[i] = '';
    }
  }
  return ca;
}

function removeCookies() {
  let cookieNames = getCookieNamesArray();
  const prefixes = ['_ga', '_gid', 'cp', 'callpage'];

  for (let i = 0; i < cookieNames.length; i++) {
    const cookieName = cookieNames[i];
    if (prefixes.some(prefix => cookieName.indexOf(prefix) === 0)) {
      document.cookie = cookieName + '=delete; expires=Sun, 1 Jan 2023 23:59:59 UTC; domain=doorflow.com; path=/;';
    }
  }

}

document.addEventListener("DOMContentLoaded", onPageLoad);