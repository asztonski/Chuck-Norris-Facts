const generator = () => {
    const p = document.querySelector('.randomFactContainer');
    const randomFact = fetch('https://api.chucknorris.io/jokes/random')
    .then(resp => resp.json()).then(data => p.textContent = data.value);
    return (
        randomFact
    )
};

export default generator;