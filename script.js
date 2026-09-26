document.addEventListener("DOMContentLoaded", () => {
    "use strict";

    /* =========================================================
       DOM ELEMENTS
    ========================================================= */

    const navbar = document.getElementById("navbar");
    const weekContent = document.getElementById("weekContent");
    const researchersPage = document.getElementById("researchersPage");
    const contactModal = document.getElementById("contactModal");

    /* =========================================================
       LESSON DATA
    ========================================================= */

    const lessons = {

        /* =====================================================
           WEEK 1
        ===================================================== */

        1: {
            title: 'Week 1: “Sa Dakong Silangan”',

            description: `
            <div style="text-align: justify;">
                Ang <strong>“Sa Dakong Silangan”</strong> ay isang tulang
                nagpapahayag ng pag-asa, kalayaan, at muling pagbangon
                ng bayan. Ang pagsikat ng araw sa Silangan ay nagsisilbing
                simbolo ng bagong simula at pag-asa para sa mga Pilipino.
                Ipinakikita rin ng akda ang pagmamahal sa bayan at
                paniniwalang darating ang panahon ng kalayaan at
                mas magandang kinabukasan. Sa pamamagitan ng mga
                simbolismo at masining na paglalarawan, ipinahihiwatig
                ng tula ang matibay na pananalig sa kakayahan ng bayan
                na bumangon mula sa mga pagsubok at patuloy na mangarap
                para sa isang malaya at maunlad na kinabukasan.
            </div>
            `,

            author: "Jose Corazon de Jesus (Huseng Batute)",

            authorImage:
                "images/authors/jose-corazon-de-jesus.jpeg",

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

            theme:
                "Pag-asa, kalayaan, at pagbangon.",

            themeDescription: `
                Ang tema ng “Sa Dakong Silangan” ay nakatuon sa pag-asa,
                kalayaan, at muling pagbangon ng bayan. Ginamit sa akda
                ang pagsikat ng araw sa Silangan bilang simbolo ng bagong
                simula at pag-asa para sa Pilipinas. Ipinapakita rin nito
                ang hangarin ng mga Pilipino na makalaya mula sa
                pananakop at magkaroon ng mas magandang kinabukasan.
            `,

            objective:
                "Maunawaan ang pangunahing mensahe at simbolismo ng akda.",

            objectiveDescription: `
                Layunin ng aralin na matulungan ang mga mag-aaral na
                maunawaan ang pangunahing kaisipan, simbolismo, at
                mensaheng makabayan na nakapaloob sa “Sa Dakong
                Silangan.” Sa pamamagitan ng pagsusuri sa mga simbolo
                at mahahalagang pahayag sa tula, mauunawaan nila kung
                paano ipinakita ng may-akda ang pag-asa, kalayaan,
                pagmamahal sa bayan, at pagnanais para sa isang
                mas magandang kinabukasan.
            `,

            material: "Audio-Visual/Interactive Presentation",
            materialType: "video",

            youtube:
                "https://www.youtube.com/watch?v=FdZsEKgfN_c",

            materialImage: ""
        },

        /* =====================================================
           WEEK 2
        ===================================================== */

        2: {
            title: 'Week 2: “Kahapon, Ngayon at Bukas” (Unang Tagpo)',

            description: `
            <p style="text-align: justify; line-height: 1.7;">
                Ang <strong>“Kahapon, Ngayon at Bukas”</strong> ay isang
                dulang nagpapakita ng kalagayan ng Pilipinas sa iba't
                ibang panahon. Inilalarawan nito ang mga karanasan ng
                mga Pilipino sa ilalim ng pananakop at ang kanilang
                patuloy na pakikibaka para sa kalayaan. Sa pamamagitan
                ng mga tauhan at pangyayari, binibigyang-diin ng akda
                ang pagmamahal sa bayan, paglaban sa pang-aapi, at
                pagnanais na makamit ang isang malaya at maunlad na
                kinabukasan. Ipinakikita rin nito ang kahalagahan ng
                pagkakaisa at pagiging makabayan sa harap ng mga
                pagsubok na kinakaharap ng bansa.
            </p>
            `,

            author: "Aurelio V. Tolentino",

            authorImage:
                "images/authors/aurelio-tolentino.webp",

            biography: `
                Si <strong>Aurelio V. Tolentino</strong> ay isang
                Pilipinong manunulat, mandudula, at makabayang
                personalidad. Kilala siya sa kaniyang mga akdang
                naglalarawan ng pakikibaka ng mga Pilipino para sa
                kalayaan.

                <br><br>

                Isa sa kaniyang mga tanyag na akda ang
                <strong>“Kahapon, Ngayon at Bukas”</strong>, isang
                dulang may malakas na mensaheng makabayan at panlipunan.
            `,

            theme:
                "Kolonyalismo, pakikibaka, at kalayaan.",

            themeDescription: `
                Ang tema ng “Kahapon, Ngayon at Bukas” ay nakatuon sa
                kolonyalismo, pakikibaka, at kalayaan. Ipinakikita sa
                akda ang mga pagbabagong pinagdaanan ng Pilipinas at
                ang epekto ng pananakop sa buhay ng mga Pilipino.
                Binibigyang-diin din nito ang patuloy na pagnanais
                ng bayan na makamit ang tunay na kalayaan at
                sariling pagpapasya.
            `,

            objective:
                "Maunawaan ang mahahalagang elemento at kaisipan ng akda.",

            objectiveDescription: `
                Layunin ng aralin na matukoy at maipaliwanag ng mga
                mag-aaral ang mahahalagang elemento at kaisipang
                nakapaloob sa “Kahapon, Ngayon at Bukas.” Mauunawaan
                nila kung paano inilalarawan ng akda ang epekto ng
                kolonyalismo sa bayan at kung paano ipinakita ang
                pagnanais ng mga Pilipino na makamit ang kalayaan.
                Susuriin din nila ang mga tauhan, pangyayari, simbolo,
                at mensaheng nagpapakita ng pagmamahal sa bayan,
                pakikibaka, at pagnanais para sa isang malayang
                lipunan.
            `,

            material: "Audio-Visual/Interactive Presentation",
            materialType: "video",

            youtube:
                "https://www.youtube.com/watch?v=Z0ol8rwhMzg",

            materialImage: ""
        },

        /* =====================================================
           WEEK 3
        ===================================================== */

        3: {
            title: 'Week 3: “Filipino Time”',

            description: `
            <p style="text-align: justify; line-height: 1.7;">
                Ang <strong>“Filipino Time”</strong> ay isang akdang
                tumatalakay sa kaugalian ng pagiging huli at sa
                kahalagahan ng disiplina sa oras. Ipinakikita nito
                kung paano nagiging bahagi ng pang-araw-araw na
                pamumuhay ang hindi pagsunod sa itinakdang oras at                 
                kung paano ito maaaring makaapekto sa sarili at sa
                ibang tao. Binibigyang-diin ng akda ang pagpapahalaga
                sa oras, pagiging responsable, at pagkakaroon ng
                disiplina bilang mahalagang bahagi ng maayos na
                pakikitungo sa kapwa at sa lipunan.
            </p>
            `,

            author: "Felipe Padilla de Leon",

            authorImage:
                "images/authors/felipe-padilla-de-leon.webp",

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

            theme:
                "Ugali, disiplina, at pananagutan.",

            themeDescription: `
                Tinutukoy ng tema ng “Filipino Time” ang kaugnayan ng
                pagiging huli sa disiplina at pananagutan. Ipinakikita
                nito na ang pagpapahalaga sa oras ay mahalaga hindi
                lamang para sa sarili kundi pati na rin sa ibang tao.
                Hinihikayat ng akda ang pagbabago ng isang nakasanayang
                gawain tungo sa pagiging mas responsable.
            `,

            objective:
                "Maunawaan ang konsepto ng “Filipino Time” at ang epekto nito.",

            objectiveDescription: `
                Layunin ng aralin na maunawaan ng mga mag-aaral ang
                konsepto ng “Filipino Time” at matukoy ang mga dahilan
                kung bakit nagkakaroon ng ganitong kaugalian. Susuriin
                nila ang mga negatibong epekto ng pagiging palaging
                huli at mauunawaan ang kahalagahan ng pagiging
                responsable, disiplinado, at maingat sa paggamit ng
                oras. Sa huli, maiuugnay nila ang aralin sa kanilang
                sariling karanasan at pang-araw-araw na gawain.
            `,

            material: "Digital Poster",
            materialType: "text",

            youtube: "",
            materialImage: "images/materials/filipinotime.png"
        },

        /* =====================================================
           WEEK 4
        ===================================================== */

        4: {
            title: 'Week 4: “Ang Tunay na Sampung Utos”',

            description: `
            <p style="text-align: justify; line-height: 1.7;">
                Ang <strong>“Ang Tunay na Sampung Utos”</strong> ay
                naglalaman ng mga prinsipyo at gabay para sa maayos
                at makatarungang pamumuhay. Ipinakikita nito ang mga
                pagpapahalaga at tungkuling dapat isabuhay ng bawat
                tao upang magkaroon ng maayos na ugnayan sa kapwa at
                sa lipunan. Binibigyang-diin ng akda ang pagiging
                makatarungan, matapat, responsable, at makatao sa
                pakikitungo sa iba. Sa pamamagitan ng mga kaisipang
                nakapaloob dito, hinihikayat ang mambabasa na maging
                mabuting mamamayan at gumawa ng mga pasyang
                nakatutulong sa sarili, kapwa, at bayan.
            </p>
            `,

            author:
                "Apolinario Mabini",

            authorImage:
                "images/authors/apolinario-mabini.jpg",

            biography: `
                Si <strong>Apolinario Mabini</strong> ay isang
                Pilipinong rebolusyonaryo, manunulat, at tagapayo sa
                pamahalaan noong panahon ng Himagsikan at Unang
                Republika ng Pilipinas.

                <br><br>

                Kilala siya sa kaniyang mga akdang naglalaman ng
                mga kaisipan tungkol sa pamamahala, moralidad,
                responsibilidad, at pagmamahal sa bayan.
            `,

            theme:
                "Gabay, disiplina, at pagmamahal sa bayan.",

            themeDescription: `
                Ang tema ng “Ang Tunay na Sampung Utos” ay nakatuon
                sa wastong asal, disiplina, pagmamahal sa bayan,
                pananagutan, at paglilingkod sa kapwa. Ipinakikita
                nito ang mga prinsipyong maaaring maging gabay ng
                isang mamamayan sa paggawa ng tama at sa pagtulong
                sa pagpapaunlad ng bayan.
            `,

            objective:
                "Maunawaan ang mga prinsipyong nakapaloob sa akda.",

            objectiveDescription: `
                Layunin ng aralin na maunawaan ng mga mag-aaral ang
                mahahalagang prinsipyong nakapaloob sa “Ang Tunay na
                Sampung Utos” ni Apolinario Mabini. Matutukoy nila
                ang mga pagpapahalagang may kaugnayan sa pagmamahal
                sa Diyos, bayan, kapwa, kalayaan, kasarinlan,
                pananagutan, at wastong pamamahala. Maiuugnay rin
                nila ang mga aral ng akda sa kanilang sariling
                tungkulin bilang kabataan at mamamayan.
            `,

            material: "AI-Generated Digital Poster",
            materialType: "image",

            youtube: "",

            materialImage:
                "images/materials/angtunaynasampungutos.png"
        },

        /* =====================================================
           WEEK 5
        ===================================================== */

        5: {
            title: 'Week 5: “Wikang Pambansa”',

            description: `
            <p style="text-align: justify; line-height: 1.7;">
                Ang <strong>“Wikang Pambansa”</strong> ay isang
                talumpati ni <strong>Manuel L. Quezon</strong> tungkol
                sa kahalagahan ng sariling wika. Binibigyang-diin nito
                ang papel ng wikang pambansa sa pagkakaisa, pagkakakilanlan,
                at pagkakaroon ng matibay na ugnayan ng mga mamamayan.
                Ipinakikita rin ng akda na ang pagkakaroon ng sariling
                wika ay mahalaga sa pagpapaunlad ng kultura at
                pagpapatatag ng damdaming makabayan. Sa pamamagitan
                ng talumpati, hinihikayat ang mga Pilipino na pahalagahan,
                gamitin, at pagyamanin ang wikang nagsisilbing bahagi
                ng kanilang pagkakakilanlan bilang isang bansa.
            </p>
            `,

            author: "Manuel L. Quezon",

            authorImage:
                "images/authors/manuel-quezon.png",

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

            theme:
                "Wikang pambansa, kamalayan, at pagkakakilanlan.",

            themeDescription: `
                Ang tema ng “Wikang Pambansa” ay nakasentro sa
                kahalagahan ng sariling wika sa pagbuo ng pambansang
                kamalayan, pagkakaisa, at pagkakakilanlan. Ipinakikita
                sa akda na ang wikang ginagamit ng mga Pilipino ay
                maaaring magsilbing tulay upang higit na magkaunawaan
                at magkaroon ng mas matibay na pagkakaisa ang bansa.
            `,

            objective:
                "Maunawaan ang kahalagahan ng wikang pambansa.",

            objectiveDescription: `
                Layunin ng aralin na maipaliliwanag ng mga mag-aaral
                ang kahalagahan ng pagkakaroon ng wikang pambansa sa
                pagbuo ng pambansang kamalayan, pagkakaisa, at
                pagkakakilanlan. Mauunawaan nila kung bakit
                itinaguyod ni Manuel L. Quezon ang pagkakaroon ng
                wikang maaaring magsilbing tulay sa iba't ibang
                pangkat ng mga Pilipino. Maiuugnay rin nila ang
                kahalagahan ng wika sa kanilang sariling kultura,
                pagkakakilanlan, at pakikipagkapwa.
            `,

            material:
                "Audio-Visual/Interactive Presentation",

            materialType: "video",

            youtube:
                "https://www.youtube.com/watch?v=Wgq6voqo1Kw",

            materialImage: ""
        },

        /* =====================================================
           WEEK 6
        ===================================================== */

        6: {
            title: 'Week 6: “Mga Ibong Mandaragit”',

            description: `
            <p style="text-align: justify; line-height: 1.7;">
                Ang <strong>“Mga Ibong Mandaragit”</strong> ay isang
                nobelang tumatalakay sa katiwalian, pakikibaka,
                katarungan, at mga suliraning panlipunan. Inilalarawan
                nito ang mga hamong kinakaharap ng lipunan at ang
                patuloy na pakikibaka ng mga mamamayan laban sa
                pang-aapi at kawalang-katarungan. Ipinakikita rin ng
                akda ang epekto ng katiwalian at hindi pagkakapantay-
                pantay sa buhay ng mga tao. Sa pamamagitan ng mga
                tauhan at pangyayari, hinihikayat ang mambabasa na
                suriin ang kalagayan ng lipunan at pag-isipan ang
                kahalagahan ng pagkilos tungo sa katarungan, pagbabago,
                at isang mas makatarungang lipunan.
            </p>
            `,

            author: "Amado V. Hernandez",

            authorImage:
                "images/authors/amado-hernandez.jpg",

            biography: `
                Si <strong>Amado V. Hernandez</strong> ay isang
                makata, manunulat, mamamahayag, at aktibista.
                Nakilala siya sa kaniyang mga akdang tumatalakay sa
                buhay ng karaniwang Pilipino, paggawa,
                katarungang panlipunan, at pakikibaka.

                <br><br>

                Ang kaniyang nobelang
                <strong>“Mga Ibong Mandaragit”</strong> ay isang
                mahalagang akdang panlipunan na tumatalakay sa
                mga suliranin at realidad ng lipunang Pilipino.
            `,

            theme:
                "Katiwalian, pakikibaka, at katarungan.",

            themeDescription: `
                Ang tema ng “Mga Ibong Mandaragit” ay nakatuon sa
                katiwalian, kasakiman, pakikibaka, at paghahanap ng
                katarungan. Ipinakikita ng nobela ang mga suliraning
                panlipunan at ang epekto ng maling paggamit ng
                kapangyarihan. Binibigyang-diin din nito ang
                kahalagahan ng paninindigan at pagkilos para sa
                makatarungan at maayos na lipunan.
            `,

            objective:
                "Maunawaan ang mga suliraning panlipunan sa nobela.",

            objectiveDescription: `
                Layunin ng aralin na maunawaan ng mga mag-aaral ang
                mahahalagang elemento at suliraning panlipunan na
                inilalarawan sa “Mga Ibong Mandaragit.” Susuriin nila
                kung paano ipinakita sa nobela ang katiwalian,
                kasakiman, hindi pagkakapantay-pantay, at pakikibaka
                para sa katarungan. Hinihikayat din silang maiugnay
                ang mga isyung panlipunan sa kahalagahan ng
                paninindigan, pananagutan, at paggawa ng tama
                bilang bahagi ng lipunan.
            `,

            material:
                "Audio-Visual/Interactive Presentation",

            materialType: "video",

            youtube:
                "https://www.youtube.com/watch?v=JPG8naYuQ3Y",

            materialImage: ""
        }
    };

    /* =========================================================
       ADDITIONAL MATERIALS (TRIVIA & READING MATERIALS ONLY)
    ========================================================= */

    const additionalMaterials = {

        1: {
            title: "Alam Mo Ba? (Trivia)",
            type: "reading",

            content: `
                <p style="text-align: justify;">
                    Ang <strong>“Sa Dakong Silangan”</strong> ay isang tulang pangkasaysayan na isinulat ni Jose Corazon de Jesus noong <strong>1928</strong>. Ginamitan ito ng alegolya upang ilarawan ang kasaysayan ng Pilipinas sa ilalim ng pananakop ng Espanya at Amerika.
                </p>

                <p style="text-align: justify;">
                    Sa tulang ito, ang karakter ni <strong>Haring Samuel</strong> ay simbolo ng Pamahalaang Amerikano, habang si <strong>Prinsipe Dolar</strong> naman ay kumakatawan sa impluwensya ng salapi at kapitalismo ng dayuhan.
                </p>

                <p style="text-align: justify;">
                    Si <strong>Jose Corazon de Jesus</strong> (Huseng Batute) ay binansagang "Hari ng Balagtasan." Nagsulat siya ng libo-libong tula sa kaniyang kolum na <em>Buhay Maynila</em> sa pahayagang Taliba.
                </p>
            `,

            keywords: [
                "Jose Corazon de Jesus",
                "Huseng Batute",
                "1928",
                "Alegorya",
                "Haring Samuel",
                "Prinsipe Dolar",
                "Hari ng Balagtasan"
            ]
        },

        2: {
            title: "Alamin Natin!",
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
                    pag-unlad ng dula o teatro sa bansa.
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
                "Teatro"
            ]
        },

        3: {
            title: "Karagdagang Babasahin: Ang Oras sa Kulturang Pilipino",
            type: "reading",

            content: `
                <p style="text-align: justify;">
                    Ang konseptong <strong>“Filipino Time”</strong> ay nagsimula noong panahon ng pananakop ng mga Kastila. Dito, ang mga matataas na opisyal at mga prayle ay sadyang huling dumarating sa mga pagtitipon bilang simbolo ng kanilang kapangyarihan at mataas na antas sa lipunan.
                </p>

                <p style="text-align: justify;">
                    Sa paglipas ng panahon, ang ganitong kaugalian ay pilit na binabago sa makabagong lipunang Pilipino sa pamamagitan ng kampanyang <strong>“Juan Time”</strong> na isinusulong ng DOST upang hikayatin ang bawat Pilipino na maging maagap at igalang ang oras ng iba.
                </p>
            `,

            keywords: [
                "Filipino Time",
                "Disiplina",
                "Kulturang Pilipino",
                "Juan Time",
                "DOST",
                "Pagpapahalaga sa Oras"
            ]
        },

        4: {
            title: "Tandaan Mo!",
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
                    keywords: [
                        "Diyos",
                        "Puri",
                        "Katuwiran",
                        "Kasipagan"
                    ]
                },
                {
                    number: "Ikalawa",
                    text: `
                        Sambahin mo ang Dios sa kaparaang lalong
                        minamarapat ng iyong bait at kalooban o
                        konsyensya.
                    `,
                    keywords: [
                        "Pagsamba sa Diyos",
                        "Bait",
                        "Kalooban",
                        "Konsensya"
                    ]
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
                    keywords: [
                        "Pag-aaral",
                        "Kaalaman",
                        "Kagalingan",
                        "Pagsisikap",
                        "Pagtulong"
                    ]
                },
                {
                    number: "Ikaapat",
                    text: `
                        Ibigin mo ang iyong Inang Bayan ikalawa sa
                        Dios at sa iyong puri at higit sa iyong sarili,
                        sapagkat siya ang nakaisa-isang Paraisong
                        pinaglagyan sa iyo ng Diyos sa buhay na ito.
                    `,
                    keywords: [
                        "Inang Bayan",
                        "Pagmamahal sa Bayan",
                        "Puri",
                        "Diyos"
                    ]
                },
                {
                    number: "Ikalima",
                    text: `
                        Pagpilitan mo ang kalayaan ng iyong bayan
                        bago ang iyong sarili, sapagkat kung malaya
                        siya at lalaya rin ikaw at ang iyong kamag-anakan.
                    `,
                    keywords: [
                        "Kalayaan",
                        "Bayan",
                        "Sarili",
                        "Kamag-anakan"
                    ]
                },
                {
                    number: "Ikaanim",
                    text: `
                        Pagpilitan mo ang kasarinlan ng iyong bayan,
                        sapagkat ikaw lamang ang tunay na makapagmamasakit
                        sa kanyang ikasusulong at ikatatanghal.
                    `,
                    keywords: [
                        "Kasarinlan",
                        "Bayan",
                        "Pagsulong",
                        "Pagtatanghal"
                    ]
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
                    keywords: [
                        "Halalan",
                        "Konsensya",
                        "Mamamayan",
                        "Tunay na Kapangyarihan"
                    ]
                },
                {
                    number: "Ikawalo",
                    text: `
                        Ihanap mong pilit ang iyong bayan ng Republica,
                        yaon baga ang lahat na namamahala ay palagay ng
                        bayan, at huwag isipin kailan man ang Monarkiya,
                        ang pagkakaroon baga ng hari.
                    `,
                    keywords: [
                        "Republika",
                        "Bayan",
                        "Pamamahala",
                        "Monarkiya"
                    ]
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
                    keywords: [
                        "Kapwa",
                        "Pagmamahal",
                        "Pagtutulungan",
                        "Diyos"
                    ]
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
                    keywords: [
                        "Kababayan",
                        "Pagkakaisa",
                        "Kapatid",
                        "Magkakasama",
                        "Iisang Kapalaran"
                    ]
                }
            ]
        },

        5: {
            title: "Trivia: Ang Ama ng Wikang Pambansa",
            type: "reading",

            content: `
                <p style="text-align: justify;">
                    Nang ihayag ni Pangulong <strong>Manuel L. Quezon</strong> ang Kautusang Tagapagpaganap Blg. 134 noong Disyembre 30, 1937, pormal na itinaguyod ang Wikang Batay sa Tagalog bilang batayan ng Wikang Pambansa.
                </p>

                <p style="text-align: justify;">
                    Mismong si Quezon ay nagmula sa Baler na nagsasalita ng Tagalog, ngunit nakita niya ang matinding pangangailangan na magkaroon ng iisang wika na magbubuklod sa mga isla ng Pilipinas upang magkaroon ng tunay na pambansang pagkakakilanlan.
                </p>
            `,

            keywords: [
                "Manuel L. Quezon",
                "Wikang Pambansa",
                "Disyembre 30, 1937",
                "Kautusang Tagapagpaganap Blg. 134",
                "Pagkakaisa"
            ]
        },

        6: {
            title: "Dagdag na Kaalaman: Ang Nobelang “Mga Ibong Mandaragit”",
            type: "reading",

            content: `
                <p style="text-align: justify;">
                    Isinulat ni <strong>Amado V. Hernandez</strong> ang malaking bahagi ng nobelang <em>Mga Ibong Mandaragit</em> habang siya ay nakakulong dahil sa kaniyang mga gawaing pampolitika at pakikipaglaban sa karapatan ng mga manggagawa.
                </p>

                <p style="text-align: justify;">
                    Ang nobelang ito ay itinuturing na kasunod o rehiyon ng mga kaisipan mula sa <em>Noli Me Tangere</em> at <em>El Filibusterismo</em> ni Jose Rizal. Ang pangunahing tauhan na si <strong>Mando Plaridel</strong> ay sumisimbolo sa bagong henerasyon ng Pilipinong naghahangad ng tunay na pagbabago sa lipunan.
                </p>

                <p style="text-align: justify;">
                    Pinarangalan si Amado V. Hernandez bilang <strong>Pambansang Alagad ng Sining sa Panitikan</strong> noong 1973 dahil sa kaniyang walang katulad na ambag sa panitikang nakikibaka.
                </p>
            `,

            keywords: [
                "Amado V. Hernandez",
                "Mga Ibong Mandaragit",
                "Mando Plaridel",
                "Pambansang Alagad ng Sining",
                "Jose Rizal",
                "Katarungang Panlipunan"
            ]
        }
    };

    /* =========================================================
       DYNAMIC CSS
    ========================================================= */

    function injectStyles() {

        if (document.getElementById("hibla-dynamic-styles")) {
            return;
        }

        const style = document.createElement("style");

        style.id = "hibla-dynamic-styles";

        style.textContent = `

            /* =================================================
               MODALS
            ================================================= */

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
                background: #ffffff;
                border-radius: 22px;
                padding: 40px;
                box-shadow: 0 25px 80px rgba(0, 0, 0, 0.35);
                animation: lessonModalOpen 0.25s ease;
            }

            @keyframes lessonModalOpen {
                from {
                    opacity: 0;
                    transform: translateY(20px) scale(0.97);
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
                color: #ffffff;
                font-size: 28px;
                line-height: 1;
                cursor: pointer;
                transition: 0.2s ease;
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
                text-transform: uppercase;
            }

            .lesson-modal h2 {
                margin: 0 50px 25px 0;
                color: #7d0b12;
                font-size: clamp(25px, 4vw, 38px);
                line-height: 1.2;
            }

            .modal-text {
                color: #444444;
                font-size: 16px;
                line-height: 1.8;
            }

            /* =================================================
               CLICKABLE CARDS
            ================================================= */

            .clickable-lesson-card {
                cursor: pointer;
                transition:
                    transform 0.2s ease,
                    box-shadow 0.2s ease,
                    border-color 0.2s ease;
            }

            .clickable-lesson-card:hover {
                transform: translateY(-5px);
                box-shadow:
                    0 15px 35px rgba(125, 11, 18, 0.15);
                border-color: #7d0b12;
            }

            .clickable-lesson-card:focus {
                outline: 3px solid rgba(125, 11, 18, 0.25);
                outline-offset: 3px;
            }

            .clickable-lesson-card .card-detail {
                display: block;
                margin-top: 8px;
                line-height: 1.5;
            }

            /* =================================================
               AUTHOR
            ================================================= */

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
                background: linear-gradient(
                    135deg,
                    #7d0b12,
                    #c7353d
                );
                display: flex;
                align-items: center;
                justify-content: center;
            }

            .author-photo img {
                width: 100%;
                height: 100%;
                object-fit: cover;
            }

            .author-photo.no-image::after {
                content: "Walang Larawan";
                color: #ffffff;
                font-size: 16px;
                font-weight: 800;
            }

            /* =================================================
               DETAIL BOX
            ================================================= */

            .detail-box {
                background: #faf7f7;
                border-left: 4px solid #7d0b12;
                padding: 20px;
                border-radius: 12px;
                margin-top: 15px;
            }

            /* =================================================
               MATERIAL
            ================================================= */

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
                width: 100%;
                max-height: 560px;
                object-fit: contain;
            }

            .material-placeholder,
            .youtube-placeholder {
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

            /* =================================================
               YOUTUBE
            ================================================= */

            .youtube-thumbnail-wrapper {
                position: relative;
                display: block;
                width: 100%;
                aspect-ratio: 16 / 9;
                border-radius: 16px;
                overflow: hidden;
                background: #111111;
                cursor: pointer;
                text-decoration: none;
            }

            .youtube-thumbnail-wrapper img {
                width: 100%;
                height: 100%;
                object-fit: cover;
                transition: 0.35s ease;
            }

            .youtube-thumbnail-wrapper:hover img {
                transform: scale(1.04);
                filter: brightness(0.72);
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
            }

            .youtube-play-button::after {
                content: "";
                width: 0;
                height: 0;
                border-top: 10px solid transparent;
                border-bottom: 10px solid transparent;
                border-left: 16px solid #ffffff;
                margin-left: 4px;
            }

            .youtube-label {
                position: absolute;
                left: 16px;
                bottom: 16px;
                padding: 7px 12px;
                border-radius: 8px;
                background: rgba(0, 0, 0, 0.75);
                color: #ffffff;
                font-size: 13px;
                font-weight: 700;
            }

            /* =================================================
               IMAGE ZOOM
            ================================================= */

            .zoom-modal {
                position: fixed;
                inset: 0;
                z-index: 100000;
                background: rgba(0, 0, 0, 0.92);
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

            /* =================================================
               ADDITIONAL MATERIAL
            ================================================= */

            .additional-material-button {
                width: 100%;
                margin-top: 25px;
                padding: 15px 20px;
                border: 2px solid #7d0b12;
                border-radius: 14px;
                background: #ffffff;
                color: #7d0b12;
                font-family: inherit;
                font-size: 15px;
                font-weight: 800;
                cursor: pointer;
                transition: 0.2s ease;
            }

            .additional-material-button:hover {
                background: #7d0b12;
                color: #ffffff;
                transform: translateY(-2px);
            }

            .material-reading {
                color: #444444;
                line-height: 1.85;
                font-size: 16px;
            }

            .material-reading p {
                margin-bottom: 18px;
            }

            .keyword-container,
            .commandment-keywords {
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
                color: #ffffff;
                font-size: 12px;
                font-weight: 700;
            }

            .commandment-card {
                background: #faf7f7;
                border: 1px solid rgba(125, 11, 18, 0.12);
                border-radius: 15px;
                padding: 20px;
                margin-bottom: 16px;
            }

            /* =================================================
               MOBILE
            ================================================= */

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
       MODAL CREATION
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
                    >
                        ×
                    </button>

                    <div id="lessonModalBody"></div>

                </div>

            </div>
        `;

        document.body.appendChild(modal);

        const closeButton =
            modal.querySelector("#lessonModalClose");

        const overlay =
            modal.querySelector(".lesson-modal-overlay");

        if (closeButton) {
            closeButton.addEventListener(
                "click",
                closeInfoModal
            );
        }

        if (overlay) {
            overlay.addEventListener(
                "click",
                event => {

                    if (event.target === overlay) {
                        closeInfoModal();
                    }

                }
            );
        }
    }

    function createAdditionalMaterialModal() {

        if (
            document.getElementById(
                "additionalMaterialModal"
            )
        ) {
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
                    >
                        ×
                    </button>

                    <div id="additionalMaterialBody"></div>

                </div>

            </div>
        `;

        document.body.appendChild(modal);

        const closeButton =
            modal.querySelector(
                "#additionalMaterialClose"
            );

        const overlay =
            modal.querySelector(".lesson-modal-overlay");

        if (closeButton) {
            closeButton.addEventListener(
                "click",
                closeAdditionalMaterial
            );
        }

        if (overlay) {
            overlay.addEventListener(
                "click",
                event => {

                    if (event.target === overlay) {
                        closeAdditionalMaterial();
                    }

                }
            );
        }
    }

    /* =========================================================
       CLOSE MODALS
    ========================================================= */

    function closeInfoModal() {

        const modal =
            document.getElementById(
                "lessonInfoModal"
            );

        if (modal) {
            modal.classList.remove("show");
        }

        restoreBodyScroll();
    }

    function closeAdditionalMaterial() {

        const modal =
            document.getElementById(
                "additionalMaterialModal"
            );

        if (modal) {
            modal.classList.remove("show");
        }

        restoreBodyScroll();
    }

    function closeImageZoom() {

        const zoom =
            document.getElementById(
                "imageZoomModal"
            );

        if (zoom) {
            zoom.classList.remove("show");
        }

        restoreBodyScroll();
    }

    function restoreBodyScroll() {

        const lessonModal =
            document.getElementById(
                "lessonInfoModal"
            );

        const additionalModal =
            document.getElementById(
                "additionalMaterialModal"
            );

        const zoomModal =
            document.getElementById(
                "imageZoomModal"
            );

        const lessonOpen =
            lessonModal &&
            lessonModal.classList.contains("show");

        const additionalOpen =
            additionalModal &&
            additionalModal.classList.contains("show");

        const zoomOpen =
            zoomModal &&
            zoomModal.classList.contains("show");

        const contactOpen =
            contactModal &&
            contactModal.classList.contains("show");

        if (
            !lessonOpen &&
            !additionalOpen &&
            !zoomOpen &&
            !contactOpen
        ) {
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

            if (match && match[1]) {
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

        let zoom =
            document.getElementById(
                "imageZoomModal"
            );

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

            zoom.addEventListener(
                "click",
                closeImageZoom
            );
        }

        const image =
            document.getElementById(
                "zoomedMaterialImage"
            );

        if (image) {
            image.src = imageSrc;
        }

        zoom.classList.add("show");

        document.body.style.overflow = "hidden";
    }

    /* =========================================================
       INFORMATION MODAL
    ========================================================= */

    function openInfoModal(type, lesson) {

        if (!lesson) {
            return;
        }

        createLessonInfoModal();

        const modal =
            document.getElementById(
                "lessonInfoModal"
            );

        const body =
            document.getElementById(
                "lessonModalBody"
            );

        if (!modal || !body) {
            return;
        }

        let html = "";

        if (type === "author") {

            const image =
                typeof lesson.authorImage === "string"
                    ? lesson.authorImage.trim()
                    : "";

            html = `
                <span class="modal-eyebrow">
                    MAY-AKDA
                </span>

                <h2>${lesson.author}</h2>

                <div class="author-profile">

                    <div
                        class="author-photo ${
                            image ? "" : "no-image"
                        }"
                        id="authorPhotoContainer"
                    >
                        ${
                            image
                                ? `
                                    <img
                                        id="authorPhotoImage"
                                        src="${image}"
                                        alt="${lesson.author}"
                                    >
                                `
                                : ""
                        }
                    </div>

                    <div>

                        <h3>Talambuhay</h3>

                        <div class="modal-text">
                            ${
                                lesson.biography ||
                                "Walang talambuhay na nailagay."
                            }
                        </div>

                    </div>

                </div>
            `;
        }

        else if (type === "theme") {

            html = `
                <span class="modal-eyebrow">
                    TEMA
                </span>

                <h2>
                    ${lesson.theme}
                </h2>

                <div class="detail-box">

                    <p
                        class="modal-text"
                        style="text-align: justify;"
                    >
                        ${
                            lesson.themeDescription ||
                            "Walang detalyadong tema na nailagay."
                        }
                    </p>

                </div>
            `;
        }

        else if (type === "objective") {

            html = `
                <span class="modal-eyebrow">
                    LAYUNIN NG ARALIN
                </span>

                <h2>
                    Layunin ng Aralin
                </h2>

                <div class="detail-box">

                    <p
                        class="modal-text"
                        style="text-align: justify;"
                    >
                        ${
                            lesson.objectiveDescription ||
                            lesson.objective ||
                            "Walang layunin na nailagay."
                        }
                    </p>

                </div>
            `;
        }

        else if (type === "material") {

            let preview = "";

            if (
                lesson.materialType === "video"
            ) {

                const videoId =
                    getYouTubeVideoId(
                        lesson.youtube
                    );

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
                            aria-label="Panoorin sa YouTube"
                        >

                            <img
                                src="${thumbnail}"
                                alt="${lesson.material} YouTube preview"
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

                } else {

                    preview = `
                        <div class="youtube-placeholder">

                            <strong>
                                YouTube Preview
                            </strong>

                            <p>
                                Wala pang valid na YouTube
                                video para sa materyal na ito.
                            </p>

                        </div>
                    `;
                }
            }

            else if (
                lesson.materialImage &&
                String(
                    lesson.materialImage
                ).trim() !== ""
            ) {

                const imageSrc =
                    String(
                        lesson.materialImage
                    ).trim();

                preview = `
                    <div
                        class="material-image-wrapper"
                        data-zoom-image="${imageSrc}"
                    >

                        <img
                            src="${imageSrc}"
                            alt="${
                                lesson.material ||
                                "Multimodal material"
                            }"
                        >

                    </div>
                `;

            }

            else {

                preview = `
                    <div class="material-placeholder">

                        <strong>
                            ${
                                lesson.material ||
                                "Multimodal Material"
                            }
                        </strong>

                        <span>
                            Dito ilalagay ang larawan o
                            iba pang multimodal material.
                        </span>

                    </div>
                `;
            }

            html = `
                <span class="modal-eyebrow">
                    MULTIMODAL MATERIAL
                </span>

                <h2>
                    ${
                        lesson.material ||
                        "Multimodal Material"
                    }
                </h2>

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

        const authorImage =
            body.querySelector(
                "#authorPhotoImage"
            );

        const authorContainer =
            body.querySelector(
                "#authorPhotoContainer"
            );

        if (
            authorImage &&
            authorContainer
        ) {

            authorImage.addEventListener(
                "error",
                function () {

                    this.remove();

                    authorContainer.classList.add(
                        "no-image"
                    );
                }
            );
        }

        const thumbnail =
            body.querySelector(
                ".youtube-thumbnail-wrapper img"
            );

        if (thumbnail) {

            thumbnail.addEventListener(
                "error",
                function () {

                    const wrapper =
                        this.closest(
                            ".youtube-thumbnail-wrapper"
                        );

                    if (wrapper) {

                        wrapper.outerHTML = `
                            <div class="youtube-placeholder">

                                <strong>
                                    Hindi ma-load ang
                                    YouTube preview
                                </strong>

                                <p>
                                    Gamitin ang link ng video
                                    upang panoorin ito sa YouTube.
                                </p>

                            </div>
                        `;
                    }
                }
            );
        }

        const zoomImage =
            body.querySelector(
                "[data-zoom-image]"
            );

        if (zoomImage) {

            zoomImage.addEventListener(
                "click",
                () => {

                    openImageZoom(
                        zoomImage.dataset.zoomImage
                    );

                }
            );
        }
    }

    /* =========================================================
       ADDITIONAL MATERIAL MODAL
    ========================================================= */

    function openAdditionalMaterial(weekNumber) {

        const material = additionalMaterials[weekNumber];

        if (!material) {
            console.warn("Material not found for week:", weekNumber);
            return;
        }

        createAdditionalMaterialModal();

        const modal = document.getElementById("additionalMaterialModal");
        const body = document.getElementById("additionalMaterialBody");

        if (!modal || !body) return;

        let html = `
            <span class="modal-eyebrow">
                KARAGDAGANG MATERIAL / TRIVIA
            </span>

            <h2>${material.title || "Dagdag Kaalaman"}</h2>
        `;

        if (material.subtitle) {
            html += `
                <p class="modal-text">
                    <strong>${material.subtitle}</strong>
                </p>
            `;
        }

        /* -----------------------------------------------------
           READING / TRIVIA
        ----------------------------------------------------- */

        if (material.type === "reading") {

            html += `
                <div class="material-reading" style="margin-top: 20px;">
                    ${material.content || ""}
                </div>
            `;

            if (Array.isArray(material.keywords) && material.keywords.length > 0) {
                html += `
                    <div class="detail-box">
                        <h3>Mga Mahahalagang Salita</h3>
                        <div class="keyword-container">
                            ${material.keywords
                                .map(keyword => `<span class="keyword-tag">${keyword}</span>`)
                                .join("")}
                        </div>
                    </div>
                `;
            }
        }

        /* -----------------------------------------------------
           COMMANDMENTS
        ----------------------------------------------------- */

        else if (material.type === "commandments") {

            html += `
                <div class="detail-box">
                    <p class="modal-text">
                        ${material.introduction || ""}
                    </p>
                </div>

                <div style="margin-top: 25px;">
            `;

            if (Array.isArray(material.commandments) && material.commandments.length > 0) {
                material.commandments.forEach(item => {
                    html += `
                        <div class="commandment-card">
                            <div class="commandment-number">
                                <strong>${item.number}</strong>
                            </div>
                            <div class="commandment-text">
                                ${item.text}
                            </div>
                            <div class="commandment-keywords">
                                ${(item.keywords || [])
                                    .map(keyword => `<span class="commandment-keyword">${keyword}</span>`)
                                    .join("")}
                            </div>
                        </div>
                    `;
                });
            }

            html += `</div>`;
        }

        else {
            html += `
                <div class="detail-box">
                    <p class="modal-text">
                        Walang available na content para sa materyal na ito.
                    </p>
                </div>
            `;
        }

        body.innerHTML = html;
        modal.classList.add("show");
        document.body.style.overflow = "hidden";
    }

    /* =========================================================
       ADDITIONAL MATERIAL BUTTON
    ========================================================= */

    function addAdditionalMaterialButton(weekNumber, container) {

        if (!container) return;

        const material = additionalMaterials[weekNumber];

        if (!material) return;

        const oldButton = container.querySelector(".additional-material-button");
        if (oldButton) {
            oldButton.remove();
        }

        const button = document.createElement("button");
        button.type = "button";
        button.className = "additional-material-button";
        button.dataset.week = String(weekNumber);
        button.textContent = material.title || "Dagdag Kaalaman / Trivia";

        container.appendChild(button);
    }

    /* =========================================================
       SECTION HANDLING
    ========================================================= */

    function getAllPageSections() {

        return document.querySelectorAll(
            ".hero, " +
            ".content-section, " +
            "#researchersPage, " +
            "#headerSection, " +
            "#homeContent, " +
            "#lessonContent"
        );
    }

    function showSection(sectionName) {

        if (!sectionName) {
            return;
        }

        getAllPageSections().forEach(
            section => {

                section.classList.remove(
                    "active"
                );
            }
        );

        document
            .querySelectorAll(
                ".nav-btn, [data-section]"
            )
            .forEach(button => {

                button.classList.remove(
                    "active"
                );
            });

        let target = null;

        if (sectionName === "home") {

            target =
                document.getElementById(
                    "homeContent"
                ) ||
                document.getElementById(
                    "headerSection"
                ) ||
                document.querySelector(
                    ".hero"
                );
        }

        else if (
            sectionName === "lesson"
        ) {

            target =
                document.getElementById(
                    "lessonContent"
                );
        }

        else {

            target =
                document.getElementById(
                    sectionName
                );
        }

        if (target) {
            target.classList.add("active");
        }

        document
            .querySelectorAll(
                `[data-section="${sectionName}"]`
            )
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

    function displayLesson(
        weekNumber,
        button = null
    ) {

        const lesson =
            lessons[weekNumber];

        if (!lesson || !weekContent) {

            console.warn(
                "Lesson not found:",
                weekNumber
            );

            return;
        }

        document
            .querySelectorAll(".week-btn")
            .forEach(item => {

                item.classList.remove(
                    "active"
                );
            });

        if (button) {

            button.classList.add(
                "active"
            );
        }

        weekContent.style.opacity = "0";

        weekContent.style.transform =
            "translateY(10px)";

        window.setTimeout(() => {

            weekContent.innerHTML = `

              <h3 class="week-title">
    ${lesson.title}
</h3>

<div class="week-description">
    ${lesson.description}
</div>

<div class="lesson-grid">

                    <!-- AUTHOR -->

                    <article
                        class="feature-card clickable-lesson-card"
                        data-info="author"
                        tabindex="0"
                        role="button"
                        aria-label="Tingnan ang may-akda"
                    >

                        <strong>
                            May-akda
                        </strong>

                        <span class="card-detail">
                            ${lesson.author}
                        </span>

                    </article>


                    <!-- THEME -->

                    <article
                        class="feature-card clickable-lesson-card"
                        data-info="theme"
                        tabindex="0"
                        role="button"
                        aria-label="Tingnan ang buong tema"
                    >

                        <strong>
                            Tema
                        </strong>

                        <span class="card-detail">
                            ${lesson.theme}
                        </span>

                    </article>


                    <!-- OBJECTIVE -->

                    <article
                        class="feature-card clickable-lesson-card"
                        data-info="objective"
                        tabindex="0"
                        role="button"
                        aria-label="Tingnan ang buong layunin"
                    >

                        <strong>
                            Layunin
                        </strong>

                        <span class="card-detail">
                            ${lesson.objective}
                        </span>

                    </article>


                    <!-- MATERIAL -->

                    <article
                        class="feature-card clickable-lesson-card"
                        data-info="material"
                        tabindex="0"
                        role="button"
                        aria-label="Tingnan ang multimodal material"
                    >

                        <strong>
                            Multimodal Material
                        </strong>

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

            weekContent.style.opacity = "1";

            weekContent.style.transform =
                "translateY(0)";

        }, 180);
    }

    /* =========================================================
       CLICK EVENT LISTENERS
    ========================================================= */

    document.addEventListener(
        "click",
        event => {

            /* -----------------------------------------------
               SECTION BUTTONS
            ----------------------------------------------- */

            const sectionButton =
                event.target.closest(
                    "[data-section]"
                );

            if (sectionButton) {

                event.preventDefault();

                const section =
                    sectionButton.dataset.section;

                if (section) {
                    showSection(section);
                }

                return;
            }

            /* -----------------------------------------------
               WEEK BUTTONS
            ----------------------------------------------- */

            const weekButton =
                event.target.closest(
                    ".week-btn"
                );

            if (weekButton) {

                event.preventDefault();

                const week =
                    Number(
                        weekButton.dataset.week
                    );

                if (
                    Number.isInteger(week) &&
                    lessons[week]
                ) {

                    displayLesson(
                        week,
                        weekButton
                    );

                    showSection("lesson");

                } else {

                    console.warn(
                        "Invalid data-week:",
                        weekButton.dataset.week
                    );
                }

                return;
            }

            /* -----------------------------------------------
               LESSON CARDS
            ----------------------------------------------- */

            const lessonCard =
                event.target.closest(
                    ".clickable-lesson-card"
                );

            if (lessonCard) {

                event.preventDefault();

                const type =
                    lessonCard.dataset.info;

                const activeWeek =
                    document.querySelector(
                        ".week-btn.active"
                    );

                const week =
                    Number(
                        activeWeek?.dataset.week
                    );

                if (
                    type &&
                    Number.isInteger(week) &&
                    lessons[week]
                ) {

                    openInfoModal(
                        type,
                        lessons[week]
                    );
                }

                return;
            }

            /* -----------------------------------------------
               ADDITIONAL MATERIAL BUTTON
            ----------------------------------------------- */

            const additionalButton =
                event.target.closest(
                    ".additional-material-button"
                );

            if (additionalButton) {

                event.preventDefault();

                const week =
                    Number(
                        additionalButton.dataset.week
                    );

                if (week) {
                    openAdditionalMaterial(week);
                }

                return;
            }
        }
    );

    /* =========================================================
       KEYBOARD ACCESS
    ========================================================= */

    document.addEventListener(
        "keydown",
        event => {

            if (
                event.key !== "Enter" &&
                event.key !== " "
            ) {
                return;
            }

            const card =
                event.target.closest(
                    ".clickable-lesson-card"
                );

            if (!card) {
                return;
            }

            event.preventDefault();

            const type =
                card.dataset.info;

            const activeWeek =
                document.querySelector(
                    ".week-btn.active"
                );

            const week =
                Number(
                    activeWeek?.dataset.week
                );

            if (
                type &&
                Number.isInteger(week) &&
                lessons[week]
            ) {

                openInfoModal(
                    type,
                    lessons[week]
                );
            }
        }
    );

    /* =========================================================
       LOGO
    ========================================================= */

    const logoToggle =
        document.getElementById(
            "logoToggle"
        );

    if (logoToggle) {

        logoToggle.addEventListener(
            "click",
            event => {

                event.preventDefault();

                getAllPageSections()
                    .forEach(section => {

                        section.classList.remove(
                            "active"
                        );
                    });

                const headerSection =
                    document.getElementById(
                        "headerSection"
                    );

                if (headerSection) {

                    headerSection.classList.add(
                        "active"
                    );
                }

                document
                    .querySelectorAll(
                        ".nav-btn"
                    )
                    .forEach(button => {

                        button.classList.remove(
                            "active"
                        );
                    });

                window.scrollTo({
                    top: 0,
                    behavior: "smooth"
                });
            }
        );
    }

    /* =========================================================
       CONTACT
    ========================================================= */

    const contactButton =
        document.getElementById(
            "contactButton"
        );

    const closeContact =
        document.getElementById(
            "closeContact"
        );

    function closeContactModal() {

        if (contactModal) {

            contactModal.classList.remove(
                "show"
            );
        }

        restoreBodyScroll();
    }

    if (contactButton) {

        contactButton.addEventListener(
            "click",
            event => {

                event.preventDefault();

                if (contactModal) {

                    contactModal.classList.add(
                        "show"
                    );

                    document.body.style.overflow =
                        "hidden";
                }
            }
        );
    }

    if (closeContact) {

        closeContact.addEventListener(
            "click",
            event => {

                event.preventDefault();

                closeContactModal();
            }
        );
    }

    if (contactModal) {

        contactModal.addEventListener(
            "click",
            event => {

                if (
                    event.target ===
                    contactModal
                ) {

                    closeContactModal();
                }
            }
        );
    }

    /* =========================================================
       ESCAPE KEY
    ========================================================= */

    document.addEventListener(
        "keydown",
        event => {

            if (event.key !== "Escape") {
                return;
            }

            closeContactModal();
            closeInfoModal();
            closeAdditionalMaterial();
            closeImageZoom();
        }
    );

    /* =========================================================
       NAVBAR SCROLL
    ========================================================= */

    let lastScroll = 0;

    if (navbar) {

        window.addEventListener(
            "scroll",
            () => {

                const currentScroll =
                    window.scrollY;

                if (
                    currentScroll > lastScroll &&
                    currentScroll > 140
                ) {

                    navbar.classList.add(
                        "hidden"
                    );

                } else {

                    navbar.classList.remove(
                        "hidden"
                    );
                }

                lastScroll =
                    currentScroll;

            },
            {
                passive: true
            }
        );
    }
/* =========================================================
   MOBILE NAVBAR MENU
   ========================================================= */

if (navbar) {

    /*
     * Create hamburger button automatically.
     * No HTML modification is required.
     */

    const mobileMenuButton =
        document.createElement("button");

    mobileMenuButton.type = "button";

    mobileMenuButton.className =
        "mobile-menu-toggle";

    mobileMenuButton.setAttribute(
        "aria-label",
        "Buksan ang navigation menu"
    );

    mobileMenuButton.setAttribute(
        "aria-expanded",
        "false"
    );

    mobileMenuButton.innerHTML = "☰";


    /*
     * Insert hamburger button
     * after the navigation links.
     */

    const navLinks =
        navbar.querySelector(".nav-links");

    if (navLinks) {

        navbar.appendChild(
            mobileMenuButton
        );


        /* -----------------------------------------
           OPEN / CLOSE MENU
        ----------------------------------------- */

        mobileMenuButton.addEventListener(
            "click",
            event => {

                event.preventDefault();
                event.stopPropagation();

                const isOpen =
                    navbar.classList.toggle(
                        "mobile-open"
                    );

                mobileMenuButton.setAttribute(
                    "aria-expanded",
                    String(isOpen)
                );

                mobileMenuButton.innerHTML =
                    isOpen
                        ? "✕"
                        : "☰";

                mobileMenuButton.setAttribute(
                    "aria-label",
                    isOpen
                        ? "Isara ang navigation menu"
                        : "Buksan ang navigation menu"
                );
            }
        );


        /* -----------------------------------------
           CLOSE MENU AFTER CLICKING NAVIGATION
        ----------------------------------------- */

        navLinks
            .querySelectorAll(".nav-btn")
            .forEach(button => {

                button.addEventListener(
                    "click",
                    () => {

                        navbar.classList.remove(
                            "mobile-open"
                        );

                        mobileMenuButton.setAttribute(
                            "aria-expanded",
                            "false"
                        );

                        mobileMenuButton.innerHTML =
                            "☰";

                        mobileMenuButton.setAttribute(
                            "aria-label",
                            "Buksan ang navigation menu"
                        );
                    }
                );
            });


        /* -----------------------------------------
           CLOSE WHEN CLICKING OUTSIDE
        ----------------------------------------- */

        document.addEventListener(
            "click",
            event => {

                if (
                    !navbar.contains(event.target)
                ) {

                    navbar.classList.remove(
                        "mobile-open"
                    );

                    mobileMenuButton.setAttribute(
                        "aria-expanded",
                        "false"
                    );

                    mobileMenuButton.innerHTML =
                        "☰";

                    mobileMenuButton.setAttribute(
                        "aria-label",
                        "Buksan ang navigation menu"
                    );
                }
            }
        );


        /* -----------------------------------------
           CLOSE MENU WITH ESCAPE
        ----------------------------------------- */

        document.addEventListener(
            "keydown",
            event => {

                if (
                    event.key === "Escape" &&
                    navbar.classList.contains(
                        "mobile-open"
                    )
                ) {

                    navbar.classList.remove(
                        "mobile-open"
                    );

                    mobileMenuButton.setAttribute(
                        "aria-expanded",
                        "false"
                    );

                    mobileMenuButton.innerHTML =
                        "☰";
                }
            }
        );


        /* -----------------------------------------
           RESET MOBILE MENU WHEN RESIZING
        ----------------------------------------- */

        window.addEventListener(
            "resize",
            () => {

                if (
                    window.innerWidth > 700
                ) {

                    navbar.classList.remove(
                        "mobile-open"
                    );

                    mobileMenuButton.setAttribute(
                        "aria-expanded",
                        "false"
                    );

                    mobileMenuButton.innerHTML =
                        "☰";
                }
            }
        );
    }
}
    /* =========================================================
       CHATBOT
    ========================================================= */

    const chatbot =
        document.getElementById(
            "chatbot"
        );

    const chatbotToggle =
        document.getElementById(
            "chatbotToggle"
        );

    const chatbotClose =
        document.getElementById(
            "chatbotClose"
        );

    const chatbotInput =
        document.getElementById(
            "chatbotInput"
        );

    const chatbotSend =
        document.getElementById(
            "chatbotSend"
        );

    const chatbotMessages =
        document.getElementById(
            "chatbotMessages"
        );

    const CHAT_API_URL =
        "https://hibla-ai-server.onrender.com/api/chat";

    if (
        chatbotToggle &&
        chatbot
    ) {

        chatbotToggle.addEventListener(
            "click",
            event => {

                event.preventDefault();

                chatbot.classList.add(
                    "open"
                );

                window.setTimeout(
                    () => {

                        if (chatbotInput) {
                            chatbotInput.focus();
                        }

                    },
                    100
                );
            }
        );
    }

    if (
        chatbotClose &&
        chatbot
    ) {

        chatbotClose.addEventListener(
            "click",
            event => {

                event.preventDefault();

                chatbot.classList.remove(
                    "open"
                );
            }
        );
    }

    function addChatMessage(
        text,
        type
    ) {

        if (!chatbotMessages) {
            return null;
        }

        const message =
            document.createElement(
                "div"
            );

        message.className =
            `chatbot-message ${type}`;

        if (type === "bot") {

            message.innerHTML =
                text;

        } else {

            message.textContent =
                text;
        }

        chatbotMessages.appendChild(
            message
        );

        chatbotMessages.scrollTop =
            chatbotMessages.scrollHeight;

        return message;
    }

    async function sendMessage() {

        if (
            !chatbotInput ||
            !chatbotMessages
        ) {
            return;
        }

        const text =
            chatbotInput.value.trim();

        if (
            !text ||
            chatbotInput.disabled
        ) {
            return;
        }

        addChatMessage(
            text,
            "user"
        );

        chatbotInput.value = "";

        chatbotInput.disabled =
            true;

        if (chatbotSend) {
            chatbotSend.disabled =
                true;
        }

        const botMessage =
            addChatMessage(
                "Nag-iisip...",
                "bot"
            );

        try {

            const response =
                await fetch(
                    CHAT_API_URL,
                    {
                        method: "POST",

                        headers: {
                            "Content-Type":
                                "application/json"
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

                    if (
                        errorData &&
                        errorData.error
                    ) {

                        errorMessage =
                            errorData.error;
                    }

                } catch (error) {

                    console.error(
                        "Server error response:",
                        error
                    );
                }

                throw new Error(
                    `${errorMessage} (HTTP ${response.status})`
                );
            }

            const data =
                await response.json();

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

        } catch (error) {

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

                    Pakisubukan muli pagkatapos
                    ng ilang segundo.
                `;
            }

        } finally {

            chatbotInput.disabled =
                false;

            if (chatbotSend) {

                chatbotSend.disabled =
                    false;
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

        chatbotInput.addEventListener(
            "keydown",
            event => {

                if (
                    event.key === "Enter" &&
                    !event.shiftKey
                ) {

                    event.preventDefault();

                    if (
                        !chatbotInput.disabled
                    ) {

                        sendMessage();
                    }
                }
            }
        );
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
