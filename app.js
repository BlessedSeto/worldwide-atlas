const collections = [
  {
    id: "live-earth", title: "Live Earth", subtitle: "OUR PLANET, RIGHT NOW", mark: "01", accent: "#d6f36a", items: [
      ["Zoom Earth", "Live satellite imagery", "Watch clouds, storms and the changing surface of Earth in near real time.", "https://zoom.earth"],
      ["Flightradar24", "Every plane in the sky", "Follow commercial flights as they cross the globe, minute by minute.", "https://www.flightradar24.com"],
      ["MarineTraffic", "Ships at sea", "Track vessels and their journeys across the world’s oceans.", "https://www.marinetraffic.com"],
      ["Windy", "Wind, weather & storms", "Explore animated weather maps, forecasts, wind patterns and approaching storms.", "https://www.windy.com"],
      ["Lightning Maps", "Strikes in real time", "Watch thunderstorms unfold through live lightning detections around the world.", "https://www.lightningmaps.org"],
      ["USGS Earthquakes", "The ground beneath us", "See recent earthquakes around the world, reported by the U.S. Geological Survey.", "https://earthquake.usgs.gov/earthquakes/map"],
      ["Submarine Cable Map", "The internet, underwater", "Trace the cables on the ocean floor that connect the world’s networks.", "https://www.submarinecablemap.com"],
      ["Global Forest Watch", "Forests from space", "Monitor forest change and deforestation with near real-time satellite data.", "https://www.globalforestwatch.org"],
      ["Worldometer", "The world, by the second", "Watch population, health, environment and other global counters tick upward.", "https://www.worldometers.info"],
      ["Internet Live Stats", "The web in motion", "Watch live counters for internet activity, searches and online publishing.", "https://www.internetlivestats.com"]
    ]
  },
  {
    id: "maps-places", title: "Maps & Places", subtitle: "GET LOST, ON PURPOSE", mark: "02", accent: "#ffb68b", items: [
      ["The True Size Of…", "Countries, properly sized", "Drag countries around the map to compare their real sizes without map distortion.", "https://www.thetruesize.com"],
      ["Old Maps Online", "Centuries in cartography", "Search digitized historical maps from libraries and collections around the world.", "https://www.oldmapsonline.org"],
      ["David Rumsey Map Collection", "150,000 historic maps", "Browse a remarkable archive of historical maps, atlases and globes.", "https://www.davidrumsey.com"],
      ["OpenStreetMap", "A map made by everyone", "Explore the open world map built and maintained by a global community of volunteers.", "https://www.openstreetmap.org"],
      ["WindowSwap", "A window, somewhere", "Take a quiet look out of someone else’s window, anywhere on Earth.", "https://www.window-swap.com"],
      ["Virtual Vacation", "Walk another city", "Wander through streets and destinations with immersive first-person videos.", "https://virtualvacation.us"],
      ["MapCrunch", "Teleport at random", "Drop into a random Google Street View location and see where the road takes you.", "https://www.mapcrunch.com"],
      ["Atlas Obscura", "The curious and unusual", "Find the world’s hidden wonders, unusual places and surprising stories.", "https://www.atlasobscura.com"],
      ["Neal.fun", "Play with big ideas", "A collection of playful, interactive experiences about the world and everything in it.", "https://neal.fun"],
      ["Scale of the Universe", "From atom to cosmos", "Zoom through an interactive scale journey from the tiniest particles to the observable universe.", "https://htwins.net/scale2/"]
    ]
  },
  {
    id: "space", title: "Space", subtitle: "LOOK UP, THEN KEEP GOING", mark: "03", accent: "#bca8ff", items: [
      ["NASA Eyes", "Explore the solar system", "Travel through NASA missions and celestial bodies in a 3D solar-system explorer.", "https://eyes.nasa.gov"],
      ["Stellarium Web", "The sky above you", "Identify stars, constellations, planets and deep-sky objects in an interactive sky map.", "https://stellarium-web.org"],
      ["NASA Astronomy Picture of the Day", "One cosmic image a day", "Discover a daily astronomy image or photograph, with context from professional astronomers.", "https://apod.nasa.gov"],
      ["NASA Image and Video Library", "NASA’s visual archive", "Search photographs, video and audio from across NASA’s missions and history.", "https://images.nasa.gov"]
    ]
  },
  {
    id: "data-knowledge", title: "Data & Knowledge", subtitle: "SEE THE BIGGER PICTURE", mark: "04", accent: "#82d8c1", items: [
      ["The Pudding", "Stories told with data", "Visual essays that make complex cultural questions tangible, surprising and fun to explore.", "https://pudding.cool"],
      ["Our World in Data", "The state of the world", "Research and data visualizations about global problems and long-term progress.", "https://ourworldindata.org"],
      ["Gapminder", "Question what you know", "Explore facts and animated data that challenge common misconceptions about the world.", "https://www.gapminder.org"],
      ["Information is Beautiful", "Make complexity visible", "Explore visual explanations of data, ideas and the things shaping our lives.", "https://informationisbeautiful.net"],
      ["World Bank Open Data", "Development, in data", "Access global development indicators and datasets from the World Bank.", "https://data.worldbank.org"],
      ["TÜİK Data Portal", "Türkiye’s official statistics", "Browse official statistics and public datasets from the Turkish Statistical Institute.", "https://data.tuik.gov.tr"],
      ["Wikipedia", "A well of knowledge", "Follow your curiosity through the free encyclopedia anyone can edit.", "https://www.wikipedia.org"]
    ]
  },
  {
    id: "libraries-art", title: "Libraries & Art", subtitle: "A MUSEUM WITHOUT WALLS", mark: "05", accent: "#f3a8c1", items: [
      ["Internet Archive", "A library of everything", "Browse millions of books, films, recordings, software and archived web pages.", "https://archive.org"],
      ["Project Gutenberg", "70,000 free books", "Read or download classic literature whose U.S. copyrights have expired.", "https://www.gutenberg.org"],
      ["Open Library", "A page for every book", "Discover an open, editable catalog working toward a page for every book ever published.", "https://openlibrary.org"],
      ["Library of Congress", "America’s national library", "Explore photographs, manuscripts, recordings, maps and other digital collections.", "https://www.loc.gov"],
      ["Europeana", "European cultural heritage", "Find artworks, books, music and archival material from European cultural institutions.", "https://www.europeana.eu"],
      ["Digital Public Library of America", "A nation’s collections", "Discover photographs, documents and stories from libraries and museums across the U.S.", "https://dp.la"],
      ["Google Arts & Culture", "Museums from your sofa", "Take virtual museum tours and explore art, landmarks and cultural collections.", "https://artsandculture.google.com"],
      ["Rijksmuseum", "Dutch art, in detail", "Explore and download high-resolution artworks from Amsterdam’s national museum.", "https://www.rijksmuseum.nl"],
      ["WikiArt", "Art from everywhere", "Browse a vast visual encyclopedia of fine art, artists and movements.", "https://www.wikiart.org"],
      ["The Public Domain Review", "Forgotten visual treasures", "Discover curious images, essays and artifacts from the history of culture.", "https://publicdomainreview.org"],
      ["Open Culture", "Free culture & learning", "Find free courses, films, audiobooks, books and other cultural resources.", "https://www.openculture.com"],
      ["The Met Collection", "Art across five millennia", "Explore artworks and open-access images from The Metropolitan Museum of Art.", "https://www.metmuseum.org/art/collection"]
    ]
  },
  {
    id: "music", title: "Music", subtitle: "TUNE IN TO ANOTHER TIME", mark: "06", accent: "#ffce77", items: [
      ["Musicmap", "The family tree of music", "Navigate a global genealogy of popular music genres and their connections.", "https://www.musicmap.info"],
      ["Radiooooo", "Pick a place and decade", "Choose a country and a decade to hear music from that time and place.", "https://radiooooo.com"],
      ["Listen to Wikipedia", "Knowledge, in sound", "Hear a musical note each time a Wikipedia page is edited, and a chime for new users.", "https://listen.hatnote.com"]
    ]
  },
  {
    id: "science", title: "Science & Sky", subtitle: "QUESTIONS WORTH FOLLOWING", mark: "07", accent: "#89c4f5", items: [
      ["timeanddate.com", "Time, sun & sky events", "Check local time, sunrise and sunset, moon phases, eclipses and sky events.", "https://www.timeanddate.com"],
      ["ScienceDaily", "A stream of discoveries", "Catch up on science research and developments across a wide range of fields.", "https://www.sciencedaily.com"],
      ["arXiv", "Research, freely shared", "Read open preprints in physics, mathematics, computer science and related disciplines.", "https://arxiv.org"],
      ["Observable", "Ideas you can interact with", "Explore notebooks and visualizations built with code, data and a curious community.", "https://observablehq.com"]
    ]
  }
];

const allItems = collections.flatMap(collection => collection.items.map(([title, tagline, description, url]) => ({
  title, tagline, description, url, category: collection.id, categoryTitle: collection.title
})));
const filters = document.querySelector("#category-filters");
const output = document.querySelector("#resource-collections");
const searchInput = document.querySelector("#resource-search");
const resultsCount = document.querySelector("#results-count");
const searchStatus = document.querySelector("#search-status");
const emptyState = document.querySelector("#empty-state");
let activeCategory = "all";
let query = "";

function makeFilter(label, id, count) {
  const button = document.createElement("button");
  button.className = "filter-chip";
  button.type = "button";
  button.dataset.category = id;
  button.setAttribute("aria-pressed", id === activeCategory ? "true" : "false");
  button.innerHTML = `${label}<span>${String(count).padStart(2, "0")}</span>`;
  button.addEventListener("click", () => {
    activeCategory = id;
    render();
  });
  return button;
}

function buildFilters() {
  filters.replaceChildren(makeFilter("Everything", "all", allItems.length));
  collections.forEach(collection => filters.append(makeFilter(collection.title, collection.id, collection.items.length)));
}

function matchItem(item) {
  const content = `${item.title} ${item.tagline} ${item.description} ${item.categoryTitle} ${item.url}`.toLowerCase();
  return (!query || content.includes(query)) && (activeCategory === "all" || activeCategory === item.category);
}

function cardMarkup(item, index, accent) {
  const domain = new URL(item.url).hostname.replace(/^www\./, "");
  return `<a class="resource-card" href="${item.url}" target="_blank" rel="noopener noreferrer" style="--card-accent:${accent};--card-delay:${Math.min(index, 7) * 35}ms" aria-label="${item.title}: ${item.description} (opens in a new tab)">
    <span class="card-index">${String(index + 1).padStart(2, "0")}</span>
    <span class="card-body"><span class="card-title-row"><strong>${item.title}</strong><span class="card-arrow" aria-hidden="true">↗</span></span><span class="card-tagline">${item.tagline}</span><span class="card-description">${item.description}</span><span class="card-domain">${domain}</span></span>
  </a>`;
}

function render() {
  filters.querySelectorAll(".filter-chip").forEach(button => button.setAttribute("aria-pressed", String(button.dataset.category === activeCategory)));
  let visibleTotal = 0;
  const sectionMarkup = collections.map(collection => {
    const visibleItems = collection.items.map(([title, tagline, description, url]) => ({title, tagline, description, url, category: collection.id, categoryTitle: collection.title})).filter(matchItem);
    if (!visibleItems.length) return "";
    visibleTotal += visibleItems.length;
    return `<section class="collection-group" id="${collection.id}" style="--collection-accent:${collection.accent}" aria-labelledby="heading-${collection.id}">
      <div class="collection-heading"><div class="collection-mark">${collection.mark}<span class="mark-orbit" aria-hidden="true"></span></div><div class="collection-heading-copy"><div class="collection-kicker">${collection.subtitle}</div><h3 id="heading-${collection.id}">${collection.title}<span>.</span></h3></div><span class="collection-size">${String(visibleItems.length).padStart(2, "0")} <i>PLACES</i></span></div>
      <div class="resource-grid">${visibleItems.map((item, index) => cardMarkup(item, index, collection.accent)).join("")}</div>
    </section>`;
  }).join("");
  output.innerHTML = sectionMarkup;
  emptyState.hidden = visibleTotal !== 0;
  output.hidden = visibleTotal === 0;
  resultsCount.textContent = `${visibleTotal} ${visibleTotal === 1 ? "destination" : "destinations"}`;
  searchStatus.textContent = query ? `MATCHING “${query}”` : activeCategory === "all" ? "THE WORLD, AT YOUR FINGERTIPS" : collections.find(collection => collection.id === activeCategory)?.subtitle ?? "THE WORLD, AT YOUR FINGERTIPS";
}

function clearFilters() {
  query = "";
  activeCategory = "all";
  searchInput.value = "";
  render();
  searchInput.focus();
}

searchInput.addEventListener("input", () => {
  query = searchInput.value.trim().toLowerCase();
  render();
});
document.querySelector("#search-form").addEventListener("submit", event => {
  event.preventDefault();
  document.querySelector("#collections").scrollIntoView({behavior: "smooth"});
});
document.querySelector("#clear-filters").addEventListener("click", clearFilters);
document.querySelector("#surprise-button").addEventListener("click", () => {
  const candidates = allItems.filter(matchItem);
  if (!candidates.length) {
    clearFilters();
    return;
  }
  const pick = candidates[Math.floor(Math.random() * candidates.length)];
  window.open(pick.url, "_blank", "noopener,noreferrer");
});
document.addEventListener("keydown", event => {
  if (event.key === "/" && !["INPUT", "TEXTAREA"].includes(document.activeElement.tagName) && !document.activeElement.isContentEditable) {
    event.preventDefault();
    searchInput.focus();
  }
  if (event.key === "Escape" && document.activeElement === searchInput) {
    clearFilters();
    searchInput.blur();
  }
});

buildFilters();
render();
