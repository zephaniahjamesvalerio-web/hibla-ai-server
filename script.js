document.addEventListener("DOMContentLoaded", () => {
    "use strict";

    /* =========================================================
       DOM ELEMENTS
    ========================================================= */

    const sections = document.querySelectorAll(
        ".hero, .content-section, #researchersPage"
    );

    const navButtons = document.querySelectorAll(".nav-btn");
    const sectionButtons = document.querySelectorAll("[data-section]");
    const weekButtons = document.querySelectorAll(".week-btn");

    const weekContent = document.getElementById("weekContent");
    const navbar = document.getElementById("navbar");
    const researchersPage = document.getElementById("researchersPage");
    const contactModal = document.getElementById("contactModal");

    /* =========================================================
       LESSON DATA
    ========================================================= */

    const lessons = {
        1: {
            title: 'Week 1: “Sa Dakong Silangan” ni Jose Corazon de Jesus',
            description: `
                Ang <strong>“Sa Dakong Silangan”</strong> ay isang tulang
                nagpapahayag ng pag-asa, kalayaan, at muling pagbangon
                ng bayan. Inihahalintulad ang Pilipinas sa pagsikat
                ng araw sa Silangan—isang simbolo ng bagong simula at
                pag-unlad matapos ang mga pagsubok at paghihirap.
            `,
            author: "Jose Corazon de Jesus (Huseng Batute)",
            authorImage: "images/authors/jose-corazon-de-jesus.jpeg",
            biography: `
                Si <strong>Jose Corazon de Jesus</strong>, na higit na
                kilala sa sagisag-panulat na <strong>Huseng Batute</strong>,
                ay isang tanyag na makata at manunulat na Pilipino.
                Nakilala siya sa kaniyang mga tulang tumatalakay sa
                pag-ibig, bayan, kalayaan, at buhay ng mga Pilipino.

                <br><br>

                Naging mahalagang bahagi siya ng panitikang Filipino
                noong panahon ng Amerikano at naging tanyag sa paggamit
                ng tula bilang paraan ng pagpapahayag ng damdamin at
                kaisipang makabayan.
            `,
            theme: "Pag-asa, Kalayaan, at Pagbangon ng Bayan",
            objective: "Magbigay inspirasyon at gisingin ang damdaming makabayan.",
            material: "Audio-visual/Interactive Presentation",
            materialType: "video",
            youtube: "https://www.youtube.com/watch?v=FdZsEKgfN_c",
            materialImage: ""
        },

        2: {
            title: 'Week 2: “Kahapon, Ngayon at Bukas” (Unang Tagpo)',
            description: `
                Ang <strong>“Kahapon, Ngayon at Bukas”</strong> ay isang
                dulang nagpapakita ng kalagayan ng Pilipinas sa iba't
                ibang panahon. Ipinapakita rito ang epekto ng kolonyalismo
                at ang patuloy na pakikibaka ng mga Pilipino para sa
                kalayaan at pagbabago.
            `,
            author: "Aurelio V. Tolentino",
            authorImage: "images/authors/aurelio-tolentino.webp",
            biography: `
                Si <strong>Aurelio V. Tolentino</strong> ay isang
                Pilipinong manunulat, mandudula, at makabayang
                personalidad. Kilala siya sa kaniyang mga akdang
                naglalarawan ng pakikibaka ng mga Pilipino para sa
                kalayaan.

                <br><br>

                Isa sa kaniyang mga tanyag na akda ang
                <strong>“Kahapon, Ngayon at Bukas”</strong>, isang dulang
                may malakas na mensaheng makabayan at panlipunan.
            `,
            theme: "Kolonyalismo • Pakikibaka • Kalayaan",
            objective: "Ipakita ang kasaysayan at aral ng pakikibaka ng Pilipino.",
            material: "Audio-Visual/Interactive Presentation",
            materialType: "video",
            youtube: "https://www.youtube.com/watch?v=Z0ol8rwhMzg",
            materialImage: ""
        },

        3: {
            title: 'Week 3: “Filipino Time”',
            description: `
                Ang <strong>“Filipino Time”</strong> ay isang akdang
                tumatalakay sa karaniwang kaugalian ng pagiging huli
                ng mga Pilipino. Ipinapakita nito ang negatibong epekto
                ng ganitong gawain at hinihikayat ang pagbabago tungo
                sa pagiging disiplinado at responsable sa oras.
            `,
            author: "Felipe Padilla de Leon",
            authorImage: "images/authors/felipe-padilla-de-leon.webp",
            biography: `
                Si <strong>Felipe Padilla de Leon</strong> ay isang
                kilalang Pilipinong kompositor, manunulat, at guro.
                Naging mahalaga ang kaniyang ambag sa pagpapaunlad
                at pagpapahalaga sa kulturang Pilipino.

                <br><br>

                Sa kaniyang mga akda at gawain, naipakita ang
                kahalagahan ng pagkakakilanlan, kultura, at
                disiplina sa lipunang Pilipino.
            `,
            theme: "Ugali • Disiplina • Pananagutan",
            objective: "Himukin ang pagbabago at pagiging disiplinado sa oras.",
            material: "Digital Poster",
            materialType: "text",
            youtube: "",
            materialImage: "",

            processingTitle: "Pagproseso ng Pag-unawa",
            processingInstructions:
                "Sagutin ang mga sumusunod na tanong batay sa iyong pag-unawa sa akdang “Filipino Time”.",

            processingQuestions: [
                {
                    number: 1,
                    question: "Ano ang tinutukoy na “Filipino Time”?"
                },
                {
                    number: 2,
                    question: "Ano ang mga dahilan kung bakit nagkakaroon ng kaugalian ng pagiging huli?"
                },
                {
                    number: 3,
                    question: "Ano ang mga negatibong epekto ng pagiging palaging huli?"
                },
                {
                    number: 4,
                    question: "Bakit mahalaga ang pagpapahalaga sa oras?"
                },
                {
                    number: 5,
                    question: "Paano mo maipapakita ang pagiging responsable sa oras?"
                }
            ],

            processingAnswers: [
                "Ang “Filipino Time” ay tumutukoy sa nakasanayang pagiging huli sa itinakdang oras o gawain.",
                "Maaaring dulot ito ng kakulangan sa disiplina, maling pagpapahalaga sa oras, o kawalan ng maayos na pagpaplano.",
                "Maaari itong magdulot ng pagkaantala sa mga gawain, abala sa ibang tao, at pagkawala ng tiwala.",
                "Mahalaga ang oras dahil hindi na ito maibabalik at may epekto ito sa ating mga gawain at responsibilidad.",
                "Maipapakita ito sa pamamagitan ng pagiging maagap, pagpaplano ng oras, at pagsunod sa itinakdang iskedyul."
            ],

            keywords: [
                "Filipino Time",
                "Oras",
                "Disiplina",
                "Pananagutan",
                "Pagiging Maagap",
                "Responsibilidad"
            ]
        },

        4: {
            title: 'Week 4: “Ang Tunay na Sampung Utos”',
            description: `
                Ang <strong>“Ang Tunay na Sampung Utos”</strong> ay
                naglalaman ng mga prinsipyo at gabay na dapat sundin
                ng mga mamamayan upang magkaroon ng maayos at
                makatarungang lipunan. Binibigyang-diin nito ang
                pagmamahal sa bayan at tamang asal.
            `,
            author: "Michael Charleston Chua (Ayon kay Apolinario Mabini)",
            authorImage: "images/authors/apolinario-mabini.jpg",
            biography: `
                Si <strong>Apolinario Mabini</strong> ay isang
                Pilipinong rebolusyonaryo, manunulat, at
                tagapayo sa pamahalaan noong panahon ng
                Himagsikan at Unang Republika ng Pilipinas.

                <br><br>

                Kilala siya sa kaniyang mga akdang naglalaman
                ng mga kaisipan tungkol sa pamamahala, moralidad,
                responsibilidad, at pagmamahal sa bayan.
            `,
            theme: "Gabay • Disiplina • Pagmamahal sa Bayan",
            objective: "Ipakita ang kahalagahan ng tamang asal at responsableng mamamayan.",
            material: "Digital Sequence Chart",
            materialType: "image",
            youtube: "",
            materialImage: "images/materials/week4-sequence-chart.jpg"
        },

        5: {
            title: 'Week 5: “Wikang Pambansa”',
            description: `
                Ang <strong>“Wikang Pambansa”</strong> ay isang
                talumpati ni <strong>Manuel L. Quezon</strong> na
                nagbibigay-diin sa kahalagahan ng pagkakaroon ng
                sariling wikang pambansa bilang mahalagang bahagi
                ng pambansang kamalayan, pagkakaisa, at
                pagkakakilanlan ng mga Pilipino.

                <br><br>

                Ipinahayag ni Quezon ang pangangailangan ng isang
                wikang maaaring gamitin ng lahat ng Pilipino upang
                mapalakas ang pagkakaisa at magkaroon ng tunay na
                pambansang kamalayan.
            `,
            author: "Manuel L. Quezon",
            authorImage: "images/authors/manuel-quezon.png",
            biography: `
                Si <strong>Manuel L. Quezon</strong> ay ang unang
                Pangulo ng Komonwelt ng Pilipinas. Malaki ang
                naging papel niya sa pagsusulong ng pagkakaroon
                ng wikang pambansa.

                <br><br>

                Sa kaniyang talumpati tungkol sa
                <strong>Wikang Pambansa</strong>, binigyang-diin
                niya na mahalaga ang sariling wika sa pagkakaroon
                ng pambansang kamalayan at pagkakaisa ng mga
                Pilipino.
            `,
            theme: "Wikang Pambansa • Pagkakaisa • Pambansang Kamalayan • Pagkakakilanlan",
            objective:
                "Maunawaan ang kahalagahan ng pagkakaroon ng wikang pambansa bilang instrumento ng pagkakaisa at pambansang kamalayan.",
            material: "Audio-Visual/Interactive Presentation",
            materialType: "video",
            youtube: "https://www.youtube.com/watch?v=Wgq6voqo1Kw",
            materialImage: "",

            processingTitle: "Pagproseso ng Pag-unawa",
            processingInstructions:
                "Basahin at unawain ang talumpati ni Manuel L. Quezon tungkol sa Wikang Pambansa. Sagutin ang mga sumusunod na tanong batay sa akda.",

            processingQuestions: [
                {
                    number: 1,
                    question: "Bakit nais ni Manuel L. Quezon na magkaroon ng sariling wikang pambansa ang Pilipinas?"
                },
                {
                    number: 2,
                    question: "Ano ang kaugnayan ng wikang pambansa sa pagkakaroon ng pambansang kamalayan?"
                },
                {
                    number: 3,
                    question: "Bakit nahirapan si Quezon na makipag-usap sa kaniyang mga kababayan sa iba't ibang lalawigan?"
                },
                {
                    number: 4,
                    question: "Ano ang ipinakita ni Quezon tungkol sa kaniyang pagiging bukas sa paggamit ng ibang katutubong wika?"
                },
                {
                    number: 5,
                    question: "Paano nakatutulong ang isang wikang ginagamit ng lahat sa pagkakaisa ng mga Pilipino?"
                }
            ],

            processingAnswers: [
                "Nais ni Manuel L. Quezon na magkaroon ng sariling wikang pambansa upang magkaroon ng wikang maaaring gamitin ng mga Pilipino at upang mapalakas ang pambansang kamalayan.",
                "Mahalaga ang wikang pambansa sa pambansang kamalayan dahil nagiging daan ito upang magkaroon ng pagkakaunawaan at pagkakaisa ang mga mamamayan.",
                "Kinailangan ni Quezon ng tagapagsalin dahil iba-iba ang wikang ginagamit ng mga Pilipino sa iba't ibang lalawigan.",
                "Ipinakita niya ang kaniyang pagiging bukas dahil handa siyang tangkilikin at pag-aralan ang ibang katutubong wika kung iyon ang makatutulong upang magkaroon ng wikang ginagamit ng lahat.",
                "Nakatutulong ito sa pagkakaisa dahil nagkakaroon ang mga mamamayan ng isang wikang maaaring gamitin sa pakikipag-ugnayan at pagpapahayag ng kanilang pambansang pagkakakilanlan."
            ],

            keywords: [
                "Wikang Pambansa",
                "Pambansang Kamalayan",
                "Pagkakaisa",
                "Sariling Wika",
                "Katutubong Wika",
                "Pagkakakilanlan",
                "Manuel L. Quezon",
                "1937",
                "Tagalog",
                "Ilokano",
                "Bisaya"
            ]
        },

        6: {
            title: 'Week 6: “Mga Ibong Mandaragit”',
            description: `
                Ang <strong>“Mga Ibong Mandaragit”</strong> ay isang
                nobela na tumatalakay sa katiwalian, kasakiman, at
                pakikibaka para sa katarungan sa lipunan. Ipinapakita
                nito ang realidad ng buhay at ang kahalagahan ng
                paninindigan para sa tama.
            `,
            author: "Amado V. Hernandez",
            authorImage: "images/authors/amado-hernandez.jpg",
            biography: `
                Si <strong>Amado V. Hernandez</strong> ay isang
                makata, manunulat, mamamahayag, at aktibista.
                Nakilala siya sa kaniyang mga akdang tumatalakay
                sa buhay ng karaniwang Pilipino, paggawa,
                katarungang panlipunan, at pakikibaka.

                <br><br>

                Ang kaniyang nobelang
                <strong>“Mga Ibong Mandaragit”</strong> ay isang
                mahalagang akdang panlipunan na tumatalakay sa
                mga suliranin at realidad ng lipunang Pilipino.
            `,
            theme: "Katiwalian • Pakikibaka • Katarungan",
            objective: "Ipakita ang kahalagahan ng paninindigan at tamang asal sa lipunan.",
            material: "Infographics",
            materialType: "image",
            youtube: "",
            materialImage: ""
        }
    };

    /* =========================================================
       ADDITIONAL LEARNING MATERIALS
       NOTE: ANSWER KEYS ARE NOT DISPLAYED.
    ========================================================= */

    const additionalMaterials = {
        1: {
            title: "Tukuyin Mo!",
            subtitle: "A. Pagkilala sa Katotohanan at Kasinungalingan",
            type: "truefalse",
            instructions: `
                Tukuyin kung ang nakasaad ay
                <strong>Katotohanan</strong>. Kung hindi, palitan
                ang salita o mga salitang may salungguhit ng wastong sagot.
            `,
            questions: [
                {
                    number: 1,
                    question: "Ang simbolismong kinakatawan ni Haring Samuel ay ang <u>Espanya</u>."
                },
                {
                    number: 2,
                    question: "Si <u>Prinsipe Dolar</u> ang mabuting anak ni Haring Samuel."
                },
                {
                    number: 3,
                    question: "Si <u>Dakila</u> ay kasintahan ni Prinsesa Mandawa."
                },
                {
                    number: 4,
                    question: "Ang akdang “Sa Dakong Silangan” ay naisulat noong <u>1928</u>."
                },
                {
                    number: 5,
                    question: "Ang bandilang tinutukoy na may araw at tala ay ang bandila ng <u>Amerika</u>."
                },
                {
                    number: 6,
                    question: "Si <u>Duke Demorito</u> ay naghahangad ng paglaya ng Kaharian ni Haring Pilipo."
                },
                {
                    number: 7,
                    question: "Sa akda, binanggit na ang <u>ginto</u> na bilog ay nakabubulag."
                },
                {
                    number: 8,
                    question: "Ang matulis na <u>kuko</u> ng gintong dayuha’y tumarak sa dibdib ng lupang Silangan."
                },
                {
                    number: 9,
                    question: "Ang <u>palasyo</u> ay kulong ng malaking lambat."
                },
                {
                    number: 10,
                    question: "Ang <u>dayuhang utak</u> ay simbolismo ng kaisipang kolonyal."
                }
            ]
        },

        2: {
            title: "Alam mo ba?",
            subtitle: "Karagdagang Babasahin",
            type: "reading",
            content: `
                <p style="text-align: justify;">
                    Maituturing na rehiyonal na dula ang
                    <strong>“Kahapon, Ngayon at Bukas”</strong>
                    ni Aurelio V. Tolentino na may pamagat na
                    <strong>“Napon, Ngeni at Bukas”</strong>
                    sa Kapampangan.
                </p>

                <p style="text-align: justify;">
                    Ang mga rehiyonal na dula na nasusulat sa mga
                    rehiyonal na wika sa Pilipinas ay kapantay rin
                    ng mga dulang nasusulat sa Tagalog.
                </p>

                <p style="text-align: justify;">
                    <strong>“Elena”</strong> naman ang pamagat ng
                    dulang Cebuano ni Vicente Sotto noong 1902.
                </p>

                <p style="text-align: justify;">
                    <strong>“Ang Ayat Iti Ili ken Dadduma Pay a Drama”</strong>
                    (Pag-ibig sa Bayan at Iba pang Drama) ni
                    Jose Garvida Flores ay halimbawa ng dulang Ilocano.
                </p>

                <p style="text-align: justify;">
                    Ang mga dulang rehiyonal sa iba't ibang lugar
                    sa Pilipinas ay may ambag ding malaki sa
                    pag-unlad ng dula o teatro sa bansa sa panahon
                    ng pananakop ng mga Kastila at Amerikano
                    hanggang sa kasalukuyan.
                </p>
            `,
            keywords: [
                "Rehiyonal na Dula",
                "Kapampangan",
                "Cebuano",
                "Ilocano",
                "Kahapon, Ngayon at Bukas",
                "Napon, Ngeni at Bukas",
                "Elena",
                "Ang Ayat Iti Ili ken Dadduma Pay a Drama",
                "Vicente Sotto",
                "Jose Garvida Flores",
                "Aurelio V. Tolentino",
                "Kastila",
                "Amerikano",
                "Teatro"
            ]
        },

        4: {
            title: "Ang Tunay na Sampung Utos",
            subtitle: "El Verdadero Decalogo ni Apolinario Mabini",
            type: "commandments",

            introduction: `
                Mayo ng 1898 nang sinulat ni
                <strong>Apolinario Mabini</strong> ang
                <strong>El Verdadero Decalogo</strong> —
                o <strong>Ang Tunay na Sampung Utos</strong>.
                Ito ang kanyang habilin sa ating bayan.
            `,

            commandments: [
                {
                    number: "Una",
                    text: `
                        Ibigin mo ang Diyos at ang iyong puri ng lalo
                        sa lahat ng bagay. Ang paghahangad ng puri ang
                        siya lamang makapipigil sa iyo sa pagbubulaan
                        at makapipigil na huwag kang suminsay sa daan
                        ng katuwiran at laging magtaglay ng kasipagan.
                    `,
                    keywords: ["Diyos", "Puri", "Katuwiran", "Kasipagan"]
                },
                {
                    number: "Ikalawa",
                    text: `
                        Sambahin mo ang Dios sa kaparaang lalong
                        minamarapat ng iyong bait at kalooban o
                        konsyensya.
                    `,
                    keywords: ["Pagsamba sa Diyos", "Bait", "Kalooban", "Konsensya"]
                },
                {
                    number: "Ikatlo",
                    text: `
                        Dagdagan mong pilit ang talos ng isip at
                        katutubong alam na ipinagkaloob ng Diyos sa iyo
                        sa pamamagitan ng pag-aaral, at magsumakit ka
                        ng ubos lakas sa gawang kinahihiligan ng iyong
                        loob upang matipon sa iyo ang lalong maraming
                        kagalingan at sa ganitong paraan ay makatulong
                        ka sa ikasusulong ng lahat.
                    `,
                    keywords: ["Pag-aaral", "Kaalaman", "Kagalingan", "Pagsisikap", "Pagtulong"]
                },
                {
                    number: "Ikaapat",
                    text: `
                        Ibigin mo ang iyong Inang Bayan ikalawa sa
                        Dios at sa iyong puri at higit sa iyong sarili,
                        sapagkat siya ang nakaisa-isang Paraisong
                        pinaglagyan sa iyo ng Diyos sa buhay na ito.
                    `,
                    keywords: ["Inang Bayan", "Pagmamahal sa Bayan", "Puri", "Diyos"]
                },
                {
                    number: "Ikalima",
                    text: `
                        Pagpilitan mo ang kalayaan ng iyong bayan
                        bago ang iyong sarili, sapagkat kung malaya
                        siya at lalaya rin ikaw at ang iyong kamag-anakan.
                    `,
                    keywords: ["Kalayaan", "Bayan", "Sarili", "Kamag-anakan"]
                },
                {
                    number: "Ikaanim",
                    text: `
                        Pagpilitan mo ang kasarinlan ng iyong bayan,
                        sapagkat ikaw lamang ang tunay na makapagmamasakit
                        sa kanyang ikasusulong at ikatatanghal.
                    `,
                    keywords: ["Kasarinlan", "Bayan", "Pagsulong", "Pagtatanghal"]
                },
                {
                    number: "Ikapito",
                    text: `
                        Huwag mong kilalanin sa loob ng iyong bayan ang
                        kapangyarihan ng sino mang tao na hindi inilagay
                        ninyong magkakababayan. Ang taong ituro at ihalal
                        ng mga konsyensya ng sangkabayanan ang siya lamang
                        makapagtataglay ng tunay na kapangyarihan.
                    `,
                    keywords: ["Halalan", "Konsensya", "Mamamayan", "Tunay na Kapangyarihan"]
                },
                {
                    number: "Ikawalo",
                    text: `
                        Ihanap mong pilit ang iyong bayan ng Republica,
                        yaon baga ang lahat na namamahala ay palagay ng
                        bayan, at huwag isipin kailan man ang Monarkiya,
                        ang pagkakaroon baga ng hari.
                    `,
                    keywords: ["Republika", "Bayan", "Pamamahala", "Monarkiya"]
                },
                {
                    number: "Ikasiyam",
                    text: `
                        Ibigin mo ang kapwa mo tao kaparis ng pag-ibig
                        mo sa iyong sarili, sapagkat siya’y binigyan ng
                        Diyos, at ikaw ay ganoon din naman, ng katungkulang
                        tulungan ka at huwag niyang gawin sa iyo ang di
                        niya ibig na gawin mo sa kaniya.
                    `,
                    keywords: ["Kapwa", "Pagmamahal", "Pagtutulungan", "Diyos"]
                },
                {
                    number: "Ikasampu",
                    text: `
                        Palalaluin nang kaunti sa loob mo ang iyong
                        kababayan sa iyong kapwa tao; aariin mong palagi
                        siya na parang isang katoto, kapatid kaya o kasama
                        man lamang, palibhasa’y iisa ang inyong kapalaran,
                        iisa din ang inyong tuwa at kapighatian.
                    `,
                    keywords: ["Kababayan", "Pagkakaisa", "Kapatid", "Magkakasama", "Iisang Kapalaran"]
                }
            ]
        },

        6: {
            title: "Pagtukoy: Mga Ibong Mandaragit",
            subtitle: "Rebyu ng Nobela",
            type: "identification",
            instructions: `
                Ang sumusunod ay mula sa Rebyu ng nobelang
                <strong>“Mga Ibong Mandaragit.”</strong>
                Isulat sa patlang ang tinutukoy sa bawat bilang.
            `,
            questions: [
                {
                    number: 1,
                    question: "Ito ang taon nang maisulat ang nobelang Mga Ibong Mandaragit."
                },
                {
                    number: 2,
                    question: "Siya ang awtor ng English na bersyon ng nobela na lumabas noong 2022."
                },
                {
                    number: 3,
                    question: "Siya ang pangunahing tauhan sa nobela."
                },
                {
                    number: 4,
                    question: "Kung sa Noli Me Tangere ay may Pilosopo Tasyo, siya naman ang katumbas niya sa nobela."
                },
                {
                    number: 5,
                    question: "Ito ang pamagat ng tulang nasulat ni Amado V. Hernandez sa kulungan na nagpapakita ng kanyang kalagayan doon."
                },
                {
                    number: 6,
                    question: "Ano ang pamagat ng tula ni Amado V. Hernandez na binubuo ng 5,000 taludtod?"
                },
                {
                    number: 7,
                    question: "Sa nobela, ito ang taon nang pagsisimula ng naratibo."
                },
                {
                    number: 8,
                    question: "Ito ang kabuuang bilang ng kabanata ng nobela."
                },
                {
                    number: 9,
                    question: "Sa nobela, ito ang tawag sa patagong pinagbebentahan ng mga gamit sa panahon ng Hapon."
                },
                {
                    number: 10,
                    question: "Ito ang pamagat ng pahayagan."
                }
            ]
        }
    };

    /* =========================================================
       DYNAMIC MODAL STYLES
    ========================================================= */

    function injectStyles() {
        if (document.getElementById("hibla-dynamic-styles")) {
            return;
        }

        const style = document.createElement("style");
        style.id = "hibla-dynamic-styles";

        style.textContent = `
            #lessonInfoModal,
            #additionalMaterialModal {
                position: fixed;
                inset: 0;
                display: none;
            }

            #lessonInfoModal {
                z-index: 99999;
            }

            #additionalMaterialModal {
                z-index: 99998;
            }

            #lessonInfoModal.show,
            #additionalMaterialModal.show {
                display: block;
            }

            .lesson-modal-overlay {
                position: fixed;
                inset: 0;
                background: rgba(20, 5, 8, 0.78);
                backdrop-filter: blur(8px);
                display: flex;
                align-items: center;
                justify-content: center;
                padding: 25px;
                overflow-y: auto;
            }

            .lesson-modal {
                position: relative;
                width: min(850px, 100%);
                max-height: 90vh;
                overflow-y: auto;
                background: #fff;
                border-radius: 22px;
                padding: 40px;
                box-shadow: 0 25px 80px rgba(0,0,0,.35);
                animation: lessonModalOpen .25s ease;
            }

            @keyframes lessonModalOpen {
                from {
                    opacity: 0;
                    transform: translateY(20px) scale(.97);
                }
                to {
                    opacity: 1;
                    transform: translateY(0) scale(1);
                }
            }

            .lesson-modal-close {
                position: absolute;
                top: 18px;
                right: 18px;
                width: 42px;
                height: 42px;
                border: 0;
                border-radius: 50%;
                background: #7d0b12;
                color: #fff;
                font-size: 28px;
                line-height: 1;
                cursor: pointer;
                transition: .2s ease;
                z-index: 10;
            }

            .lesson-modal-close:hover {
                background: #57070c;
                transform: rotate(90deg);
            }

            .modal-eyebrow {
                display: inline-block;
                margin-bottom: 10px;
                color: #7d0b12;
                font-size: 12px;
                font-weight: 800;
                letter-spacing: 1.5px;
            }

            .lesson-modal h2 {
                margin: 0 50px 25px 0;
                color: #7d0b12;
                font-size: clamp(25px, 4vw, 38px);
                line-height: 1.2;
            }

            .modal-text {
                color: #444;
                font-size: 16px;
                line-height: 1.8;
            }

            .author-profile {
                display: grid;
                grid-template-columns: 220px 1fr;
                gap: 30px;
                align-items: start;
            }

            .author-photo {
                width: 100%;
                aspect-ratio: 1 / 1;
                border-radius: 18px;
                overflow: hidden;
                background: linear-gradient(135deg, #7d0b12, #c7353d);
                display: flex;
                align-items: center;
                justify-content: center;
                position: relative;
            }

            .author-photo img {
                display: block;
                width: 100%;
                height: 100%;
                object-fit: cover;
            }

            .author-photo.no-image::after {
                content: "Walang Larawan";
                color: #fff;
                font-size: 16px;
                font-weight: 800;
                letter-spacing: 1px;
            }

            .detail-box {
                background: #faf7f7;
                border-left: 4px solid #7d0b12;
                padding: 20px;
                border-radius: 12px;
                margin-top: 15px;
            }

            .material-preview {
                margin-top: 25px;
            }

            .material-image-wrapper {
                width: 100%;
                min-height: 280px;
                border-radius: 16px;
                overflow: hidden;
                background: #f5eeee;
                display: flex;
                align-items: center;
                justify-content: center;
                cursor: zoom-in;
            }

            .material-image-wrapper img {
                display: block;
                width: 100%;
                max-height: 560px;
                object-fit: contain;
            }

            .material-placeholder {
                min-height: 280px;
                width: 100%;
                border: 2px dashed #b98a8e;
                border-radius: 16px;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                text-align: center;
                padding: 30px;
                color: #7d0b12;
                background: #fffafa;
            }

            .material-placeholder strong {
                font-size: 20px;
                margin-bottom: 8px;
            }

            .youtube-thumbnail-wrapper {
                position: relative;
                width: 100%;
                aspect-ratio: 16 / 9;
                border-radius: 16px;
                overflow: hidden;
                background: #111;
                cursor: pointer;
                display: block;
                text-decoration: none;
                box-shadow: 0 12px 30px rgba(0,0,0,.18);
            }

            .youtube-thumbnail-wrapper img {
                width: 100%;
                height: 100%;
                display: block;
                object-fit: cover;
                transition: transform .35s ease, filter .35s ease;
            }

            .youtube-thumbnail-wrapper:hover img {
                transform: scale(1.04);
                filter: brightness(.72);
            }

            .youtube-play-button {
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                width: 76px;
                height: 54px;
                border-radius: 16px;
                background: #ff0000;
                display: flex;
                align-items: center;
                justify-content: center;
                box-shadow: 0 8px 25px rgba(0,0,0,.35);
                transition: transform .25s ease, background .25s ease;
            }

            .youtube-play-button::after {
                content: "";
                width: 0;
                height: 0;
                border-top: 10px solid transparent;
                border-bottom: 10px solid transparent;
                border-left: 16px solid #fff;
                margin-left: 4px;
            }

            .youtube-thumbnail-wrapper:hover .youtube-play-button {
                transform: translate(-50%, -50%) scale(1.1);
                background: #cc0000;
            }

            .youtube-label {
                position: absolute;
                left: 16px;
                bottom: 16px;
                padding: 7px 12px;
                border-radius: 8px;
                background: rgba(0,0,0,.75);
                color: #fff;
                font-size: 13px;
                font-weight: 700;
            }

            .youtube-placeholder {
                width: 100%;
                aspect-ratio: 16 / 9;
                background: #f3eeee;
                border: 2px dashed #b98a8e;
                border-radius: 16px;
                display: flex;
                align-items: center;
                justify-content: center;
                text-align: center;
                padding: 30px;
            }

            .youtube-content strong {
                display: block;
                font-size: 20px;
                color: #7d0b12;
                margin-bottom: 8px;
            }

            .youtube-content p {
                color: #666;
                margin: 0;
            }

            .zoom-modal {
                position: fixed;
                inset: 0;
                z-index: 100000;
                background: rgba(0,0,0,.92);
                display: none;
                align-items: center;
                justify-content: center;
                padding: 30px;
                cursor: zoom-out;
            }

            .zoom-modal.show {
                display: flex;
            }

            .zoom-modal img {
                max-width: 95vw;
                max-height: 90vh;
                object-fit: contain;
                border-radius: 8px;
            }

            .clickable-lesson-card {
                cursor: pointer;
                transition: transform .2s ease, box-shadow .2s ease, border-color .2s ease;
            }

            .clickable-lesson-card:hover {
                transform: translateY(-5px);
                box-shadow: 0 15px 35px rgba(125,11,18,.15);
                border-color: #7d0b12;
            }

            .clickable-lesson-card:focus {
                outline: 3px solid rgba(125,11,18,.25);
                outline-offset: 3px;
            }

            .additional-material-button {
                width: 100%;
                margin-top: 25px;
                padding: 15px 20px;
                border: 2px solid #7d0b12;
                border-radius: 14px;
                background: #fff;
                color: #7d0b12;
                font-family: inherit;
                font-size: 15px;
                font-weight: 800;
                cursor: pointer;
                transition: all .25s ease;
                text-align: center;
            }

            .additional-material-button:hover {
                background: #7d0b12;
                color: #fff;
                transform: translateY(-2px);
                box-shadow: 0 10px 25px rgba(125,11,18,.18);
            }

            .additional-material-button:focus {
                outline: 3px solid rgba(125,11,18,.2);
                outline-offset: 3px;
            }

            .additional-material-list {
                display: flex;
                flex-direction: column;
                gap: 18px;
                margin-top: 20px;
            }

            .additional-question {
                background: #faf7f7;
                border-left: 4px solid #7d0b12;
                padding: 18px;
                border-radius: 12px;
            }

            .additional-question-number {
                color: #7d0b12;
                font-weight: 900;
                margin-bottom: 7px;
            }

            .additional-question-text {
                color: #333;
                line-height: 1.7;
            }

            .material-reading {
                color: #444;
                line-height: 1.85;
                font-size: 16px;
            }

            .material-reading p {
                margin-bottom: 18px;
            }

            .keyword-container {
                display: flex;
                flex-wrap: wrap;
                gap: 8px;
                margin-top: 20px;
            }

            .keyword-tag,
            .commandment-keyword {
                display: inline-block;
                padding: 7px 12px;
                border-radius: 20px;
                background: #7d0b12;
                color: #fff;
                font-size: 12px;
                font-weight: 700;
            }

            .commandment-card {
                background: #faf7f7;
                border: 1px solid rgba(125,11,18,.12);
                border-radius: 15px;
                padding: 20px;
                margin-bottom: 16px;
            }

            .commandment-number {
                color: #7d0b12;
                font-size: 18px;
                font-weight: 900;
                margin-bottom: 10px;
            }

            .commandment-text {
                color: #444;
                line-height: 1.8;
            }

            .commandment-keywords {
                margin-top: 14px;
                display: flex;
                flex-wrap: wrap;
                gap: 7px;
            }

            @media (max-width: 650px) {
                .lesson-modal {
                    padding: 28px 20px;
                    border-radius: 18px;
                }

                .author-profile {
                    grid-template-columns: 1fr;
                }

                .author-photo {
                    max-width: 220px;
                    margin: auto;
                }

                .youtube-play-button {
                    width: 64px;
                    height: 46px;
                }

                .youtube-label {
                    left: 10px;
                    bottom: 10px;
                    font-size: 11px;
                }
            }
        `;

        document.head.appendChild(style);
    }

    /* =========================================================
       MODAL HELPERS
    ========================================================= */

    function createLessonInfoModal() {
        if (document.getElementById("lessonInfoModal")) {
            return;
        }

        const modal = document.createElement("div");
        modal.id = "lessonInfoModal";

        modal.innerHTML = `
            <div class="lesson-modal-overlay">
                <div class="lesson-modal">
                    <button
                        type="button"
                        class="lesson-modal-close"
                        id="lessonModalClose"
                        aria-label="Isara"
                    >×</button>

                    <div id="lessonModalBody"></div>
                </div>
            </div>
        `;

        document.body.appendChild(modal);

        const closeButton = document.getElementById("lessonModalClose");
        if (closeButton) {
            closeButton.addEventListener("click", closeInfoModal);
        }

        const overlay = modal.querySelector(".lesson-modal-overlay");
        if (overlay) {
            overlay.addEventListener("click", event => {
                if (event.target === overlay) {
                    closeInfoModal();
                }
            });
        }
    }

    function createAdditionalMaterialModal() {
        if (document.getElementById("additionalMaterialModal")) {
            return;
        }

        const modal = document.createElement("div");
        modal.id = "additionalMaterialModal";

        modal.innerHTML = `
            <div class="lesson-modal-overlay">
                <div class="lesson-modal">
                    <button
                        type="button"
                        class="lesson-modal-close"
                        id="additionalMaterialClose"
                        aria-label="Isara"
                    >×</button>

                    <div id="additionalMaterialBody"></div>
                </div>
            </div>
        `;

        document.body.appendChild(modal);

        const closeButton = document.getElementById("additionalMaterialClose");
        if (closeButton) {
            closeButton.addEventListener("click", closeAdditionalMaterial);
        }

        const overlay = modal.querySelector(".lesson-modal-overlay");
        if (overlay) {
            overlay.addEventListener("click", event => {
                if (event.target === overlay) {
                    closeAdditionalMaterial();
                }
            });
        }
    }

    function closeInfoModal() {
        const modal = document.getElementById("lessonInfoModal");

        if (modal) {
            modal.classList.remove("show");
        }

        restoreBodyScrollIfNoModal();
    }

    function closeAdditionalMaterial() {
        const modal = document.getElementById("additionalMaterialModal");

        if (modal) {
            modal.classList.remove("show");
        }

        restoreBodyScrollIfNoModal();
    }

    function restoreBodyScrollIfNoModal() {
        const lessonModal = document.getElementById("lessonInfoModal");
        const additionalModal = document.getElementById("additionalMaterialModal");
        const zoomModal = document.getElementById("imageZoomModal");

        const anyOpen =
            lessonModal?.classList.contains("show") ||
            additionalModal?.classList.contains("show") ||
            zoomModal?.classList.contains("show") ||
            contactModal?.classList.contains("show");

        if (!anyOpen) {
            document.body.style.overflow = "";
        }
    }

    /* =========================================================
       YOUTUBE
    ========================================================= */

    function getYouTubeVideoId(url) {
        if (!url) {
            return "";
        }

        const value = String(url).trim();

        const patterns = [
            /youtube\.com\/watch\?v=([^&]+)/i,
            /youtube\.com\/embed\/([^?&]+)/i,
            /youtube\.com\/shorts\/([^?&]+)/i,
            /youtu\.be\/([^?&]+)/i
        ];

        for (const pattern of patterns) {
            const match = value.match(pattern);

            if (match?.[1]) {
                return match[1];
            }
        }

        return "";
    }

    /* =========================================================
       IMAGE ZOOM
    ========================================================= */

    function openImageZoom(imageSrc) {
        if (!imageSrc) {
            return;
        }

        let zoom = document.getElementById("imageZoomModal");

        if (!zoom) {
            zoom = document.createElement("div");
            zoom.id = "imageZoomModal";
            zoom.className = "zoom-modal";

            zoom.innerHTML = `
                <img
                    id="zoomedMaterialImage"
                    src=""
                    alt="Zoomed material"
                >
            `;

            document.body.appendChild(zoom);

            zoom.addEventListener("click", () => {
                zoom.classList.remove("show");
                restoreBodyScrollIfNoModal();
            });
        }

        const image = document.getElementById("zoomedMaterialImage");

        if (image) {
            image.src = imageSrc;
        }

        zoom.classList.add("show");
        document.body.style.overflow = "hidden";
    }

    /* =========================================================
       OPEN LESSON INFO MODAL
    ========================================================= */

    function openInfoModal(type, lesson) {
        if (!lesson) {
            return;
        }

        createLessonInfoModal();

        const modal = document.getElementById("lessonInfoModal");
        const body = document.getElementById("lessonModalBody");

        if (!modal || !body) {
            return;
        }

        let html = "";

        if (type === "author") {
            const authorImage =
                typeof lesson.authorImage === "string"
                    ? lesson.authorImage.trim()
                    : "";

            const hasAuthorImage = authorImage.length > 0;

            html = `
                <span class="modal-eyebrow">MAY-AKDA</span>

                <h2>${lesson.author}</h2>

                <div class="author-profile">
                    <div
                        class="author-photo ${hasAuthorImage ? "" : "no-image"}"
                        id="authorPhotoContainer"
                    >
                        ${
                            hasAuthorImage
                                ? `
                                    <img
                                        id="authorPhotoImage"
                                        src="${authorImage}"
                                        alt="${lesson.author}"
                                    >
                                `
                                : ""
                        }
                    </div>

                    <div>
                        <h3>Talambuhay</h3>

                        <div class="modal-text">
                            ${lesson.biography || "Walang talambuhay na nailagay."}
                        </div>
                    </div>
                </div>
            `;
        }

        else if (type === "theme") {
            const themeExplanation =
                lesson.theme ||
                "Walang tema na nailagay para sa araling ito.";

            html = `
                <span class="modal-eyebrow">TEMA</span>

                <h2>${themeExplanation}</h2>

                <div class="detail-box">
                    <p class="modal-text" style="text-align: justify;">
                        Ang tema ng akda ay nagpapakita ng mahahalagang
                        kaisipan at pagpapahalagang nais ipabatid sa
                        mga mambabasa. Sa pamamagitan nito, mas
                        mauunawaan ang mensahe at pananaw na nakapaloob
                        sa aralin.
                    </p>
                </div>
            `;
        }

        else if (type === "objective") {
            html = `
                <span class="modal-eyebrow">LAYUNIN</span>

                <h2>Layunin ng Aralin</h2>

                <div class="detail-box">
                    <p class="modal-text" style="text-align: justify;">
                        ${lesson.objective || "Walang layunin na nailagay."}
                    </p>
                </div>
            `;
        }

        else if (type === "processing") {
            let questionsHTML = "";

            if (
                Array.isArray(lesson.processingQuestions) &&
                lesson.processingQuestions.length
            ) {
                lesson.processingQuestions.forEach(item => {
                    questionsHTML += `
                        <div class="detail-box">
                            <strong>${item.number}.</strong>
                            <span class="modal-text">
                                ${item.question}
                            </span>
                        </div>
                    `;
                });
            }

            html = `
                <span class="modal-eyebrow">
                    PAGPROSESO NG PAG-UNAWA
                </span>

                <h2>
                    ${lesson.processingTitle || "Pagproseso ng Pag-unawa"}
                </h2>

                <p class="modal-text">
                    ${lesson.processingInstructions || ""}
                </p>

                <div style="margin-top:25px;">
                    ${questionsHTML}
                </div>
            `;
        }

        else if (type === "material") {
            let preview = "";

            if (lesson.materialType === "video") {
                const videoId = getYouTubeVideoId(lesson.youtube);

                if (videoId) {
                    const thumbnail =
                        `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;

                    const youtubeUrl =
                        `https://www.youtube.com/watch?v=${videoId}`;

                    preview = `
                        <a
                            class="youtube-thumbnail-wrapper"
                            href="${youtubeUrl}"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Panoorin sa YouTube: ${lesson.material}"
                        >
                            <img
                                src="${thumbnail}"
                                alt="${lesson.material} YouTube preview"
                                loading="eager"
                            >

                            <span
                                class="youtube-play-button"
                                aria-hidden="true"
                            ></span>

                            <span class="youtube-label">
                                ▶ Panoorin sa YouTube
                            </span>
                        </a>
                    `;
                }

                else {
                    preview = `
                        <div class="youtube-placeholder">
                            <div class="youtube-content">
                                <strong>YouTube Preview</strong>
                                <p>
                                    Wala pang valid na YouTube video para
                                    sa materyal na ito.
                                </p>
                            </div>
                        </div>
                    `;
                }
            }

            else if (
                lesson.materialImage &&
                String(lesson.materialImage).trim() !== ""
            ) {
                const imageSrc = String(lesson.materialImage).trim();

                preview = `
                    <div
                        class="material-image-wrapper"
                        data-zoom-image="${imageSrc}"
                    >
                        <img
                            src="${imageSrc}"
                            alt="${lesson.material || "Multimodal material"}"
                        >
                    </div>
                `;
            }

            else {
                preview = `
                    <div class="material-placeholder">
                        <strong>${lesson.material || "Multimodal Material"}</strong>
                        <span>
                            Dito ilalagay ang larawan o iba pang
                            multimodal material.
                        </span>
                    </div>
                `;
            }

            html = `
                <span class="modal-eyebrow">
                    MULTIMODAL MATERIAL
                </span>

                <h2>${lesson.material || "Multimodal Material"}</h2>

                <div class="material-preview">
                    ${preview}
                </div>
            `;
        }

        else {
            html = `
                <h2>Impormasyon</h2>
                <p class="modal-text">
                    Walang available na impormasyon.
                </p>
            `;
        }

        body.innerHTML = html;
        modal.classList.add("show");
        document.body.style.overflow = "hidden";

        const authorPhoto = body.querySelector("#authorPhotoImage");
        const authorPhotoContainer =
            body.querySelector("#authorPhotoContainer");

        if (authorPhoto && authorPhotoContainer) {
            authorPhoto.addEventListener("error", function () {
                console.error("Hindi makita ang author image:", this.src);
                this.remove();
                authorPhotoContainer.classList.add("no-image");
            });
        }

        const youtubeThumbnail =
            body.querySelector(".youtube-thumbnail-wrapper img");

        if (youtubeThumbnail) {
            youtubeThumbnail.addEventListener("error", function () {
                const wrapper =
                    this.closest(".youtube-thumbnail-wrapper");

                if (!wrapper) {
                    return;
                }

                wrapper.outerHTML = `
                    <div class="youtube-placeholder">
                        <div class="youtube-content">
                            <strong>Hindi ma-load ang YouTube preview</strong>
                            <p>
                                Gamitin ang link ng video upang panoorin ito sa YouTube.
                            </p>
                        </div>
                    </div>
                `;
            });
        }

        const zoomImage =
            body.querySelector("[data-zoom-image]");

        if (zoomImage) {
            zoomImage.addEventListener("click", () => {
                openImageZoom(zoomImage.dataset.zoomImage);
            });
        }
    }

    /* =========================================================
       OPEN ADDITIONAL MATERIAL
    ========================================================= */

    function openAdditionalMaterial(weekNumber) {
        const material = additionalMaterials[weekNumber];

        if (!material) {
            return;
        }

        createAdditionalMaterialModal();

        const modal = document.getElementById("additionalMaterialModal");
        const body = document.getElementById("additionalMaterialBody");

        if (!modal || !body) {
            return;
        }

        let html = `
            <span class="modal-eyebrow">
                KARAGDAGANG MATERYAL
            </span>

            <h2>${material.title}</h2>
        `;

        if (material.subtitle) {
            html += `
                <p class="modal-text">
                    <strong>${material.subtitle}</strong>
                </p>
            `;
        }

        if (
            material.type === "truefalse" ||
            material.type === "identification"
        ) {
            if (material.instructions) {
                html += `
                    <div class="detail-box">
                        <p class="modal-text">
                            ${material.instructions}
                        </p>
                    </div>
                `;
            }

            html += `
                <div class="additional-material-list">
            `;

            material.questions.forEach(item => {
                html += `
                    <div class="additional-question">
                        <div class="additional-question-number">
                            ${item.number}.
                        </div>

                        <div class="additional-question-text">
                            ${item.question}
                        </div>
                    </div>
                `;
            });

            html += `</div>`;
        }

        else if (material.type === "reading") {
            html += `
                <div class="material-reading">
                    ${material.content}
                </div>
            `;

            if (
                Array.isArray(material.keywords) &&
                material.keywords.length
            ) {
                html += `
                    <div class="detail-box">
                        <h3>Mga Mahahalagang Salita</h3>

                        <div class="keyword-container">
                            ${material.keywords
                                .map(keyword => `
                                    <span class="keyword-tag">
                                        ${keyword}
                                    </span>
                                `)
                                .join("")}
                        </div>
                    </div>
                `;
            }
        }

        else if (material.type === "commandments") {
            html += `
                <div class="detail-box">
                    <p class="modal-text">
                        ${material.introduction}
                    </p>
                </div>

                <div style="margin-top:25px;">
            `;

            material.commandments.forEach(item => {
                html += `
                    <div class="commandment-card">
                        <div class="commandment-number">
                            ${item.number}
                        </div>

                        <div class="commandment-text">
                            ${item.text}
                        </div>

                        <div class="commandment-keywords">
                            ${item.keywords
                                .map(keyword => `
                                    <span class="commandment-keyword">
                                        ${keyword}
                                    </span>
                                `)
                                .join("")}
                        </div>
                    </div>
                `;
            });

            html += `</div>`;
        }

        body.innerHTML = html;
        modal.classList.add("show");
        document.body.style.overflow = "hidden";
    }

    /* =========================================================
       ADDITIONAL MATERIAL BUTTON
    ========================================================= */

    function addAdditionalMaterialButton(weekNumber, container) {
        if (!container) {
            return;
        }

        const material = additionalMaterials[weekNumber];
        const lesson = lessons[weekNumber];

        const hasAdditionalMaterial = Boolean(material);

        const hasProcessing =
            Boolean(
                lesson &&
                Array.isArray(lesson.processingQuestions) &&
                lesson.processingQuestions.length
            );

        if (!hasAdditionalMaterial && !hasProcessing) {
            return;
        }

        const oldButton =
            container.querySelector(".additional-material-button");

        if (oldButton) {
            oldButton.remove();
        }

        const button = document.createElement("button");

        button.type = "button";
        button.className = "additional-material-button";

        button.textContent =
            hasProcessing
                ? "Pagproseso ng Pag-unawa"
                : material.title;

        button.addEventListener("click", event => {
            event.preventDefault();
            event.stopPropagation();

            if (hasProcessing) {
                openInfoModal("processing", lesson);
            } else {
                openAdditionalMaterial(weekNumber);
            }
        });

        container.appendChild(button);
    }

    /* =========================================================
       DISPLAY SECTION
    ========================================================= */

    function showSection(sectionName) {
        sections.forEach(section => {
            section.classList.remove("active");
        });

        navButtons.forEach(button => {
            button.classList.remove("active");
        });

        let target = null;

        if (sectionName === "home") {
            target = document.getElementById("homeContent");
        }

        else if (sectionName === "lesson") {
            target = document.getElementById("lessonContent");
        }

        else {
            target = document.getElementById("headerSection");
        }

        if (target) {
            target.classList.add("active");
        }

        document
            .querySelectorAll(`[data-section="${sectionName}"]`)
            .forEach(button => {
                button.classList.add("active");
            });

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }

    /* =========================================================
       DISPLAY LESSON
    ========================================================= */

    function displayLesson(weekNumber, button = null) {
        const lesson = lessons[weekNumber];

        if (!lesson || !weekContent) {
            console.warn("Lesson not found:", weekNumber);
            return;
        }

        weekButtons.forEach(item => {
            item.classList.remove("active");
        });

        if (button) {
            button.classList.add("active");
        }

        weekContent.style.opacity = "0";
        weekContent.style.transform = "translateY(10px)";

        window.setTimeout(() => {
            weekContent.innerHTML = `
                <h3 class="week-title">
                    ${lesson.title}
                </h3>

                <p class="week-description">
                    ${lesson.description}
                </p>

                <div class="lesson-grid">

                    <article
                        class="feature-card clickable-lesson-card"
                        data-info="author"
                        tabindex="0"
                        role="button"
                        aria-label="Tingnan ang may-akda"
                    >
                        <strong>May-akda</strong>
                        <span class="card-detail">
                            ${lesson.author}
                        </span>
                    </article>

                    <article
                        class="feature-card clickable-lesson-card"
                        data-info="theme"
                        tabindex="0"
                        role="button"
                        aria-label="Tingnan ang tema"
                    >
                        <strong>Tema</strong>
                        <span class="card-detail">
                            ${lesson.theme}
                        </span>
                    </article>

                    <article
                        class="feature-card clickable-lesson-card"
                        data-info="objective"
                        tabindex="0"
                        role="button"
                        aria-label="Tingnan ang layunin"
                    >
                        <strong>Layunin</strong>
                        <span class="card-detail">
                            ${lesson.objective}
                        </span>
                    </article>

                    <article
                        class="feature-card clickable-lesson-card"
                        data-info="material"
                        tabindex="0"
                        role="button"
                        aria-label="Tingnan ang multimodal material"
                    >
                        <strong>Multimodal Material</strong>
                        <span class="card-detail">
                            ${lesson.material}
                        </span>
                    </article>

                </div>
            `;

            addAdditionalMaterialButton(
                weekNumber,
                weekContent
            );

            const cards =
                weekContent.querySelectorAll(
                    ".clickable-lesson-card"
                );

            cards.forEach(card => {
                card.addEventListener("click", event => {
                    event.preventDefault();

                    const type = card.dataset.info;
                    openInfoModal(type, lesson);
                });

                card.addEventListener("keydown", event => {
                    if (
                        event.key === "Enter" ||
                        event.key === " "
                    ) {
                        event.preventDefault();

                        const type = card.dataset.info;
                        openInfoModal(type, lesson);
                    }
                });
            });

            weekContent.style.opacity = "1";
            weekContent.style.transform = "translateY(0)";
        }, 180);
    }

    /* =========================================================
       SECTION BUTTONS
    ========================================================= */

    sectionButtons.forEach(button => {
        button.addEventListener("click", event => {
            event.preventDefault();

            const section = button.dataset.section;

            if (section) {
                showSection(section);
            }
        });
    });

    /* =========================================================
       WEEK BUTTONS
    ========================================================= */

    weekButtons.forEach(button => {
        button.addEventListener("click", event => {
            event.preventDefault();

            const week = Number(button.dataset.week);

            if (!Number.isNaN(week)) {
                displayLesson(week, button);
            }
        });
    });

    /* =========================================================
       LOGO
    ========================================================= */

    const logoToggle = document.getElementById("logoToggle");

    if (logoToggle) {
        logoToggle.addEventListener("click", event => {
            event.preventDefault();

            sections.forEach(section => {
                section.classList.remove("active");
            });

            const headerSection =
                document.getElementById("headerSection");

            if (headerSection) {
                headerSection.classList.add("active");
            }

            navButtons.forEach(button => {
                button.classList.remove("active");
            });

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        });
    }

    /* =========================================================
       RESEARCHERS
    ========================================================= */

    const researcherButton =
        document.getElementById("researcherButton");

    const backResearchers =
        document.getElementById("backResearchers");

    if (researcherButton) {
        researcherButton.addEventListener("click", event => {
            event.preventDefault();

            sections.forEach(section => {
                section.classList.remove("active");
            });

            navButtons.forEach(button => {
                button.classList.remove("active");
            });

            if (researchersPage) {
                researchersPage.classList.add("active");
            }

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        });
    }

    if (backResearchers) {
        backResearchers.addEventListener("click", event => {
            event.preventDefault();

            if (researchersPage) {
                researchersPage.classList.remove("active");
            }

            const headerSection =
                document.getElementById("headerSection");

            if (headerSection) {
                headerSection.classList.add("active");
            }

            const homeButton =
                document.querySelector(
                    '.nav-btn[data-section="home"]'
                );

            if (homeButton) {
                homeButton.classList.add("active");
            }

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        });
    }

    /* =========================================================
       CONTACT
    ========================================================= */

    const contactButton =
        document.getElementById("contactButton");

    const closeContact =
        document.getElementById("closeContact");

    function closeContactModal() {
        if (contactModal) {
            contactModal.classList.remove("show");
        }

        restoreBodyScrollIfNoModal();
    }

    if (contactButton) {
        contactButton.addEventListener("click", event => {
            event.preventDefault();

            if (contactModal) {
                contactModal.classList.add("show");
                document.body.style.overflow = "hidden";
            }
        });
    }

    if (closeContact) {
        closeContact.addEventListener(
            "click",
            closeContactModal
        );
    }

    if (contactModal) {
        contactModal.addEventListener("click", event => {
            if (event.target === contactModal) {
                closeContactModal();
            }
        });
    }

    /* =========================================================
       ESCAPE KEY
    ========================================================= */

    document.addEventListener("keydown", event => {
        if (event.key !== "Escape") {
            return;
        }

        closeContactModal();
        closeInfoModal();
        closeAdditionalMaterial();

        const zoom =
            document.getElementById("imageZoomModal");

        if (zoom) {
            zoom.classList.remove("show");
        }

        if (
            researchersPage &&
            researchersPage.classList.contains("active")
        ) {
            if (backResearchers) {
                backResearchers.click();
            }
        }

        restoreBodyScrollIfNoModal();
    });

    /* =========================================================
       HIDE NAVBAR ON SCROLL
    ========================================================= */

    let lastScroll = 0;

    if (navbar) {
        window.addEventListener("scroll", () => {
            const currentScroll = window.scrollY;

            if (
                currentScroll > lastScroll &&
                currentScroll > 140
            ) {
                navbar.classList.add("hidden");
            } else {
                navbar.classList.remove("hidden");
            }

            lastScroll = currentScroll;
        }, { passive: true });
    }

    /* =========================================================
       CHATBOT
    ========================================================= */

    const chatbot = document.getElementById("chatbot");
    const chatbotToggle = document.getElementById("chatbotToggle");
    const chatbotClose = document.getElementById("chatbotClose");
    const chatbotInput = document.getElementById("chatbotInput");
    const chatbotSend = document.getElementById("chatbotSend");
    const chatbotMessages =
        document.getElementById("chatbotMessages");

    const CHAT_API_URL =
        "https://hibla-ai-server.onrender.com/api/chat";

    if (chatbotToggle && chatbot) {
        chatbotToggle.addEventListener("click", event => {
            event.preventDefault();

            chatbot.classList.add("open");

            if (chatbotInput) {
                window.setTimeout(() => {
                    chatbotInput.focus();
                }, 100);
            }
        });
    }

    if (chatbotClose && chatbot) {
        chatbotClose.addEventListener("click", event => {
            event.preventDefault();
            chatbot.classList.remove("open");
        });
    }

    function addChatMessage(text, type) {
        if (!chatbotMessages) {
            return null;
        }

        const message = document.createElement("div");
        message.className = `chatbot-message ${type}`;

        if (type === "bot") {
            message.innerHTML = text;
        } else {
            message.textContent = text;
        }

        chatbotMessages.appendChild(message);
        chatbotMessages.scrollTop =
            chatbotMessages.scrollHeight;

        return message;
    }

    async function sendMessage() {
        if (!chatbotInput || !chatbotMessages) {
            return;
        }

        const text = chatbotInput.value.trim();

        if (!text || chatbotInput.disabled) {
            return;
        }

        addChatMessage(text, "user");

        chatbotInput.value = "";
        chatbotInput.disabled = true;

        if (chatbotSend) {
            chatbotSend.disabled = true;
        }

        const botMessage =
            addChatMessage("Nag-iisip...", "bot");

        try {
            const response = await fetch(
                CHAT_API_URL,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        message: text
                    })
                }
            );

            if (!response.ok) {
                let errorMessage =
                    "Hindi available ang Hibla AI server.";

                try {
                    const errorData =
                        await response.json();

                    if (errorData?.error) {
                        errorMessage = errorData.error;
                    }
                } catch (error) {
                    console.error(
                        "Could not read server error:",
                        error
                    );
                }

                throw new Error(
                    `${errorMessage} (HTTP ${response.status})`
                );
            }

            const data = await response.json();

            if (
                !data ||
                data.success !== true
            ) {
                throw new Error(
                    data?.error ||
                    "Walang valid na sagot mula sa Hibla AI server."
                );
            }

            if (botMessage) {
                botMessage.innerHTML =
                    data.reply ||
                    "Walang natanggap na sagot mula sa Hibla AI.";
            }
        }

        catch (error) {
            console.error(
                "HIBLA AI CHATBOT ERROR:",
                error
            );

            if (botMessage) {
                botMessage.innerHTML = `
                    <strong>
                        Hindi makakonekta sa Hibla AI. 😔
                    </strong>
                    <br><br>
                    Pakisubukan muli pagkatapos ng ilang segundo.
                `;
            }
        }

        finally {
            chatbotInput.disabled = false;

            if (chatbotSend) {
                chatbotSend.disabled = false;
            }

            chatbotInput.focus();

            chatbotMessages.scrollTop =
                chatbotMessages.scrollHeight;
        }
    }

    if (chatbotSend) {
        chatbotSend.addEventListener(
            "click",
            event => {
                event.preventDefault();
                sendMessage();
            }
        );
    }

    if (chatbotInput) {
        chatbotInput.addEventListener("keydown", event => {
            if (
                event.key === "Enter" &&
                !event.shiftKey
            ) {
                event.preventDefault();

                if (!chatbotInput.disabled) {
                    sendMessage();
                }
            }
        });
    }

    /* =========================================================
       INITIALIZATION
    ========================================================= */

    injectStyles();
    createLessonInfoModal();
    createAdditionalMaterialModal();

    const firstWeekButton =
        document.querySelector(
            '.week-btn[data-week="1"]'
        );

    displayLesson(
        1,
        firstWeekButton
    );

    console.log(
        "Hibla-Panitikan script loaded successfully."
    );
});
