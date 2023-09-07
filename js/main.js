const foo = document.getElementById('urlform') ;
const elFeatureUrlResults = document.querySelector('.feature-url__results');

foo.addEventListener('submit', function (evt) {
    evt.preventDefault(evt);
    elFeatureUrlResults.classList.add('feature-url__results--open');
});

const elJsUrlShortener = document.querySelector('.js-url-shortener');

elJsUrlShortener.addEventListener('click' , function (evt) {
    if (evt.target.matches('.feature-url__button')) {
        evt.target.textContent = 'Copied!';
        evt.target.classList.add('feature-url__button--copied');

        
        setTimeout( function ()  {
            evt.target.textContent = 'Copy';
            evt.target.classList.remove('feature-url__button--copied');
        }, 1000);
    };
    navigator.clipboard.writeText(evt.target.previousElementSibling.textContent);
});