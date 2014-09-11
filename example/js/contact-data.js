/** contact-data.js --- Test contact data.
 *
 * Copyright (C) 2014 Kar Services
 *
 * Author: Miguel Guedes <miguel@miguelguedes.org>
 *
 * Comments:
 *
 * 
 * */

var g_contacts = [
  {
    "name": "Warren Whitney",
    "id": 0,
    "phone": "(972) 425-3210",
    "email": "example.email@example.com",
    "hometown": "Kerby, USA"
  },
  {
    "name": "Bridgette Sweeney",
    "id": 1,
    "phone": "(881) 514-3190",
    "email": "example.email@example.biz",
    "hometown": "Lacomb, USA"
  },
  {
    "name": "Julianne Garrett",
    "id": 2,
    "phone": "(931) 477-2371",
    "email": "example.email@example.org",
    "hometown": "Thornport, USA"
  },
  {
    "name": "Suzette Dillard",
    "id": 3,
    "phone": "(881) 436-3646",
    "email": "example.email@example.name",
    "hometown": "Norris, USA"
  },
  {
    "name": "Glenda Duffy",
    "id": 4,
    "phone": "(991) 527-2169",
    "email": "example.email@example.tv",
    "hometown": "Martinsville, USA"
  },
  {
    "name": "Katelyn Gutierrez",
    "id": 5,
    "phone": "(887) 456-3941",
    "email": "example.email@example.biz",
    "hometown": "Blanford, USA"
  },
  {
    "name": "Freida Christensen",
    "id": 6,
    "phone": "(923) 503-2650",
    "email": "example.email@example.io",
    "hometown": "Greenbush, USA"
  },
  {
    "name": "Jenny Hurst",
    "id": 7,
    "phone": "(808) 469-2917",
    "email": "example.email@example.me",
    "hometown": "Tioga, USA"
  },
  {
    "name": "Hurst Washington",
    "id": 8,
    "phone": "(818) 431-2509",
    "email": "example.email@example.us",
    "hometown": "Riceville, USA"
  },
  {
    "name": "Pansy Holcomb",
    "id": 9,
    "phone": "(837) 465-3089",
    "email": "example.email@example.ca",
    "hometown": "Thatcher, USA"
  },
  {
    "name": "Colette Sandoval",
    "id": 10,
    "phone": "(937) 560-2206",
    "email": "example.email@example.net",
    "hometown": "Esmont, USA"
  },
  {
    "name": "Patterson West",
    "id": 11,
    "phone": "(922) 572-2417",
    "email": "example.email@example.co.uk",
    "hometown": "Nescatunga, USA"
  },
  {
    "name": "Matilda Bruce",
    "id": 12,
    "phone": "(817) 517-3848",
    "email": "example.email@example.com",
    "hometown": "Dubois, USA"
  },
  {
    "name": "Rodriquez Vinson",
    "id": 13,
    "phone": "(992) 560-2506",
    "email": "example.email@example.biz",
    "hometown": "Nutrioso, USA"
  },
  {
    "name": "Valdez Fernandez",
    "id": 14,
    "phone": "(996) 482-2165",
    "email": "example.email@example.org",
    "hometown": "Haena, USA"
  },
  {
    "name": "Sloan Preston",
    "id": 15,
    "phone": "(922) 512-3603",
    "email": "example.email@example.name",
    "hometown": "Grill, USA"
  },
  {
    "name": "Clay Church",
    "id": 16,
    "phone": "(834) 592-3081",
    "email": "example.email@example.tv",
    "hometown": "Craig, USA"
  },
  {
    "name": "Rachel Williams",
    "id": 17,
    "phone": "(956) 585-2514",
    "email": "example.email@example.biz",
    "hometown": "Crenshaw, USA"
  },
  {
    "name": "Knight Mckay",
    "id": 18,
    "phone": "(802) 565-2079",
    "email": "example.email@example.io",
    "hometown": "Ryderwood, USA"
  },
  {
    "name": "Moon Mcmillan",
    "id": 19,
    "phone": "(879) 511-2906",
    "email": "example.email@example.me",
    "hometown": "Faxon, USA"
  },
  {
    "name": "Daugherty Baker",
    "id": 20,
    "phone": "(957) 480-3880",
    "email": "example.email@example.us",
    "hometown": "Noblestown, USA"
  },
  {
    "name": "Mccarthy Aguilar",
    "id": 21,
    "phone": "(937) 563-3024",
    "email": "example.email@example.ca",
    "hometown": "Albrightsville, USA"
  },
  {
    "name": "Jo Macias",
    "id": 22,
    "phone": "(806) 494-2809",
    "email": "example.email@example.net",
    "hometown": "Hilltop, USA"
  },
  {
    "name": "Barbra Hardin",
    "id": 23,
    "phone": "(829) 474-3664",
    "email": "example.email@example.co.uk",
    "hometown": "Vowinckel, USA"
  },
  {
    "name": "Janis Delaney",
    "id": 24,
    "phone": "(996) 418-3270",
    "email": "example.email@example.com",
    "hometown": "Eastmont, USA"
  },
  {
    "name": "Monique Moore",
    "id": 25,
    "phone": "(872) 571-3987",
    "email": "example.email@example.biz",
    "hometown": "Harborton, USA"
  },
  {
    "name": "Marta Terry",
    "id": 26,
    "phone": "(855) 414-3625",
    "email": "example.email@example.org",
    "hometown": "Dola, USA"
  },
  {
    "name": "Head Dominguez",
    "id": 27,
    "phone": "(959) 415-3311",
    "email": "example.email@example.name",
    "hometown": "Deltaville, USA"
  },
  {
    "name": "Glover Love",
    "id": 28,
    "phone": "(983) 401-2197",
    "email": "example.email@example.tv",
    "hometown": "Calverton, USA"
  },
  {
    "name": "Janie Booker",
    "id": 29,
    "phone": "(983) 563-2106",
    "email": "example.email@example.biz",
    "hometown": "Glidden, USA"
  },
  {
    "name": "Crane Trevino",
    "id": 30,
    "phone": "(815) 525-3273",
    "email": "example.email@example.io",
    "hometown": "Cawood, USA"
  },
  {
    "name": "Leta Vasquez",
    "id": 31,
    "phone": "(933) 551-3663",
    "email": "example.email@example.me",
    "hometown": "Sylvanite, USA"
  },
  {
    "name": "Dean Nash",
    "id": 32,
    "phone": "(944) 524-2989",
    "email": "example.email@example.us",
    "hometown": "Northchase, USA"
  },
  {
    "name": "Trevino Nguyen",
    "id": 33,
    "phone": "(954) 406-3345",
    "email": "example.email@example.ca",
    "hometown": "Haring, USA"
  },
  {
    "name": "Tanisha Wong",
    "id": 34,
    "phone": "(985) 545-2852",
    "email": "example.email@example.net",
    "hometown": "Florence, USA"
  },
  {
    "name": "Lucile Berger",
    "id": 35,
    "phone": "(996) 489-3940",
    "email": "example.email@example.co.uk",
    "hometown": "Gordon, USA"
  },
  {
    "name": "Ashley Wade",
    "id": 36,
    "phone": "(980) 455-2654",
    "email": "example.email@example.com",
    "hometown": "Centerville, USA"
  },
  {
    "name": "Howard Gordon",
    "id": 37,
    "phone": "(857) 419-2032",
    "email": "example.email@example.biz",
    "hometown": "Wedgewood, USA"
  },
  {
    "name": "Davenport Torres",
    "id": 38,
    "phone": "(822) 510-3973",
    "email": "example.email@example.org",
    "hometown": "Leyner, USA"
  },
  {
    "name": "Phoebe Cherry",
    "id": 39,
    "phone": "(914) 587-2328",
    "email": "example.email@example.name",
    "hometown": "Hollymead, USA"
  },
  {
    "name": "Edwards Cardenas",
    "id": 40,
    "phone": "(865) 481-3504",
    "email": "example.email@example.tv",
    "hometown": "Elbert, USA"
  },
  {
    "name": "Chen Rivers",
    "id": 41,
    "phone": "(894) 588-3300",
    "email": "example.email@example.biz",
    "hometown": "Fillmore, USA"
  },
  {
    "name": "Pamela Terrell",
    "id": 42,
    "phone": "(840) 526-2574",
    "email": "example.email@example.io",
    "hometown": "Russellville, USA"
  },
  {
    "name": "Sally Blankenship",
    "id": 43,
    "phone": "(801) 559-2939",
    "email": "example.email@example.me",
    "hometown": "Homeland, USA"
  },
  {
    "name": "Freeman Beard",
    "id": 44,
    "phone": "(830) 555-2465",
    "email": "example.email@example.us",
    "hometown": "Sidman, USA"
  },
  {
    "name": "Constance Harrington",
    "id": 45,
    "phone": "(827) 584-2587",
    "email": "example.email@example.ca",
    "hometown": "Bennett, USA"
  },
  {
    "name": "Slater Haley",
    "id": 46,
    "phone": "(949) 547-2904",
    "email": "example.email@example.net",
    "hometown": "Epworth, USA"
  },
  {
    "name": "Emilia Bridges",
    "id": 47,
    "phone": "(834) 445-2740",
    "email": "example.email@example.co.uk",
    "hometown": "Brazos, USA"
  },
  {
    "name": "Catherine Cervantes",
    "id": 48,
    "phone": "(982) 525-3280",
    "email": "example.email@example.com",
    "hometown": "Imperial, USA"
  },
  {
    "name": "Angelita Anthony",
    "id": 49,
    "phone": "(832) 428-3865",
    "email": "example.email@example.biz",
    "hometown": "Genoa, USA"
  },
  {
    "name": "Hendricks Norton",
    "id": 50,
    "phone": "(873) 519-2306",
    "email": "example.email@example.org",
    "hometown": "Taycheedah, USA"
  },
  {
    "name": "Janette Conway",
    "id": 51,
    "phone": "(938) 536-2600",
    "email": "example.email@example.name",
    "hometown": "Gerber, USA"
  },
  {
    "name": "Banks Howell",
    "id": 52,
    "phone": "(978) 411-3469",
    "email": "example.email@example.tv",
    "hometown": "Elfrida, USA"
  },
  {
    "name": "Shannon Lindsay",
    "id": 53,
    "phone": "(843) 588-2730",
    "email": "example.email@example.biz",
    "hometown": "Kiskimere, USA"
  },
  {
    "name": "Mcdonald Ruiz",
    "id": 54,
    "phone": "(849) 457-3682",
    "email": "example.email@example.io",
    "hometown": "Mathews, USA"
  },
  {
    "name": "Billie Blackburn",
    "id": 55,
    "phone": "(932) 554-2854",
    "email": "example.email@example.me",
    "hometown": "Blairstown, USA"
  },
  {
    "name": "Mullen Hernandez",
    "id": 56,
    "phone": "(818) 532-2774",
    "email": "example.email@example.us",
    "hometown": "Coral, USA"
  },
  {
    "name": "Traci Wilkins",
    "id": 57,
    "phone": "(819) 523-2062",
    "email": "example.email@example.ca",
    "hometown": "Gerton, USA"
  },
  {
    "name": "Osborn Fields",
    "id": 58,
    "phone": "(978) 509-2641",
    "email": "example.email@example.net",
    "hometown": "Waterloo, USA"
  },
  {
    "name": "Margo Macdonald",
    "id": 59,
    "phone": "(859) 560-3465",
    "email": "example.email@example.co.uk",
    "hometown": "Hegins, USA"
  },
  {
    "name": "Daniels Velazquez",
    "id": 60,
    "phone": "(894) 413-3834",
    "email": "example.email@example.com",
    "hometown": "Vallonia, USA"
  },
  {
    "name": "Juanita Hudson",
    "id": 61,
    "phone": "(874) 557-2548",
    "email": "example.email@example.biz",
    "hometown": "Gambrills, USA"
  },
  {
    "name": "Orr Grant",
    "id": 62,
    "phone": "(954) 520-3726",
    "email": "example.email@example.org",
    "hometown": "Wanship, USA"
  },
  {
    "name": "Lindsay Cunningham",
    "id": 63,
    "phone": "(889) 435-2656",
    "email": "example.email@example.name",
    "hometown": "Salix, USA"
  },
  {
    "name": "Stephanie Walsh",
    "id": 64,
    "phone": "(862) 526-2603",
    "email": "example.email@example.tv",
    "hometown": "Jennings, USA"
  },
  {
    "name": "Duffy Rhodes",
    "id": 65,
    "phone": "(996) 558-2758",
    "email": "example.email@example.biz",
    "hometown": "Fairacres, USA"
  },
  {
    "name": "Millicent Bell",
    "id": 66,
    "phone": "(867) 533-3260",
    "email": "example.email@example.io",
    "hometown": "Kenmar, USA"
  },
  {
    "name": "Chris Reilly",
    "id": 67,
    "phone": "(823) 409-2527",
    "email": "example.email@example.me",
    "hometown": "Trucksville, USA"
  },
  {
    "name": "Maribel Mcfadden",
    "id": 68,
    "phone": "(978) 572-3648",
    "email": "example.email@example.us",
    "hometown": "Nicholson, USA"
  },
  {
    "name": "Cameron Parks",
    "id": 69,
    "phone": "(869) 476-2192",
    "email": "example.email@example.ca",
    "hometown": "Malott, USA"
  }
];