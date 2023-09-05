const foo = document.getElementById('urlform') ;
const elFeatureUrlResults = document.querySelector('.feature-url__results');

foo.addEventListener('submit', function (evt) {
    evt.preventDefault(evt);

    elFeatureUrlResults.classList.add('feature-url__results--open')
});