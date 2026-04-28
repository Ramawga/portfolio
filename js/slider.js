const sliderTrack = document.getElementById("slider-track");

if (sliderTrack) {
  const visibleItems = Array.from(sliderTrack.children).filter((item) => {
    return item.getAttribute("aria-hidden") !== "true";
  });

  const hasClones = sliderTrack.querySelector('[aria-hidden="true"]');

  if (!hasClones) {
    visibleItems.forEach((item) => {
      const clone = item.cloneNode(true);
      clone.setAttribute("aria-hidden", "true");
      sliderTrack.appendChild(clone);
    });
  }

  sliderTrack.classList.add("is-animated");
}
