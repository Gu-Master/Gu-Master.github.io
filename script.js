const defaultPeople = [
  {
    id: "anna",
    name: "РђРЅРЅР° Р‘РµР»СЏРµРІР°",
    years: "1928 вЂ” 2007",
    role: "РїСЂР°Р±Р°Р±СѓС€РєР°",
    status: "passed",
    description: "РЈС‡РёС‚РµР»СЊРЅРёС†Р°, С…СЂР°РЅРёС‚РµР»СЊРЅРёС†Р° СЃРµРјРµР№РЅС‹С… СЂРµС†РµРїС‚РѕРІ Рё С‡РµР»РѕРІРµРє СЃ СѓРґРёРІРёС‚РµР»СЊРЅС‹Рј С‚РµСЂРїРµРЅРёРµРј.",
    photo: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=320&q=80",
    moments: [
      ["1948", "Р—Р°РєРѕРЅС‡РёР»Р° РїРµРґР°РіРѕРіРёС‡РµСЃРєРёР№ РёРЅСЃС‚РёС‚СѓС‚ Рё РЅР°С‡Р°Р»Р° СЂР°Р±РѕС‚Р°С‚СЊ РІ С€РєРѕР»Рµ."],
      ["1953", "Р’С‹С€Р»Р° Р·Р°РјСѓР¶ Р·Р° Р‘РѕСЂРёСЃР°. Р’РјРµСЃС‚Рµ РѕРЅРё РїРѕСЃС‚СЂРѕРёР»Рё РґРѕРј РЅР° РѕРєСЂР°РёРЅРµ РќРѕРІРѕСЃРёР±РёСЂСЃРєР°."],
      ["1996", "Р—Р°РїРёСЃР°Р»Р° С‚РµС‚СЂР°РґСЊ СЃРµРјРµР№РЅС‹С… СЂРµС†РµРїС‚РѕРІ, РєРѕС‚РѕСЂР°СЏ РґРѕ СЃРёС… РїРѕСЂ Р¶РёРІС‘С‚ РЅР° РєСѓС…РЅРµ Сѓ РњР°СЂРёРё."],
    ],
  },
  {
    id: "boris",
    name: "Р‘РѕСЂРёСЃ Р‘РµР»СЏРµРІ",
    years: "1924 вЂ” 1998",
    role: "РїСЂР°РґРµРґСѓС€РєР°",
    status: "passed",
    description: "РРЅР¶РµРЅРµСЂ, РїСЂРѕС€С‘Р» РІСЃСЋ РІРѕР№РЅСѓ Рё РІРµСЂРЅСѓР»СЃСЏ РґРѕРјРѕР№. Р›СЋР±РёР» СЂР°РґРёРѕ, СЂР°Р±РѕС‚Сѓ СЂСѓРєР°РјРё Рё РґР»РёРЅРЅС‹Рµ СЂР°Р·РіРѕРІРѕСЂС‹.",
    photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=320&q=80",
    moments: [
      ["1945", "Р’РµСЂРЅСѓР»СЃСЏ РґРѕРјРѕР№ Рё СѓСЃС‚СЂРѕРёР»СЃСЏ РЅР° Р·Р°РІРѕРґ, РіРґРµ РїСЂРѕСЂР°Р±РѕС‚Р°Р» РїРѕС‡С‚Рё СЃРѕСЂРѕРє Р»РµС‚."],
      ["1953", "РџРѕР·РЅР°РєРѕРјРёР»СЃСЏ СЃ РђРЅРЅРѕР№. РС… РїРµСЂРІР°СЏ РїСЂРѕРіСѓР»РєР° Р·Р°РєРѕРЅС‡РёР»Р°СЃСЊ СЃРїРѕСЂРѕРј Рѕ РјСѓР·С‹РєРµ."],
      ["1988", "РЎРѕР±СЂР°Р» СЃРѕР±СЃС‚РІРµРЅРЅС‹Р№ РєРѕСЂРѕС‚РєРѕРІРѕР»РЅРѕРІС‹Р№ СЂР°РґРёРѕРїСЂРёС‘РјРЅРёРє."],
    ],
  },
  {
    id: "elena",
    name: "Р•Р»РµРЅР° Р‘РµР»СЏРµРІР°",
    years: "1952 вЂ” 2021",
    role: "РјР°РјР°",
    status: "passed",
    description: "Р’СЂР°С‡ Рё С‡РµР»РѕРІРµРє, РєРѕС‚РѕСЂС‹Р№ СЃРѕР±РёСЂР°Р» РІСЃРµС… Р·Р° РѕРґРЅРёРј СЃС‚РѕР»РѕРј. Р•С‘ РІРѕСЃРєСЂРµСЃРЅС‹Рµ РѕР±РµРґС‹ СЃС‚Р°Р»Рё СЃРµРјРµР№РЅРѕР№ С‚СЂР°РґРёС†РёРµР№.",
    photo: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=320&q=80",
    moments: [
      ["1971", "РџРѕСЃС‚СѓРїРёР»Р° РІ РјРµРґРёС†РёРЅСЃРєРёР№ РёРЅСЃС‚РёС‚СѓС‚ Рё РІРїРµСЂРІС‹Рµ СѓРµС…Р°Р»Р° РёР· СЂРѕРґРЅРѕРіРѕ РіРѕСЂРѕРґР°."],
      ["1976", "Р’С‹С€Р»Р° Р·Р°РјСѓР¶ Р·Р° Р’РёРєС‚РѕСЂР°. Р’ С‚РѕС‚ Р¶Рµ РіРѕРґ СЂРѕРґРёР»Р°СЃСЊ РњР°СЂРёСЏ."],
      ["2014", "РћС‚РєСЂС‹Р»Р° РјР°Р»РµРЅСЊРєСѓСЋ Р±РµСЃРїР»Р°С‚РЅСѓСЋ Р±РёР±Р»РёРѕС‚РµРєСѓ РґР»СЏ РґРµС‚РµР№ РІРѕ РґРІРѕСЂРµ."],
    ],
  },
  {
    id: "viktor",
    name: "Р’РёРєС‚РѕСЂ Р‘РµР»СЏРµРІ",
    years: "1949 вЂ” 2014",
    role: "РїР°РїР°",
    status: "passed",
    description: "Р’РѕРµРЅРЅС‹Р№ СЃРІСЏР·РёСЃС‚, Р»СЋР±РёР» С€Р°С…РјР°С‚С‹ Рё РґР°Р»СЊРЅРёРµ РґРѕСЂРѕРіРё. Р’СЃРµРіРґР° РІРѕР·РёР» СЃ СЃРѕР±РѕР№ С„РѕС‚РѕР°РїРїР°СЂР°С‚.",
    photo: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=320&q=80",
    moments: [
      ["1970", "РћРєРѕРЅС‡РёР» СѓС‡РёР»РёС‰Рµ СЃРІСЏР·Рё Рё РѕС‚РїСЂР°РІРёР»СЃСЏ РЅР° РїРµСЂРІСѓСЋ СЃР»СѓР¶Р±Сѓ."],
      ["1976", "Р’СЃС‚СЂРµС‚РёР» Р•Р»РµРЅСѓ РЅР° РІРѕРєР·Р°Р»Рµ. Р§РµСЂРµР· РїРѕР»РіРѕРґР° РѕРЅРё СѓР¶Рµ РїР»Р°РЅРёСЂРѕРІР°Р»Рё СЃРІР°РґСЊР±Сѓ."],
      ["2001", "РџСЂРѕРµС…Р°Р» РЅР° РјР°С€РёРЅРµ РѕС‚ РќРѕРІРѕСЃРёР±РёСЂСЃРєР° РґРѕ Р’Р»Р°РґРёРІРѕСЃС‚РѕРєР°."],
    ],
  },
  {
    id: "maria",
    name: "РњР°СЂРёСЏ Р‘РµР»СЏРµРІР°",
    years: "1976 вЂ” СЃРµР№С‡Р°СЃ",
    role: "РјР°РјР°",
    status: "living",
    description: "Р¤РѕС‚РѕРіСЂР°С„, Р°РІС‚РѕСЂ СЌС‚РѕРіРѕ СЃРµРјРµР№РЅРѕРіРѕ Р°СЂС…РёРІР°. РЎРѕС…СЂР°РЅСЏРµС‚ РґРµС‚Р°Р»Рё, РєРѕС‚РѕСЂС‹Рµ РѕР±С‹С‡РЅРѕ СѓСЃРєРѕР»СЊР·Р°СЋС‚.",
    photo: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=320&q=80",
    moments: [
      ["1998", "РџРµСЂРµРµС…Р°Р»Р° РІ РЎР°РЅРєС‚-РџРµС‚РµСЂР±СѓСЂРі СѓС‡РёС‚СЊСЃСЏ С„РѕС‚РѕРіСЂР°С„РёРё."],
      ["2002", "Р’РµСЂРЅСѓР»Р°СЃСЊ РґРѕРјРѕР№ Рё РЅР°С‡Р°Р»Р° СЃРЅРёРјР°С‚СЊ СЃРµРјРµР№РЅС‹Рµ РїСЂР°Р·РґРЅРёРєРё РЅР° РїР»С‘РЅРєСѓ."],
      ["2024", "Р РµС€РёР»Р° СЃРѕР±СЂР°С‚СЊ СЂР°Р·СЂРѕР·РЅРµРЅРЅС‹Рµ С„РѕС‚РѕРіСЂР°С„РёРё Рё РёСЃС‚РѕСЂРёРё РІ РѕРґРёРЅ Р°СЂС…РёРІ."],
    ],
  },
  {
    id: "sergey",
    name: "РЎРµСЂРіРµР№ Р‘РµР»СЏРµРІ",
    years: "1974 вЂ” СЃРµР№С‡Р°СЃ",
    role: "РїР°РїР°",
    status: "living",
    description: "РђСЂС…РёС‚РµРєС‚РѕСЂ, СѓРјРµРµС‚ С‡РёРЅРёС‚СЊ РІСЃС‘ РЅР° СЃРІРµС‚Рµ Рё Р·РЅР°РµС‚, РєР°Рє РїСЂРµРІСЂР°С‚РёС‚СЊ Р»СЋР±СѓСЋ РїРѕРµР·РґРєСѓ РІ РїСЂРёРєР»СЋС‡РµРЅРёРµ.",
    photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=320&q=80",
    moments: [
      ["1997", "РћРєРѕРЅС‡РёР» Р°СЂС…РёС‚РµРєС‚СѓСЂРЅС‹Р№ С„Р°РєСѓР»СЊС‚РµС‚ Рё РЅР°С‡Р°Р» СЂР°Р±РѕС‚Р°С‚СЊ РІ СЃРµРјРµР№РЅРѕР№ РјР°СЃС‚РµСЂСЃРєРѕР№."],
      ["2000", "РџРѕР·РЅР°РєРѕРјРёР»СЃСЏ СЃ РњР°СЂРёРµР№ РЅР° РІС‹СЃС‚Р°РІРєРµ СЃС‚Р°СЂС‹С… С„РѕС‚РѕРіСЂР°С„РёР№."],
      ["2015", "РџРѕСЃС‚СЂРѕРёР» РґРµСЂРµРІСЏРЅРЅСѓСЋ РґР°С‡Сѓ, РіРґРµ С‚РµРїРµСЂСЊ РїСЂРѕС…РѕРґСЏС‚ РІСЃРµ Р±РѕР»СЊС€РёРµ РїСЂР°Р·РґРЅРёРєРё."],
    ],
  },
  {
    id: "liza",
    name: "Р›РёР·Р° Р‘РµР»СЏРµРІР°",
    years: "2002 вЂ” СЃРµР№С‡Р°СЃ",
    role: "РґРѕС‡СЊ",
    status: "living",
    description: "Р”РёР·Р°Р№РЅРµСЂ, СЃРѕР±РёСЂР°РµС‚ СЃРµРјРµР№РЅС‹Рµ РёСЃС‚РѕСЂРёРё РІ РѕРґРЅРѕРј РјРµСЃС‚Рµ Рё Р·РЅР°РµС‚, РіРґРµ Р»РµР¶РёС‚ РєР°Р¶РґР°СЏ СЃС‚Р°СЂР°СЏ С„РѕС‚РѕРіСЂР°С„РёСЏ.",
    photo: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=320&q=80",
    moments: [
      ["2002", "Р РѕРґРёР»Р°СЃСЊ РІ РЎР°РЅРєС‚-РџРµС‚РµСЂР±СѓСЂРіРµ, Р° РїРµСЂРІС‹Рµ СЃР»РѕРІР° СЃРєР°Р·Р°Р»Р° РІ РґРѕРјРµ РїСЂР°Р±Р°Р±СѓС€РєРё."],
      ["2020", "РќР°С‡Р°Р»Р° РѕС†РёС„СЂРѕРІС‹РІР°С‚СЊ СЃРµРјРµР№РЅС‹Рµ РїРёСЃСЊРјР° Рё РїРѕРґРїРёСЃРё РЅР° С„РѕС‚РѕРіСЂР°С„РёСЏС…."],
      ["2026", "Р—Р°РїСѓСЃС‚РёР»Р° РїРµСЂРІСѓСЋ РІРµСЂСЃРёСЋ СЃРµРјРµР№РЅРѕРіРѕ Р°СЂС…РёРІР° В«РљРѕСЂРЅРёВ»."],
    ],
  },
  {
    id: "ivan",
    name: "РРІР°РЅ Р‘РµР»СЏРµРІ",
    years: "2005 вЂ” СЃРµР№С‡Р°СЃ",
    role: "СЃС‹РЅ",
    status: "living",
    description: "РЎС‚СѓРґРµРЅС‚, РіР»Р°РІРЅС‹Р№ СЃРµРјРµР№РЅС‹Р№ С€СѓС‚РЅРёРє Рё РµРґРёРЅСЃС‚РІРµРЅРЅС‹Р№ С‡РµР»РѕРІРµРє, РєРѕС‚РѕСЂС‹Р№ РїРѕРјРЅРёС‚ РїР°СЂРѕР»СЊ РѕС‚ СЃС‚Р°СЂРѕРіРѕ РЅРѕСѓС‚Р±СѓРєР°.",
    photo: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=320&q=80",
    moments: [
      ["2005", "РџРѕСЏРІРёР»СЃСЏ РЅР° СЃРІРµС‚ РІ СЃР°РјС‹Р№ СЃРЅРµР¶РЅС‹Р№ РґРµРЅСЊ Р·РёРјС‹."],
      ["2018", "РЎР°РјРѕСЃС‚РѕСЏС‚РµР»СЊРЅРѕ СЃРѕР±СЂР°Р» РїРµСЂРІС‹Р№ РєРѕРјРїСЊСЋС‚РµСЂ РёР· СЃС‚Р°СЂС‹С… РґРµС‚Р°Р»РµР№."],
      ["2024", "РќР°С€С‘Р» РІ РєРѕСЂРѕР±РєРµ СЃ РїСЂРѕРІРѕРґР°РјРё РєР°СЃСЃРµС‚Сѓ СЃ Р·Р°РїРёСЃСЊСЋ РіРѕР»РѕСЃР° Р‘РѕСЂРёСЃР°."],
    ],
  },
  {
    id: "sofia",
    name: "РЎРѕС„РёСЏ Р‘РµР»СЏРµРІР°",
    years: "2008 вЂ” СЃРµР№С‡Р°СЃ",
    role: "РґРѕС‡СЊ",
    status: "living",
    description: "РњСѓР·С‹РєР°РЅС‚ Рё СЃР°РјР°СЏ РјР»Р°РґС€Р°СЏ РІ РІРµС‚РІРё. РРіСЂР°РµС‚ РЅР° РїРёР°РЅРёРЅРѕ Рё СЃРѕР±РёСЂР°РµС‚ С„Р°РЅС‚РёРєРё РёР· РІСЃРµС… СЃРµРјРµР№РЅС‹С… РїРѕРµР·РґРѕРє.",
    photo: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=320&q=80",
    moments: [
      ["2008", "Р РѕРґРёР»Р°СЃСЊ РІ РєРѕРЅС†Рµ Р»РµС‚Р°, РєРѕРіРґР° РІСЃСЏ СЃРµРјСЊСЏ Р±С‹Р»Р° РЅР° РґР°С‡Рµ."],
      ["2017", "РќР°С‡Р°Р»Р° Р·Р°РЅРёРјР°С‚СЊСЃСЏ РјСѓР·С‹РєРѕР№ Рё РІРїРµСЂРІС‹Рµ СЃС‹РіСЂР°Р»Р° РґР»СЏ РІСЃРµР№ СЃРµРјСЊРё."],
      ["2025", "Р—Р°РїРёСЃР°Р»Р° СЃРµРјРµР№РЅСѓСЋ РїРµСЃРЅСЋ РґР»СЏ СЋР±РёР»РµСЏ РњР°СЂРёРё."],
    ],
  },
];

const defaultAlbum = [
  { id: "album-1", year: 2025, title: "Р›РµС‚РЅРёР№ РґРµРЅСЊ РЅР° РґР°С‡Рµ", people: ["maria", "sergey", "liza"], photo: "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=900&q=85", size: "wide" },
  { id: "album-2", year: 2024, title: "Р”РѕРј, РєРѕС‚РѕСЂС‹Р№ РїРѕРјРЅРёС‚", people: ["anna", "boris"], photo: "https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&w=700&q=85", size: "tall" },
  { id: "album-3", year: 2023, title: "Р’РѕСЃРєСЂРµСЃРЅС‹Р№ СЃС‚РѕР»", people: ["elena", "maria"], photo: "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=700&q=85", size: "" },
  { id: "album-4", year: 2022, title: "Р”РѕСЂРѕРіР° РЅР° РІРѕСЃС‚РѕРє", people: ["viktor", "sergey"], photo: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=700&q=85", size: "" },
  { id: "album-5", year: 2021, title: "РџРёСЃСЊРјР° РёР· СЏС‰РёРєР°", people: ["anna", "elena"], photo: "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=700&q=85", size: "wide" },
  { id: "album-6", year: 2019, title: "РџРµСЂРІС‹Рµ С€Р°РіРё Р°СЂС…РёРІР°", people: ["liza", "ivan"], photo: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=700&q=85", size: "" },
  { id: "album-7", year: 2018, title: "РЎРѕС„РёРЅР° РјСѓР·С‹РєР°", people: ["sofia"], photo: "https://images.unsplash.com/photo-1524650359799-842906ca1c06?auto=format&fit=crop&w=700&q=85", size: "" },
  { id: "album-8", year: 2014, title: "РўС‘РїР»С‹Р№ СЃРІРµС‚ РєСѓС…РЅРё", people: ["elena", "viktor"], photo: "https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?auto=format&fit=crop&w=700&q=85", size: "tall" },
];

const defaultTimeline = [
  { year: "1924", title: "Р РѕР¶РґРµРЅРёРµ Р‘РѕСЂРёСЃР°", text: "РЎ РЅРµРіРѕ РЅР°С‡РёРЅР°РµС‚СЃСЏ СЃР°РјР°СЏ СЂР°РЅРЅСЏСЏ РІРµС‚РІСЊ Р°СЂС…РёРІР°, РєРѕС‚РѕСЂСѓСЋ СѓРґР°Р»РѕСЃСЊ РІРѕСЃСЃС‚Р°РЅРѕРІРёС‚СЊ РїРѕ РїРёСЃСЊРјР°Рј Рё СЃС‚Р°СЂС‹Рј РґРѕРєСѓРјРµРЅС‚Р°Рј." },
  { year: "1953", title: "РђРЅРЅР° Рё Р‘РѕСЂРёСЃ РІСЃС‚СЂРµС‡Р°СЋС‚СЃСЏ", text: "РС… Р·РЅР°РєРѕРјСЃС‚РІРѕ СЃР»СѓС‡РёР»РѕСЃСЊ РЅР° С‚Р°РЅС†Р°С… РІ РіРѕСЂРѕРґСЃРєРѕРј Р”РѕРјРµ РєСѓР»СЊС‚СѓСЂС‹. Р§РµСЂРµР· РіРѕРґ РѕРЅРё РїРѕР¶РµРЅРёР»РёСЃСЊ." },
  { year: "1976", title: "РџРѕСЏРІР»СЏРµС‚СЃСЏ РњР°СЂРёСЏ", text: "Р’ СЃРµРјСЊРµ СЂРѕР¶РґР°РµС‚СЃСЏ С‡РµР»РѕРІРµРє, РєРѕС‚РѕСЂС‹Р№ РїРѕР·Р¶Рµ СЃРѕС…СЂР°РЅРёС‚ Р±РѕР»СЊС€СѓСЋ С‡Р°СЃС‚СЊ СЃРµРјРµР№РЅС‹С… С„РѕС‚РѕРіСЂР°С„РёР№." },
  { year: "2002", title: "Р РѕР¶РґРµРЅРёРµ Р›РёР·С‹", text: "РќРѕРІРѕРµ РїРѕРєРѕР»РµРЅРёРµ СЂР°СЃС‚С‘С‚ СЃСЂРµРґРё РїР»С‘РЅРѕС‡РЅС‹С… СЃРЅРёРјРєРѕРІ, РіРѕР»РѕСЃРѕРІС‹С… РєР°СЃСЃРµС‚ Рё РёСЃС‚РѕСЂРёР№ Р·Р° РІРѕСЃРєСЂРµСЃРЅС‹Рј СЃС‚РѕР»РѕРј." },
  { year: "2024", title: "РќР°С‡РёРЅР°РµС‚СЃСЏ С†РёС„СЂРѕРІРѕР№ Р°СЂС…РёРІ", text: "Р Р°Р·СЂРѕР·РЅРµРЅРЅС‹Рµ С„РѕС‚РѕРіСЂР°С„РёРё, РїРѕРґРїРёСЃРё Рё РІРѕСЃРїРѕРјРёРЅР°РЅРёСЏ РЅР°С‡РёРЅР°СЋС‚ СЃРѕР±РёСЂР°С‚СЊСЃСЏ РІ РѕРґРЅРѕРј РјРµСЃС‚Рµ." },
  { year: "2026", title: "РљРѕСЂРЅРё РѕС‚РєСЂС‹РІР°СЋС‚СЃСЏ СЃРµРјСЊРµ", text: "РџРµСЂРІР°СЏ РІРµСЂСЃРёСЏ Р°СЂС…РёРІР° СЃС‚Р°РЅРѕРІРёС‚СЃСЏ Р¶РёРІС‹Рј РїСЂРѕСЃС‚СЂР°РЅСЃС‚РІРѕРј, РєРѕС‚РѕСЂРѕРµ РјРѕР¶РЅРѕ РїСЂРѕРґРѕР»Р¶Р°С‚СЊ РІРјРµСЃС‚Рµ." },
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
  tree: "РЎРµРјРµР№РЅРѕРµ РґСЂРµРІРѕ",
  people: "Р’СЃРµ Р»СЋРґРё",
  album: "РЎРµРјРµР№РЅС‹Р№ Р°Р»СЊР±РѕРј",
  timeline: "Р›РµРЅС‚Р° РІСЂРµРјРµРЅРё",
  admin: "РђРґРјРёРЅ-РїР°РЅРµР»СЊ",
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
          <img class="person-card-avatar" src="${escapeHtml(person.photo)}" alt="${escapeHtml(person.name)}" />
          <div class="person-card-copy">
            <h3>${escapeHtml(person.name)}</h3>
            <p>${escapeHtml(person.years)} В· ${escapeHtml(person.role)}</p>
          </div>
        </div>
        <p class="person-card-description">${escapeHtml(person.description)}</p>
        <div class="person-card-bottom">
          <span class="status-label ${person.status}">${person.status === "living" ? "Р–РёРІС‘С‚ СЃРµР№С‡Р°СЃ" : "РџР°РјСЏС‚СЊ СЃРµРјСЊРё"}</span>
          <span class="arrow-link">РћС‚РєСЂС‹С‚СЊ <i data-lucide="arrow-up-right"></i></span>
        </div>
      </article>
    `).join("")
    : `<div class="empty-admin-panel"><i data-lucide="search-x"></i><h3>РќРёРєРѕРіРѕ РЅРµ РЅР°С€Р»Рё</h3><p>РџРѕРїСЂРѕР±СѓР№С‚Рµ РґСЂСѓРіРѕР№ Р·Р°РїСЂРѕСЃ РёР»Рё С„РёР»СЊС‚СЂ.</p></div>`;

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
      ${year === "all" ? "Р’СЃРµ РіРѕРґС‹" : year}
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
    : `<div class="empty-admin-panel"><i data-lucide="image-off"></i><h3>Р’ СЌС‚РѕРј РіРѕРґСѓ С‚РёС€Рµ РѕР±С‹С‡РЅРѕРіРѕ</h3><p>Р”РѕР±Р°РІСЊС‚Рµ РїРµСЂРІС‹Р№ РєР°РґСЂ С‡РµСЂРµР· Р°РґРјРёРЅ-РїР°РЅРµР»СЊ.</p></div>`;

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
  if (state.adminUnlocked) {
    renderAdminPeople();
    renderAdminPhotos();
  }
}

function renderAdminPeople() {
  dom.adminPeopleList.innerHTML = state.people.map((person) => `
    <tr>
      <td>
        <div class="admin-person-cell">
          <img src="${escapeHtml(person.photo)}" alt="${escapeHtml(person.name)}" />
          <div><strong>${escapeHtml(person.name)}</strong><span>${escapeHtml(person.role)}</span></div>
        </div>
      </td>
      <td>${escapeHtml(person.years)}</td>
      <td><span class="table-status ${person.status}">${person.status === "living" ? "Р–РёРІС‘С‚ СЃРµР№С‡Р°СЃ" : "РџР°РјСЏС‚СЊ СЃРµРјСЊРё"}</span></td>
      <td>РЎРµРіРѕРґРЅСЏ</td>
      <td><button class="table-action edit-person" data-person-id="${escapeHtml(person.id)}"><i data-lucide="pencil"></i> РР·РјРµРЅРёС‚СЊ</button></td>
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
        <span>${escapeHtml(String(item.year))} В· ${item.people.length} ${item.people.length === 1 ? "С‡РµР»РѕРІРµРє" : "С‡РµР»РѕРІРµРєР°"}</span>
        <button type="button" data-remove-photo="${escapeHtml(item.id)}">РЈРґР°Р»РёС‚СЊ СЃРЅРёРјРѕРє</button>
      </div>
    </article>
  `).join("");

  document.querySelectorAll("[data-remove-photo]").forEach((button) => {
    button.addEventListener("click", () => {
      state.album = state.album.filter((item) => item.id !== button.dataset.removePhoto);
      save("family-album", state.album);
      renderAdminPhotos();
      renderAlbum();
      notify("РЎРЅРёРјРѕРє СѓРґР°Р»С‘РЅ РёР· Р°Р»СЊР±РѕРјР°");
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
      <img src="${escapeHtml(person.photo)}" alt="${escapeHtml(person.name)}" />
      <h3 id="profile-name">${escapeHtml(person.name)}</h3>
      <p>${escapeHtml(person.years)} В· ${escapeHtml(person.role)}</p>
      <span class="status-label ${person.status}">${person.status === "living" ? "Р–РёРІС‘С‚ СЃРµР№С‡Р°СЃ" : "РџР°РјСЏС‚СЊ СЃРµРјСЊРё"}</span>
      <div class="profile-hero-quote">В«РЎР°РјРѕРµ РІР°Р¶РЅРѕРµ РЅРµ С‚РµСЂСЏРµС‚СЃСЏ, РµСЃР»Рё РµРіРѕ РЅР°Р·РІР°С‚СЊ РїРѕ РёРјРµРЅРёВ»</div>
    </div>
    <div class="profile-details">
      <p class="section-kicker">РёСЃС‚РѕСЂРёСЏ С‡РµР»РѕРІРµРєР°</p>
      <h4>Рћ ${escapeHtml(person.name.split(" ")[0])}</h4>
      <p class="profile-bio">${escapeHtml(person.description)}</p>
      <div class="profile-divider"></div>
      <div class="profile-detail-label">Р’Р°Р¶РЅС‹Рµ РјРѕРјРµРЅС‚С‹</div>
      <div class="profile-moments">
        ${moments.map(([year, text]) => `<div class="profile-moment"><span class="profile-moment-year">${escapeHtml(year)}</span><p>${escapeHtml(text)}</p></div>`).join("")}
      </div>
      ${relatedPhotos.length ? `
        <div class="profile-divider"></div>
        <div class="profile-detail-label">Р’ СЃРµРјРµР№РЅРѕРј Р°Р»СЊР±РѕРјРµ</div>
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
  dom.editorTitle.textContent = person ? "РР·РјРµРЅРёС‚СЊ РїСЂРѕС„РёР»СЊ" : "Р”РѕР±Р°РІРёС‚СЊ С‡РµР»РѕРІРµРєР°";
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
    if (!state.adminUnlocked) openModal("#password-modal");
    else showView("admin");
  }
});

document.querySelector("#unlock-admin").addEventListener("click", () => openModal("#password-modal"));

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
    notify("РђРґРјРёРЅ-РїР°РЅРµР»СЊ РѕС‚РєСЂС‹С‚Р°");
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
    role: document.querySelector("#person-role").value.trim() || "С‡Р»РµРЅ СЃРµРјСЊРё",
    status: document.querySelector("#person-status").value,
    description: document.querySelector("#person-description").value.trim() || "РСЃС‚РѕСЂРёСЏ СЌС‚РѕРіРѕ С‡РµР»РѕРІРµРєР° РµС‰С‘ Р±СѓРґРµС‚ РґРѕРїРѕР»РЅРµРЅР°.",
    photo,
    moments: current?.moments || [[new Date().getFullYear().toString(), "РџСЂРѕС„РёР»СЊ РґРѕР±Р°РІР»РµРЅ РІ СЃРµРјРµР№РЅС‹Р№ Р°СЂС…РёРІ."]],
  };

  if (current) state.people = state.people.map((item) => item.id === id ? person : item);
  else state.people.push(person);
  save("family-people", state.people);
  renderPeople();
  renderAdminPeople();
  closeModals();
  notify(current ? "РџСЂРѕС„РёР»СЊ РѕР±РЅРѕРІР»С‘РЅ" : "Р§РµР»РѕРІРµРє РґРѕР±Р°РІР»РµРЅ РІ Р°СЂС…РёРІ");
});

document.querySelector("#new-photo").addEventListener("click", () => {
  showView("people");
  notify("Р”РѕР±Р°РІР»РµРЅРёРµ С„РѕС‚РѕРіСЂР°С„РёР№ Р±СѓРґРµС‚ СЃР»РµРґСѓСЋС‰РёРј С€Р°РіРѕРј. РџСЂРѕС„РёР»Рё СѓР¶Рµ РјРѕР¶РЅРѕ СЂРµРґР°РєС‚РёСЂРѕРІР°С‚СЊ.");
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

renderPeople();
renderAlbum();
renderTimeline();
renderAdminState();
refreshIcons();
