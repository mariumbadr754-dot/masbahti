/* =========================================================
   مسبحتي | Marium Badr
   Main Application
========================================================= */


/* =========================================================
   1. قاعدة بيانات الأذكار
   ملاحظة: سنراجع توثيق النصوص الشرعية مرة أخيرة قبل النشر النهائي.
========================================================= */

const DHIKR_LIST = [

  {
    id: "subhanallah",
    name: "سبحان الله",
    type: "sunnahCount",
    sunnahCount: 100,
    hadith:
      "«أيعجز أحدكم أن يكسب كل يوم ألف حسنة؟ يسبح مائة تسبيحة، فيكتب له ألف حسنة، أو يحط عنه ألف خطيئة»",
    source: "صحيح مسلم"
  },

  {
    id: "alhamdulillah",
    name: "الحمد لله",
    type: "free",
    hadith:
      "«والحمد لله تملأ الميزان»",
    source: "صحيح مسلم"
  },

  {
    id: "la-ilaha-illa-allah",
    name: "لا إله إلا الله",
    type: "free",
    hadith:
      "«أفضل الذكر لا إله إلا الله»",
    source: "رواه الترمذي وابن ماجه، وحسنه أهل العلم"
  },

  {
    id: "allahu-akbar",
    name: "الله أكبر",
    type: "free",
    hadith:
      "«أحب الكلام إلى الله أربع: سبحان الله، والحمد لله، ولا إله إلا الله، والله أكبر»",
    source: "صحيح مسلم"
  },

  {
    id: "subhan-wabihamdih",
    name: "سبحان الله وبحمده",
    type: "sunnahCount",
    sunnahCount: 100,
    hadith:
      "«من قال سبحان الله وبحمده في يوم مائة مرة، حُطَّت خطاياه وإن كانت مثل زبد البحر»",
    source: "متفق عليه"
  },

  {
    id: "subhanallah-alazim",
    name: "سبحان الله العظيم",
    type: "free",
    hadith:
      "«كلمتان خفيفتان على اللسان، ثقيلتان في الميزان، حبيبتان إلى الرحمن: سبحان الله العظيم، سبحان الله وبحمده»",
    source: "متفق عليه"
  },

  {
    id: "two-light-words",
    name: "سبحان الله وبحمده، سبحان الله العظيم",
    type: "free",
    hadith:
      "«كلمتان خفيفتان على اللسان، ثقيلتان في الميزان، حبيبتان إلى الرحمن: سبحان الله العظيم، سبحان الله وبحمده»",
    source: "متفق عليه"
  },

  {
    id: "istighfar",
    name: "أستغفر الله وأتوب إليه",
    type: "free",
    hadith:
      "«طوبى لمن وجد في صحيفته استغفارًا كثيرًا»",
    source: "رواه ابن ماجه، والحديث صحيح"
  },

  {
    id: "hawqala",
    name: "لا حول ولا قوة إلا بالله",
    type: "free",
    hadith:
      "«ألا أدلك على كنز من كنوز الجنة؟ لا حول ولا قوة إلا بالله»",
    source: "متفق عليه"
  },

  {
    id: "salawat",
    name: "اللهم صل وسلم على نبينا محمد",
    type: "free",
    hadith:
      "«من صلى عليَّ واحدة صلى الله عليه بها عشرًا»",
    source: "صحيح مسلم"
  },

  {
    id: "four-words",
    name: "سبحان الله والحمد لله ولا إله إلا الله والله أكبر",
    type: "free",
    hadith:
      "«أحب الكلام إلى الله أربع: سبحان الله، والحمد لله، ولا إله إلا الله، والله أكبر»",
    source: "صحيح مسلم"
  },

  {
    id: "tahlil-100",
    name:
      "لا إله إلا الله وحده لا شريك له، له الملك وله الحمد وهو على كل شيء قدير",
    type: "sunnahCount",
    sunnahCount: 100,
    hadith:
      "من قالها مائة مرة في يوم كان له عدل عشر رقاب، وكتبت له مائة حسنة، ومحيت عنه مائة سيئة، وكانت له حرزًا من الشيطان يومه ذلك حتى يمسي.",
    source: "متفق عليه"
  },

  {
    id: "juwayriyah",
    name:
      "سبحان الله عدد خلقه، سبحان الله رضا نفسه، سبحان الله زنة عرشه، سبحان الله مداد كلماته",
    type: "sunnahCount",
    sunnahCount: 3,
    hadith:
      "ثبت في حديث جويرية رضي الله عنها أن النبي ﷺ قال إنه قال أربع كلمات ثلاث مرات، لو وزنت بما قالت منذ بداية يومها لوزنتهن.",
    source: "صحيح مسلم"
  }

];


/* =========================================================
   2. الرسائل الإيمانية
========================================================= */

const FAITH_MESSAGES = [

  "وأنت في الطريق… اجعل لسانك رطبًا بذكر الله 🤍",

  "دقائق الانتظار يمكن أن تصبح دقائق ذكر 🌿",

  "لا تنتظر وقتًا فارغًا للذكر… اذكر الله وسط يومك.",

  "كلما فرغ لسانك… أعده إلى الذكر 🤍",

  "اجعل الاستغفار رفيق الطريق.",

  "ذكر قليل دائم خير من اندفاع ينقطع 🌿",

  "ما زال في يومك متسع لذكر الله 🌱",

  "لسان يذكر الله… نعمة تستحق الحمد.",

  "خذ معك ذكر الله أينما ذهبت 🤍",

  "اجعل دقائق يومك عامرة بذكر الله 🌿"

];


const CLOSING_MESSAGES = [

  "انتهى يوم وبقي أثر ما قدمت فيه، اللهم اجعلنا من الذاكرين الله كثيرًا والذاكرات 🤍",

  "كل يوم فرصة جديدة لذكر الله 🌿",

  "القليل الدائم أحب إلى النفس من اندفاع ينقطع.",

  "اللهم أعنّا على ذكرك وشكرك وحسن عبادتك 🤍",

  "خذ معك ذكر الله أينما ذهبت 🌱"

];


/* =========================================================
   3. مفاتيح التخزين
========================================================= */

const STORAGE_KEY = "masbahati_data_v1";


/* =========================================================
   4. الحالة الأساسية
========================================================= */

let state = {

  activeDhikrId: "subhanallah",

  activeMode: "free",

  vibration: true,

  darkMode: false,

  personalGoals: {},

  sessionCounters: {},

  history: {},

  lastActivityDate: null,

  lastOpenDate: null

};


let sessionStarted = false;


/* =========================================================
   5. أدوات التاريخ
========================================================= */

function getTodayKey() {

  const now = new Date();

  const year = now.getFullYear();

  const month =
    String(now.getMonth() + 1)
      .padStart(2, "0");

  const day =
    String(now.getDate())
      .padStart(2, "0");

  return `${year}-${month}-${day}`;
}


function getDateKey(date) {

  const year = date.getFullYear();

  const month =
    String(date.getMonth() + 1)
      .padStart(2, "0");

  const day =
    String(date.getDate())
      .padStart(2, "0");

  return `${year}-${month}-${day}`;
}


function getYesterdayKey() {

  const date = new Date();

  date.setDate(
    date.getDate() - 1
  );

  return getDateKey(date);
}


function parseDateKey(key) {

  const parts =
    key.split("-");

  return new Date(
    Number(parts[0]),
    Number(parts[1]) - 1,
    Number(parts[2])
  );
}


function daysBetween(
  firstKey,
  secondKey
) {

  if (
    !firstKey ||
    !secondKey
  ) {

    return 0;

  }

  const first =
    parseDateKey(firstKey);

  const second =
    parseDateKey(secondKey);

  const difference =
    second - first;

  return Math.round(
    difference /
    86400000
  );
}


/* =========================================================
   6. بيانات اليوم
========================================================= */

function createEmptyDay() {

  return {

    total: 0,

    sessions: 0,

    dhikr: {}

  };

}


function ensureToday() {

  const today =
    getTodayKey();

  if (
    !state.history[today]
  ) {

    state.history[today] =
      createEmptyDay();

  }

  return state.history[today];
}


/* =========================================================
   7. الحفظ والتحميل
========================================================= */

function saveState() {

  try {

    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify(state)
    );

  }

  catch (error) {

    console.error(
      "تعذر حفظ البيانات",
      error
    );

  }

}


function loadState() {

  try {

    const saved =
      localStorage.getItem(
        STORAGE_KEY
      );

    if (saved) {

      const parsed =
        JSON.parse(saved);

      state = {

        ...state,

        ...parsed,

        personalGoals:
          parsed.personalGoals || {},

        sessionCounters:
          parsed.sessionCounters || {},

        history:
          parsed.history || {}

      };

    }

  }

  catch (error) {

    console.error(
      "تعذر تحميل البيانات",
      error
    );

  }

}


/* =========================================================
   8. عناصر الصفحة
========================================================= */

const screens = {

  home:
    document.getElementById(
      "homeScreen"
    ),

  tasbeeh:
    document.getElementById(
      "tasbeehScreen"
    ),

  today:
    document.getElementById(
      "todayScreen"
    ),

  stats:
    document.getElementById(
      "statsScreen"
    )

};


const dhikrList =
  document.getElementById(
    "dhikrList"
  );


const activeDhikrPanel =
  document.getElementById(
    "activeDhikrPanel"
  );


const activeDhikrName =
  document.getElementById(
    "activeDhikrName"
  );


const sessionCounter =
  document.getElementById(
    "sessionCounter"
  );


const activeDhikrTodayTotal =
  document.getElementById(
    "activeDhikrTodayTotal"
  );


const allTodayTotal =
  document.getElementById(
    "allTodayTotal"
  );


const tapCounterButton =
  document.getElementById(
    "tapCounterButton"
  );


const freeModeBtn =
  document.getElementById(
    "freeModeBtn"
  );


const sunnahModeBtn =
  document.getElementById(
    "sunnahModeBtn"
  );


const personalGoalBtn =
  document.getElementById(
    "personalGoalBtn"
  );


const personalGoalBox =
  document.getElementById(
    "personalGoalBox"
  );


const personalGoalInput =
  document.getElementById(
    "personalGoalInput"
  );


const goalProgress =
  document.getElementById(
    "goalProgress"
  );


/* =========================================================
   9. التنقل
========================================================= */

function showScreen(
  screenName
) {

  Object.values(
    screens
  ).forEach(

    screen => {

      screen.classList.remove(
        "active"
      );

    }

  );


  screens[
    screenName
  ].classList.add(
    "active"
  );


  document
    .querySelectorAll(
      ".nav-button"
    )
    .forEach(

      button => {

        button.classList.toggle(

          "active",

          button.dataset.screen ===
          screenName

        );

      }

    );


  if (
    screenName === "today"
  ) {

    renderToday();

  }


  if (
    screenName === "stats"
  ) {

    renderStatistics();

  }


  window.scrollTo(
    0,
    0
  );

}


document
  .querySelectorAll(
    ".nav-button"
  )
  .forEach(

    button => {

      button.addEventListener(

        "click",

        () => {

          showScreen(
            button.dataset.screen
          );

        }

      );

    }

  );


document
  .querySelectorAll(
    "[data-go]"
  )
  .forEach(

    button => {

      button.addEventListener(

        "click",

        () => {

          showScreen(
            button.dataset.go
          );

        }

      );

    }

  );


document
  .getElementById(
    "startDhikrBtn"
  )
  .addEventListener(

    "click",

    () => {

      showScreen(
        "tasbeeh"
      );

    }

  );


/* =========================================================
   10. عرض قائمة الأذكار
========================================================= */

function renderDhikrList() {

  dhikrList.innerHTML = "";


  DHIKR_LIST.forEach(

    dhikr => {

      const button =
        document.createElement(
          "button"
        );


      button.className =
        "dhikr-card";


      button.type =
        "button";


      const modeText =
        dhikr.type ===
        "sunnahCount"

          ? `العدد الوارد: ${dhikr.sunnahCount} • أو ذكر حر ♾️`

          : "ذكر حر ♾️";


      button.innerHTML = `

        <strong>
          ${dhikr.name}
        </strong>

        <span>
          ${modeText}
        </span>

      `;


      button.addEventListener(

        "click",

        () => {

          selectDhikr(
            dhikr.id
          );

        }

      );


      dhikrList.appendChild(
        button
      );

    }

  );

}


/* =========================================================
   11. الحصول على الذكر الحالي
========================================================= */

function getActiveDhikr() {

  return DHIKR_LIST.find(

    dhikr =>
      dhikr.id ===
      state.activeDhikrId

  );

}


/* =========================================================
   12. اختيار الذكر
========================================================= */

function selectDhikr(
  dhikrId
) {

  const dhikr =
    DHIKR_LIST.find(

      item =>
        item.id ===
        dhikrId

    );


  if (!dhikr) {

    return;

  }


  state.activeDhikrId =
    dhikrId;


  state.activeMode =
    "free";


  sessionStarted =
    false;


  saveState();


  activeDhikrPanel
    .classList.remove(
      "hidden"
    );


  activeDhikrName
    .textContent =
    dhikr.name;


  if (
    dhikr.type ===
    "sunnahCount"
  ) {

    sunnahModeBtn
      .classList.remove(
        "hidden"
      );


    sunnahModeBtn
      .textContent =
      `العدد الوارد: ${dhikr.sunnahCount}`;

  }

  else {

    sunnahModeBtn
      .classList.add(
        "hidden"
      );

  }


  setMode(
    "free"
  );


  renderCounter();


  activeDhikrPanel
    .scrollIntoView({

      behavior:
        "smooth",

      block:
        "start"

    });

}


/* =========================================================
   13. أوضاع العد
========================================================= */

function setMode(
  mode
) {

  state.activeMode =
    mode;


  freeModeBtn
    .classList.toggle(
      "active",
      mode === "free"
    );


  sunnahModeBtn
    .classList.toggle(
      "active",
      mode === "sunnah"
    );


  personalGoalBtn
    .classList.toggle(
      "active",
      mode === "personal"
    );


  personalGoalBox
    .classList.toggle(
      "hidden",
      mode !== "personal"
    );


  saveState();

  renderCounter();

}


freeModeBtn.addEventListener(

  "click",

  () => {

    setMode(
      "free"
    );

  }

);


sunnahModeBtn.addEventListener(

  "click",

  () => {

    setMode(
      "sunnah"
    );

  }

);


personalGoalBtn.addEventListener(

  "click",

  () => {

    setMode(
      "personal"
    );

  }

);


/* =========================================================
   14. الهدف الشخصي
========================================================= */

document
  .getElementById(
    "saveGoalBtn"
  )
  .addEventListener(

    "click",

    () => {

      const goal =
        Number(
          personalGoalInput.value
        );


      if (
        !goal ||
        goal < 1
      ) {

        alert(
          "اكتبي هدفًا صحيحًا أكبر من صفر."
        );

        return;

      }


      state.personalGoals[
        state.activeDhikrId
      ] = goal;


      saveState();

      renderCounter();

    }

  );


/* =========================================================
   15. عداد الجلسة
========================================================= */

function getSessionCount() {

  return (
    state.sessionCounters[
      state.activeDhikrId
    ] || 0
  );

}


function setSessionCount(
  value
) {

  state.sessionCounters[
    state.activeDhikrId
  ] = value;

}


/* =========================================================
   16. الضغط للتسبيح
========================================================= */

function registerDhikrPress() {

  ensureToday();


  const todayKey =
    getTodayKey();


  const today =
    state.history[
      todayKey
    ];


  const dhikrId =
    state.activeDhikrId;


  /* عداد الجلسة */

  const newSessionCount =
    getSessionCount() + 1;


  setSessionCount(
    newSessionCount
  );


  /* بدء جلسة جديدة */

  if (
    !sessionStarted
  ) {

    today.sessions++;

    sessionStarted =
      true;

  }


  /* إجمالي الذكر المحدد */

  today.dhikr[
    dhikrId
  ] =
    (
      today.dhikr[
        dhikrId
      ] || 0
    ) + 1;


  /* إجمالي اليوم */

  today.total++;


  state.lastActivityDate =
    todayKey;


  saveState();


  vibrate();


  renderCounter();

  updateHomeTotals();

  showMilestoneMessage(
    today.total
  );

}


tapCounterButton
  .addEventListener(

    "click",

    registerDhikrPress

  );


/* منع بعض النقرات المزدوجة غير المقصودة */

tapCounterButton
  .addEventListener(

    "dblclick",

    event => {

      event.preventDefault();

    }

  );


/* =========================================================
   17. عرض العداد
========================================================= */

function renderCounter() {

  const dhikr =
    getActiveDhikr();


  if (!dhikr) {

    return;

  }


  const today =
    ensureToday();


  const session =
    getSessionCount();


  sessionCounter
    .textContent =
    session;


  activeDhikrName
    .textContent =
    dhikr.name;


  activeDhikrTodayTotal
    .textContent =
    today.dhikr[
      dhikr.id
    ] || 0;


  allTodayTotal
    .textContent =
    today.total;


  goalProgress
    .textContent =
    "";


  if (
    state.activeMode ===
    "sunnah" &&
    dhikr.sunnahCount
  ) {

    goalProgress
      .textContent =
      `${session} / ${dhikr.sunnahCount} — العدد الوارد في الحديث`;

  }


  if (
    state.activeMode ===
    "personal"
  ) {

    const goal =
      state.personalGoals[
        dhikr.id
      ];


    if (goal) {

      personalGoalInput
        .value =
        goal;


      goalProgress
        .textContent =
        `${session} / ${goal} — هدف شخصي`;

    }

    else {

      goalProgress
        .textContent =
        "حددي هدفًا شخصيًا إن أحببتِ";

    }

  }

}


/* =========================================================
   18. الاهتزاز
========================================================= */

function vibrate() {

  if (
    !state.vibration
  ) {

    return;

  }


  if (
    navigator.vibrate
  ) {

    navigator.vibrate(
      18
    );

  }

}


const vibrationToggle =
  document.getElementById(
    "vibrationToggle"
  );


vibrationToggle
  .addEventListener(

    "change",

    () => {

      state.vibration =
        vibrationToggle.checked;


      saveState();

    }

  );


/* =========================================================
   19. تصفير عداد الجلسة
========================================================= */

const resetModal =
  document.getElementById(
    "resetModal"
  );


document
  .getElementById(
    "resetSessionBtn"
  )
  .addEventListener(

    "click",

    () => {

      resetModal
        .classList.remove(
          "hidden"
        );

    }

  );


document
  .getElementById(
    "cancelResetBtn"
  )
  .addEventListener(

    "click",

    closeResetModal

  );


document
  .getElementById(
    "confirmResetBtn"
  )
  .addEventListener(

    "click",

    () => {

      setSessionCount(
        0
      );


      sessionStarted =
        false;


      saveState();

      renderCounter();

      closeResetModal();

    }

  );


function closeResetModal() {

  resetModal
    .classList.add(
      "hidden"
    );

}


/* =========================================================
   20. فضل الذكر
========================================================= */

const virtueModal =
  document.getElementById(
    "virtueModal"
  );


document
  .getElementById(
    "dhikrVirtueBtn"
  )
  .addEventListener(

    "click",

    () => {

      const dhikr =
        getActiveDhikr();


      document
        .getElementById(
          "virtueDhikrName"
        )
        .textContent =
        dhikr.name;


      document
        .getElementById(
          "virtueHadith"
        )
        .textContent =
        dhikr.hadith;


      document
        .getElementById(
          "virtueSource"
        )
        .textContent =
        dhikr.source;


      const countBox =
        document.getElementById(
          "virtueCountBox"
        );


      if (
        dhikr.sunnahCount
      ) {

        countBox
          .classList.remove(
            "hidden"
          );


        document
          .getElementById(
            "virtueCount"
          )
          .textContent =
          `${dhikr.sunnahCount} مرة`;

      }

      else {

        countBox
          .classList.add(
            "hidden"
          );

      }


      virtueModal
        .classList.remove(
          "hidden"
        );

    }

  );


document
  .getElementById(
    "closeVirtueModal"
  )
  .addEventListener(

    "click",

    () => {

      virtueModal
        .classList.add(
          "hidden"
        );

    }

  );


/* =========================================================
   21. حصيلة اليوم
========================================================= */

function renderToday() {

  const today =
    ensureToday();


  const yesterday =
    state.history[
      getYesterdayKey()
    ] || createEmptyDay();


  document
    .getElementById(
      "todayTotal"
    )
    .textContent =
    today.total;


  document
    .getElementById(
      "comparisonTodayTotal"
    )
    .textContent =
    today.total;


  document
    .getElementById(
      "yesterdayTotal"
    )
    .textContent =
    yesterday.total;


  document
    .getElementById(
      "todaySessions"
    )
    .textContent =
    today.sessions;


  const breakdown =
    document.getElementById(
      "todayDhikrBreakdown"
    );


  breakdown.innerHTML =
    "";


  const usedDhikr =
    Object.entries(
      today.dhikr
    )
    .filter(
      ([, count]) =>
        count > 0
    )
    .sort(
      (a, b) =>
        b[1] - a[1]
    );


  if (
    usedDhikr.length === 0
  ) {

    breakdown.innerHTML = `

      <div class="breakdown-row">

        <span>
          لم تُسجل أذكار اليوم بعد
        </span>

        <strong>
          🌿
        </strong>

      </div>

    `;

  }


  usedDhikr.forEach(

    ([id, count]) => {

      const dhikr =
        DHIKR_LIST.find(
          item =>
            item.id === id
        );


      if (!dhikr) {

        return;

      }


      const row =
        document.createElement(
          "div"
        );


      row.className =
        "breakdown-row";


      row.innerHTML = `

        <span>
          ${dhikr.name}
        </span>

        <strong>
          ${count}
        </strong>

      `;


      breakdown.appendChild(
        row
      );

    }

  );


  renderYesterdayComparison(
    today.total,
    yesterday.total
  );


  document
    .getElementById(
      "todayClosingMessage"
    )
    .textContent =
    randomItem(
      CLOSING_MESSAGES
    );

}


/* =========================================================
   22. مقارنة اليوم بالأمس
========================================================= */

function renderYesterdayComparison(
  today,
  yesterday
) {

  const element =
    document.getElementById(
      "comparisonMessage"
    );


  if (
    yesterday === 0
  ) {

    element.textContent =
      "ابدأ يومك بما تيسر من ذكر الله 🤍";

    return;

  }


  if (
    today > yesterday
  ) {

    const difference =
      today - yesterday;


    const percentage =
      (
        difference /
        yesterday *
        100
      ).toFixed(1);


    element.textContent =
      `زدت اليوم ${difference} مرة عن أمس 🌱 (+${percentage}%)`;

  }

  else {

    element.textContent =
      "ما زال في يومك متسع لذكر الله 🤍";

  }

}


/* =========================================================
   23. إحصائيات اليوم
========================================================= */

function getMostUsedDhikr(
  day
) {

  const entries =
    Object.entries(
      day.dhikr || {}
    );


  if (
    entries.length === 0
  ) {

    return null;

  }


  entries.sort(

    (a, b) =>
      b[1] - a[1]

  );


  const [
    id,
    count
  ] =
    entries[0];


  const dhikr =
    DHIKR_LIST.find(

      item =>
        item.id === id

    );


  if (!dhikr) {

    return null;

  }


  return {

    name:
      dhikr.name,

    count:
      count

  };

}


/* =========================================================
   24. الأسبوع
========================================================= */

function getLastSevenDays() {

  const days = [];


  for (
    let i = 6;
    i >= 0;
    i--
  ) {

    const date =
      new Date();


    date.setDate(
      date.getDate() - i
    );


    const key =
      getDateKey(
        date
      );


    days.push({

      key,

      date,

      data:
        state.history[key] ||
        createEmptyDay()

    });

  }


  return days;

}


/* =========================================================
   25. الشهر
========================================================= */

function getCurrentMonthDays() {

  const now =
    new Date();


  const year =
    now.getFullYear();


  const month =
    now.getMonth();


  const daysInMonth =
    new Date(
      year,
      month + 1,
      0
    ).getDate();


  const days = [];


  for (
    let day = 1;
    day <= daysInMonth;
    day++
  ) {

    const date =
      new Date(
        year,
        month,
        day
      );


    const key =
      getDateKey(
        date
      );


    days.push({

      key,

      date,

      data:
        state.history[key] ||
        createEmptyDay()

    });

  }


  return days;

}


function getPreviousMonthTotal() {

  const now =
    new Date();


  const previous =
    new Date(
      now.getFullYear(),
      now.getMonth() - 1,
      1
    );


  const year =
    previous.getFullYear();


  const month =
    previous.getMonth();


  let total = 0;


  Object.entries(
    state.history
  )
  .forEach(

    ([key, day]) => {

      const date =
        parseDateKey(
          key
        );


      if (
        date.getFullYear() === year &&
        date.getMonth() === month
      ) {

        total +=
          day.total || 0;

      }

    }

  );


  return total;

}


/* =========================================================
   26. الإحصائيات الكاملة
========================================================= */

function renderStatistics() {

  const today =
    ensureToday();


  const yesterday =
    state.history[
      getYesterdayKey()
    ] || createEmptyDay();


  /* اليوم */

  document
    .getElementById(
      "statsTodayTotal"
    )
    .textContent =
    today.total;


  document
    .getElementById(
      "statsTodaySessions"
    )
    .textContent =
    today.sessions;


  const mostUsed =
    getMostUsedDhikr(
      today
    );


  document
    .getElementById(
      "mostUsedToday"
    )
    .textContent =
    mostUsed

      ? `${mostUsed.name} — ${mostUsed.count}`

      : "لا توجد بيانات بعد";


  const comparison =
    document.getElementById(
      "dayComparisonStat"
    );


  if (
    yesterday.total === 0
  ) {

    comparison.textContent =
      "لا توجد بيانات كافية للمقارنة";

  }

  else if (
    today.total >
    yesterday.total
  ) {

    comparison.textContent =
      `+${today.total - yesterday.total} عن أمس`;

  }

  else {

    comparison.textContent =
      "ما زال في يومك متسع للذكر 🤍";

  }


  renderWeekStats();

  renderMonthStats();

  renderStreak();

}


/* =========================================================
   27. رسم الأسبوع
========================================================= */

function renderWeekStats() {

  const days =
    getLastSevenDays();


  const total =
    days.reduce(

      (sum, item) =>
        sum +
        item.data.total,

      0

    );


  const average =
    Math.round(
      total / 7
    );


  document
    .getElementById(
      "weekTotal"
    )
    .textContent =
    total;


  document
    .getElementById(
      "weekAverage"
    )
    .textContent =
    average;


  const chart =
    document.getElementById(
      "weekChart"
    );


  chart.innerHTML =
    "";


  const max =
    Math.max(

      ...days.map(
        item =>
          item.data.total
      ),

      1

    );


  const dayNames = [

    "أحد",
    "اثن",
    "ثلا",
    "أرب",
    "خمي",
    "جمع",
    "سبت"

  ];


  days.forEach(

    item => {

      const height =
        Math.max(

          4,

          (
            item.data.total /
            max
          ) * 160

        );


      const column =
        document.createElement(
          "div"
        );


      column.className =
        "bar-column";


      column.innerHTML = `

        <strong style="
          font-size:10px;
          display:block;
          margin-bottom:5px;
        ">
          ${item.data.total}
        </strong>

        <div
          class="bar"
          style="
            height:${height}px;
          "
        ></div>

        <span>
          ${dayNames[item.date.getDay()]}
        </span>

      `;


      chart.appendChild(
        column
      );

    }

  );

}


/* =========================================================
   28. إحصائيات الشهر
========================================================= */

function renderMonthStats() {

  const days =
    getCurrentMonthDays();


  const now =
    new Date();


  const currentDayNumber =
    now.getDate();


  const elapsedDays =
    days.slice(
      0,
      currentDayNumber
    );


  const total =
    elapsedDays.reduce(

      (sum, item) =>
        sum +
        item.data.total,

      0

    );


  const activeDays =
    elapsedDays.filter(

      item =>
        item.data.total > 0

    ).length;


  const average =
    activeDays > 0

      ? Math.round(
          total /
          activeDays
        )

      : 0;


  /* أعلى يوم */

  let bestDay =
    null;


  elapsedDays.forEach(

    item => {

      if (
        !bestDay ||
        item.data.total >
        bestDay.data.total
      ) {

        bestDay =
          item;

      }

    }

  );


  /* أكثر ذكر */

  const dhikrTotals = {};


  elapsedDays.forEach(

    item => {

      Object.entries(
        item.data.dhikr || {}
      )
      .forEach(

        ([id, count]) => {

          dhikrTotals[id] =
            (
              dhikrTotals[id] ||
              0
            ) + count;

        }

      );

    }

  );


  let topDhikr =
    null;


  Object.entries(
    dhikrTotals
  )
  .sort(
    (a, b) =>
      b[1] - a[1]
  )
  .forEach(

    ([id, count], index) => {

      if (
        index === 0
      ) {

        const dhikr =
          DHIKR_LIST.find(
            item =>
              item.id === id
          );


        if (dhikr) {

          topDhikr = {

            name:
              dhikr.name,

            count

          };

        }

      }

    }

  );


  const monthNames = [

    "يناير",
    "فبراير",
    "مارس",
    "أبريل",
    "مايو",
    "يونيو",
    "يوليو",
    "أغسطس",
    "سبتمبر",
    "أكتوبر",
    "نوفمبر",
    "ديسمبر"

  ];


  document
    .getElementById(
      "monthHarvestTitle"
    )
    .textContent =
    `حصاد ذكرك في ${monthNames[now.getMonth()]} 🤍`;


  document
    .getElementById(
      "monthTotal"
    )
    .textContent =
    total;


  document
    .getElementById(
      "monthActiveDays"
    )
    .textContent =
    `${activeDays} من ${currentDayNumber} يومًا`;


  document
    .getElementById(
      "monthTopDhikr"
    )
    .textContent =
    topDhikr

      ? `${topDhikr.name} — ${topDhikr.count}`

      : "—";


  document
    .getElementById(
      "monthBestDay"
    )
    .textContent =
    bestDay &&
    bestDay.data.total > 0

      ? `${bestDay.date.getDate()} ${monthNames[now.getMonth()]} — ${bestDay.data.total}`

      : "—";


  document
    .getElementById(
      "monthAverage"
    )
    .textContent =
    average;


  renderMonthComparison(
    total
  );

}


/* =========================================================
   29. مقارنة الشهر
========================================================= */

function renderMonthComparison(
  currentTotal
) {

  const previousTotal =
    getPreviousMonthTotal();


  const element =
    document.getElementById(
      "monthComparisonMessage"
    );


  if (
    previousTotal === 0
  ) {

    element.textContent =
      "شهر جديد… اجعله عامرًا بذكر الله 🤍";

    return;

  }


  if (
    currentTotal >
    previousTotal
  ) {

    const difference =
      currentTotal -
      previousTotal;


    const percentage =
      (
        difference /
        previousTotal *
        100
      ).toFixed(1);


    element.textContent =
      `زاد تسجيل ذكرك هذا الشهر بنسبة ${percentage}% عن الشهر السابق 🌱`;

  }

  else {

    element.textContent =
      "كل يوم فرصة جديدة، والقليل الدائم خير من الكثير المنقطع 🌿";

  }

}


/* =========================================================
   30. الاستمرارية
========================================================= */

function calculateStreak() {

  let streak = 0;


  let date =
    new Date();


  const todayKey =
    getDateKey(
      date
    );


  const today =
    state.history[
      todayKey
    ];


  /* لو لم يبدأ اليوم بعد، نحسب حتى أمس */

  if (
    !today ||
    today.total === 0
  ) {

    date.setDate(
      date.getDate() - 1
    );

  }


  while (true) {

    const key =
      getDateKey(
        date
      );


    const day =
      state.history[
        key
      ];


    if (
      day &&
      day.total > 0
    ) {

      streak++;

      date.setDate(
        date.getDate() - 1
      );

    }

    else {

      break;

    }

  }


  return streak;

}


function renderStreak() {

  const streak =
    calculateStreak();


  const plant =
    document.getElementById(
      "streakPlant"
    );


  const text =
    document.getElementById(
      "streakDays"
    );


  const message =
    document.getElementById(
      "streakMessage"
    );


  text.textContent =
    `${streak} يوم`;


  if (
    streak >= 30
  ) {

    plant.textContent =
      "🌳";

    message.textContent =
      "استمرارية جميلة… اللهم أعنّا على دوام ذكرك 🤍";

  }

  else if (
    streak >= 7
  ) {

    plant.textContent =
      "🌿";

    message.textContent =
      `ذكرت الله ${streak} أيام متتالية 🌱`;

  }

  else if (
    streak >= 3
  ) {

    plant.textContent =
      "🌱";

    message.textContent =
      "خطوات صغيرة مستمرة تصنع عادة جميلة.";

  }

  else if (
    streak >= 1
  ) {

    plant.textContent =
      "🌰";

    message.textContent =
      "بداية طيبة… استمر بما يتيسر 🤍";

  }

  else {

    plant.textContent =
      "🌱";

    message.textContent =
      "يوم جديد… وبداية جديدة 🤍";

  }

}


/* =========================================================
   31. تبويبات الإحصائيات
========================================================= */

document
  .querySelectorAll(
    ".stats-tab"
  )
  .forEach(

    tab => {

      tab.addEventListener(

        "click",

        () => {

          document
            .querySelectorAll(
              ".stats-tab"
            )
            .forEach(

              item =>
                item.classList.remove(
                  "active"
                )

            );


          tab.classList.add(
            "active"
          );


          document
            .querySelectorAll(
              ".stats-panel"
            )
            .forEach(

              panel =>
                panel.classList.remove(
                  "active"
                )

            );


          const period =
            tab.dataset.period;


          document
            .getElementById(
              `${period}Stats`
            )
            .classList.add(
              "active"
            );

        }

      );

    }

  );


/* =========================================================
   32. رسائل حسب العدد
========================================================= */

function showMilestoneMessage(
  total
) {

  const messageBox =
    document.querySelector(
      "#tasbeehMessage p"
    );


  const yesterday =
    state.history[
      getYesterdayKey()
    ] || createEmptyDay();


  if (
    total === 100
  ) {

    messageBox.textContent =
      "سجلت مسبحتك 100 مرة من الذكر اليوم 🤍 استمر واجعل الذكر رفيق يومك.";

  }

  else if (
    total === 500
  ) {

    messageBox.textContent =
      "500 مرة من الذكر مسجلة اليوم 🌿 ما شاء الله، استمر في ذكر الله.";

  }

  else if (
    total === 1000
  ) {

    messageBox.textContent =
      "سجلت مسبحتك 1000 مرة من الذكر اليوم 🤍 اللهم تقبل وأعنّا على دوام ذكرك.";

  }

  else if (
    yesterday.total > 0 &&
    total ===
    yesterday.total + 1
  ) {

    messageBox.textContent =
      "ما شاء الله 🌱 تجاوزت حصيلة أمس، واجعل المنافسة دائمًا مع نفسك.";

  }

  else if (
    total % 25 === 0
  ) {

    messageBox.textContent =
      randomItem(
        FAITH_MESSAGES
      );

  }

}


/* =========================================================
   33. الذكر العشوائي
========================================================= */

document
  .getElementById(
    "randomDhikrBtn"
  )
  .addEventListener(

    "click",

    chooseRandomDhikr

  );


function chooseRandomDhikr() {

  const dhikr =
    randomItem(
      DHIKR_LIST
    );


  showScreen(
    "tasbeeh"
  );


  selectDhikr(
    dhikr.id
  );

}


/* =========================================================
   34. الاقتراحات من الرئيسية
========================================================= */

document
  .querySelectorAll(
    ".suggestion-card"
  )
  .forEach(

    button => {

      button.addEventListener(

        "click",

        () => {

          showScreen(
            "tasbeeh"
          );


          selectDhikr(
            button.dataset.dhikrId
          );

        }

      );

    }

  );


/* =========================================================
   35. الوضع الليلي
========================================================= */

const themeToggle =
  document.getElementById(
    "themeToggle"
  );


function applyTheme() {

  document.body
    .classList.toggle(
      "dark",
      state.darkMode
    );


  themeToggle.textContent =
    state.darkMode
      ? "☀️"
      : "🌙";

}


themeToggle.addEventListener(

  "click",

  () => {

    state.darkMode =
      !state.darkMode;


    applyTheme();

    saveState();

  }

);


/* =========================================================
   36. تحديث الرئيسية
========================================================= */

function updateHomeTotals() {

  const today =
    ensureToday();


  document
    .getElementById(
      "homeTodayTotal"
    )
    .textContent =
    today.total;


  document
    .getElementById(
      "homeFaithMessage"
    )
    .textContent =
    randomItem(
      FAITH_MESSAGES
    );

}


/* =========================================================
   37. رسالة العودة
========================================================= */

function renderReturnMessage() {

  const box =
    document.getElementById(
      "returnMessage"
    );


  if (
    !state.lastActivityDate
  ) {

    box.classList.add(
      "hidden"
    );

    return;

  }


  const difference =
    daysBetween(

      state.lastActivityDate,

      getTodayKey()

    );


  if (
    difference >= 2
  ) {

    box.textContent =
      "مرحبًا بعودتك 🌿 لا يهم كم مضى… المهم أن تبدأ من جديد.";


    box.classList.remove(
      "hidden"
    );

  }

  else {

    box.classList.add(
      "hidden"
    );

  }

}


/* =========================================================
   38. المشاركة
========================================================= */

const shareModal =
  document.getElementById(
    "shareModal"
  );


document
  .getElementById(
    "openShareBtn"
  )
  .addEventListener(

    "click",

    () => {

      shareModal.classList.remove(
        "hidden"
      );

    }

  );


document
  .getElementById(
    "closeShareModal"
  )
  .addEventListener(

    "click",

    () => {

      shareModal.classList.add(
        "hidden"
      );

    }

  );


const SHARE_TEXT =
  "مسبحة إلكترونية بسيطة تساعدك على ذكر الله أينما كنت 🤍🌿";


document
  .getElementById(
    "shareNativeBtn"
  )
  .addEventListener(

    "click",

    async () => {

      if (
        navigator.share
      ) {

        try {

          await navigator.share({

            title:
              "مسبحتي",

            text:
              SHARE_TEXT,

            url:
              window.location.href

          });

        }

        catch (error) {

          console.log(
            "تم إغلاق المشاركة"
          );

        }

      }

      else {

        copyCurrentLink();

      }

    }

  );


document
  .getElementById(
    "shareWhatsAppBtn"
  )
  .addEventListener(

    "click",

    () => {

      const text =
        `${SHARE_TEXT}\n\n${window.location.href}`;


      window.open(

        "https://wa.me/?text=" +
        encodeURIComponent(
          text
        ),

        "_blank"

      );

    }

  );


document
  .getElementById(
    "shareFacebookBtn"
  )
  .addEventListener(

    "click",

    () => {

      const url =
        encodeURIComponent(
          window.location.href
        );


      window.open(

        `https://www.facebook.com/sharer/sharer.php?u=${url}`,

        "_blank"

      );

    }

  );


document
  .getElementById(
    "copyLinkBtn"
  )
  .addEventListener(

    "click",

    copyCurrentLink

  );


async function copyCurrentLink() {

  try {

    await navigator.clipboard
      .writeText(
        window.location.href
      );


    alert(
      "تم نسخ رابط المسبحة 🤍"
    );

  }

  catch (error) {

    prompt(
      "انسخي الرابط:",
      window.location.href
    );

  }

}


/* =========================================================
   39. إغلاق النوافذ بالضغط على الخلفية
========================================================= */

document
  .querySelectorAll(
    ".modal-backdrop"
  )
  .forEach(

    backdrop => {

      backdrop.addEventListener(

        "click",

        () => {

          backdrop
            .parentElement
            .classList.add(
              "hidden"
            );

        }

      );

    }

  );


/* =========================================================
   40. اختيار عنصر عشوائي
========================================================= */

function randomItem(
  array
) {

  return array[
    Math.floor(
      Math.random() *
      array.length
    )
  ];

}


/* =========================================================
   41. التعامل مع تغيير اليوم أثناء فتح الموقع
========================================================= */

let knownDate =
  getTodayKey();


function checkForNewDay() {

  const currentDate =
    getTodayKey();


  if (
    currentDate !==
    knownDate
  ) {

    knownDate =
      currentDate;


    ensureToday();


    sessionStarted =
      false;


    updateHomeTotals();

    renderCounter();

    renderToday();

    renderStatistics();

    saveState();

  }

}


/* نفحص التاريخ كل دقيقة */

setInterval(

  checkForNewDay,

  60000

);


/* =========================================================
   42. تشغيل التطبيق
========================================================= */

function initApp() {

  loadState();


  ensureToday();


  /* حفظ تاريخ الفتح */

  state.lastOpenDate =
    getTodayKey();


  saveState();


  /* الإعدادات */

  vibrationToggle.checked =
    state.vibration;


  applyTheme();


  /* القوائم */

  renderDhikrList();


  /* الرئيسية */

  updateHomeTotals();

  renderReturnMessage();


  /* فتح الذكر المحفوظ */

  const activeDhikr =
    getActiveDhikr();


  if (
    activeDhikr
  ) {

    activeDhikrName.textContent =
      activeDhikr.name;


    renderCounter();

  }


  /* إحصائيات أولية */

  renderToday();

  renderStatistics();

}


initApp();
