const correspondenceTable = [
    {
      id: 1,
      bnsSection: "1(1)",
      subject: "Short title, commencement and application",
      ipcSection: "1",
      summary:
        "This subject is covered by six subsections of Section 1 of BNS, corresponding to five separate sections of IPC, sans separate headings thereof. In IPC, the extent of code operation is also given, which is absent in BNS.",
    },
    {
      id: 2,
      bnsSection: "1(2)",
      subject: "Commencement",
      ipcSection: "New",
      summary:
        "By subsection 1(2) of the BNS, the power to appoint the date of commencement is delegated to the Central Government, which was absent in the IPC.",
    },
    {
      id: 3,
      bnsSection: "1(3)",
      subject: "Punishment of offences committed within India",
      ipcSection: "2",
      summary:
        "No change except 'Code' is replaced with 'Sanhita'. Wherever the word 'Code' is used in IPC, the word 'Sanhita' is used in BNS; therefore, this fact will not be specifically mentioned in this table hereinafter.",
    },
    {
      id: 4,
      bnsSection: "1(4)",
      subject:
        "Punishment of offences committed beyond, which by law may be tried within, India",
      ipcSection: "3",
      summary:
        "Section is included as a subsection in BNS sans heading. 'Indian laws' is replaced with 'law' and 'for the time being in force in India' is inserted.",
    },
    {
      id: 5,
      bnsSection: "1(5)",
      subject:
        "Short title, commencement and application - Extension of Code to extra-territorial offences",
      ipcSection: "4",
      summary:
        "Section is included as a subsection in BNS sans heading. In the illustration, 'Uganda' has been replaced with 'any place outside India.'",
    },
    {
      id: 6,
      bnsSection: "1(6)",
      subject:
        "Short title, commencement and application - 'Certain laws not to be affected by this Act'",
      ipcSection: "5",
      summary: "IPC section is included as a subsection in BNS sans heading.",
    },
    {
      id: 7,
      bnsSection: "2",
      subject: "Definitions",
      ipcSection: "",
      summary:
        "In the IPC, definitions are not consolidated in a single section; instead, they are given in independent sections from Section 8 to Section 52A in Chapter II, 'General Explanations'. These have been conveniently organised and consolidated in a single section, i.e., Section-2, in alphabetical order as sub-sections with Arabic numerals to facilitate easier reference.",
    },
    {
      id: 8,
      bnsSection: "2(1)",
      subject: "'act'",
      ipcSection: "33",
      summary:
        "In the IPC, Section 33 addressed both 'Act' and 'Omission' collectively. However, in the BNS they are separated.",
    },
    {
      id: 9,
      bnsSection: "2(2)",
      subject: "Animal",
      ipcSection: "47",
      summary: "No change.",
    },
    {
      id: 10,
      bnsSection: "2(3)",
      subject: "Child",
      ipcSection: "New Definition",
      summary: "New Definition of 'child' in section 2(3) of BNS (child - any person below the age of eighteen years.) This is a new addition.",
    },
    {
      id: 11,
      bnsSection: "2(4)",
      subject: "Counterfeit",
      ipcSection: "28",
      summary: "No change.",
    },
    {
      id: 12,
      bnsSection: "2(5)",
      subject: "Court",
      ipcSection: "20",
      summary: "Section 2(5) of BNS excludes the illustration and uses the word 'Court' in place of the words 'Court of Justice'.",
    },
    {
      id: 13,
      bnsSection: "2(6)",
      subject: "Death",
      ipcSection: "46",
      summary: "No change.",
    },
    {
      id: 14,
      bnsSection: "2(7)",
      subject: "Dishonestly",
      ipcSection: "24",
      summary: "Words “whoever does” and “is said to do that thing dishonestly” are excluded.",
    },
    {
      id: 15,
      bnsSection: "2(8)",
      subject: "Document",
      ipcSection: "29 and 29A",
      summary:
        "Words “and includes electronic and digital record” are added. BNS Section 2(8) incorporates both the sections 29 and 29A of IPC and adds digital records.",
    },
    {
      id: 16,
      bnsSection: "2(9)",
      subject: "Fraudulently",
      ipcSection: "25",
      summary: "Phraseology changed but essence is same.",
    },
    {
      id: 17,
      bnsSection: "2(10)",
      subject: "Gender",
      ipcSection: "8",
      summary: "Word 'transgender' is added apart from genders of 'male' and 'female'.",
    },
    {
      id: 18,
      bnsSection: "2(11)",
      subject: "Good faith",
      ipcSection: "52",
      summary: "No change.",
    },
    {
      id: 19,
      bnsSection: "2(12)",
      subject: "Government",
      ipcSection: "17",
      summary: "Words 'Government of a State' are replaced by 'State Government'.",
    },
    {
      id: 20,
      bnsSection: "2(13)",
      subject: "Harbour",
      ipcSection: "52A",
      summary: "Words 'Except in section 157 and in section 130, in the case in which the harbour is given by the wife or husband of the person harboured, the word' have been excluded.",
    },
    {
      id: 21,
      bnsSection: "2(14)",
      subject: "Injury",
      ipcSection: "44",
      summary: "Word 'denotes' is replaced with 'means'.",
    },
    {
      id: 22,
      bnsSection: "2(15)",
      subject: "Illegal and legally bound to do",
      ipcSection: "43",
      summary: "No change.",
    },
    {
      id: 23,
      bnsSection: "2(16)",
      subject: "Judge",
      ipcSection: "19",
      summary:
        "Simplified the definition of Judge, paragraphs are given numbers (i) and (ii). Out of four illustrations, only (b) is kept, while (a), (c), and (d) are excluded.",
    },
    {
      id: 24,
      bnsSection: "2(17)",
      subject: "Life",
      ipcSection: "45",
      summary: "Word 'denotes' is replaced with 'means'.",
    },
    {
      id: 25,
      bnsSection: "2(18)",
      subject: "Local law",
      ipcSection: "42",
      summary: "No change.",
    },
    {
      id: 26,
      bnsSection: "2(19)",
      subject: "Man",
      ipcSection: "10",
      summary:
        "The word 'denotes' is replaced with 'means'. Unlike in IPC Section 10, 'man' and 'woman' are bifurcated into two subsections, 2(19) and 2(35) in BNS.",
    },
    {
      id: 27,
      bnsSection: "2(20)",
      subject: "Month and year",
      ipcSection: "49",
      summary: "'British calendar' is replaced by 'Gregorian calendar'.",
    },
    {
      id: 28,
      bnsSection: "2(21)",
      subject: "Movable property",
      ipcSection: "22",
      summary: "By removing word 'corporeal' the scope is expanded.",
    },
    {
        id: 29,
        bnsSection: "2(22)",
        subject: "Number",
        ipcSection: "9",
        summary: "No change."
      },
      {
        id: 30,
        bnsSection: "2(23)",
        subject: "Oath",
        ipcSection: "51",
        summary: "'Court of Justice' is changed to 'Court'."
      },
      {
        id: 31,
        bnsSection: "2(24)",
        subject: "Offence",
        ipcSection: "40",
        summary: "Word 'denotes' is replaced by 'means'."
      },
      {
        id: 32,
        bnsSection: "2(25)",
        subject: "Omission",
        ipcSection: "33",
        summary: "'Act' and 'Omission' are bifurcated into subsections 2(1) and 2(25)."
      },
      {
        id: 33,
        bnsSection: "2(26)",
        subject: "Person",
        ipcSection: "11",
        summary: "No change."
      },
      {
        id: 34,
        bnsSection: "2(27)",
        subject: "Public",
        ipcSection: "12",
        summary: "No change."
      },
      {
        id: 35,
        bnsSection: "2(28)",
        subject: "Public servant",
        ipcSection: "21",
        summary: "'Military, Naval' are replaced by 'Army, Navy'. 'Juryman' is excluded."
      },
      {
        id: 36,
        bnsSection: "2(29)",
        subject: "Reason to believe",
        ipcSection: "26",
        summary: "No change."
      },
      {
        id: 37,
        bnsSection: "2(30)",
        subject: "Special law",
        ipcSection: "41",
        summary: "The word 'is' is replaced by 'means'."
      },
      {
        id: 38,
        bnsSection: "2(31)",
        subject: "Valuable security",
        ipcSection: "30",
        summary: "Word 'denotes' is replaced by 'means'."
      },
      {
        id: 39,
        bnsSection: "2(32)",
        subject: "Vessel",
        ipcSection: "48",
        summary: "Word 'denotes' is replaced by 'means'."
      },
      {
        id: 40,
        bnsSection: "2(33)",
        subject: "Voluntarily",
        ipcSection: "39",
        summary: "No change."
      },
      {
        id: 41,
        bnsSection: "2(34)",
        subject: "Will",
        ipcSection: "31",
        summary: "'A will' is replaced by 'Will'."
      },
      {
        id: 42,
        bnsSection: "2(35)",
        subject: "Woman",
        ipcSection: "10",
        summary: "Definitions of man and woman are bifurcated into 2(19) and 2(35)."
      },
      {
        id: 43,
        bnsSection: "2(36)",
        subject: "Wrongful gain",
        ipcSection: "23 Clause-1",
        summary: "Word 'is' is replaced by 'means'."
      },
      {
        id: 44,
        bnsSection: "2(37)",
        subject: "Wrongful loss",
        ipcSection: "23 Clause-2",
        summary: "Word 'is' is replaced by 'means'."
      },
      {
        id: 45,
        bnsSection: "2(38)",
        subject: "Gaining wrongfully, losing wrongfully",
        ipcSection: "23 Clause-3",
        summary: "No change."
      },
      {
        id: 46,
        bnsSection: "2(39)",
        subject: "Words and expressions used but not defined",
        ipcSection: "29A",
        summary: "Scope is broadened. Definitions from IT Act 2000 and BNSS 2023 are included."
      },
      {
        id: 47,
        bnsSection: "3(1)",
        subject: "General explanations",
        ipcSection: "6",
        summary: "Section is included as sub-section in BNS sans heading."
      },
      {
        id: 48,
        bnsSection: "3(2)",
        subject: "General explanations - Sense of expression once explained",
        ipcSection: "7",
        summary: "Section is included as sub-section in BNS sans heading."
      },
      {
        id: 49,
        bnsSection: "3(3)",
        subject: "General explanations - Property in possession of wife, clerk or servant",
        ipcSection: "27",
        summary: "'Wife' is replaced by 'Spouse'. Section is included as a sub-section in BNS."
      },
      {
        id: 50,
        bnsSection: "3(4)",
        subject: "General explanations - 'Words referring to acts include illegal omissions'",
        ipcSection: "32",
        summary: "Section is included as sub-section in BNS sans heading."
      },
      {
        id: 51,
        bnsSection: "3(5)",
        subject: "General explanations - Acts done by several persons in furtherance of common intention",
        ipcSection: "34",
        summary: "Section is included as sub-section in BNS sans heading. No other change."
      },
      {
        id: 52,
        bnsSection: "3(6)",
        subject: "General explanations - When such an act is criminal by reason of its being done with a criminal knowledge or intention",
        ipcSection: "35",
        summary: "Ditto."
      },
      {
        id: 53,
        bnsSection: "3(7)",
        subject: "General explanations - Effect caused partly by act and partly by omission",
        ipcSection: "36",
        summary: "Ditto."
      },
      {
        id: 54,
        bnsSection: "3(8)",
        subject: "General explanations - Co-operation by doing one of several acts constituting an offence",
        ipcSection: "37",
        summary: "Ditto."
      },
      {
        id: 55,
        bnsSection: "3(9)",
        subject: "General explanations - Persons concerned in Criminal act may be guilty of different offences",
        ipcSection: "38",
        summary: "Ditto."
      },
      {
        id: 56,
        bnsSection: "4",
        subject: "Punishments",
        ipcSection: "53",
        summary: "'Community service' is added to punishments. Definition is given in Section 23 of the BNSS."
      },
      {
        id: 57,
        bnsSection: "5",
        subject: "Commutation of sentence",
        ipcSection: "54 & 55",
        summary: "A cross reference to BNSS is made, unlike IPC."
      },
      {
        id: 58,
        bnsSection: "5",
        subject: "Explanation to section 5 - Commutation of sentence",
        ipcSection: "55A",
        summary: "The heading is dropped; IPC section is given as an explanation in BNS."
      },
      {
        id: 59,
        bnsSection: "6",
        subject: "Fractions of terms of punishment",
        ipcSection: "57",
        summary: "Words 'unless otherwise provided' are added."
      },
      {
        id: 60,
        bnsSection: "7",
        subject: "Sentence may be (in certain cases of imprisonment) wholly or partly rigorous or simple",
        ipcSection: "60",
        summary: "No change."
      },
      {
        id: 61,
        bnsSection: "8(1)",
        subject: "Amount of fine, liability in default of payment of fine, etc.",
        ipcSection: "63",
        summary: "IPC section included as sub-section in BNS with addition of words in heading."
      },
      {
        id: 62,
        bnsSection: "8(2)",
        subject: "Sentence of imprisonment for non-payment of fine",
        ipcSection: "64",
        summary: "IPC section included as sub-section in BNS sans heading."
      },
      {
        id: 63,
        bnsSection: "8(3)",
        subject: "Limit to imprisonment for non-payment of fine, when imprisonment and fine awardable",
        ipcSection: "65",
        summary: "Ditto."
      },
      {
        id: 64,
        bnsSection: "8(4)",
        subject: "Description of imprisonment for non-payment of fine",
        ipcSection: "66",
        summary: "IPC section included as sub-section in BNS sans heading. 'or in default of community service' is added."
      },
      {
        id: 65,
        bnsSection: "300",
        subject: "Disturbing religious assembly",
        ipcSection: "296",
        summary: "No change."
      },
      {
        id: 66,
        bnsSection: "301",
        subject: "Trespassing on burial places, etc.",
        ipcSection: "297",
        summary: "No change."
      },
      {
        id: 67,
        bnsSection: "302",
        subject: "Uttering words, etc., with deliberate intent to wound the religious feelings of any person",
        ipcSection: "298",
        summary: "No change."
      },
      {
        id: 68,
        bnsSection: "303(1)",
        subject: "Theft",
        ipcSection: "378",
        summary: "IPC section is included as sub-section. 'Definition' is replaced by 'Section' in explanation 5."
      },
      {
        id: 69,
        bnsSection: "303(2)",
        subject: "Punishment for theft",
        ipcSection: "379",
        summary: "Punishment for subsequent convictions is added."
      },
      {
        id: 70,
        bnsSection: "304",
        subject: "Snatching",
        ipcSection: "New",
        summary: "New addition."
      },
      {
        id: 71,
        bnsSection: "305",
        subject: "Theft in a dwelling house, or means of transportation or place of worship, etc.",
        ipcSection: "380",
        summary: "The definition enlarged 'means of transportation or place of worship,' is added in the heading and is reframed containing various sub-sections wherein sub-sections (b), (c), (d), (e) are new additions."
      },
      {
        id: 72,
        bnsSection: "306",
        subject: "Theft by clerk or servant of property in possession of master",
        ipcSection: "381",
        summary: "No change."
      },
      {
        id: 73,
        bnsSection: "307",
        subject: "Theft after preparation made for causing death, hurt or restraint in order to committing of theft",
        ipcSection: "382",
        summary: "No change."
      },
      {
        id: 74,
        bnsSection: "308(1)",
        subject: "Extortion",
        ipcSection: "383",
        summary: "Clause (e) is newly added in the illustrations."
      },
      {
        id: 75,
        bnsSection: "308(2)",
        subject: "Extortion punishment",
        ipcSection: "384",
        summary: "IPC section is included as a sub-section in BNS sans heading. The upper limit of the imprisonment is increased from three years to seven years."
      },
      {
        id: 76,
        bnsSection: "308(3)",
        subject: "Putting person in fear of injury in order to commit extortion",
        ipcSection: "385",
        summary: "IPC section is included as a sub-section in BNS sans heading. No other change."
      },
      {
        id: 77,
        bnsSection: "308(4)",
        subject: "Putting person in fear of death or of grievous hurt, in order to commit extortion",
        ipcSection: "387",
        summary: "Ditto."
      },
      {
        id: 78,
        bnsSection: "308(5)",
        subject: "Extortion by putting a person in fear of death or grievous hurt",
        ipcSection: "386",
        summary: "Ditto."
      },
      {
        id: 79,
        bnsSection: "308(6)",
        subject: "Extortion by threat of accusation of an offence punishable with death or imprisonment for life, etc.",
        ipcSection: "388",
        summary: "IPC section is included as a sub-section in BNS sans heading. Words 'and, if the offence by punishable under section 377 of this Code, may be punished with imprisonment for life' are removed as the section 377 IPC has been excluded altogether."
      },
      {
        id: 80,
        bnsSection: "308(7)",
        subject: "Putting person in fear or accusation of offence, in order to commit extortion",
        ipcSection: "389",
        summary: "Ditto."
      },
      {
        id: 81,
        bnsSection: "309(1), (2), (3)",
        subject: "Robbery - When theft is robbery; When extortion is robbery",
        ipcSection: "390",
        summary: "Formal changes reorganized in form of clauses (1), (2), and (3) and sub-heading is dropped."
      },

      {
        id: 82,
        bnsSection: "271",
        subject: "Negligent act likely to spread infection of disease dangerous to life",
        ipcSection: "269",
        summary: "No change."
      },
      {
        id: 83,
        bnsSection: "272",
        subject: "Malignant act likely to spread infection of disease dangerous to life",
        ipcSection: "270",
        summary: "No change."
      },
      {
        id: 84,
        bnsSection: "273",
        subject: "Disobedience to quarantine rule",
        ipcSection: "271",
        summary: "Word 'vessel' is replaced by the phrase 'mode of transport etc.'"
      },
      {
        id: 85,
        bnsSection: "274",
        subject: "Adulteration of food or drink intended for sale",
        ipcSection: "272",
        summary: "Upper limit of fine is increased from one thousand to five thousand rupees."
      },
      {
        id: 86,
        bnsSection: "275",
        subject: "Sale of noxious food or drink",
        ipcSection: "273",
        summary: "Upper limit of fine is increased from one thousand to five thousand rupees."
      },
      {
        id: 87,
        bnsSection: "276",
        subject: "Adulteration of drugs",
        ipcSection: "274",
        summary: "Upper limit of imprisonment is increased from six months to one year and fine is increased from one thousand to five thousand rupees."
      },
      {
        id: 88,
        bnsSection: "277",
        subject: "Sale of adulterated drugs",
        ipcSection: "275",
        summary: "Upper limit of fine is increased from one thousand to five thousand rupees."
      },
      {
        id: 89,
        bnsSection: "278",
        subject: "Sale of drug as a different drug or preparation",
        ipcSection: "276",
        summary: "The upper limit of fine is increased from one thousand to five thousand rupees."
      },
      {
        id: 90,
        bnsSection: "279",
        subject: "Fouling water of public spring or reservoir",
        ipcSection: "277",
        summary: "The upper limit of the imprisonment is increased from three months to six months and fine is increased from five hundred to five thousand rupees."
      },
      {
        id: 91,
        bnsSection: "280",
        subject: "Making atmosphere noxious to health",
        ipcSection: "278",
        summary: "The upper limit of the fine is increased from five hundred to one thousand rupees."
      },
      {
        id: 92,
        bnsSection: "281",
        subject: "Rash driving or riding on a public way",
        ipcSection: "279",
        summary: "No change."
      },
      {
        id: 93,
        bnsSection: "282",
        subject: "Rash navigation of vessel",
        ipcSection: "280",
        summary: "The upper limit of the fine has been increased from one thousand to ten thousand rupees."
      },
      {
        id: 94,
        bnsSection: "283",
        subject: "Exhibition of false light, mark or buoy",
        ipcSection: "281",
        summary: "Fine is added as punishment in addition to imprisonment; rupees ten thousand is fixed as lower limit of fine. Word 'and' has replaced 'or'."
      },
      {
        id: 95,
        bnsSection: "284",
        subject: "Conveying person by water for hire in unsafe or overloaded vessel",
        ipcSection: "282",
        summary: "The upper limit of the fine is increased from one thousand to five thousand rupees."
      },
      {
        id: 96,
        bnsSection: "285",
        subject: "Danger or obstruction in public way or line of navigation",
        ipcSection: "283",
        summary: "The upper limit of the fine is increased from two hundred to five thousand rupees."
      },
      {
        id: 97,
        bnsSection: "286",
        subject: "Negligent conduct with respect to poisonous substance",
        ipcSection: "284",
        summary: "The upper limit of the fine is increased from one thousand to five thousand rupees."
      },
      {
        id: 98,
        bnsSection: "318(4)",
        subject: "Cheating and dishonestly inducing delivery of property",
        ipcSection: "420",
        summary: "IPC section is included as a sub-section in BNS sans heading."
      },
      {
        id: 99,
        bnsSection: "319(1)",
        subject: "Cheating by personation",
        ipcSection: "416",
        summary: "Formal change. This is a definition section which is presented as a sub-section in BNS without any change."
      },
      {
        id: 100,
        bnsSection: "319(2)",
        subject: "Cheating by personation punishment",
        ipcSection: "419",
        summary: "IPC section is included as a sub-section in BNS sans heading. Upper limit of imprisonment is increased from three years to five years."
      },
      {
        id: 101,
        bnsSection: "320",
        subject: "Dishonest or fraudulent removal or concealment of property to prevent distribution among creditors",
        ipcSection: "421",
        summary: "Minimum mandatory punishment for imprisonment of six months has been introduced."
      },
      {
        id: 102,
        bnsSection: "321",
        subject: "Dishonestly or fraudulently preventing debt being available for creditors",
        ipcSection: "422",
        summary: "No change."
      },
      {
        id: 103,
        bnsSection: "322",
        subject: "Dishonest or fraudulent execution of deed of transfer containing false statement of consideration",
        ipcSection: "423",
        summary: "Upper limit of imprisonment is increased from two years to three years."
      },
      {
        id: 104,
        bnsSection: "323",
        subject: "Dishonest or fraudulent removal or concealment of property",
        ipcSection: "424",
        summary: "Ditto."
      },
      {
        id: 105,
        bnsSection: "324(1)",
        subject: "Mischief",
        ipcSection: "425",
        summary: "No change."
      },
      {
        id: 106,
        bnsSection: "302",
        subject: "Murder",
        ipcSection: "300",
        summary: "No change."
      },

      {
        id: 107,
        bnsSection: "63",
        subject: "Rape definition",
        ipcSection: "375",
        summary: "Age of Consent: 15 years is replaced by 18 years in BNS. Exception 2 of Section 63 states that 'sexual intercourse or acts by a man with his wife, the wife not being under 18 years of age, is not rape.'"
      },
      {
        id: 108,
        bnsSection: "64",
        subject: "Punishment for rape",
        ipcSection: "376(1) & 376(2)",
        summary: "Word 'military' is replaced with 'army.'"
      },
      {
        id: 109,
        bnsSection: "65(1)",
        subject: "Punishment for rape in certain cases - rape on a woman under sixteen years",
        ipcSection: "376(3)",
        summary: "No change."
      },
      {
        id: 110,
        bnsSection: "65(2)",
        subject: "Punishment for rape in certain cases - rape on a woman under twelve years",
        ipcSection: "376AB",
        summary: "Section is included as sub-section in BNS sans heading."
      },
      {
        id: 111,
        bnsSection: "66",
        subject: "Punishment for causing death or resulting in persistent vegetative state of victim",
        ipcSection: "376A",
        summary: "No change."
      },
      {
        id: 112,
        bnsSection: "103(1)",
        subject: "Punishment for murder",
        ipcSection: "302",
        summary: "No change, except IPC section is included as subsection in BNS."
      },
      {
        id: 113,
        bnsSection: "103(2)",
        subject: "Punishment for murder",
        ipcSection: "",
        summary: "When a group of five or more persons acting in concert commits murder on the ground of race, caste or community, sex, place of birth, language, personal belief or any other similar ground each member of such group shall be punished with death or with imprisonment for life, and shall also be liable to fine."
      }
      
      
      
      
      
      
      
  ];
  

  export default correspondenceTable;