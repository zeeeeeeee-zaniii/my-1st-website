// These clearly labelled demo stories are examples, not current news reports.
// Edit this list to add or update the stories shown in the briefing.
const stories = [
  {
    id: "city-transit",
    category: "World",
    title: "Why some cities are rethinking the daily commute",
    summary: "Imagine a city where a bus, a bike lane, or a short walk is the easiest way to get around. Some planners are working toward just that.",
    why: "How a city is designed affects the time people spend travelling, the air they breathe, and who can reach work, school, and services.",
    takeaways: [
      "Street design affects how people travel and use public space.",
      "Transit, walking, and cycling can offer alternatives to driving.",
      "Residents and planners weigh trade-offs when changing streets."
    ],
    related: ["ai-patterns", "pakistan-water", "environment-energy"],
    paragraphs: [
      "A street is more than a path for cars. It can also be a place for buses, bicycles, walking, trees, shops, and neighbors. City planners have to decide how much room to give each use.",
      "Some communities are testing safer crossings, more frequent buses, protected bike lanes, and streets with lower traffic speeds. The aim is not to make every journey the same. It is to give people practical choices beyond driving.",
      "Changes can bring trade-offs. A new bus lane may make a bus trip faster but use road space that once served cars. That is why planners study travel patterns and ask residents what is working—and what is not.",
      "The simple takeaway: transport choices are also choices about access, public space, and daily life."
    ],
    image: "https://images.unsplash.com/photo-1519501025264-65ba15a82390?auto=format&fit=crop&w=1000&q=80",
    imageAlt: "City buildings seen at dusk",
    readTime: "4 min"
  },
  {
    id: "ai-patterns",
    category: "Technology",
    title: "AI, in plain English: a pattern-finding tool",
    summary: "Artificial intelligence can seem mysterious. A useful first step is to think of it as software that learns patterns from examples.",
    why: "Knowing what AI is good at—and where it can go wrong—helps people make better choices about when to trust it.",
    takeaways: [
      "AI systems learn patterns from examples and data.",
      "A likely answer is not automatically a correct answer.",
      "People should check important results, especially when decisions affect others."
    ],
    related: ["science-ai", "education-skills", "environment-energy"],
    paragraphs: [
      "Many AI systems are trained using examples. A program might study many labelled pictures of animals, then learn patterns that help it guess what animal appears in a new picture.",
      "That does not mean the program understands an animal the way a person does. It calculates which answer best fits patterns it learned. If its examples are incomplete or unfair, its answers can also be inaccurate or unfair.",
      "People use AI for tasks such as sorting information, suggesting text, or spotting patterns. A person still needs to check important results, especially when a decision affects someone.",
      "The simple takeaway: AI is a powerful tool for working with patterns, not a guarantee of truth or human understanding."
    ],
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1000&q=80",
    imageAlt: "Electronic components on a computer circuit board",
    readTime: "4 min"
  },
  {
    id: "inflation-basics",
    category: "Money & Economy",
    title: "Inflation explained: why the same money buys less",
    summary: "If the overall cost of everyday goods rises over time, each unit of money buys a little less. That change is called inflation.",
    why: "Inflation influences household budgets, savings, wages, and the choices businesses and governments make.",
    takeaways: [
      "Inflation means a broad rise in prices over time.",
      "It can have multiple causes, including higher costs or stronger demand.",
      "Different households can experience price changes differently."
    ],
    related: ["small-business", "pakistan-water", "education-skills"],
    paragraphs: [
      "Picture a basket containing the things people often buy, such as food, transport, and household supplies. If the basket costs more this year than last year, the general price level may have risen.",
      "There is not always one cause. Costs can rise when materials, energy, or transport become more expensive. Prices can also rise when demand for goods grows faster than the supply available.",
      "A price increase in one product is not automatically inflation. Economists look for a broad pattern across many goods and services. Different households may experience that pattern differently because they buy different things.",
      "The simple takeaway: inflation describes a wider rise in prices, and it reduces what a fixed amount of money can buy."
    ],
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1000&q=80",
    imageAlt: "Tall office buildings seen from street level",
    readTime: "3 min"
  },
  {
    id: "rest-and-focus",
    category: "Lifestyle",
    title: "What a short break can do for your attention",
    summary: "Taking a pause between demanding tasks can give your mind a chance to reset. The helpful kind of break is often simple.",
    why: "Understanding how attention works can help students and busy readers build routines that feel more manageable.",
    takeaways: [
      "Sustained concentration takes effort.",
      "A short pause can make a transition between tasks easier.",
      "There is no single break schedule that works for everyone."
    ],
    related: ["education-skills", "sports-teamwork", "ai-patterns"],
    paragraphs: [
      "Concentrating takes effort. When people switch between tasks or keep working without a pause, it can become harder to stay focused on the next thing.",
      "A break does not have to mean a special app or an elaborate routine. Standing up, getting some water, or looking away from a screen for a few minutes can create a clear pause between tasks.",
      "There is no single break schedule that works for everyone. The useful thing is to notice when focus is fading and try a short pause, then return to one manageable task.",
      "The simple takeaway: breaks are not wasted time; they can be a practical way to make room for attention to recover."
    ],
    image: "https://images.unsplash.com/photo-1499209974431-9dddcece7f88?auto=format&fit=crop&w=1000&q=80",
    imageAlt: "Quiet sunlit room with a comfortable chair",
    readTime: "3 min"
  },
  {
    id: "sports-teamwork",
    category: "Sports",
    title: "Teamwork is a skill athletes practise, not just a slogan",
    summary: "Teams improve when players communicate clearly, understand their roles, and learn how to recover after mistakes.",
    why: "The same habits that support a team on the field—listening, clear goals, and trust—also matter in classrooms and workplaces.",
    takeaways: [
      "Teams combine individual responsibilities with a shared goal.",
      "Clear communication helps people adapt together.",
      "Reviewing mistakes without blame can support learning."
    ],
    related: ["education-skills", "rest-and-focus", "pakistan-water"],
    paragraphs: [
      "A team is a group of people working toward a shared goal. In sports, that means each player has individual responsibilities while staying aware of what teammates are doing.",
      "Good communication helps players make quick decisions. A short call, a clear signal, or a calm reminder can prevent confusion and help the group adapt when a plan changes.",
      "Teams also learn by reviewing what happened. Talking about a mistake without blaming one person helps players see what they can practise differently next time.",
      "The simple takeaway: teamwork is built through repeatable habits—communicating, trusting one another, and learning together."
    ],
    image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=1000&q=80",
    imageAlt: "Athletes running together on an outdoor track",
    readTime: "3 min"
  },
  {
    id: "pakistan-water",
    category: "Pakistan",
    title: "A simple guide to how shared water resources are managed",
    summary: "Water connects farms, households, and cities. Understanding how it is stored and shared helps explain why planning matters.",
    why: "Reliable water affects public health, food production, and daily life for communities across Pakistan.",
    takeaways: [
      "Water systems include storage, distribution, and local infrastructure.",
      "Demand changes with population, farming, and seasonal conditions.",
      "Planning and maintenance matter alongside the amount of water available."
    ],
    related: ["city-transit", "environment-energy", "inflation-basics"],
    paragraphs: [
      "Water does not reach every home directly from a river or reservoir. It usually passes through a system that may include storage, treatment, canals or pipes, and local distribution.",
      "Different communities depend on water for different needs. Households need safe water every day, while agriculture and industry also rely on dependable supplies.",
      "Managing a shared resource means making decisions about infrastructure, maintenance, timing, and fair access. Weather and seasonal changes can make these decisions more difficult.",
      "The simple takeaway: water security is about managing a connected system, not only counting how much water exists."
    ],
    image: "https://images.unsplash.com/photo-1437482078695-73f5ca6c96e2?auto=format&fit=crop&w=1000&q=80",
    imageAlt: "Water flowing through a natural stream",
    readTime: "4 min"
  },
  {
    id: "science-ai",
    category: "Science & AI",
    title: "How scientists use AI to study very large datasets",
    summary: "Some research teams use pattern-finding software to sort complex information and identify areas worth a closer look.",
    why: "AI can help researchers explore data, but careful checks are needed so a promising pattern is not mistaken for proof.",
    takeaways: [
      "AI can help organize or flag patterns in large datasets.",
      "Researchers still need to test whether a pattern is meaningful.",
      "Data quality and human review affect the reliability of results."
    ],
    related: ["ai-patterns", "education-skills", "environment-energy"],
    paragraphs: [
      "Scientific projects can produce more measurements than a person could review one by one. A computer program can help sort this information and point researchers toward patterns.",
      "A pattern is a clue, not a conclusion. Researchers check how it was found, compare it with other evidence, and ask whether the same result appears in other data.",
      "If the original information is incomplete or contains errors, a system can highlight misleading patterns. That is why data quality and expert review remain important.",
      "The simple takeaway: AI can help scientists look through data faster, but scientific evidence still needs careful testing."
    ],
    image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=1000&q=80",
    imageAlt: "Laboratory glassware used for scientific research",
    readTime: "4 min"
  },
  {
    id: "education-skills",
    category: "Education & Careers",
    title: "A practical way to connect classroom skills to a first job",
    summary: "Projects, volunteering, and coursework can all help beginners practise skills they will use in the workplace.",
    why: "Recognizing transferable skills can help students explain what they can do, even before they have much formal work experience.",
    takeaways: [
      "Skills can come from study, community work, and personal projects.",
      "A specific example makes a skill easier to explain.",
      "Reflecting on what you learned helps connect experience to a role."
    ],
    related: ["science-ai", "rest-and-focus", "sports-teamwork"],
    paragraphs: [
      "A first job application can feel difficult when the applicant has limited work history. But useful experience can also come from a class project, a club, a family responsibility, or volunteering.",
      "Start with a skill the role asks for, such as organizing information or working with others. Then describe one real example: what the task was, what you did, and what happened.",
      "This approach is more informative than simply listing a strength. It helps an employer understand how the skill was used and gives the applicant a useful way to reflect on their learning.",
      "The simple takeaway: you can build a strong skills story by connecting real experiences to the work you hope to do."
    ],
    image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1000&q=80",
    imageAlt: "A small group collaborating around a table",
    readTime: "3 min"
  },
  {
    id: "environment-energy",
    category: "Environment",
    title: "What it means to move from fossil fuels to cleaner energy",
    summary: "An energy transition is a gradual shift in how electricity, heat, and transport are produced and used.",
    why: "Energy choices affect pollution, infrastructure, household costs, and how communities prepare for the future.",
    takeaways: [
      "An energy transition involves changing systems, not just one power source.",
      "Reliable supply and affordability matter alongside emissions.",
      "Infrastructure and planning shape how quickly changes can happen."
    ],
    related: ["science-ai", "pakistan-water", "inflation-basics"],
    paragraphs: [
      "Most communities rely on systems that produce and deliver energy to homes, transport, and businesses. Changing those systems takes time because equipment and infrastructure last for many years.",
      "Cleaner sources such as wind and solar can produce electricity without burning fuel while operating. They also require planning for storage, transmission, and times when output changes.",
      "A transition involves many choices: keeping energy reliable, making upgrades affordable, and supporting people and places affected by changes in the energy system.",
      "The simple takeaway: cleaner energy is a system-wide change that needs technology, investment, and practical planning."
    ],
    image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=1000&q=80",
    imageAlt: "Electricity pylons carrying power across a green landscape",
    readTime: "4 min"
  },
  {
    id: "small-business",
    category: "Business",
    title: "How a small business turns a good idea into a plan",
    summary: "A business plan is a way to think through the people a business serves, its costs, and how it will operate.",
    why: "Planning helps a business owner spot questions early, before committing too much time or money.",
    takeaways: [
      "A plan describes the customer, the offer, and the costs.",
      "Testing an idea on a small scale can reveal useful feedback.",
      "Plans can change as owners learn more about the business."
    ],
    related: ["inflation-basics", "education-skills", "pakistan-water"],
    paragraphs: [
      "A business idea becomes more practical when its owner can explain who it is for and what problem it solves. That description helps guide decisions about products, services, and prices.",
      "A simple plan also looks at costs: supplies, time, equipment, and the expenses of reaching customers. The goal is not to predict everything perfectly, but to identify important assumptions.",
      "Some owners test an idea with a small group of customers before expanding. Their feedback can show which parts work and what needs to change.",
      "The simple takeaway: a business plan is a working guide for learning and making informed choices."
    ],
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1000&q=80",
    imageAlt: "A small retail shop prepared for customers",
    readTime: "3 min"
  }
];

const articleGrid = document.querySelector("#article-grid");
const searchForm = document.querySelector(".search-form");
const searchInput = document.querySelector("#story-search");
const resultsMessage = document.querySelector("#results-message");
const categoryButtons = document.querySelectorAll(".filter-button");
const favoriteCategoryInputs = document.querySelectorAll("[data-favorite-category]");
const savePreferencesButton = document.querySelector("#save-preferences");
const preferencesPanel = document.querySelector(".preferences-panel");
const savedFilter = document.querySelector("#saved-filter");
const savedCount = document.querySelector("#saved-count");
const favoritesFilter = document.querySelector("#favorites-filter");
const featuredImage = document.querySelector("#featured-image");
const featuredCategory = document.querySelector("#featured-category");
const featuredHeading = document.querySelector("#featured-heading");
const featuredSummary = document.querySelector("#featured-summary");
const featuredRead = document.querySelector("#featured-read");
const featuredBookmark = document.querySelector("#featured-bookmark");
const themeToggle = document.querySelector("#theme-toggle");
const themeIcon = document.querySelector(".theme-icon");
const themeLabel = document.querySelector(".theme-label");
const siteHeader = document.querySelector(".site-header");
const menuToggle = document.querySelector("#menu-toggle");
const articleDialog = document.querySelector("#article-dialog");
const dialogClose = document.querySelector("#dialog-close");
const shareButton = document.querySelector("#share-article");
const shareStatus = document.querySelector("#share-status");
const currentYear = document.querySelector("#current-year");
const navLinks = document.querySelectorAll(".main-nav a");
const favoriteCategoriesKey = "dailyscope-favorite-categories";

let activeCategory = "All";
let searchTerm = "";
let showingSavedOnly = false;
let savedStories = readSavedStories();
let favoriteCategories = readFavoriteCategories();
let openStoryId = "";
let previousHash = "";
let inFavoriteFilter = false;

function readSavedStories() {
  try {
    const saved = JSON.parse(localStorage.getItem("dailyscope-bookmarks") || "[]");
    return Array.isArray(saved)
      ? [...new Set(saved.filter((id) => stories.some((story) => story.id === id)))]
      : [];
  } catch (error) {
    console.warn("DailyScope could not read saved stories from this browser.", error);
    return [];
  }
}

function readFavoriteCategories() {
  try {
    const saved = JSON.parse(localStorage.getItem("dailyscope-favorite-categories") || "[]");
    const validCategories = [...new Set(stories.map((story) => story.category))];
    return Array.isArray(saved) ? [...new Set(saved.filter((category) => validCategories.includes(category)))] : [];
  } catch (error) {
    console.warn("DailyScope could not read favourite categories from this browser.", error);
    return [];
  }
}

function saveBookmarks() {
  try {
    localStorage.setItem("dailyscope-bookmarks", JSON.stringify(savedStories));
    return true;
  } catch (error) {
    console.error("DailyScope could not save bookmarks in this browser.", error);
    return false;
  }
}

function createStoryCard(story) {
  const card = document.createElement("article");
  card.className = "story-card";

  const imageWrap = document.createElement("div");
  imageWrap.className = "story-image-wrap";
  const image = document.createElement("img");
  image.className = "story-image";
  image.src = story.image;
  image.alt = story.imageAlt;
  image.loading = "lazy";
  const stamp = document.createElement("span");
  stamp.className = "demo-stamp";
  stamp.textContent = "Sample story";
  imageWrap.append(image, stamp);

  const content = document.createElement("div");
  content.className = "story-content";

  const category = document.createElement("p");
  category.className = "article-category";
  category.textContent = story.category;

  const title = document.createElement("h3");
  title.className = "story-title";
  title.textContent = story.title;

  const summary = document.createElement("p");
  summary.className = "story-summary";
  summary.textContent = story.summary;

  const why = document.createElement("section");
  why.className = "why-matters";
  const whyHeading = document.createElement("h3");
  whyHeading.textContent = "Why it matters";
  const whyText = document.createElement("p");
  whyText.textContent = story.why;
  why.append(whyHeading, whyText);

  const actions = document.createElement("div");
  actions.className = "story-actions";

  const readMore = document.createElement("button");
  readMore.className = "read-more";
  readMore.type = "button";
  readMore.append(document.createTextNode("Read more"));
  const arrow = document.createElement("span");
  arrow.setAttribute("aria-hidden", "true");
  arrow.textContent = "→";
  readMore.append(arrow);
  readMore.addEventListener("click", () => openReadingView(story));

  const bookmark = document.createElement("button");
  bookmark.className = "bookmark-button";
  bookmark.type = "button";
  const isSaved = savedStories.includes(story.id);
  bookmark.classList.toggle("is-saved", isSaved);
  bookmark.setAttribute("aria-pressed", String(isSaved));
  bookmark.setAttribute("aria-label", `${isSaved ? "Remove saved story" : "Save story"}: ${story.title}`);
  const bookmarkIcon = document.createElement("span");
  bookmarkIcon.className = "bookmark-icon";
  bookmarkIcon.setAttribute("aria-hidden", "true");
  bookmarkIcon.textContent = isSaved ? "▣" : "▢";
  bookmark.append(bookmarkIcon, document.createTextNode(isSaved ? "Saved" : "Save"));
  bookmark.addEventListener("click", () => toggleBookmark(story.id));

  actions.append(readMore, bookmark);
  content.append(category, title, summary, why, actions);
  card.append(imageWrap, content);
  return card;
}

function openReadingView(story) {
  const category = document.querySelector("#dialog-category");
  const meta = document.querySelector("#dialog-meta");
  const title = document.querySelector("#dialog-title");
  const summary = document.querySelector("#dialog-summary");
  const why = document.querySelector("#dialog-why");
  const body = document.querySelector("#dialog-story");
  const takeaways = document.querySelector("#dialog-takeaways");
  const related = document.querySelector("#dialog-related");

  if (!articleDialog.open) {
    previousHash = window.location.hash.startsWith("#article=") ? "" : window.location.hash;
  }
  openStoryId = story.id;
  category.textContent = story.category;
  meta.textContent = `Sample story · ${story.readTime} read`;
  title.textContent = story.title;
  summary.textContent = story.summary;
  why.textContent = story.why;
  takeaways.replaceChildren(...story.takeaways.map((text) => {
    const item = document.createElement("li");
    item.textContent = text;
    return item;
  }));
  body.replaceChildren(...story.paragraphs.map((text) => {
    const paragraph = document.createElement("p");
    paragraph.textContent = text;
    return paragraph;
  }));
  related.replaceChildren();
  const relatedStories = story.related
    .map((relatedId) => stories.find((item) => item.id === relatedId))
    .filter(Boolean);

  relatedStories.forEach((relatedStory) => {
    const link = document.createElement("button");
    link.className = "related-topic";
    link.type = "button";
    link.textContent = relatedStory.title;
    link.addEventListener("click", () => openReadingView(relatedStory));
    related.append(link);
  });

  if (relatedStories.length === 0) {
    const message = document.createElement("p");
    message.textContent = "No related sample articles yet.";
    related.append(message);
  }

  shareStatus.textContent = "";
  const articleUrl = new URL(window.location.href);
  articleUrl.hash = `article=${encodeURIComponent(story.id)}`;
  replaceCurrentUrl(articleUrl);

  if (!articleDialog.open) {
    articleDialog.showModal();
  }
}

function replaceCurrentUrl(url) {
  try {
    window.history.replaceState(null, "", url);
  } catch (error) {
    console.warn("DailyScope could not update the reading-view link with browser history.", error);
    window.location.hash = url.hash;
  }
}

function renderFeaturedStory() {
  const story = stories[0];
  const isSaved = savedStories.includes(story.id);

  featuredImage.src = story.image;
  featuredImage.alt = story.imageAlt;
  featuredCategory.textContent = story.category;
  featuredHeading.textContent = story.title;
  featuredSummary.textContent = story.summary;
  featuredBookmark.classList.toggle("is-saved", isSaved);
  featuredBookmark.setAttribute("aria-pressed", String(isSaved));
  featuredBookmark.setAttribute("aria-label", `${isSaved ? "Remove saved story" : "Save story"}: ${story.title}`);
  const icon = document.createElement("span");
  icon.setAttribute("aria-hidden", "true");
  icon.textContent = isSaved ? "▣" : "▢";
  featuredBookmark.replaceChildren(icon, document.createTextNode(` ${isSaved ? "Saved" : "Save"}`));
}

function updateActiveFilters() {
  categoryButtons.forEach((button) => {
    const isFavoriteButton = button.id === "favorites-filter";
    const isActive = isFavoriteButton
      ? inFavoriteFilter
      : button.dataset.category === activeCategory && !showingSavedOnly && !inFavoriteFilter;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });

  savedFilter.classList.toggle("is-current", showingSavedOnly);
  savedFilter.setAttribute("aria-pressed", String(showingSavedOnly));
}

function renderStories() {
  let matchingStories = stories.filter((story) => {
    const matchesCategory = activeCategory === "All" || story.category === activeCategory;
    const matchesSearch = story.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesSaved = !showingSavedOnly || savedStories.includes(story.id);
    const matchesFavorites = !inFavoriteFilter || favoriteCategories.includes(story.category);
    return matchesCategory && matchesSearch && matchesSaved && matchesFavorites;
  });

  articleGrid.replaceChildren();

  if (matchingStories.length === 0) {
    const emptyState = document.createElement("div");
    emptyState.className = "empty-state";
    const heading = document.createElement("h3");
    const message = document.createElement("p");

    if (showingSavedOnly && savedStories.length === 0) {
      heading.textContent = "Your reading list is empty";
      message.textContent = "Choose Save on any story and it will be kept here on this device.";
    } else if (inFavoriteFilter && favoriteCategories.length === 0) {
      heading.textContent = "Choose your favourite topics";
      message.textContent = "Open “Choose favourite topics” above, select a few categories, and save your choices.";
    } else {
      heading.textContent = "No stories match those choices";
      message.textContent = "Try a different search, category, or saved/favourite filter.";
    }

    emptyState.append(heading, message);
    articleGrid.append(emptyState);
  } else {
    matchingStories.forEach((story) => articleGrid.append(createStoryCard(story)));
  }

  const label = matchingStories.length === 1 ? "sample story" : "sample stories";
  resultsMessage.textContent = showingSavedOnly
    ? `${matchingStories.length} saved ${label}`
    : inFavoriteFilter
      ? `${matchingStories.length} ${label} in your favourite topics`
      : `${matchingStories.length} ${label} · Demonstration content, not current news`;
  delete resultsMessage.dataset.state;
  savedCount.textContent = String(savedStories.length);
  updateActiveFilters();
  renderFeaturedStory();
}

function toggleBookmark(storyId) {
  const wasSaved = savedStories.includes(storyId);
  savedStories = wasSaved
    ? savedStories.filter((id) => id !== storyId)
    : [...savedStories, storyId];

  const savedSuccessfully = saveBookmarks();
  if (!savedSuccessfully) {
    savedStories = wasSaved
      ? [...savedStories, storyId]
      : savedStories.filter((id) => id !== storyId);
  }
  renderStories();
  if (!savedSuccessfully) {
    resultsMessage.textContent = "Could not save that bookmark. Check your browser's storage permissions and try again.";
    resultsMessage.dataset.state = "error";
  }
}

function saveFavoriteCategories() {
  const selected = [...favoriteCategoryInputs]
    .filter((input) => input.checked)
    .map((input) => input.value);
  const previousSelection = favoriteCategories;
  favoriteCategories = selected;

  try {
    localStorage.setItem(favoriteCategoriesKey, JSON.stringify(favoriteCategories));
  } catch (error) {
    favoriteCategories = previousSelection;
    console.error("DailyScope could not save favourite categories.", error);
    favoriteCategoryInputs.forEach((input) => {
      input.checked = favoriteCategories.includes(input.value);
    });
    renderStories();
    resultsMessage.textContent = "Could not save favourite topics. Check your browser's storage permissions and try again.";
    resultsMessage.dataset.state = "error";
    return;
  }

  inFavoriteFilter = true;
  activeCategory = "All";
  showingSavedOnly = false;
  preferencesPanel.open = false;
  renderStories();
  resultsMessage.textContent = `${favoriteCategories.length} favourite ${favoriteCategories.length === 1 ? "topic" : "topics"} saved on this device.`;
  resultsMessage.dataset.state = "success";
}

async function shareCurrentStory() {
  const story = stories.find((item) => item.id === openStoryId);
  if (!story) {
    shareStatus.textContent = "Open a story before sharing it.";
    shareStatus.dataset.state = "error";
    return;
  }

  const shareUrl = new URL(window.location.href);
  shareUrl.hash = `article=${encodeURIComponent(story.id)}`;
  const shareData = {
    title: `${story.title} | DailyScope`,
    text: `${story.title} — sample story from DailyScope.`,
    url: shareUrl.href
  };

  if (navigator.share) {
    try {
      await navigator.share(shareData);
      shareStatus.textContent = "Story shared.";
      shareStatus.dataset.state = "success";
      return;
    } catch (error) {
      if (error.name === "AbortError") {
        shareStatus.textContent = "Sharing cancelled.";
        delete shareStatus.dataset.state;
        return;
      }
    }
  }

  try {
    await navigator.clipboard.writeText(shareUrl.href);
    shareStatus.textContent = "Story link copied.";
    shareStatus.dataset.state = "success";
  } catch (error) {
    let copied = false;
    let fallbackError = error;
    let temporaryInput;

    try {
      temporaryInput = document.createElement("textarea");
      temporaryInput.value = shareUrl.href;
      temporaryInput.setAttribute("readonly", "");
      temporaryInput.style.position = "fixed";
      temporaryInput.style.opacity = "0";
      document.body.append(temporaryInput);
      temporaryInput.select();
      copied = document.execCommand("copy");
    } catch (copyError) {
      fallbackError = copyError;
    } finally {
      temporaryInput?.remove();
    }

    if (copied) {
      shareStatus.textContent = "Story link copied.";
      shareStatus.dataset.state = "success";
    } else {
      console.error("DailyScope could not share or copy this story link.", fallbackError);
      shareStatus.textContent = "Could not copy the link. You can copy it from your browser's address bar.";
      shareStatus.dataset.state = "error";
    }
  }
}

function closeMobileMenu() {
  siteHeader.classList.remove("menu-open");
  menuToggle.setAttribute("aria-expanded", "false");
  menuToggle.setAttribute("aria-label", "Open navigation");
}

categoryButtons.forEach((button) => {
  if (button.id === "favorites-filter") {
    return;
  }

  button.addEventListener("click", () => {
    activeCategory = button.dataset.category;
    showingSavedOnly = false;
    inFavoriteFilter = false;
    renderStories();
    document.querySelector("#briefing").scrollIntoView({ behavior: "smooth" });
  });
});

favoritesFilter.addEventListener("click", () => {
  inFavoriteFilter = !inFavoriteFilter;
  activeCategory = "All";
  showingSavedOnly = false;
  renderStories();
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.forEach((navLink) => navLink.classList.toggle("is-current", navLink === link));
  });
});

searchForm.addEventListener("submit", (event) => {
  event.preventDefault();
  searchTerm = searchInput.value.trim();
  renderStories();
});

searchInput.addEventListener("input", () => {
  searchTerm = searchInput.value.trim();
  renderStories();
});

savePreferencesButton.addEventListener("click", saveFavoriteCategories);

savedFilter.addEventListener("click", () => {
  showingSavedOnly = !showingSavedOnly;
  activeCategory = "All";
  inFavoriteFilter = false;
  renderStories();
  document.querySelector("#briefing").scrollIntoView({ behavior: "smooth" });
  closeMobileMenu();
});

themeToggle.addEventListener("click", () => {
  const isDark = document.documentElement.dataset.theme !== "dark";
  document.documentElement.dataset.theme = isDark ? "dark" : "light";
  themeToggle.setAttribute("aria-pressed", String(isDark));
  themeToggle.setAttribute("aria-label", isDark ? "Switch to light mode" : "Switch to dark mode");
  themeIcon.textContent = isDark ? "☀" : "☾";
  themeLabel.textContent = isDark ? "Light" : "Dark";

  try {
    localStorage.setItem("dailyscope-theme", isDark ? "dark" : "light");
  } catch (error) {
    console.warn("DailyScope could not remember the selected theme.", error);
  }
});

menuToggle.addEventListener("click", () => {
  const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
  menuToggle.setAttribute("aria-expanded", String(!isOpen));
  menuToggle.setAttribute("aria-label", isOpen ? "Open navigation" : "Close navigation");
  siteHeader.classList.toggle("menu-open", !isOpen);
});

document.querySelectorAll(".main-nav a").forEach((link) => {
  link.addEventListener("click", closeMobileMenu);
});

document.addEventListener("click", (event) => {
  if (!siteHeader.contains(event.target)) {
    closeMobileMenu();
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && siteHeader.classList.contains("menu-open")) {
    closeMobileMenu();
    menuToggle.focus();
  }
});

dialogClose.addEventListener("click", () => articleDialog.close());

shareButton.addEventListener("click", shareCurrentStory);

articleDialog.addEventListener("close", () => {
  openStoryId = "";
  if (window.location.hash.startsWith("#article=")) {
    const previousUrl = new URL(window.location.href);
    previousUrl.hash = previousHash;
    replaceCurrentUrl(previousUrl);
  }
});

function getStoryIdFromHash() {
  const match = window.location.hash.match(/^#article=(.+)$/);
  if (!match) {
    return "";
  }

  try {
    return decodeURIComponent(match[1]);
  } catch (error) {
    console.warn("DailyScope ignored a malformed story link.", error);
    return "";
  }
}

window.addEventListener("hashchange", () => {
  const storyId = getStoryIdFromHash();
  const story = stories.find((item) => item.id === storyId);
  if (story && !articleDialog.open) {
    openReadingView(story);
  }
});

featuredRead.addEventListener("click", () => openReadingView(stories[0]));
featuredBookmark.addEventListener("click", () => toggleBookmark(stories[0].id));

articleDialog.addEventListener("click", (event) => {
  if (event.target === articleDialog) {
    articleDialog.close();
  }
});

try {
  const savedTheme = localStorage.getItem("dailyscope-theme");
  if (savedTheme === "dark") {
    document.documentElement.dataset.theme = "dark";
    themeToggle.setAttribute("aria-pressed", "true");
    themeToggle.setAttribute("aria-label", "Switch to light mode");
    themeIcon.textContent = "☀";
    themeLabel.textContent = "Light";
  }
} catch (error) {
  console.warn("DailyScope could not restore the selected theme.", error);
}

favoriteCategoryInputs.forEach((input) => {
  input.checked = favoriteCategories.includes(input.value);
});

currentYear.textContent = new Date().getFullYear();
renderStories();

if (window.location.hash.startsWith("#article=")) {
  const storyId = getStoryIdFromHash();
  const linkedStory = stories.find((story) => story.id === storyId);
  if (linkedStory) {
    previousHash = "";
    openReadingView(linkedStory);
  }
}
