// TODO importa því sem nota þarf
import { el, empty } from './lib/helpers.js';
import { fetchNews } from './lib/news.js';
import { createCategoryBackLink, fetchAndRenderLists, fetchAndRenderCategory } from './lib/ui.js';

/** Fjöldi frétta til að birta á forsíðu */
const CATEGORY_ITEMS_ON_FRONTPAGE = 5;

/** Vísun í <main> sem geymir allt efnið og við búum til element inn í */
const main = document.querySelector('main');


const allar = await fetchNews('allar');

const alltdotid = await fetchNews();

console.log(alltdotid[0]['id']);
console.log(alltdotid);

console.log(allar);

/**
main.appendChild(
  el('div', ...alltdotid[0]['id'].toString())
);
**/

alltdotid.forEach( obj => {
    main.appendChild(
        el(
          'div',
          el('h2', ...obj.title.toString())
      )
    )
  }
)
 /**
const div = document.querySelector('div');
**/

for ( let i = 0; i < CATEGORY_ITEMS_ON_FRONTPAGE; i++) {
  main.appendChild(
      el('p', allar['items'][i]['title'].toString())
  );
};


/**
 * Athugar útfrá url (`window.location`) hvað skal birta:
 * - `/` birtir yfirlit
 * - `/?category=X` birtir yfirlit fyrir flokk `X`
 */
function route () {
  // Athugum hvort það sé verið að biðja um category í URL, t.d.
  // /?category=menning

  // Ef svo er, birtum fréttir fyrir þann flokk

  // Annars birtum við „forsíðu“
}

/**
 * Sér um að taka við `popstate` atburð sem gerist þegar ýtt er á back takka í
 * vafra. Sjáum þá um að birta réttan skjá.
 */
window.onpopstate = () => {
  // TODO útfæra
};

// Í fyrsta skipti sem vefur er opnaður birtum við það sem beðið er um út frá URL
route();
