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
   FIND LESSON - IMPROVED MATCHING
========================================================= */

const lessonAliases = {
    "1": ["sa dakong silangan", "dakong silangan", "huseng batute", "jose corazon de jesus"],
    "2": ["kahapon ngayon at bukas", "kahapon ngayon bukas", "unang tagpo", "aurelio tolentino"],
    "3": ["filipino time", "felipe padilla de leon", "filipino-time"],
    "4": ["ang tunay na sampung utos", "tunay na sampung utos", "sampung utos", "apolinario mabini", "michael charleston chua"],
    "5": ["wikang pambansa", "manuel l quezon", "manuel quezon", "quezon"],
    "6": ["mga ibong mandaragit", "ibong mandaragit", "amado v hernandez", "amado hernandez"]
};

function includesAny(question, phrases) {
    return phrases.some(phrase => question.includes(normalize(phrase)));
}

function findLesson(message) {
    const question = normalize(message);
    let bestLesson = null;
    let bestScore = 0;

    for (const key of Object.keys(lessons)) {
        const lesson = lessons[key];
        const title = normalize(lesson.title);
        const author = normalize(lesson.author);
        const aliases = lessonAliases[key] || [];
        let score = 0;

        // Exact title and author matches receive the strongest weight.
        if (question.includes(title)) score += 100;
        if (question === title) score += 120;
        if (question.includes(author)) score += 70;

        for (const alias of aliases) {
            const normalizedAlias = normalize(alias);
            if (normalizedAlias.length >= 4 && question.includes(normalizedAlias)) {
                score += normalizedAlias === title ? 100 : 55;
            }
        }

        if (includesAny(question, [
            `week ${lesson.week}`,
            `linggo ${lesson.week}`,
            `aralin ${lesson.week}`,
            `linggo ${lesson.week}`,
            `week number ${lesson.week}`
        ])) {
            score += 80;
        }

        // Score meaningful words, avoiding generic words that often cause false matches.
        const stopWords = new Set([
            "ang", "mga", "ano", "anu", "sino", "siya", "ito", "iyon", "yung",
            "para", "dahil", "kaya", "tungkol", "akda", "aralin", "week", "linggo",
            "may", "mayroon", "ba", "po", "sa", "ng", "na", "at", "ay", "si",
            "the", "who", "what", "when", "where", "which", "about", "author",
            "sumulat", "sinulat", "gawa", "ginawa"
        ]);

        const searchableText = normalize([
            lesson.title, lesson.author, lesson.description, lesson.biography,
            lesson.theme, lesson.objective, lesson.material, lesson.type,
            ...lesson.keywords, ...aliases
        ].join(" "));

        for (const word of question.split(" ")) {
            if (word.length >= 4 && !stopWords.has(word) && searchableText.includes(word)) {
                score += 2;
            }
        }

        if (score > bestScore) {
            bestScore = score;
            bestLesson = lesson;
        }
    }

    // Avoid guessing a lesson from a weak keyword match.
    return bestScore >= 8 ? bestLesson : null;
}

/* =========================================================
   GET WEEK DIRECTLY
========================================================= */

function getWeekFromQuestion(message) {
    const question = normalize(message);
    const match = question.match(/(?:week|linggo|aralin)\s*(1|2|3|4|5|6)\b/);
    return match ? lessons[match[1]] : null;
}

function getAllLessonsSummary() {
    return Object.values(lessons).map(lesson =>
        `• <b>Week ${lesson.week}: ${lesson.title}</b> (${lesson.type})<br>May-akda: ${lesson.author}`
    ).join("<br><br>");
}

function makeFollowUp(lesson) {
    return `<br><br><i>Maaari mo ring itanong ang tema, buod, uri ng akda, layunin, o talambuhay ng may-akda ng ${lesson.title}.</i>`;
}

/* =========================================================
   GENERATE LOCAL RESPONSE - IMPROVED EDUCATIONAL ANSWERS
========================================================= */

function generateAnswer(message) {
    const question = normalize(message);

    if (!question) {
        return "Pakisulat ang tanong na nais mong itanong tungkol sa Hibla-Panitikan.";
    }

    const greetings = new Set([
        "hi", "hello", "hey", "kumusta", "musta", "magandang umaga",
        "magandang hapon", "magandang gabi", "hello hibla", "kumusta hibla"
    ]);

    if (greetings.has(question)) {
        return `
            Kumusta! 👋 Ako si <b>Hibla AI</b>, ang katuwang mo sa pag-aaral ng panitikang Filipino.<br><br>
            May nakahandang impormasyon ako tungkol sa anim na aralin ng Hibla-Panitikan. Maaari kitang tulungan sa may-akda, uri ng akda, tema, buod, layunin, talambuhay, at pagsusuri sa pangunahing kaisipan ng bawat aralin.<br><br>
            <b>Subukan mong itanong:</b><br>
            • Sino ang sumulat ng <i>Sa Dakong Silangan</i>?<br>
            • Ano ang pangunahing tema ng <i>Mga Ibong Mandaragit</i>?<br>
            • Paano nagkakaugnay ang wika at pagkakaisa sa <i>Wikang Pambansa</i>?<br>
            • Ilista ang mga aralin sa Week 1–6.
        `.trim();
    }

    if (includesAny(question, [
        "help", "tulong", "ano ang pwede", "ano pwede", "ano ang maaari",
        "ano ang kaya mong", "paano kita magagamit", "mga halimbawa ng tanong"
    ])) {
        return `
            <b>Mga paksang maaari mong itanong kay Hibla AI</b><br><br>
            📖 <b>May-akda:</b> Sino ang sumulat ng <i>Sa Dakong Silangan</i>?<br>
            📚 <b>Uri ng akda:</b> Anong uri ng akda ang <i>Kahapon, Ngayon at Bukas</i>?<br>
            🎯 <b>Tema at mensahe:</b> Ano ang pangunahing tema ng <i>Filipino Time</i>?<br>
            📝 <b>Buod:</b> Tungkol saan ang <i>Mga Ibong Mandaragit</i>?<br>
            👤 <b>Talambuhay:</b> Sino si Manuel L. Quezon?<br>
            💡 <b>Layunin:</b> Ano ang layunin ng <i>Ang Tunay na Sampung Utos</i>?<br>
            🔎 <b>Pagsusuri:</b> Bakit mahalaga ang tema ng kalayaan sa isang akda?<br>
            📋 <b>Listahan:</b> Ano-ano ang mga aralin sa Hibla-Panitikan?
        `.trim();
    }

    if (includesAny(question, [
        "listahan ng aralin", "lahat ng aralin", "ano ano ang aralin",
        "ano-ano ang aralin", "ilista ang aralin", "weeks 1", "week 1 hanggang 6",
        "linggo 1 hanggang 6", "mga akda sa hibla", "mga aralin sa hibla"
    ])) {
        return `<b>Mga Aralin sa Hibla-Panitikan (Week 1–6)</b><br><br>${getAllLessonsSummary()}`;
    }

    const directWeek = getWeekFromQuestion(message);
    const lesson = directWeek || findLesson(message);

    if (!lesson) {
        return `
            Hindi ko pa matukoy kung aling akda o aralin ang tinutukoy mo. Maaari mo bang banggitin ang pamagat, pangalan ng may-akda, o numero ng linggo (Week 1–6)?<br><br>
            <b>Mga pamagat:</b> <i>Sa Dakong Silangan</i>, <i>Kahapon, Ngayon at Bukas</i>, <i>Filipino Time</i>, <i>Ang Tunay na Sampung Utos</i>, <i>Wikang Pambansa</i>, at <i>Mga Ibong Mandaragit</i>.<br><br>
            <i>Tandaan: nakabatay ang aking sagot sa impormasyong nakahanda sa Hibla-Panitikan, kaya hindi ako mag-iimbento ng detalye kung wala ito sa aking sanggunian.</i>
        `.trim();
    }

    const authorQuestion = includesAny(question, [
        "may akda", "may-akda", "author", "sumulat", "sinulat", "manunulat",
        "sino ang gumawa", "kanino ang akda", "sino ang lumikha", "sino ang nagsulat"
    ]);

    const biographyQuestion = includesAny(question, [
        "sino si", "talambuhay", "biography", "tungkol kay", "kilala ba si",
        "sino si jose", "sino si amado", "sino si manuel", "sino si aurelio"
    ]);

    const typeQuestion = includesAny(question, [
        "anong uri", "uri ng akda", "genre", "anyo ng panitikan",
        "anong klaseng akda", "anong uri ng panitikan"
    ]);

    const themeQuestion = includesAny(question, [
        "tema", "theme", "tungkol saan", "pangunahing ideya", "mensahe",
        "diwa ng akda", "pangunahing paksa", "sentral na ideya"
    ]);

    const summaryQuestion = includesAny(question, [
        "buod", "summary", "ipaliwanag", "tungkol sa", "ano ang kwento",
        "ano ang kuwento", "ano tungkol", "ilarawan ang akda", "ano ang nilalaman"
    ]);

    const objectiveQuestion = includesAny(question, [
        "layunin", "objective", "bakit ito isinulat", "ano ang nais ipakita",
        "ano ang nais ipabatid", "ano ang hangarin"
    ]);

    const materialQuestion = includesAny(question, [
        "material", "materyal", "gamit sa pagtuturo", "learning material",
        "multimodal", "ano ang ginamit na materyal"
    ]);

    const lessonQuestion = includesAny(question, [
        "aral", "natutuhan", "matututuhan", "real life", "tunay na buhay",
        "sa kasalukuyan", "kahalagahan", "bakit mahalaga", "maiugnay sa buhay",
        "ugnayan sa kasalukuyan", "aplikasyon"
    ]);

    const analysisQuestion = includesAny(question, [
        "suriin", "pagsusuri", "panunuring pampanitikan", "interpretasyon",
        "simbolismo", "ipakahulugan", "ano ang ipinahihiwatig"
    ]);

    if (authorQuestion) {
        return `📖 <b>May-akda ng ${lesson.title}</b><br><br>Ang may-akda na nakatala sa Hibla-Panitikan ay <b>${lesson.author}</b>.${makeFollowUp(lesson)}`;
    }

    if (biographyQuestion) {
        return `👤 <b>Talambuhay: ${lesson.author}</b><br><br>${lesson.biography}${makeFollowUp(lesson)}`;
    }

    if (typeQuestion) {
        return `📚 <b>Uri ng akda</b><br><br>Ang <i>${lesson.title}</i> ay nakatala bilang <b>${lesson.type}</b> sa Hibla-Panitikan.${makeFollowUp(lesson)}`;
    }

    if (themeQuestion) {
        return `🎯 <b>Tema ng ${lesson.title}</b><br><br><b>Pangunahing tema:</b> ${lesson.theme}.<br><br><b>Paliwanag:</b> Batay sa paglalarawan ng aralin, binibigyang-diin ng akda ang mga kaisipang ito at hinihikayat ang mambabasa na pag-isipan ang kaugnayan ng mga ito sa buhay ng tao at lipunan.${makeFollowUp(lesson)}`;
    }

    if (summaryQuestion) {
        return `📝 <b>Paglalahad ng ${lesson.title}</b><br><br>${lesson.description}<br><br><b>Pangunahing pokus:</b> ${lesson.theme}.${makeFollowUp(lesson)}`;
    }

    if (objectiveQuestion) {
        return `💡 <b>Layunin ng ${lesson.title}</b><br><br>${lesson.objective}<br><br><b>Kaugnay na tema:</b> ${lesson.theme}.${makeFollowUp(lesson)}`;
    }

    if (materialQuestion) {
        return `🎬 <b>Materyal sa Week ${lesson.week}</b><br><br>Ang multimodal na materyal na nakatala para sa <i>${lesson.title}</i> ay <b>${lesson.material}</b>.${makeFollowUp(lesson)}`;
    }

    if (lessonQuestion) {
        return `💭 <b>Kahalagahan at aral ng ${lesson.title}</b><br><br>${lesson.description}<br><br><b>Pag-uugnay sa kasalukuyan:</b> Maaaring gamitin ang temang <b>${lesson.theme}</b> bilang panimulang batayan sa pagtalakay ng mga katulad na sitwasyon sa paaralan, pamayanan, o lipunan. Ihambing ang mensahe ng akda sa isang kongkretong halimbawa at ipaliwanag kung bakit ito mahalaga.<br><br><i>Ang pag-uugnay na ito ay gabay sa pagninilay batay sa tema ng aralin, hindi sipi mula sa buong teksto ng akda.</i>${makeFollowUp(lesson)}`;
    }

    if (analysisQuestion) {
        return `🔎 <b>Gabay sa pagsusuri ng ${lesson.title}</b><br><br><b>1. Tema:</b> ${lesson.theme}.<br><b>2. Pangunahing kaisipan:</b> ${lesson.description}<br><b>3. Layunin:</b> ${lesson.objective}<br><br><b>Mga tanong na maaaring pag-isipan:</b><br>• Paano ipinakikita sa akda ang pangunahing tema?<br>• Anong salita, pangyayari, tauhan, o pahayag mula sa mismong teksto ang sumusuporta sa iyong interpretasyon?<br>• Ano ang kaugnayan ng mensahe ng akda sa lipunan o sa kasalukuyan?<br><br><i>Para sa mas tiyak na pagsusuri ng simbolismo o piling taludtod/tagpo, ipadala ang mismong sipi ng teksto upang maiwasan ang paghula.</i>`;
    }

    // Helpful default response: answer more than one dimension without being excessively terse.
    return `
        📚 <b>Week ${lesson.week}: ${lesson.title}</b><br><br>
        📖 <b>May-akda:</b> ${lesson.author}<br>
        📕 <b>Uri:</b> ${lesson.type}<br>
        🎯 <b>Tema:</b> ${lesson.theme}<br>
        📝 <b>Paglalarawan:</b> ${lesson.description}<br>
        💡 <b>Layunin:</b> ${lesson.objective}<br>
        🎬 <b>Materyal:</b> ${lesson.material}<br><br>
        ${makeFollowUp(lesson)}
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
        mode: "ENHANCED LOCAL LEARNING ASSISTANT",
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
    console.log("MODE   : ENHANCED LOCAL LEARNING ASSISTANT");
    console.log("LESSON : WEEK 1 - WEEK 6");
    console.log("AI API : DISABLED");
    console.log("=================================");
});
