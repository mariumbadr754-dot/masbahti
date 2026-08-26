/* =========================================================
   مسبحتي
   Masbahaty
   Application JavaScript
========================================================= */


/* =========================================================
   1. إعدادات عامة
========================================================= */

const STORAGE_KEY = "masbahaty_data_v3";

const CONTACT_PHONE = "201012669500";

const SHARE_TEXT =
  "مسبحة إلكترونية بسيطة تساعدك على ذكر الله أينما كنت 🤍🌿";


/* =========================================================
   2. قاعدة بيانات الأذكار
========================================================= */

const DHIKR_LIST = [

  {
    id: "subhanallah",

    name: "سبحان الله",

    type: "sunnahCount",

    sunnahCount: 100,

    hadith:
      "«أيعجز أحدكم أن يكسب كل يوم ألف حسنة؟» فقيل: كيف يكسب أحدنا ألف حسنة؟ قال: «يسبح مائة تسبيحة، فيكتب له ألف حسنة، أو يحط عنه ألف خطيئة»",

    source:
      "صحيح مسلم (2698)",

    note:
      "العدد الوارد في هذا الحديث: 100 تسبيحة."
  },


  {
    id: "alhamdulillah",

    name: "الحمد لله",

    type: "free",

    hadith:
      "«والحمد لله تملأ الميزان»",

    source:
      "صحيح مسلم",

    note:
      "ذكر حر ♾️ ولا نضع له عددًا خاصًا من عندنا."
  },


  {
    id: "la-ilaha-illa-allah",

    name: "لا إله إلا الله",

    type: "free",

    hadith:
      "«أفضل الذكر لا إله إلا الله»",

    source:
      "رواه الترمذي وابن ماجه، وحسنه أهل العلم",

    note:
      "ذكر حر ♾️"
  },


  {
    id: "allahu-akbar",

    name: "الله أكبر",

    type: "free",

    hadith:
      "«أحب الكلام إلى الله أربع: سبحان الله، والحمد لله، ولا إله إلا الله، والله أكبر»",

    source:
      "صحيح مسلم",

    note:
      "ذكر حر ♾️"
  },


  {
    id: "subhan-wabihamdih",

    name: "سبحان الله وبحمده",

    type: "sunnahCount",

    sunnahCount: 100,

    hadith:
      "«من قال سبحان الله وبحمده في يوم مائة مرة، حطت خطاياه وإن كانت مثل زبد البحر»",

    source:
      "متفق عليه",

    note:
      "العدد الوارد في الحديث: 100 مرة في اليوم."
  },


  {
    id: "subhanallah-alazim",

    name: "سبحان الله العظيم",

    type: "free",

    hadith:
      "«كلمتان خفيفتان على اللسان، ثقيلتان في الميزان، حبيبتان إلى الرحمن: سبحان الله وبحمده، سبحان الله العظيم»",

    source:
      "متفق عليه",

    note:
      "ذكر حر ♾️"
  },


  {
    id: "two-light-words",

    name:
      "سبحان الله وبحمده، سبحان الله العظيم",

    type: "free",

    hadith:
      "«كلمتان خفيفتان على اللسان، ثقيلتان في الميزان، حبيبتان إلى الرحمن: سبحان الله وبحمده، سبحان الله العظيم»",

    source:
      "متفق عليه",

    note:
      "ذكر حر ♾️"
  },


  {
    id: "istighfar",

    name:
      "أستغفر الله وأتوب إليه",

    type: "free",

    hadith:
      "«طوبى لمن وجد في صحيفته استغفارًا كثيرًا»",

    source:
      "رواه ابن ماجه، وصححه أهل العلم",

    note:
      "لا نضع لهذا الحديث عددًا شرعيًا ثابتًا."
  },


  {
    id: "hawqala",

    name:
      "لا حول ولا قوة إلا بالله",

    type: "free",

    hadith:
      "«ألا أدلك على كنز من كنوز الجنة؟ لا حول ولا قوة إلا بالله»",

    source:
      "متفق عليه",

    note:
      "ذكر حر ♾️"
  },


  {
    id: "salawat",

    name:
      "اللهم صل وسلم على نبينا محمد",

    type: "free",

    hadith:
      "«من صلى علي واحدة صلى الله عليه بها عشرًا»",

    source:
      "صحيح مسلم",

    note:
      "ذكر حر ♾️"
  },


  {
    id: "four-words",

    name:
      "سبحان الله والحمد لله ولا إله إلا الله والله أكبر",

    type: "free",

    hadith:
      "«أحب الكلام إلى الله أربع: سبحان الله، والحمد لله، ولا إله إلا الله، والله أكبر»",

    source:
      "صحيح مسلم",

    note:
      "ذكر حر ♾️"
  },


  {
    id: "tahlil-100",

    name:
      "لا إله إلا الله وحده لا شريك له، له الملك وله الحمد وهو على كل شيء قدير",

    type: "sunnahCount",

    sunnahCount: 100,

    hadith:
      "من قالها مائة مرة في يوم كان له عدل عشر رقاب، وكتبت له مائة حسنة، ومحيت عنه مائة سيئة، وكانت له حرزًا من الشيطان يومه ذلك حتى يمسي.",

    source:
      "متفق عليه",

    note:
      "العدد الوارد في الحديث: 100 مرة في اليوم."
  },


  {
    id: "juwayriyah",

    name:
      "سبحان الله عدد خلقه، سبحان الله رضا نفسه، سبحان الله زنة عرشه، سبحان الله مداد كلماته",

    type: "sunnahCount",

    sunnahCount: 3,

    hadith:
      "ثبت في حديث جويرية رضي الله عنها أن النبي ﷺ قال هذه الكلمات ثلاث مرات، وبيّن فضلها العظيم.",

    source:
      "صحيح مسلم",

    note:
      "العدد الوارد في الحديث: 3 مرات."
  }

];


/* =========================================================
   3. الرسائل الإيمانية
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

  "دقيقة ذكر خير من دقيقة ضاعت بلا فائدة.",

  "خذ معك ذكر الله أينما ذهبت 🤍"

];


const RETURN_MESSAGES = [

  "مرحبًا بعودتك 🌿 لا يهم كم مضى… المهم أن تبدأ من جديد.",

  "يوم جديد… وبداية جديدة 🤍",

  "ابدأ الآن ولو بدقيقة واحدة 🌱",

  "صفحة جديدة تبدأ بذكر الله 🤍"

];


const CLOSING_MESSAGES = [

  "انتهى يوم وبقي أثر ما قدمت فيه. اللهم اجعلنا من الذاكرين الله كثيرًا والذاكرات 🤍",

  "اللهم تقبل ما مضى، وأعنّا على ذكرك فيما هو آت 🌿",

  "كل يوم فرصة جديدة لذكر الله 🤍",

  "خذ معك ذكر الله أينما ذهبت.",

  "اللهم أعنا على ذكرك وشكرك وحسن عبادتك 🤍"

];


/* =========================================================
   4. حالة التطبيق
========================================================= */

let state = {

  activeDhikrId:
    "subhanallah",

  activeMode:
    "free",

  vibration:
    true,

  darkMode:
    false,

  personalGoals:
    {},

  sessionCounters:
    {},

  history:
    {},

  lastActivityDate:
    null,

  lastOpenDate:
    null

};


let sessionStarted = false;

let pendingImportData = null;


/* =========================================================
   5. أدوات التاريخ
========================================================= */

function getTodayKey() {

  const date =
    new Date();


  return getDateKey(
    date
  );

}


function getDateKey(
  date
) {

  const year =
    date.getFullYear();


  const month =
    String(
      date.getMonth() + 1
    ).padStart(
      2,
      "0"
    );


  const day =
    String(
      date.getDate()
    ).padStart(
      2,
      "0"
    );


  return (
    year +
    "-" +
    month +
    "-" +
    day
  );

}


function getYesterdayKey() {

  const date =
    new Date();


  date.setDate(
    date.getDate() - 1
  );


  return getDateKey(
    date
  );

}


function parseDateKey(
  key
) {

  const parts =
    key.split("-");


  return new Date(

    Number(
      parts[0]
    ),

    Number(
      parts[1]
    ) - 1,

    Number(
      parts[2]
    )

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
    parseDateKey(
      firstKey
    );


  const second =
    parseDateKey(
      secondKey
    );


  return Math.round(

    (
      second -
      first
    ) /

    86400000

  );

}


/* =========================================================
   6. بيانات اليوم
========================================================= */

function createEmptyDay() {

  return {

    total:
      0,

    sessions:
      0,

    dhikr:
      {}

  };

}


function ensureToday() {

  const key =
    getTodayKey();


  if (
    !state.history[key]
  ) {

    state.history[key] =
      createEmptyDay();

  }


  return state.history[key];

}


/* =========================================================
   7. التخزين
========================================================= */

function saveState() {

  try {

    localStorage.setItem(

      STORAGE_KEY,

      JSON.stringify(
        state
      )

    );

  }

  catch (
    error
  ) {

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


    if (
      !saved
    ) {

      return;

    }


    const parsed =
      JSON.parse(
        saved
      );


    state = {

      ...state,

      ...parsed,

      personalGoals:
        parsed.personalGoals ||
        {},

      sessionCounters:
        parsed.sessionCounters ||
        {},

      history:
        parsed.history ||
        {}

    };

  }

  catch (
    error
  ) {

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


const vibrationToggle =
  document.getElementById(
    "vibrationToggle"
  );


const vibrationSupportMessage =
  document.getElementById(
    "vibrationSupportMessage"
  );


const toast =
  document.getElementById(
    "toast"
  );


/* =========================================================
   9. Toast
========================================================= */

let toastTimer = null;


function showToast(
  message
) {

  toast.textContent =
    message;


  toast.classList.remove(
    "hidden"
  );


  clearTimeout(
    toastTimer
  );


  toastTimer =
    setTimeout(

      function () {

        toast.classList.add(
          "hidden"
        );

      },

      2600

    );

}


/* =========================================================
   10. التنقل
========================================================= */

function showScreen(
  name
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


  if (
    !screens[name]
  ) {

    return;

  }


  screens[name]
    .classList.add(
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
          name

        );

      }

    );


  if (
    name === "today"
  ) {

    renderToday();

  }


  if (
    name === "stats"
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

        function () {

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

        function () {

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

    function () {

      showScreen(
        "tasbeeh"
      );

    }

  );


/* =========================================================
   11. الأذكار
========================================================= */

function renderDhikrList() {

  dhikrList.innerHTML =
    "";


  DHIKR_LIST.forEach(

    dhikr => {

      const button =
        document.createElement(
          "button"
        );


      button.type =
        "button";


      button.className =
        "dhikr-card";


      const modeText =

        dhikr.sunnahCount

          ? (
              "العدد الوارد: " +
              dhikr.sunnahCount +
              " • أو ذكر حر ♾️"
            )

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

        function () {

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
   12. الذكر الحالي
========================================================= */

function getActiveDhikr() {

  return DHIKR_LIST.find(

    item =>
      item.id ===
      state.activeDhikrId

  );

}


function selectDhikr(
  id
) {

  const dhikr =
    DHIKR_LIST.find(

      item =>
        item.id === id

    );


  if (
    !dhikr
  ) {

    return;

  }


  state.activeDhikrId =
    id;


  state.activeMode =
    "free";


  sessionStarted =
    false;


  activeDhikrPanel
    .classList.remove(
      "hidden"
    );


  activeDhikrName.textContent =
    dhikr.name;


  if (
    dhikr.sunnahCount
  ) {

    sunnahModeBtn
      .classList.remove(
        "hidden"
      );


    sunnahModeBtn
      .textContent =
      "العدد الوارد: " +
      dhikr.sunnahCount;

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


  saveState();

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


freeModeBtn
  .addEventListener(

    "click",

    function () {

      setMode(
        "free"
      );

    }

  );


sunnahModeBtn
  .addEventListener(

    "click",

    function () {

      setMode(
        "sunnah"
      );

    }

  );


personalGoalBtn
  .addEventListener(

    "click",

    function () {

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

    function () {

      const goal =
        Number(
          personalGoalInput.value
        );


      if (
        !Number.isFinite(
          goal
        ) ||
        goal < 1
      ) {

        showToast(
          "اكتبي هدفًا صحيحًا أكبر من صفر."
        );

        return;

      }


      state.personalGoals[
        state.activeDhikrId
      ] =
        Math.floor(
          goal
        );


      saveState();

      renderCounter();


      showToast(
        "تم حفظ هدفك الشخصي 🌿"
      );

    }

  );


/* =========================================================
   15. عداد الجلسة
========================================================= */

function getSessionCount() {

  return Number(

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
  ] =
    value;

}


/* =========================================================
   16. الاهتزاز
========================================================= */

function vibrationSupported() {

  return (
    "vibrate" in
    navigator
  );

}


function setupVibration() {

  vibrationToggle.checked =
    Boolean(
      state.vibration
    );


  if (
    vibrationSupported()
  ) {

    vibrationSupportMessage
      .textContent =
      "الاهتزاز مدعوم على هذا الجهاز.";

  }

  else {

    vibrationSupportMessage
      .textContent =
      "هذا الجهاز أو المتصفح لا يدعم اهتزاز صفحات الويب.";

  }

}


function vibrate() {

  if (
    !state.vibration
  ) {

    return;

  }


  if (
    !vibrationSupported()
  ) {

    return;

  }


  try {

    navigator.vibrate(
      25
    );

  }

  catch (
    error
  ) {

    console.log(
      "Vibration unavailable",
      error
    );

  }

}


vibrationToggle
  .addEventListener(

    "change",

    function () {

      state.vibration =
        vibrationToggle.checked;


      saveState();


      if (
        state.vibration &&
        vibrationSupported()
      ) {

        navigator.vibrate(
          40
        );

        showToast(
          "تم تشغيل الاهتزاز."
        );

      }

      else if (
        state.vibration
      ) {

        showToast(
          "جهازك لا يدعم الاهتزاز داخل المتصفح."
        );

      }

      else {

        showToast(
          "تم إيقاف الاهتزاز."
        );

      }

    }

  );


/* =========================================================
   17. تسجيل الضغطة
========================================================= */

let lastTapTime = 0;


function registerDhikrPress() {

  const now =
    Date.now();


  /*
    منع الضغط المزدوج غير المقصود
    بفاصل شديد القصر
  */

  if (
    now -
    lastTapTime <
    70
  ) {

    return;

  }


  lastTapTime =
    now;


  const today =
    ensureToday();


  const id =
    state.activeDhikrId;


  const session =
    getSessionCount() + 1;


  setSessionCount(
    session
  );


  if (
    !sessionStarted
  ) {

    today.sessions =
      Number(
        today.sessions || 0
      ) + 1;


    sessionStarted =
      true;

  }


  today.dhikr[id] =
    Number(
      today.dhikr[id] || 0
    ) + 1;


  today.total =
    Number(
      today.total || 0
    ) + 1;


  state.lastActivityDate =
    getTodayKey();


  saveState();


  vibrate();

  renderCounter();

  updateHome();

  showMilestoneMessage(
    today.total
  );

}


tapCounterButton
  .addEventListener(

    "click",

    registerDhikrPress

  );


tapCounterButton
  .addEventListener(

    "dblclick",

    function (
      event
    ) {

      event.preventDefault();

    }

  );


/* =========================================================
   18. عرض العداد
========================================================= */

function renderCounter() {

  const dhikr =
    getActiveDhikr();


  if (
    !dhikr
  ) {

    return;

  }


  const today =
    ensureToday();


  const session =
    getSessionCount();


  sessionCounter.textContent =
    session;


  activeDhikrName.textContent =
    dhikr.name;


  document
    .getElementById(
      "activeDhikrTodayTotal"
    )
    .textContent =

      Number(
        today.dhikr[
          dhikr.id
        ] || 0
      );


  document
    .getElementById(
      "allTodayTotal"
    )
    .textContent =

      Number(
        today.total || 0
      );


  goalProgress.textContent =
    "";


  if (
    state.activeMode ===
    "sunnah" &&
    dhikr.sunnahCount
  ) {

    goalProgress.textContent =

      session +
      " / " +
      dhikr.sunnahCount +
      " — العدد الوارد في الحديث";

  }


  if (
    state.activeMode ===
    "personal"
  ) {

    const goal =
      Number(

        state.personalGoals[
          dhikr.id
        ] || 0

      );


    if (
      goal > 0
    ) {

      personalGoalInput.value =
        goal;


      goalProgress.textContent =

        session +
        " / " +
        goal +
        " — هدف شخصي";

    }

    else {

      goalProgress.textContent =
        "حددي هدفًا شخصيًا إن أحببتِ.";

    }

  }

}


/* =========================================================
   19. تصفير الجلسة
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

    function () {

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

    function () {

      setSessionCount(
        0
      );


      sessionStarted =
        false;


      saveState();

      renderCounter();

      closeResetModal();


      showToast(
        "تم تصفير عداد الجلسة فقط."
      );

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

    function () {

      const dhikr =
        getActiveDhikr();


      if (
        !dhikr
      ) {

        return;

      }


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


      document
        .getElementById(
          "virtueNote"
        )
        .textContent =
        dhikr.note || "";


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

          dhikr.sunnahCount +
          " مرة";

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

    function () {

      virtueModal
        .classList.add(
          "hidden"
        );

    }

  );


/* =========================================================
   21. أكثر ذكر
========================================================= */

function getMostUsedDhikr(
  day
) {

  const entries =
    Object.entries(
      day.dhikr || {}
    )
    .filter(

      ([, count]) =>
        Number(
          count
        ) > 0

    );


  if (
    entries.length === 0
  ) {

    return null;

  }


  entries.sort(

    function (
      a,
      b
    ) {

      return (
        Number(
          b[1]
        ) -
        Number(
          a[1]
        )
      );

    }

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


  if (
    !dhikr
  ) {

    return null;

  }


  return {

    name:
      dhikr.name,

    count:
      Number(
        count
      )

  };

}


/* =========================================================
   22. اليوم
========================================================= */

function renderToday() {

  const today =
    ensureToday();


  const yesterday =
    state.history[
      getYesterdayKey()
    ] ||
    createEmptyDay();


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


  const top =
    getMostUsedDhikr(
      today
    );


  document
    .getElementById(
      "todayTopDhikr"
    )
    .textContent =

    top

      ? (
          top.name +
          " — " +
          top.count
        )

      : "—";


  const breakdown =
    document.getElementById(
      "todayDhikrBreakdown"
    );


  breakdown.innerHTML =
    "";


  const entries =
    Object.entries(
      today.dhikr || {}
    )
    .filter(

      ([, count]) =>
        Number(
          count
        ) > 0

    )
    .sort(

      function (
        a,
        b
      ) {

        return (
          Number(
            b[1]
          ) -
          Number(
            a[1]
          )
        );

      }

    );


  if (
    entries.length === 0
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


  entries.forEach(

    function (
      entry
    ) {

      const id =
        entry[0];


      const count =
        entry[1];


      const dhikr =
        DHIKR_LIST.find(

          item =>
            item.id === id

        );


      if (
        !dhikr
      ) {

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
   23. مقارنة أمس
========================================================= */

function renderYesterdayComparison(
  todayTotal,
  yesterdayTotal
) {

  const element =
    document.getElementById(
      "comparisonMessage"
    );


  if (
    yesterdayTotal <= 0
  ) {

    element.textContent =
      "ابدأ يومك بما تيسر من ذكر الله 🤍";

    return;

  }


  if (
    todayTotal >
    yesterdayTotal
  ) {

    const diff =
      todayTotal -
      yesterdayTotal;


    const percent =
      (
        diff /
        yesterdayTotal *
        100
      ).toFixed(
        1
      );


    element.textContent =

      "زدت اليوم " +
      diff +
      " مرة عن أمس 🌱 (+" +
      percent +
      "%)";

  }

  else {

    element.textContent =
      "ما زال في يومك متسع لذكر الله 🤍";

  }

}


/* =========================================================
   24. الأسبوع
========================================================= */

function getLastSevenDays() {

  const days =
    [];


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

      key:
        key,

      date:
        date,

      data:
        state.history[key] ||
        createEmptyDay()

    });

  }


  return days;

}


function renderWeekStats() {

  const days =
    getLastSevenDays();


  const total =
    days.reduce(

      function (
        sum,
        item
      ) {

        return (
          sum +
          Number(
            item.data.total || 0
          )
        );

      },

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


  let bestDay =
    days[0];


  days.forEach(

    function (
      day
    ) {

      if (
        day.data.total >
        bestDay.data.total
      ) {

        bestDay =
          day;

      }

    }

  );


  const dayNames = [

    "الأحد",
    "الاثنين",
    "الثلاثاء",
    "الأربعاء",
    "الخميس",
    "الجمعة",
    "السبت"

  ];


  document
    .getElementById(
      "weekBestDay"
    )
    .textContent =

    bestDay.data.total > 0

      ? (
          dayNames[
            bestDay.date.getDay()
          ] +
          " — " +
          bestDay.data.total
        )

      : "—";


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
          Number(
            item.data.total || 0
          )

      ),

      1

    );


  const shortDays = [

    "أحد",
    "اثن",
    "ثلا",
    "أرب",
    "خمي",
    "جمع",
    "سبت"

  ];


  days.forEach(

    function (
      item
    ) {

      const value =
        Number(
          item.data.total || 0
        );


      const height =
        Math.max(

          4,

          (
            value /
            max
          ) *
          165

        );


      const column =
        document.createElement(
          "div"
        );


      column.className =
        "bar-column";


      column.innerHTML = `

        <strong
          style="
            font-size:10px;
            display:block;
            margin-bottom:5px;
          "
        >
          ${value}
        </strong>

        <div
          class="bar"
          style="height:${height}px"
        >
        </div>

        <span>
          ${shortDays[item.date.getDay()]}
        </span>

      `;


      chart.appendChild(
        column
      );

    }

  );

}


/* =========================================================
   25. الشهر
========================================================= */

const MONTH_NAMES = [

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


function getCurrentMonthDays() {

  const now =
    new Date();


  const year =
    now.getFullYear();


  const month =
    now.getMonth();


  const lastDay =
    new Date(

      year,

      month + 1,

      0

    ).getDate();


  const days =
    [];


  for (
    let day = 1;
    day <= lastDay;
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

      key:
        key,

      date:
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


  const previousMonth =
    new Date(

      now.getFullYear(),

      now.getMonth() - 1,

      1

    );


  let total =
    0;


  Object.entries(
    state.history
  )
  .forEach(

    function (
      entry
    ) {

      const key =
        entry[0];


      const day =
        entry[1];


      const date =
        parseDateKey(
          key
        );


      if (

        date.getFullYear() ===
        previousMonth.getFullYear()

        &&

        date.getMonth() ===
        previousMonth.getMonth()

      ) {

        total +=
          Number(
            day.total || 0
          );

      }

    }

  );


  return total;

}


function renderMonthStats() {

  const now =
    new Date();


  const days =
    getCurrentMonthDays();


  const currentDay =
    now.getDate();


  const elapsed =
    days.slice(
      0,
      currentDay
    );


  const total =
    elapsed.reduce(

      function (
        sum,
        item
      ) {

        return (
          sum +
          Number(
            item.data.total || 0
          )
        );

      },

      0

    );


  const activeDays =
    elapsed.filter(

      item =>
        Number(
          item.data.total || 0
        ) > 0

    ).length;


  const average =

    activeDays > 0

      ? Math.round(
          total /
          activeDays
        )

      : 0;


  let bestDay =
    null;


  elapsed.forEach(

    function (
      item
    ) {

      if (

        !bestDay

        ||

        Number(
          item.data.total || 0
        ) >
        Number(
          bestDay.data.total || 0
        )

      ) {

        bestDay =
          item;

      }

    }

  );


  const dhikrTotals =
    {};


  elapsed.forEach(

    function (
      item
    ) {

      Object.entries(
        item.data.dhikr || {}
      )
      .forEach(

        function (
          entry
        ) {

          const id =
            entry[0];


          const count =
            Number(
              entry[1] || 0
            );


          dhikrTotals[id] =
            Number(
              dhikrTotals[id] || 0
            ) +
            count;

        }

      );

    }

  );


  const sortedDhikr =
    Object.entries(
      dhikrTotals
    )
    .sort(

      function (
        a,
        b
      ) {

        return (
          b[1] -
          a[1]
        );

      }

    );


  let topDhikr =
    null;


  if (
    sortedDhikr.length > 0
  ) {

    const dhikr =
      DHIKR_LIST.find(

        item =>
          item.id ===
          sortedDhikr[0][0]

      );


    if (
      dhikr
    ) {

      topDhikr = {

        name:
          dhikr.name,

        count:
          sortedDhikr[0][1]

      };

    }

  }


  document
    .getElementById(
      "monthHarvestTitle"
    )
    .textContent =

    "حصاد ذكرك في " +
    MONTH_NAMES[
      now.getMonth()
    ] +
    " 🤍";


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

    activeDays +
    " من " +
    currentDay +
    " يومًا";


  document
    .getElementById(
      "monthTopDhikr"
    )
    .textContent =

    topDhikr

      ? (
          topDhikr.name +
          " — " +
          topDhikr.count
        )

      : "—";


  document
    .getElementById(
      "monthBestDay"
    )
    .textContent =

    bestDay &&
    bestDay.data.total > 0

      ? (
          bestDay.date.getDate() +
          " " +
          MONTH_NAMES[
            now.getMonth()
          ] +
          " — " +
          bestDay.data.total
        )

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


function renderMonthComparison(
  current
) {

  const previous =
    getPreviousMonthTotal();


  const element =
    document.getElementById(
      "monthComparisonMessage"
    );


  if (
    previous <= 0
  ) {

    element.textContent =
      "شهر جديد… اجعله عامرًا بذكر الله 🤍";

    return;

  }


  if (
    current >
    previous
  ) {

    const percent =
      (
        (
          current -
          previous
        ) /
        previous *
        100
      ).toFixed(
        1
      );


    element.textContent =

      "زدت هذا الشهر بنسبة " +
      percent +
      "% عن الشهر السابق 🌱";

  }

  else {

    element.textContent =
      "القليل الدائم خير من الكثير المنقطع 🌿";

  }

}


/* =========================================================
   26. الاستمرارية
========================================================= */

function calculateStreak() {

  let streak =
    0;


  let date =
    new Date();


  const today =
    state.history[
      getTodayKey()
    ];


  if (
    !today ||
    Number(
      today.total || 0
    ) === 0
  ) {

    date.setDate(
      date.getDate() - 1
    );

  }


  while (
    true
  ) {

    const key =
      getDateKey(
        date
      );


    const day =
      state.history[key];


    if (
      day &&
      Number(
        day.total || 0
      ) > 0
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


function getPlantForStreak(
  streak
) {

  if (
    streak >= 30
  ) {

    return "🌳";

  }


  if (
    streak >= 7
  ) {

    return "🌿";

  }


  if (
    streak >= 3
  ) {

    return "🌱";

  }


  if (
    streak >= 1
  ) {

    return "🌰";

  }


  return "🌱";

}


function getStreakMessage(
  streak
) {

  if (
    streak >= 30
  ) {

    return "استمرارية جميلة… اللهم أعنا على دوام ذكرك 🤍";

  }


  if (
    streak >= 7
  ) {

    return (
      "ذكرت الله " +
      streak +
      " أيام متتالية 🌱"
    );

  }


  if (
    streak >= 3
  ) {

    return "برعم صغير ينمو مع الاستمرار 🌿";

  }


  if (
    streak >= 1
  ) {

    return "بداية طيبة… استمر بما يتيسر 🤍";

  }


  return "يوم جديد… وبداية جديدة 🤍";

}


function renderStreak() {

  const streak =
    calculateStreak();


  const plant =
    getPlantForStreak(
      streak
    );


  const message =
    getStreakMessage(
      streak
    );


  document
    .getElementById(
      "streakPlant"
    )
    .textContent =
    plant;


  document
    .getElementById(
      "streakDays"
    )
    .textContent =

    streak +
    " يوم";


  document
    .getElementById(
      "streakMessage"
    )
    .textContent =
    message;


  document
    .getElementById(
      "homeStreakPlant"
    )
    .textContent =
    plant;


  document
    .getElementById(
      "homeStreakDays"
    )
    .textContent =

    streak > 0

      ? (
          streak +
          " يوم من الاستمرارية"
        )

      : "ابدأ يومك بذكر الله";


  document
    .getElementById(
      "homeStreakMessage"
    )
    .textContent =
    message;

}


/* =========================================================
   27. الإحصائيات
========================================================= */

function renderStatistics() {

  const today =
    ensureToday();


  const yesterday =
    state.history[
      getYesterdayKey()
    ] ||
    createEmptyDay();


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

      ? (
          mostUsed.name +
          " — " +
          mostUsed.count
        )

      : "لا توجد بيانات بعد";


  const comparison =
    document.getElementById(
      "dayComparisonStat"
    );


  if (
    yesterday.total <= 0
  ) {

    comparison.textContent =
      "لا توجد بيانات كافية للمقارنة";

  }

  else if (
    today.total >
    yesterday.total
  ) {

    comparison.textContent =

      "+" +
      (
        today.total -
        yesterday.total
      ) +
      " عن أمس";

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
   28. تبويبات الإحصائيات
========================================================= */

document
  .querySelectorAll(
    ".stats-tab"
  )
  .forEach(

    tab => {

      tab.addEventListener(

        "click",

        function () {

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
              period +
              "Stats"
            )
            .classList.add(
              "active"
            );

        }

      );

    }

  );


/* =========================================================
   29. الرسائل حسب العدد
========================================================= */

function showMilestoneMessage(
  total
) {

  const element =
    document.querySelector(
      "#tasbeehMessage p"
    );


  const yesterday =
    state.history[
      getYesterdayKey()
    ] ||
    createEmptyDay();


  if (
    total === 100
  ) {

    element.textContent =
      "سجلت مسبحتك 100 مرة من الذكر اليوم 🤍 استمر واجعل الذكر رفيق يومك.";

  }

  else if (
    total === 500
  ) {

    element.textContent =
      "500 مرة من الذكر مسجلة اليوم 🌿 استمر بما يتيسر.";

  }

  else if (
    total === 1000
  ) {

    element.textContent =
      "سجلت مسبحتك 1000 مرة من الذكر اليوم 🤍 اللهم تقبل وأعنا على دوام ذكرك.";

  }

  else if (

    yesterday.total > 0

    &&

    total ===
    yesterday.total + 1

  ) {

    element.textContent =
      "ما شاء الله 🌱 تجاوزت حصيلة أمس. واجعل المنافسة دائمًا مع نفسك.";

  }

  else if (
    total % 25 === 0
  ) {

    element.textContent =
      randomItem(
        FAITH_MESSAGES
      );

  }

}


/* =========================================================
   30. الرئيسية
========================================================= */

function updateHome() {

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


  renderStreak();

}


/* =========================================================
   31. رسالة العودة
========================================================= */

function renderReturnMessage() {

  const element =
    document.getElementById(
      "returnMessage"
    );


  if (
    !state.lastActivityDate
  ) {

    element.classList.add(
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

    element.textContent =
      randomItem(
        RETURN_MESSAGES
      );


    element.classList.remove(
      "hidden"
    );

  }

  else {

    element.classList.add(
      "hidden"
    );

  }

}


/* =========================================================
   32. الذكر العشوائي
========================================================= */

document
  .getElementById(
    "randomDhikrBtn"
  )
  .addEventListener(

    "click",

    function () {

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

  );


/* =========================================================
   33. الاقتراحات
========================================================= */

document
  .querySelectorAll(
    ".suggestion-card"
  )
  .forEach(

    button => {

      button.addEventListener(

        "click",

        function () {

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
   34. Dark Mode
========================================================= */

const themeToggle =
  document.getElementById(
    "themeToggle"
  );


function applyTheme() {

  document.body
    .classList.toggle(

      "dark",

      Boolean(
        state.darkMode
      )

    );


  themeToggle.textContent =

    state.darkMode

      ? "☀️"

      : "🌙";

}


themeToggle
  .addEventListener(

    "click",

    function () {

      state.darkMode =
        !state.darkMode;


      saveState();

      applyTheme();

    }

  );


/* =========================================================
   35. المشاركة
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

    function () {

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

    function () {

      shareModal.classList.add(
        "hidden"
      );

    }

  );


document
  .getElementById(
    "shareNativeBtn"
  )
  .addEventListener(

    "click",

    async function () {

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

        catch (
          error
        ) {

          console.log(
            "Share closed"
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

    function () {

      const message =

        SHARE_TEXT +
        "\n\n" +
        window.location.href;


      window.open(

        "https://wa.me/?text=" +

        encodeURIComponent(
          message
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

    function () {

      window.open(

        "https://www.facebook.com/sharer/sharer.php?u=" +

        encodeURIComponent(
          window.location.href
        ),

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

    await navigator
      .clipboard
      .writeText(
        window.location.href
      );


    showToast(
      "تم نسخ رابط المسبحة 🤍"
    );

  }

  catch (
    error
  ) {

    prompt(
      "انسخي الرابط:",
      window.location.href
    );

  }

}


/* =========================================================
   36. تصميم مسبحة خاصة
========================================================= */

const contactModal =
  document.getElementById(
    "contactModal"
  );


document
  .getElementById(
    "openContactBtn"
  )
  .addEventListener(

    "click",

    function () {

      contactModal.classList.remove(
        "hidden"
      );

    }

  );


document
  .getElementById(
    "closeContactModal"
  )
  .addEventListener(

    "click",

    function () {

      contactModal.classList.add(
        "hidden"
      );

    }

  );


function setupContactLink() {

  const message =
    "مرحبًا، أريد تصميم مسبحة إلكترونية خاصة. أريد الاستفسار عن تصميم مسبحة شخصية / صدقة جارية / عن متوفى.";


  const url =

    "https://wa.me/" +
    CONTACT_PHONE +
    "?text=" +
    encodeURIComponent(
      message
    );


  document
    .getElementById(
      "customTasbeehWhatsApp"
    )
    .href =
    url;

}


/* =========================================================
   37. النسخة الاحتياطية
========================================================= */

document
  .getElementById(
    "exportDataBtn"
  )
  .addEventListener(

    "click",

    exportData

  );


function exportData() {

  const backup = {

    app:
      "Masbahaty",

    version:
      3,

    exportedAt:
      new Date()
        .toISOString(),

    data:
      state

  };


  const blob =
    new Blob(

      [
        JSON.stringify(
          backup,
          null,
          2
        )
      ],

      {
        type:
          "application/json"
      }

    );


  const url =
    URL.createObjectURL(
      blob
    );


  const link =
    document.createElement(
      "a"
    );


  link.href =
    url;


  link.download =

    "masbahaty-backup-" +
    getTodayKey() +
    ".json";


  document.body
    .appendChild(
      link
    );


  link.click();


  link.remove();


  URL.revokeObjectURL(
    url
  );


  showToast(
    "تم إنشاء النسخة الاحتياطية."
  );

}


/* =========================================================
   38. استيراد النسخة الاحتياطية
========================================================= */

const importInput =
  document.getElementById(
    "importDataInput"
  );


const importModal =
  document.getElementById(
    "importConfirmModal"
  );


importInput
  .addEventListener(

    "change",

    function (
      event
    ) {

      const file =
        event.target
          .files[0];


      if (
        !file
      ) {

        return;

      }


      const reader =
        new FileReader();


      reader.onload =
        function () {

          try {

            const parsed =
              JSON.parse(
                reader.result
              );


            const data =

              parsed.data

                ? parsed.data

                : parsed;


            if (

              !data

              ||

              typeof data !==
              "object"

              ||

              !data.history

            ) {

              throw new Error(
                "Invalid backup"
              );

            }


            pendingImportData =
              data;


            importModal
              .classList.remove(
                "hidden"
              );

          }

          catch (
            error
          ) {

            pendingImportData =
              null;


            showToast(
              "الملف المختار ليس نسخة احتياطية صحيحة."
            );

          }

        };


      reader.readAsText(
        file
      );

    }

  );


document
  .getElementById(
    "cancelImportBtn"
  )
  .addEventListener(

    "click",

    function () {

      pendingImportData =
        null;


      importInput.value =
        "";


      importModal
        .classList.add(
          "hidden"
        );

    }

  );


document
  .getElementById(
    "confirmImportBtn"
  )
  .addEventListener(

    "click",

    function () {

      if (
        !pendingImportData
      ) {

        return;

      }


      state = {

        ...state,

        ...pendingImportData,

        personalGoals:
          pendingImportData
            .personalGoals || {},

        sessionCounters:
          pendingImportData
            .sessionCounters || {},

        history:
          pendingImportData
            .history || {}

      };


      pendingImportData =
        null;


      importInput.value =
        "";


      saveState();


      importModal
        .classList.add(
          "hidden"
        );


      refreshAll();


      showToast(
        "تمت استعادة بياناتك بنجاح 🤍"
      );

    }

  );


/* =========================================================
   39. إغلاق الـModals من الخلفية
========================================================= */

document
  .querySelectorAll(
    ".modal-backdrop"
  )
  .forEach(

    backdrop => {

      backdrop.addEventListener(

        "click",

        function () {

          const modal =
            backdrop.parentElement;


          modal.classList.add(
            "hidden"
          );

        }

      );

    }

  );


/* =========================================================
   40. التغيير بين الأيام
========================================================= */

let knownDate =
  getTodayKey();


function checkForNewDay() {

  const current =
    getTodayKey();


  if (
    current ===
    knownDate
  ) {

    return;

  }


  knownDate =
    current;


  ensureToday();


  /*
    عدادات الجلسات تظهر للمستخدم
    ولكن مع اليوم الجديد نبدأ جلسة جديدة.
  */

  state.sessionCounters =
    {};


  sessionStarted =
    false;


  saveState();


  refreshAll();


  showToast(
    "يوم جديد… وبداية جديدة 🤍"
  );

}


/* فحص اليوم كل دقيقة */

setInterval(

  checkForNewDay,

  60000

);


/* =========================================================
   41. عشوائي
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
   42. تحديث كل الأقسام
========================================================= */

function refreshAll() {

  ensureToday();

  applyTheme();

  setupVibration();

  updateHome();

  renderCounter();

  renderToday();

  renderStatistics();

  renderReturnMessage();

}


/* =========================================================
   43. تشغيل التطبيق
========================================================= */

function initApp() {

  loadState();


  ensureToday();


  state.lastOpenDate =
    getTodayKey();


  saveState();


  renderDhikrList();

  setupContactLink();

  setupVibration();

  applyTheme();

  updateHome();

  renderReturnMessage();

  renderToday();

  renderStatistics();


  const currentDhikr =
    getActiveDhikr();


  if (
    currentDhikr
  ) {

    activeDhikrName.textContent =
      currentDhikr.name;


    renderCounter();

  }

}


initApp();
