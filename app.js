let x = 0;

document.querySelector(".left-arrow").addEventListener("click", () => {
    // console.log("clicked");
    const cubes = document.querySelectorAll(".cube");
    // transform node list into arrow
    x += 90;
    Array.from(cubes).forEach(cube => cube.style.transform = `rotateY(${x}deg)`);
});