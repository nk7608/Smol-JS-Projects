async function fetchPokemon() {
  try {
    const pokemonName = document
      .getElementById("pokemonName")
      .value.toLowerCase();
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
    );
    if (!response.ok) throw new Error("Pokemon not found");
    const data = await response.json();
    const spritePokemon = data.sprites.front_default;
    const imgDisplay = document.getElementById("spritePokemon");
    imgDisplay.src = spritePokemon;
    imgDisplay.style.display = "block";
    imgDisplay.style.transform = "scale(2)";
  } catch (error) {
    console.log(error);
  }
}
