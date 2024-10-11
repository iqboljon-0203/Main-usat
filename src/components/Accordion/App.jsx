import React from 'react';
import { Accordion, AccordionItem } from '@nextui-org/react';
import  './Accordion.css';
import { useState } from 'react';
export default function App() {
    const mainLang=localStorage.getItem("i18nextLng");
    
    const [expandedIndex, setExpandedIndex] = useState(null);

    const handleAccordionChange = index => {
        setExpandedIndex(expandedIndex === index ? null : index);
    };
    let accordionData = [
        {
            title: 'Fan va texnologiyalar universitetining litsenziyasi bormi?',
            content: `Ha, Fan va texnologiyalar universiteti O‘zbekiston Respublikasi Vazirlar Mahkamasi huzuridagi Taʼlim sifatini nazorat qilish davlat inspeksiyasi tomonidan 2022-yil 27-iyul kuni berilgan № 331658 litsenziyasi asosida mamlakatda o’z faoliyatini yuritadi. Quyidagi havola orqali o’tib, “Litsenziya” axborot tizimida universitet litsenziyasini tekshirish mumkin - <a style='color: rgba(33, 70, 109, 1)' target="_blank" href="https://license.gov.uz/registry?filter%5Bnumber%5D=331658">https://license.gov.uz/registry?filter%5Bnumber%5D=331658</a>`,
        },
        {
            title: 'Universitetni tamomlagan talabalarga haqiqiy diplom beriladimi?',
            content:
                'Ha, universitetni tamomlagan talabalarga butun O’zbekistonda tan olinadigan davlat namunasidagi bakalavr diplomi beriladi. Ushbu diplom bilan istalgan hususiy korxonaga yoki davlat idorasiga ishga joylashishingiz mumkin.',
        },
        {
            title: "Fan va texnologiyalar universitetida grant o'rinlari bormi?",
            content:
                "Universitetda grant o'rinlari bor. Avgust oyining oxirida “Fan javohirlari” olimpiadasi tashkil etiladi. Unda ishtirok etib, g'olib bo'lganlar uchun grant o’rinlari ajratiladi.",
        },
        {
            title: 'Fan va texnologiyalar universitetida talabalarga stipendiya beriladimi?',
            content:
                "Ha, universitetda har semestrda “Rektor stipendiyasi” uchun tanlov bo'lib o'tadi. Unda g'olib bo'lganlarga stipendiya to'lab beriladi.",
        },
        {
            title: 'Universitetda yotoqxona bormi?',
            content:
                "Hozircha yo'q. Ammo universitetda “Ijara xonadonlari bo'yicha ma'lumotlar markazi” tashkil etilgan. Ushbu markaz orqali talabalar universitetga yaqin bo'lgan hududda mavjud ijara xonadonlari to‘g‘risida batafsil ma’lumotlarni va maslahatlarni olishlari mumkin bo‘ladi. Ijara xonadonlari yoki vaqtincha turar joy topish uchun talabalar universitetimizda joylashgan ushbu markazga yoki <a style='color: rgba(33, 70, 109, 1)' target='_blank' href='tel:+99899-750-8642'>+99899-750-86-42</a>, <a style='color: rgba(33, 70, 109, 1)' target='_blank' href='tel:+998940385577'>+99894-038-55-77</a>, <a style='color: rgba(33, 70, 109, 1)' target='_blank' href='tel:+998997475965'>+99899-747-59-65</a> telefon raqamlariga murojaat qilishlari mumkin.",
        },
        {
            title: 'Universitetda qanday qulaylik va afzalliklar bor?',
            content: `<ul style={{ listStyleType: 'disc', paddingLeft: '20px' }} >
                    <li> - 18 ta bakalavr va 6 ta magistratura yo'nalishlari</li>
                    <li> - Kontrakt narxlari 7,9 mln so'mdan boshlanadi</li>
                    <li> - Kontrakt bo'yicha 100% to'lov qilganda 10% chegirma beriladi</li>
                    <li> - Kontraktni yil davomida bo’lib to’lash imkoniyati</li>
                    <li> - Сhet tilini bilish bo'yicha malaka sertifikatiga ega bo‘lganlarga kontrakt narxidan chegirma (B1 uchun 15%, B2 uchun 30%)</li>
                    <li> - Talaba bo'lgan er-xotin va yaqin qarindoshlar uchun har biriga kontrakt narxidan 10% chegirma</li>
                    <li> - DTM ball bilan imtihonsiz qabul qilinish imkoniyati</li>
                    <li> - Xalqaro universitetlar bilan hamkorlik aloqalari</li>
                    <li> - Qulay joylashuv: metroning “Olmazor” bekatidan uzoq emas</li>
                    <li> - Shaharning istalgan nuqtasidan avtobusda yetib kelish imkoniyati</li>
                    <li> - Keng, shinam va eng yangi texnika bilan jihozlangan o’quv xonalari</li>
                    <li> - 100 dan ortiq kompyuterga ega elektron kutubxona va “co-working” markazi</li>
                    <li> - Butun universitet bo’ylab bepul Wi-Fi</li>
                    <li> - Talabalarga birinchi kursdan amaliyot o'tash imkoniyati</li>
                    <li> - Qat’iy forma talab qilinmaydi</li>
                    </ul>`,
        },
        {
            title: "Universitetni tamomlagach, talabalar ish bilan ta'minlanadimi?",
            content:
                'Universitet barcha talabalarni ish bilan ta’minlashda amaliy yordam ko‘rsatadi.',
        },
        {
            title: "Universitet qayerda joylashgan, uning manzili haqida ma'lumot bera olasizmi?",
            content: `<ul  style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
            <li> - Manzil: Toshkent, Chilonzor ko’chasi, 2-uy</li>
            <li> - Mo'ljal: sobiq Roison binosi</li>
            <li> - Lokatsiya: <a style='color: rgba(33, 70, 109, 1)' target='_blank' href="https://yandex.uz/maps/10335/tashkent/?ll=69.163080%2C41.261028&mode=whatshere&whatshere%5Bpoint%5D=69.163055%2C41.261021&whatshere%5Bzoom%5D=19.98&z=19">Yandex xaritada</a>  | <a style='color: rgba(33, 70, 109, 1)' target='_blank' href="https://www.google.com/maps/search/41.261005,+69.163074?entry=tts">Google xaritada</a></li>
            <li> - Biz bilan aloqa: <a style='color: rgba(33, 70, 109, 1)' href="tel:+99878-888-38-88">+99878-888-38-88</a></li>
            </ul>`,
        },
        {
            title: "Universitet faoliyatini ijtimoiy tarmoqlarda kuzatib borsa bo'ladimi?",
            content: `<ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
            Albatta, quyida Fan va texnologiyalar universitetining ijtimoiy tarmoqlardagi sahifalarini e'tiboringizga havola etamiz:
            <li> - <a style='color: rgba(33, 70, 109, 1)' target='_blank' href="https://instagram.com/usatuz">Instagram</a></li>
            <li> - <a style='color: rgba(33, 70, 109, 1)' target='_blank' href="https://t.me/usatuzb">Telegram</a></li>
            <li> - <a style='color: rgba(33, 70, 109, 1)' target='_blank' href="https://facebook.com/usatuz">Facebook</a></li>
            <li> - <a style='color: rgba(33, 70, 109, 1)' target='_blank' href="https://youtube.com/@usatuz">YouTube</a></li>

            </ul>`,
        },
        {
            title: 'Universitet talabalari qanday yutuqlarga erishgan?',
            content:
                '2023-yil dekabr oyida talabalarimiz 135 ta OTM jamoalari, shu jumladan 1080 nafar talaba ishtirok etgan “Zakovat” intellektual olimpiadasining respublika bosqichida 1-o’rinni qo’lga kiritdi va 2 mlrd so’m miqdoridagi Prezident sovg’asi bilan taqdirlandi.',
        },
        {
            title: 'Qabul jarayoni qachongacha davom etadi?',
            content: 'Qabul jarayoni sentyabr oyining oxirigacha davom etadi.',
        },
        {
            title: 'Fan va texnologiyalar universitetida imtihon topshirish pullikmi?',
            content:
                "Yo'q, universitetimizda imtihon topshirish mutlaqo bepul.",
        },
        {
            title: "Abituriyent UZBMB (DTM) natijasi bilan oq'ishga imtihonsiz qabul qilinadimi?",
            content:
                "Ha, davlat oliy ta'lim muassasiga test topshirgan bo'lsangiz va kontraktga ballingiz yetmagan bo'lsa, shu ball bilan universitetimizga imtihonsiz qabul qilinishingiz mumkin. Hujjatlaringizni <a style='color: rgba(33, 70, 109, 1)' target='_blank' href='https://qabul.usat.uz/sign-up?utm_source=web&utm_medium=site&utm_campaign=usatuz'>qabul.usat.uz</a> sayti yoki <a style='color: rgba(33, 70, 109, 1)' target='_blank' href='https://t.me/usat_bot?start=qabul_usat_uz'>Qabul boti</a> boti orqali topshirishingiz mumkin. Arizangiz javobi bir kunda telefon raqamingizga SMS tarzida yuboriladi.",
        },
        {
            title: "Chet tilini bilish sertifikatiga ega bo'lganlarga qandaydir imtiyozlar bormi?",
            content:
                "Bor, chet tilini bilish darajasi to‘g‘risidagi B1 va undan yuqori darajadagi malaka sertifikatga ega bo‘lgan abituriyentlar ushbu holatni tasdiqlovchi hujjatni qabul jarayonida taqdim etganda, kirish test imtihonlaridan ozod etiladi. Shu bilan birga chet tilini bilish bo'yicha malaka sertifikatiga ega bo‘lganlarga kontrakt narxidan 15%dan 30%gacha chegirma beriladi. Bunda B1 uchun 15%, B2 uchun 30%. Sertifikatining muddati 2 yil bo'sa, 2 yil davomida chegirma o'z kuchiga ega bo'ladi. Bunda nafaqat ingliz tili bo'yicha, balki boshqa tillarda ham shunga tenglashtirilgan sertifikat bo'lsa, qabul qilinadi.",
        },
        {
            title: "Shartnomani qayerdan olsam bo'ladi?",
            content:
                "Shartnomani <a style='color: rgba(33, 70, 109, 1)' target='_blank' href='https://qabul.usat.uz/sign-up?utm_source=web&utm_medium=site&utm_campaign=usatuz'>qabul.usat.uz</a> saytidagi shaxsiy kabinetda yoki <a style='color: rgba(33, 70, 109, 1)' target='_blank' href='https://t.me/usat_bot?start=qabul_usat_uz'>Telegram boti</a> orqali yuklab olishingiz mumkin.",
        },
        {
            title: "Shartnoma bo'yicha birinchi to'lovni qanchon amalga oshirishim kerak?",
            content:
                "Abituriyent shartnoma bo’yicha birinchi to’lovni amalga oshirgandan keyingina talabalikka qabul qilinadi. Birinchi to’lov 1-oktyabrgacha qilinishi kerak. To'lov shartlari bo'yicha batafsil ma'lumot shartnomaning 3-bandida ko'rsatilgan.",
        },
        {
            title: "Shartnoma pulining birinchi to'lovini 50% emas kamroq to'lash imkoniyati bormi?",
            content:
                "Bor, abituriyentlarning imkoniyatidan kelib chiqib, birinchi to'lovni 25% gacha kamaytiriladi. Bunday imkoniyat albatta summaning qolgan qismini yil davomida bo'lib to'lab berish sharti bilan beriladi. 4 ga bo'lib to'lasangiz, avgust, oktyabr, yanvar va mart oylarida to'lashingiz mumkin bo'ladi.",
        },
        {
            title: 'Universitetingiz uchun ta’lim krediti ajratiladimi?',
            content:
                'Albatta, ta’lim krediti talabalarimizga beriladi. Ta’lim krediti haqidagi batafsil ma’lumotlarni ixtiyoriy bank filiallaridan olishingiz mumkin.',
        },
    ];
    let accordionDataRU = [
        {
            title: 'Есть ли у Университета науки и технологий лицензия?',
            content: `Да, Университет науки и технологий осуществляет свою деятельность в стране на основании лицензии № 331658, выданной Государственной инспекцией по контролю качества образования при Кабинете Министров Республики Узбекистан 27 июля 2022 года. Проверить лицензию университета можно, пройдя по следующей ссылке в информационную систему "Лицензия" - <a style='color: rgba(33, 70, 109, 1)' target="_blank" href="https://license.gov.uz/registry?filter%5Bnumber%5D=331658">https://license.gov.uz/registry?filter%5Bnumber%5D=331658</a>`,
        },
        {
            title: 'Выпускникам университета выдается действительный диплом?',
            content:
                'Да, выпускники университета получают диплом бакалавра государственного образца, который признается по всей территории Узбекистана. С этим дипломом вы можете устроиться на работу в любую частную компанию или государственное учреждение.',
        },
        {
            title: 'Есть ли грантовые места в Университете науки и технологий?',
            content:
                'В университете есть грантовые места. В конце августа проводится олимпиада «Fan javohirlari», победителям которой предоставляются грантовые места.',
        },
        {
            title: 'Предоставляются ли студентам университета стипендии?',
            content:
                'Да, каждый семестр в университете проводится конкурс на "Ректорскую стипендию". Победителям этого конкурса выплачивается стипендия.',
        },
        {
            title: 'Есть ли в университете общежитие?',
            content:
                "Пока нет. Однако в университете создан \"Центр информации по аренде жилья\". Через этот центр студенты могут получить подробную информацию и консультации по аренде жилья вблизи университета. Для поиска аренды жилья или временного проживания студенты могут обратиться в этот центр, расположенный в университете, или по телефонам <a style='color: rgba(33, 70, 109, 1)' target='_blank' href='tel:+99899-750-8642'>+99899-750-86-42</a>, <a style='color: rgba(33, 70, 109, 1)' target='_blank' href='tel:+998940385577'>+99894-038-55-77</a>, <a style='color: rgba(33, 70, 109, 1)' target='_blank' href='tel:+998997475965'>+99899-747-59-65</a>.",
        },
        {
            title: 'Какие преимущества и удобства есть в университете?',
            content: `<ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
            <li> - 18 направлений бакалавриата и 6 магистерских программ</li>
            <li> - Стоимость контракта начинается с 7,9 млн сумов</li>
            <li> - Скидка 10% при полной оплате контракта</li>
            <li> - Возможность оплаты контракта в рассрочку в течение года</li>
            <li> - Скидки от 15% до 30% на стоимость контракта для обладателей сертификатов уровня владения иностранным языком (15% для уровня B1, 30% для уровня B2)</li>
            <li> - Скидка 10% на стоимость контракта для супружеских пар и близких родственников</li>
            <li> - Возможность поступления без экзаменов по результатам теста ГЦЭ</li>
            <li> - Сотрудничество с международными университетами</li>
            <li> - Удобное расположение: недалеко от станции метро "Олмазор"</li>
            <li> - Возможность добраться до университета из любой точки города на автобусе</li>
            <li> - Просторные, уютные учебные аудитории, оснащенные новейшим оборудованием</li>
            <li> - Электронная библиотека и коворкинг-центр с более чем 100 компьютерами</li>
            <li> - Бесплатный Wi-Fi по всему университету</li>
            <li> - Возможность прохождения практики с первого курса</li>
            <li> - Отсутствие строгого дресс-кода</li>
        </ul>`,
        },
        {
            title: 'Гарантируется ли трудоустройство студентов после окончания университета?',
            content:
                'Университет оказывает практическую помощь всем студентам в трудоустройстве.',
        },
        {
            title: 'Где находится университет, можно ли получить информацию о его адресе?',
            content: `<ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
            <li> - Адрес: Адрес: г. Ташкент, Чиланзарский район, массив Алгоритм, ул. Дийдор, 71.</li>
            <li> - Ориентир: бывшее здание Roison</li>
            <li> - Локация: <a style='color: rgba(33, 70, 109, 1)' target='_blank' href="https://yandex.uz/maps/10335/tashkent/?ll=69.163080%2C41.261028&mode=whatshere&whatshere%5Bpoint%5D=69.163055%2C41.261021&whatshere%5Bzoom%5D=19.98&z=19">На Яндекс Картах</a> | <a style='color: rgba(33, 70, 109, 1)' target='_blank' href="https://www.google.com/maps/search/41.261005,+69.163074?entry=tts">На Google Картах</a></li>
            <li> - Связаться с нами: <a style='color: rgba(33, 70, 109, 1)' href="tel:+99878-888-38-88">+99878-888-38-88</a></li>
        </ul>`,
        },
        {
            title: 'Можно ли следить за деятельностью университета в социальных сетях?',
            content: `<ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
            Конечно, ниже приведены ссылки на страницы Университета науки и технологий в социальных сетях:
            <li> - <a style='color: rgba(33, 70, 109, 1)' target='_blank' href="https://instagram.com/usatuz">Instagram</a></li>
            <li> - <a style='color: rgba(33, 70, 109, 1)' target='_blank' href="https://t.me/usatuzb">Telegram</a></li>
            <li> - <a style='color: rgba(33, 70, 109, 1)' target='_blank' href="https://facebook.com/usatuz">Facebook</a></li>
            <li> - <a style='color: rgba(33, 70, 109, 1)' target='_blank' href="https://youtube.com/@usatuz">YouTube</a></li>
        </ul>`,
        },
        {
            title: 'Какие достижения у студентов университета?',
            content:
                'В декабре 2023 года наши студенты заняли 1-е место на республиканском этапе интеллектуальной олимпиады "Zakovat", в которой участвовали команды 135 вузов, включая 1080 студентов, и были награждены призом Президента в размере 2 млрд сумов.',
        },
        {
            title: 'Когда заканчивается процесс приема?',
            content: 'Прием документов продолжается до конца сентября.',
        },
        {
            title: 'Платно ли сдавать экзамены в Университете науки и технологий?',
            content:
                'Нет, сдача экзаменов в нашем университете абсолютно бесплатна.',
        },
        {
            title: 'Можно ли поступить с результатом UZBMB (ГЦЭ) без экзаменов?',
            content:
                "Да, если вы сдавали госэкзамен, но не набрали проходной балл для поступления в государственный вуз, вы можете быть приняты в наш университет без экзаменов по этим баллам. Вы можете подать свои документы через сайт q<a style='color: rgba(33, 70, 109, 1)' target='_blank' href='https://qabul.usat.uz/sign-up?utm_source=web&utm_medium=site&utm_campaign=usatuz'>qabul.usat.uz</a>. или через бот <a style='color: rgba(33, 70, 109, 1)' target='_blank' href='https://t.me/usat_bot?start=qabul_usat_uz.'>Qabul Bot</a>. Ответ на вашу заявку будет отправлен в виде SMS на ваш телефон в течение одного дня.",
        },
        {
            title: 'Есть ли льготы для обладателей сертификатов владения иностранным языком?',
            content:
                'Да, абитуриенты, имеющие сертификат уровня владения иностранным языком B1 и выше, освобождаются от вступительных экзаменов при подаче соответствующих документов в процессе приема. Также для обладателей сертификатов владения иностранным языком предусмотрены скидки от 15% до 30% на стоимость контракта. При этом 15% для уровня B1 и 30% для уровня B2. Если срок действия сертификата составляет 2 года, скидка сохраняется в течение 2 лет. Сертификаты, приравненные к аналогичному уровню, принимаются не только по английскому языку, но и по другим языкам.',
        },
        {
            title: 'Где я могу получить договор?',
            content:
                "Вы можете скачать договор в личном кабинете на сайте <a style='color: rgba(33, 70, 109, 1)' target='_blank' href='https://qabul.usat.uz/sign-up?utm_source=web&utm_medium=site&utm_campaign=usatuz'>qabul.usat.uz</a> или через <a style='color: rgba(33, 70, 109, 1)' target='_blank' href='https://t.me/usat_bot?start=qabul_usat_uz'>Телеграм-бот</a>.",
        },
        {
            title: 'Когда я должен произвести первый платеж по договору?',
            content:
                'Абитуриент принимается в студенты только после осуществления первого платежа по договору. Первый платеж должен быть произведен до 1 октября. Подробная информация об условиях оплаты указана в пункте 3 договора.',
        },
        {
            title: 'Можно ли оплатить первую часть платежа по договору менее чем 50%?',
            content:
                'Да, исходя из возможностей абитуриентов, первый платеж может быть уменьшен до 25%. Такая возможность предоставляется при условии выплаты оставшейся суммы в течение года. Вы можете оплатить в рассрочку в 4 этапа в августе, октябре, январе и марте.',
        },
        {
            title: 'Предоставляется ли образовательный кредит для вашего университета?',
            content:
                'Безусловно, образовательный кредит предоставляется нашим студентам. Подробную информацию о кредитах на образование можно получить в любом филиале банка.',
        },
    ];
    let accordionDataEN = [
        {
            title: 'Does the University of Science and Technology have a license?',
            content: `Yes, the University of Science and Technology operates in the country based on license No. 331658 issued by the State Inspectorate for Quality Control of Education under the Cabinet of Ministers of the Republic of Uzbekistan on July 27, 2022. You can verify the university's license by following this link in the "License" information system - <a style='color: rgba(33, 70, 109, 1)' target="_blank" href="https://license.gov.uz/registry?filter%5Bnumber%5D=331658">https://license.gov.uz/registry?filter%5Bnumber%5D=331658</a>`,
        },
        {
            title: 'Do graduates of the university receive a valid diploma?',
            content:
                "Yes, graduates of the university receive a state-recognized bachelor's degree diploma, which is recognized throughout Uzbekistan. With this diploma, you can get a job in any private company or government office.",
        },
        {
            title: 'Are there scholarship positions at the University of Science and Technology?',
            content:
                'There are scholarship positions available at the university. In late August, the "Gems of Science" Olympiad is organized. Scholarship positions are allocated to the winners of this Olympiad.',
        },
        {
            title: 'Are students at the university provided with scholarships?',
            content:
                'Yes, each semester the university holds a competition for the "Rector\'s Scholarship". Winners of this competition receive a scholarship.',
        },
        {
            title: 'Is there a dormitory at the university?',
            content:
                "Not yet. However, the university has established a \"Housing Information Center\". Through this center, students can obtain detailed information and advice on available rental housing near the university. To find rental housing or temporary accommodation, students can contact this center located at our university or call the following numbers: <a style='color: rgba(33, 70, 109, 1)' target='_blank' href='tel:+99899-750-8642'>+99899-750-86-42</a>, <a style='color: rgba(33, 70, 109, 1)' target='_blank' href='tel:+998940385577'>+99894-038-55-77</a>, <a style='color: rgba(33, 70, 109, 1)' target='_blank' href='tel:+998997475965'>+99899-747-59-65</a>.",
        },
        {
            title: 'What facilities and advantages are available at the university?',
            content: `<ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
            <li> - 18 bachelor's degree programs and 6 master's programs</li>
            <li> - Contract prices start from 7.9 million soums</li>
            <li> - 10% discount when paying the full contract amount</li>
            <li> - Opportunity to pay the contract amount in installments throughout the year</li>
            <li> - Discounts from 15% to 30% on the contract amount for holders of language proficiency certificates (15% for B1, 30% for B2)</li>
            <li> - 10% discount on the contract amount for married couples and close relatives</li>
            <li> - Admission without exams based on State Testing Center (DMT) scores</li>
            <li> - Collaboration with international universities</li>
            <li> - Convenient location: not far from the "Olmazor" metro station</li>
            <li> - Easy access from any point in the city by bus</li>
            <li> - Spacious, comfortable classrooms equipped with the latest technology</li>
            <li> - Electronic library and coworking center with more than 100 computers</li>
            <li> - Free Wi-Fi throughout the university</li>
            <li> - Opportunity to start practical training from the first year</li>
            <li> - No strict dress code required</li>
        </ul>`,
        },
        {
            title: 'Are students guaranteed employment after graduation?',
            content:
                'The university provides practical assistance to all students in finding employment.',
        },
        {
            title: 'Where is the university located, and can you provide information about its address?',
            content: `<ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
            <li> - Address: Tashkent, Chilanzar Street, 2</li>
            <li> - Landmark: former Roison building</li>
            <li> - Location: <a style='color: rgba(33, 70, 109, 1)' target='_blank' href="https://yandex.uz/maps/10335/tashkent/?ll=69.163080%2C41.261028&mode=whatshere&whatshere%5Bpoint%5D=69.163055%2C41.261021&whatshere%5Bzoom%5D=19.98&z=19">On Yandex Maps</a> | <a style='color: rgba(33, 70, 109, 1)' target='_blank' href="https://www.google.com/maps/search/41.261005,+69.163074?entry=tts">On Google Maps</a></li>
            <li> - Contact us: <a style='color: rgba(33, 70, 109, 1)' href="tel:+99878-888-38-88">+99878-888-38-88</a></li>
        </ul>`,
        },
        {
            title: "Can I follow the university's activities on social media?",
            content: `<ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
            Absolutely, below are the links to the University of Science and Technology's social media pages:
            <li> - <a style='color: rgba(33, 70, 109, 1)' target='_blank' href="https://instagram.com/usatuz">Instagram</a></li>
            <li> - <a style='color: rgba(33, 70, 109, 1)' target='_blank' href="https://t.me/usatuzb">Telegram</a></li>
            <li> - <a style='color: rgba(33, 70, 109, 1)' target='_blank' href="https://facebook.com/usatuz">Facebook</a></li>
            <li> - <a style='color: rgba(33, 70, 109, 1)' target='_blank' href="https://youtube.com/@usatuz">YouTube</a></li>
        </ul>`,
        },
        {
            title: 'What achievements have university students accomplished?',
            content:
                'In December 2023, our students won 1st place in the Republican stage of the "Zakovat" intellectual Olympiad, which involved teams from 135 universities, including 1080 students, and were awarded a 2 billion soums prize from the President.',
        },
        {
            title: 'When does the admission process end?',
            content:
                'The admission process continues until the end of September.',
        },
        {
            title: 'Is it free to take exams at the University of Science and Technology?',
            content: 'No, taking exams at our university is absolutely free.',
        },
        {
            title: 'Can applicants be admitted with UZBMB (DMT) results without exams?',
            content:
                "Yes, if you took tests at a state higher education institution and did not score enough for the contract, you can be admitted to our university without exams with those scores. You can submit your documents through the <a style='color: rgba(33, 70, 109, 1)' target='_blank' href='https://qabul.usat.uz/sign-up?utm_source=web&utm_medium=site&utm_campaign=usatuz'>qabul.usat.uz</a> website or <a style='color: rgba(33, 70, 109, 1)' target='_blank' href='https://t.me/usat_bot?start=qabul_usat_uz'>Telegram bot</a>. Your application response will be sent to your phone number as an SMS within one day.",
        },
        {
            title: 'Are there any benefits for holders of language proficiency certificates?',
            content:
                'Yes, applicants with a B1 or higher language proficiency certificate are exempt from entrance exams when submitting the relevant document during the admission process. Additionally, discounts ranging from 15% to 30% are provided on the contract amount for holders of language proficiency certificates. Specifically, 15% for B1 and 30% for B2. If the certificate is valid for 2 years, the discount remains effective for 2 years. Certificates equivalent to similar levels in other languages are also accepted.',
        },
        {
            title: 'Where can I get the contract?',
            content:
                "You can download the contract from your personal account on the <a style='color: rgba(33, 70, 109, 1)' target='_blank' href='https://qabul.usat.uz/sign-up?utm_source=web&utm_medium=site&utm_campaign=usatuz'>qabul.usat.uz</a> website or through the <a style='color: rgba(33, 70, 109, 1)' target='_blank' href='https://t.me/usat_bot?start=qabul_usat_uz'>Telegram bot</a>.",
        },
        {
            title: 'When should I make the first payment for the contract?',
            content:
                'Applicants are only admitted after making the first payment under the contract. The first payment must be made by October 1st. Detailed information on payment terms is provided in section 3 of the contract.',
        },
        {
            title: 'Is it possible to pay less than 50% for the first installment of the contract?',
            content:
                "Yes, based on the applicant's capabilities, the first payment can be reduced to 25%. This option is provided with the condition of paying the remaining amount in installments throughout the year. You can pay in 4 installments in August, October, January, and March.",
        },
        {
            title: 'Is an education loan provided for your university?',
            content:
                'Absolutely, an education loan is provided to our students. Detailed information about education loans can be obtained from any bank branch.',
        },
    ];


    return (
        <Accordion
            className="px-4 rounded-xl"
            motionProps={{
                variants: {
                    enter: {
                        y: 0,
                        opacity: 1,
                        height: 'auto',
                        transition: {
                            height: {
                                type: 'spring',
                                stiffness: 500,
                                damping: 30,
                                duration: 1,
                            },
                            opacity: {
                                easings: 'ease',
                                duration: 1,
                            },
                        },
                    },
                    exit: {
                        y: -10,
                        opacity: 0,
                        height: 0,
                        transition: {
                            height: {
                                easings: 'ease',
                                duration: 0.25,
                            },
                            opacity: {
                                easings: 'ease',
                                duration: 0.3,
                            },
                        },
                    },
                },
            }}
        >
            {mainLang === 'uz'
                ? accordionData.map((item, index) => (
                      <AccordionItem
                          key={index + 1}
                          aria-label={`Accordion ${index + 1}`}
                          isExpanded={expandedIndex === index}
                          className="AccordionItem"
                          onClick={() => handleAccordionChange(index)}
                          title={
                              <div
                                  className={`accordion_item_title ${expandedIndex === index ? 'expanded' : ''}`}
                              >
                                  {item.title}
                                  <span style={{ marginLeft: 'auto' }}>
                                      {expandedIndex === index ? '▼' : '◀'}
                                  </span>
                              </div>
                          }
                          icon={null}
                      >
                          <div className="accordionItemContent">
                              <div
                                  dangerouslySetInnerHTML={{
                                      __html: item.content,
                                  }}
                              ></div>
                          </div>
                      </AccordionItem>
                  ))
                : mainLang === 'ru'
                  ? accordionDataRU.map((item, index) => (
                        <AccordionItem
                            key={index + 1}
                            aria-label={`Accordion ${index + 1}`}
                            isExpanded={expandedIndex === index}
                            className="AccordionItem"
                            onClick={() => handleAccordionChange(index)}
                            title={
                                <div
                                    className={`accordion_item_title ${expandedIndex === index ? 'expanded' : ''}`}
                                >
                                    {item.title}
                                    <span style={{ marginLeft: 'auto' }}>
                                        {expandedIndex === index ? '▼' : '◀'}
                                    </span>
                                </div>
                            }
                            icon={null}
                        >
                            <div className="accordionItemContent">
                                <div
                                    dangerouslySetInnerHTML={{
                                        __html: item.content,
                                    }}
                                ></div>
                            </div>
                        </AccordionItem>
                    ))
                  : accordionDataEN.map((item, index) => (
                        <AccordionItem
                            key={index + 1}
                            aria-label={`Accordion ${index + 1}`}
                            isExpanded={expandedIndex === index}
                            className="AccordionItem"
                            onClick={() => handleAccordionChange(index)}
                            title={
                                <div
                                    className={`accordion_item_title ${expandedIndex === index ? 'expanded' : ''}`}
                                >
                                    {item.title}
                                    <span style={{ marginLeft: 'auto' }}>
                                        {expandedIndex === index ? '▼' : '◀'}
                                    </span>
                                </div>
                            }
                            icon={null}
                        >
                            <div className="accordionItemContent">
                                <div
                                    dangerouslySetInnerHTML={{
                                        __html: item.content,
                                    }}
                                ></div>
                            </div>
                        </AccordionItem>
                    ))}
        </Accordion>
    );
}
