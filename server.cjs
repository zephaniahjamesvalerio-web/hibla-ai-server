const express = require("express");
const cors = require("cors");

const app = express();

/*
=========================================================
HIBLA AI - DEPLOYMENT READY LOCAL KNOWLEDGE BASE
Weeks 1-6
No MySQL
No OpenAI
=========================================================
*/

// IMPORTANT:
// When deployed (Render/Railway/etc.), the platform provides PORT.
// When running locally, it uses 3000.
const PORT = process.env.PORT || 3000;

// CORS allows your GitHub Pages/frontend website to call this API.
app.use(cors({
    origin: "*",
    methods: ["GET", "POST", "OPTIONS"],
    allowedHeaders: ["Content-Type"]
}));

app.use(express.json());


/* =========================================================
   HIBLA AI - LOCAL LESSON KNOWLEDGE BASE
========================================================= */

const lessons = {

    "1": {
        week: 1,
        title: "Sa Dakong Silangan",
        type: "Tula",
        author: "Jose Corazon de Jesus (Huseng Batute)",
        description:
            "Ang Sa Dakong Silangan ay isang tulang nagpapahayag ng pag-asa, kalayaan, at muling pagbangon ng bayan. Inihahalintulad ang Pilipinas sa pagsikat ng araw sa Silangan bilang simbolo ng bagong simula at pag-unlad matapos ang mga pagsubok at paghihirap.",
        biography:
            "Si Jose Corazon de Jesus, na higit na kilala sa sagisag-panulat na Huseng Batute, ay isang tanyag na makata at manunulat na Pilipino. Nakilala siya sa kaniyang mga tulang tumatalakay sa pag-ibig, bayan, kalayaan, at buhay ng mga Pilipino. Naging mahalagang bahagi siya ng panitikang Filipino noong panahon ng Amerikano at naging tanyag sa paggamit ng tula bilang paraan ng pagpapahayag ng damdamin at kaisipang makabayan.",
        theme: "Pag-asa, Kalayaan, at Pagbangon ng Bayan",
        objective: "Magbigay-inspirasyon at gisingin ang damdaming makabayan.",
        material: "Audio-visual/Interactive Presentation",
        keywords: [
            "sa dakong silangan", "dakong silangan",
            "jose corazon de jesus", "huseng batute",
            "pag asa", "kalayaan", "pagbangon", "bayan",
            "pag ibig", "makabayan"
        ]
    },

    "2": {
        week: 2,
        title: "Kahapon, Ngayon at Bukas (Unang Tagpo)",
        type: "Dula",
        author: "Aurelio V. Tolentino",
        description:
            "Ang Kahapon, Ngayon at Bukas ay isang dulang nagpapakita ng kalagayan ng Pilipinas sa iba't ibang panahon. Ipinapakita rito ang epekto ng kolonyalismo at ang patuloy na pakikibaka ng mga Pilipino para sa kalayaan at pagbabago.",
        biography:
            "Si Aurelio V. Tolentino ay isang Pilipinong manunulat, mandudula, at makabayang personalidad. Kilala siya sa kaniyang mga akdang naglalarawan ng pakikibaka ng mga Pilipino para sa kalayaan. Isa sa kaniyang mga tanyag na akda ang Kahapon, Ngayon at Bukas, isang dulang may malakas na mensaheng makabayan at panlipunan.",
        theme: "Kolonyalismo, Pakikibaka, at Kalayaan",
        objective: "Ipakita ang kasaysayan at aral ng pakikibaka ng Pilipino.",
        material: "Audio-Visual/Interactive Presentation",
        keywords: [
            "kahapon ngayon at bukas", "kahapon", "ngayon", "bukas",
            "aurelio v tolentino", "kolonyalismo", "pakikibaka",
            "kalayaan", "dula", "unang tagpo"
        ]
    },

    "3": {
        week: 3,
        title: "Filipino Time",
        type: "Akda",
        author: "Felipe Padilla de Leon",
        description:
            "Ang Filipino Time ay isang akdang tumatalakay sa karaniwang kaugalian ng pagiging huli ng mga Pilipino. Ipinapakita nito ang negatibong epekto ng ganitong gawain at hinihikayat ang pagbabago tungo sa pagiging disiplinado at responsable sa oras.",
        biography:
            "Si Felipe Padilla de Leon ay isang kilalang Pilipinong kompositor, manunulat, at guro. Naging mahalaga ang kaniyang ambag sa pagpapaunlad at pagpapahalaga sa kulturang Pilipino. Sa kaniyang mga akda at gawain, naipakita ang kahalagahan ng pagkakakilanlan, kultura, at disiplina sa lipunang Pilipino.",
        theme: "Ugali, Disiplina, at Pananagutan",
        objective: "Himukin ang pagbabago at pagiging disiplinado sa oras.",
        material: "Digital Poster",
        keywords: [
            "filipino time", "felipe padilla de leon",
            "pagiging huli", "huli", "oras", "disiplina",
            "pananagutan", "ugali", "responsable", "kultura"
        ]
    },

    "4": {
        week: 4,
        title: "Ang Tunay na Sampung Utos",
        type: "Akda",
        author: "Michael Charleston Chua (Ayon kay Apolinario Mabini)",
        description:
            "Ang Ang Tunay na Sampung Utos ay naglalaman ng mga prinsipyo at gabay na dapat sundin ng mga mamamayan upang magkaroon ng maayos at makatarungang lipunan. Binibigyang-diin nito ang pagmamahal sa bayan at tamang asal.",
        biography:
            "Si Apolinario Mabini ay isang Pilipinong rebolusyonaryo, manunulat, at tagapayo sa pamahalaan noong panahon ng Himagsikan at Unang Republika ng Pilipinas. Kilala siya sa kaniyang mga akdang naglalaman ng mga kaisipan tungkol sa pamamahala, moralidad, responsibilidad, at pagmamahal sa bayan.",
        theme: "Gabay, Disiplina, at Pagmamahal sa Bayan",
        objective: "Ipakita ang kahalagahan ng tamang asal at responsableng mamamayan.",
        material: "Digital Sequence Chart",
        keywords: [
            "ang tunay na sampung utos", "sampung utos",
            "michael charleston chua", "apolinario mabini", "mabini",
            "gabay", "disiplina", "pagmamahal sa bayan",
            "responsableng mamamayan", "tamang asal"
        ]
    },

    "5": {
        week: 5,
        title: "Wikang Pambansa",
        type: "Talumpati",
        author: "Manuel L. Quezon",
        description:
            "Ang Wikang Pambansa ay isang talumpati na nagpapahalaga sa pagkakaroon ng pambansang wika bilang simbolo ng pagkakaisa at pagkakakilanlan ng mga Pilipino. Hinihikayat nito ang paggamit at pagpapayaman ng sariling wika.",
        biography:
            "Si Manuel L. Quezon ay ang unang Pangulo ng Komonwelt ng Pilipinas. Isa sa mahahalagang usapin na isinulong niya ay ang pagkakaroon ng pambansang wika. Malaki ang naging papel niya sa pagpapaunlad ng paggamit at pagkilala sa isang wikang magsisilbing mahalagang bahagi ng pambansang pagkakaisa at pagkakakilanlan.",
        theme: "Pagkakaisa at Pagpapahalaga sa Wika",
        objective: "Himukin ang paggamit at pagpapayaman ng sariling wika.",
        material: "Audio-Visual/Interactive Presentation",
        keywords: [
            "wikang pambansa", "manuel l quezon",
            "manuel quezon", "pambansang wika", "wika",
            "pagkakaisa", "pagpapahalaga sa wika",
            "sariling wika", "pagkakakilanlan"
        ]
    },

    "6": {
        week: 6,
        title: "Mga Ibong Mandaragit",
        type: "Nobela",
        author: "Amado V. Hernandez",
        description:
            "Ang Mga Ibong Mandaragit ay isang nobela na tumatalakay sa katiwalian, kasakiman, at pakikibaka para sa katarungan sa lipunan. Ipinapakita nito ang realidad ng buhay at ang kahalagahan ng paninindigan para sa tama.",
        biography:
            "Si Amado V. Hernandez ay isang makata, manunulat, mamamahayag, at aktibista. Nakilala siya sa kaniyang mga akdang tumatalakay sa buhay ng karaniwang Pilipino, paggawa, katarungang panlipunan, at pakikibaka. Ang kaniyang nobelang Mga Ibong Mandaragit ay isang mahalagang akdang panlipunan na tumatalakay sa mga suliranin at realidad ng lipunang Pilipino.",
        theme: "Katiwalian, Pakikibaka, at Katarungan",
        objective: "Ipakita ang kahalagahan ng paninindigan at tamang asal sa lipunan.",
        material: "Infographics",
        keywords: [
            "mga ibong mandaragit", "ibong mandaragit",
            "amado v hernandez", "amado hernandez",
            "katiwalian", "kasakiman", "pakikibaka",
            "katarungan", "lipunan", "paninindigan"
        ]
    }
};


/* =========================================================
   TEXT NORMALIZATION
========================================================= */

function normalize(text) {
    return String(text)
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/[^\w\s]/g, " ")
        .replace(/\s+/g, " ")
        .trim();
}


/* =========================================================
   FIND LESSON
========================================================= */

function findLesson(message) {
    const question = normalize(message);

    let bestLesson = null;
    let bestScore = 0;

    for (const key in lessons) {
        const lesson = lessons[key];
        let score = 0;

        const title = normalize(lesson.title);
        const author = normalize(lesson.author);

        if (question.includes(title)) score += 20;

        if (
            question.includes(`week ${lesson.week}`) ||
            question.includes(`linggo ${lesson.week}`) ||
            question.includes(`aralin ${lesson.week}`)
        ) {
            score += 15;
        }

        if (question.includes(author)) score += 10;

        for (const keyword of lesson.keywords) {
            const normalizedKeyword = normalize(keyword);

            if (
                normalizedKeyword.length >= 3 &&
                question.includes(normalizedKeyword)
            ) {
                score += 7;
            }
        }

        const searchableText = normalize([
            lesson.title,
            lesson.author,
            lesson.description,
            lesson.biography,
            lesson.theme,
            lesson.objective,
            lesson.material,
            ...lesson.keywords
        ].join(" "));

        for (const word of question.split(" ")) {
            if (word.length >= 4 && searchableText.includes(word)) {
                score += 1;
            }
        }

        if (score > bestScore) {
            bestScore = score;
            bestLesson = lesson;
        }
    }

    return bestLesson;
}


/* =========================================================
   GET WEEK DIRECTLY
========================================================= */

function getWeekFromQuestion(message) {
    const question = normalize(message);

    const match = question.match(
        /(?:week|linggo|aralin)\s*(1|2|3|4|5|6)\b/
    );

    if (match) {
        return lessons[match[1]];
    }

    return null;
}


/* =========================================================
   GENERATE LOCAL RESPONSE
========================================================= */

function generateAnswer(message) {
    const question = normalize(message);

    if (
        question === "hi" ||
        question === "hello" ||
        question === "hey" ||
        question === "kumusta" ||
        question === "musta" ||
        question.includes("hello hibla") ||
        question.includes("kumusta hibla")
    ) {
        return `
Kumusta! 👋

Ako si <b>Hibla AI</b>, ang Local Learning Assistant.

May impormasyon ako tungkol sa <b>Weeks 1–6</b> ng Hibla-Panitikan.

Maaari mo akong tanungin tungkol sa:
📖 May-akda
📚 Akda
🎯 Tema
📝 Buod
💡 Layunin
👤 Talambuhay
        `.trim();
    }

    if (
        question.includes("help") ||
        question.includes("tulong") ||
        question.includes("ano ang pwede") ||
        question.includes("ano pwede") ||
        question.includes("ano ang maaari")
    ) {
        return `
<b>Maaari mo akong tanungin tungkol sa:</b>

📖 <b>May-akda</b>
"Sino ang may-akda ng Mga Ibong Mandaragit?"

🎯 <b>Tema</b>
"Ano ang tema ng Week 5?"

📝 <b>Buod</b>
"Ano ang buod ng Filipino Time?"

👤 <b>Talambuhay</b>
"Sino si Amado V. Hernandez?"

📚 <b>Aralin</b>
"Ano ang Week 3?"

💡 <b>Layunin</b>
"Ano ang layunin ng Week 4?"
        `.trim();
    }

    const directWeek = getWeekFromQuestion(message);
    const lesson = directWeek || findLesson(message);

    if (!lesson) {
        return `
Pasensya na. 😔

Wala akong mahanap na impormasyon tungkol sa tanong mo sa aking local knowledge base.

Subukan mong banggitin ang <b>pamagat ng akda</b>, <b>Week number</b>, o <b>may-akda</b>.

Halimbawa:
"Si Amado V. Hernandez ba ang may-akda ng Mga Ibong Mandaragit?"
        `.trim();
    }

    if (
        question.includes("may akda") ||
        question.includes("may-akda") ||
        question.includes("author") ||
        question.includes("sumulat") ||
        question.includes("sinulat") ||
        question.includes("manunulat") ||
        question.includes("sino ang gumawa") ||
        question.includes("kanino")
    ) {
        return `
📖 <b>${lesson.title}</b><br><br>
Ang may-akda ay <b>${lesson.author}</b>.
        `.trim();
    }

    if (
        question.includes("sino si") ||
        question.includes("talambuhay") ||
        question.includes("biography") ||
        question.includes("tungkol kay") ||
        question.includes("kilala ba si")
    ) {
        return `
👤 <b>${lesson.author}</b><br><br>
${lesson.biography}
        `.trim();
    }

    if (
        question.includes("tema") ||
        question.includes("theme") ||
        question.includes("tungkol saan") ||
        question.includes("pangunahing ideya") ||
        question.includes("mensahe")
    ) {
        return `
🎯 <b>Tema ng ${lesson.title}</b><br><br>
Ang pangunahing tema ay <b>${lesson.theme}</b>.
        `.trim();
    }

    if (
        question.includes("buod") ||
        question.includes("summary") ||
        question.includes("ipaliwanag") ||
        question.includes("tungkol sa") ||
        question.includes("ano ang kwento") ||
        question.includes("ano tungkol")
    ) {
        return `
📝 <b>${lesson.title}</b><br><br>
${lesson.description}
        `.trim();
    }

    if (
        question.includes("layunin") ||
        question.includes("objective") ||
        question.includes("bakit ito") ||
        question.includes("ano ang layunin")
    ) {
        return `
💡 <b>Layunin ng ${lesson.title}</b><br><br>
${lesson.objective}
        `.trim();
    }

    if (
        question.includes("anong uri") ||
        question.includes("uri ng akda") ||
        question.includes("genre") ||
        question.includes("uri")
    ) {
        return `
📚 Ang <b>${lesson.title}</b> ay isang <b>${lesson.type}</b>.
        `.trim();
    }

    if (
        question.includes("material") ||
        question.includes("materyal") ||
        question.includes("gamit")
    ) {
        return `
🎬 Ang multimodal material para sa <b>${lesson.title}</b> ay <b>${lesson.material}</b>.
        `.trim();
    }

    return `
📚 <b>Week ${lesson.week}: ${lesson.title}</b><br><br>
📖 <b>May-akda:</b> ${lesson.author}<br><br>
📕 <b>Uri:</b> ${lesson.type}<br><br>
🎯 <b>Tema:</b> ${lesson.theme}<br><br>
📝 <b>Buod:</b> ${lesson.description}<br><br>
💡 <b>Layunin:</b> ${lesson.objective}
    `.trim();
}


/* =========================================================
   API
========================================================= */

app.post("/api/chat", (req, res) => {
    try {
        const message = req.body?.message;

        if (typeof message !== "string" || !message.trim()) {
            return res.status(400).json({
                success: false,
                error: "Walang mensahe."
            });
        }

        const reply = generateAnswer(message);

        return res.json({
            success: true,
            reply
        });

    } catch (error) {
        console.error("CHAT ERROR:", error);

        return res.status(500).json({
            success: false,
            error: "May naganap na error sa Hibla AI."
        });
    }
});


/* =========================================================
   HEALTH / TEST ROUTES
========================================================= */

app.get("/", (req, res) => {
    res.json({
        status: "online",
        name: "Hibla AI",
        mode: "LOCAL KNOWLEDGE BASE",
        lessons: 6
    });
});

app.get("/api/health", (req, res) => {
    res.json({
        success: true,
        status: "Hibla AI API is running"
    });
});


/* =========================================================
   START SERVER
========================================================= */

app.listen(PORT, "0.0.0.0", () => {
    console.log("");
    console.log("=================================");
    console.log("       HIBLA AI SERVER");
    console.log("=================================");
    console.log(`PORT   : ${PORT}`);
    console.log("MODE   : LOCAL KNOWLEDGE BASE");
    console.log("LESSON : WEEK 1 - WEEK 6");
    console.log("AI API : DISABLED");
    console.log("=================================");
});
