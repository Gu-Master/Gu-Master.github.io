const defaultPeople = [
  {
    id: "anna",
    name: "Анна Беляева",
    years: "1928 — 2007",
    role: "прабабушка",
    status: "passed",
    description: "Учительница, хранительница семейных рецептов и человек с удивительным терпением.",
    photo: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=320&q=80",
    moments: [
      ["1948", "Закончила педагогический институт и начала работать в школе."],
      ["1953", "Вышла замуж за Бориса. Вместе они построили дом на окраине Новосибирска."],
      ["1996", "Записала тетрадь семейных рецептов, которая до сих пор живёт на кухне у Марии."],
    ],
  },
  {
    id: "boris",
    name: "Борис Беляев",
    years: "1924 — 1998",
    role: "прадедушка",
    status: "passed",
    description: "Инженер, прошёл всю войну и вернулся домой. Любил радио, работу руками и длинные разговоры.",
    photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=320&q=80",
    moments: [
      ["1945", "Вернулся домой и устроился на завод, где проработал почти сорок лет."],
      ["1953", "Познакомился с Анной. Их первая прогулка закончилась спором о музыке."],
      ["1988", "Собрал собственный коротковолновый радиоприёмник."],
    ],
  },
  {
    id: "elena",
    name: "Елена Беляева",
    years: "1952 — 2021",
    role: "мама",
    status: "passed",
    description: "Врач и человек, который собирал всех за одним столом. Её воскресные обеды стали семейной традицией.",
    photo: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=320&q=80",
    moments: [
      ["1971", "Поступила в медицинский институт и впервые уехала из родного города."],
      ["1976", "Вышла замуж за Виктора. В тот же год родилась Мария."],
      ["2014", "Открыла маленькую бесплатную библиотеку для детей во дворе."],
    ],
  },
  {
    id: "viktor",
    name: "Виктор Беляев",
    years: "1949 — 2014",
    role: "папа",
    status: "passed",
    description: "Военный связист, любил шахматы и дальние дороги. Всегда возил с собой фотоаппарат.",
    photo: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=320&q=80",
    moments: [
      ["1970", "Окончил училище связи и отправился на первую службу."],
      ["1976", "Встретил Елену на вокзале. Через полгода они уже планировали свадьбу."],
      ["2001", "Проехал на машине от Новосибирска до Владивостока."],
    ],
  },
  {
    id: "maria",
    name: "Мария Беляева",
    years: "1976 — сейчас",
    role: "мама",
    status: "living",
    description: "Фотограф, автор этого семейного архива. Сохраняет детали, которые обычно ускользают.",
    photo: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=320&q=80",
    moments: [
      ["1998", "Переехала в Санкт-Петербург учиться фотографии."],
      ["2002", "Вернулась домой и начала снимать семейные праздники на плёнку."],
      ["2024", "Решила собрать разрозненные фотографии и истории в один архив."],
    ],
  },
  {
    id: "sergey",
    name: "Сергей Беляев",
    years: "1974 — сейчас",
    role: "папа",
    status: "living",
    description: "Архитектор, умеет чинить всё на свете и знает, как превратить любую поездку в приключение.",
    photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=320&q=80",
    moments: [
      ["1997", "Окончил архитектурный факультет и начал работать в семейной мастерской."],
      ["2000", "Познакомился с Марией на выставке старых фотографий."],
      ["2015", "Построил деревянную дачу, где теперь проходят все большие праздники."],
    ],
  },
  {
    id: "liza",
    name: "Лиза Беляева",
    years: "2002 — сейчас",
    role: "дочь",
    status: "living",
    description: "Дизайнер, собирает семейные истории в одном месте и знает, где лежит каждая старая фотография.",
    photo: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=320&q=80",
    moments: [
      ["2002", "Родилась в Санкт-Петербурге, а первые слова сказала в доме прабабушки."],
      ["2020", "Начала оцифровывать семейные письма и подписи на фотографиях."],
      ["2026", "Запустила первую версию семейного архива «Корни»."],
    ],
  },
  {
    id: "ivan",
    name: "Иван Беляев",
    years: "2005 — сейчас",
    role: "сын",
    status: "living",
    description: "Студент, главный семейный шутник и единственный человек, который помнит пароль от старого ноутбука.",
    photo: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=320&q=80",
    moments: [
      ["2005", "Появился на свет в самый снежный день зимы."],
      ["2018", "Самостоятельно собрал первый компьютер из старых деталей."],
      ["2024", "Нашёл в коробке с проводами кассету с записью голоса Бориса."],
    ],
  },
  {
    id: "sofia",
    name: "София Беляева",
    years: "2008 — сейчас",
    role: "дочь",
    status: "living",
    description: "Музыкант и самая младшая в ветви. Играет на пианино и собирает фантики из всех семейных поездок.",
    photo: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=320&q=80",
    moments: [
      ["2008", "Родилась в конце лета, когда вся семья была на даче."],
      ["2017", "Начала заниматься музыкой и впервые сыграла для всей семьи."],
      ["2025", "Записала семейную песню для юбилея Марии."],
    ],
  },
];

const defaultAlbum = [
  { id: "album-1", year: 2025, title: "Летний день на даче", people: ["maria", "sergey", "liza"], photo: "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=900&q=85", size: "wide" },
  { id: "album-2", year: 2024, title: "Дом, который помнит", people: ["anna", "boris"], photo: "https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&w=700&q=85", size: "tall" },
  { id: "album-3", year: 2023, title: "Воскресный стол", people: ["elena", "maria"], photo: "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=700&q=85", size: "" },
  { id: "album-4", year: 2022, title: "Дорога на восток", people: ["viktor", "sergey"], photo: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=700&q=85", size: "" },
  { id: "album-5", year: 2021, title: "Письма из ящика", people: ["anna", "elena"], photo: "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=700&q=85", size: "wide" },
  { id: "album-6", year: 2019, title: "Первые шаги архива", people: ["liza", "ivan"], photo: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=700&q=85", size: "" },
  { id: "album-7", year: 2018, title: "Софина музыка", people: ["sofia"], photo: "https://images.unsplash.com/photo-1524650359799-842906ca1c06?auto=format&fit=crop&w=700&q=85", size: "" },
  { id: "album-8", year: 2014, title: "Тёплый свет кухни", people: ["elena", "viktor"], photo: "https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?auto=format&fit=crop&w=700&q=85", size: "tall" },
];

const defaultTimeline = [
  { year: "1924", title: "Рождение Бориса", text: "С него начинается самая ранняя ветвь архива, которую удалось восстановить по письмам и старым документам." },
  { year: "1953", title: "Анна и Борис встречаются", text: "Их знакомство случилось на танцах в городском Доме культуры. Через год они поженились." },
  { year: "1976", title: "Появляется Мария", text: "В семье рождается человек, который позже сохранит большую часть семейных фотографий." },
  { year: "2002", title: "Рождение Лизы", text: "Новое поколение растёт среди плёночных снимков, голосовых кассет и историй за воскресным столом." },
  { year: "2024", title: "Начинается цифровой архив", text: "Разрозненные фотографии, подписи и воспоминания начинают собираться в одном месте." },
  { year: "2026", title: "Корни открываются семье", text: "Первая версия архива становится живым пространством, которое можно продолжать вместе." },
];

const state = {
  people: load("family-people", defaultPeople),
  album: load("family-album", defaultAlbum),
  timeline: load("family-timeline", defaultTimeline),
  activeView: "tree",
  activeAlbumYear: "all",
  treeZoom: 1,
  peopleFilter: "all",
  adminUnlocked: sessionStorage.getItem("family-admin-unlocked") === "true",
};

const pageTitles = {
  tree: "Семейное древо",
  people: "Все люди",
  album: "Семейный альбом",
  timeline: "Лента времени",
  admin: "Админ-панель",
};

const dom = {
  viewSections: document.querySelectorAll(".view-section"),
  navItems: document.querySelectorAll(".nav-item"),
  breadcrumbCurrent: document.querySelector("#breadcrumb-current"),
  peopleCount: document.querySelector("#people-count"),
  treeScale: document.querySelector("#tree-scale"),
  treeEmpty: document.querySelector("#tree-empty-state"),
  peopleGrid: document.querySelector("#people-grid"),
  peopleSearch: document.querySelector("#people-search"),
  albumYears: document.querySelector("#album-years"),
  albumGrid: document.querySelector("#album-grid"),
  timelineList: document.querySelector("#timeline-list"),
  adminLocked: document.querySelector("#admin-locked"),
  adminContent: document.querySelector("#admin-content"),
  adminPeopleList: document.querySelector("#admin-people-list"),
  adminPhotoList: document.querySelector("#admin-photo-list"),
  toast: document.querySelector("#toast"),
  toastMessage: document.querySelector("#toast-message"),
  profileModalContent: document.querySelector("#profile-modal-content"),
  editorTitle: document.querySelector("#editor-title"),
  personForm: document.querySelector("#person-form"),
  sidebarAdminTrigger: document.querySelector("#sidebar-admin-trigger"),
  exitAdmin: document.querySelector("#exit-admin"),
  adminPreviewTree: document.querySelector("#admin-preview-tree"),
};

function load(key, fallback) {
  try {
    const stored = localStorage.getItem(key);
    return stored ? JSON.parse(stored) : fallback;
  } catch {
    return fallback;
  }
}

function save(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

function escapeHtml(value = "") {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function personById(id) {
  return state.people.find((person) => person.id === id);
}

function getInitials(name) {
  return name.split(" ").slice(0, 2).map((part) => part[0]).join("");
}

function avatarMarkup(person, className = "") {
  const initials = getInitials(person.name);
  const image = person.photo && !person.photo.startsWith("data:")
    ? ` style="background-image:url('${escapeHtml(person.photo)}')"`
    : "";
  return `<div class="person-avatar ${className}"${image}><span>${escapeHtml(initials)}</span></div>`;
}

function notify(message) {
  dom.toastMessage.textContent = message;
  dom.toast.classList.remove("hidden");
  window.clearTimeout(notify.timer);
  notify.timer = window.setTimeout(() => dom.toast.classList.add("hidden"), 2800);
}

function openModal(id) {
  document.querySelector(id).classList.remove("hidden");
  document.body.style.overflow = "hidden";
}

function closeModals() {
  document.querySelectorAll(".modal-backdrop").forEach((modal) => modal.classList.add("hidden"));
  document.body.style.overflow = "";
}

function showView(view) {
  state.activeView = view;
  document.body.classList.toggle("admin-route", view === "admin");
  dom.viewSections.forEach((section) => section.classList.toggle("active-view", section.id === `view-${view}`));
  dom.navItems.forEach((item) => item.classList.toggle("active", item.dataset.view === view));
  dom.breadcrumbCurrent.textContent = pageTitles[view];
  if (view === "admin") renderAdminState();
  if (view === "people") renderPeople();
  if (view === "album") renderAlbum();
}

function renderPeople() {
  const query = (dom.peopleSearch?.value || "").trim().toLowerCase();
  const filtered = state.people.filter((person) => {
    const matchesFilter = state.peopleFilter === "all"
      || (state.peopleFilter === "living" && person.status === "living")
      || (state.peopleFilter === "memory" && person.status === "passed");
    const haystack = `${person.name} ${person.role} ${person.description}`.toLowerCase();
    return matchesFilter && haystack.includes(query);
  });

  dom.peopleGrid.innerHTML = filtered.length
    ? filtered.map((person) => `
      <article class="person-card" data-person-id="${escapeHtml(person.id)}">
        <div class="person-card-top">
          ${avatarMarkup(person, "person-card-avatar")}
          <div class="person-card-copy">
            <h3>${escapeHtml(person.name)}</h3>
            <p>${escapeHtml(person.years)} · ${escapeHtml(person.role)}</p>
          </div>
        </div>
        <p class="person-card-description">${escapeHtml(person.description)}</p>
        <div class="person-card-bottom">
          <span class="status-label ${person.status}">${person.status === "living" ? "Живёт сейчас" : "Память семьи"}</span>
          <span class="arrow-link">Открыть <i data-lucide="arrow-up-right"></i></span>
        </div>
      </article>
    `).join("")
    : `<div class="empty-admin-panel"><i data-lucide="search-x"></i><h3>Никого не нашли</h3><p>Попробуйте другой запрос или фильтр.</p></div>`;

  dom.peopleCount.textContent = state.people.length;
  const livingCount = state.people.filter((person) => person.status === "living").length;
  const memoryCount = state.people.filter((person) => person.status === "passed").length;
  document.querySelector("[data-people-total]").textContent = state.people.length;
  document.querySelector("[data-people-living]").textContent = livingCount;
  document.querySelector("[data-people-memory]").textContent = memoryCount;
  document.querySelector("#tree-people-total").textContent = state.people.length;
  document.querySelectorAll(".person-card").forEach((card) => card.addEventListener("click", () => openProfile(card.dataset.personId)));
  refreshIcons();
}

function renderAlbum() {
  const years = ["all", ...new Set(state.album.map((item) => item.year))];
  dom.albumYears.innerHTML = years.map((year) => `
    <button class="year-filter ${String(state.activeAlbumYear) === String(year) ? "active" : ""}" data-album-year="${year}">
      ${year === "all" ? "Все годы" : year}
    </button>
  `).join("");

  const items = state.album.filter((item) => state.activeAlbumYear === "all" || String(item.year) === String(state.activeAlbumYear));
  dom.albumGrid.innerHTML = items.length
    ? items.map((item) => `
      <article class="album-item ${item.size || ""}" data-album-id="${escapeHtml(item.id)}">
        <img src="${escapeHtml(item.photo)}" alt="${escapeHtml(item.title)}" loading="lazy" />
        <div class="album-caption">
          <strong>${escapeHtml(item.title)}</strong>
          <span>${escapeHtml(String(item.year))}</span>
        </div>
      </article>
    `).join("")
    : `<div class="empty-admin-panel"><i data-lucide="image-off"></i><h3>В этом году тише обычного</h3><p>Добавьте первый кадр через админ-панель.</p></div>`;

  document.querySelectorAll("[data-album-year]").forEach((button) => {
    button.addEventListener("click", () => {
      state.activeAlbumYear = button.dataset.albumYear;
      renderAlbum();
    });
  });
  refreshIcons();
}

function renderTimeline() {
  dom.timelineList.innerHTML = state.timeline.map((item) => `
    <article class="timeline-item">
      <div class="timeline-year">${escapeHtml(item.year)}</div>
      <h3>${escapeHtml(item.title)}</h3>
      <p>${escapeHtml(item.text)}</p>
    </article>
  `).join("");
}

function renderAdminState() {
  dom.adminLocked.classList.toggle("hidden", state.adminUnlocked);
  dom.adminContent.classList.toggle("hidden", !state.adminUnlocked);
  document.body.classList.toggle("is-admin-unlocked", state.adminUnlocked);
  if (state.adminUnlocked) {
    renderAdminPeople();
    renderAdminPhotos();
  }
}

function requestAdminAccess() {
  if (state.adminUnlocked) {
    showView("admin");
    return;
  }
  openModal("#password-modal");
}

function leaveAdminMode() {
  document.body.classList.remove("admin-route");
  showView("tree");
}

function renderAdminPeople() {
  dom.adminPeopleList.innerHTML = state.people.map((person) => `
    <tr>
      <td>
        <div class="admin-person-cell">
          ${avatarMarkup(person)}
          <div><strong>${escapeHtml(person.name)}</strong><span>${escapeHtml(person.role)}</span></div>
        </div>
      </td>
      <td>${escapeHtml(person.years)}</td>
      <td><span class="table-status ${person.status}">${person.status === "living" ? "Живёт сейчас" : "Память семьи"}</span></td>
      <td>Сегодня</td>
      <td><button class="table-action edit-person" data-person-id="${escapeHtml(person.id)}"><i data-lucide="pencil"></i> Изменить</button></td>
    </tr>
  `).join("");

  document.querySelectorAll(".edit-person").forEach((button) => {
    button.addEventListener("click", () => openPersonEditor(button.dataset.personId));
  });
  refreshIcons();
}

function renderAdminPhotos() {
  dom.adminPhotoList.innerHTML = state.album.map((item) => `
    <article class="admin-photo-item">
      <img src="${escapeHtml(item.photo)}" alt="${escapeHtml(item.title)}" />
      <div class="admin-photo-copy">
        <strong>${escapeHtml(item.title)}</strong>
        <span>${escapeHtml(String(item.year))} · ${item.people.length} ${item.people.length === 1 ? "человек" : "человека"}</span>
        <button type="button" data-remove-photo="${escapeHtml(item.id)}">Удалить снимок</button>
      </div>
    </article>
  `).join("");

  document.querySelectorAll("[data-remove-photo]").forEach((button) => {
    button.addEventListener("click", () => {
      state.album = state.album.filter((item) => item.id !== button.dataset.removePhoto);
      save("family-album", state.album);
      renderAdminPhotos();
      renderAlbum();
      notify("Снимок удалён из альбома");
    });
  });
}

function openProfile(id) {
  const person = personById(id);
  if (!person) return;
  const moments = person.moments || [];
  const relatedPhotos = state.album.filter((item) => item.people.includes(person.id)).slice(0, 3);
  dom.profileModalContent.innerHTML = `
    <div class="profile-hero">
      ${avatarMarkup(person, "profile-avatar")}
      <h3 id="profile-name">${escapeHtml(person.name)}</h3>
      <p>${escapeHtml(person.years)} · ${escapeHtml(person.role)}</p>
      <span class="status-label ${person.status}">${person.status === "living" ? "Живёт сейчас" : "Память семьи"}</span>
      <div class="profile-hero-quote">«Самое важное не теряется, если его назвать по имени»</div>
    </div>
    <div class="profile-details">
      <p class="section-kicker">история человека</p>
      <h4>О ${escapeHtml(person.name.split(" ")[0])}</h4>
      <p class="profile-bio">${escapeHtml(person.description)}</p>
      <div class="profile-divider"></div>
      <div class="profile-detail-label">Важные моменты</div>
      <div class="profile-moments">
        ${moments.map(([year, text]) => `<div class="profile-moment"><span class="profile-moment-year">${escapeHtml(year)}</span><p>${escapeHtml(text)}</p></div>`).join("")}
      </div>
      ${relatedPhotos.length ? `
        <div class="profile-divider"></div>
        <div class="profile-detail-label">В семейном альбоме</div>
        <div class="profile-related-photos">
          ${relatedPhotos.map((item) => `<img src="${escapeHtml(item.photo)}" alt="${escapeHtml(item.title)}" title="${escapeHtml(item.title)}" />`).join("")}
        </div>
      ` : ""}
    </div>
  `;
  openModal("#profile-modal");
}

function resetPersonForm() {
  dom.personForm.reset();
  document.querySelector("#person-id").value = "";
  document.querySelector("#person-photo-file").value = "";
}

function openPersonEditor(id = "") {
  resetPersonForm();
  const person = id ? personById(id) : null;
  dom.editorTitle.textContent = person ? "Изменить профиль" : "Добавить человека";
  if (person) {
    document.querySelector("#person-id").value = person.id;
    document.querySelector("#person-name").value = person.name;
    document.querySelector("#person-years").value = person.years;
    document.querySelector("#person-role").value = person.role;
    document.querySelector("#person-status").value = person.status;
    document.querySelector("#person-description").value = person.description;
    document.querySelector("#person-photo").value = person.photo.startsWith("data:") ? "" : person.photo;
  }
  openModal("#editor-modal");
}

async function readFileAsDataUrl(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

function refreshIcons() {
  if (window.lucide) window.lucide.createIcons();
}

document.addEventListener("click", (event) => {
  const nav = event.target.closest("[data-view]");
  if (nav) showView(nav.dataset.view);

  const personNode = event.target.closest("[data-person-id]");
  if (personNode && !event.target.closest(".edit-person")) openProfile(personNode.dataset.personId);

  if (event.target.matches("[data-close-modal]") || event.target.closest("[data-close-modal]")) closeModals();
  if (event.target.matches("[data-open-admin]") || event.target.closest("[data-open-admin]")) {
    requestAdminAccess();
  }
});

document.querySelector("#unlock-admin").addEventListener("click", () => openModal("#password-modal"));
dom.sidebarAdminTrigger.addEventListener("click", requestAdminAccess);
dom.exitAdmin.addEventListener("click", leaveAdminMode);
dom.adminPreviewTree.addEventListener("click", leaveAdminMode);

document.querySelector("#password-form").addEventListener("submit", (event) => {
  event.preventDefault();
  const input = document.querySelector("#admin-password");
  const error = document.querySelector("#password-error");
  if (input.value === "family2026") {
    state.adminUnlocked = true;
    sessionStorage.setItem("family-admin-unlocked", "true");
    input.value = "";
    error.classList.add("hidden");
    closeModals();
    showView("admin");
    renderAdminState();
    notify("Админ-панель открыта");
  } else {
    error.classList.remove("hidden");
    input.select();
  }
});

document.querySelector("#new-person").addEventListener("click", () => openPersonEditor());
document.querySelectorAll("[data-admin-tab]").forEach((tab) => {
  tab.addEventListener("click", () => {
    document.querySelectorAll("[data-admin-tab]").forEach((item) => item.classList.toggle("active", item === tab));
    document.querySelectorAll(".admin-panel").forEach((panel) => panel.classList.toggle("active", panel.id === tab.dataset.adminTab));
  });
});

document.querySelector("#person-form").addEventListener("submit", async (event) => {
  event.preventDefault();
  const id = document.querySelector("#person-id").value || `person-${Date.now()}`;
  const current = personById(id);
  const upload = document.querySelector("#person-photo-file").files[0];
  let photo = document.querySelector("#person-photo").value.trim();
  if (upload) photo = await readFileAsDataUrl(upload);
  if (!photo) photo = current?.photo || `https://ui-avatars.com/api/?name=${encodeURIComponent(document.querySelector("#person-name").value)}&background=c8d3c6&color=1d2a2b`;

  const person = {
    id,
    name: document.querySelector("#person-name").value.trim(),
    years: document.querySelector("#person-years").value.trim(),
    role: document.querySelector("#person-role").value.trim() || "член семьи",
    status: document.querySelector("#person-status").value,
    description: document.querySelector("#person-description").value.trim() || "История этого человека ещё будет дополнена.",
    photo,
    moments: current?.moments || [[new Date().getFullYear().toString(), "Профиль добавлен в семейный архив."]],
  };

  if (current) state.people = state.people.map((item) => item.id === id ? person : item);
  else state.people.push(person);
  save("family-people", state.people);
  renderPeople();
  renderAdminPeople();
  closeModals();
  notify(current ? "Профиль обновлён" : "Человек добавлен в архив");
});

document.querySelector("#new-photo").addEventListener("click", () => {
  showView("people");
  notify("Добавление фотографий будет следующим шагом. Профили уже можно редактировать.");
});

document.querySelector("#people-search").addEventListener("input", renderPeople);
document.querySelectorAll("[data-people-filter]").forEach((button) => {
  button.addEventListener("click", () => {
    state.peopleFilter = button.dataset.peopleFilter;
    document.querySelectorAll("[data-people-filter]").forEach((item) => item.classList.toggle("active", item === button));
    renderPeople();
  });
});

document.querySelector("#zoom-in").addEventListener("click", () => {
  state.treeZoom = Math.min(1.2, +(state.treeZoom + 0.1).toFixed(1));
  dom.treeScale.style.transform = `scale(${state.treeZoom})`;
  document.querySelector("#zoom-label").textContent = `${Math.round(state.treeZoom * 100)}%`;
});

document.querySelector("#zoom-out").addEventListener("click", () => {
  state.treeZoom = Math.max(0.6, +(state.treeZoom - 0.1).toFixed(1));
  dom.treeScale.style.transform = `scale(${state.treeZoom})`;
  document.querySelector("#zoom-label").textContent = `${Math.round(state.treeZoom * 100)}%`;
});

document.querySelector("#fit-tree").addEventListener("click", () => {
  state.treeZoom = window.innerWidth < 640 ? 0.72 : 0.9;
  dom.treeScale.style.transform = `scale(${state.treeZoom})`;
  document.querySelector("#zoom-label").textContent = `${Math.round(state.treeZoom * 100)}%`;
  document.querySelector("#tree-canvas").scrollTo({ left: 0, top: 0, behavior: "smooth" });
});

document.querySelectorAll("[data-tree-filter]").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelectorAll("[data-tree-filter]").forEach((item) => item.classList.toggle("active", item === button));
    const showLivingOnly = button.dataset.treeFilter === "living";
    document.querySelectorAll(".person-node").forEach((node) => {
      const person = personById(node.dataset.personId);
      node.closest(".tree-node").style.opacity = showLivingOnly && person.status !== "living" ? "0.16" : "1";
    });
    dom.treeEmpty.classList.add("hidden");
  });
});

document.querySelector("#global-search").addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    const query = event.target.value.trim();
    showView("people");
    dom.peopleSearch.value = query;
    renderPeople();
  }
});

document.addEventListener("keydown", (event) => {
  if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
    event.preventDefault();
    document.querySelector("#global-search").focus();
  }
  if (event.key === "Escape") closeModals();
});

document.querySelector("#top-avatar").addEventListener("click", () => openProfile("liza"));

document.addEventListener("error", (event) => {
  if (event.target instanceof HTMLImageElement) {
    event.target.classList.add("image-failed");
  }
}, true);

renderPeople();
renderAlbum();
renderTimeline();
renderAdminState();
refreshIcons();

const adminRoute = new URLSearchParams(window.location.search).get("admin") === "1";
if (adminRoute) requestAdminAccess();
