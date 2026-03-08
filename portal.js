
// ═══════════════════════════════════════
// DATA
// ═══════════════════════════════════════
const TODAY = new Date(); TODAY.setHours(0,0,0,0);

const MEMBERS = {
  rajasekhar:{id:'rajasekhar',color:'#3b6fd4',gradient:'linear-gradient(135deg,#1a3254,#3b6fd4)',initials:'RR',name:'Rajasekhar Reddy Duggireddy',shortName:'Rajasekhar',role:'Head of Family',dob:'1977-01-21',gender:'Male',nationality:'Indian · Hindu',placeOfBirth:'Nellore, Andhra Pradesh',father:'Sanjeeva Reddy Duggireddy',spouse:'Vasundhara Duggireddy',mobile:'9640656595',altMobile:'9652948966',address:'Flat 807, Tower C, INDIS OneCity, KPHB, Hyderabad – 500072',residingSince:'01/09/2021',
    sections:{
      identity:{aadhaar:{number:'6106 1778 4861',vid:'9120 6379 3571 1704',enrolment:'2081/40012/10313',issued:'01/01/2014',src:'ID_Rajasekhar_Aadhaar_6106-1778-4861.pdf'},pan:{number:'AICPD3992N',issuedOn:'26/10/2018',src:'ID_Rajasekhar_PANCard_AICPD3992N.pdf'},dl:{number:'DLFAP62729122008',validUntil:'20/01/2027',classes:'LMV · MCWG',rta:'RTA Prakasam, AP',firstIssued:'15/02/2008',src:'ID_Rajasekhar_DrivingLicense_Exp2027.pdf'},voter:{epic:'UPD2998482',assembly:'1077 · 108-Ongole · Part 81',address:'305, Silver Springs, Opp. Indane Gas, Lawyer Kasam, AP 523002',src:'ID_Rajasekhar_VoterCard_UPD2998482.pdf'},passport:{number:'E8690728',nationality:'IND',dob:'21/01/1977',sex:'M',usVisa:'H1B',visaIssued:'12-Oct-2007',visaExpiry:'26-Sep-2010',issuingPost:'US Consulate, Chennai',controlNo:'20072842390001',src:'ID_Rajasekhar_Passport_E8690728.pdf'}},
      employment:{company:'DATASPEAKS SERVICES PRIVATE LIMITED',empId:'18',designation:'Senior Software Engineer',jobTitle:'Application Developer',since:'5th September 2019',office:'Dwaraka Pride, HITEC City, Madhapur, Hyderabad – 500082',phone:'77990 00005',hr:'Avanthi Pendyala | avanthi.pendyala@dataspeaks.co | 89783 39723',supervisor:'Jagadishwar Balla | balla@dataspeaks.co | 77990 00005',ref1:'Jagadishwar Balla | Manager | 77990 00005',ref2:'Nikhil Jakka | Sr. SW Engineer | 8463913180',src:'BGV Form.docx'},
      education:[{level:'B.Tech',field:'Production Engineering',institution:'Siddartha Engineering College, Vijayawada, AP',university:'Nagarjuna University',roll:'95 PE 023',period:'Aug 1995 – Apr 1999',result:'Pass',src:'EDU_Rajasekhar_BTech_NagarjunaUniversity_1999.pdf'},{level:'Intermediate / 12th',field:'MPC (English Medium)',institution:'Nagarjuna Residential College, Ongole, AP',board:'BIE, AP',roll:'527896',serial:'D 662679',period:'Jun 1992 – Mar 1994',result:'First Division',total:'894 / ~1000',src:'EDU_Rajasekhar_Intermediate_BIEAndhraPradesh_1994.pdf'},{level:'SSC / 10th',field:'Telugu Medium',institution:'Nagarjuna Public School, Ongole, AP',board:'BSE, AP',roll:'0913225',certNo:'PC/16/0233557',period:'Jun 1991 – Mar 1992',result:'First Class',total:'435',issued:'07/05/1992',src:'EDU_Rajasekhar_SSC_BSEAndhraPradesh_1992.pdf'}],
      finance:[{bank:'HDFC Bank',type:'Primary Savings',account:'50100245463742',userId:'primeraja',cif:'115900081'},{bank:'AXIS Bank',type:'Account 1',account:'008010101337901',userId:'008166621'},{bank:'ICICI Bank',type:'Savings',account:'020201506595',userId:'506038105'},{bank:'AXIS Bank',type:'Account 2',account:'5158881553',userId:'ainsraja'},{bank:'NPS',type:'National Pension System',account:'110141031812'},{bank:'HDFC Life',type:'Life Insurance',account:'26172797'}],
      insurance:[{type:'Individual Health',insurer:'ICICI Lombard General Insurance',policy:'4128i/HSNR/92094505/10/000',plan:'Health Shield New',sumInsured:'₹15,00,000',period:'07-Aug-2025 to 06-Aug-2026',premium:'₹21,502',issued:'18-Jul-2025',src:'INS_Rajasekhar_HealthInsurance_ICICI_Individual_2025-26.pdf'}],
      property:[{name:'OneCity Flat 807, KPHB, Hyderabad',pti:'1231502265',door:'15-31-IOC-C-807',type:'Residential',area:'1,501 Sq.Ft.',annualTax:'₹4,438',locality:'KPHB · Circle 52-Kukatpally',note:'Current family residence',src:'PROP_Rajasekhar_Flat807_OneCity_Hyderabad.jpg'}]
    }
  },
  vasundhara:{id:'vasundhara',color:'#7c3aed',gradient:'linear-gradient(135deg,#5b21b6,#9333ea)',initials:'VD',name:'Vasundhara Duggireddy',shortName:'Vasundhara',role:'Spouse',dob:'1982-08-26',gender:'Female',father:'Ramgopalreddy Bonala',spouse:'Rajasekhar Reddy Duggireddy',
    sections:{
      identity:{aadhaar:{number:'3372 3106 9560',vid:'9157 4654 1152 8966',enrolment:'0000/00846/01889',issued:'28/09/2014',src:'ID_Vasundhara_Aadhaar_3372-3106-9560.pdf'},pan:{number:'BDXPD9514R',fathersName:'Ramgopalreddy Bonala',dob:'26/08/1982',src:'ID_Vasundhara_PANCard_BDXPD9514R.pdf'},marriageCert:{act:'Hindu Marriage Act 1955',husband:'Rajasekhar Reddy Duggireddy',wife:'Vasundhara Duggireddy',date:'22nd December 2004',registrar:'District Marriage Registrar',src:'ID_Family_MarriageCertificate_2004.pdf'}},
      vehicle:[{name:'Honda Activa 125',reg:'TS08HJ8438',year:'2021',engine:'JF49EW4115037',chassis:'ME4JF49MBMW010267',insurer:'ICICI Lombard',policy:'3005/430080806/00/000',type:'Two Wheeler Package',idv:'₹49,588',period:'Feb 25, 2026 – Feb 24, 2028',premium:'₹2,033',ncb:'45%',nominee:'Rajasekhar Reddy D (Spouse)',src:'INS_Vasundhara_BikeInsurance_ICICI_TS08HJ8438_2025-26.pdf'},{name:'Hyundai i10 Sportz',reg:'AP27AK7873',year:'2011',engine:'G4LABM663328',chassis:'ALAN51CLBM905294D',insurer:'ICICI Lombard',policy:'3001/103498197/10/000',type:'Private Car Package',idv:'₹2,10,875',period:'Jun 29, 2025 – Jun 28, 2026',premium:'₹5,537',ncb:'50%',src:'INS_Vasundhara_CarInsurance_ICICI_AP27AK7873_2025-26.pdf'}],
      finance:[{bank:'Indian Bank',type:'Savings',account:'446333602'},{bank:'AXIS Bank',type:'Savings',account:'917010048201559',userId:'875153108'},{bank:'HDFC Bank',type:'Savings',account:'50100638839241',cif:'244624331'}],
      insurance:[{type:'Family Floater',note:true,policy:'4193i/APRN/400529214/00/000',sumInsured:'₹15,00,000 per member'}],
      property:[{name:'Flat 403, Mangamuru Donka, Ongole',assessment:'1035037996',door:'7/1200(a)/403',address:'7/1200(a)/403, Mangamuru Donka, Revenue Ward 35, Ongole',type:'Residential – 4th Floor',area:'765.25 Sq.Yds',taxHalf:'₹2,263',taxAnnual:'₹4,526',capitalValue:'₹36,20,277',src:'PROP_Vasundhara_Flat403_MangamuruDonka_Ongole.pdf'},{name:'Shop G5, Silver Spring Apts, Ongole',assessment:'1035038052',door:'7/1200(a)/g5',type:'Non-Residential – Ground Floor',area:'765.85 Sq.Yds',taxHalf:'₹6,680',taxAnnual:'₹13,360',capitalValue:'₹30,29,779',src:'PROP_Vasundhara_ShopG5_SilverSpring_Ongole.pdf'}]
    }
  },
  josritha:{id:'josritha',color:'#db2777',gradient:'linear-gradient(135deg,#9d174d,#ec4899)',initials:'JD',name:'Josritha Duggireddy',shortName:'Josritha',role:'Daughter',dob:'2006-02-26',gender:'Female',mobile:'9392932602',father:'Rajasekhar Reddy Duggireddy',mother:'Vasundhara Duggireddy',
    sections:{
      identity:{aadhaar:{number:'8316 6458 6848',vid:'9124 7918 6424 2719',enrolment:'0642/40208/00414',issued:'10/01/2017',src:'ID_Josritha_Aadhaar_8316-6458-6848.pdf'},voter:{epic:'UPD3143468',assembly:'1187 · 108-Ongole · Part 98',address:'8-217, Lawyerpet, Sujathanagar, Ongole – 523002',src:'ID_Josritha_VoterCard_UPD3143468.pdf'},birthCert:{name:'Duggi Reddy Josritha',dob:'26-February-2006',placeOfBirth:'Sudha Test Tube Baby Center, Hyderabad',father:'Duggi Reddy Rajasekhar Reddy',mother:'Duggireddy Vasundhara',regNo:'791',src:'ID_Josritha_BirthCertificate_Hyderabad.pdf'}},
        education: [{ level: 'B.Tech (Current)', institution: 'KL Deemed to be University — KLH Campus', roll: '2420030493', email: '2420030493@klh.edu.in', src: 'EDU_Josritha_BTech_KLUniversity_Details.html' }, { level: 'B.Tech Results (Till Date)', field: 'Semester-wise Academic Performance', institution: 'KL Deemed to be University — KLH Campus', note: 'Sem 1: SGPA 9.26 · Sem 2: SGPA 9.29 · Sem 3: SGPA 9.17 (CGPA: 9.24)', sem1: 'SGPA 9.26 (Credits: 20)', sem2: 'SGPA 9.29 (Credits: 20)', sem3: 'SGPA 9.17 (Credits: 20)', cgpa: '9.24 (Till Sem 3)', src:'EDU_Josritha_BTech_KLUniversity_Results.html'},{level:'Intermediate / 12th',field:'MPC',institution:'Sri Harshini Junior College, Ongole',board:'BIE, AP',regNo:'2417214778',exam:'March 2024',result:'PASS – A GRADE',total:'878',src:'EDU_Josritha_Intermediate_BIEAndhraPradesh_2024.pdf'},{level:'SSC / 10th',institution:'Global Edge School, Kukatpalli, Hyderabad',board:'CBSE',roll:'20164403',year:'2022',result:'PASS',issued:'22/07/2022',src:'EDU_Josritha_SSC_CBSE_2022.pdf'}],
      insurance:[{type:'Family Floater',note:true,policy:'4193i/APRN/400529214/00/000',sumInsured:'₹15,00,000 per member'}]
    }
  },
  jeevan:{id:'jeevan',color:'#0d9488',gradient:'linear-gradient(135deg,#065f46,#0d9488)',initials:'JV',name:'Jeevan Vidyadhar Duggireddy',shortName:'Jeevan',role:'Son',dob:'2010-08-22',gender:'Male',mobile:'9063359446',father:'Rajasekhar Reddy Duggireddy',mother:'Vasundhara Duggireddy',
    sections:{
      identity:{aadhaar:{number:'6918 2946 7739',vid:'9158 3149 4395 7932',enrolment:'0867/80256/00218',issued:'11/01/2017',mobile:'9640656595 (Father)',src:'ID_Jeevan_Aadhaar_6918-2946-7739.pdf'},birthCert:{name:'Duggireddy Jeevan',dob:'22/08/2010',sex:'Male',place:'Ongole Municipality, Prakasam District, AP',father:'Rajasekhar Duggireddy',mother:'Vasundhara Duggireddy',src:'ID_Jeevan_BirthCertificate_Ongole.pdf'}},
      finance:[{bank:'HDFC Bank',type:'Savings',account:'50100671382555',cif:'261391217',src:'FIN_Family_BankAccounts_Reference.txt'}],
      insurance:[{type:'Family Floater',note:true,policy:'4193i/APRN/400529214/00/000',sumInsured:'₹15,00,000 per member'}]
    }
  }
};

const FAMILY_FLOATER = {insurer:'ICICI Lombard General Insurance',policy:'4193i/APRN/400529214/00/000',type:'Health AdvantEdge – Family Floater',plan:'Apex Plus R New',holder:'D Rajasekhar',members:['Vasundhara Duggireddy (Spouse)','Josritha Duggireddy (Daughter)','Jeevan Vidyadhar Duggireddy (Son)'],sumInsured:'₹15,00,000 per member',period:'05-Aug-2025 to 04-Aug-2026',premium:'₹25,812',issued:'17-Jul-2025',src:'INS_Family_HealthInsurance_ICICI_Floater_2025-26.pdf'};

const EXPIRY = [
  {id:'prop_tax_flat403',label:'Property Tax – Flat 403',sub:'Mangamuru Donka, Ongole · Vasundhara',icon:'🏘️',date:'2026-02-20',person:'Vasundhara',policy:'Assessment 1035037996'},
  {id:'prop_tax_shopg5',label:'Property Tax – Shop G5',sub:'Silver Spring Apts, Ongole · Vasundhara',icon:'🏬',date:'2026-02-20',person:'Vasundhara',policy:'Assessment 1035038052'},
  {id:'car_ins',label:'Car Insurance',sub:'Hyundai i10 · AP27AK7873',icon:'🚗',date:'2026-06-28',person:'Vasundhara',policy:'3001/103498197/10/000'},
  {id:'health_fam',label:'Health Insurance – Family',sub:'ICICI Lombard Family Floater',icon:'👨‍👩‍👧‍👦',date:'2026-08-04',person:'Family',policy:'4193i/APRN/400529214/00/000'},
  {id:'health_ind',label:'Health Insurance – Individual',sub:'ICICI Lombard · Rajasekhar',icon:'🏥',date:'2026-08-06',person:'Rajasekhar',policy:'4128i/HSNR/92094505/10/000'},
  {id:'dl',label:'Driving Licence',sub:'Rajasekhar · DLFAP62729122008',icon:'🪪',date:'2027-01-20',person:'Rajasekhar',policy:'DLFAP62729122008'},
  {id:'bike_ins',label:'Bike Insurance',sub:'Honda Activa 125 · TS08HJ8438',icon:'🛵',date:'2028-02-24',person:'Vasundhara',policy:'3005/430080806/00/000'}
];

const ATTENDANCE = [
  {subject:'Mathematical Optimization',code:'24MT2012',type:'Lecture',present:14,total:20},
  {subject:'Mathematical Optimization',code:'24MT2012',type:'Tutorial',present:14,total:20},
  {subject:'Full Stack App Dev',code:'24SDCS02',type:'Lecture',present:8,total:11},
  {subject:'Computer Networks',code:'24CS2202',type:'Lab',present:15,total:23},
  {subject:'AWS Cloud Practitioner',code:'24CC3010',type:'Seminar',present:5,total:8},
  {subject:'Cloud Infra & Services',code:'24CS2204',type:'Tutorial',present:16,total:24}
];

const DOC_LINKS = {
  'ID_Rajasekhar_Aadhaar_6106-1778-4861.pdf':'https://drive.google.com/file/d/1jJ4u70MRnE16xneRWqyxzoPDGFm_xrP5/preview',
  'ID_Rajasekhar_PANCard_AICPD3992N.pdf':'https://drive.google.com/file/d/1P6yaf6KacdlfJtPwfaHsQVlEu3eYibj-/view',
  'ID_Rajasekhar_DrivingLicense_Exp2027.pdf':'https://drive.google.com/file/d/1EYjmbgRs6ei_vmc8BUjU3pyu_jbvthOE/view',
  'ID_Rajasekhar_VoterCard_UPD2998482.pdf':'https://drive.google.com/file/d/1UUYAHdHVgS9u32QZHTp2f02eWZSas0iX/view',
  'ID_Rajasekhar_Passport_E8690728.pdf':'https://drive.google.com/file/d/1gPfmvFIZm4zApC1A7IV5T34-lLv7l9C0/view',
  'ID_Vasundhara_Aadhaar_3372-3106-9560.pdf':'https://drive.google.com/file/d/1jbejNkB-OYBX8A8BHb1aM4gE5MpobS4M/view',
  'ID_Vasundhara_PANCard_BDXPD9514R.pdf':'https://drive.google.com/file/d/1ruGCkEi1yW_jSlDVnUlDHBnANdfdZjK_/view',
  'ID_Family_MarriageCertificate_2004.pdf':'https://drive.google.com/file/d/1MkSACFCqh9roXk2xXocN4AbNgKuq5yob/view',
  'ID_Josritha_Aadhaar_8316-6458-6848.pdf':'https://drive.google.com/file/d/1fl5nvQjsue0iJNKtNIgbl8G9RItbGjNa/view',
  'ID_Josritha_VoterCard_UPD3143468.pdf':'https://drive.google.com/file/d/1OtXG24X-YToAmzPYU7yscu4uQGblZkaK/view',
  'ID_Josritha_BirthCertificate_Hyderabad.pdf':'https://drive.google.com/file/d/120g5n9SX2FdxC7tz3m95Up9Un8usULuB/view',
  'ID_Jeevan_Aadhaar_6918-2946-7739.pdf':'https://drive.google.com/file/d/1COqNeg74Jfuhfsdxvs_DAgA9sjSaXzxf/view',
  'ID_Jeevan_BirthCertificate_Ongole.pdf':'https://drive.google.com/file/d/1s8CoNoYfje9MexQneumf4uR8JInIYvHj/view',
  'INS_Family_HealthInsurance_ICICI_Floater_2025-26.pdf':'https://drive.google.com/file/d/1NQkpcrCB8oO65hF0EfZ6walnxaOM3gP3/view',
  'INS_Rajasekhar_HealthInsurance_ICICI_Individual_2025-26.pdf':'https://drive.google.com/file/d/1BSbmyuAx9gkisZTwU0z_9wzShtfCIglV/view',
  'INS_Vasundhara_BikeInsurance_ICICI_TS08HJ8438_2025-26.pdf':'https://drive.google.com/file/d/1aQjBIBz4Vy7g51pH5A9Vg31aN77HfHDD/view',
  'INS_Vasundhara_CarInsurance_ICICI_AP27AK7873_2025-26.pdf':'https://drive.google.com/file/d/146sqYJ-8X-D3YNagE9aHhS6cyDsFd0ki/view',
    'EDU_Josritha_BTech_KLUniversity_Details.html':'https://rajasekharduggireddy1977.github.io/family_portal/EDU_Josritha_BTech_KLUniversity_Details.html',
    'EDU_Josritha_BTech_KLUniversity_Results.html':'https://rajasekharduggireddy1977.github.io/family_portal/EDU_Josritha_BTech_KLUniversity_Results.html',
  'EDU_Josritha_BTech_KLUniversity_Attendance_EvenSem_2025-26.pdf':'https://drive.google.com/file/d/1Rr6XyaUzqFGbMBvIknv9KT9wLkz3Djtz/view',
  'EDU_Josritha_Intermediate_BIEAndhraPradesh_2024.pdf':'https://drive.google.com/file/d/1y2bpdWAq9bFBTsfTW7l2F5MkugXUX0vP/view',
  'EDU_Josritha_SSC_CBSE_2022.pdf':'https://drive.google.com/file/d/1RRdofkMpd74rqpSlKWj1gZJibQQ-63lQ/view',
  'EDU_Rajasekhar_BTech_NagarjunaUniversity_1999.pdf':'https://drive.google.com/file/d/1rj4WydrdBw9cr-WyxQewh7ndwnjfjvbs/view',
  'EDU_Rajasekhar_Intermediate_BIEAndhraPradesh_1994.pdf':'https://drive.google.com/file/d/1E5_jEsSbC8Urc8B9MXdd2R45XPq0d9K5/view',
  'EDU_Rajasekhar_SSC_BSEAndhraPradesh_1992.pdf':'https://drive.google.com/file/d/1f5IUWzf87i8Nq03wWUmPsV5W6Q48zjrR/view',
  'FIN_Family_BankAccounts_Reference.txt':'https://drive.google.com/file/d/15iI3lgfZilTT_TTbaKcDsK3Ki_YMPGqh/view',
  'PROP_Rajasekhar_Flat807_OneCity_Hyderabad.jpg':'https://drive.google.com/file/d/1ODSZfHbBWP8WnKdh6cUqYiFZqKFefXv3/view',
  'PROP_Vasundhara_Flat403_MangamuruDonka_Ongole.pdf':'https://drive.google.com/file/d/1Y5jS9vElczc6TTEf5buzOB_WXTbbdMlk/view',
  'PROP_Vasundhara_ShopG5_SilverSpring_Ongole.pdf':'https://drive.google.com/file/d/1YnM3uIlGUP5N2TE7yDFAcfdiCl2v7VGf/view'
};

const EXPIRY_DOC_DAYS = {
  'INS_Family_HealthInsurance_ICICI_Floater_2025-26.pdf': 153,
  'INS_Rajasekhar_HealthInsurance_ICICI_Individual_2025-26.pdf': 155,
  'INS_Vasundhara_BikeInsurance_ICICI_TS08HJ8438_2025-26.pdf': 722,
  'INS_Vasundhara_CarInsurance_ICICI_AP27AK7873_2025-26.pdf': 116,
  'PROP_Vasundhara_Flat403_MangamuruDonka_Ongole.pdf': -12,
  'PROP_Vasundhara_ShopG5_SilverSpring_Ongole.pdf': -12
};

const FAM_SUMMARIES = {
  rajasekhar:{status:'6 sections · All docs ✓',statusColor:'var(--green)'},
  vasundhara:{status:'5 sections · 2 expiring ⚠',statusColor:'var(--orange)'},
  josritha:{status:'3 sections · Attendance 🚨',statusColor:'var(--red)'},
  jeevan:{status:'3 sections · Finance linked ✓',statusColor:'var(--green)'}
};

const SECTION_TABS = {
  rajasekhar:['identity','employment','education','finance','insurance','property'],
  vasundhara:['identity','vehicle','finance','insurance','property'],
  josritha:['identity','education','insurance','academics'],
  jeevan:['identity','finance','insurance']
};

const SECTION_META = {
  identity:{icon:'🪪',label:'Identity'},
  employment:{icon:'💼',label:'Employment'},
  education:{icon:'🎓',label:'Education'},
  finance:{icon:'🏦',label:'Finance'},
  insurance:{icon:'🩺',label:'Insurance'},
  property:{icon:'🏠',label:'Property'},
  vehicle:{icon:'🚗',label:'Vehicle'},
  academics:{icon:'📊',label:'Academics'}
};

const TYPE_COLORS = {Identity:'var(--blue2)',Finance:'var(--green)',Insurance:'var(--gold)',Education:'var(--purple)',Property:'var(--teal)',Vehicle:'var(--blue2)',Employment:'var(--gold)',Family:'var(--pink)'};
const TYPE_ICONS = {Identity:'🪪',Finance:'🏦',Insurance:'🛡️',Education:'🎓',Property:'🏠',Vehicle:'🚗',Employment:'💼',Family:'👨‍👩‍👧‍👦'};
const PERSON_GRAD = {Rajasekhar:'linear-gradient(135deg,#1a3254,#3b6fd4)',Vasundhara:'linear-gradient(135deg,#5b21b6,#9333ea)',Josritha:'linear-gradient(135deg,#9d174d,#ec4899)',Jeevan:'linear-gradient(135deg,#065f46,#0d9488)',Family:'linear-gradient(135deg,#374151,#6b7280)'};
const MEMBER_PHOTOS = {josritha:"data:image/jpeg;base64,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",rajasekhar:"data:image/jpeg;base64,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",vasundhara:"data:image/jpeg;base64,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",jeevan:"data:image/jpeg;base64,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"};
const PERSON_INIT = {Rajasekhar:'RR',Vasundhara:'VD',Josritha:'JD',Jeevan:'JV',Family:'F'};

// ═══════════════════════════════════════
// UTILS
// ═══════════════════════════════════════
function age(d){const dt=new Date(d);let a=TODAY.getFullYear()-dt.getFullYear();const mo=TODAY.getMonth()-dt.getMonth();if(mo<0||(mo===0&&TODAY.getDate()<dt.getDate()))a--;return a;}
function daysUntil(d){return Math.round((new Date(d)-TODAY)/86400000);}
function fmtDate(d){return new Date(d).toLocaleDateString('en-IN',{day:'numeric',month:'short',year:'numeric'});}
function expiryColor(d){if(d<0)return'var(--red)';if(d<=30)return'var(--red)';if(d<=90)return'var(--orange)';if(d<=180)return'var(--gold)';return'var(--green)';}
function expiryBadge(d){if(d<0)return'OVERDUE';if(d<=30)return'CRITICAL';if(d<=90)return'URGENT';if(d<=180)return'WARNING';return'OK';}
function expiryBadgeClass(d){if(d<0)return'sp-red';if(d<=30)return'sp-red';if(d<=90)return'sp-orange';if(d<=180)return'sp-gold';return'sp-green';}

function copyVal(val, btn) {
  navigator.clipboard.writeText(val).then(()=>{
    const t=document.getElementById('toast');t.classList.add('show');setTimeout(()=>t.classList.remove('show'),2200);
    if(btn){const o=btn.textContent;btn.textContent='✓';setTimeout(()=>btn.textContent=o,1400);}
  });
}

function updateHealthBadge() {
  if (typeof getBmStatus !== 'function' || typeof getHealthData !== 'function') return;
  const hData = getHealthData();
  let hasCritical = false;
  Object.entries(HEALTH_MEMBER_META || {}).forEach(([id, m]) => {
    const mData = hData[id]; if (!mData) return;
    (BM_DEFS || []).forEach(def => {
      const val = mData.markers[def.id]; if (val == null) return;
      if (getBmStatus(def, val, m.gender) === 'high' || getBmStatus(def, val, m.gender) === 'low') hasCritical = true;
    });
  });
  const d=document.getElementById('health-alert-dot'),ds=document.getElementById('health-alert-dot-snav');
  if(d)  d.style.display  = hasCritical?'block':'none';
  if(ds) ds.style.display = hasCritical?'block':'none';
}
function showToast(msg='✓ Copied to clipboard'){
  const t=document.getElementById('toast');t.textContent=msg;t.classList.add('show');setTimeout(()=>t.classList.remove('show'),2200);
}

// ═══════════════════════════════════════
// CLOCK
// ═══════════════════════════════════════
function updateClock(){const n=new Date();const h=String(n.getHours()).padStart(2,'0');const m=String(n.getMinutes()).padStart(2,'0');const s=String(n.getSeconds()).padStart(2,'0');const el=document.getElementById('clock');if(el)el.textContent=h+':'+m+':'+s;}
updateClock();setInterval(updateClock,1000);

// ═══════════════════════════════════════
// NAVIGATION
// ═══════════════════════════════════════
let currentPage = 'dashboard';
let currentMember = 'rajasekhar';
let currentTab = 'identity';
let currentExpTab = 'docs';

function goPage(page) {
  if(currentPage === page && page !== 'members') return;

  const _nav = document.getElementById('bottom-nav');
  if (_nav) { _nav.style.transition = ''; _nav.style.transform = ''; _nav.style.bottom = ''; }
  if (document.activeElement && typeof document.activeElement.blur === 'function') {
    document.activeElement.blur();
  }

  // ── Directional slide transition ──
  const prevPage = currentPage;
  const prevIdx = PAGE_ORDER.indexOf(prevPage);
  const nextIdx = PAGE_ORDER.indexOf(page);
  const goingForward = nextIdx > prevIdx;
  const prevEl = document.getElementById('page-' + prevPage);
  const nextEl = document.getElementById('page-' + page);
  const doAnimate = prevEl && nextEl && prevIdx >= 0 && nextIdx >= 0 && prevPage !== page;

  if (doAnimate) {
    prevEl.classList.remove('active');
    prevEl.classList.add(goingForward ? 'slide-out-left' : 'slide-out-right');
    nextEl.classList.add(goingForward ? 'slide-in-right' : 'slide-in-left');
    nextEl.style.display = 'block';
    setTimeout(function() {
      prevEl.classList.remove('slide-out-left','slide-out-right');
      prevEl.style.display = '';
      nextEl.classList.remove('slide-in-right','slide-in-left');
      nextEl.classList.add('active');
    }, 290);
  } else {
    document.querySelectorAll('.page').forEach(p => {
      p.classList.remove('active','slide-in-right','slide-in-left','slide-out-left','slide-out-right');
    });
    if(nextEl) nextEl.classList.add('active');
  }

  currentPage = page;
  document.querySelectorAll('.bnav-item').forEach(b=>b.classList.remove('active'));
  const navEl = document.getElementById('bnav-'+page);
  if(navEl) navEl.classList.add('active');
  syncSidebarNav(page);

  var canvas = document.getElementById('aura-canvas');
  if (canvas) canvas.style.display = (page === 'dashboard') ? 'block' : 'none';
  if (page !== 'dashboard') window.scrollTo(0,0);

  if(page==='members')   { setTimeout(()=>applyGmMembers(),60); }
  if(page==='expiry')    { setTimeout(()=>{ initExpiry(); animateExpBars(); },80); }
  if(page==='calendar')  { setTimeout(()=>{ initCalendar(); applyGmCalendar(); },80); }
  if(page==='health')    { setTimeout(()=>applyGmHealth(),80); }
  if(page==='documents') { setTimeout(()=>applyGmDocuments(),80); }
  if(page==='dashboard') { setTimeout(()=>applyGmDashboard(),60); }
}

// ═══════════════════════════════════════════════════
// IDEA A — SWIPE GESTURE NAVIGATION
// ═══════════════════════════════════════════════════
const PAGE_ORDER = ['dashboard','members','documents','expiry','calendar','health','search'];
let swipeTouchX=0, swipeTouchY=0, swipeTarget=null;
let swipeHintTimer=null;

function showSwipeHint(msg) {
  const el=document.getElementById('swipe-hint');
  if(!el) return;
  el.textContent=msg;
  el.classList.add('show');
  clearTimeout(swipeHintTimer);
  swipeHintTimer=setTimeout(()=>el.classList.remove('show'),1800);
}

// Returns true if el or any ancestor scrolls horizontally
function isInsideHScroll(el) {
  while(el && el !== document.body) {
    const st = getComputedStyle(el);
    const ox = st.overflowX;
    if((ox==='auto'||ox==='scroll') && el.scrollWidth > el.clientWidth+4) return true;
    // Also block swipe inside any open sheet / modal / input / select
    if(el.matches('input,select,textarea')) return true;
    if(el.classList.contains('hr-sheet-card') || el.classList.contains('ha-sheet-card') ||
       el.classList.contains('bm-sheet-card') || el.classList.contains('sidebar-card')) return true;
    el=el.parentElement;
  }
  return false;
}

document.getElementById('content')?.addEventListener('touchstart', e=>{
  swipeTouchX=e.touches[0].clientX;
  swipeTouchY=e.touches[0].clientY;
  swipeTarget=e.target;
},{passive:true});

document.getElementById('content')?.addEventListener('touchend', e=>{
  const dx=e.changedTouches[0].clientX-swipeTouchX;
  const dy=e.changedTouches[0].clientY-swipeTouchY;
  // Ignore: not horizontal, too short, or started inside a scrollable/interactive area
  if(Math.abs(dx)<52) return;
  if(Math.abs(dy)>Math.abs(dx)*0.6) return;
  if(swipeTarget && isInsideHScroll(swipeTarget)) return;
  // Also ignore if any sheet is currently open
  const sheets=['hr-sheet','ha-sheet','bm-sheet','sidebar-nav','gemini-key-sheet'];
  if(sheets.some(id=>{ const el=document.getElementById(id); return el&&!el.classList.contains('hidden'); })) return;
  const idx=PAGE_ORDER.indexOf(currentPage);
  if(dx<-52 && idx<PAGE_ORDER.length-1) {
    const next=PAGE_ORDER[idx+1];
    goPage(next);
    showSwipeHint('→ '+next.charAt(0).toUpperCase()+next.slice(1));
  } else if(dx>52 && idx>0) {
    const prev=PAGE_ORDER[idx-1];
    goPage(prev);
    showSwipeHint('← '+prev.charAt(0).toUpperCase()+prev.slice(1));
  }
},{passive:true});

// Long-press any .pressable to copy its text content
let longPressTimer=null;
document.addEventListener('touchstart', e=>{
  const el=e.target.closest('[data-copy]');
  if(!el) return;
  longPressTimer=setTimeout(()=>{
    const val=el.dataset.copy;
    if(val){navigator.clipboard?.writeText(val).catch(()=>{});showToast('✓ Copied: '+val);}
    el.classList.add('lp-flash');
    setTimeout(()=>el.classList.remove('lp-flash'),600);
  },600);
},{passive:true});
document.addEventListener('touchend',()=>clearTimeout(longPressTimer),{passive:true});
document.addEventListener('touchmove',()=>clearTimeout(longPressTimer),{passive:true});

function goDocsFiltered(personName) {
  goPage('documents');
  setTimeout(()=>{
    // Map shortName to person chip value
    const personMap = {'Rajasekhar':'Rajasekhar','Vasundhara':'Vasundhara','Josritha':'Josritha','Jeevan':'Jeevan'};
    const person = personMap[personName] || personName;
    setDocPerson(person);
  }, 80);
}

function goSearch(){goPage('search');setTimeout(()=>{const inp=document.getElementById('search-input');if(inp)inp.focus();},100);}

function goMemberSection(memberId, tab) {
  currentMember = memberId;
  currentTab = tab;
  goPage('members');
  setTimeout(()=>showMemberDetail(memberId, tab),50);
}

// ═══════════════════════════════════════════════════
// IDEA D — WIDGET HOME SCREEN
// ═══════════════════════════════════════════════════
// FEATURE 05 — EMERGENCY QUICK-ACCESS CARD
// ═══════════════════════════════════════
const EMG_CONTACTS = [
  { name:'Rajasekhar Duggireddy', role:'Father · Head of Family',  icon:'👨', phone:'+91 96406 56595', msg:true },
  { name:'Vasundhara Duggireddy', role:'Mother · Spouse',          icon:'👩', phone:'+91 96529 48966', msg:true },
  { name:'Josritha Duggireddy',   role:'Daughter · KLH Campus',    icon:'👧', phone:'', msg:false },
  { name:'Jeevan Duggireddy',     role:'Son · Student',            icon:'👦', phone:'', msg:false },
];
const EMG_SERVICES = [
  { cls:'emg-police',    ico:'👮', num:'100', lbl:'Police' },
  { cls:'emg-ambulance', ico:'🚑', num:'108', lbl:'Ambulance' },
  { cls:'emg-fire',      ico:'🚒', num:'101', lbl:'Fire' },
];

function buildEmgCard() {
  const collapsed = localStorage.getItem('emg_collapsed') !== '0'; // default collapsed
  let contacts = EMG_CONTACTS.map(c => `
    <div class="emg-contact pressable">
      <div class="emg-av">${c.icon}</div>
      <div class="emg-info">
        <div class="emg-name">${c.name}</div>
        <div class="emg-role">${c.role}</div>
      </div>
      <div class="emg-actions">
        <a class="emg-btn call" href="tel:${c.phone.replace(/\s/g,'')}" title="Call">📞</a>
        ${c.msg ? `<a class="emg-btn msg" href="sms:${c.phone.replace(/\s/g,'')}" title="Message">💬</a>` : ''}
      </div>
    </div>`).join('');
  let services = EMG_SERVICES.map(s => `
    <a class="emg-svc ${s.cls} pressable" href="tel:${s.num}">
      <div class="emg-svc-ico">${s.ico}</div>
      <div class="emg-svc-num">${s.num}</div>
      <div class="emg-svc-lbl">${s.lbl}</div>
    </a>`).join('');
  return `
  <div class="emg-card${collapsed?' emg-collapsed':''}" id="emg-card">
    <div class="emg-hdr pressable" onclick="toggleEmgCard()">
      <div class="emg-hdr-left">
        <div class="emg-hdr-icon">🆘</div>
        <div>
          <div class="emg-hdr-title">Emergency Contacts</div>
          <div class="emg-hdr-sub">${collapsed ? 'Tap to expand' : 'Family & emergency services'}</div>
        </div>
      </div>
      <div class="emg-chevron${collapsed?'':' open'}">›</div>
    </div>
    <div class="emg-body">
      <div class="emg-contacts">${contacts}</div>
      <div class="emg-services">${services}</div>
    </div>
  </div>`;
}

function toggleEmgCard() {
  const card = document.getElementById('emg-card');
  if (!card) return;
  const isCollapsed = card.classList.toggle('emg-collapsed');
  localStorage.setItem('emg_collapsed', isCollapsed ? '1' : '0');
  const chevron = card.querySelector('.emg-chevron');
  if (chevron) chevron.classList.toggle('open', !isCollapsed);
  const sub = card.querySelector('.emg-hdr-sub');
  if (sub) sub.textContent = isCollapsed ? 'Tap to expand' : 'Family & emergency services';
}

// ═══════════════════════════════════════
// FEATURE 06 — FAMILY CALENDAR SYNC
// ═══════════════════════════════════════
const CAL_COLORS = {
  health:'#ff4f4f', travel:'#4f7fff', education:'#a78bfa',
  finance:'#f0b429', government:'#ff8c42', family:'#3ecf8e',
  birthday:'#f472b6', other:'#8b93a8'
};
const CAL_CAT_ICONS = {
  health:'🏥', travel:'✈️', education:'🎓', finance:'💰',
  government:'🏛️', family:'👨‍👩‍👧‍👦', birthday:'🎂', other:'📌'
};
const MEMBER_COLORS = {
  Rajasekhar:'#4f7fff', Vasundhara:'#f472b6',
  Josritha:'#a78bfa', Jeevan:'#3ecf8e', all:'#8b93a8'
};

// Seed events (stored in localStorage key 'fp_cal_events')
// SEED_VER: v2 — added insurance/property tracking events for Rajasekhar
const SEED_VER = 'v2';
const SEED_EVENTS = [
  { id:'e1', title:"Rajasekhar Passport Renewal",          date:"2026-04-15", start:"10:00", end:"12:00", cat:"government", color:"#ff8c42", members:["Rajasekhar"], notes:"Bring 2 photos + old passport" },
  { id:'e2', title:"Josritha Semester Exams Begin",        date:"2026-04-20", start:"09:00", end:"",      cat:"education",  color:"#a78bfa", members:["Josritha"],   notes:"KLH Campus" },
  { id:'e3', title:"Family Health Check-up",               date:"2026-03-18", start:"08:30", end:"11:00", cat:"health",     color:"#ff4f4f", members:["Rajasekhar","Vasundhara"], notes:"Star Hospitals, Hyderabad" },
  { id:'e4', title:"Jeevan Birthday 🎂",                   date:"2026-08-22", start:"",      end:"",      cat:"birthday",   color:"#f472b6", members:["all"],        notes:"Plan family celebration" },
  { id:'e5', title:"Vasundhara Visa Appointment",          date:"2026-05-10", start:"14:00", end:"15:30", cat:"travel",     color:"#4f7fff", members:["Vasundhara"], notes:"US Consulate, Hyderabad" },
  { id:'e6', title:"Income Tax Filing Deadline",           date:"2026-07-31", start:"",      end:"",      cat:"finance",    color:"#f0b429", members:["Rajasekhar"], notes:"Submit via CA" },
  // ── Insurance & Property tracking events — Rajasekhar (default owner) ──
  { id:'tr_prop_flat403',  title:"🏘️ Property Tax – Flat 403",            date:"2026-02-20", start:"", end:"", cat:"finance", color:"#ff4f4f", members:["Rajasekhar"], notes:"Assessment 1035037996 · Mangamuru Donka, Ongole · Pay at cdma.ap.gov.in" },
  { id:'tr_prop_shopg5',   title:"🏬 Property Tax – Shop G5",             date:"2026-02-20", start:"", end:"", cat:"finance", color:"#ff4f4f", members:["Rajasekhar"], notes:"Assessment 1035038052 · Silver Spring Apts, Ongole · Pay at cdma.ap.gov.in" },
  { id:'tr_car_ins',       title:"🚗 Car Insurance Renewal",              date:"2026-06-28", start:"", end:"", cat:"finance", color:"#f0b429", members:["Rajasekhar"], notes:"Hyundai i10 · AP27AK7873 · Policy 3001/103498197/10/000 · ICICI Lombard" },
  { id:'tr_health_fam',    title:"👨‍👩‍👧‍👦 Family Health Insurance Renewal",  date:"2026-08-04", start:"", end:"", cat:"health",  color:"#4f7fff", members:["Rajasekhar"], notes:"ICICI Lombard Family Floater · Policy 4193i/APRN/400529214/00/000 · ₹25,812" },
  { id:'tr_health_ind',    title:"🏥 Individual Health Insurance Renewal", date:"2026-08-06", start:"", end:"", cat:"health",  color:"#4f7fff", members:["Rajasekhar"], notes:"ICICI Lombard · Rajasekhar · Policy 4128i/HSNR/92094505/10/000 · ₹21,502" },
  { id:'tr_dl',            title:"🪪 Driving Licence Expiry",             date:"2027-01-20", start:"", end:"", cat:"government", color:"#ff8c42", members:["Rajasekhar"], notes:"DLFAP62729122008 · Renew at Sarathi portal" },
  { id:'tr_bike_ins',      title:"🛵 Bike Insurance Renewal",             date:"2028-02-24", start:"", end:"", cat:"finance", color:"#3ecf8e", members:["Rajasekhar"], notes:"Honda Activa 125 · TS08HJ8438 · Policy 3005/430080806/00/000 · ICICI Lombard" },
];

let calCurrentDate = new Date();
let calSelectedDate = null;
let calFilter = 'all'; // member filter
let calSelectedColor = '#4f7fff';
let calEditId = null;

function getCalEvents() {
  let events;
  try {
    const stored = localStorage.getItem('fp_cal_events');
    events = stored ? JSON.parse(stored) : null;
  } catch(e) { events = null; }

  if (!events) {
    // First run — seed with correct data
    localStorage.setItem('fp_cal_events', JSON.stringify(SEED_EVENTS));
    localStorage.setItem('fp_cal_seed_ver', SEED_VER);
    return JSON.parse(JSON.stringify(SEED_EVENTS));
  }

  // Seed version migration — inject new tracking events if not yet present
  const storedSeedVer = localStorage.getItem('fp_cal_seed_ver');
  if (storedSeedVer !== SEED_VER) {
    const existingIds = new Set(events.map(e => e.id));
    const newSeedEvents = SEED_EVENTS.filter(e => !existingIds.has(e.id));
    if (newSeedEvents.length) events = [...events, ...newSeedEvents];
    localStorage.setItem('fp_cal_events', JSON.stringify(events));
    localStorage.setItem('fp_cal_seed_ver', SEED_VER);
  }

  // Migrate any stored events that still carry old wrong member names
  const nameMap = { 'Sreedevi':'Vasundhara', 'Joshita':'Jeevan', 'Joshitha':'Jeevan' };
  let migrated = false;
  events = events.map(ev => {
    const fixedMembers = ev.members.map(m => {
      if (nameMap[m]) { migrated = true; return nameMap[m]; }
      return m;
    });
    return { ...ev, members: fixedMembers };
  });
  if (migrated) localStorage.setItem('fp_cal_events', JSON.stringify(events));
  return events;
}

function saveCalEvents(events) {
  localStorage.setItem('fp_cal_events', JSON.stringify(events));
}

function initCalendar() {
  renderCalGrid();
  renderCalChips();
  renderCalEvents(null);
}

function calNav(dir) {
  calCurrentDate = new Date(calCurrentDate.getFullYear(), calCurrentDate.getMonth() + dir, 1);
  renderCalGrid();
  renderCalEvents(calSelectedDate);
}

function renderCalGrid() {
  const year = calCurrentDate.getFullYear();
  const month = calCurrentDate.getMonth();
  const label = calCurrentDate.toLocaleDateString('en-IN', { month:'long', year:'numeric' });
  document.getElementById('cal-month-label').textContent = label;

  const today = new Date();
  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month+1, 0).getDate();
  const daysInPrev = new Date(year, month, 0).getDate();

  const events = getCalEvents();
  // Build dot map: date-string → [colors]
  const dotMap = {};
  events.forEach(ev => {
    if (!dotMap[ev.date]) dotMap[ev.date] = [];
    dotMap[ev.date].push(ev.color);
  });

  let html = '';
  // Prev month cells
  for (let i = firstDay - 1; i >= 0; i--) {
    const d = daysInPrev - i;
    const ds = `${year}-${String(month).padStart(2,'0')}-${String(d).padStart(2,'0')}`;
    html += `<div class="cal-cell other-month"><div class="cal-day-num">${d}</div></div>`;
  }
  // Current month
  for (let d = 1; d <= daysInMonth; d++) {
    const ds = `${year}-${String(month+1).padStart(2,'0')}-${String(d).padStart(2,'0')}`;
    const isToday = today.getFullYear()===year && today.getMonth()===month && today.getDate()===d;
    const isSel = calSelectedDate === ds;
    const dots = (dotMap[ds]||[]).slice(0,3).map(c=>`<div class="cal-dot" style="background:${c}"></div>`).join('');
    html += `<div class="cal-cell${isToday?' today':''}${isSel?' selected':''}" onclick="selectCalDate('${ds}')">
      <div class="cal-day-num">${d}</div>
      ${dots?`<div class="cal-dot-row">${dots}</div>`:''}
    </div>`;
  }
  // Next month fill
  const total = firstDay + daysInMonth;
  const remaining = total % 7 === 0 ? 0 : 7 - (total % 7);
  for (let d = 1; d <= remaining; d++) {
    html += `<div class="cal-cell other-month"><div class="cal-day-num">${d}</div></div>`;
  }
  document.getElementById('cal-cells').innerHTML = html;
}

function selectCalDate(ds) {
  calSelectedDate = calSelectedDate === ds ? null : ds;
  renderCalGrid();
  renderCalEvents(calSelectedDate);
}

function renderCalChips() {
  const members = ['all','Rajasekhar','Vasundhara','Josritha','Jeevan'];
  const labels = { all:'🌐 All' };
  let html = members.map(m => {
    const col = MEMBER_COLORS[m] || '#8b93a8';
    const lbl = labels[m] || m;
    return `<div class="cal-chip${calFilter===m?' active':''}" onclick="setCalFilter('${m}')">
      <div class="cal-chip-dot" style="background:${col}"></div>${lbl}
    </div>`;
  }).join('');
  document.getElementById('cal-chips').innerHTML = html;
}

function setCalFilter(m) {
  calFilter = m;
  renderCalChips();
  renderCalEvents(calSelectedDate);
}

function renderCalEvents(selectedDate) {
  const events = getCalEvents();
  let filtered = events.filter(ev => {
    if (calFilter !== 'all') {
      if (!ev.members.includes(calFilter) && !ev.members.includes('all')) return false;
    }
    if (selectedDate) return ev.date === selectedDate;
    return true;
  });
  // Sort by date
  filtered.sort((a,b) => a.date.localeCompare(b.date));

  const titleEl = document.getElementById('cal-events-title');
  if (selectedDate) {
    const d = new Date(selectedDate + 'T12:00:00');
    titleEl.textContent = d.toLocaleDateString('en-IN',{weekday:'long',month:'long',day:'numeric'});
  } else {
    titleEl.textContent = 'Upcoming Events';
  }

  if (!filtered.length) {
    document.getElementById('cal-events-list').innerHTML = `<div class="cal-no-events"><span>📭</span>${selectedDate?'No events on this day':'No events found'}</div>`;
    return;
  }

  const today = new Date().toISOString().slice(0,10);
  let html = filtered.map(ev => {
    const d = new Date(ev.date + 'T12:00:00');
    const dStr = d.toLocaleDateString('en-IN',{month:'short',day:'numeric',weekday:'short'});
    const isPast = ev.date < today;
    const avatars = ev.members.slice(0,3).map(m => {
      const icons = {Rajasekhar:'👨',Vasundhara:'👩',Josritha:'👧',Jeevan:'👦',all:'👨‍👩‍👧‍👦'};
      return icons[m]||'👤';
    }).join('');
    const catIcon = CAL_CAT_ICONS[ev.cat]||'📌';
    const time = ev.start ? `${ev.start}${ev.end?'–'+ev.end:''}` : 'All day';
    return `<div class="cal-event-item pressable" onclick="editCalEvent('${ev.id}')" style="opacity:${isPast?.6:1}">
      <div class="cal-event-bar" style="background:${ev.color}"></div>
      <div class="cal-event-body">
        <div class="cal-event-title">${catIcon} ${ev.title}</div>
        <div class="cal-event-meta">${dStr} · ${time}</div>
        ${ev.notes?`<div class="cal-event-tags"><span class="cal-event-tag">📝 ${ev.notes.slice(0,40)}${ev.notes.length>40?'…':''}</span></div>`:''}
      </div>
      <div class="cal-event-right">
        <div class="cal-event-time">${isPast?'<span style="color:var(--text3)">Past</span>':''}</div>
        <div class="cal-event-avatar">${avatars}</div>
      </div>
    </div>`;
  }).join('');
  document.getElementById('cal-events-list').innerHTML = html;
}

function openCalSheet(prefillDate) {
  calEditId = null;
  document.getElementById('cal-sheet-title').textContent = 'Add Event';
  document.getElementById('calf-title').value = '';
  document.getElementById('calf-date').value = prefillDate || calSelectedDate || new Date().toISOString().slice(0,10);
  document.getElementById('calf-start').value = '';
  document.getElementById('calf-end').value = '';
  document.getElementById('calf-cat').value = 'other';
  document.getElementById('calf-notes').value = '';
  calSelectedColor = '#4f7fff';
  document.querySelectorAll('.cal-color-swatch').forEach(s => {
    s.classList.toggle('active', s.dataset.color === calSelectedColor);
  });
  document.querySelectorAll('.cal-member-chip').forEach(c => {
    c.classList.toggle('active', c.dataset.member === 'all');
  });
  // Hide delete button when adding new
  const delBtn = document.getElementById('cal-delete-btn');
  if(delBtn){ delBtn.style.display='none'; delBtn.classList.remove('confirm'); delBtn.textContent='🗑 Delete'; }
  var _sy=window.scrollY||window.pageYOffset;document.body.dataset.scrollY=_sy;document.body.style.top='-'+_sy+'px';document.body.classList.add('modal-open');
  document.getElementById('cal-sheet').classList.remove('hidden');
}

function closeCalSheet() {
  document.getElementById('cal-sheet').classList.add('hidden');
  var _sy2=parseInt(document.body.dataset.scrollY||'0',10);document.body.classList.remove('modal-open');document.body.style.top='';window.scrollTo(0,_sy2);
  // Reset delete button state
  const delBtn = document.getElementById('cal-delete-btn');
  if(delBtn){ delBtn.classList.remove('confirm'); delBtn.textContent='🗑 Delete'; }
}

let _deleteConfirmTimer = null;
function confirmDeleteCalEvent() {
  const delBtn = document.getElementById('cal-delete-btn');
  if (!delBtn) return;
  if (delBtn.classList.contains('confirm')) {
    // Second tap — execute delete
    clearTimeout(_deleteConfirmTimer);
    deleteCalEvent(calEditId);
  } else {
    // First tap — arm the button
    delBtn.classList.add('confirm');
    delBtn.textContent = '⚠️ Confirm';
    _deleteConfirmTimer = setTimeout(() => {
      delBtn.classList.remove('confirm');
      delBtn.textContent = '🗑 Delete';
    }, 3000);
  }
}

function deleteCalEvent(id) {
  if (!id) return;
  const events = getCalEvents().filter(e => e.id !== id);
  saveCalEvents(events);
  closeCalSheet();
  renderCalGrid();
  renderCalEvents(calSelectedDate);
  const calMiniBody = document.getElementById('cal-mini-body');
  if (calMiniBody) calMiniBody.innerHTML = buildCalMiniWidget();
  showToast('🗑 Event deleted');
}

function editCalEvent(id) {
  const events = getCalEvents();
  const ev = events.find(e => e.id === id);
  if (!ev) return;
  calEditId = id;
  document.getElementById('cal-sheet-title').textContent = 'Edit Event';
  document.getElementById('calf-title').value = ev.title;
  document.getElementById('calf-date').value = ev.date;
  document.getElementById('calf-start').value = ev.start||'';
  document.getElementById('calf-end').value = ev.end||'';
  document.getElementById('calf-cat').value = ev.cat||'other';
  document.getElementById('calf-notes').value = ev.notes||'';
  calSelectedColor = ev.color;
  document.querySelectorAll('.cal-color-swatch').forEach(s => {
    s.classList.toggle('active', s.dataset.color === ev.color);
  });
  document.querySelectorAll('.cal-member-chip').forEach(c => {
    c.classList.toggle('active', ev.members.includes(c.dataset.member) || (c.dataset.member==='all' && ev.members.includes('all')));
  });
  // Show delete button when editing
  const delBtn = document.getElementById('cal-delete-btn');
  if(delBtn){ delBtn.style.display=''; delBtn.classList.remove('confirm'); delBtn.textContent='🗑 Delete'; }
  var _sy=window.scrollY||window.pageYOffset;document.body.dataset.scrollY=_sy;document.body.style.top='-'+_sy+'px';document.body.classList.add('modal-open');
  document.getElementById('cal-sheet').classList.remove('hidden');
}

function saveCalEvent() {
  const title = document.getElementById('calf-title').value.trim();
  const date = document.getElementById('calf-date').value;
  if (!title || !date) { showToast('⚠️ Title and date are required'); return; }
  const start = document.getElementById('calf-start').value;
  const end = document.getElementById('calf-end').value;
  const cat = document.getElementById('calf-cat').value;
  const notes = document.getElementById('calf-notes').value.trim();
  const members = [...document.querySelectorAll('.cal-member-chip.active')].map(c => c.dataset.member);

  const events = getCalEvents();
  if (calEditId) {
    const idx = events.findIndex(e => e.id === calEditId);
    if (idx > -1) events[idx] = {...events[idx], title, date, start, end, cat, color:calSelectedColor, members, notes};
  } else {
    events.push({ id:'e'+Date.now(), title, date, start, end, cat, color:calSelectedColor, members, notes });
  }
  saveCalEvents(events);
  closeCalSheet();
  renderCalGrid();
  renderCalEvents(calSelectedDate);
  showToast(calEditId ? '✏️ Event updated' : '📅 Event added');
  // Refresh dashboard cal widget
  buildCalMiniWidget && buildCalMiniWidget();
}

function selectCalColor(color, el) {
  calSelectedColor = color;
  document.querySelectorAll('.cal-color-swatch').forEach(s => s.classList.remove('active'));
  el.classList.add('active');
}

function toggleCalMember(el) {
  if (el.dataset.member === 'all') {
    document.querySelectorAll('.cal-member-chip').forEach(c => c.classList.remove('active'));
    el.classList.add('active');
  } else {
    document.querySelector('.cal-member-chip[data-member="all"]').classList.remove('active');
    el.classList.toggle('active');
    if (![...document.querySelectorAll('.cal-member-chip')].some(c => c.classList.contains('active'))) {
      document.querySelector('.cal-member-chip[data-member="all"]').classList.add('active');
    }
  }
}

// Build mini cal widget for dashboard
function buildCalMiniWidget() {
  const events = getCalEvents();
  const today = new Date().toISOString().slice(0,10);
  const activeName = (activePortalMember !== 'all') ? GM_META[activePortalMember].label : null;
  let upcoming = events.filter(ev => {
    if (ev.date < today) return false;
    if (activeName) return ev.members.includes(activeName) || ev.members.includes('all');
    return true;
  }).sort((a,b) => a.date.localeCompare(b.date)).slice(0,4);
  if (!upcoming.length) return `<div class="cal-mini-empty">No upcoming events${activeName?' for '+activeName:''}</div>`;
  const icons = {Rajasekhar:'👨',Vasundhara:'👩',Josritha:'👧',Jeevan:'👦',all:'👨‍👩‍👧‍👦'};
  return upcoming.map(ev => {
    const d = new Date(ev.date + 'T12:00:00');
    const dStr = d.toLocaleDateString('en-IN',{month:'short',day:'numeric'});
    const av = icons[ev.members[0]]||'📅';
    return `<div class="cal-mini-event pressable" onclick="goPage('calendar')">
      <div class="cal-mini-bar" style="background:${ev.color}"></div>
      <div class="cal-mini-body">
        <div class="cal-mini-title">${ev.title}</div>
        <div class="cal-mini-meta">${dStr}${ev.start?' · '+ev.start:''}</div>
      </div>
      <div class="cal-mini-av">${av}</div>
    </div>`;
  }).join('');
}

const WIDGET_DEFS = {
  hero:       { id:'hero',       icon:'🌟', name:'Hero Briefing',       desc:'Live status summary with greeting' },
  priority:   { id:'priority',   icon:'🔔', name:'Priority Strip',      desc:'Scrollable chips — items due soon' },
  family:     { id:'family',     icon:'👨‍👩‍👧‍👦', name:'Family at a Glance',  desc:'Adaptive member cards' },
  timeline:   { id:'timeline',   icon:'📆', name:'Unified Timeline',    desc:'All upcoming events in one view' },
  health_mini:{ id:'health_mini',icon:'💊', name:'Family Health',       desc:'Health scores & abnormal markers' },
  health_pulse:{ id:'health_pulse',icon:'❤️', name:'Health Pulse Row',  desc:'Score rings for all 4 members' },
  urgent:     { id:'urgent',     icon:'⏳', name:'Urgent Items',        desc:'Calendar events due within 10 days' },
  cal_mini:   { id:'cal_mini',   icon:'📅', name:'Family Calendar',     desc:'Upcoming family events at a glance' },
  emergency:  { id:'emergency',  icon:'🆘', name:'Emergency Contacts',  desc:'One-tap family contacts & services' },
  actions:    { id:'actions',    icon:'⚡', name:'Quick Actions',       desc:'One-tap shortcuts to key tasks' },
  att_severity:{ id:'att_severity',icon:'📚', name:'Attendance Severity', desc:'Josritha weekly attendance risk by subject' },
  ai_meals:   { id:'ai_meals',   icon:'🍛', name:'AI Meal Planner',     desc:'Claude-generated weekly Indian meal plans' },
  ai_briefing2:{ id:'ai_briefing2',icon:'✨', name:'AI Daily Briefing',  desc:'On-demand AI morning summary with interest categories' },
  grocery:    { id:'grocery',    icon:'🛒', name:'Family Grocery & Tasks', desc:'Shared checklist for grocery and family tasks' },
  vehicle:    { id:'vehicle',    icon:'🚗', name:'Vehicle Service',     desc:'Track service history and next due for family vehicles' },
  photos:     { id:'photos',     icon:'📸', name:'Memory Wall',         desc:'Family photo memories pinboard' },
  bills:      { id:'bills',      icon:'💸', name:'Bills & Reminders',   desc:'Monthly bill tracker with paid/unpaid toggle' },
  att_risk:   { id:'att_risk',   icon:'📊', name:'Attendance Risk Meter', desc:'Live subject-wise attendance % bar for Josritha' },
  finance:    { id:'finance',    icon:'💳', name:'Finance Sync',          desc:'Google Sheets transaction feed with spend summary' },
  bank_txns:  { id:'bank_txns',  icon:'🏦', name:'Bank Transactions',    desc:'Multi-bank statement viewer from scraped JSON data' },
};
const DEFAULT_WIDGETS=['hero','att_severity','ai_briefing2','priority','family','grocery','timeline','bank_txns','vehicle','health_pulse','bills','emergency','actions'];
let widgetOrder=[...DEFAULT_WIDGETS];
let editMode=false;

const WIDGET_VERSION = 'v9';
function loadWidgetOrder() {
  try {
    const ver = localStorage.getItem('fp_widgets_ver');
    const s = localStorage.getItem('fp_widgets');
    if (s && ver === WIDGET_VERSION) {
      const stored = JSON.parse(s);
      // Merge: add any new widgets from DEFAULT not yet in stored order
      const merged = [...stored];
      DEFAULT_WIDGETS.forEach(w => { if (!merged.includes(w)) merged.push(w); });
      widgetOrder = merged;
      return;
    }
  } catch(e) {}
  widgetOrder = [...DEFAULT_WIDGETS];
  localStorage.setItem('fp_widgets_ver', WIDGET_VERSION);
}
function saveWidgetOrder() {
  try { localStorage.setItem('fp_widgets',JSON.stringify(widgetOrder)); } catch(e){}
}

// ── Touch-drag state ──────────────────────────────────────────────
let tdSrcIdx=null;       // index of item being dragged
let tdGhost=null;        // cloned ghost element
let tdOffX=0,tdOffY=0;  // finger offset within the item
let tdLastTarget=null;   // last drop-target item

function renderWidgets() {
  const container=document.getElementById('widget-container');
  if(!container) return;
  container.innerHTML='';
  widgetOrder.forEach((wid,i)=>{
    const def=WIDGET_DEFS[wid];
    if(!def) return;
    const item=document.createElement('div');
    item.className='widget-item'+(editMode?' edit-mode':'');
    item.dataset.wid=wid;
    item.dataset.idx=i;

    // ── Delete button ──
    const del=document.createElement('div');
    del.className='w-del'; del.textContent='−';
    del.onclick=()=>removeWidget(wid);
    item.appendChild(del);

    // ── Drag handle (touch-drag only, no HTML5 drag) ──
    const drag=document.createElement('div');
    drag.className='w-drag'; drag.textContent='⠿';
    drag.setAttribute('aria-label','Drag to reorder');

    // Touch events on the handle
    drag.addEventListener('touchstart', e=>{
      if(!editMode) return;
      e.preventDefault();
      e.stopPropagation();
      tdStartDrag(e, item, i);
    }, {passive:false});

    // Mouse fallback for desktop
    drag.addEventListener('mousedown', e=>{
      if(!editMode) return;
      tdStartDragMouse(e, item, i);
    });

    item.appendChild(drag);

    // ── Widget body ──
    const body=document.createElement('div');
    body.innerHTML=buildWidgetHTML(wid);
    item.appendChild(body);

    container.appendChild(item);
  });

  // Global touch/mouse move & end — attached once on document
  initTouchDragListeners();
  initWidgetDynamic();
}

// Attach global listeners once
let tdListenersAttached=false;
function initTouchDragListeners() {
  if(tdListenersAttached) return;
  tdListenersAttached=true;

  document.addEventListener('touchmove', e=>{
    if(tdSrcIdx===null) return;
    e.preventDefault();
    const t=e.touches[0];
    tdMoveDrag(t.clientX, t.clientY);
  }, {passive:false});

  document.addEventListener('touchend', e=>{
    if(tdSrcIdx===null) return;
    tdEndDrag();
  });

  document.addEventListener('mousemove', e=>{
    if(tdSrcIdx===null) return;
    tdMoveDrag(e.clientX, e.clientY);
  });

  document.addEventListener('mouseup', e=>{
    if(tdSrcIdx===null) return;
    tdEndDrag();
  });
}

function tdStartDrag(e, item, idx) {
  tdSrcIdx=idx;
  const touch=e.touches[0];
  const rect=item.getBoundingClientRect();
  tdOffX=touch.clientX-rect.left;
  tdOffY=touch.clientY-rect.top;
  tdCreateGhost(item, rect, touch.clientX, touch.clientY);
  item.classList.add('is-dragging');
  // Haptic feedback on iOS
  if(navigator.vibrate) navigator.vibrate(10);
}

function tdStartDragMouse(e, item, idx) {
  tdSrcIdx=idx;
  const rect=item.getBoundingClientRect();
  tdOffX=e.clientX-rect.left;
  tdOffY=e.clientY-rect.top;
  tdCreateGhost(item, rect, e.clientX, e.clientY);
  item.classList.add('is-dragging');
}

function tdCreateGhost(item, rect, cx, cy) {
  // Remove any stale ghost
  const old=document.getElementById('drag-ghost');
  if(old) old.remove();

  tdGhost=item.cloneNode(true);
  tdGhost.id='drag-ghost';
  tdGhost.style.cssText=`
    position:fixed;
    z-index:9999;
    pointer-events:none;
    width:${rect.width}px;
    left:${cx-tdOffX}px;
    top:${cy-tdOffY}px;
    opacity:0.88;
    box-shadow:0 8px 32px rgba(0,0,0,.45);
    border-radius:16px;
    transform:scale(1.03);
    transition:none;
  `;
  // hide control buttons on ghost
  tdGhost.querySelectorAll('.w-del,.w-drag').forEach(el=>el.style.display='none');
  document.body.appendChild(tdGhost);
}

function tdMoveDrag(cx, cy) {
  if(!tdGhost || tdSrcIdx===null) return;
  tdGhost.style.left=(cx-tdOffX)+'px';
  tdGhost.style.top=(cy-tdOffY)+'px';

  // Find which widget-item the finger is over (excluding the dragging one)
  const container=document.getElementById('widget-container');
  if(!container) return;
  const items=[...container.querySelectorAll('.widget-item:not(.is-dragging)')];

  // Clear previous target
  if(tdLastTarget) { tdLastTarget.classList.remove('drop-target'); tdLastTarget=null; }

  // Use elementFromPoint on a slightly interior coordinate
  const el=document.elementFromPoint(cx, cy);
  if(!el) return;
  const targetItem=el.closest('.widget-item');
  if(targetItem && !targetItem.classList.contains('is-dragging')) {
    targetItem.classList.add('drop-target');
    tdLastTarget=targetItem;
  }
}

function tdEndDrag() {
  if(tdGhost) { tdGhost.remove(); tdGhost=null; }

  const container=document.getElementById('widget-container');
  if(container) {
    // Clear dragging/target classes
    container.querySelectorAll('.is-dragging').forEach(el=>el.classList.remove('is-dragging'));
    if(tdLastTarget) {
      const targetIdx=parseInt(tdLastTarget.dataset.idx);
      if(!isNaN(targetIdx) && targetIdx!==tdSrcIdx) {
        const moved=widgetOrder.splice(tdSrcIdx,1)[0];
        widgetOrder.splice(targetIdx,0,moved);
        saveWidgetOrder();
        renderWidgets();
        initWidgetDynamic();
      }
      tdLastTarget.classList.remove('drop-target');
      tdLastTarget=null;
    }
  }
  tdSrcIdx=null;
}

function buildWidgetHTML(wid) {
  switch(wid) {
    case 'hero': return `<div class="hero-card" id="hero-card">
      <div style="display:flex;align-items:flex-start;justify-content:space-between;gap:8px;">
        <div style="flex:1;min-width:0;margin-top:0;">
          <div class="hero-greeting" id="dash-greeting" style="margin-top:0;">☀️ Good Morning, <em>Rajasekhar!</em></div>
          <div class="hero-date" id="dash-date"></div>
        </div>
        <div class="widget-edit-btn" id="widget-edit-btn" onclick="enterWidgetEdit()" style="margin-top:2px;flex-shrink:0;">⚙ Widgets</div>
      </div>
      <div class="hero-status-line" id="hero-status-line">Loading family status…</div>
      <div class="hero-dots" id="hero-dots"></div>
    </div>`;
    case 'priority': return `<div class="w-card" style="padding:14px 16px 12px;">
      <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;">
        <div class="w-hdr" style="margin:0">🔔 &nbsp;Priority</div>
        <span class="card-action" onclick="goPage('calendar')" style="font-size:11px">Calendar →</span>
      </div>
      <div class="priority-strip-wrap" id="priority-strip"></div>
    </div>`;
    case 'timeline': return buildGravityTimelineShell();
    case 'att_severity': case 'josritha_acad': return buildJosrithaAcadWidget();
    case 'health_pulse': return `<div class="w-card">
      <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:14px;">
        <div class="w-hdr" style="margin:0">❤️ &nbsp;Health Pulse</div>
        <span class="card-action" onclick="goPage('health')" style="font-size:11px">Full Reports →</span>
      </div>
      <div class="health-pulse-row" id="health-pulse-row"></div>
    </div>`;
    case 'family': return `<div class="w-card w-card-collapsible" data-wid="family">
      <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:0;cursor:pointer;" onclick="wToggle(this)">
        <div class="w-hdr" style="margin:0;pointer-events:none;">👨‍👩‍👧‍👦 &nbsp;Family</div>
        <div style="display:flex;align-items:center;gap:8px;pointer-events:none;">
          <span class="card-action" style="font-size:11px;pointer-events:auto;" onclick="event.stopPropagation();goPage('members')">View All →</span>
          <div class="w-collapse-btn">›</div>
        </div>
      </div>
      <div class="w-body"><div style="height:10px;"></div><div id="fam-summary" class="fam-pulse-grid"></div></div></div>`;
    case 'urgent': return `<div class="w-card">
      <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;">
        <div class="w-hdr" style="margin:0">⏳ &nbsp;Urgent Items</div>
        <span class="card-action" onclick="goPage('calendar')" style="font-size:11px">View Calendar →</span>
      </div>
      <div style="display:flex;flex-direction:column;gap:8px;" id="urgent-items"></div></div>`;
    case 'actions': return `<div class="w-card w-card-collapsible collapsed" data-wid="actions">
      <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:0;cursor:pointer;" onclick="wToggle(this)">
        <div class="w-hdr" style="margin:0;pointer-events:none;">⚡ &nbsp;Quick Actions</div>
        <div class="w-collapse-btn" style="pointer-events:none;">›</div>
      </div>
      <div class="w-body"><div style="height:12px;"></div><div class="qa-list">
        <div class="qa-row pressable" onclick="window.open('https://cdma.ap.gov.in','_blank')">
          <div class="qa-row-icon" style="background:rgba(255,79,79,.15);color:var(--red);">💸</div>
          <div class="qa-row-body">
            <div class="qa-row-title">Property Tax</div>
            <div class="qa-row-sub">Pay online · cdma.ap.gov.in</div>
          </div>
          <div class="qa-row-arrow">↗</div>
        </div>
        <div class="qa-row pressable" onclick="window.open('https://www.icicilombard.com','_blank')">
          <div class="qa-row-icon" style="background:rgba(79,127,255,.15);color:var(--blue2);">🛡️</div>
          <div class="qa-row-body">
            <div class="qa-row-title">Renew Insurance</div>
            <div class="qa-row-sub">ICICI Lombard portal</div>
          </div>
          <div class="qa-row-arrow">↗</div>
        </div>
        <div class="qa-row pressable" onclick="window.open('https://newerp.kluniversity.in/','_blank')">
          <div class="qa-row-icon" style="background:rgba(167,139,250,.15);color:#a78bfa;">🎓</div>
          <div class="qa-row-body">
            <div class="qa-row-title">KL University ERP</div>
            <div class="qa-row-sub">Josritha's attendance & results</div>
          </div>
          <div class="qa-row-arrow">↗</div>
        </div>
        <div class="qa-row pressable" onclick="window.open('https://eservices.tn.gov.in/','_blank')">
          <div class="qa-row-icon" style="background:rgba(240,180,41,.13);color:var(--gold);">🏛️</div>
          <div class="qa-row-body">
            <div class="qa-row-title">Sarathi Portal</div>
            <div class="qa-row-sub">Driving licence renewal</div>
          </div>
          <div class="qa-row-arrow">↗</div>
        </div>
        <div class="qa-row pressable" onclick="goPage('documents')">
          <div class="qa-row-icon" style="background:rgba(62,207,142,.13);color:var(--green);">📄</div>
          <div class="qa-row-body">
            <div class="qa-row-title">Documents</div>
            <div class="qa-row-sub">Browse all family documents</div>
          </div>
          <div class="qa-row-arrow">›</div>
        </div>
        <div class="qa-row pressable" onclick="goPage('calendar')">
          <div class="qa-row-icon" style="background:rgba(244,114,182,.13);color:#f472b6;">📅</div>
          <div class="qa-row-body">
            <div class="qa-row-title">Family Calendar</div>
            <div class="qa-row-sub">View & add events</div>
          </div>
          <div class="qa-row-arrow">›</div>
        </div>
      </div></div></div></div>`;
    case 'emergency': return buildEmgCard();
    case 'health_mini': return buildHealthWidget();
    case 'cal_mini': return `<div class="w-card">
      <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;">
        <div class="w-hdr" style="margin:0">📅 &nbsp;Family Calendar</div>
        <span class="card-action" onclick="goPage('calendar')" style="font-size:11px">View All →</span>
      </div>
      <div class="cal-mini-wrap" id="cal-mini-body"></div>
    </div>`;

    // ── AI WIDGETS (v8) ─────────────────────────────
    case 'ai_briefing': return `<div class="ai-briefing-card" id="ai-briefing-card">
      <div class="aib-inner">
        <div class="aib-toprow">
          <div class="aib-badge">
            <div class="aib-live-dot"></div>
            Groq AI · Free
          </div>
          <div style="display:flex;align-items:center;gap:6px;">
            <div class="aib-refresh" id="aib-key-btn" onclick="aiShowKeySetup()" title="API Key Settings">🔑</div>
            <div class="aib-refresh" id="aib-refresh-btn" onclick="aiLoadBriefing(true)" title="Refresh">↻</div>
          </div>
        </div>
        <div class="aib-date" id="aib-date">📅 Loading…</div>
        <div class="aib-festival-chip" id="aib-festival-chip">
          <span id="aib-festival-emoji">🎉</span>
          <span id="aib-festival-text">Today is special!</span>
        </div>
        <div id="aib-text" class="aib-text">
          <div class="aib-skeleton-wrap">
            <div class="aib-skel"></div><div class="aib-skel"></div><div class="aib-skel"></div>
          </div>
        </div>
        <div class="aib-details" id="aib-details">
          <div class="aib-detail-grid" id="aib-detail-grid"></div>
        </div>
        <div class="aib-footer">
          <div class="aib-chips">
            <div class="aib-chip" onclick="aibToggleDetails()" id="aib-details-btn">📊 Details</div>
            <div class="aib-chip ai-chat-chip" onclick="aiChatOpen('Tell me more about today\'s family briefing')">💬 Ask AI</div>
          </div>
          <div style="display:flex;flex-direction:column;align-items:flex-end;gap:3px;">
            <div class="aib-ts" id="aib-ts">On demand</div>
            <div style="font-family:'DM Mono',monospace;font-size:9px;color:var(--text3);letter-spacing:.3px;" id="aib-model-tag">⚡ llama-3.1-8b-instant</div>
          </div>
        </div>
      </div>
    </div>`;

    case 'ai_chat': return `<div class="ai-chat-widget">
      <div class="aicw-header">
        <div class="aicw-title">
          <div class="aicw-icon">🧠</div>
          AI Family Assistant
        </div>
        <div class="aicw-status">
          <div class="aicw-status-dot"></div>
          Online
        </div>
      </div>
      <div class="aicw-suggestions" id="aicw-suggestions">
        <div class="aicw-sugg" onclick="aiChatSendQuick(this)">🏃 Can Josritha skip classes today?</div>
        <div class="aicw-sugg" onclick="aiChatSendQuick(this)">📊 Josritha attendance risk report</div>
        <div class="aicw-sugg" onclick="aiChatSendQuick(this)">📅 Today's timetable for Josritha</div>
        <div class="aicw-sugg" onclick="aiChatSendQuick(this)">🍛 Meal ideas today</div>
        <div class="aicw-sugg" onclick="aiChatSendQuick(this)">📄 Documents due?</div>
        <div class="aicw-sugg" onclick="aiChatSendQuick(this)">🌤️ Good morning note</div>
      </div>
      <div class="aicw-messages" id="aicw-messages">
        <div class="aicw-msg ai">
          <div class="aicw-av">🧠</div>
          <div class="aicw-bubble">Namaste! 🙏 I'm your Duggireddy Family AI. I know Rajasekhar, Vasundhara, Josritha &amp; Jeevan — ask me about documents, schedules, health, insurance, meals, festivals, or anything the family needs!</div>
        </div>
      </div>
      <div class="aicw-input-row">
        <textarea class="aicw-input" id="aicw-input" placeholder="Ask your family AI…" rows="1"
          onkeydown="aiChatKeyDown(event)"
          oninput="aiChatAutoResize(this)"></textarea>
        <button class="aicw-send" id="aicw-send" onclick="aiChatSend()">↑</button>
      </div>
    </div>`;

    case 'ai_briefing2': return buildCollapsibleWidget('✨ Daily Briefing', buildBriefing2Widget(), 'ai_briefing2', true);
    case 'grocery':     return buildCollapsibleWidget('🛒 Grocery & Tasks', buildGroceryWidget(), 'grocery', true);
    case 'vehicle':     return buildCollapsibleWidget('🚗 Vehicle Service', buildVehicleWidget(), 'vehicle', true);
    case 'photos':      return buildCollapsibleWidget('📸 Memory Wall', buildMemoryWallWidget(), 'photos', true);
    case 'bills':       return '<div class="w-card"><div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:12px;"><div class="w-hdr" style="margin:0">💸 &nbsp;Bills & Reminders</div><span class="card-action" onclick="billsResetMonth()" style="font-size:11px;">Reset Month</span></div><div id="bills-body">' + buildBillsWidget() + '</div></div>';
    case 'att_risk':    return '<div class="w-card" style="padding:14px 16px 12px;" id="att-risk-card">' + buildAttRiskMeter() + '</div>';
    case 'finance':     return buildFinanceWidget();
    case 'bank_txns':   return buildBankTxnsWidget();
    case 'ai_meals': return `<div class="ai-meal-widget">
      <div class="aimw-header">
        <div class="w-hdr" style="margin:0">🍛 &nbsp;AI Meal Planner</div>
        <span class="card-action" id="aimw-regen" onclick="aiMealGenerate()" style="font-size:11px">↻ New Plan</span>
      </div>
      <div class="aimw-body">
        <div class="aimw-day-tabs" id="aimw-tabs">
          <div class="aimw-tab active" data-day="0" onclick="aimwSelectDay(0)">Today</div>
          <div class="aimw-tab" data-day="1" onclick="aimwSelectDay(1)">Tue</div>
          <div class="aimw-tab" data-day="2" onclick="aimwSelectDay(2)">Wed</div>
          <div class="aimw-tab" data-day="3" onclick="aimwSelectDay(3)">Thu</div>
          <div class="aimw-tab" data-day="4" onclick="aimwSelectDay(4)">Fri</div>
          <div class="aimw-tab" data-day="5" onclick="aimwSelectDay(5)">Sat</div>
          <div class="aimw-tab" data-day="6" onclick="aimwSelectDay(6)">Sun</div>
        </div>
        <div id="aimw-meals-body">
          <div class="aimw-loading">
            <div class="aimw-skel"></div><div class="aimw-skel"></div><div class="aimw-skel"></div>
          </div>
        </div>
        <button class="aimw-gen-btn" onclick="aiMealGenerate()">
          <span>✨</span> Generate Full Week Plan
        </button>
      </div>
    </div>`;
  }
}

/* ═══════════════════════════════════════════════
   BRIEFING V2 WIDGET
═══════════════════════════════════════════════ */
var _BRIEFING_INTERESTS = [
  {id:'family',  label:'Family',  emoji:'\uD83C\uDFE0'},
  {id:'cricket', label:'Cricket', emoji:'\uD83C\uDFCF'},
  {id:'movies',  label:'Movies',  emoji:'\uD83C\uDFAC'},
  {id:'tech',    label:'Tech',    emoji:'\uD83D\uDCBB'},
  {id:'health',  label:'Health',  emoji:'\uD83C\uDFCB'},
  {id:'finance', label:'Finance', emoji:'\uD83D\uDCB8'},
  {id:'hyderabad',label:'Hyd',   emoji:'\uD83C\uDFD9'}
];

function buildBriefing2Widget() {
  var saved = [];
  try { saved = JSON.parse(localStorage.getItem('fp_interests') || '["family"]'); } catch(e) { saved = ['family']; }
  var cache = null;
  try { cache = JSON.parse(localStorage.getItem('fp_briefing_cache') || 'null'); } catch(e) {}
  var todayKey = new Date().toISOString().slice(0,10);
  var hasToday = cache && cache.date === todayKey && cache.cats && saved.join(',') === cache.cats;

  var catHtml = _BRIEFING_INTERESTS.map(function(c) {
    var active = saved.indexOf(c.id) !== -1 ? ' active' : '';
    return '<div class="aib2-cat' + active + '" onclick="aib2ToggleCat(' + _BRIEFING_INTERESTS.indexOf(c) + ')">'
      + c.emoji + ' ' + c.label + '</div>';
  }).join('');

  var contentHtml = '';
  if (hasToday && cache.text) {
    contentHtml = '<div class="aib2-text">' + cache.text + '</div>'
      + '<div class="aib2-footer">'
      + '<div class="aib2-ts">Generated ' + (cache.ts || '') + '</div>'
      + '<div class="aib2-ask-btn" onclick="aib2AskAI()">Ask AI \u2192</div>'
      + '</div>';
  } else {
    var hour = new Date().getHours();
    var greet = hour < 12 ? 'Good morning' : hour < 17 ? 'Good afternoon' : 'Good evening';
    contentHtml = '<div class="aib2-idle">'
      + '<div class="aib2-idle-icon">\u2728</div>'
      + '<div class="aib2-idle-txt">' + greet + '! Select your interests above,<br>then tap Refresh for your daily briefing.</div>'
      + '<div class="aib2-idle-btn" onclick="aib2Load()">\u21BB Generate Briefing</div>'
      + '</div>';
  }

  return '<div class="aib2-card">'
    + '<div class="aib2-toprow">'
    + '<div class="aib2-left"><div class="aib2-icon">\u2728</div>'
    + '<div><div class="aib2-title">Daily Briefing</div>'
    + '<div class="aib2-subtitle">TAP CATEGORIES \u00B7 THEN REFRESH</div></div></div>'
    + '<div class="aib2-actions">'
    + '<div class="aib2-refresh-btn" id="aib2-spin" onclick="aib2Load()" title="Refresh">\u21BB</div>'
    + '</div></div>'
    + '<div class="aib2-cats" id="aib2-cats">' + catHtml + '</div>'
    + '<div class="aib2-content" id="aib2-content">' + contentHtml + '</div>'
    + '</div>';
}

function aib2ToggleCat(idx) {
  var c = _BRIEFING_INTERESTS[idx];
  var saved = [];
  try { saved = JSON.parse(localStorage.getItem('fp_interests') || '["family"]'); } catch(e) { saved = ['family']; }
  var pos = saved.indexOf(c.id);
  if (pos !== -1) { if (saved.length > 1) saved.splice(pos, 1); }
  else { saved.push(c.id); }
  localStorage.setItem('fp_interests', JSON.stringify(saved));
  var el = document.querySelectorAll('.aib2-cat')[idx];
  if (el) el.classList.toggle('active', saved.indexOf(c.id) !== -1);
}

async function aib2Load() {
  var saved = [];
  try { saved = JSON.parse(localStorage.getItem('fp_interests') || '["family"]'); } catch(e) { saved = ['family']; }
  var key = typeof groqGetKey === 'function' ? groqGetKey() : '';
  var content = document.getElementById('aib2-content');
  var spin = document.getElementById('aib2-spin');
  if (!content) return;
  if (!key) { content.innerHTML = '<div class="aib2-idle"><div class="aib2-idle-txt">\uD83D\uDD11 Add Groq API key in Settings to use AI Briefing.</div></div>'; return; }
  if (spin) spin.classList.add('spinning');
  content.innerHTML = '<div class="aib2-content"><div class="aib2-skel"></div><div class="aib2-skel"></div><div class="aib2-skel"></div></div>';

  var catNames = saved.map(function(id) {
    var c = _BRIEFING_INTERESTS.find(function(x){ return x.id === id; });
    return c ? c.label : id;
  }).join(', ');

  var attRaw = localStorage.getItem('fp_attendance_synced');
  var attBrief = '';
  if (attRaw) {
    try {
      var att = JSON.parse(attRaw);
      var risky = att.filter(function(a){ return Math.round(a.present/a.total*100) < 75; });
      if (risky.length) attBrief = '\nJosritha has ' + risky.length + ' subject(s) below 75% attendance.';
    } catch(e) {}
  }
  var expiry = (typeof EXPIRY !== 'undefined' ? EXPIRY : []).filter(function(e){ return typeof daysUntil === 'function' && daysUntil(e.date) <= 30 && daysUntil(e.date) >= 0; });
  var exBrief = expiry.length ? '\n' + expiry.length + ' document(s) expiring within 30 days.' : '';

  var todayStr = new Date().toLocaleDateString('en-IN',{weekday:'long',day:'numeric',month:'long',year:'numeric'});
  var hour = new Date().getHours();
  var greet = hour < 12 ? 'Good morning' : hour < 17 ? 'Good afternoon' : 'Good evening';

  var prompt = greet + ', Rajasekhar! Today is ' + todayStr + '.'
    + '\nFamily: Rajasekhar (Software Engineer, Hyderabad), Vasundhara, Josritha (KL University), Jeevan (14, school).'
    + attBrief + exBrief
    + '\n\nGenerate a warm, concise daily briefing (5-7 bullet points) covering these interest areas: ' + catNames + '.'
    + '\nFor each category, give ONE relevant tip, update, or insight relevant to an Indian family in Hyderabad.'
    + '\nFormat: use <strong>Category:</strong> then the insight. Keep each point to 1-2 lines. Warm, helpful, Telugu family context. No markdown.';

  try {
    var endpoint = typeof GROQ_ENDPOINT !== 'undefined' ? GROQ_ENDPOINT : 'https://api.groq.com/openai/v1/chat/completions';
    var model = typeof GROQ_MODEL !== 'undefined' ? GROQ_MODEL : 'llama-3.1-8b-instant';
    var resp = await fetch(endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + key },
      body: JSON.stringify({ model: model, max_tokens: 400, temperature: 0.75,
        messages: [{ role: 'user', content: prompt }] })
    });
    var data = await resp.json();
    var text = data.choices && data.choices[0] ? data.choices[0].message.content : '';
    if (!text) throw new Error('empty');
    var formatted = '<ul style="margin:0;padding:0 0 0 14px;">'
      + text.split('\n').filter(function(l){ return l.trim(); }).map(function(l){
          return '<li style="margin-bottom:6px;font-size:12px;line-height:1.6;color:var(--text1);">' + l.replace(/^[\-\*\u2022]\s*/,'') + '</li>';
        }).join('') + '</ul>';
    var ts = new Date().toLocaleTimeString('en-IN',{hour:'2-digit',minute:'2-digit'});
    localStorage.setItem('fp_briefing_cache', JSON.stringify({ date: new Date().toISOString().slice(0,10), cats: saved.join(','), text: formatted, ts: ts }));
    content.innerHTML = '<div class="aib2-text">' + formatted + '</div>'
      + '<div class="aib2-footer"><div class="aib2-ts">Generated ' + ts + '</div>'
      + '<div class="aib2-ask-btn" onclick="aib2AskAI()">Ask AI \u2192</div></div>';
  } catch(e) {
    content.innerHTML = '<div class="aib2-idle"><div class="aib2-idle-txt">Could not load briefing. Check your API key and internet.</div>'
      + '<div class="aib2-idle-btn" onclick="aib2Load()">\u21BB Retry</div></div>';
  }
  if (spin) spin.classList.remove('spinning');
}

function aib2AskAI() {
  if (typeof toggleAIPanel === 'function') {
    if (!aiPanelOpen) toggleAIPanel();
    var inp = document.getElementById('ai-panel-input');
    if (inp) { inp.value = 'Give me more details about my daily briefing and any advice for the family today'; }
    setTimeout(function(){ if (typeof aiPanelSend === 'function') aiPanelSend(); }, 200);
  }
}

/* ═══════════════════════════════════════════════
   GROCERY / TASK LIST WIDGET
═══════════════════════════════════════════════ */
var _grocTab = 'grocery';

function grocProgressPct() {
  var items = grocData();
  if (!items.length) return 0;
  var done = items.filter(function(i){ return i.done; }).length;
  return Math.round((done / items.length) * 100);
}

function buildGroceryWidget() {
  var pct = grocProgressPct();
  var placeholder = _grocTab === 'grocery' ? 'Add item…' : 'Add task…';
  return '<div class="groc-card">'    + '<div class="groc-progress-bar"><div class="groc-progress-fill" id="groc-prog" style="width:' + pct + '%"></div></div>'    + '<div class="groc-tab-row">'    + '<div class="groc-tab-pill">'    + '<div class="groc-tab' + (_grocTab === 'grocery' ? ' active' : '') + '" onclick="grocSwitchTab(\'grocery\')">\uD83D\uDED2 Grocery</div>'    + '<div class="groc-tab' + (_grocTab === 'tasks' ? ' active' : '') + '" onclick="grocSwitchTab(\'tasks\')">\u2705 Tasks</div>'    + '</div>'    + '<div class="groc-add-btn" onclick="grocFocusAdd()">+</div>'    + '</div>'    + '<div id="groc-list" class="groc-list">' + buildGrocList() + '</div>'    + '<div class="groc-add-row">'    + '<input id="groc-input" class="groc-input" placeholder="' + placeholder + '" onkeydown="grocKeyDown(event)" inputmode="text" autocomplete="off">'    + '<div class="groc-submit" onclick="grocAddItem()">Add</div>'    + '</div>'    + '<div class="groc-footer">'    + '<div class="groc-count" id="groc-count">' + grocCountText() + '</div>'    + '<div class="groc-clear-done" onclick="grocClearDone()">Clear done</div>'    + '</div>'    + '</div>';
}
function grocData() {
  try { return JSON.parse(localStorage.getItem('fp_' + _grocTab) || '[]'); } catch(e) { return []; }
}
function grocSave(arr) { localStorage.setItem('fp_' + _grocTab, JSON.stringify(arr)); }

function grocEmoji(name) {
  var n = name.toLowerCase();
  if (n.match(/milk|curd|yogurt|cheese|paneer|butter|ghee|cream/)) return '\uD83E\uDD5B';
  if (n.match(/rice|wheat|flour|rava|suji|poha/)) return '\uD83C\uDF3E';
  if (n.match(/tomato/)) return '\uD83C\uDF45';
  if (n.match(/onion/)) return '\uD83E\uDDC5';
  if (n.match(/potato/)) return '\uD83E\uDD54';
  if (n.match(/egg/)) return '\uD83E\uDD5A';
  if (n.match(/bread|roti|naan|bun/)) return '\uD83C\uDF5E';
  if (n.match(/fruit|apple|banana|mango|grape|orange/)) return '\uD83C\uDF4E';
  if (n.match(/veg|spinach|palak|carrot|cabbage|brinjal|ladyfinger/)) return '\uD83E\uDD66';
  if (n.match(/oil|ghee/)) return '\uD83E\uDEB4';
  if (n.match(/dal|lentil|chana|rajma|moong/)) return '\uD83E\uDEB5';
  if (n.match(/soap|shampoo|detergent|wash|clean/)) return '\uD83E\uDDFC';
  if (n.match(/medicine|tablet|syrup/)) return '\uD83D\uDC8A';
  if (n.match(/sugar|salt|spice|masala|turmeric|chilli|pepper/)) return '\uD83E\uDDC2';
  if (n.match(/coffee|tea|chai/)) return '\u2615';
  if (n.match(/water|juice|drink/)) return '\uD83D\uDCA7';
  if (n.match(/snack|biscuit|chips|chocolate|sweet/)) return '\uD83C\uDF6A';
  if (n.match(/meat|chicken|fish|mutton/)) return '\uD83C\uDF57';
  return _grocTab === 'grocery' ? '\uD83D\uDED2' : '\u2705';
}

function grocCategory(name) {
  var n = name.toLowerCase();
  if (n.match(/milk|curd|yogurt|cheese|paneer|butter|ghee|cream/)) return 'Dairy';
  if (n.match(/rice|wheat|flour|rava|suji|poha|dal|lentil|chana|rajma|moong/)) return 'Staples';
  if (n.match(/tomato|onion|potato|carrot|cabbage|brinjal|ladyfinger|spinach|palak|veg|leafy/)) return 'Vegetables';
  if (n.match(/fruit|apple|banana|mango|grape|orange|watermelon/)) return 'Fruits';
  if (n.match(/chicken|meat|fish|mutton|egg/)) return 'Meat & Eggs';
  if (n.match(/bread|roti|naan|bun/)) return 'Bakery';
  if (n.match(/oil|sugar|salt|spice|masala|turmeric|chilli|pepper|tamarind/)) return 'Pantry';
  if (n.match(/coffee|tea|chai|juice|drink|water|soda/)) return 'Beverages';
  if (n.match(/snack|biscuit|chips|chocolate|sweet|candy/)) return 'Snacks';
  if (n.match(/soap|shampoo|detergent|wash|clean|toothpaste|sanitizer/)) return 'Household';
  if (n.match(/medicine|tablet|syrup|cream|balm/)) return 'Medicine';
  return 'Other';
}

var GROC_CAT_COLORS = {
  'Dairy':'\u2b50','Staples':'\uD83C\uDF3E','Vegetables':'\uD83E\uDD66','Fruits':'\uD83C\uDF4E',
  'Meat & Eggs':'\uD83C\uDF57','Bakery':'\uD83C\uDF5E','Pantry':'\uD83E\uDDC2','Beverages':'\u2615',
  'Snacks':'\uD83C\uDF6A','Household':'\uD83E\uDDFC','Medicine':'\uD83D\uDC8A','Other':'\uD83D\uDED2'
};
var GROC_CAT_BG = {
  'Dairy':'#f5a623','Staples':'#8b5cf6','Vegetables':'#22c55e','Fruits':'#f97316',
  'Meat & Eggs':'#ef4444','Bakery':'#d97706','Pantry':'#6366f1','Beverages':'#06b6d4',
  'Snacks':'#ec4899','Household':'#14b8a6','Medicine':'#3b82f6','Other':'#6b7280'
};

function buildGrocList() {
  var items = grocData();
  if (!items.length) return '<div class="groc-empty"><div class="groc-empty-icon">' + (_grocTab==='grocery'?'\uD83D\uDED2':'\u2705') + '</div><div>' + (_grocTab==='grocery'?'Your cart is empty':'No tasks yet') + '</div></div>';

  if (_grocTab !== 'grocery') {
    // Tasks tab — flat list (no categorization)
    return items.map(function(item, idx) {
      var emoji = grocEmoji(item.name);
      return '<div class="groc-item' + (item.done?' done':'') + '" id="groc-item-' + idx + '">'
        + '<div class="groc-check" onclick="grocToggle(' + idx + ')">' + (item.done?'\u2714':'') + '</div>'
        + '<div class="groc-item-emoji">' + emoji + '</div>'
        + '<div class="groc-item-name">' + item.name + '</div>'
        + '<div class="groc-item-del" onclick="grocDelete(' + idx + '">\u00D7</div>'
        + '</div>';
    }).join('');
  }

  // Grocery tab — group by category
  var cats = {};
  items.forEach(function(item, idx) {
    var cat = grocCategory(item.name);
    if (!cats[cat]) cats[cat] = [];
    cats[cat].push({ item: item, idx: idx });
  });

  var html = '';
  Object.keys(cats).forEach(function(cat) {
    var entries = cats[cat];
    var bg = GROC_CAT_BG[cat] || '#6b7280';
    html += '<div class="groc-cat-header">'
      + '<div class="groc-cat-dot" style="background:' + bg + ';"></div>'
      + cat
      + '<span style="margin-left:auto;font-size:9px;color:var(--text3);">'
      + entries.filter(function(e){ return e.item.done; }).length + '/' + entries.length
      + '</span></div>';
    entries.forEach(function(e) {
      var item = e.item; var idx = e.idx;
      var emoji = grocEmoji(item.name);
      html += '<div class="groc-item' + (item.done?' done':'') + '" id="groc-item-' + idx + '">'
        + '<div class="groc-check" onclick="grocToggle(' + idx + ')">' + (item.done?'\u2714':'') + '</div>'
        + '<div class="groc-item-emoji">' + emoji + '</div>'
        + '<div class="groc-item-name">' + item.name + '</div>'
        + '<div class="groc-item-del" onclick="grocDelete(' + idx + ')">\u00D7</div>'
        + '</div>';
    });
  });
  return html;
}

function grocCountText() {
  var items = grocData();
  var done = items.filter(function(i){ return i.done; }).length;
  return done + '/' + items.length + ' done';
}

function grocSwitchTab(tab) {
  _grocTab = tab;
  var groc = document.getElementById('groc-list');
  var count = document.getElementById('groc-count');
  var inp = document.getElementById('groc-input');
  var tabs = document.querySelectorAll('.groc-tab');
  if (tabs[0]) tabs[0].classList.toggle('active', tab==='grocery');
  if (tabs[1]) tabs[1].classList.toggle('active', tab==='tasks');
  if (groc) groc.innerHTML = buildGrocList();
  if (count) count.textContent = grocCountText();
  if (inp) inp.placeholder = tab==='grocery'?'Add item\u2026':'Add task\u2026';
}

function grocFocusAdd() { var inp = document.getElementById('groc-input'); if (inp) inp.focus(); }

function grocKeyDown(e) { if (e.key==='Enter') { e.preventDefault(); grocAddItem(); } }

function grocAddItem() {
  var inp = document.getElementById('groc-input');
  if (!inp) return;
  var val = inp.value.trim();
  if (!val) return;
  var items = grocData();
  items.push({ name: val, done: false, by: '' });
  grocSave(items);
  inp.value = '';
  var groc = document.getElementById('groc-list');
  var count = document.getElementById('groc-count');
  if (groc) groc.innerHTML = buildGrocList();
  if (count) count.textContent = grocCountText();
  if (typeof haptic === 'function') haptic('light');
}

function grocToggle(idx) {
  var items = grocData();
  if (items[idx]) items[idx].done = !items[idx].done;
  grocSave(items);
  var groc = document.getElementById('groc-list');
  var count = document.getElementById('groc-count');
  if (groc) groc.innerHTML = buildGrocList();
  if (count) count.textContent = grocCountText();
  grocRefreshProgress();
}

function grocDelete(idx) {
  var items = grocData();
  items.splice(idx, 1);
  grocSave(items);
  var groc = document.getElementById('groc-list');
  var count = document.getElementById('groc-count');
  if (groc) groc.innerHTML = buildGrocList();
  if (count) count.textContent = grocCountText();
}

function grocRefreshProgress() {
  var prog = document.getElementById('groc-prog');
  if (prog) prog.style.width = grocProgressPct() + '%';
}

function grocClearDone() {
  var items = grocData().filter(function(i){ return !i.done; });
  grocSave(items);
  var groc = document.getElementById('groc-list');
  var count = document.getElementById('groc-count');
  if (groc) groc.innerHTML = buildGrocList();
  if (count) count.textContent = grocCountText();
  grocRefreshProgress();
}

/* ═══════════════════════════════════════════════
   FINANCE SYNC WIDGET — Google Sheets → Portal
═══════════════════════════════════════════════ */

// ── Storage helpers ──
function finGetSheetId()  { return localStorage.getItem('fp_fin_sheet_id') || ''; }
function finSaveSheetId(id) { localStorage.setItem('fp_fin_sheet_id', id.trim()); }
function finGetTxns()     { try { return JSON.parse(localStorage.getItem('fp_transactions') || '[]'); } catch(e) { return []; } }
function finSaveTxns(arr) { localStorage.setItem('fp_transactions', JSON.stringify(arr)); }
function finGetSyncTs()   { return localStorage.getItem('fp_fin_sync_ts') || ''; }
function finSaveSyncTs()  { localStorage.setItem('fp_fin_sync_ts', new Date().toLocaleString('en-IN',{day:'numeric',month:'short',hour:'2-digit',minute:'2-digit'})); }
function finGetSyncErr()  { return localStorage.getItem('fp_fin_sync_err') || ''; }
function finSaveSyncErr(e){ if(e) localStorage.setItem('fp_fin_sync_err', e); else localStorage.removeItem('fp_fin_sync_err'); }

// ── Category config ──
var FIN_CATS = [
  { name:'Food & Dining',    icon:'\uD83C\uDF7D', color:'#f97316', keys:'swiggy|zomato|hotel|restaurant|food|dining|cafe|kitchen|biryani|pizza|burger' },
  { name:'Groceries',        icon:'\uD83D\uDED2', color:'#22c55e', keys:'dmart|bigbasket|blinkit|zepto|grocer|kirana|supermarket|fresh|vegetables' },
  { name:'Transport',        icon:'\uD83D\uDE97', color:'#3b82f6', keys:'uber|ola|rapido|petrol|fuel|diesel|auto|cab|parking|toll|bunk' },
  { name:'Utilities',        icon:'\u26A1',       color:'#f5a623', keys:'electricity|bescom|tsspdcl|apspdcl|water|gas|lpg|cylinder|indane|bharat' },
  { name:'Shopping',         icon:'\uD83D\uDECD', color:'#ec4899', keys:'amazon|flipkart|myntra|meesho|ajio|nykaa|decathlon|shopping|store|mall' },
  { name:'Healthcare',       icon:'\uD83D\uDC8A', color:'#ef4444', keys:'medplus|apollo|pharmacy|hospital|clinic|doctor|medicine|health|diagnostic' },
  { name:'Education',        icon:'\uD83D\uDCDA', color:'#8b5cf6', keys:'school|college|university|klh|fees|tuition|coaching|education|course' },
  { name:'OTT & Mobile',     icon:'\uD83D\uDCF1', color:'#06b6d4', keys:'netflix|hotstar|prime|spotify|youtube|jio|airtel|vodafone|bsnl|tata|mobile|recharge|dth' },
  { name:'Banking & Finance', icon:'\uD83C\uDFE6', color:'#6366f1', keys:'emi|loan|insurance|premium|nps|mutual|sip|fd|rd|bank|transfer|neft|imps|upi' },
  { name:'Salary & Income',  icon:'\uD83D\uDCB0', color:'#34d399', keys:'salary|dataspeaks|income|credit|cashback|refund|interest|dividend' }
];

function finCategorize(merchant, type) {
  var m = (merchant || '').toLowerCase();
  if (type === 'credit' && m.match(/salary|dataspeaks|income|refund|cashback|interest/)) return FIN_CATS[9];
  for (var i = 0; i < FIN_CATS.length - 1; i++) {
    if (m.match(new RegExp(FIN_CATS[i].keys))) return FIN_CATS[i];
  }
  return { name:'Other', icon:'\uD83D\uDCB3', color:'#6b7280' };
}

function finFmtAmt(n) {
  if (n >= 100000) return '\u20B9' + (n/100000).toFixed(1) + 'L';
  if (n >= 1000)   return '\u20B9' + (n/1000).toFixed(1) + 'K';
  return '\u20B9' + n.toLocaleString('en-IN');
}

// ── Parse CSV from Google Sheets ──
function finParseCSV(csvText) {
  var lines = csvText.trim().split('\n');
  if (lines.length < 2) return [];
  // First row = headers. Normalize to lowercase, trim.
  var headers = lines[0].split(',').map(function(h){ return h.trim().toLowerCase().replace(/"/g,''); });
  var txns = [];
  for (var i = 1; i < lines.length; i++) {
    var cols = lines[i].split(',').map(function(c){ return c.trim().replace(/^"|"$/g,''); });
    var row = {};
    headers.forEach(function(h, idx){ row[h] = cols[idx] || ''; });
    // Accept flexible column names: date, amount, type, merchant, category, bank, balance
    var date     = row['date'] || row['txn_date'] || row['transaction_date'] || '';
    var amount   = parseFloat((row['amount'] || row['amt'] || '0').replace(/[^\d.]/g,'')) || 0;
    var type     = (row['type'] || row['txn_type'] || '').toLowerCase();
    var merchant = row['merchant'] || row['description'] || row['narration'] || row['particulars'] || '';
    var bank     = row['bank'] || row['bank_name'] || '';
    var balance  = parseFloat((row['balance'] || '0').replace(/[^\d.]/g,'')) || 0;
    if (!date || !amount) continue;
    // Infer type from amount sign if not explicit
    if (!type) type = amount < 0 ? 'debit' : 'credit';
    amount = Math.abs(amount);
    var cat = finCategorize(merchant, type);
    txns.push({ date: date, amount: amount, type: type, merchant: merchant, category: cat.name, icon: cat.icon, catColor: cat.color, bank: bank, balance: balance });
  }
  return txns;
}

// ── Sync from Google Sheets ──
var _finSyncing = false;
function finSync(silent) {
  var sheetId = finGetSheetId();
  if (!sheetId) { showToast('\uD83D\uDCC4 Set your Sheet ID first', 'info'); return; }
  if (_finSyncing) return;
  _finSyncing = true;

  // Update button to show spinning
  var btn = document.getElementById('fin-sync-btn');
  if (btn) { btn.innerHTML = '<span class="fin-spin">\u21BB</span> Syncing'; btn.className = 'fin-sync-btn syncing'; }

  var url = 'https://docs.google.com/spreadsheets/d/' + sheetId + '/export?format=csv&t=' + Date.now();

  fetch(url)
    .then(function(r) {
      if (!r.ok) throw new Error('HTTP ' + r.status + ' — check Sheet ID and that it is published as CSV');
      return r.text();
    })
    .then(function(csv) {
      var txns = finParseCSV(csv);
      if (!txns.length) throw new Error('No transactions found. Check sheet has columns: date, amount, type, merchant');
      finSaveTxns(txns);
      finSaveSyncTs();
      finSaveSyncErr(null);
      _finSyncing = false;
      if (!silent) showToast('\u2705 Synced ' + txns.length + ' transactions', 'success');
      // Re-render widget
      var item = document.querySelector('.widget-item[data-wid="finance"]');
      if (item && item.children[2]) item.children[2].innerHTML = buildFinanceWidget();
    })
    .catch(function(err) {
      _finSyncing = false;
      var msg = err.message || 'Sync failed';
      finSaveSyncErr(msg);
      if (!silent) showToast('\u274C ' + msg.slice(0,60), 'error');
      var item = document.querySelector('.widget-item[data-wid="finance"]');
      if (item && item.children[2]) item.children[2].innerHTML = buildFinanceWidget();
    });
}

// ── Connect: save Sheet ID and first sync ──
function finConnect() {
  var inp = document.getElementById('fin-sheet-id-input');
  if (!inp) return;
  var val = inp.value.trim();
  // Accept full URL or just the ID
  var match = val.match(/spreadsheets\/d\/([a-zA-Z0-9_-]+)/);
  if (match) val = match[1];
  if (!val || val.length < 20) {
    inp.classList.add('error');
    inp.placeholder = 'Looks too short — paste full URL or ID';
    return;
  }
  finSaveSheetId(val);
  // Re-render widget to connected state before syncing
  var item = document.querySelector('.widget-item[data-wid="finance"]');
  if (item && item.children[2]) item.children[2].innerHTML = buildFinanceWidget();
  setTimeout(function(){ finSync(false); }, 200);
}

// ── Open full finance sheet ──
function openFinSheet(view) {
  var sheet = document.getElementById('fin-sheet');
  if (!sheet) return;
  sheet.classList.add('open');
  var scrollY = window.scrollY || window.pageYOffset;
  document.body.dataset.scrollY = scrollY;
  document.body.style.top = '-' + scrollY + 'px';
  document.body.classList.add('modal-open');
  document.getElementById('fin-sheet-body').innerHTML = buildFinSheetBody(view || 'txns');
}

function closeFinSheet() {
  var sheet = document.getElementById('fin-sheet');
  if (!sheet) return;
  sheet.classList.remove('open');
  document.body.classList.remove('modal-open');
  var scrollY = parseInt(document.body.dataset.scrollY || '0', 10);
  document.body.style.top = '';
  window.scrollTo(0, scrollY);
}

function finSheetTab(view) {
  document.getElementById('fin-sheet-body').innerHTML = buildFinSheetBody(view);
}

// ── Full sheet body ──
function buildFinSheetBody(view) {
  var txns = finGetTxns();
  var sheetId = finGetSheetId();

  var tabs = '<div style="display:flex;gap:8px;margin-bottom:16px;">'
    + ['txns','cats','settings'].map(function(v) {
        var labels = { txns:'\uD83D\uDCCB All Transactions', cats:'\uD83D\uDCC8 By Category', settings:'\u2699\uFE0F Settings' };
        var active = v === view;
        return '<div onclick="finSheetTab(\'' + v + '\')" style="flex:1;text-align:center;padding:8px 4px;border-radius:10px;font-size:11px;font-weight:700;cursor:pointer;'
          + (active ? 'background:var(--blue2);color:#fff;' : 'background:var(--surface2);color:var(--text2);') + '">'
          + labels[v] + '</div>';
      }).join('')
    + '</div>';

  var body = '<div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:16px;">'
    + '<div style="font-size:16px;font-weight:800;">\uD83D\uDCB3 Family Finance</div>'
    + '<div onclick="closeFinSheet()" style="width:28px;height:28px;border-radius:50%;background:var(--surface2);display:flex;align-items:center;justify-content:center;font-size:14px;cursor:pointer;color:var(--text2);">\u00D7</div>'
    + '</div>' + tabs;

  if (view === 'txns') {
    if (!txns.length) {
      body += '<div style="text-align:center;padding:32px 0;color:var(--text3);font-size:13px;">No transactions yet.<br>Sync from Google Sheets first.</div>';
    } else {
      // Show all txns sorted by date desc
      var sorted = txns.slice().sort(function(a,b){ return b.date.localeCompare(a.date); });
      body += '<div style="display:flex;flex-direction:column;gap:2px;">';
      sorted.forEach(function(t) {
        body += '<div style="display:flex;align-items:center;gap:10px;padding:9px 4px;border-radius:10px;">'
          + '<div style="width:34px;height:34px;border-radius:10px;background:' + (t.catColor||'#6b7280') + '22;display:flex;align-items:center;justify-content:center;font-size:16px;flex-shrink:0;">' + (t.icon||'\uD83D\uDCB3') + '</div>'
          + '<div style="flex:1;min-width:0;">'
          + '<div style="font-size:13px;font-weight:700;color:var(--text1);white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">' + (t.merchant||'Unknown') + '</div>'
          + '<div style="font-size:10px;color:var(--text3);">' + t.date + ' \u00B7 ' + (t.bank||'') + ' \u00B7 ' + (t.category||'Other') + '</div>'
          + '</div>'
          + '<div style="font-size:13px;font-weight:800;flex-shrink:0;color:' + (t.type==='credit'?'var(--green)':'var(--red)') + ';">'
          + (t.type==='credit'?'+':'-') + finFmtAmt(t.amount)
          + '</div></div>';
      });
      body += '</div>';
    }
  }

  if (view === 'cats') {
    if (!txns.length) {
      body += '<div style="text-align:center;padding:32px 0;color:var(--text3);font-size:13px;">No transactions to analyze yet.</div>';
    } else {
      var catMap = {};
      var thisMonth = new Date().toISOString().slice(0,7);
      txns.filter(function(t){ return t.type==='debit' && t.date && t.date.startsWith(thisMonth); })
          .forEach(function(t){
            var c = t.category || 'Other';
            catMap[c] = (catMap[c]||0) + t.amount;
          });
      var catEntries = Object.keys(catMap).map(function(c){ return { name:c, amt:catMap[c] }; })
                             .sort(function(a,b){ return b.amt-a.amt; });
      var maxAmt = catEntries.length ? catEntries[0].amt : 1;
      var month = new Date().toLocaleDateString('en-IN',{month:'long',year:'numeric'});
      body += '<div style="font-size:11px;font-weight:700;color:var(--text3);text-transform:uppercase;letter-spacing:.6px;margin-bottom:12px;">' + month + ' Spend by Category</div>';
      body += '<div style="display:flex;flex-direction:column;gap:10px;">';
      catEntries.forEach(function(c) {
        var cat = FIN_CATS.find(function(x){ return x.name===c.name; }) || { icon:'\uD83D\uDCB3', color:'#6b7280' };
        var pct = Math.round(c.amt/maxAmt*100);
        body += '<div style="display:flex;align-items:center;gap:10px;">'
          + '<div style="font-size:16px;width:22px;text-align:center;flex-shrink:0;">' + cat.icon + '</div>'
          + '<div style="flex:1;min-width:0;">'
          + '<div style="display:flex;justify-content:space-between;margin-bottom:4px;">'
          + '<span style="font-size:12px;font-weight:700;color:var(--text1);">' + c.name + '</span>'
          + '<span style="font-size:12px;font-weight:800;color:var(--text2);">' + finFmtAmt(c.amt) + '</span>'
          + '</div>'
          + '<div style="height:6px;background:var(--border);border-radius:4px;overflow:hidden;">'
          + '<div style="height:100%;border-radius:4px;background:' + cat.color + ';width:' + pct + '%;transition:width .6s ease;"></div>'
          + '</div></div></div>';
      });
      body += '</div>';
    }
  }

  if (view === 'settings') {
    var currentId = sheetId;
    body += '<div style="display:flex;flex-direction:column;gap:14px;">'
      + '<div style="background:var(--surface2);border-radius:12px;padding:14px;">'
      + '<div style="font-size:12px;font-weight:800;color:var(--text1);margin-bottom:8px;">\uD83D\uDCC4 Google Sheet ID</div>'
      + '<div style="font-size:11px;color:var(--text2);line-height:1.6;margin-bottom:10px;">Paste your Sheet ID or full URL. The sheet must be <strong style="color:var(--gold);">published as CSV</strong> (File \u2192 Share \u2192 Publish to web \u2192 CSV).</div>'
      + '<input id="fin-settings-input" type="text" value="' + currentId + '" placeholder="1BxiMVs0XRA5nFM..." style="width:100%;box-sizing:border-box;background:var(--surface3);border:1px solid var(--border2);border-radius:10px;padding:10px 12px;font-family:\'DM Mono\',monospace;font-size:11px;color:var(--text1);outline:none;margin-bottom:8px;">'
      + '<div style="display:flex;gap:8px;">'
      + '<div onclick="finSettingsSave()" style="flex:1;text-align:center;padding:10px;border-radius:10px;background:var(--blue2);color:#fff;font-size:12px;font-weight:800;cursor:pointer;">\u2713 Save & Sync</div>'
      + (currentId ? '<div onclick="finSettingsClear()" style="padding:10px 14px;border-radius:10px;background:rgba(239,68,68,.1);color:var(--red);font-size:12px;font-weight:700;cursor:pointer;">\uD83D\uDDD1 Clear</div>' : '')
      + '</div></div>'

      + '<div style="background:var(--surface2);border-radius:12px;padding:14px;">'
      + '<div style="font-size:12px;font-weight:800;color:var(--text1);margin-bottom:8px;">\uD83D\uDCCB Expected Sheet Columns</div>'
      + '<div style="font-family:\'DM Mono\',monospace;font-size:10px;color:var(--text3);line-height:2;background:var(--surface3);border-radius:8px;padding:10px 12px;">'
      + 'date &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(YYYY-MM-DD)<br>'
      + 'amount &nbsp;&nbsp;&nbsp;(numeric, e.g. 1500)<br>'
      + 'type &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(debit / credit)<br>'
      + 'merchant &nbsp;(Swiggy, Amazon...)<br>'
      + 'bank &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(HDFC, ICICI...)<br>'
      + 'balance &nbsp;&nbsp;(optional)'
      + '</div></div>'

      + '<div style="background:var(--surface2);border-radius:12px;padding:14px;">'
      + '<div style="font-size:12px;font-weight:800;color:var(--text1);margin-bottom:6px;">\uD83E\uDD16 Cowork Task Prompt</div>'
      + '<div style="font-size:11px;color:var(--text2);line-height:1.6;margin-bottom:8px;">Paste this into Cowork as a scheduled daily task:</div>'
      + '<div style="font-family:\'DM Mono\',monospace;font-size:10px;color:var(--text3);background:var(--surface3);border-radius:8px;padding:10px 12px;line-height:1.8;word-break:break-word;">'
      + 'Read all bank alert emails received in the last 24 hours from HDFC, ICICI, Axis, Indian Bank. Extract each transaction: date (YYYY-MM-DD), amount (number), type (debit or credit), merchant name, bank name. Append new rows to Google Sheet \u201cFamilyFinance\u201d with columns: date, amount, type, merchant, bank. Skip duplicates.'
      + '</div>'
      + '<div onclick="finCopyCoworkPrompt()" style="margin-top:8px;text-align:center;padding:8px;border-radius:9px;background:rgba(79,127,255,.1);color:var(--blue2);font-size:11px;font-weight:700;cursor:pointer;" id="fin-copy-cowork-btn">\uD83D\uDCCB Copy Cowork Prompt</div>'
      + '</div>'

      + '</div>';
  }

  return body;
}

function finSettingsSave() {
  var inp = document.getElementById('fin-settings-input');
  if (!inp) return;
  var val = inp.value.trim();
  var match = val.match(/spreadsheets\/d\/([a-zA-Z0-9_-]+)/);
  if (match) val = match[1];
  if (!val || val.length < 20) {
    inp.style.borderColor = 'var(--red)';
    return;
  }
  finSaveSheetId(val);
  closeFinSheet();
  setTimeout(function(){ finSync(false); }, 300);
}

function finSettingsClear() {
  localStorage.removeItem('fp_fin_sheet_id');
  localStorage.removeItem('fp_transactions');
  localStorage.removeItem('fp_fin_sync_ts');
  localStorage.removeItem('fp_fin_sync_err');
  closeFinSheet();
  var item = document.querySelector('.widget-item[data-wid="finance"]');
  if (item && item.children[2]) item.children[2].innerHTML = buildFinanceWidget();
}

function finCopyCoworkPrompt() {
  var prompt = 'Read all bank alert emails received in the last 24 hours from HDFC, ICICI, Axis, Indian Bank. Extract each transaction: date (YYYY-MM-DD), amount (number), type (debit or credit), merchant name, bank name. Append new rows to Google Sheet "FamilyFinance" with columns: date, amount, type, merchant, bank. Skip duplicates.';
  navigator.clipboard.writeText(prompt).then(function() {
    var btn = document.getElementById('fin-copy-cowork-btn');
    if (btn) { btn.textContent = '\u2714 Copied!'; setTimeout(function(){ btn.textContent = '\uD83D\uDCCB Copy Cowork Prompt'; }, 2000); }
  });
}

// ── Main widget builder ──
function buildFinanceWidget() {
  var sheetId = finGetSheetId();
  var txns    = finGetTxns();
  var syncTs  = finGetSyncTs();
  var syncErr = finGetSyncErr();

  // ── NOT configured yet ──
  if (!sheetId) {
    return '<div class="w-card fin-card">'
      + '<div style="display:flex;align-items:center;justify-content:space-between;padding:14px 16px 0;">'
      + '<div class="w-hdr" style="margin:0;">\uD83D\uDCB3 Finance Sync</div>'
      + '<span style="font-size:10px;color:var(--text3);">Google Sheets</span>'
      + '</div>'
      + '<div class="fin-setup">'
      + '<div class="fin-setup-icon">\uD83D\uDCC4</div>'
      + '<div class="fin-setup-title">Connect your transaction sheet</div>'
      + '<div class="fin-setup-sub">Paste your Google Sheet ID (or full URL) below.<br>The sheet must be <strong style="color:var(--gold);">published as CSV</strong>.</div>'
      + '<div class="fin-setup-steps">'
      + '<div class="fin-step"><div class="fin-step-num">1</div><div>In Google Sheets: <strong>File \u2192 Share \u2192 Publish to web \u2192 CSV</strong></div></div>'
      + '<div class="fin-step"><div class="fin-step-num">2</div><div>Copy the Sheet ID from the URL bar (the long string after <code style="color:var(--blue2);">/d/</code>)</div></div>'
      + '<div class="fin-step"><div class="fin-step-num">3</div><div>Paste below and tap Connect. Sheet columns: <code style="color:var(--gold);">date, amount, type, merchant, bank</code></div></div>'
      + '</div>'
      + '<div class="fin-setup-input-row">'
      + '<input id="fin-sheet-id-input" class="fin-sheet-input" type="text" placeholder="Paste Sheet ID or full URL\u2026" onkeydown="if(event.key===\'Enter\')finConnect()">'
      + '<button class="fin-connect-btn" onclick="finConnect()">\u2192 Connect</button>'
      + '</div>'
      + '</div></div>';
  }

  // ── Connected — build live view ──
  var html = '<div class="w-card fin-card">';

  // Header row
  var dotClass = syncErr ? 'error' : (syncTs ? 'fin-sync-dot' : 'stale');
  html += '<div class="fin-header">'
    + '<div class="w-hdr" style="margin:0;">\uD83D\uDCB3 Finance Sync</div>'
    + '<div class="fin-sync-row">'
    + '<div class="fin-sync-dot ' + dotClass + '"></div>'
    + '<span class="fin-sync-ts">' + (syncTs ? syncTs : 'Never synced') + '</span>'
    + '<div class="fin-sync-btn" id="fin-sync-btn" onclick="finSync(false)">\u21BB Sync</div>'
    + '</div>'
    + '</div>';

  // Error banner
  if (syncErr) {
    html += '<div class="fin-error">\u26A0\uFE0F ' + syncErr + '</div>';
  }

  if (!txns.length) {
    html += '<div class="fin-empty"><div class="fin-empty-icon">\uD83D\uDCCA</div>No transactions yet.<br>Tap \u21BB Sync to fetch from your sheet.</div>';
  } else {
    // Summary strip — this month
    var thisMonth = new Date().toISOString().slice(0,7);
    var monthTxns = txns.filter(function(t){ return t.date && t.date.startsWith(thisMonth); });
    var income  = monthTxns.filter(function(t){ return t.type==='credit'; }).reduce(function(s,t){ return s+t.amount; }, 0);
    var spend   = monthTxns.filter(function(t){ return t.type==='debit';  }).reduce(function(s,t){ return s+t.amount; }, 0);
    var savings = income - spend;

    html += '<div class="fin-summary-strip">'
      + '<div class="fin-sum-tile"><div class="fin-sum-val fin-sum-income">' + finFmtAmt(income) + '</div><div class="fin-sum-lbl">Income</div></div>'
      + '<div class="fin-sum-tile"><div class="fin-sum-val fin-sum-spend">'  + finFmtAmt(spend)  + '</div><div class="fin-sum-lbl">Spent</div></div>'
      + '<div class="fin-sum-tile"><div class="fin-sum-val fin-sum-save" style="color:' + (savings>=0?'var(--gold)':'var(--red)') + ';">' + finFmtAmt(Math.abs(savings)) + '</div><div class="fin-sum-lbl">' + (savings>=0?'Saved':'Over') + '</div></div>'
      + '</div>';

    // Top categories this month
    var catMap = {};
    monthTxns.filter(function(t){ return t.type==='debit'; }).forEach(function(t){
      var c = t.category || 'Other';
      catMap[c] = { amt:(catMap[c]?catMap[c].amt:0)+t.amount, icon:t.icon||'\uD83D\uDCB3', color:t.catColor||'#6b7280' };
    });
    var topCats = Object.keys(catMap).map(function(c){ return Object.assign({name:c}, catMap[c]); })
                        .sort(function(a,b){ return b.amt-a.amt; }).slice(0,4);
    if (topCats.length) {
      var maxAmt = topCats[0].amt;
      html += '<div class="fin-cats">';
      topCats.forEach(function(c) {
        var pct = Math.round(c.amt/maxAmt*100);
        html += '<div class="fin-cat-row">'
          + '<div class="fin-cat-icon">' + c.icon + '</div>'
          + '<div class="fin-cat-name">' + c.name + '</div>'
          + '<div class="fin-cat-track"><div class="fin-cat-fill" style="width:' + pct + '%;background:' + c.color + ';"></div></div>'
          + '<div class="fin-cat-amt">' + finFmtAmt(c.amt) + '</div>'
          + '</div>';
      });
      html += '</div>';
    }

    // Recent transactions (last 5)
    var recent = txns.slice().sort(function(a,b){ return b.date.localeCompare(a.date); }).slice(0,5);
    html += '<div class="fin-txn-hdr">'
      + '<div class="fin-txn-title">Recent</div>'
      + '<div class="fin-txn-more" onclick="openFinSheet(\'txns\')">All ' + txns.length + ' \u2192</div>'
      + '</div>'
      + '<div class="fin-txn-list">';
    recent.forEach(function(t) {
      html += '<div class="fin-txn">'
        + '<div class="fin-txn-ico" style="background:' + (t.catColor||'#6b7280') + '22;">' + (t.icon||'\uD83D\uDCB3') + '</div>'
        + '<div class="fin-txn-body">'
        + '<div class="fin-txn-merchant">' + (t.merchant || 'Unknown') + '</div>'
        + '<div class="fin-txn-meta">' + t.date + (t.bank?' \u00B7 '+t.bank:'') + '</div>'
        + '</div>'
        + '<div class="fin-txn-amt ' + t.type + '">' + (t.type==='credit'?'+':'-') + finFmtAmt(t.amount) + '</div>'
        + '</div>';
    });
    html += '</div>';
  }

  // Footer actions
  html += '<div style="display:flex;gap:8px;padding:4px 14px 14px;">'
    + '<div onclick="openFinSheet(\'cats\')" style="flex:1;text-align:center;padding:8px;border-radius:10px;background:var(--surface2);font-size:11px;font-weight:700;color:var(--text2);cursor:pointer;">\uD83D\uDCC8 Categories</div>'
    + '<div onclick="openFinSheet(\'settings\')" style="flex:1;text-align:center;padding:8px;border-radius:10px;background:var(--surface2);font-size:11px;font-weight:700;color:var(--text2);cursor:pointer;">\u2699\uFE0F Settings</div>'
    + '</div>';

  html += '</div>';
  return html;
}

/* ═══════════════════════════════════════════════
   BILLS & REMINDER TRACKER WIDGET
═══════════════════════════════════════════════ */
var BILLS_DEFAULT = [
  { id:'elec',   name:'Electricity', icon:'\u26A1', amount:'\u20B91,800', day:1,  color:'#f5a623' },
  { id:'wifi',   name:'Internet / WiFi', icon:'\uD83D\uDCF6', amount:'\u20B9999', day:5,  color:'#06b6d4' },
  { id:'mobile1',name:'Rajasekhar Mobile', icon:'\uD83D\uDCF1', amount:'\u20B9599', day:10, color:'#3b82f6' },
  { id:'mobile2',name:'Vasundhara Mobile', icon:'\uD83D\uDCF1', amount:'\u20B9399', day:12, color:'#8b5cf6' },
  { id:'lp',     name:'LPG Cylinder', icon:'\uD83D\uDD25', amount:'\u20B9950', day:15, color:'#ef4444' },
  { id:'ott',    name:'OTT Subscriptions', icon:'\uD83C\uDFA5', amount:'\u20B9649', day:20, color:'#ec4899' }
];

function getBillsData() {
  try { return JSON.parse(localStorage.getItem('fp_bills') || 'null') || BILLS_DEFAULT.map(function(b){ return Object.assign({}, b, {paid:false}); }); }
  catch(e) { return BILLS_DEFAULT.map(function(b){ return Object.assign({}, b, {paid:false}); }); }
}
function saveBillsData(arr) { localStorage.setItem('fp_bills', JSON.stringify(arr)); }

function buildBillsWidget() {
  var bills = getBillsData();
  var today = new Date().getDate();
  var month = new Date().toLocaleDateString('en-IN', {month:'long', year:'numeric'});
  var paid = bills.filter(function(b){ return b.paid; }).length;
  var overdue = bills.filter(function(b){ return !b.paid && b.day < today; }).length;
  var pending = bills.length - paid;

  var html = '<div class="bills-widget">'
    + '<div class="bills-month-row">'
    + '<div class="bills-month-lbl">' + month + '</div>'
    + '<div class="bills-summary-chips">'
    + (paid > 0 ? '<span class="bills-chip bills-chip-green">\u2714 ' + paid + ' paid</span>' : '')
    + (overdue > 0 ? '<span class="bills-chip bills-chip-red">! ' + overdue + ' overdue</span>' : '')
    + (pending > 0 && overdue === 0 ? '<span class="bills-chip bills-chip-gold">' + pending + ' pending</span>' : '')
    + '</div></div>'
    + '<div class="bills-list">';

  bills.forEach(function(b, idx) {
    var isOverdue = !b.paid && b.day < today;
    var dueStr = b.paid ? 'Paid \u2714' : ('Due: ' + b.day + (b.day===1?'st':b.day===2?'nd':b.day===3?'rd':'th'));
    html += '<div class="bill-item' + (b.paid ? ' paid' : '') + '">'
      + (isOverdue ? '<div class="bill-overdue-bar"></div>' : '')
      + '<div class="bill-item-left">'
      + '<div class="bill-icon" style="background:' + b.color + '22;">' + b.icon + '</div>'
      + '<div class="bill-info">'
      + '<div class="bill-name">' + b.name + '</div>'
      + '<div class="bill-due" style="color:' + (isOverdue ? 'var(--red)' : b.paid ? 'var(--green)' : 'var(--text3)') + ';">' + dueStr + '</div>'
      + '</div>'
      + '<div class="bill-amount">' + b.amount + '</div>'
      + '</div>'
      + '<button class="bill-pay-btn" onclick="billTogglePaid(' + idx + ')" title="' + (b.paid ? 'Mark unpaid' : 'Mark paid') + '">'
      + (b.paid ? '\u2714' : '\u25CB')
      + '</button>'
      + '</div>';
  });

  html += '</div></div>';
  return html;
}

function billTogglePaid(idx) {
  var bills = getBillsData();
  if (bills[idx]) bills[idx].paid = !bills[idx].paid;
  saveBillsData(bills);
  var body = document.getElementById('bills-body');
  if (body) body.innerHTML = buildBillsWidget();
}

function billsResetMonth() {
  var bills = getBillsData().map(function(b){ return Object.assign({}, b, {paid:false}); });
  saveBillsData(bills);
  var body = document.getElementById('bills-body');
  if (body) body.innerHTML = buildBillsWidget();
}

/* ═══════════════════════════════════════════════
   VEHICLE SERVICE TRACKER WIDGET
═══════════════════════════════════════════════ */
var VEHICLES_DEF = [
  { id:'activa', name:'Activa', reg:'TS08HJ8438', icon:'\uD83D\uDEF5', color:'rgba(124,58,237,.12)', owner:'Vasundhara' },
  { id:'i10',    name:'i10',   reg:'AP27AK7873', icon:'\uD83D\uDE97', color:'rgba(79,127,255,.12)', owner:'Vasundhara' }
];

function getVehData() {
  try { return JSON.parse(localStorage.getItem('fp_vehicle_service') || '{}'); } catch(e) { return {}; }
}
function saveVehData(d) { localStorage.setItem('fp_vehicle_service', JSON.stringify(d)); }

function buildVehicleWidget() {
  var data = getVehData();
  var rows = VEHICLES_DEF.map(function(v) {
    var vdata = data[v.id] || {};
    var lastDate = vdata.lastService || null;
    var nextDate = vdata.nextService || null;
    var days = nextDate ? (typeof daysUntil === 'function' ? daysUntil(nextDate) : null) : null;
    var badgeClass = 'ok', badgeTxt = 'Up to date';
    if (days !== null) {
      if (days < 0) { badgeClass = 'overdue'; badgeTxt = Math.abs(days) + 'd overdue'; }
      else if (days <= 30) { badgeClass = 'soon'; badgeTxt = 'Due in ' + days + 'd'; }
      else { badgeClass = 'ok'; badgeTxt = 'Due ' + (typeof fmtDate==='function'?fmtDate(nextDate):nextDate); }
    } else if (!lastDate) { badgeClass = 'soon'; badgeTxt = 'Not tracked'; }
    return '<div class="veh-row" onclick="vehOpenSheet(\'' + v.id + '\')">'
      + '<div class="veh-icon" style="background:' + v.color + '">' + v.icon + '</div>'
      + '<div class="veh-info">'
      + '<div class="veh-name">' + v.name + '</div>'
      + '<div class="veh-reg">' + v.reg + ' \u00B7 ' + v.owner + '</div>'
      + '</div>'
      + '<div class="veh-right">'
      + '<div class="veh-due-badge ' + badgeClass + '">' + badgeTxt + '</div>'
      + (lastDate ? '<div class="veh-due-date">Last: ' + (typeof fmtDate==='function'?fmtDate(lastDate):lastDate) + '</div>' : '')
      + '</div>'
      + '</div>';
  }).join('');

  return '<div class="veh-card">'
    + '<div class="veh-header">'
    + '<div class="w-hdr" style="margin:0">\uD83D\uDE97 Vehicle Service</div>'
    + '<span class="card-action" onclick="vehOpenSheet(\'activa\')" style="font-size:11px">+ Log Service</span>'
    + '</div>'
    + '<div class="veh-list">' + rows + '</div>'
    + '</div>';
}

var _vehActiveId = null;
function vehOpenSheet(id) {
  _vehActiveId = id;
  var sheet = document.getElementById('veh-sheet');
  var body = document.getElementById('veh-sheet-body');
  var v = VEHICLES_DEF.find(function(x){ return x.id===id; });
  var data = getVehData();
  var vdata = data[id] || { history: [] };
  if (!vdata.history) vdata.history = [];

  var historyHtml = vdata.history.length
    ? vdata.history.slice().reverse().map(function(h) {
        return '<div class="veh-service-row">'
          + '<div class="veh-service-dot"></div>'
          + '<div class="veh-service-body">'
          + '<div class="veh-service-type">' + (h.type||'Service') + '</div>'
          + '<div class="veh-service-date">' + (h.date||'') + (h.km?' \u00B7 '+h.km+' km':'') + '</div>'
          + (h.note?'<div class="veh-service-note">'+h.note+'</div>':'')
          + '</div></div>';
      }).join('')
    : '<div style="padding:14px 0;text-align:center;font-size:11px;color:var(--text3);">No service history yet</div>';

  body.innerHTML = '<div style="display:flex;align-items:center;gap:10px;margin-bottom:14px;">'
    + '<div style="font-size:28px">' + (v?v.icon:'') + '</div>'
    + '<div><div style="font-size:15px;font-weight:800;color:var(--text1);font-family:\'Inter\',sans-serif;">' + (v?v.name:'') + '</div>'
    + '<div style="font-size:11px;color:var(--text3);font-family:\'DM Mono\',monospace;">' + (v?v.reg:'') + '</div></div>'
    + '</div>'
    + '<div style="font-size:11px;font-weight:700;color:var(--text2);font-family:\'Inter\',sans-serif;margin-bottom:8px;">SERVICE HISTORY</div>'
    + historyHtml
    + '<div style="margin-top:12px;">'
    + '<div style="font-size:11px;font-weight:700;color:var(--text2);font-family:\'Inter\',sans-serif;margin-bottom:8px;">LOG NEW SERVICE</div>'
    + '<div style="display:flex;flex-direction:column;gap:8px;">'
    + '<select id="veh-type" style="background:var(--surface2);border:1px solid var(--border2);border-radius:8px;padding:8px 10px;font-size:12px;color:var(--text1);width:100%;">'
    + '<option>Oil Change</option><option>Tyre Rotation</option><option>PUC Renewal</option><option>General Service</option><option>Battery</option><option>Other</option>'
    + '</select>'
    + '<div style="display:flex;gap:8px;">'
    + '<input id="veh-date" type="date" value="' + new Date().toISOString().slice(0,10) + '" style="flex:1;background:var(--surface2);border:1px solid var(--border2);border-radius:8px;padding:8px 10px;font-size:12px;color:var(--text1);">'
    + '<input id="veh-km" type="number" placeholder="KM" style="width:90px;background:var(--surface2);border:1px solid var(--border2);border-radius:8px;padding:8px 10px;font-size:12px;color:var(--text1);">'
    + '</div>'
    + '<input id="veh-note" placeholder="Notes (optional)" style="background:var(--surface2);border:1px solid var(--border2);border-radius:8px;padding:8px 10px;font-size:12px;color:var(--text1);width:100%;box-sizing:border-box;">'
    + '<input id="veh-next" type="date" placeholder="Next service due" style="background:var(--surface2);border:1px solid var(--border2);border-radius:8px;padding:8px 10px;font-size:12px;color:var(--text1);width:100%;box-sizing:border-box;">'
    + '<div onclick="vehSaveService()" style="padding:11px;border-radius:10px;background:var(--blue-dim);border:1px solid rgba(79,127,255,.25);color:var(--blue2);font-size:13px;font-weight:700;text-align:center;cursor:pointer;font-family:\'Inter\',sans-serif;">Save Service Log</div>'
    + '</div></div>';

  if (sheet) sheet.classList.add('open');
  if (typeof haptic==='function') haptic('medium');
}

function vehCloseSheet() {
  var sheet = document.getElementById('veh-sheet');
  if (sheet) sheet.classList.remove('open');
}

function vehSaveService() {
  var type = document.getElementById('veh-type');
  var date = document.getElementById('veh-date');
  var km   = document.getElementById('veh-km');
  var note = document.getElementById('veh-note');
  var next = document.getElementById('veh-next');
  if (!type||!date||!date.value) return;
  var data = getVehData();
  if (!data[_vehActiveId]) data[_vehActiveId] = { history: [] };
  if (!data[_vehActiveId].history) data[_vehActiveId].history = [];
  data[_vehActiveId].history.push({ type: type.value, date: date.value, km: km?km.value:'', note: note?note.value:'' });
  data[_vehActiveId].lastService = date.value;
  if (next && next.value) data[_vehActiveId].nextService = next.value;
  saveVehData(data);
  vehCloseSheet();
  if (typeof showToast==='function') showToast('\uD83D\uDE97 Service logged for ' + _vehActiveId);
  if (typeof initWidgetDynamic==='function') setTimeout(initWidgetDynamic, 100);
  if (typeof haptic==='function') haptic('success');
}

/* ═══════════════════════════════════════════════
   MEMORY WALL WIDGET
═══════════════════════════════════════════════ */
function getPhotos() { try { return JSON.parse(localStorage.getItem('fp_photos')||'[]'); } catch(e){ return []; } }
function savePhotos(arr) { localStorage.setItem('fp_photos', JSON.stringify(arr)); }

function buildMemoryWallWidget() {
  var photos = getPhotos();
  var grid = '';
  photos.slice(0,8).forEach(function(p,idx) {
    grid += '<div class="mem-thumb" onclick="memViewPhoto(' + idx + ')">'
      + '<img src="' + p.src + '" alt="' + (p.caption||'') + '" loading="lazy">'
      + (p.caption?'<div class="mem-thumb-overlay"><div class="mem-thumb-caption">' + p.caption + '</div></div>':'')
      + '</div>';
  });
  grid += '<label class="mem-thumb mem-thumb-add" title="Add photo">'
    + '<input type="file" accept="image/*" style="display:none" onchange="memAddPhoto(this)">'
    + '<div class="mem-thumb-add-icon">\uD83D\uDCF8</div>'
    + '<div class="mem-thumb-add-lbl">Add</div>'
    + '</label>';

  var inner = photos.length===0
    ? '<div class="mem-empty"><div class="mem-empty-icon">\uD83D\uDCF8</div><div class="mem-empty-txt">Add family photos to your memory wall</div></div>'
      + '<div class="mem-grid">' + grid + '</div>'
    : '<div class="mem-grid">' + grid + '</div>';

  return '<div class="mem-card">'
    + '<div class="mem-header">'
    + '<div class="w-hdr" style="margin:0">\uD83D\uDCF8 Memory Wall</div>'
    + '<span style="font-size:10px;color:var(--text3);font-family:\'DM Mono\',monospace;">' + photos.length + ' photo' + (photos.length!==1?'s':'') + '</span>'
    + '</div>'
    + inner
    + '</div>';
}

var _memViewIdx = -1;

function memAddPhoto(input) {
  var file = input.files[0]; if (!file) return;
  if (file.size > 3*1024*1024) { if (typeof showToast==='function') showToast('\u26A0\uFE0F Image too large (max 3MB)'); return; }
  var reader = new FileReader();
  reader.onload = function(e) {
    var caption = prompt('Add a caption (optional):') || '';
    var photos = getPhotos();
    photos.unshift({ src: e.target.result, caption: caption, ts: new Date().toISOString() });
    if (photos.length > 20) photos = photos.slice(0,20);
    savePhotos(photos);
    if (typeof initWidgetDynamic==='function') setTimeout(initWidgetDynamic, 100);
    if (typeof showToast==='function') showToast('\uD83D\uDCF8 Photo added to Memory Wall');
    if (typeof haptic==='function') haptic('success');
  };
  reader.readAsDataURL(file);
  input.value = '';
}

function memViewPhoto(idx) {
  _memViewIdx = idx;
  var photos = getPhotos();
  var p = photos[idx]; if (!p) return;
  var lb = document.getElementById('mem-lightbox');
  var img = document.getElementById('mem-lb-img');
  var cap = document.getElementById('mem-lb-caption');
  if (lb) lb.classList.add('open');
  if (img) img.src = p.src;
  if (cap) cap.textContent = p.caption || '';
  if (typeof haptic==='function') haptic('light');
}

function memCloseLightbox() {
  var lb = document.getElementById('mem-lightbox');
  if (lb) lb.classList.remove('open');
  _memViewIdx = -1;
}

function memDeletePhoto() {
  if (_memViewIdx < 0) return;
  if (!confirm('Delete this photo?')) return;
  var photos = getPhotos();
  photos.splice(_memViewIdx, 1);
  savePhotos(photos);
  memCloseLightbox();
  if (typeof initWidgetDynamic==='function') setTimeout(initWidgetDynamic, 100);
  if (typeof showToast==='function') showToast('Photo deleted');
}


/* ═══════════════════════════════════════════════════════════
   JOSRITHA ACADEMIC CARD  — dashboard widget
   Combines: SVG ring + day navigator + slot rows + heatmap
═══════════════════════════════════════════════════════════ */

function jacOpenAcademics() {
  window._skipScroll = true;
  showMemberDetail('josritha', 'academics');
}

function buildJosrithaAcadWidget() {
  var DAY_SHORT = ['MON','TUE','WED','THU','FRI','SAT'];
  var DAY_FULL  = ['MONDAY','TUESDAY','WEDNESDAY','THURSDAY','FRIDAY','SATURDAY'];
  var TYPE_ICONS = {Lecture:'\U0001f4d6',Lab:'\U0001f52c',Tutorial:'\U0001f4dd',Seminar:'\U0001f393'};

  var today = new Date(); today.setHours(0,0,0,0);
  var todayDow = today.getDay();
  var todayName = todayDow === 0 ? '' : DAY_FULL[todayDow - 1] || '';

  // Mon of this week
  var monday = new Date(today);
  var diffToMon = (todayDow === 0) ? -6 : 1 - todayDow;
  monday.setDate(today.getDate() + diffToMon);
  var fmt = function(d){ return d.toLocaleDateString('en-IN',{day:'numeric',month:'short'}); };
  var saturday = new Date(monday); saturday.setDate(monday.getDate() + 5);
  var weekLabel = fmt(monday) + ' \u2014 ' + fmt(saturday);

  // Load data
  var attRaw = localStorage.getItem('fp_attendance_synced');
  var ttRaw  = localStorage.getItem('fp_timetable_synced');
  var attTs  = localStorage.getItem('fp_attendance_synced_ts') || '';

  // ── No-data state ──────────────────────────────────────────────────
  if (!attRaw) {
    return '<div class="jac-card w-card">'
      + '<div class="jac-hero" style="padding:16px;">'
      + '<div style="font-size:32px;margin-right:2px;">\U0001f393</div>'
      + '<div class="jac-hero-info">'
      + '<div class="jac-hero-name">Josritha</div>'
      + '<div class="jac-hero-sub">KL UNIVERSITY \u00b7 EVEN SEM 2025\u201326</div>'
      + '</div>'
      + '<div class="jac-fullview" onclick="jacOpenAcademics()">Full View \u2192</div>'
      + '</div>'
      + '<div class="jac-nodata">'
      + '<div class="jac-nodata-icon">\U0001f4ca</div>'
      + '<div class="jac-nodata-txt">Upload attendance &amp; timetable<br>to unlock the academics card</div>'
      + '<div class="jac-nodata-btn" onclick="jacOpenAcademics()">\U0001f4c2 Upload Data \u2192</div>'
      + '</div></div>';
  }

  var attData = JSON.parse(attRaw);
  var ttData  = ttRaw ? JSON.parse(ttRaw) : null;

  // ── Overall stats ──────────────────────────────────────────────────
  var totalPresent = attData.reduce(function(s,a){ return s + a.present; }, 0);
  var totalClasses = attData.reduce(function(s,a){ return s + a.total; }, 0);
  var overallPct   = totalClasses ? Math.round(totalPresent / totalClasses * 100) : 0;
  var atRisk   = attData.filter(function(a){ return Math.round(a.present/a.total*100) < 75; }).length;
  var critical = attData.filter(function(a){ return Math.round(a.present/a.total*100) < 70; }).length;
  var safe     = attData.length - atRisk;

  // Ring color
  var ringColor = overallPct >= 75 ? '#3ecf8e' : overallPct >= 70 ? '#fbbf24' : '#ff4f4f';
  var ringTrack = overallPct >= 75 ? 'rgba(62,207,142,.18)' : overallPct >= 70 ? 'rgba(245,158,11,.18)' : 'rgba(255,79,79,.18)';

  // SVG ring — 56x56, r=24, circumference=150.8
  var circ = 150.8;
  var dash = Math.round(overallPct / 100 * circ * 10) / 10;
  var ringHtml = '<div class="jac-ring-wrap">'
    + '<svg width="56" height="56" viewBox="0 0 56 56">'
    + '<circle cx="28" cy="28" r="24" fill="none" stroke="' + ringTrack + '" stroke-width="4.5"/>'
    + '<circle cx="28" cy="28" r="24" fill="none" stroke="' + ringColor + '" stroke-width="4.5"'
    + ' stroke-linecap="round"'
    + ' stroke-dasharray="' + dash + ' ' + circ + '"'
    + ' transform="rotate(-90 28 28)"'
    + ' style="transition:stroke-dasharray .6s ease;"/>'
    + '</svg>'
    + '<div class="jac-ring-pct">'
    + '<div class="jac-ring-num" style="color:' + ringColor + ';">' + overallPct + '</div>'
    + '<div class="jac-ring-lbl">%</div>'
    + '</div>'
    + '</div>';

  // Chips
  var chips = '';
  chips += '<div class="jac-chip jac-chip-ok">\u2713 ' + safe + ' safe</div>';
  if (atRisk > 0) chips += '<div class="jac-chip jac-chip-' + (critical > 0 ? 'crit' : 'warn') + '">\u26a0\ufe0f ' + atRisk + ' at risk</div>';
  chips += '<div class="jac-chip" style="background:rgba(167,139,250,.1);color:var(--purple);border:1px solid rgba(167,139,250,.2);">' + attData.length + ' subj</div>';

  // ── Hero ──────────────────────────────────────────────────────────
  var hero = '<div class="jac-hero">'
    + ringHtml
    + '<div class="jac-hero-info">'
    + '<div class="jac-hero-name">Josritha</div>'
    + '<div class="jac-hero-sub">KL UNIVERSITY \u00b7 ' + weekLabel.toUpperCase() + '</div>'
    + '<div class="jac-hero-chips">' + chips + '</div>'
    + '</div>'
    + '<div class="jac-fullview" onclick="jacOpenAcademics()">Full \u2192</div>'
    + '</div>';

  // ── Day navigator + slots ──────────────────────────────────────────
  var dayNav = '';
  var slotSection = '';
  if (ttData) {
    // Build byDay + attMap
    var byDay = {};
    DAY_FULL.forEach(function(d){ byDay[d] = []; });
    ttData.forEach(function(sl){ if (byDay[sl.day]) byDay[sl.day].push(sl); });
    DAY_FULL.forEach(function(d){ byDay[d].sort(function(a,b){ return a.period - b.period; }); });
    var attMap = {};
    attData.forEach(function(a){ attMap[a.code + '|' + a.type] = a; });

    // Determine initial day
    var todayIdx = DAY_FULL.indexOf(todayName);
    var initIdx  = todayIdx >= 0 ? todayIdx : 0;

    // Store state for arrow handlers — separate namespace from full weekview
    window._jacData = {
      byDay: byDay, attMap: attMap,
      DAY_FULL: DAY_FULL, DAY_SHORT: DAY_SHORT,
      TYPE_ICONS: TYPE_ICONS, todayName: todayName,
      curIdx: initIdx
    };

    dayNav = buildJacNav(window._jacData);
    slotSection = buildJacSlots(window._jacData);
  } else {
    // No timetable — show subject intelligence cards
    slotSection = buildSubjectIntelCards(attData, null);
  }

  // ── Severity heatmap ──────────────────────────────────────────────
  // Build risky subjects per day
  var risky = {};
  attData.forEach(function(a) {
    var pct = Math.round(a.present / a.total * 100);
    var key = a.code + '|' + a.type;
    risky[key] = { pct: pct, critical: pct < 70, atrisk: pct < 75 };
  });

  var ttByDay = {};
  DAY_FULL.forEach(function(d){ ttByDay[d] = []; });
  if (ttData) {
    ttData.forEach(function(sl) {
      var key = sl.att_key || (sl.code + '|' + sl.type);
      if (sl.day && ttByDay[sl.day]) {
        var exists = ttByDay[sl.day].some(function(x){ return x.key === key; });
        if (!exists) ttByDay[sl.day].push({ key: key });
      }
    });
  }

  var hmHtml = '<div class="jac-sev">'
    + '<div class="jac-sev-hdr">'
    + '<div class="jac-sev-title">WEEKLY SEVERITY</div>'
    + '<div class="jac-sev-legend">'
    + '<div class="jac-sev-leg-item"><div class="jac-sev-leg-dot" style="background:#3ecf8e;border-radius:2px;"></div>safe</div>'
    + '<div class="jac-sev-leg-item"><div class="jac-sev-leg-dot" style="background:#fbbf24;border-radius:2px;"></div>risk</div>'
    + '<div class="jac-sev-leg-item"><div class="jac-sev-leg-dot" style="background:#ff4f4f;border-radius:2px;"></div>crit</div>'
    + '</div></div>'
    + '<div class="jac-heatmap">';

  for (var di = 0; di < 6; di++) {
    var dn   = DAY_FULL[di];
    var ds   = DAY_SHORT[di];
    var colD = new Date(monday); colD.setDate(monday.getDate() + di);
    var isTod = colD.getTime() === today.getTime();
    var colCls = 'jac-hm-col' + (isTod ? ' tod-col' : '');
    var daySlots = ttByDay[dn] || [];

    hmHtml += '<div class="' + colCls + '" onclick="jacOpenAcademics()">';
    hmHtml += '<div class="jac-hm-lbl">' + ds + (isTod ? '\u25cf' : '') + '</div>';
    hmHtml += '<div class="jac-hm-dots">';

    if (!daySlots.length) {
      hmHtml += '<div class="jac-hm-dot none" title="No classes"></div>';
    } else {
      daySlots.forEach(function(sl) {
        var r = risky[sl.key];
        if (!r) { hmHtml += '<div class="jac-hm-dot safe" title="OK"></div>'; return; }
        var dc = r.critical ? 'crit' : r.atrisk ? 'warn' : 'safe';
        var pctStr = r.pct + '%';
        hmHtml += '<div class="jac-hm-dot ' + dc + '" title="' + pctStr + '"></div>';
      });
    }
    hmHtml += '</div></div>';
  }
  hmHtml += '</div></div>';

  // ── Footer ────────────────────────────────────────────────────────
  var footer = '<div class="jac-footer">'
    + '<div class="jac-footer-ts">' + (attTs ? '\U0001f7e2 Synced ' + attTs : '\u26aa Not synced') + '</div>'
    + '<div class="jac-footer-sync" onclick="jacOpenAcademics()">\u2191 Sync &amp; View</div>'
    + '</div>';

  return '<div class="jac-card w-card">'
    + hero
    + dayNav
    + slotSection
    + hmHtml
    + buildSubjectIntelCards(attData, ttData)
    + footer
    + '</div>';
}

function buildSubjectIntelCards(attData, ttData) {
  var DAY_SHORT = ['MON','TUE','WED','THU','FRI','SAT'];
  var DAY_FULL  = ['MONDAY','TUESDAY','WEDNESDAY','THURSDAY','FRIDAY','SATURDAY'];
  var TYPE_COLOR = {Lecture:'#4f7fff',Lab:'#a78bfa',Tutorial:'#3ecf8e',Seminar:'#f0b429'};

  // Build subject → days map from timetable
  var subjDayMap = {};
  if (ttData) {
    ttData.forEach(function(sl) {
      var key = sl.att_key || (sl.code + '|' + sl.type);
      var di = DAY_FULL.indexOf(sl.day);
      if (di >= 0) {
        if (!subjDayMap[key]) subjDayMap[key] = [];
        if (subjDayMap[key].indexOf(di) === -1) subjDayMap[key].push(di);
      }
    });
  }

  var todayDi = new Date().getDay() - 1; // 0=Mon..5=Sat, -1=Sun

  // Sort: critical → at-risk → good
  var sorted = attData.slice().sort(function(a,b) {
    return Math.round(a.present/a.total*100) - Math.round(b.present/b.total*100);
  });

  var html = '<div class="sic-section">'
    + '<div class="sic-section-title">SUBJECT INTELLIGENCE</div>';

  sorted.forEach(function(a, idx) {
    var pct    = Math.round(a.present / a.total * 100);
    var col    = pct >= 75 ? '#3ecf8e' : pct >= 70 ? '#fbbf24' : '#ff4f4f';
    var colRgb = pct >= 75 ? '62,207,142' : pct >= 70 ? '251,191,36' : '255,79,79';
    var lbl    = pct >= 75 ? 'GOOD' : pct >= 70 ? 'AT RISK' : 'CRITICAL';
    var typeCol = TYPE_COLOR[a.type] || '#4f7fff';
    var key    = a.code + '|' + a.type;
    var absent = a.total - a.present;

    // Actionable insight
    var insight;
    if (pct < 75) {
      var need = Math.max(0, Math.ceil(0.75 * (a.total + 1)) - a.present);
      insight = '\u26a1 Attend next <b style="color:' + col + '">' + need + '</b> class' + (need !== 1 ? 'es' : '');
    } else {
      var canSkip = Math.max(0, Math.floor(a.total * 0.25) - absent);
      insight = '\u2705 Can skip <b style="color:' + col + '">' + canSkip + '</b> more safely';
    }

    // SVG ring (48x48, r=20, circ=125.7)
    var circ = 125.7;
    var dash = Math.round(pct / 100 * circ * 10) / 10;
    var ring = '<svg width="48" height="48" viewBox="0 0 48 48" style="flex-shrink:0">'
      + '<circle cx="24" cy="24" r="20" fill="none" stroke="rgba(' + colRgb + ',.18)" stroke-width="3.5"/>'
      + '<circle cx="24" cy="24" r="20" fill="none" stroke="' + col + '" stroke-width="3.5"'
      + ' stroke-linecap="round" stroke-dasharray="' + dash + ' ' + circ + '" transform="rotate(-90 24 24)"'
      + ' style="transition:stroke-dasharray .7s ease"/>'
      + '<text x="24" y="28" text-anchor="middle" font-size="10" font-weight="800" fill="' + col + '" font-family="DM Mono,monospace">' + pct + '%</text>'
      + '</svg>';

    // Weekly day pattern dots Mon–Sat
    var days = subjDayMap[key] || [];
    var dotRow = '<div class="sic-day-row">';
    for (var di = 0; di < 6; di++) {
      var hasClass = days.indexOf(di) !== -1;
      var isToday  = di === todayDi;
      if (!hasClass) {
        dotRow += '<div class="sic-day-cell sic-day-off">'
          + '<span class="sic-day-lbl">' + DAY_SHORT[di] + '</span>'
          + '<span class="sic-day-dot sic-dot-off"></span>'
          + '</div>';
      } else {
        dotRow += '<div class="sic-day-cell' + (isToday ? ' sic-day-today' : '') + '">'
          + '<span class="sic-day-lbl" style="color:' + (isToday ? col : '') + '">' + DAY_SHORT[di] + '</span>'
          + '<span class="sic-day-dot" style="background:' + col + ';box-shadow:0 0 6px rgba(' + colRgb + ',.55)' + (isToday ? ';outline:2px solid ' + col + ';outline-offset:2px' : '') + '"></span>'
          + '</div>';
      }
    }
    dotRow += '</div>';

    // Segmented progress bar
    var pctP = (a.present / a.total * 100).toFixed(1);
    var pctA = (absent / a.total * 100).toFixed(1);
    var bar = '<div class="sic-bar-wrap">'
      + '<div class="sic-bar-track">'
      + '<div class="sic-bar-fill" style="width:' + pctP + '%;background:' + col + '"></div>'
      + '<div class="sic-bar-absent" style="width:' + pctA + '%"></div>'
      + '</div>'
      + '<div class="sic-bar-labels">'
      + '<span style="color:' + col + '">' + a.present + ' present</span>'
      + '<span style="color:rgba(255,79,79,.8)">' + absent + ' absent</span>'
      + '<span style="color:var(--text3)">' + a.total + ' total</span>'
      + '</div>'
      + '</div>';

    html += '<div class="sic-card" style="animation-delay:' + (idx * 55) + 'ms;border-color:rgba(' + colRgb + ',.25)">'
      + '<div class="sic-top">'
      + ring
      + '<div class="sic-info">'
      + '<div class="sic-name">' + a.subject + '</div>'
      + '<div class="sic-tags">'
      + '<span class="sic-code">' + a.code + '</span>'
      + '<span class="sic-type" style="color:' + typeCol + ';background:rgba(' + colRgb + ',.08)">' + a.type + '</span>'
      + '<span class="sic-status" style="color:' + col + ';background:rgba(' + colRgb + ',.15)">' + lbl + '</span>'
      + '</div>'
      + '<div class="sic-insight">' + insight + '</div>'
      + '</div>'
      + '</div>'
      + bar
      + (days.length || !ttData ? dotRow : '')
      + '</div>';
  });

  html += '</div>';
  return html;
}

function buildJacNav(d) {
  var curIdx   = d.curIdx;
  var DAY_FULL = d.DAY_FULL;
  var DAY_SHORT= d.DAY_SHORT;
  var byDay    = d.byDay;
  var todayName= d.todayName;
  var day      = DAY_FULL[curIdx];
  var isToday  = day === todayName;

  var prevOff = curIdx <= 0 ? ' off' : '';
  var nextOff = curIdx >= DAY_FULL.length - 1 ? ' off' : '';
  var todayPill = isToday ? '<span class="jac-nav-today">TODAY</span>' : '';

  var nav = '<div class="jac-daynav">'
    + '<div class="jac-nav-arrow' + prevOff + '" onclick="jacNav(-1)">\u2039</div>'
    + '<div class="jac-nav-center">'
    + '<div class="jac-nav-dayname">' + DAY_SHORT[curIdx] + todayPill + '</div>'
    + '</div>'
    + '<div class="jac-nav-arrow' + nextOff + '" onclick="jacNav(1)">\u203a</div>'
    + '</div>';

  // Dots row
  nav += '<div class="jac-nav-dots">';
  DAY_FULL.forEach(function(dd, ii) {
    var cls = 'jac-dot';
    if (ii === curIdx)                              { cls += ' on'; }
    else if (byDay[dd] && byDay[dd].length)         { cls += ' has'; }
    if (dd === todayName && ii !== curIdx)           { cls += ' tod'; }
    nav += '<div class="' + cls + '" onclick="jacNavTo(' + ii + ')"></div>';
  });
  nav += '</div>';
  return nav;
}

function buildJacSlots(d) {
  var curIdx   = d.curIdx;
  var DAY_FULL = d.DAY_FULL;
  var byDay    = d.byDay;
  var attMap   = d.attMap;
  var TYPE_ICONS = d.TYPE_ICONS;
  var slots    = byDay[DAY_FULL[curIdx]] || [];

  if (!slots.length) {
    return '<div class="jac-swipe-zone" id="jac-swipe-zone"><div class="jac-swipe-hint left" id="jac-hint-left">‹</div><div class="jac-swipe-hint right" id="jac-hint-right">›</div><div class="jac-slots" id="jac-slots-inner"><div class="jac-noclss">\U0001f389 No classes today</div></div></div>';
  }

  var html = '<div class="jac-swipe-zone" id="jac-swipe-zone"><div class="jac-swipe-hint left" id="jac-hint-left">‹</div><div class="jac-swipe-hint right" id="jac-hint-right">›</div><div class="jac-slots jac-anim" id="jac-slots-inner">';
  slots.forEach(function(sl) {
    var att = attMap[sl.att_key || (sl.code + '|' + sl.type)];
    var pct = att ? Math.round(att.present / att.total * 100) : null;
    var col = pct === null ? 'var(--text3)' : pct >= 75 ? '#3ecf8e' : pct >= 70 ? '#fbbf24' : '#ff4f4f';
    var bg  = pct === null ? 'transparent'  : pct >= 75 ? 'rgba(62,207,142,.12)' : pct >= 70 ? 'rgba(245,158,11,.12)' : 'rgba(255,79,79,.12)';
    var pctLabel = pct !== null ? pct + '%' : '--';
    var riskMark = (pct !== null && pct < 75) ? ' \u26a0' : '';
    var timeStr  = sl.time ? sl.time.split('-')[0].trim() : '';
    html += '<div class="jac-slot">'
      + '<div class="jac-slot-bar" style="background:' + col + ';"></div>'
      + '<div class="jac-slot-inner">'
      + '<div class="jac-slot-time">' + timeStr + '</div>'
      + '<div class="jac-slot-body">'
      + '<div class="jac-slot-name">' + (sl.subject || sl.code) + '</div>'
      + '<div class="jac-slot-meta">' + (TYPE_ICONS[sl.type] || '\U0001f4cc') + ' ' + sl.type + ' \u00b7 ' + (sl.room || 'P' + sl.period) + '</div>'
      + '</div>'
      + '<div class="jac-slot-pct" style="background:' + bg + ';color:' + col + ';">' + pctLabel + riskMark + '</div>'
      + '</div></div>';
  });
  html += '</div></div>';
  return html;
}


function jacInitSwipe() {
  var zone = document.getElementById('jac-swipe-zone');
  if (!zone || zone._swipeInit) return;
  zone._swipeInit = true;

  var startX = 0, startY = 0, curX = 0;
  var dragging = false, locked = false;
  var THRESHOLD = 40;
  var VELOCITY_THRESHOLD = 0.3;
  var startTime = 0;

  var slotsEl   = document.getElementById('jac-slots-inner');
  var hintLeft  = document.getElementById('jac-hint-left');
  var hintRight = document.getElementById('jac-hint-right');

  function getD() { return window._jacData; }

  zone.addEventListener('touchstart', function(e) {
    var t = e.touches[0];
    startX = t.clientX; startY = t.clientY;
    startTime = Date.now();
    dragging = true; locked = false; curX = 0;
    if (slotsEl) slotsEl.style.transition = 'none';
  }, { passive: true });

  zone.addEventListener('touchmove', function(e) {
    if (!dragging) return;
    var t = e.touches[0];
    var dx = t.clientX - startX;
    var dy = t.clientY - startY;
    if (!locked) {
      if (Math.abs(dy) > Math.abs(dx) + 4) { dragging = false; return; }
      locked = true;
    }
    curX = dx;
    var d = getD();
    var atLeft  = !d || d.curIdx <= 0;
    var atRight = !d || d.curIdx >= d.DAY_FULL.length - 1;
    var resist  = (atLeft && dx > 0) || (atRight && dx < 0);
    var tx = resist ? dx * 0.18 : dx;
    if (slotsEl) slotsEl.style.transform = 'translateX(' + tx + 'px)';
    if (hintLeft)  hintLeft.className  = 'jac-swipe-hint left'  + (dx >  15 && !atLeft  ? ' show' : '');
    if (hintRight) hintRight.className = 'jac-swipe-hint right' + (dx < -15 && !atRight ? ' show' : '');
  }, { passive: true });

  zone.addEventListener('touchend', function() {
    if (!dragging || !locked) return;
    dragging = false;
    var elapsed  = Math.max(1, Date.now() - startTime);
    var velocity = Math.abs(curX) / elapsed;
    var isFlick  = velocity > VELOCITY_THRESHOLD;
    var isFar    = Math.abs(curX) > THRESHOLD;
    var d        = getD();
    if (hintLeft)  hintLeft.className  = 'jac-swipe-hint left';
    if (hintRight) hintRight.className = 'jac-swipe-hint right';
    if ((isFar || isFlick) && d) {
      var dir    = curX < 0 ? 1 : -1;
      var newIdx = d.curIdx + dir;
      if (newIdx >= 0 && newIdx < d.DAY_FULL.length) {
        if (slotsEl) {
          slotsEl.style.transition = 'transform 0.16s ease-in';
          slotsEl.style.transform  = 'translateX(' + (curX < 0 ? '-110%' : '110%') + ')';
        }
        setTimeout(function() {
          d.curIdx = newIdx;
          jacRefresh();
          var fresh = document.getElementById('jac-slots-inner');
          if (fresh) {
            fresh.style.transition = 'none';
            fresh.style.transform  = 'translateX(' + (curX < 0 ? '60px' : '-60px') + ')';
            requestAnimationFrame(function() {
              requestAnimationFrame(function() {
                fresh.style.transition = 'transform 0.2s cubic-bezier(.25,.46,.45,.94)';
                fresh.style.transform  = 'translateX(0)';
              });
            });
          }
          jacInitSwipe();
        }, 150);
        return;
      }
    }
    if (slotsEl) {
      slotsEl.style.transition = 'transform 0.22s cubic-bezier(.25,.46,.45,.94)';
      slotsEl.style.transform  = 'translateX(0)';
    }
  }, { passive: true });
}

function jacNav(dir) {
  var d = window._jacData;
  if (!d) return;
  var n = d.curIdx + dir;
  if (n < 0 || n >= d.DAY_FULL.length) return;
  d.curIdx = n;
  jacRefresh();
}
function jacNavTo(idx) {
  var d = window._jacData;
  if (!d) return;
  d.curIdx = idx;
  jacRefresh();
}
function jacRefresh() {
  var d = window._jacData;
  if (!d) return;
  var card = document.querySelector('.jac-card');
  if (!card) return;
  // Replace daynav + slots only — find the .jac-daynav and onwards up to .jac-sev
  var navEl = card.querySelector('.jac-daynav');
  var sevEl = card.querySelector('.jac-sev');
  if (!navEl || !sevEl) return;
  // Remove everything between jac-daynav (incl. dots row) and jac-sev
  var toRemove = [];
  var el = navEl;
  while (el && el !== sevEl) {
    toRemove.push(el);
    el = el.nextElementSibling;
  }
  toRemove.forEach(function(e){ e.remove(); });
  // Insert fresh nav + slots before sevEl
  var tmp = document.createElement('div');
  tmp.innerHTML = buildJacNav(d) + buildJacSlots(d);
  while (tmp.firstChild) {
    card.insertBefore(tmp.firstChild, sevEl);
  }
  // Re-attach swipe after DOM update
  requestAnimationFrame(function(){ jacInitSwipe(); });
}

/* ─── LIVE ATTENDANCE RISK METER ─── */
function buildAttRiskMeter() {
  var attRaw = localStorage.getItem('fp_attendance_synced');
  var attData = attRaw ? JSON.parse(attRaw) : (typeof ATTENDANCE !== 'undefined' ? ATTENDANCE : []);

  // Merge by subject+type, pick unique subjects (take first of each code)
  var seen = {};
  var subjects = [];
  attData.forEach(function(a) {
    if (!seen[a.code]) {
      seen[a.code] = true;
      subjects.push(a);
    }
  });

  var overallPresent = attData.reduce(function(s,a){ return s+a.present; }, 0);
  var overallTotal   = attData.reduce(function(s,a){ return s+a.total; }, 0);
  var overallPct = overallTotal ? Math.round(overallPresent/overallTotal*100) : 0;
  var atRisk = subjects.filter(function(a){ return Math.round(a.present/a.total*100) < 75; }).length;

  var overallClass = overallPct >= 80 ? 'bills-chip-green' : overallPct >= 75 ? 'bills-chip-gold' : 'bills-chip-red';
  var overallLabel = overallPct >= 80 ? '\u2714 Safe' : overallPct >= 75 ? '\u26A0 Warning' : '\u26D4 At Risk';

  var html = '<div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:12px;">'
    + '<div class="w-hdr" style="margin:0;">\uD83D\uDCCA\u00A0Josritha Attendance</div>'
    + '<span class="bills-chip ' + overallClass + '" style="font-size:10px;">' + overallPct + '% ' + overallLabel + '</span>'
    + '</div>'
    + '<div class="att-risk-bar-list">';

  subjects.forEach(function(a) {
    var pct = a.total ? Math.round(a.present/a.total*100) : 0;
    var fillClass = pct >= 80 ? 'att-risk-fill-green' : pct >= 75 ? 'att-risk-fill-gold' : 'att-risk-fill-red';
    var shortName = a.subject.length > 18 ? a.subject.slice(0,17) + '\u2026' : a.subject;
    html += '<div class="att-risk-row">'
      + '<div class="att-risk-subj" title="' + a.subject + '">' + shortName + '</div>'
      + '<div class="att-risk-track"><div class="att-risk-fill ' + fillClass + '" style="width:' + pct + '%;"></div></div>'
      + '<div class="att-risk-pct" style="color:' + (pct>=80?'var(--green)':pct>=75?'var(--gold)':'var(--red)') + ';">' + pct + '%</div>'
      + '</div>';
  });

  html += '</div>';

  if (atRisk > 0) {
    html += '<div style="margin-top:10px;padding:8px 10px;background:rgba(239,68,68,.1);border-radius:10px;font-size:11px;font-weight:700;color:var(--red);">'
      + '\u26A0\uFE0F ' + atRisk + ' subject' + (atRisk>1?'s':' ') + ' below 75% — risk of being barred'
      + '</div>';
  }

  return html;
}

function buildAttSeverityWidget() {
  var DAY_SHORT = ['MON','TUE','WED','THU','FRI','SAT'];
  var DAY_FULL  = ['MONDAY','TUESDAY','WEDNESDAY','THURSDAY','FRIDAY','SATURDAY'];
  var today = new Date(); today.setHours(0,0,0,0);
  var todayDow = today.getDay(); // 0=Sun..6=Sat
  // Find this week's Monday
  var monday = new Date(today);
  var diffToMon = (todayDow === 0) ? -6 : 1 - todayDow;
  monday.setDate(today.getDate() + diffToMon);

  // Load data
  var attRaw = localStorage.getItem('fp_attendance_synced');
  var ttRaw  = localStorage.getItem('fp_timetable_synced');
  var attTs  = localStorage.getItem('fp_attendance_synced_ts') || '';

  if (!attRaw || !ttRaw) {
    return '<div class="w-card asw-card">'
      + '<div class="asw-header"><div class="asw-header-left">'
      + '<div><div class="asw-title">📚 Attendance Severity</div>'
      + '<div class="asw-subtitle">JOSRITHA \u00B7 THIS WEEK</div></div></div></div>'
      + '<div class="asw-no-data">'
      + '<div class="asw-no-data-icon">\uD83D\uDCCA</div>'
      + '<div class="asw-no-data-text">Upload attendance and timetable<br>to see weekly risk view</div>'
      + '<div class="asw-no-data-btn" onclick="jacOpenAcademics()">Upload Data \u2192</div>'
      + '</div></div>';
  }

  var attData = JSON.parse(attRaw);
  var ttData  = JSON.parse(ttRaw);

  // Build risky subjects map: attKey -> subject info
  var risky = {};
  attData.forEach(function(a) {
    var pct = Math.round(a.present / a.total * 100);
    if (pct < 75) {
      var key = a.code + '|' + a.type;
      risky[key] = {
        pct: pct,
        code: a.code,
        type: a.type,
        subject: a.subject,
        critical: pct < 70
      };
    }
  });

  var riskCount = Object.keys(risky).length;

  if (riskCount === 0) {
    return '<div class="w-card asw-card">'
      + '<div class="asw-header"><div class="asw-header-left">'
      + '<div><div class="asw-title">📚 Attendance Severity</div>'
      + '<div class="asw-subtitle">JOSRITHA \u00B7 THIS WEEK</div></div></div>'
      + '<span class="asw-badge-count all-safe">\u2705 All Safe</span></div>'
      + '<div class="asw-all-safe">'
      + '<div class="asw-safe-icon">\uD83C\uDF89</div>'
      + '<div class="asw-safe-text">All subjects above 75%</div>'
      + '<div class="asw-safe-sub">Great job \u2014 keep it up!</div>'
      + '</div></div>';
  }

  // Build timetable lookup: DAY_FULL_NAME -> [{attKey, ...}]
  var ttByDay = {};
  DAY_FULL.forEach(function(d) { ttByDay[d] = []; });
  ttData.forEach(function(slot) {
    var key = slot.att_key || (slot.code + '|' + slot.type);
    if (risky[key] && slot.day && ttByDay[slot.day]) {
      // avoid dupes on same day
      var exists = ttByDay[slot.day].some(function(x) { return x.attKey === key; });
      if (!exists) ttByDay[slot.day].push({ attKey: key });
    }
  });

  // Count critical/risk
  var critCount = Object.values(risky).filter(function(r){ return r.critical; }).length;
  var badgeClass = critCount > 0 ? 'has-critical' : 'has-risk';
  var badgeTxt = critCount > 0
    ? (critCount + ' Critical, ' + (riskCount - critCount) + ' Risk')
    : (riskCount + ' At Risk');

  // Week date range label
  var saturday = new Date(monday); saturday.setDate(monday.getDate() + 5);
  var fmt = function(d) {
    return d.toLocaleDateString('en-IN',{day:'numeric',month:'short'});
  };
  var weekLabel = fmt(monday) + ' \u2014 ' + fmt(saturday);

  // Build header
  var html = '<div class="w-card asw-card">';
  html += '<div class="asw-header">'
    + '<div class="asw-header-left">'
    + '<div>'
    + '<div class="asw-title">\uD83D\uDCDA Attendance Severity</div>'
    + '<div class="asw-subtitle">JOSRITHA \u00B7 ' + weekLabel.toUpperCase() + '</div>'
    + '</div></div>'
    + '<span class="asw-badge-count ' + badgeClass + '">' + badgeTxt + '</span>'
    + '</div>';

  // Build 6-column grid Mon-Sat
  html += '<div class="asw-grid">';
  for (var di = 0; di < 6; di++) {
    var dayName = DAY_FULL[di];
    var dayShort = DAY_SHORT[di];
    var colDate = new Date(monday); colDate.setDate(monday.getDate() + di);
    var isToday = colDate.getTime() === today.getTime();
    var colClass = 'asw-day-col' + (isToday ? ' today-col' : '');
    var slots = ttByDay[dayName] || [];

    html += '<div class="' + colClass + '">';
    html += '<div class="asw-day-lbl">' + dayShort + (isToday ? ' \u25CF' : '') + '</div>';

    if (slots.length === 0) {
      html += '<div class="asw-empty-day"><div class="asw-empty-dot"></div></div>';
    } else {
      slots.forEach(function(slot, idx) {
        var r = risky[slot.attKey];
        if (!r) return;
        var cardClass = r.critical ? 'asw-subj-card critical' : 'asw-subj-card at-risk';
        var icon = r.critical ? '\uD83D\uDEA8' : '\u26A0\uFE0F';
        // Shorten subject name: use first meaningful word(s)
        var words = r.subject.split(' ');
        var shortName = words.length > 2 ? words[0] + ' ' + words[1] : r.subject;
        if (shortName.length > 12) shortName = shortName.substring(0, 11) + '\u2026';
        var delay = (di * 60 + idx * 80) + 'ms';
        html += '<div class="' + cardClass + '" style="animation-delay:' + delay + '" onclick="jacOpenAcademics()">'
          + '<div class="asw-subj-icon">' + icon + '</div>'
          + '<div class="asw-subj-pct">' + r.pct + '%</div>'
          + '<div class="asw-subj-name">' + shortName + '</div>'
          + '<div class="asw-subj-code">' + r.code + '</div>'
          + '<div class="asw-subj-type">' + r.type.substring(0,3).toUpperCase() + '</div>'
          + '</div>';
      });
    }
    html += '</div>'; // asw-day-col
  }
  html += '</div>'; // asw-grid

  // Footer
  html += '<div class="asw-footer">'
    + '<div class="asw-footer-ts">'
    + (attTs ? 'Synced ' + attTs : 'Not synced')
    + '</div>'
    + '<div class="asw-sync-btn" onclick="jacOpenAcademics()">\u2191 Sync</div>'
    + '</div>';

  html += '</div>'; // asw-card
  return html;
}


/* ═══════════════════════════════════════════════════════════
   GRAVITY TIMELINE — shell builder + renderer
═══════════════════════════════════════════════════════════ */
function buildGravityTimelineShell() {
  return '<div class="gtl-card w-card" id="gtl-card">'
    + '<div class="gtl-header">'
    + '<div style="display:flex;align-items:center;">'
    + '<div class="gtl-title">\u23f3\u00a0 Upcoming</div>'
    + '<span class="gtl-count" id="gtl-count">...</span>'
    + '</div>'
    + '<div class="gtl-cal-link" onclick="goPage(\'calendar\')">Calendar \u2192</div>'
    + '</div>'
    + '<div class="gtl-horizon"><div class="gtl-horizon-inner" id="gtl-horizon-inner"></div></div>'
    + '<div class="gtl-month-nav">'
    + '<div class="gtl-month-btn" id="gtl-prev-btn" onclick="tlNavMonth(-1)">\u2039</div>'
    + '<div class="gtl-month-lbl" id="tl-month-label">Loading\u2026</div>'
    + '<div class="gtl-month-btn" id="gtl-next-btn" onclick="tlNavMonth(1)">\u203a</div>'
    + '</div>'
    + '<div id="timeline-list"></div>'
    + '</div>';
}

/* Member avatar colors */
var GTL_MEMBER_COLORS = {
  Rajasekhar:  { bg:'#3b6fd4', init:'RR' },
  Vasundhara:  { bg:'#7c3aed', init:'VD' },
  Josritha:    { bg:'#db2777', init:'JD' },
  Jeevan:      { bg:'#0891b2', init:'JR' },
  Family:      { bg:'#6b7280', init:'ALL'}
};

/* Category icon backgrounds */
var GTL_CAT_BG = {
  health:     'rgba(255,79,79,.15)',
  government: 'rgba(255,140,66,.15)',
  education:  'rgba(167,139,250,.15)',
  finance:    'rgba(240,180,41,.15)',
  travel:     'rgba(79,127,255,.15)',
  birthday:   'rgba(244,114,182,.15)',
  expiry:     'rgba(255,140,66,.15)'
};
var GTL_CAT_ICON = {
  health:'🏥', government:'\uD83C\uDFDB\uFE0F', education:'\uD83C\uDF93',
  finance:'\uD83D\uDCB0', travel:'\u2708\uFE0F', birthday:'\uD83C\uDF82', expiry:'\uD83D\uDCCB'
};

function renderTimeline() {
  var tlList = document.getElementById('timeline-list');
  if (!tlList) return;

  var now = new Date(); now.setHours(0,0,0,0);

  var allCalEvts = [];
  try { allCalEvts = (typeof getCalEvents === 'function') ? getCalEvents() : JSON.parse(localStorage.getItem('fp_cal_events') || '[]'); } catch(e) { allCalEvts = []; }

  var tlOffset = typeof _tlMonthOffset !== 'undefined' ? _tlMonthOffset : 0;
  var tlTargetDate = new Date(now.getFullYear(), now.getMonth() + tlOffset, 1);
  var tlYear  = tlTargetDate.getFullYear();
  var tlMonth = tlTargetDate.getMonth();
  var tlMonthStart = new Date(tlYear, tlMonth, 1);
  var tlMonthEnd   = new Date(tlYear, tlMonth + 1, 0); tlMonthEnd.setHours(23,59,59,999);
  var tlMonthName  = tlTargetDate.toLocaleString('en-IN',{month:'long',year:'numeric'}).toUpperCase();
  var isCurrentMonth = (tlOffset === 0);

  /* Update month nav controls */
  var tlLabel = document.getElementById('tl-month-label');
  var tlPrev  = document.getElementById('gtl-prev-btn') || document.getElementById('tl-prev-btn');
  var tlNext  = document.getElementById('gtl-next-btn') || document.getElementById('tl-next-btn');
  if (tlLabel) tlLabel.textContent = tlMonthName;
  if (tlPrev)  tlPrev.className = 'gtl-month-btn' + (tlOffset <= -3 ? ' off' : '');
  if (tlNext)  tlNext.className = 'gtl-month-btn' + (tlOffset >= 3  ? ' off' : '');

  /* Gather + filter events */
  var calFiltered = allCalEvts.filter(function(ev) {
    if (ev.id && ev.id.indexOf('att_risk_') === 0) return false;
    var evDate = new Date(ev.date + 'T12:00:00');
    return evDate >= tlMonthStart && evDate <= tlMonthEnd;
  });

  var expiryAll = (typeof EXPIRY !== 'undefined' ? EXPIRY : []);
  var expiryFiltered = expiryAll.filter(function(e) {
    var evDate = new Date(e.date + 'T12:00:00');
    return evDate >= tlMonthStart && evDate <= tlMonthEnd;
  }).map(function(e) {
    return { _isExpiry:true, title:e.label, date:e.date, members:[e.person],
             icon:e.icon||'\uD83D\uDCCB', id:e.id, cat:'expiry', color:'#ff8c42' };
  });

  var overdueExpiry = isCurrentMonth ? expiryAll.filter(function(e) {
    if (typeof daysUntil !== 'function') return false;
    var d = daysUntil(e.date);
    return d < 0 && d >= -90;
  }).map(function(e) {
    return { _isExpiry:true, title:e.label, date:e.date, members:[e.person],
             icon:e.icon||'\uD83D\uDCCB', id:e.id, cat:'expiry', color:'#ff4f4f' };
  }) : [];

  var evts = calFiltered.concat(expiryFiltered).concat(overdueExpiry)
    .filter(function(v,i,a){ return a.findIndex(function(x){ return x.id===v.id; })===i; })
    .sort(function(a,b){ return (typeof daysUntil==='function')?(daysUntil(a.date)-daysUntil(b.date)):0; });

  /* Update event count chip */
  var countEl = document.getElementById('gtl-count');
  if (countEl) countEl.textContent = evts.length + ' event' + (evts.length !== 1 ? 's' : '');

  /* Build horizon strip */
  var horizEl = document.getElementById('gtl-horizon-inner');
  if (horizEl) {
    if (isCurrentMonth && evts.length) {
      var horizHtml = '<div class="gtl-horizon-track"></div>';
      /* fill line up to today */
      horizHtml += '<div class="gtl-horizon-fill" style="width:0;"></div>';
      /* today marker at right edge (today = end of visible window) */
      horizHtml += '<div class="gtl-horizon-today" style="right:0;left:auto;transform:translateY(-50%);"></div>';
      /* event dots — position based on days-before: events in past 90d spread left to right */
      var horizSpan = 90;
      evts.slice(0,12).forEach(function(ev) {
        var d = daysUntil(ev.date);
        /* Show events within +-30 days of today on the strip */
        if (d < -30 || d > 60) return;
        var pct = Math.round(((d + 30) / 90) * 100);
        if (pct < 0) pct = 0; if (pct > 100) pct = 100;
        var col = ev.color || (ev.cat && GTL_CAT_ICON[ev.cat] ? '#a78bfa' : '#7aa0ff');
        horizHtml += '<div class="gtl-horizon-dot" style="left:' + pct + '%;background:' + col + ';box-shadow:0 0 5px ' + col + '60;" title="' + ev.title + '"></div>';
      });
      horizEl.innerHTML = horizHtml;
    } else {
      horizEl.innerHTML = '';
    }
  }

  /* Split into groups */
  var overdue  = isCurrentMonth ? evts.filter(function(ev){ return typeof daysUntil==='function'&&daysUntil(ev.date)<0; }) : [];
  var todayEvs = evts.filter(function(ev){ return typeof daysUntil==='function'&&daysUntil(ev.date)===0; });
  var upcoming = evts.filter(function(ev){ return !isCurrentMonth||(typeof daysUntil==='function'&&daysUntil(ev.date)>0); });

  if (!evts.length) {
    tlList.innerHTML = '<div class="gtl-empty">No events in ' + tlMonthName + '</div>';
    return;
  }

  var html = '';

  /* ── Overdue banner (compact, collapsed into one row if multiple) ── */
  if (overdue.length) {
    var obTitle = overdue.length === 1
      ? ('\u26a0\ufe0f ' + overdue[0].title)
      : ('\u26a0\ufe0f ' + overdue.length + ' overdue items');
    var obSub = overdue.length === 1
      ? (Math.abs(daysUntil(overdue[0].date)) + ' days past due')
      : overdue.map(function(e){ return e.title.split(' ').slice(0,2).join(' '); }).join(' \u00b7 ');
    html += '<div class="gtl-overdue-banner" onclick="goPage(\'' + (overdue[0]._isExpiry ? 'expiry' : 'calendar') + '\')">'
      + '<div class="gtl-ob-icon gtl-pulse">\uD83D\uDEA8</div>'
      + '<div class="gtl-ob-body">'
      + '<div class="gtl-ob-title">' + obTitle + '</div>'
      + '<div class="gtl-ob-sub">' + obSub + '</div>'
      + '</div>'
      + '<div class="gtl-ob-arrow">\u203a</div>'
      + '</div>';
  }

  /* ── Today events ── */
  if (todayEvs.length) {
    todayEvs.forEach(function(ev) {
      html += buildGtlHero(ev, true);
    });
  }

  /* ── Hero: first upcoming event ── */
  if (upcoming.length && !todayEvs.length) {
    html += buildGtlHero(upcoming[0], false);
    upcoming = upcoming.slice(1);
  } else if (upcoming.length && todayEvs.length) {
    /* if today events exist, hero is first upcoming */
    html += buildGtlHero(upcoming[0], false);
    upcoming = upcoming.slice(1);
  }

  /* ── Remaining rows ── */
  /* Split near (<=30d) and far (>30d) */
  var near = upcoming.filter(function(ev){ return typeof daysUntil!=='function'||daysUntil(ev.date)<=30; });
  var far  = upcoming.filter(function(ev){ return typeof daysUntil==='function'&&daysUntil(ev.date)>30; });

  if (near.length || far.length) {
    html += '<div class="gtl-list">';
    near.forEach(function(ev, i) {
      html += buildGtlRow(ev, i * 40);
    });
    if (far.length) {
      html += '</div>';
      html += '<div class="gtl-far-label">\u00b7\u00b7\u00b7\u00b7\u00b7 beyond 30 days \u00b7\u00b7\u00b7\u00b7\u00b7</div>';
      html += '<div class="gtl-list" style="opacity:.55;">';
      far.slice(0,4).forEach(function(ev, i) {
        html += buildGtlRow(ev, (near.length + i) * 40);
      });
      if (far.length > 4) {
        html += '<div class="gtl-far-label">+' + (far.length - 4) + ' more \u2192 <span style="color:var(--blue2);cursor:pointer;" onclick="goPage(\'calendar\')">Calendar</span></div>';
      }
    }
    html += '</div>';
  }

  tlList.innerHTML = html;
}

function buildGtlHero(ev, isToday) {
  var d   = daysUntil(ev.date);
  var col = ev.color || '#7c5cfc';
  var cat = ev.cat || (ev._isExpiry ? 'expiry' : 'upcoming');
  var dest = ev._isExpiry ? 'expiry' : 'calendar';

  /* gradient from event color */
  var r = parseInt(col.slice(1,3),16)||120;
  var g = parseInt(col.slice(3,5),16)||80;
  var b = parseInt(col.slice(5,7),16)||200;
  var gradBg = 'linear-gradient(135deg, rgba(' + r + ',' + g + ',' + b + ',.95) 0%, rgba(' + Math.round(r*.7) + ',' + Math.round(g*.7) + ',' + Math.round(b*1.1) + ',.9) 100%)';

  var eyebrow = isToday ? 'TODAY' : ('\u23f3 NEXT UP \u00b7 ' + (cat ? cat.toUpperCase() : 'EVENT'));

  var countdownHtml = isToday
    ? '<div class="gtl-hero-today-badge">TODAY</div>'
    : '<div class="gtl-hero-days">' + d + '</div><div class="gtl-hero-dlbl">days away</div>';

  /* member avatar pills */
  var mems = (ev.members || []).filter(function(m){ return m && m !== 'all'; }).slice(0,3);
  var avHtml = '';
  mems.forEach(function(m) {
    var info = GTL_MEMBER_COLORS[m] || { bg:'#6b7280', init: m.slice(0,2).toUpperCase() };
    avHtml += '<div class="gtl-hero-av" style="background:' + info.bg + ';">' + info.init + '</div>';
  });
  if ((ev.members||[]).indexOf('all') >= 0) {
    avHtml = '<div class="gtl-hero-av" style="background:#6b7280;">ALL</div>';
  }

  var timeStr = ev.start ? ev.start + (ev.end ? '\u2013' + ev.end : '') : '';
  var dateStr = fmtDate(ev.date);

  return '<div class="gtl-hero gtl-hero-anim" onclick="goPage(\'' + dest + '\')">'
    + '<div class="gtl-hero-bg" style="background:' + gradBg + ';">'
    + '<div class="gtl-hero-shine"></div>'
    + '<div class="gtl-hero-eyebrow" style="color:rgba(255,255,255,.75);">' + eyebrow + '</div>'
    + '<div class="gtl-hero-title">' + ev.title + '</div>'
    + '<div class="gtl-hero-meta">'
    + (avHtml ? '<div class="gtl-hero-members">' + avHtml + '</div>' : '')
    + '<div class="gtl-hero-time">' + (timeStr ? timeStr + ' \u00b7 ' : '') + dateStr + '</div>'
    + '</div>'
    + '<div class="gtl-hero-countdown">' + countdownHtml + '</div>'
    + '</div>'
    + '</div>';
}

function buildGtlRow(ev, animDelay) {
  var d    = daysUntil(ev.date);
  var col  = ev.color || '#7aa0ff';
  var cat  = ev.cat  || (ev._isExpiry ? 'expiry' : 'upcoming');
  var icon = (ev._isExpiry && ev.icon) ? ev.icon : (GTL_CAT_ICON[cat] || '\uD83D\uDCC5');
  var bg   = GTL_CAT_BG[cat] || 'rgba(79,127,255,.12)';
  var dest = ev._isExpiry ? 'expiry' : 'calendar';

  /* Tension dots: 1 dot per ~5 days, max 8, color shifts warm→cool */
  var dotCount = Math.min(8, Math.round(d / 5));
  var dotsHtml = '';
  for (var i = 0; i < dotCount; i++) {
    var frac = i / Math.max(dotCount - 1, 1);
    /* interpolate red→gold→blue */
    var dotCol = d < 14 ? 'rgba(255,140,66,.5)' : d < 30 ? 'rgba(240,180,41,.5)' : 'rgba(122,160,255,.35)';
    dotsHtml += '<div class="gtl-tdot" style="background:' + dotCol + ';"></div>';
  }

  var dateShort = new Date(ev.date + 'T12:00:00').toLocaleDateString('en-IN',{day:'numeric',month:'short'});
  var members = (ev.members||[]).filter(function(m){ return m&&m!=='all'; }).join(' \u00b7 ');
  if ((ev.members||[]).indexOf('all') >= 0) members = 'Everyone';

  return '<div class="gtl-row gtl-row-anim" style="animation-delay:' + animDelay + 'ms;" onclick="goPage(\'' + dest + '\')">'
    + '<div class="gtl-row-icon" style="background:' + bg + ';">' + icon + '</div>'
    + '<div class="gtl-row-body">'
    + '<div class="gtl-row-title">' + ev.title + '</div>'
    + '<div class="gtl-row-meta">' + (members ? members + ' \u00b7 ' : '') + dateShort + '</div>'
    + '</div>'
    + '<div class="gtl-row-right">'
    + '<div class="gtl-tension">' + dotsHtml + '</div>'
    + '<div class="gtl-row-date">in ' + d + 'd</div>'
    + '</div>'
    + '</div>';
}


function tlItemHTML(ev) {
  var d = daysUntil(ev.date);
  var col = d < 0 ? 'var(--red)' : d === 0 ? 'var(--gold)' : ev.color || 'var(--blue2)';
  var badge = d < 0 ? 'overdue' : d === 0 ? 'today' : 'upcoming';
  var badgeTxt = d < 0 ? (Math.abs(d)+'d overdue') : d === 0 ? 'TODAY' : ('in '+d+'d');
  var members = (ev.members||[]).filter(function(x){return x&&x!=='all';}).slice(0,2).join(', ');
  return '<div class="tl-item pressable" onclick="goPage(\''+(ev._isExpiry?'expiry':'calendar')+'\')">'
    + '<div class="tl-bar-wrap">'
    + '<div class="tl-dot" style="background:'+col+'"></div>'
    + '<div class="tl-bar" style="background:'+col+';opacity:.15"></div>'
    + '</div>'
    + '<div class="tl-body">'
    + '<div class="tl-title">'+(ev._isExpiry?(ev.icon+' '):'')+ev.title+'</div>'
    + '<div class="tl-meta">'+(members?members+' \u00B7 ':'')+fmtDate(ev.date)+'</div>'
    + '</div>'
    + '<div class="tl-right"><div class="tl-badge '+badge+'">'+badgeTxt+'</div></div>'
    + '</div>';
}

function initWidgetDynamic() {
  const allCalEvts = getCalEvents();
  const activeName = (activePortalMember !== 'all') ? GM_META[activePortalMember].label : null;
  // Use synced attendance from localStorage if available, else hardcoded fallback
  const _attRaw = localStorage.getItem('fp_attendance_synced');
  const LIVE_ATT = _attRaw ? JSON.parse(_attRaw) : ATTENDANCE;

  // ─────────────────────────────────────────
  // HERO BRIEFING CARD
  // ─────────────────────────────────────────
  const heroCard = document.getElementById('hero-card');
  if (heroCard) {
    // Greeting
    const greet = document.getElementById('dash-greeting');
    if (greet) {
      const h = new Date().getHours();
      const tod = h < 12 ? '☀️ Good Morning' : h < 17 ? '🌤️ Good Afternoon' : '🌙 Good Evening';
      const who = activeName && activeName !== 'All' ? activeName : 'Rajasekhar';
      greet.innerHTML = `${tod}, <em>${who}!</em>`;
    }
    // Date
    const dateEl = document.getElementById('dash-date');
    if (dateEl) {
      const now = new Date();
      dateEl.textContent = now.toLocaleDateString('en-IN',{weekday:'long',day:'numeric',month:'long',year:'numeric'});
    }
    // Status line — compute live
    const overdueEvts = allCalEvts.filter(ev => daysUntil(ev.date) < 0);
    const soonEvts    = allCalEvts.filter(ev => { const d=daysUntil(ev.date); return d>=0 && d<=10; });
    const attBelow    = LIVE_ATT.filter(a => Math.round(a.present/a.total*100) < 75);
    // Collect critical health markers for specific insight
    let criticalHealthItems = [];
    if (typeof computeHealthScore === 'function' && typeof getBmStatus === 'function' && typeof getHealthData === 'function') {
      const hData = getHealthData();
      Object.entries(HEALTH_MEMBER_META || {}).forEach(([id, m]) => {
        const mData = hData[id];
        if (!mData) return;
        (BM_DEFS || []).forEach(def => {
          const val = mData.markers[def.id];
          if (val == null) return;
          const st = getBmStatus(def, val, m.gender);
          if (st === 'high' || st === 'low') criticalHealthItems.push({ member: m.label, marker: def.name.split(' ')[0], st });
        });
      });
    }
    const healthOk = criticalHealthItems.length === 0;
    let parts = [];
    if (overdueEvts.length) parts.push(`<strong style="color:var(--red)">${overdueEvts.length} overdue</strong>`);
    if (soonEvts.length) parts.push(`<strong style="color:var(--gold)">${soonEvts.length} due this week</strong>`);
    if (!overdueEvts.length && !soonEvts.length) parts.push('<strong style="color:var(--green)">No urgent items</strong>');
    if (!healthOk) { const s=criticalHealthItems[0],more=criticalHealthItems.length>1?' +'+(criticalHealthItems.length-1)+' more':''; parts.push('<strong style="color:var(--orange)">'+s.member+': '+s.marker+' '+s.st+more+'</strong>'); }
    else if (Object.keys(HEALTH_MEMBER_META||{}).length) parts.push('<strong style="color:var(--green)">Family health looks good</strong>');
    if (attBelow.length) parts.push(`<strong style="color:var(--red)">Josritha: ${attBelow.length} subject${attBelow.length>1?'s':''} at risk</strong>`);
    const statusLine = document.getElementById('hero-status-line');
    if (statusLine) statusLine.innerHTML = parts.join(' · ');
    // Dots
    const dotsEl = document.getElementById('hero-dots');
    if (dotsEl) {
      const dots = [
        { label:'Finance', cls: overdueEvts.length?'red':soonEvts.length?'amber':'green' },
        { label:'Health',  cls: healthOk?'green':'amber' },
        { label:'Academics', cls: attBelow.length?'amber':'green' },
        { label:'Documents', cls: 'green' },
      ];
      dotsEl.innerHTML = dots.map(d => `
        <div class="hero-dot ${d.cls}">
          <div class="hero-dot-pip"></div>${d.label}
        </div>`).join('');
    }
  }

  // ─────────────────────────────────────────
  // PRIORITY STRIP
  // ─────────────────────────────────────────
  const priorityStrip = document.getElementById('priority-strip');
  if (priorityStrip) {
    const filtered = allCalEvts.filter(ev => {
      const d = daysUntil(ev.date);
      if (d > 30) return false;
      if (activeName) return ev.members.includes(activeName) || ev.members.includes('all');
      return true;
    }).sort((a,b) => daysUntil(a.date) - daysUntil(b.date));

    // Academics chip — prepend if any subject below 75% (Josritha) and not filtered to another member
    const attBelow75 = LIVE_ATT.filter(a => Math.round(a.present/a.total*100) < 75);
    const showAcadChip = attBelow75.length > 0 && (activePortalMember === 'all' || activePortalMember === 'josritha');
    const acadChip = showAcadChip
      ? `<div class="priority-chip overdue pressable" onclick="goPage('members');setTimeout(()=>showMemberDetail('josritha','academics'),80)">
           <div class="pc-icon">📚</div>
           <div class="pc-body">
             <div class="pc-title">${attBelow75.length} subject${attBelow75.length>1?'s':''} below 75%</div>
             <div class="pc-meta">Josritha · Attendance</div>
           </div>
           <div class="pc-days">⚠️<span class="pc-days-sub">urgent</span></div>
         </div>`
      : '';

    // Timetable chip — show today's classes if timetable uploaded
    const _ttRaw = localStorage.getItem('fp_timetable_synced');
    const todayDayName = ['SUNDAY','MONDAY','TUESDAY','WEDNESDAY','THURSDAY','FRIDAY','SATURDAY'][new Date().getDay()];
    let ttChip = '';
    if (_ttRaw && (activePortalMember === 'all' || activePortalMember === 'josritha')) {
      try {
        const _ttData = JSON.parse(_ttRaw);
        const todaySlots = _ttData.filter(s => s.day === todayDayName);
        if (todaySlots.length > 0 && !showAcadChip) {
          ttChip = `<div class="priority-chip upcoming pressable" onclick="goPage('members');setTimeout(()=>{window._acadView='weekview';showMemberDetail('josritha','academics');},80)">
            <div class="pc-icon">🗓️</div>
            <div class="pc-body">
              <div class="pc-title">${todaySlots.length} class${todaySlots.length!==1?'es':''} today</div>
              <div class="pc-meta">Josritha · Timetable</div>
            </div>
            <div class="pc-days">${todaySlots.length}<span class="pc-days-sub">today</span></div>
          </div>`;
        }
      } catch(e) {}
    }

    if (!filtered.length && !showAcadChip && !ttChip) {
      priorityStrip.innerHTML = `<div class="priority-empty">✅&nbsp; All clear for the next 30 days</div>`;
    } else {
      priorityStrip.innerHTML = acadChip + ttChip + filtered.slice(0, (showAcadChip||ttChip) ? 5 : 6).map(ev => {
        const d = daysUntil(ev.date);
        const cls = d < 0 ? 'overdue' : d <= 7 ? 'due-soon' : 'upcoming';
        const daysNum = d < 0 ? Math.abs(d) : d;
        const daysSub = d < 0 ? 'overdue' : d === 0 ? 'today' : 'days';
        const daysDisplay = d === 0 ? '—' : daysNum;
        const shortTitle = ev.title.replace(/^(Rajasekhar|Vasundhara|Josritha|Jeevan)\s+/i,'').split(' ').slice(0,4).join(' ');
        const memberLabel = ev.members && ev.members[0] !== 'all' ? ev.members[0] : '';
        const icon = ev.icon || (cls==='overdue'?'🔴':cls==='due-soon'?'🟡':'🔵');
        return `<div class="priority-chip ${cls} pressable" onclick="goPage('calendar')">
          <div class="pc-icon">${icon}</div>
          <div class="pc-body">
            <div class="pc-title">${shortTitle}</div>
            <div class="pc-meta">${memberLabel}${memberLabel&&ev.type?' · ':''}${ev.type||''}</div>
          </div>
          <div class="pc-days">${daysDisplay}<span class="pc-days-sub">${daysSub}</span></div>
        </div>`;
      }).join('');
    }
  }

  // ─────────────────────────────────────────
  // FAMILY CARDS — Adaptive list style
  // ─────────────────────────────────────────
  const fsC = document.getElementById('fam-summary');
  if (fsC) {
    const membersArr = activePortalMember !== 'all'
      ? Object.values(MEMBERS).filter(m => m.id === activePortalMember)
      : Object.values(MEMBERS);

    function fpcChips(m, calCount) {
      const fs = FAM_SUMMARIES[m.id] || { status:'-', statusColor:'var(--text3)' };
      var chips = [];
      if (calCount > 0) chips.push('<span class="fpc-chip fpc-chip-blue">\uD83D\uDCC5 ' + calCount + ' event' + (calCount>1?'s':'') + '</span>');
      var chipClass = 'fpc-chip-gray';
      if (fs.statusColor === 'var(--green)') chipClass = 'fpc-chip-green';
      else if (fs.statusColor === 'var(--orange)') chipClass = 'fpc-chip-orange';
      else if (fs.statusColor === 'var(--red)') chipClass = 'fpc-chip-red';
      chips.push('<span class="fpc-chip ' + chipClass + '">' + fs.status + '</span>');
      return chips.join('');
    }

    function fpcAvatar(m, size, radius, fontSize) {
      var inner = MEMBER_PHOTOS[m.id]
        ? '<img src="' + MEMBER_PHOTOS[m.id] + '" style="width:100%;height:100%;object-fit:cover;object-position:center top;" alt="' + m.shortName + '">'
        : m.initials;
      return '<div style="width:' + size + 'px;height:' + size + 'px;border-radius:' + radius + 'px;background:' + m.gradient + ';flex-shrink:0;display:flex;align-items:center;justify-content:center;font-family:Syne,sans-serif;font-size:' + fontSize + 'px;font-weight:800;color:#fff;overflow:hidden;">' + inner + '</div>';
    }

    function fpcContactBtns(m) {
      var phone = m.mobile || (m.id==='vasundhara' ? '9652948966' : '');
      if (!phone) return '';
      var clean = phone.replace(/\s/g,'');
      return '<div class="fpc-contact-row" onclick="event.stopPropagation();">'
        + '<a class="fpc-contact-btn fpc-btn-call" href="tel:+91' + clean + '">\uD83D\uDCDE Call</a>'
        + '<a class="fpc-contact-btn fpc-btn-wa" href="https://wa.me/91' + clean + '" target="_blank">\uD83D\uDCAC WhatsApp</a>'
        + '</div>';
    }

    function fpcHeroCard(m) {
      var calCount = allCalEvts.filter(function(ev){ return ev.members.includes(m.shortName) && daysUntil(ev.date) >= 0 && daysUntil(ev.date) <= 30; }).length;
      var nav = 'goPage(\'members\');setTimeout(function(){showMemberDetail(\'' + m.id + '\',\'identity\');},50)';
      return '<div class="fpc-hero pressable" onclick="' + nav + '">'
        + '<div class="fpc-hero-bg" style="background:' + m.gradient + ';"></div>'
        + '<div class="fpc-hero-overlay"></div>'
        + '<div class="fpc-hero-body">'
        + fpcAvatar(m, 52, 15, 17)
        + '<div class="fpc-hero-text">'
        + '<div class="fpc-hero-name">' + m.shortName + '</div>'
        + '<div class="fpc-hero-role">' + m.role + ' \u00B7 ' + age(m.dob) + ' yrs</div>'
        + '<div class="fpc-hero-chips">' + fpcChips(m, calCount) + '</div>'
        + fpcContactBtns(m)
        + '</div>'
        + '<div style="color:rgba(255,255,255,.4);font-size:20px;">&#x203A;</div>'
        + '</div></div>';
    }

    function fpcMiniCard(m) {
      var calCount = allCalEvts.filter(function(ev){ return ev.members.includes(m.shortName) && daysUntil(ev.date) >= 0 && daysUntil(ev.date) <= 30; }).length;
      var nav = 'goPage(\'members\');setTimeout(function(){showMemberDetail(\'' + m.id + '\',\'identity\');},50)';
      return '<div class="fpc-mini pressable" onclick="' + nav + '">'
        + '<div class="fpc-mini-accent" style="background:' + m.gradient + ';"></div>'
        + fpcAvatar(m, 36, 11, 11)
        + '<div class="fpc-mini-name">' + m.shortName + '</div>'
        + '<div class="fpc-mini-role">' + m.role + '</div>'
        + '<div class="fpc-mini-chips">' + fpcChips(m, calCount) + '</div>'
        + fpcContactBtns(m)
        + '</div>';
    }

    if (membersArr.length === 1) {
      fsC.innerHTML = fpcHeroCard(membersArr[0]);
    } else {
      var heroHtml = fpcHeroCard(membersArr[0]);
      var miniHtml = '<div class="fpc-mini-row">' + membersArr.slice(1).map(fpcMiniCard).join('') + '</div>';
      fsC.innerHTML = heroHtml + miniHtml;
    }
  }
  // ─────────────────────────────────────────
  // UNIFIED TIMELINE
  // ─────────────────────────────────────────
  // Refresh dynamic widgets
  ['att_severity','att_risk','finance','grocery','vehicle','photos','ai_briefing2'].forEach(function(wid) {
    var item = document.querySelector('.widget-item[data-wid="' + wid + '"]');
    if (!item) return;
    var body = item.children[2];
    if (!body) return;
    if (wid === 'att_severity' || wid === 'josritha_acad') { body.innerHTML = buildJosrithaAcadWidget(); requestAnimationFrame(function(){ jacInitSwipe(); }); }
    else if (wid === 'att_risk')   { var c = body.querySelector('#att-risk-card'); if (c) c.innerHTML = buildAttRiskMeter(); }
    else if (wid === 'finance')    { body.innerHTML = buildFinanceWidget(); }
    else if (wid === 'bank_txns')  { body.innerHTML = buildBankTxnsWidget(); }
    else if (wid === 'vehicle')  body.innerHTML = buildVehicleWidget();
    else if (wid === 'photos')   body.innerHTML = buildMemoryWallWidget();
    // grocery + briefing only refresh on tab switch — don't wipe user input
  });

  const tlList = document.getElementById('timeline-list');
  if (tlList) {
    const now = new Date(); now.setHours(0,0,0,0);

    // Timeline — delegate to renderTimeline() for single source of truth
    if (typeof renderTimeline === 'function') renderTimeline();
  }

  // ─────────────────────────────────────────
  // HEALTH PULSE ROW
  // ─────────────────────────────────────────
  const hpr = document.getElementById('health-pulse-row');
  if (hpr && typeof computeHealthScore === 'function') {
    const R = 28, circ = 2 * Math.PI * R;
    // color class by score
    function hpColClass(score) {
      if (score >= 80) return 'hp-col-green';
      if (score >= 60) return 'hp-col-gold';
      return 'hp-col-red';
    }
    hpr.innerHTML = Object.entries(HEALTH_MEMBER_META).map(([id, m]) => {
      const score = computeHealthScore(id);
      const col = typeof scoreColor === 'function' ? scoreColor(score) : '#4f7fff';
      const offset = circ - (score / 100) * circ;
      const member = Object.values(MEMBERS).find(x => x.id === id);
      const firstName = m.label.split(' ')[0];
      const role = member ? member.role : '';
      const colClass = hpColClass(score);
      const hasFlags = typeof getHealthData === 'function' && typeof getBmStatus === 'function';
      let flagCount = 0;
      if (hasFlags) {
        const mData = getHealthData()[id];
        (BM_DEFS||[]).forEach(def => {
          const val = mData && mData.markers && mData.markers[def.id];
          if (val != null && getBmStatus(def, val, m.gender) !== 'normal') flagCount++;
        });
      }
      return `<div class="hp-member ${colClass} pressable" onclick="goPage('health')">
        <div class="hp-ring-wrap">
          <svg class="hp-ring-svg" width="68" height="68" viewBox="0 0 68 68">
            <circle class="hp-ring-track" cx="34" cy="34" r="${R}" stroke-width="6"/>
            <circle class="hp-ring-fill hp-ring-anim" cx="34" cy="34" r="${R}" stroke="${col}" stroke-width="6"
              stroke-dasharray="${circ.toFixed(1)}" stroke-dashoffset="${circ.toFixed(1)}"
              data-offset="${offset.toFixed(1)}"/>
          </svg>
          <div class="hp-ring-inner">
            <div class="hp-score" style="color:${col}">${score}</div>
            <div class="hp-score-lbl">/ 100</div>
          </div>
        </div>
        <div class="hp-name">${firstName}</div>
        <div class="hp-role">${role}</div>
        <div class="hp-flag ${flagCount?'warn':'ok'}">${flagCount?flagCount+' ⚠️ flags':'✓ Healthy'}</div>
      </div>`;
    }).join('');
    // Animate rings
    setTimeout(() => {
      document.querySelectorAll('.hp-ring-anim[data-offset]').forEach(el => {
        el.style.strokeDashoffset = el.dataset.offset;
      });
    }, 120);
  }

  // ─────────────────────────────────────────
  // URGENT ITEMS (legacy widget if present)
  // ─────────────────────────────────────────
  const uiC = document.getElementById('urgent-items');
  if (uiC) {
    const urgent = allCalEvts.filter(ev => {
      const d = daysUntil(ev.date);
      if (d > 10) return false;
      if (activeName) return ev.members.includes(activeName) || ev.members.includes('all');
      return true;
    }).sort((a,b) => daysUntil(a.date) - daysUntil(b.date));
    if (!urgent.length) {
      uiC.innerHTML = `<div style="padding:12px 0;text-align:center;color:var(--text3);font-size:13px;">✅ No urgent items in next 10 days</div>`;
    } else {
      uiC.innerHTML = urgent.map(ev => {
        const days = daysUntil(ev.date);
        const col = expiryColor(days);
        const pct = days<0?100:Math.max(1,Math.min(100,((10-days)/10)*100));
        return `<div class="urgent-item pressable" onclick="goPage('calendar')" style="border-left:3px solid ${col}${days<0?';background:rgba(255,79,79,.04)':''}">
          <span class="ui-icon">⏳</span>
          <div class="ui-body">
            <div class="ui-title">${ev.title}</div>
            <div class="ui-sub">${ev.notes?ev.notes.slice(0,50)+(ev.notes.length>50?'…':''):''}</div>
            <div class="ui-bar"><div class="ui-bar-fill" style="background:${col};width:0%" data-width="${pct}"></div></div>
          </div>
          <div class="ui-right">
            <div class="ui-days" style="color:${col}">${days<0?Math.abs(days):days}</div>
            <div style="font-size:9px;font-weight:700;font-family:'DM Mono',monospace;color:${col}">${days<0?'OVERDUE':'DAYS'}</div>
            <div class="ui-date">${fmtDate(ev.date)}</div>
          </div></div>`;
      }).join('');
    }
    setTimeout(()=>{document.querySelectorAll('#urgent-items .ui-bar-fill[data-width]').forEach(el=>el.style.width=el.dataset.width+'%');},80);
  }

  // ─────────────────────────────────────────
  // CALENDAR MINI
  // ─────────────────────────────────────────
  const calMiniBody = document.getElementById('cal-mini-body');
  if (calMiniBody) calMiniBody.innerHTML = typeof buildCalMiniWidget === 'function' ? buildCalMiniWidget() : '';

  // ─────────────────────────────────────────
  // HEALTH MINI ring animation
  // ─────────────────────────────────────────
  if (typeof initHealthWidgetDynamic === 'function') initHealthWidgetDynamic();

  // ─────────────────────────────────────────
  // COUNT-UP NUMBERS
  // ─────────────────────────────────────────
  document.querySelectorAll('[data-count]').forEach(el => {
    const target = parseInt(el.dataset.count); const dur = 700; const start = Date.now();
    const tick = () => { const e=Date.now()-start; const p=Math.min(e/dur,1); el.textContent=Math.round((1-Math.pow(1-p,3))*target); if(p<1) requestAnimationFrame(tick); }; tick();
  });
  // Update health nav badge
  updateHealthBadge();
}

function enterWidgetEdit() {
  editMode=true;
  document.getElementById('widget-edit-bar').classList.add('active');
  document.getElementById('widget-edit-btn').style.display='none';
  document.getElementById('add-widget-wrap').classList.add('show');
  renderWidgets();
}
function exitWidgetEdit() {
  editMode=false;
  document.getElementById('widget-edit-bar').classList.remove('active');
  document.getElementById('widget-edit-btn').style.display='';
  document.getElementById('add-widget-wrap').classList.remove('show');
  saveWidgetOrder();
  renderWidgets();
}
function removeWidget(wid) {
  widgetOrder=widgetOrder.filter(w=>w!==wid);
  saveWidgetOrder();renderWidgets();initWidgetDynamic();
}
function openWidgetPicker() {
  const list=document.getElementById('wp-list');
  if(!list) return;
  list.innerHTML=Object.values(WIDGET_DEFS).map(d=>{
    const active=widgetOrder.includes(d.id);
    return `<div class="wp-row${active?' disabled':''}" onclick="${active?'':'addWidget(\''+d.id+'\')'}">
      <div class="wp-ico">${d.icon}</div>
      <div class="wp-info"><div class="wp-name">${d.name}</div><div class="wp-desc">${active?'✓ Already added':d.desc}</div></div>
    </div>`;
  }).join('');
  var _sy=window.scrollY||window.pageYOffset;document.body.dataset.scrollY=_sy;document.body.style.top='-'+_sy+'px';document.body.classList.add('modal-open');
  document.getElementById('wp-sheet').classList.remove('hidden');
}
function closeWidgetPicker() { document.getElementById('wp-sheet').classList.add('hidden');
  var _sy2=parseInt(document.body.dataset.scrollY||'0',10);document.body.classList.remove('modal-open');document.body.style.top='';window.scrollTo(0,_sy2); }
function addWidget(wid) {
  if(!widgetOrder.includes(wid)) widgetOrder.push(wid);
  saveWidgetOrder();closeWidgetPicker();renderWidgets();initWidgetDynamic();
}

// ═══════════════════════════════════════
// DASHBOARD
// ═══════════════════════════════════════
function initDashboard() {
  // Init night nudge (keep legacy)
  initNightNudge();
  // Init AI widgets (keep legacy)
  setTimeout(aiWidgetsInit, 200);
  // Boot Aura OS dashboard
  auraInitDashboard();
}

/* ═══════════════════════════════════════════════
   AURA OS DASHBOARD ENGINE
   Reads real localStorage data (loaded from backup)
═══════════════════════════════════════════════ */
function auraInitDashboard() {
  auraStartCanvas();
  auraInitSwipe();
  auraRenderGreeting();
  auraRenderAlerts();
  auraRenderHome();
  auraRenderHealth();
  auraRenderEducation();
  auraRenderFinance();
  auraRenderFamily();
}

/* ── Aurora Canvas ── */
function auraStartCanvas() {
  var canvas = document.getElementById('aura-canvas');
  if (!canvas) return;
  // Canvas is fixed fullscreen — use window dimensions
  canvas.style.display = 'block';
  canvas.width  = window.innerWidth;
  canvas.height = window.innerHeight;
  var ctx = canvas.getContext('2d');
  var t = 0;
  var orbs = [
    { x:.12, y:.08, r:.5,  cr:[18,35,120],  sp:.0003, ph:0 },
    { x:.88, y:.82, r:.42, cr:[75,10,115],   sp:.00038,ph:2 },
    { x:.5,  y:.44, r:.32, cr:[0,55,85],     sp:.00048,ph:4 },
    { x:.28, y:.72, r:.25, cr:[95,18,75],    sp:.00032,ph:1 }
  ];
  function drawAurora() {
    if (!document.getElementById('page-dashboard').classList.contains('active')) {
      requestAnimationFrame(drawAurora);
      return;
    }
    canvas.width  = window.innerWidth;
    canvas.height = window.innerHeight;
    var W = canvas.width; var H = canvas.height;
    ctx.clearRect(0,0,W,H);
    ctx.fillStyle = 'rgba(2,3,12,1)';
    ctx.fillRect(0,0,W,H);
    for (var i=0; i<orbs.length; i++) {
      var o = orbs[i];
      var ox = (o.x + Math.sin(t*o.sp + o.ph) * .09) * W;
      var oy = (o.y + Math.cos(t*o.sp + o.ph*.7) * .07) * H;
      var r  = o.r * Math.min(W,H);
      var g = ctx.createRadialGradient(ox,oy,0,ox,oy,r);
      g.addColorStop(0,   'rgba('+o.cr[0]+','+o.cr[1]+','+o.cr[2]+',.38)');
      g.addColorStop(.55, 'rgba('+o.cr[0]+','+o.cr[1]+','+o.cr[2]+',.12)');
      g.addColorStop(1,   'rgba('+o.cr[0]+','+o.cr[1]+','+o.cr[2]+',.0)');
      ctx.fillStyle = g;
      ctx.beginPath(); ctx.arc(ox,oy,r,0,Math.PI*2); ctx.fill();
    }
    t++;
    requestAnimationFrame(drawAurora);
  }
  drawAurora();
}

/* ── Swipe Engine ── */
var _auraCur = 0;
var _auraSlides = ['aura-p0','aura-p1','aura-p2','aura-p3','aura-p4'];
var _auraNames  = ['Home','Health','Education','Finance','Family'];

function auraGoSlide(idx) {
  if (idx < 0 || idx >= _auraSlides.length) return;
  var old = document.getElementById(_auraSlides[_auraCur]);
  if (old) old.classList.remove('aura-panel-active');
  _auraCur = idx;
  var track = document.getElementById('aura-track');
  var stage = document.getElementById('aura-stage');
  if (!track || !stage) return;
  var vw = stage.offsetWidth || window.innerWidth;
  track.classList.remove('aura-live');
  track.style.transition = 'transform .5s cubic-bezier(.77,0,.18,1)';
  track.style.transform = 'translateX(' + (-idx * vw) + 'px)';
  var newP = document.getElementById(_auraSlides[idx]);
  if (newP) { newP.classList.add('aura-panel-active'); newP.scrollTop = 0;
    if (!newP._auraVisited) { newP._auraVisited=true; newP.classList.add('aura-first-enter'); setTimeout(function(){ newP.classList.remove('aura-first-enter'); },700); }
  }
  // Also reset page scroll so new panel starts at top
  var pg = document.getElementById('page-dashboard');
  if (pg) pg.scrollTop = 0;
  var cats = document.querySelectorAll('.aura-cat');
  for (var i=0; i<cats.length; i++) cats[i].classList.toggle('aura-active', i===idx);
}

function auraInitSwipe() {
  var stage = document.getElementById('aura-stage');
  var track = document.getElementById('aura-track');
  if (!stage || !track) return;
  var tx0=0, ty0=0, t0=0, dragging=false, ddx=0, mouseDown=false, mx0=0, intentLocked=false, intentH=false;
  function vw() { return window.innerWidth; }

  stage.addEventListener('touchstart', function(e) {
    tx0=e.touches[0].clientX; ty0=e.touches[0].clientY;
    t0=Date.now(); dragging=false; ddx=0; intentLocked=false; intentH=false;
    track.style.transition='none'; track.classList.add('aura-live');
  }, {passive:true});
  stage.addEventListener('touchmove', function(e) {
    var dx=e.touches[0].clientX-tx0; var dy=e.touches[0].clientY-ty0;
    if (!intentLocked && (Math.abs(dx)>6 || Math.abs(dy)>6)) {
      intentLocked=true;
      intentH = Math.abs(dx) > Math.abs(dy) * 0.8;
    }
    if (!intentH) return;
    e.preventDefault();
    if (!dragging && Math.abs(dx)>6) dragging=true;
    if (dragging) {
      ddx=dx;
      var resist=(_auraCur===0&&dx>0)||(_auraCur===_auraSlides.length-1&&dx<0)?.15:1;
      track.style.transform='translateX('+((-_auraCur*vw())+dx*resist)+'px)';
    }
  }, {passive:false});
  stage.addEventListener('touchend', function() {
    track.classList.remove('aura-live');
    track.style.transition='transform .32s cubic-bezier(0.4,0,0.2,1)';
    if (!dragging) { auraGoSlide(_auraCur); return; }
    var elapsed = Math.max(1, Date.now() - t0);
    var velocity = Math.abs(ddx) / elapsed;
    var th = velocity > 0.3 ? vw() * .12 : vw() * .22;
    if (ddx < -th && _auraCur < _auraSlides.length-1) auraGoSlide(_auraCur+1);
    else if (ddx > th && _auraCur > 0) auraGoSlide(_auraCur-1);
    else auraGoSlide(_auraCur);
    dragging=false;
  }, {passive:true});

  stage.addEventListener('mousedown', function(e) { mx0=e.clientX; mouseDown=true; track.style.transition='none'; });
  window.addEventListener('mousemove', function(e) {
    if (!mouseDown) return;
    var d=e.clientX-mx0;
    track.style.transform='translateX('+((-_auraCur*vw())+d)+'px)';
  });
  window.addEventListener('mouseup', function(e) {
    if (!mouseDown) return; mouseDown=false;
    track.style.transition='transform .32s cubic-bezier(0.4,0,0.2,1)';
    var d=e.clientX-mx0;
    if (d<-60&&_auraCur<_auraSlides.length-1) auraGoSlide(_auraCur+1);
    else if (d>60&&_auraCur>0) auraGoSlide(_auraCur-1);
    else auraGoSlide(_auraCur);
  });

  // Touch press feedback
  document.addEventListener('touchstart', function(e) {
    var sel = '.tc,.aura-acard,.tc-mpill,.tc-vital,.tc-ring-unit,.aura-cat,.tc-att-btn,.aura-btn,.tc-bsw-btn,.tc-fmc,.tc-txn-row,.tc-tl-row,.tc-fin-stat,.sb-dot-btn';
    var el = e.target.closest(sel);
    if (el) { el._ot=el.style.transform; el.style.transform=(el._ot||'')+'scale(.97)'; el.style.opacity='.8'; }
  }, {passive:true});
  document.addEventListener('touchend', function(e) {
    var sel = '.tc,.aura-acard,.tc-mpill,.tc-vital,.tc-ring-unit,.aura-cat,.tc-att-btn,.aura-btn,.tc-bsw-btn,.tc-fmc,.tc-txn-row,.tc-tl-row,.tc-fin-stat,.sb-dot-btn';
    var el = e.target.closest(sel);
    if (el) { el.style.transform=el._ot||''; el.style.opacity=''; }
  }, {passive:true});
}

/* ── Greeting ── */
function auraRenderGreeting() {
  var hour = new Date().getHours();
  var greets = ['🌙 Good Night','🌙 Good Night','🌙 Good Night','🌙 Good Night','🌙 Good Night',
    '☀️ Good Morning','☀️ Good Morning','☀️ Good Morning','☀️ Good Morning','☀️ Good Morning',
    '☀️ Good Morning','☀️ Good Morning','🌤️ Good Afternoon','🌤️ Good Afternoon','🌤️ Good Afternoon',
    '🌤️ Good Afternoon','🌤️ Good Afternoon','🌆 Good Evening','🌆 Good Evening','🌆 Good Evening',
    '🌆 Good Evening','🌙 Good Night','🌙 Good Night','🌙 Good Night'];
  var greet = greets[hour] || '☀️ Good Morning';
  var el = document.getElementById('aura-greeting');
  if (el) el.innerHTML = greet + ',<br>Rajasekhar.';
  var DAYS  = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
  var MONS  = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  var now = new Date();
  var eyeEl = document.getElementById('aura-eyebrow');
  if (eyeEl) eyeEl.innerHTML = DAYS[now.getDay()] + ' · ' + MONS[now.getMonth()] + ' ' + now.getFullYear() + '<span style="flex:1;height:1px;background:linear-gradient(90deg,rgba(240,180,41,.28),transparent);display:inline-block;margin-left:8px;vertical-align:middle;"></span>';
  var dateEl = document.getElementById('aura-date');
  if (dateEl) dateEl.textContent = now.toLocaleDateString('en-IN',{weekday:'long',day:'numeric',month:'long',year:'numeric'});
}

/* ── Alerts ── */
function auraRenderAlerts() {
  // Attendance — Edu badge: count rows below 75%
  var attRaw = localStorage.getItem('fp_attendance_synced');
  var critCount = 0;
  if (attRaw) {
    try {
      var attArr = JSON.parse(attRaw);
      for (var i=0; i<attArr.length; i++) {
        var a = attArr[i];
        var pct = a.total>0 ? Math.round(a.present/a.total*100) : 100;
        if (pct < 75) critCount++;
      }
    } catch(e){}
  }
  var eduBadge = document.getElementById('aura-edu-badge');
  if (eduBadge) {
    if (critCount > 0) { eduBadge.style.display='flex'; eduBadge.textContent=critCount; }
    else eduBadge.style.display='none';
  }

  // Health badge — elevated markers
  var healthRaw = localStorage.getItem('fp_health_v3');
  var healthAlerts = 0;
  if (healthRaw) {
    try {
      var hd = JSON.parse(healthRaw);
      var mids = ['rajasekhar','vasundhara','josritha','jeevan'];
      for (var m=0; m<mids.length; m++) {
        var mk = (hd[mids[m]]||{}).markers||{};
        if (mk.tsh && (mk.tsh>4.5||mk.tsh<0.4)) healthAlerts++;
        if (mk.hemoglobin && mk.hemoglobin<12) healthAlerts++;
      }
    } catch(e){}
  }
  var hBadge = document.getElementById('aura-health-badge');
  if (hBadge) {
    if (healthAlerts>0) { hBadge.style.display='flex'; hBadge.textContent=healthAlerts; }
    else hBadge.style.display='none';
  }

  // Finance badge — overdue events
  var evtRaw = localStorage.getItem('fp_cal_events');
  var overdueCount = 0;
  if (evtRaw) {
    try {
      var evts = JSON.parse(evtRaw);
      var todayStr = new Date().toISOString().slice(0,10);
      overdueCount = evts.filter(function(e){ return e.date < todayStr && e.cat==='finance'; }).length;
    } catch(e){}
  }
  var finBadge = document.getElementById('aura-fin-badge');
  if (finBadge) {
    if (overdueCount>0) { finBadge.style.display='flex'; finBadge.textContent=overdueCount; }
    else finBadge.style.display='none';
  }
}

/* ── Home Panel ── */
function auraRenderHome() {
  // Today timeline from calendar + timetable
  var DAYS7 = ['SUNDAY','MONDAY','TUESDAY','WEDNESDAY','THURSDAY','FRIDAY','SATURDAY'];
  var todayDay = DAYS7[new Date().getDay()];
  var todayStr = new Date().toISOString().slice(0,10);
  var rows = [];

  // Calendar events today
  var evtRaw = localStorage.getItem('fp_cal_events');
  if (evtRaw) {
    try {
      var evts = JSON.parse(evtRaw);
      var todayEvts = evts.filter(function(e){ return e.date === todayStr; });
      for (var i=0; i<todayEvts.length; i++) {
        rows.push({ ts: todayEvts[i].start || 'Today', name: todayEvts[i].title, meta: todayEvts[i].notes||'', color: 'var(--red)', tag:'TODAY', tagStyle:'background:rgba(255,59,59,.12);color:var(--red);border:1px solid rgba(255,59,59,.3);' });
      }
    } catch(e){}
  }
  // Timetable classes today — same key as academics
  var ttRaw = localStorage.getItem('fp_timetable_synced');
  try {
    var tt2 = ttRaw ? JSON.parse(ttRaw) : [];
    if (tt2.length > 0) {
      var todayClasses = tt2.filter(function(c){ return c.day === todayDay; });
      var ttDisplayDay = todayDay;
      if (todayClasses.length === 0) {
        var wdays2 = ['MONDAY','TUESDAY','WEDNESDAY','THURSDAY','FRIDAY'];
        for (var wd2=0; wd2<wdays2.length; wd2++) {
          var nd2 = wdays2[wd2];
          var nc2 = tt2.filter(function(c){return c.day===nd2;});
          if (nc2.length > 0) { todayClasses = nc2; ttDisplayDay = nd2; break; }
        }
      }
      var now2 = new Date(); var nowMin = now2.getHours()*60+now2.getMinutes();
      for (var j=0; j<Math.min(todayClasses.length,3); j++) {
        var c2 = todayClasses[j];
        var timeParts = (c2.time||'').split('-');
        var startStr = timeParts[0]||'';
        var sp = startStr.split(':'); var classMin = parseInt(sp[0]||0)*60+parseInt(sp[1]||0);
        var isNow = ttDisplayDay===todayDay && nowMin >= classMin && nowMin < classMin+60;
        var label = ttDisplayDay !== todayDay ? ttDisplayDay.charAt(0)+ttDisplayDay.slice(1,3).toLowerCase() : startStr;
        rows.push({ ts: label, name: (c2.subject||'').split(' ').slice(0,4).join(' '), meta: 'Room ' + (c2.room||'—') + ' · Josritha', color: isNow ? '#a78bfa':'var(--gold)', tag: isNow?'NOW':'', tagStyle:'background:rgba(167,139,250,.12);color:#a78bfa;border:1px solid rgba(167,139,250,.3);' });
      }
    }
  } catch(e){}
  // Upcoming events (next 3 days)
  if (evtRaw) {
    try {
      var evts2 = JSON.parse(evtRaw);
      var soon = evts2.filter(function(e){ return e.date > todayStr; }).sort(function(a,b){ return a.date.localeCompare(b.date); }).slice(0,3);
      for (var k=0; k<soon.length; k++) {
        var ev = soon[k];
        var d = new Date(ev.date); var diff = Math.round((d - new Date(todayStr))/(86400000));
        var diffLabel = diff===1?'Tomorrow':(diff<=7?'In '+diff+' days':ev.date);
        rows.push({ ts: diffLabel, name: ev.title.replace(/^[🏘️🚗👨‍👩‍👧‍👦🏬🪪🛵🏥⚠️🚨]*\s*/u,''), meta: ev.notes ? ev.notes.slice(0,40) : '', color: 'rgba(140,158,220,.4)', tag:'', tagStyle:'' });
      }
    } catch(e){}
  }

  if (rows.length === 0) {
    rows.push({ ts:'Today', name:'No events scheduled', meta:'Enjoy your day!', color:'rgba(140,158,220,.4)', tag:'', tagStyle:'' });
  }

  var html = '';
  for (var r=0; r<rows.length; r++) {
    var row = rows[r];
    var isLast = r === rows.length-1;
    html += '<div class="tc-tl-row">'
      + '<div class="tc-tl-ts">' + row.ts + '</div>'
      + '<div class="tc-tl-col">'
      + '<div class="tc-tl-dot" style="background:' + row.color + ';' + (row.tag==='TODAY'||row.tag==='NOW'?'box-shadow:0 0 8px '+row.color+';animation:auraPulse 1.4s infinite;':'') + '"></div>'
      + (!isLast ? '<div class="tc-tl-wire"></div>' : '')
      + '</div>'
      + '<div class="tc-tl-body">'
      + '<div class="tc-tl-name">' + row.name + '</div>'
      + (row.meta ? '<div class="tc-tl-meta">' + row.meta + '</div>' : '')
      + (row.tag ? '<div class="tc-tl-tag" style="' + row.tagStyle + '">' + row.tag + '</div>' : '')
      + '</div></div>';
  }
  var el = document.getElementById('aura-today-timeline');
  if (el) el.innerHTML = html;
}

/* ── Health Panel ── */
function auraRenderHealth() {
  var healthRaw = localStorage.getItem('fp_health_v3');
  var members = [
    { id:'rajasekhar', label:'Rajasekhar', init:'R', bg:'rgba(79,127,255,.22)', color:'var(--blue2)' },
    { id:'vasundhara', label:'Vasundhara', init:'V', bg:'rgba(240,180,41,.2)',  color:'var(--gold)', alert:true },
    { id:'josritha',   label:'Josritha',   init:'JR',bg:'rgba(167,139,250,.18)',color:'#a78bfa' },
    { id:'jeevan',     label:'Jeevan',     init:'JV',bg:'rgba(62,207,142,.14)', color:'var(--green)' }
  ];
  var scores = { rajasekhar:82, vasundhara:71, josritha:88, jeevan:91 };
  var statuses = { rajasekhar:'All clear', vasundhara:'Check-up due', josritha:'Healthy', jeevan:'Excellent' };
  var statusColors = { rajasekhar:'var(--green)', vasundhara:'var(--gold)', josritha:'var(--green)', jeevan:'var(--green)' };
  var memberAlerts = { rajasekhar:[], vasundhara:[], josritha:[], jeevan:[] };

  // Calculate real scores from actual marker data
  if (healthRaw) {
    try {
      var hd = JSON.parse(healthRaw);
      var memberIds = ['rajasekhar','vasundhara','josritha','jeevan'];
      for (var mi=0; mi<memberIds.length; mi++) {
        var mid = memberIds[mi];
        var md = hd[mid]; if (!md || !md.markers) continue;
        var mk = md.markers; var issues = []; var warnings = [];
        if (mk.tsh && mk.tsh > 4.5) issues.push('TSH ' + mk.tsh);
        if (mk.tsh && mk.tsh < 0.4) issues.push('TSH low ' + mk.tsh);
        if (mk.hemoglobin && mk.hemoglobin < 12) issues.push('Hgb ' + mk.hemoglobin);
        if (mk.glucose && mk.glucose > 126) issues.push('Glucose ' + mk.glucose);
        if (mk.hba1c && mk.hba1c > 6.4) issues.push('HbA1c ' + mk.hba1c);
        if (mk.ldl && mk.ldl > 130) warnings.push('LDL ' + mk.ldl);
        if (mk.vitd && mk.vitd < 20) warnings.push('Vit-D ' + mk.vitd);
        if (mk.vitb12 && mk.vitb12 < 200) warnings.push('B12 ' + mk.vitb12);
        if (mk.triglycerides && mk.triglycerides > 150) warnings.push('Trigs ' + mk.triglycerides);
        memberAlerts[mid] = issues.concat(warnings);
        var sc = 100 - issues.length*12 - warnings.length*5;
        if (sc < 50) sc = 50;
        scores[mid] = sc;
        if (issues.length > 0) {
          statuses[mid] = issues[0] + (issues.length>1?' +' + (issues.length-1) + ' more':'');
          statusColors[mid] = 'var(--red)';
        } else if (warnings.length > 0) {
          statuses[mid] = warnings[0] + (warnings.length>1?' +' + (warnings.length-1):'');
          statusColors[mid] = 'var(--gold)';
        } else {
          statuses[mid] = 'All markers OK';
          statusColors[mid] = 'var(--green)';
          scores[mid] = 95;
        }
      }
    } catch(e){}
  }

  var total = 0; var count = 0;
  for (var k in scores) { total += scores[k]; count++; }
  var avg = Math.round(total/count);

  var avgEl = document.getElementById('aura-health-avg');
  if (avgEl) avgEl.textContent = avg;

  // Conic gradient ring for badge
  var deg = Math.round(avg/100*360);
  var badgeRing = document.getElementById('aura-health-badge-ring');
  if (badgeRing) badgeRing.style.background = 'conic-gradient(var(--green) ' + deg + 'deg, rgba(255,255,255,.05) 0)';

  // Member pills
  var pillsHtml = '';
  for (var i=0; i<members.length; i++) {
    var m = members[i];
    var sc = scores[m.id]; var st = statuses[m.id]; var stc = statusColors[m.id];
    var hasAlert = memberAlerts[m.id] && memberAlerts[m.id].length > 0;
    pillsHtml += '<div class="tc-mpill' + (hasAlert?' tc-mpill-alert':'') + '" onclick="goPage(\'health\')">'
      + '<div class="tc-mpill-av" style="background:'+m.bg+';color:'+m.color+';">'+m.init+'</div>'
      + '<div style="flex:1;min-width:0;"><div class="tc-mpill-name">'+m.label+'</div><div class="tc-mpill-status" style="color:'+stc+';font-size:9px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;max-width:100px;">'+st+'</div></div>'
      + '<div class="tc-mpill-score" style="color:'+stc+';">'+sc+'</div>'
      + '</div>';
  }
  var pillsEl = document.getElementById('aura-health-members');
  if (pillsEl) pillsEl.innerHTML = pillsHtml;

  // Vasundhara vitals from real data
  var vitals = [];
  if (healthRaw) {
    try {
      var hd2 = JSON.parse(healthRaw);
      var vd = hd2.vasundhara;
      if (vd && vd.markers) {
        var m2 = vd.markers;
        if (m2.tsh) vitals.push({ ico:'🦋', val: m2.tsh + ' mIU/L', name:'Thyroid (TSH)', chip:'Elevated', chipStyle:'background:rgba(255,184,0,.1);color:var(--gold);border:1px solid rgba(255,184,0,.25);' });
        if (m2.glucose) vitals.push({ ico:'🩸', val: m2.glucose + '', name:'Glucose', chip:'Normal', chipStyle:'background:rgba(0,230,118,.1);color:var(--green);border:1px solid rgba(0,230,118,.2);' });
        if (m2.hemoglobin) vitals.push({ ico:'💉', val: m2.hemoglobin + ' g/dL', name:'Hemoglobin', chip: m2.hemoglobin<12?'Low':'OK', chipStyle: m2.hemoglobin<12?'background:rgba(255,92,92,.1);color:var(--red);border:1px solid rgba(255,92,92,.25);':'background:rgba(0,230,118,.1);color:var(--green);border:1px solid rgba(0,230,118,.2);' });
        if (m2.vitd) vitals.push({ ico:'☀️', val: m2.vitd + ' ng/mL', name:'Vitamin D', chip: m2.vitd<30?'Low':'OK', chipStyle: m2.vitd<30?'background:rgba(255,184,0,.1);color:var(--gold);border:1px solid rgba(255,184,0,.25);':'background:rgba(0,230,118,.1);color:var(--green);border:1px solid rgba(0,230,118,.2);' });
      }
    } catch(e){}
  }
  if (vitals.length === 0) {
    vitals = [
      { ico:'🦋', val:'6.0 mIU/L', name:'Thyroid (TSH)', chip:'Elevated', chipStyle:'background:rgba(255,184,0,.1);color:var(--gold);border:1px solid rgba(255,184,0,.25);' },
      { ico:'💉', val:'11.7 g/dL',  name:'Hemoglobin',   chip:'Low',      chipStyle:'background:rgba(255,92,92,.1);color:var(--red);border:1px solid rgba(255,92,92,.25);' },
      { ico:'☀️', val:'25 ng/mL',  name:'Vitamin D',    chip:'Low',      chipStyle:'background:rgba(255,184,0,.1);color:var(--gold);border:1px solid rgba(255,184,0,.25);' },
      { ico:'🩸', val:'99.3 mg/dL',name:'Glucose',      chip:'Normal',   chipStyle:'background:rgba(0,230,118,.1);color:var(--green);border:1px solid rgba(0,230,118,.2);' }
    ];
  }
  var vHtml = '';
  for (var v=0; v<vitals.length; v++) {
    var vt = vitals[v];
    vHtml += '<div class="tc-vital" onclick="goPage(\'health\')">'
      + '<div class="tc-vital-ico">'+vt.ico+'</div>'
      + '<div class="tc-vital-val">'+vt.val+'</div>'
      + '<div class="tc-vital-name">'+vt.name+'</div>'
      + '<div class="tc-vital-chip" style="'+vt.chipStyle+'">'+vt.chip+'</div>'
      + '</div>';
  }
  var vEl = document.getElementById('aura-health-vitals');
  if (vEl) vEl.innerHTML = vHtml;
}

/* ── Education Panel ── */
function auraRenderEducation() {
  var attRaw = localStorage.getItem('fp_attendance_synced');
  var subjects = [];
  var totalPres = 0; var totalCls = 0;

  if (attRaw) {
    try {
      var att = JSON.parse(attRaw);
      // Each row in the JSON = one subject+type slot. Show every unique code as its own bar.
      for (var i=0; i<att.length; i++) {
        var a = att[i];
        totalPres += a.present; totalCls += a.total;
        var pct = a.total>0 ? Math.round(a.present/a.total*100):100;
        var label = (a.subject||'');
        // Append type if it is Lab/Tutorial/Seminar to distinguish from Lecture
        if (a.type && a.type !== 'Lecture') label += ' (' + a.type + ')';
        label = label
          .replace('MATHEMATICAL OPTIMIZATION','MATH OPT')
          .replace('FULL STACK APPLICATION DEVELOPMENT','FULL STACK DEV')
          .replace('COMPUTER NETWORKS','COMP NETWORKS')
          .replace('DESIGN AND ANALYSIS OF ALGORITHMS','ALGO DESIGN')
          .replace('AWS CERTIFIED CLOUD PRACTITIONER','AWS CLOUD')
          .replace('GLOBAL LOGIC BUILDING CONTEST PRACTICUM','GLOBAL LOGIC')
          .replace('CLOUD INFRASTRUCTURE AND SERVICES','CLOUD INFRA')
          .replace('ADVANCED DATA STRUCTURES','ADV DATA STRUCT')
          .replace('DESIGN THINKING AND INNOVATION','DT & INNOVATION')
          .replace('ENGLISH FOR PROFESSIONAL COMMUNICATION','ENG COMM')
          .replace('PROBABILITY AND STATISTICS','PROB & STATS');
        subjects.push({ name:label, pct:pct });
      }
      subjects.sort(function(a,b){ return a.pct-b.pct; });
    } catch(e){}
  }

  // Subject Intelligence Cards — replaces old bar list
  var attRawSIC = localStorage.getItem('fp_attendance_synced');
  var ttRawSIC  = localStorage.getItem('fp_timetable_synced');
  var attDataSIC = attRawSIC ? (function(){ try{ return JSON.parse(attRawSIC); }catch(e){ return []; } })() : [];
  var ttDataSIC  = ttRawSIC  ? (function(){ try{ return JSON.parse(ttRawSIC);  }catch(e){ return null; } })() : null;
  var barsEl = document.getElementById('aura-subj-bars');
  if (barsEl) {
    if (attDataSIC.length === 0) {
      barsEl.innerHTML = '<div style="padding:14px 20px;font-family:\'DM Sans\',sans-serif;font-size:12px;color:rgba(200,210,240,.4);text-align:center;">No attendance data — upload via Sync Hub</div>';
    } else {
      barsEl.innerHTML = buildSubjectIntelCards(attDataSIC, ttDataSIC);
    }
  }

  // Overall ring
  var overallPct = totalCls>0 ? Math.round(totalPres/totalCls*100) : 70;
  var ringCirc = 232; // 2*PI*37
  var ringOffset = Math.round(ringCirc * (1 - overallPct/100));
  var ringColor = overallPct<75?'var(--red)':overallPct<80?'var(--orange,#fb923c)':'var(--green)';
  var critCount = subjects.filter(function(s2){return s2.pct<75;}).length;
  var rowEl = document.getElementById('aura-att-ring-row');
  if (rowEl) rowEl.innerHTML = '<div class="tc-att-ring">'
    + '<svg class="tc-att-svg" viewBox="0 0 86 86"><circle class="tc-att-bg" cx="43" cy="43" r="37"/>'
    + '<circle class="tc-att-path" cx="43" cy="43" r="37" stroke="'+ringColor+'" stroke-dasharray="'+ringCirc+'" stroke-dashoffset="'+ringOffset+'"/>'
    + '</svg>'
    + '<div class="tc-att-center"><div class="tc-att-num" style="color:'+ringColor+'">'+overallPct+'%</div><div class="tc-att-lbl">OVERALL</div></div>'
    + '</div>'
    + '<div class="tc-att-info">'
    + '<div class="tc-att-title">Josritha</div>'
    + '<div class="tc-att-desc">' + (critCount>0 ? '<strong style="color:var(--red)">'+critCount+' subject'+(critCount>1?'s':'')+' below 75%</strong><br>Minimum 75% required.' : 'On track. Keep attending!') + '</div>'
    + '<div class="tc-att-btns"><div class="tc-att-btn tc-att-primary" onclick="goPage(\'members\')">Timetable</div><div class="tc-att-btn tc-att-sec" onclick="goPage(\'upload\')">Upload</div></div>'
    + '</div>';

  // ── Weekly Severity heatmap — same logic as Members → Academics ──
  var ttRawW = localStorage.getItem('fp_timetable_synced');
  var ttDataW = ttRawW ? JSON.parse(ttRawW) : null;
  var DAY_FULL_W = ['MONDAY','TUESDAY','WEDNESDAY','THURSDAY','FRIDAY','SATURDAY'];
  var DAY_SHORT_W = ['MON','TUE','WED','THU','FRI','SAT'];
  var today3 = new Date(); today3.setHours(0,0,0,0);
  var dow3 = today3.getDay();
  var diffMon3 = dow3===0?-6:1-dow3;
  var monday3 = new Date(today3); monday3.setDate(today3.getDate()+diffMon3);

  var riskyW = {};
  if (attRaw) {
    try {
      var attW = JSON.parse(attRaw);
      attW.forEach(function(a) {
        var pct = Math.round(a.present/a.total*100);
        var key = a.code+'|'+a.type;
        riskyW[key] = { pct:pct, critical:pct<70, atrisk:pct<75 };
      });
    } catch(e){}
  }

  var ttByDayW = {};
  DAY_FULL_W.forEach(function(d){ ttByDayW[d] = []; });
  if (ttDataW) {
    ttDataW.forEach(function(sl) {
      var key = sl.att_key || (sl.code+'|'+sl.type);
      if (sl.day && ttByDayW[sl.day]) {
        var exists = ttByDayW[sl.day].some(function(x){ return x.key===key; });
        if (!exists) ttByDayW[sl.day].push({ key:key });
      }
    });
  }

  var hmHtml = '<div class="jac-sev">'
    + '<div class="jac-sev-hdr">'
    + '<div class="jac-sev-title">WEEKLY SEVERITY</div>'
    + '<div class="jac-sev-legend">'
    + '<div class="jac-sev-leg-item"><div class="jac-sev-leg-dot" style="background:#3ecf8e;border-radius:2px;"></div>safe</div>'
    + '<div class="jac-sev-leg-item"><div class="jac-sev-leg-dot" style="background:#fbbf24;border-radius:2px;"></div>risk</div>'
    + '<div class="jac-sev-leg-item"><div class="jac-sev-leg-dot" style="background:#ff4f4f;border-radius:2px;"></div>crit</div>'
    + '</div></div>'
    + '<div class="jac-heatmap">';

  for (var dw=0; dw<6; dw++) {
    var dnW = DAY_FULL_W[dw];
    var dsW = DAY_SHORT_W[dw];
    var colD = new Date(monday3); colD.setDate(monday3.getDate()+dw);
    var isTod = colD.getTime()===today3.getTime();
    var colCls = 'jac-hm-col'+(isTod?' tod-col':'');
    var daySlots = ttByDayW[dnW]||[];
    hmHtml += '<div class="'+colCls+'" onclick="goPage(\'members\')">';
    hmHtml += '<div class="jac-hm-lbl">'+dsW+(isTod?'\u25cf':'')+'</div>';
    hmHtml += '<div class="jac-hm-dots">';
    if (!daySlots.length) {
      hmHtml += '<div class="jac-hm-dot none" title="No classes"></div>';
    } else {
      daySlots.forEach(function(sl) {
        var r = riskyW[sl.key];
        if (!r) { hmHtml += '<div class="jac-hm-dot safe" title="OK"></div>'; return; }
        var dc = r.critical?'crit':r.atrisk?'warn':'safe';
        hmHtml += '<div class="jac-hm-dot '+dc+'" title="'+r.pct+'%"></div>';
      });
    }
    hmHtml += '</div></div>';
  }
  hmHtml += '</div></div>';

  var wsevEl = document.getElementById('aura-wsev');
  if (wsevEl) wsevEl.innerHTML = hmHtml;

  // Today's classes — reads same key as academics page
  var DAYS7 = ['SUNDAY','MONDAY','TUESDAY','WEDNESDAY','THURSDAY','FRIDAY','SATURDAY'];
  var todayDay = DAYS7[new Date().getDay()];
  var ttRaw = localStorage.getItem('fp_timetable_synced');
  var classHtml = '';
  try {
    var tt = ttRaw ? JSON.parse(ttRaw) : [];
    if (tt.length > 0) {
      var todayC = tt.filter(function(c){return c.day===todayDay;});
      var displayDay = todayDay;
      // If no classes today (weekend or no-class day) find next weekday with classes
      if (todayC.length === 0) {
        var wdays = ['MONDAY','TUESDAY','WEDNESDAY','THURSDAY','FRIDAY'];
        for (var wd=0; wd<wdays.length; wd++) {
          var nd = wdays[wd];
          var nc = tt.filter(function(c){return c.day===nd;});
          if (nc.length > 0) { todayC = nc; displayDay = nd; break; }
        }
      }
      var nowMin2 = new Date().getHours()*60+new Date().getMinutes();
      if (todayC.length === 0) {
        classHtml = '<div style="padding:12px 20px 14px;font-family:\'DM Sans\',sans-serif;font-size:12px;color:rgba(200,210,240,.4);">No classes in timetable</div>';
      } else {
        if (displayDay !== todayDay) {
          classHtml = '<div style="padding:6px 20px 2px;font-family:\'DM Mono\',monospace;font-size:9px;color:rgba(240,180,41,.5);letter-spacing:1px;">NEXT: ' + displayDay + '</div>';
        }
        for (var ci=0; ci<todayC.length; ci++) {
          var cc = todayC[ci];
          var sp2 = (cc.time||'').split(':'); var cMin = parseInt(sp2[0]||0)*60+parseInt(sp2[1]||0);
          var isNow2 = displayDay===todayDay && nowMin2>=cMin && nowMin2<cMin+60;
          var isDone = displayDay===todayDay && nowMin2 >= cMin+60;
          var dotC = isDone?'rgba(140,158,220,.25)':isNow2?'#a78bfa':'var(--gold)';
          var isLast2 = ci === todayC.length-1;
          classHtml += '<div class="tc-tl-row">'
            + '<div class="tc-tl-ts" style="color:'+(isDone?'rgba(140,158,220,.28)':'')+';">'+cc.time+'</div>'
            + '<div class="tc-tl-col"><div class="tc-tl-dot" style="background:'+dotC+';'+(isNow2?'box-shadow:0 0 8px #a78bfa;animation:auraPulse 1.4s infinite;':'')+'"></div>'
            + (!isLast2?'<div class="tc-tl-wire"></div>':'')+'</div>'
            + '<div class="tc-tl-body">'
            + '<div class="tc-tl-name" style="color:'+(isDone?'rgba(200,210,240,.4)':'')+';">'+(cc.subject||'').split(' ').slice(0,4).join(' ')+'</div>'
            + '<div class="tc-tl-meta">'+(cc.room||'')+'  '+( cc.type||'')+'</div>'
            + (isNow2?'<div class="tc-tl-tag" style="background:rgba(167,139,250,.12);color:#a78bfa;border:1px solid rgba(167,139,250,.3);">NOW</div>':'')
            + '</div></div>';
        }
      }
    }
  } catch(e){}
  if (!classHtml) classHtml = '<div style="padding:12px 20px 14px;font-family:\'DM Sans\',sans-serif;font-size:12px;color:rgba(200,210,240,.4);">No timetable — upload via Sync Hub</div>';
  var classEl = document.getElementById('aura-today-classes');
  if (classEl) classEl.innerHTML = classHtml;

  // SGPA Semester Trend
  var sgpaSems = [
    { lbl:'Sem 1', val:9.26 }, { lbl:'Sem 2', val:9.29 }, { lbl:'Sem 3', val:9.17 }
  ];
  var sgpaMax = 10; var sgpaHtml = '';
  for (var si=0; si<sgpaSems.length; si++) {
    var sg = sgpaSems[si];
    var sh = Math.round(sg.val/sgpaMax*60);
    var sc2 = sg.val >= 9.2 ? 'var(--green)' : sg.val >= 9.0 ? 'var(--gold)' : 'var(--red)';
    sgpaHtml += '<div style="flex:1;display:flex;flex-direction:column;align-items:center;gap:4px;">'
      + '<div style="font-family:\'Syne\',sans-serif;font-size:12px;font-weight:800;color:'+sc2+';">'+sg.val+'</div>'
      + '<div style="width:100%;height:'+sh+'px;border-radius:6px 6px 3px 3px;background:linear-gradient(180deg,'+sc2+',rgba(167,139,250,.12));min-height:8px;"></div>'
      + '<div style="font-family:\'DM Mono\',monospace;font-size:9px;color:rgba(200,210,240,.5);">'+sg.lbl+'</div>'
      + '</div>';
  }
  var sgpaEl = document.getElementById('aura-sgpa-bars');
  if (sgpaEl) sgpaEl.innerHTML = sgpaHtml;
}

/* ── Finance Panel ── */
function auraRenderFinance() {
  var bankRaw = localStorage.getItem('fp_bank_stmt_icici');
  var txns = []; var closing = 0; var totalCr = 0; var totalDr = 0; var period = ''; var txnCount = 0;

  if (bankRaw) {
    try {
      var bd = JSON.parse(bankRaw);
      txns = bd.transactions || [];
      closing = bd.closingBalance || 0;
      period = bd.period || '';
      txnCount = bd.txnCount || txns.length;
      for (var i=0; i<txns.length; i++) {
        totalCr += txns[i].credit||0;
        totalDr += txns[i].debit||0;
      }
    } catch(e){}
  }

  function fmtAmt(n) {
    if (!n) return '₹0';
    if (n >= 100000) return '₹' + (n/100000).toFixed(1) + 'L';
    if (n >= 1000) return '₹' + (n/1000).toFixed(1) + 'K';
    return '₹' + Number(n).toFixed(0);
  }

  var balEl = document.getElementById('aura-fin-balance');
  if (balEl) balEl.textContent = closing ? '₹' + Number(closing).toLocaleString('en-IN') : '₹—';
  var subEl = document.getElementById('aura-fin-sub');
  if (subEl) subEl.textContent = (period || 'Last statement') + ' · Rajasekhar';
  var statsEl = document.getElementById('aura-fin-stats');
  if (statsEl) statsEl.innerHTML = ''
    + '<div class="tc-fin-stat" onclick="auraGoSlide(3)"><div class="tc-fin-stat-v" style="color:var(--green);">+'+fmtAmt(totalCr)+'</div><div class="tc-fin-stat-l">Credits</div></div>'
    + '<div class="tc-fin-stat" onclick="auraGoSlide(3)"><div class="tc-fin-stat-v" style="color:var(--red);">-'+fmtAmt(totalDr)+'</div><div class="tc-fin-stat-l">Debits</div></div>'
    + '<div class="tc-fin-stat" onclick="auraGoSlide(3)"><div class="tc-fin-stat-v">'+txnCount+'</div><div class="tc-fin-stat-l">Txns</div></div>';

  // Spend bars — real debit totals by month from txn data
  var barsHtml = '';
  var MONLBLS = ['','Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  var now3 = new Date(); var curMon = now3.getMonth()+1; var curYr = now3.getFullYear();
  var monthSpend = {};
  for (var ti=0; ti<txns.length; ti++) {
    var tp = (txns[ti].date||'').split('-');
    var mkey = tp[0]+'-'+tp[1];
    if (!monthSpend[mkey]) monthSpend[mkey] = 0;
    monthSpend[mkey] += txns[ti].debit||0;
  }
  var barMonths = [];
  for (var bmi=5; bmi>=0; bmi--) {
    var bd3 = new Date(curYr, curMon-1-bmi, 1);
    var ym = bd3.getFullYear()+'-'+String(bd3.getMonth()+1).padStart(2,'0');
    barMonths.push({ lbl: MONLBLS[bd3.getMonth()+1], ym: ym, cur: bmi===0 });
  }
  var maxSpend = 1;
  for (var bi2=0; bi2<barMonths.length; bi2++) { var sp3 = monthSpend[barMonths[bi2].ym]||0; if (sp3>maxSpend) maxSpend=sp3; }
  for (var b=0; b<barMonths.length; b++) {
    var bm = barMonths[b];
    var spend = monthSpend[bm.ym]||0;
    var h = spend>0 ? Math.max(8, Math.round(spend/maxSpend*58)) : (bm.cur?22:8);
    var hasData = spend > 0;
    barsHtml += '<div class="tc-bar-col">'
      + '<div style="font-family:\'DM Mono\',monospace;font-size:7px;color:rgba(200,210,240,.4);text-align:center;margin-bottom:2px;">'+(hasData?fmtAmt(spend):'')+'</div>'
      + '<div class="tc-bar'+(bm.cur?' tc-bar-cur':'')+'" style="height:'+h+'px;background:'+(bm.cur?'linear-gradient(180deg,var(--blue2),rgba(79,127,255,.2))':(hasData?'linear-gradient(180deg,rgba(245,158,11,.6),rgba(245,158,11,.18))':'linear-gradient(180deg,rgba(255,255,255,.05),rgba(255,255,255,.01))'))+';"></div>'
      + '<div class="tc-bar-lbl" style="'+(bm.cur?'color:var(--blue2);':'')+'">'+bm.lbl+'</div></div>';
  }
  var barsEl = document.getElementById('aura-spend-bars');
  if (barsEl) barsEl.innerHTML = barsHtml;

  // Transaction count label
  var countEl = document.getElementById('aura-txn-count-lbl');
  if (countEl) countEl.textContent = 'Show all ' + txnCount + ' →';











  // Transaction count label
  var countEl = document.getElementById('aura-txn-count-lbl');
  if (countEl) countEl.textContent = 'Show all ' + txnCount + ' →';

  // ALL transactions — NO slice limit (bug fix)
  var txnIcons = { 'SALARY':'💰','NEFT':'💰','OTHERS':'💸','AIRTEL':'📱','VATTIPALLI':'👤','SELF':'🏦','NOBROKER':'🏠','AMAZON':'🛒','ZOMATO':'🍕','SWIGGY':'🍕','MEDICAL':'🏥','APOLLO':'🏥','UPI':'💸' };
  function getTxnIcon(title) {
    for (var k in txnIcons) { if (title.toUpperCase().indexOf(k)>=0) return txnIcons[k]; }
    return '💳';
  }
  var sorted = txns.slice().sort(function(a,b){ return (b.date||'').localeCompare(a.date||''); });
  var txnHtml = '';
  for (var t2=0; t2<sorted.length; t2++) {
    var tx = sorted[t2];
    var isCredit = (tx.credit||0) > 0;
    var amt = isCredit ? tx.credit : tx.debit;
    var parts = (tx.date||'').split('-');
    var dateLabel = (parts[2]?parseInt(parts[2]):'-') + ' ' + ['','Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'][parseInt(parts[1]||0)||0];
    txnHtml += '<div class="tc-txn-row">'
      + '<div class="tc-txn-ico">'+getTxnIcon(tx.title||'')+'</div>'
      + '<div class="tc-txn-body">'
      + '<div class="tc-txn-name">'+(tx.title||'Transaction').substring(0,24)+'</div>'
      + '<div class="tc-txn-meta">'+dateLabel+' · '+(tx.sub||'').substring(0,22)+'</div>'
      + '</div>'
      + '<div class="tc-txn-amt" style="color:'+(isCredit?'var(--green)':'var(--red)')+';">'+(isCredit?'+':'-')+'₹'+Number(amt).toLocaleString('en-IN')+'</div>'
      + '</div>';
  }
  if (!txnHtml) txnHtml = '<div style="padding:14px 20px;font-family:\'DM Sans\',sans-serif;font-size:12px;color:rgba(200,210,240,.4);">No transactions — upload via 📡 Sync Hub</div>';
  var txnEl = document.getElementById('aura-txn-list');
  if (txnEl) txnEl.innerHTML = txnHtml;
}

/* ── Family Panel ── */
function auraRenderFamily() {
  var members = [
    { name:'Rajasekhar', role:'Head · Born 1977', init:'R', bg:'linear-gradient(135deg,rgba(79,127,255,.55),rgba(79,127,255,.2))', border:'rgba(79,127,255,.22)', tags:[{t:'✓ Healthy',c:'var(--green)',bc:'rgba(0,230,118,.25)'}], icon:'✅', onclick:'goPage(\'health\')' },
    { name:'Vasundhara', role:'Spouse · Born 1982', init:'V', bg:'linear-gradient(135deg,rgba(240,180,41,.45),rgba(240,180,41,.18))', border:'rgba(240,180,41,.22)', tags:[{t:'Thyroid Follow-up',c:'var(--gold)',bc:'rgba(240,180,41,.3)'}], icon:'⚠️', onclick:'goPage(\'health\')' },
    { name:'Josritha',   role:'Daughter · Born 2006', init:'JR',bg:'linear-gradient(135deg,rgba(167,139,250,.45),rgba(167,139,250,.18))', border:'rgba(167,139,250,.22)', tags:[{t:'⚠ Attendance',c:'var(--red)',bc:'rgba(255,59,59,.3)'},{t:'CGPA 9.24',c:'#a78bfa',bc:'rgba(167,139,250,.3)'}], icon:'⚠️', onclick:'auraGoSlide(2)' },
    { name:'Jeevan',     role:'Son · Born 2010', init:'JV',bg:'linear-gradient(135deg,rgba(62,207,142,.35),rgba(62,207,142,.12))', border:'rgba(62,207,142,.18)', tags:[{t:'✓ All Good',c:'var(--green)',bc:'rgba(0,230,118,.25)'}], icon:'✅', onclick:'goPage(\'members\')' }
  ];
  var html = '';
  for (var i=0; i<members.length; i++) {
    var m = members[i];
    var tagsHtml = '';
    for (var j=0; j<m.tags.length; j++) {
      tagsHtml += '<div class="tc-fmc-tag" style="color:'+m.tags[j].c+';border-color:'+m.tags[j].bc+';">'+m.tags[j].t+'</div>';
    }
    html += '<div class="tc-fmc" onclick="'+m.onclick+'">'
      + '<div class="tc-fmc-inner" style="background:rgba(255,255,255,.03);border:1px solid '+m.border+';border-radius:20px;">'
      + '<div class="tc-fmc-av" style="background:'+m.bg+';">'+m.init+'</div>'
      + '<div class="tc-fmc-body"><div class="tc-fmc-name">'+m.name+'</div><div class="tc-fmc-role">'+m.role+'</div>'
      + '<div class="tc-fmc-tags">'+tagsHtml+'</div></div>'
      + '<div class="tc-fmc-icon">'+m.icon+'</div>'
      + '</div></div>';
  }
  var el = document.getElementById('aura-family-cards');
  if (el) el.innerHTML = html;
}

function initNightNudge() {
  var hour = new Date().getHours();
  if (hour < 23 && hour >= 6) return; // only 11pm-6am
  var todayKey = 'fp_nudge_' + new Date().toISOString().slice(0,10);
  if (localStorage.getItem(todayKey)) return; // already dismissed today
  var nudge = document.getElementById('night-nudge');
  if (!nudge) return;
  // Find tomorrow's first event
  var stored = localStorage.getItem('fp_cal_events');
  var evts = stored ? JSON.parse(stored) : [];
  var tomorrow = new Date(); tomorrow.setDate(tomorrow.getDate() + 1);
  var tmStr = tomorrow.toISOString().slice(0,10);
  var tmEvts = evts.filter(function(e){ return e.date === tmStr; });
  var tmEl = document.getElementById('nudge-tomorrow');
  if (tmEl && tmEvts.length) {
    tmEl.textContent = '\uD83D\uDCC5 Tomorrow: ' + tmEvts[0].title + (tmEvts.length > 1 ? ' +' + (tmEvts.length-1) + ' more' : '');
  }
  nudge.style.display = 'block';
  setTimeout(function(){ nudge.style.display = 'none'; localStorage.setItem(todayKey, '1'); }, 30000);
}

function closeNightNudge() {
  var nudge = document.getElementById('night-nudge');
  if (nudge) nudge.style.display = 'none';
  var todayKey = 'fp_nudge_' + new Date().toISOString().slice(0,10);
  localStorage.setItem(todayKey, '1');
}

// ═══════════════════════════════════════════════════
// IDEA B — MEMBER CAROUSEL
// ═══════════════════════════════════════════════════

function initMembers() {
  // List view
  const container = document.getElementById('members-cards');
  if(container) {
    container.innerHTML = Object.values(MEMBERS).map(m=>{
      const tabs = SECTION_TABS[m.id]||['identity'];
      const badges = tabs.map(t=>`<span class="mcf-badge">${SECTION_META[t]?.icon||'📄'} ${SECTION_META[t]?.label||t}</span>`).join('');
      return `<div class="member-card-full pressable" onclick="showMemberDetail('${m.id}','identity')" style="border-left-color:${m.color}">
        <div class="mcf-av" style="background:${m.gradient};overflow:hidden;padding:0;">${MEMBER_PHOTOS[m.id]?`<img src="${MEMBER_PHOTOS[m.id]}" style="width:100%;height:100%;object-fit:cover;object-position:center top;border-radius:14px;" alt="${m.shortName}">`:m.initials}</div>
        <div class="mcf-body">
          <div class="mcf-name">${m.name}</div>
          <div class="mcf-role">${m.role} · Age ${age(m.dob)}</div>
          <div class="mcf-badges">${badges}</div>
        </div>
        <div class="mcf-arrow">›</div>
      </div>`;
    }).join('');
  }
}


function showMembersList() {
  document.getElementById('members-detail-view').style.display='none';
  document.getElementById('members-list-view').style.display='';
}

function showMemberDetail(memberId, tab) {
  currentMember = memberId;
  currentTab = tab || 'identity';
  const m = MEMBERS[memberId];
  if(!m) return;
  document.getElementById('members-list-view').style.display='none';
  document.getElementById('members-detail-view').style.display='';

  // Hero
  const heroEl = document.getElementById('member-hero');
  heroEl.innerHTML = `<div class="mdet-hero">
    <div class="mdet-hero-inner">
      <div class="mdet-av" style="background:${m.gradient};overflow:hidden;padding:0;">${MEMBER_PHOTOS[m.id]?`<img src="${MEMBER_PHOTOS[m.id]}" style="width:100%;height:100%;object-fit:cover;object-position:center top;border-radius:14px;" alt="${m.name}">`:m.initials}</div>
      <div class="mdet-info">
        <div class="mdet-name">${m.name}</div>
        <div class="mdet-role">${m.role}</div>
        <div class="mdet-completion">✓ ${(SECTION_TABS[m.id]||['identity']).length}/${(SECTION_TABS[m.id]||['identity']).length} sections · All docs linked</div>
        <div class="mdet-meta" style="margin-top:8px;">
          <div class="mdet-meta-item"><span class="mdet-meta-icon">🎂</span><span class="mdet-meta-val">${m.dob} · Age ${age(m.dob)}</span></div>
          ${m.mobile?`<div class="mdet-meta-item"><span class="mdet-meta-icon">📱</span><span class="mdet-meta-val">${m.mobile}</span></div>`:''}
          ${m.gender?`<div class="mdet-meta-item"><span class="mdet-meta-icon">👤</span><span class="mdet-meta-val">${m.gender}</span></div>`:''}
          ${m.address?`<div class="mdet-meta-item" style="align-items:flex-start"><span class="mdet-meta-icon">📍</span><span class="mdet-meta-val" style="font-size:11px;line-height:1.4">${m.address}</span></div>`:''}
        </div>
      </div>
    </div>
  </div>`;

  // Related docs — filter docs page to this member
  document.getElementById('member-related-docs').innerHTML = `<div class="related-docs-btn pressable" onclick="goDocsFiltered('${m.shortName}')">📎 Documents Linked to ${m.shortName} →</div>`;

  // Section icon grid
  const tabs = SECTION_TABS[m.id]||['identity'];
  document.getElementById('member-section-grid').innerHTML = `<div class="section-icon-grid">${tabs.map(t=>`
    <div class="sig-item pressable ${t===currentTab?'active':''}" onclick="switchMemberTab('${t}',this)">
      <span class="sig-icon">${SECTION_META[t]?.icon||'📄'}</span>
      <span class="sig-label">${SECTION_META[t]?.label||t}</span>
    </div>`).join('')}</div>`;

  renderMemberTab(m, currentTab);
  if (!window._skipScroll) window.scrollTo(0,0);
  window._skipScroll = false;
}

function switchMemberTab(tab, el) {
  currentTab = tab;
  document.querySelectorAll('.sig-item').forEach(s=>s.classList.remove('active'));
  if(el) el.classList.add('active');
  renderMemberTab(MEMBERS[currentMember], tab);
}

function renderMemberTab(m, tab) {
  const tc = document.getElementById('member-tab-content');
  let html = '';
  if(tab==='identity') html = renderIdentityTab(m);
  else if(tab==='employment') html = renderEmploymentTab(m.sections.employment);
  else if(tab==='education') html = renderEducationTab(m.sections.education);
  else if(tab==='finance') html = renderFinanceTab(m.sections.finance);
  else if(tab==='insurance') html = renderInsuranceTab(m);
  else if(tab==='property') html = renderPropertyTab(m.sections.property);
  else if(tab==='vehicle') html = renderVehicleTab(m.sections.vehicle);
  else if(tab==='academics') html = renderAcademicsTab(m);
  tc.innerHTML = `<div class="tab-content" style="animation:fadeUp .25s ease both">${html}</div>`;
}

// Field builder
function fld(key, val, highlight=false, copyable=false) {
  if(!val) return '';
  const vH = highlight ? `<span class="field-highlight">${val}</span>` : `<span>${val}</span>`;
  const cH = copyable ? `<button class="copy-btn" onclick="copyVal('${String(val).replace(/'/g,"\\'")}',this)" title="Copy">⎘</button>` : '';
  return `<div class="field-row"><span class="field-key">${key}</span><span class="field-val">${vH}${cH}</span></div>`;
}

function docCard(title, badge, badgeStyle, content, src) {
  const link = src && DOC_LINKS[src] ? `<a href="${DOC_LINKS[src]}" target="_blank" class="doc-src" style="font-size:10px;color:var(--blue2);text-decoration:none;margin-left:auto;white-space:nowrap;">↗ View</a>` : (src?`<span class="doc-src" style="font-size:10px;color:var(--text3);">📎 ${src}</span>`:'');
  return `<div class="doc-card"><div class="doc-card-hdr"><div class="doc-card-title">${title}<span class="doc-badge" style="${badgeStyle}">${badge}</span></div>${link}</div>${content}</div>`;
}

const IB='background:rgba(79,127,255,.15);color:var(--blue2)';
const DB='background:rgba(167,139,250,.15);color:var(--purple)';
const FinB='background:rgba(62,207,142,.15);color:var(--green)';
const InsB='background:rgba(240,180,41,.15);color:var(--gold)';
const EduB='background:rgba(167,139,250,.15);color:var(--purple)';
const PropB='background:rgba(52,211,153,.15);color:var(--teal)';
const VehB='background:rgba(79,127,255,.15);color:var(--blue2)';

function renderIdentityTab(m) {
  const id=m.sections.identity; let html='';
  if(id.aadhaar) html+=docCard('Aadhaar Card','Identity',IB,fld('Aadhaar No.',id.aadhaar.number,true,true)+fld('VID',id.aadhaar.vid,true,true)+fld('Enrolment',id.aadhaar.enrolment)+fld('Issued',id.aadhaar.issued),id.aadhaar.src);
  if(id.pan) html+=docCard('PAN Card','Identity',IB,fld('PAN Number',id.pan.number,true,true)+fld('Issued',id.pan.issuedOn)+(id.pan.fathersName?fld("Father's Name",id.pan.fathersName):'')+(id.pan.dob?fld('DOB',id.pan.dob):''),id.pan.src);
  if(id.dl) html+=docCard('Driving Licence','Identity',IB,fld('DL Number',id.dl.number,true,true)+fld('Valid Until',id.dl.validUntil)+fld('Classes',id.dl.classes)+fld('Issuing RTA',id.dl.rta)+fld('First Issued',id.dl.firstIssued),id.dl.src);
  if(id.voter) html+=docCard('Voter ID','Identity',IB,fld('EPIC No.',id.voter.epic,true,true)+fld('Assembly',id.voter.assembly)+fld('Address',id.voter.address),id.voter.src);
  if(id.passport) html+=docCard('Passport','Identity',IB,fld('Passport No.',id.passport.number,true,true)+fld('Nationality',id.passport.nationality)+fld('DOB / Sex',id.passport.dob+' / '+id.passport.sex)+fld('US H1B Visa','Issued: '+id.passport.visaIssued+' | Expired: '+id.passport.visaExpiry)+fld('Issuing Post',id.passport.issuingPost)+fld('US Control No.',id.passport.controlNo),id.passport.src);
  if(id.marriageCert) html+=docCard('Marriage Certificate','Document',DB,fld('Act',id.marriageCert.act)+fld('Husband',id.marriageCert.husband)+fld('Wife',id.marriageCert.wife)+fld('Date',id.marriageCert.date)+fld('Registrar',id.marriageCert.registrar),id.marriageCert.src);
  if(id.birthCert) html+=docCard('Birth Certificate','Document',DB,fld('Name',id.birthCert.name)+fld('DOB',id.birthCert.dob)+fld('Place of Birth',id.birthCert.placeOfBirth||id.birthCert.place)+fld('Father',id.birthCert.father)+fld('Mother',id.birthCert.mother)+fld('Reg No.',id.birthCert.regNo),id.birthCert.src);
  html+=docCard('Personal Info','Record',IB,fld('Full Name',m.name)+fld('Date of Birth',m.dob)+fld('Gender',m.gender)+fld('Mobile',m.mobile,false,true)+(m.altMobile?fld('Alt. Mobile',m.altMobile,false,true):'')+(m.address?fld('Address',m.address):''));
  return html;
}

function renderEmploymentTab(emp) {
  if(!emp) return '<div style="padding:20px;text-align:center;color:var(--text3);font-family:DM Mono,monospace;font-size:12px;">No employment data</div>';
  return docCard('Employment Record','Employment','background:rgba(240,180,41,.15);color:var(--gold)',fld('Company',emp.company)+fld('Employee ID',emp.empId,true,true)+fld('Designation',emp.designation)+fld('Job Title',emp.jobTitle)+fld('Joined',emp.since)+fld('Office',emp.office)+fld('HR Contact',emp.hr)+fld('Supervisor',emp.supervisor)+fld('Ref 1',emp.ref1)+fld('Ref 2',emp.ref2),emp.src);
}

function renderEducationTab(edu) {
  if(!edu||!edu.length) return '<div style="padding:20px;text-align:center;color:var(--text3);font-family:DM Mono,monospace;font-size:12px;">No education records</div>';
  return edu.map(e=>{
    let fields = fld('Institution',e.institution)+(e.university?fld('University',e.university):'')+(e.board?fld('Board',e.board):'')+fld('Roll / Reg. No.',e.roll||e.regNo,true,true)+fld('Period',e.period)+(e.exam?fld('Exam',e.exam):'')+fld('Result',e.result)+(e.total?fld('Total Marks',e.total):'')+(e.email?fld('Student Email',e.email,false,true):'');
    if(e.sem1||e.sem2||e.sem3) {
      fields = fld('Institution',e.institution)+(e.sem1?fld('Semester 1',e.sem1,'',''):'')+  (e.sem2?fld('Semester 2',e.sem2,'',''):'')+  (e.sem3?fld('Semester 3',e.sem3,'',''):'')+(e.cgpa?`<div class="field-row" style="background:rgba(62,207,142,.06);border-radius:6px;"><span class="field-key">CGPA</span><span class="field-val"><span class="field-highlight" style="color:var(--green)">${e.cgpa}</span></span></div>`:'')+(e.note?`<div style="font-size:10px;color:var(--text3);padding:6px 0;font-family:'DM Mono',monospace;">${e.note}</div>`:'');
    }
    return docCard(e.level,'Education',EduB,fields,e.src);
  }).join('');
}

function renderFinanceTab(fin) {
  if(!fin||!fin.length) return '<div style="padding:20px;text-align:center;color:var(--text3);font-family:DM Mono,monospace;font-size:12px;">No finance records</div>';
  return fin.map(f=>docCard(f.bank,'Finance',FinB,fld('Account Type',f.type)+fld('Account No.',f.account,true,true)+(f.userId?fld('User ID',f.userId,false,true):'')+(f.cif?fld('CIF No.',f.cif,false,true):''),f.src)).join('');
}

function renderInsuranceTab(m) {
  let html='';
  const ins=m.sections.insurance;
  if(ins) ins.forEach(i=>{
    if(i.note) {
      html+=docCard('Family Floater Health Insurance','Insurance',InsB,fld('Policy No.',FAMILY_FLOATER.policy,true,true)+fld('Plan',FAMILY_FLOATER.plan)+fld('Insurer',FAMILY_FLOATER.insurer)+fld('Sum Insured',FAMILY_FLOATER.sumInsured)+fld('Period',FAMILY_FLOATER.period)+fld('Premium',FAMILY_FLOATER.premium)+fld('Members',FAMILY_FLOATER.members.join(' · ')),FAMILY_FLOATER.src);
    } else {
      html+=docCard(i.plan||i.type,'Insurance',InsB,fld('Policy No.',i.policy,true,true)+fld('Type',i.type)+fld('Insurer',i.insurer)+fld('Sum Insured',i.sumInsured)+fld('Period',i.period)+fld('Premium',i.premium),i.src);
    }
  });
  return html||'<div style="padding:20px;text-align:center;color:var(--text3);">No insurance data</div>';
}

function buildWkNavCard(d) {
  var DAY_ORDER = d.DAY_ORDER;
  var byDay = d.byDay;
  var attMap = d.attMap;
  var TYPE_ICONS = d.TYPE_ICONS;
  var todayName = d.todayName;
  var showAtt = d.showAtt;
  var curIdx = d.curIdx;
  var day = DAY_ORDER[curIdx];
  var slots = byDay[day] || [];
  var isToday = day === todayName;

  // Header with nav arrows
  var prevDis = curIdx <= 0 ? ' disabled' : '';
  var nextDis = curIdx >= DAY_ORDER.length - 1 ? ' disabled' : '';
  var dayMeta = slots.length ? (slots.length + ' class' + (slots.length !== 1 ? 'es' : '')) : 'No classes';
  var todayPill = isToday ? '<span class="wknav-today-pill">TODAY</span>' : '';
  var hdr = '<div class="wknav-hdr">'
    + '<div class="wknav-arrow' + prevDis + '" onclick="wkNav(-1)">‹</div>'
    + '<div class="wknav-day-info">'
    + '<div class="wknav-day-name">' + day + todayPill + '</div>'
    + '<div class="wknav-day-meta">' + dayMeta + '</div>'
    + '</div>'
    + '<div class="wknav-arrow' + nextDis + '" onclick="wkNav(1)">›</div>'
    + '</div>';

  // Attendance toggle
  var attToggle = '<div class="wknav-toolbar">'
    + '<button class="wknav-att-toggle' + (showAtt ? ' on' : '') + '" onclick="wkToggleAtt()">'
    + (showAtt ? '📊 Att. ON' : '📊 Att. OFF')
    + '</button></div>';

  // Slot rows
  var slotRows = '';
  if (!slots.length) {
    slotRows = '<div class="wknav-no-class">🎉 No classes today</div>';
  } else {
    slots.forEach(function(slot) {
      var att = attMap[slot.att_key];
      var pct = att ? Math.round(att.present / att.total * 100) : null;
      var col = pct === null ? 'var(--text3)'
        : pct >= 75 ? 'var(--green)' : pct >= 70 ? 'var(--orange)' : 'var(--red)';
      var bbg = pct === null ? 'transparent'
        : pct >= 75 ? 'rgba(62,207,142,.12)' : pct >= 70 ? 'rgba(255,165,0,.12)' : 'rgba(255,79,79,.12)';
      var attBadge = '';
      if (showAtt) {
        if (att) {
          var riskLabel = pct < 75 ? ' ⚠️' : '';
          attBadge = '<div class="wknav-att-badge" style="background:' + bbg + ';color:' + col + '">'
            + pct + '% · ' + att.present + '/' + att.total + riskLabel
            + '</div>';
        } else {
          attBadge = '<div style="font-size:10px;color:var(--text3);margin-top:4px;font-style:italic;">No att. data</div>';
        }
      }
      slotRows += '<div class="wknav-slot">'
        + '<div class="wknav-slot-icon-col">'
        + '<div class="wknav-slot-icon">' + (TYPE_ICONS[slot.type] || '📌') + '</div>'
        + '<div class="wknav-slot-period">P' + slot.period + '</div>'
        + '</div>'
        + '<div class="wknav-slot-body">'
        + '<div class="wknav-slot-subject">' + (slot.subject || slot.code) + '</div>'
        + '<div class="wknav-slot-meta">' + (slot.time || '') + ' · ' + slot.type + (slot.room ? ' · 📍 ' + slot.room : '') + '</div>'
        + attBadge
        + '</div>'
        + '</div>';
    });
  }

  // Dot navigation row
  var dots = '<div class="wknav-dots">';
  DAY_ORDER.forEach(function(dd, ii) {
    var cls = 'wknav-dot';
    if (ii === curIdx) { cls += ' active'; }
    else if (byDay[dd] && byDay[dd].length) { cls += ' has-class'; }
    if (dd === todayName && ii !== curIdx) { cls += ' today-dot'; }
    dots += '<div class="' + cls + '" title="' + dd + '" onclick="wkNavTo(' + ii + ')"></div>';
  });
  dots += '</div>';

  // Assemble: outer wrap keeps card + dots together, no overflow:hidden on outer
  return '<div class="wknav-wrap">'
    + '<div class="wknav-card' + (isToday ? ' today-day' : '') + '">'
    + hdr
    + attToggle
    + '<div class="wknav-slot-list wknav-body-anim">'
    + slotRows
    + '</div>'
    + '</div>'
    + dots
    + '</div>';
}


function wkNav(dir) {
  var d = window._wkDayData;
  if (!d) return;
  var newIdx = d.curIdx + dir;
  if (newIdx < 0 || newIdx >= d.DAY_ORDER.length) return;
  d.curIdx = newIdx;
  var root = document.getElementById('wknav-root');
  if (root) root.innerHTML = buildWkNavCard(d);
}

function wkNavTo(idx) {
  var d = window._wkDayData;
  if (!d) return;
  d.curIdx = idx;
  var root = document.getElementById('wknav-root');
  if (root) root.innerHTML = buildWkNavCard(d);
}

function wkToggleAtt() {
  var d = window._wkDayData;
  if (!d) return;
  d.showAtt = !d.showAtt;
  var root = document.getElementById('wknav-root');
  if (root) root.innerHTML = buildWkNavCard(d);
}

function switchAcadView(viewId) {
  window._acadView = viewId;
  // Re-render only the tab content — no scroll, no page jump
  var m = typeof currentMember !== 'undefined' ? MEMBERS[currentMember] : null;
  if (m) renderMemberTab(m, 'academics');
  // Re-init week nav day data when switching to weekview
  if (viewId === 'weekview' && window._wkDayData) {
    var root = document.getElementById('wknav-root');
    if (root) root.innerHTML = buildWkNavCard(window._wkDayData);
  }
}

function renderAcademicsTab(m) {
  if (m.id !== 'josritha') return '<div style="padding:20px;text-align:center;color:var(--text3);">Academics data is specific to Josritha</div>';

  // ── Data sources ─────────────────────────────────────────────────────
  const _attSynced = localStorage.getItem('fp_attendance_synced');
  const liveAtt = _attSynced ? JSON.parse(_attSynced) : ATTENDANCE;
  const _ttSynced = localStorage.getItem('fp_timetable_synced');
  const liveTT = _ttSynced ? JSON.parse(_ttSynced) : null;

  // ── Status banner ────────────────────────────────────────────────────
  const below75 = liveAtt.filter(a => Math.round(a.present/a.total*100) < 75).length;
  const warnHtml = below75 > 0
    ? `<div style="background:rgba(255,79,79,.08);border:1px solid rgba(255,79,79,.25);border-radius:10px;padding:10px 14px;margin-bottom:14px;display:flex;align-items:center;gap:10px;">
        <span style="font-size:20px;">⚠️</span>
        <div>
          <div style="font-size:13px;font-weight:700;color:var(--red);">${below75} subject${below75!==1?'s':''} below 75% attendance</div>
          <div style="font-size:11px;color:var(--text2);margin-top:2px;">Risk of detention — contact faculty advisor</div>
        </div>
       </div>`
    : `<div style="background:rgba(62,207,142,.07);border:1px solid rgba(62,207,142,.2);border-radius:10px;padding:10px 14px;margin-bottom:14px;display:flex;align-items:center;gap:10px;">
        <span style="font-size:20px;">✅</span>
        <div style="font-size:13px;font-weight:700;color:var(--green);">All subjects above 75% — on track</div>
       </div>`;

  // ── Upload bar ────────────────────────────────────────────────────────
  const uploadBar = `
    <div style="background:var(--surface2);border:1px solid rgba(167,139,250,.25);border-radius:12px;padding:12px 14px;margin-bottom:14px;">
      <div style="font-size:11px;font-weight:700;color:var(--text3);font-family:'DM Mono',monospace;letter-spacing:.5px;margin-bottom:10px;">📡 DATA SYNC</div>
      <div style="display:flex;align-items:center;justify-content:space-between;gap:10px;margin-bottom:8px;">
        <div>
          <div style="font-size:12px;font-weight:600;color:var(--text);">Attendance JSON</div>
          <div style="font-size:11px;color:var(--text3);font-family:'DM Mono',monospace;margin-top:1px;">${localStorage.getItem('fp_attendance_synced_ts') ? '🟢 '+localStorage.getItem('fp_attendance_synced_ts') : '⚪ Never synced'}</div>
        </div>
        <label style="background:var(--purple);color:#fff;font-size:11px;font-weight:700;padding:7px 13px;border-radius:8px;cursor:pointer;white-space:nowrap;flex-shrink:0;">
          📂 Upload
          <input type="file" accept=".json" style="display:none;" onchange="syncAttendanceFile(this)">
        </label>
      </div>
      <div style="height:1px;background:var(--border2);margin:8px 0;"></div>
      <div style="display:flex;align-items:center;justify-content:space-between;gap:10px;">
        <div>
          <div style="font-size:12px;font-weight:600;color:var(--text);">Timetable JSON</div>
          <div style="font-size:11px;color:var(--text3);font-family:'DM Mono',monospace;margin-top:1px;">${localStorage.getItem('fp_timetable_synced_ts') ? '🟢 '+localStorage.getItem('fp_timetable_synced_ts') : '⚪ Never uploaded — use the KL Portal bookmark'}</div>
        </div>
        <label style="background:linear-gradient(135deg,#a78bfa,#818cf8);color:#fff;font-size:11px;font-weight:700;padding:7px 13px;border-radius:8px;cursor:pointer;white-space:nowrap;flex-shrink:0;">
          🗓️ Upload
          <input type="file" accept=".json" style="display:none;" onchange="syncTimetableFile(this)">
        </label>
      </div>
    </div>`;

  // ── View switcher ─────────────────────────────────────────────────────
  // View switcher (2 tabs: Attendance + Week View)
  var _acadView = window._acadView || 'attendance';
  var switcher = '<div style="display:flex;gap:6px;margin-bottom:0;background:var(--surface2);border-radius:10px;padding:4px;">';
  [['attendance','📊 Attendance'],['weekview','📅 Week View']].forEach(function(t) {
    var isAct = _acadView === t[0];
    switcher += '<button onclick="switchAcadView(\'' + t[0] + '\')" style="flex:1;padding:7px 4px;border:none;border-radius:7px;font-size:11px;font-weight:700;font-family:Inter,sans-serif;cursor:pointer;transition:all .2s;' + (isAct ? 'background:var(--purple);color:#fff;box-shadow:0 2px 8px rgba(139,92,246,.35);' : 'background:transparent;color:var(--text3);') + '">' + t[1] + '</button>';
  });
  switcher += '</div>';

  // ── ATTENDANCE VIEW ───────────────────────────────────────────────────
  const attView = liveAtt.map(a => {
    const pct = Math.round(a.present/a.total*100);
    const col = pct>=75?'var(--green)':pct>=70?'var(--orange)':'var(--red)';
    const lbl = pct>=75?'GOOD':pct>=70?'AT RISK':'CRITICAL';
    return `<div style="background:var(--surface2);border:1px solid var(--border2);border-radius:12px;padding:14px;border-left:3px solid ${col}${pct<75?';background:rgba(255,79,79,.03)':''}">
      <div style="display:flex;align-items:flex-start;justify-content:space-between;gap:10px;">
        <div style="flex:1">
          <div style="font-size:13px;font-weight:700;color:${pct<75?'var(--red)':'var(--text1)'};">${a.subject}</div>
          <div style="font-size:11px;color:var(--text3);font-family:'DM Mono',monospace;margin-top:3px;">${a.code} · ${a.type}</div>
          <div style="margin-top:8px;height:4px;background:var(--border2);border-radius:4px;overflow:hidden;">
            <div style="height:100%;width:${pct}%;background:${col};border-radius:4px;transition:width .4s ease;"></div>
          </div>
          <div style="font-size:11px;color:var(--text2);margin-top:5px;">${a.present} present / ${a.total} total</div>
        </div>
        <div style="text-align:right;flex-shrink:0;">
          <div style="font-size:22px;font-weight:800;color:${col};font-family:'DM Mono',monospace;">${pct}%</div>
          <div style="font-size:9px;font-weight:700;color:${col};font-family:'DM Mono',monospace;letter-spacing:.5px;">${lbl}</div>
        </div>
      </div>
    </div>`;
  }).join('');

  // ── WEEK VIEW — single-block navigator Mon-Sat ──────────────────────
  var DAY_ORDER = ['MONDAY','TUESDAY','WEDNESDAY','THURSDAY','FRIDAY','SATURDAY'];
  var TYPE_ICONS = {Lecture:'📖',Lab:'🔬',Tutorial:'📝',Seminar:'🎓'};
  var todayName = ['SUNDAY','MONDAY','TUESDAY','WEDNESDAY','THURSDAY','FRIDAY','SATURDAY'][new Date().getDay()];

  var weekViewHtml = '';
  if (liveTT) {
    var byDay = {};
    DAY_ORDER.forEach(function(d){ byDay[d] = []; });
    liveTT.forEach(function(slot){ if (byDay[slot.day]) byDay[slot.day].push(slot); });
    DAY_ORDER.forEach(function(d){ byDay[d].sort(function(a,b){ return a.period - b.period; }); });
    var attMap = {};
    liveAtt.forEach(function(a){ attMap[a.code+'|'+a.type] = a; });

    // Determine initial day index: today if it's a weekday, else 0 (Monday)
    var todayIdx = DAY_ORDER.indexOf(todayName);
    var initIdx = todayIdx >= 0 ? todayIdx : 0;
    // Store on window so wkNav can access it
    window._wkDayData = { byDay: byDay, attMap: attMap, DAY_ORDER: DAY_ORDER,
      TYPE_ICONS: TYPE_ICONS, todayName: todayName, showAtt: true, curIdx: initIdx };

    weekViewHtml = '<div id="wknav-root">' + buildWkNavCard(window._wkDayData) + '</div>';
  }

  var noTTHint = !liveTT
    ? '<div style="text-align:center;padding:24px 16px;background:var(--surface2);border-radius:12px;border:1px dashed var(--border2);">'
      + '<div style="font-size:28px;margin-bottom:8px;">🗓️</div>'
      + '<div style="font-size:13px;font-weight:700;color:var(--text2);">No timetable uploaded yet</div>'
      + '<div style="font-size:11px;color:var(--text3);margin-top:4px;line-height:1.5;">Use the KL Portal bookmark to extract your timetable JSON,<br>then upload it above to enable Week View.</div>'
      + '</div>'
    : '';

  // ── Content by active view ──────────────────────────────────────────
  var content = '';
  if (_acadView === 'attendance') {
    content = '<div style="display:flex;flex-direction:column;gap:10px;">' + attView + '</div>';
  } else {
    content = liveTT ? weekViewHtml : noTTHint;
  }

  // Build sticky stats bar
  var totalSubjects = liveAtt.length;
  var atRisk = liveAtt.filter(function(a){ return Math.round(a.present/a.total*100) < 75; }).length;
  var critical = liveAtt.filter(function(a){ return Math.round(a.present/a.total*100) < 70; }).length;
  var good = totalSubjects - atRisk;
  var overallP = liveAtt.length ? Math.round(liveAtt.reduce(function(s,a){ return s + a.present; },0) / liveAtt.reduce(function(s,a){ return s + a.total; },0) * 100) : 0;
  var overallCol = overallP >= 75 ? 'var(--green)' : overallP >= 70 ? 'var(--orange)' : 'var(--red)';
  var statsBar = liveAtt.length ? ('<div class="acad-sticky-stats">'
    + '<div class="acad-stat-chip" style="background:rgba(79,127,255,.1);color:var(--blue2)">' + totalSubjects + ' subjects</div>'
    + (good > 0 ? '<div class="acad-stat-chip" style="background:rgba(62,207,142,.1);color:var(--green)">✓ ' + good + ' good</div>' : '')
    + (atRisk > 0 ? '<div class="acad-stat-chip" style="background:rgba(255,79,79,.1);color:var(--red)">⚠ ' + atRisk + ' at risk</div>' : '')
    + '<div class="acad-stat-chip" style="background:rgba(' + (overallP>=75?'62,207,142':overallP>=70?'255,165,0':'255,79,79') + ',.12);color:' + overallCol + '">Overall ' + overallP + '%</div>'
    + '</div>') : '';

  return '<div style="padding:4px 0;">'
    + '<div style="font-size:11px;color:var(--text3);font-family:DM Mono,monospace;margin-bottom:12px;letter-spacing:.5px;">KL UNIVERSITY · EVEN SEMESTER 2025–26</div>'
    + warnHtml
    + uploadBar
    + '<div class="acad-sticky-bar">'
    + statsBar
    + switcher
    + '</div>'
    + content
    + '</div>';
}



// ═══════════════════════════════════════════════════════
// AUTO ATTENDANCE EVENTS — creates/updates/deletes calendar
// events for Josritha subjects below 75%
// ═══════════════════════════════════════════════════════
function autoManageAttendanceEvents(attData) {
  // Guard — never run during backup operation
  if (!attData || !Array.isArray(attData) || !attData.length) return;

  var PREFIX = 'att_risk_';
  var DAY_MAP = {0:'SUNDAY',1:'MONDAY',2:'TUESDAY',3:'WEDNESDAY',4:'THURSDAY',5:'FRIDAY',6:'SATURDAY'};

  // Load timetable from localStorage
  var ttData = [];
  try {
    var ttRaw = localStorage.getItem('fp_timetable_synced');
    if (ttRaw) ttData = JSON.parse(ttRaw);
  } catch(e) { ttData = []; }

  // Load current calendar events (safe wrapper)
  var events = [];
  try { events = getCalEvents(); } catch(e) { return; }

  // Step 1: Remove ALL existing auto att_risk events (full refresh)
  events = events.filter(function(e) {
    return !(e.id && e.id.indexOf(PREFIX) === 0 && e.auto === true);
  });

  // Step 2: Build set of risky subjects
  var riskySubjects = {};
  attData.forEach(function(a) {
    if (!a.code || !a.type || !a.subject) return;
    var pct = Math.round(a.present / a.total * 100);
    if (pct < 75) {
      var attKey = a.code + '|' + a.type;
      var need = Math.max(0, Math.ceil(0.75 * (a.total + 1)) - a.present);
      var canSkip = Math.max(0, Math.floor(a.total * 0.25) - (a.total - a.present));
      riskySubjects[attKey] = {
        code: a.code,
        type: a.type,
        subject: a.subject,
        pct: pct,
        need: need,
        canSkip: canSkip,
        critical: pct < 70
      };
    }
  });

  var riskCount = Object.keys(riskySubjects).length;
  if (riskCount === 0) {
    // All subjects safe — save cleaned events and return
    try { saveCalEvents(events); } catch(e) {}
    return;
  }

  // Step 3: Generate day-wise events for next 2 months
  var today = new Date();
  today.setHours(0,0,0,0);
  var cutoff = new Date(today);
  cutoff.setDate(cutoff.getDate() + 62); // ~2 months

  // Build lookup: attKey -> list of timetable day names
  var ttByKey = {};
  ttData.forEach(function(slot) {
    var key = slot.att_key || (slot.code + '|' + slot.type);
    if (!ttByKey[key]) ttByKey[key] = {};
    ttByKey[key][slot.day] = true; // slot.day = 'MONDAY' etc
  });

  // Walk each day for next 2 months
  var d = new Date(today);
  var newEvents = [];
  while (d <= cutoff) {
    var dayName = DAY_MAP[d.getDay()];
    var dateStr = d.getFullYear() + '-' + String(d.getMonth()+1).padStart(2,'0') + '-' + String(d.getDate()).padStart(2,'0');

    Object.keys(riskySubjects).forEach(function(attKey) {
      var subj = riskySubjects[attKey];
      // Only create event if this subject has a class on this day of week
      var hasClassToday = ttByKey[attKey] && ttByKey[attKey][dayName];
      if (!hasClassToday) return;

      var shortName = subj.subject.length > 24 ? subj.subject.substring(0,22) + '\u2026' : subj.subject;
      var icon = subj.critical ? '\uD83D\uDEA8' : '\uD83D\uDCDA';
      var label = subj.critical ? '\uD83D\uDEA8 CRITICAL' : '\u26A0\uFE0F AT RISK';
      var note = subj.type + ' \u00B7 ' + subj.pct + '% \u00B7 '
        + (subj.canSkip > 0
            ? 'Can skip ' + subj.canSkip + ' more · need ' + subj.need + ' to reach 75%'
            : 'DO NOT skip · need ' + subj.need + ' more classes');

      // Unique id per subject + date
      var safeKey = attKey.replace(/[^a-zA-Z0-9]/g, '_');
      newEvents.push({
        id: PREFIX + safeKey + '_' + dateStr,
        title: label + ' ' + shortName,
        date: dateStr,
        type: 'Academic',
        icon: icon,
        members: ['Josritha'],
        auto: true,
        att_key: attKey,
        note: note
      });
    });

    d.setDate(d.getDate() + 1);
  }

  // Step 4: Merge and save
  var finalEvents = events.concat(newEvents);
  try {
    saveCalEvents(finalEvents);
    if (newEvents.length > 0) {
      setTimeout(function() {
        showToast('\uD83D\uDCDA ' + newEvents.length + ' class alerts created for ' + riskCount + ' at-risk subject' + (riskCount!==1?'s':''));
      }, 400);
    }
  } catch(e) {}
}


function syncAttendanceFile(input) {
  const file = input.files[0]; if (!file) return;
  const reader = new FileReader();
  reader.onload = function(e) {
    try {
      const data = JSON.parse(e.target.result);
      if (!Array.isArray(data) || !data.length || !data[0].hasOwnProperty("subject")) { showToast("❌ Invalid file"); return; }
      localStorage.setItem("fp_attendance_synced", JSON.stringify(data));
      const ts = new Date().toLocaleString("en-IN", {day:"numeric",month:"short",year:"numeric",hour:"2-digit",minute:"2-digit"});
      localStorage.setItem("fp_attendance_synced_ts", ts);
      showToast("✅ " + data.length + " subjects synced");
      setTimeout(function() { autoManageAttendanceEvents(data); }, 200);
      setTimeout(() => { showMemberDetail("josritha","academics"); initWidgetDynamic(); auraRenderEducation(); auraRenderAlerts(); }, 50);
      input.value = "";
    } catch(err) { showToast("❌ Could not parse file"); }
  };
  reader.readAsText(file);
}
function syncTimetableFile(input) {
  const file = input.files[0]; if (!file) return;
  const reader = new FileReader();
  reader.onload = function(e) {
    try {
      const parsed = JSON.parse(e.target.result);
      const data = Array.isArray(parsed) ? parsed : (parsed.timetable && Array.isArray(parsed.timetable) ? parsed.timetable : null);
      if (!data || !data.length || !data[0].hasOwnProperty("day") || !data[0].hasOwnProperty("att_key")) {
        showToast("❌ Invalid timetable file — use the KL Portal bookmark"); return;
      }
      localStorage.setItem("fp_timetable_synced", JSON.stringify(data));
      const ts = new Date().toLocaleString("en-IN", {day:"numeric",month:"short",year:"numeric",hour:"2-digit",minute:"2-digit"});
      localStorage.setItem("fp_timetable_synced_ts", ts);
      window._acadView = 'combined';
      showToast("✅ Timetable synced — " + data.length + " slots loaded");
      setTimeout(() => { showMemberDetail("josritha","academics"); initWidgetDynamic(); auraRenderEducation(); auraRenderHome(); }, 50);
      input.value = "";
    } catch(err) { showToast("❌ Could not parse timetable file"); }
  };
  reader.readAsText(file);
}
function renderPropertyTab(props) {
  if(!props||!props.length) return '<div style="padding:20px;text-align:center;color:var(--text3);font-family:DM Mono,monospace;font-size:12px;">No property records</div>';
  return props.map(p=>docCard(p.name,'Property',PropB,fld('PTI / Assessment',p.pti||p.assessment,true,true)+fld('Door No.',p.door)+fld('Type',p.type)+fld('Area',p.area)+(p.annualTax?fld('Annual Tax',p.annualTax):'')+(p.taxAnnual?fld('Annual Tax',p.taxAnnual):'')+(p.capitalValue?fld('Capital Value',p.capitalValue):'')+(p.note?fld('Note',p.note):''),p.src)).join('');
}

function renderVehicleTab(vehicles) {
  if(!vehicles||!vehicles.length) return '<div style="padding:20px;text-align:center;color:var(--text3);font-family:DM Mono,monospace;font-size:12px;">No vehicle records</div>';
  return vehicles.map(v=>docCard(v.name,'Vehicle',VehB,fld('Registration',v.reg,true,true)+fld('Year',v.year)+fld('Engine No.',v.engine,false,true)+fld('Chassis No.',v.chassis,false,true)+fld('Insurer',v.insurer)+fld('Policy No.',v.policy,false,true)+fld('IDV',v.idv)+fld('Period',v.period)+fld('Premium',v.premium)+fld('NCB',v.ncb)+(v.nominee?fld('Nominee',v.nominee):''),v.src)).join('');
}

// ═══════════════════════════════════════
// DOCUMENTS
// ═══════════════════════════════════════
const ALL_DOCS = [];
let docTypeFilter='All', docPersonFilter='All';

function buildAllDocs() {
  if(ALL_DOCS.length) return;
  const a=(person,type,name,k1,v1,k2,v2,src)=>ALL_DOCS.push({person,type,name,key1:k1,val1:v1,key2:k2||'',val2:v2||'',src:src||''});
  a('Rajasekhar','Identity','Aadhaar Card','Aadhaar No.','6106 1778 4861','VID','9120 6379 3571 1704','ID_Rajasekhar_Aadhaar_6106-1778-4861.pdf');
  a('Rajasekhar','Identity','PAN Card','PAN No.','AICPD3992N','Issued','26/10/2018','ID_Rajasekhar_PANCard_AICPD3992N.pdf');
  a('Rajasekhar','Identity','Driving Licence','DL No.','DLFAP62729122008','Valid Until','20/01/2027','ID_Rajasekhar_DrivingLicense_Exp2027.pdf');
  a('Rajasekhar','Identity','Voter ID','EPIC No.','UPD2998482','Assembly','108-Ongole','ID_Rajasekhar_VoterCard_UPD2998482.pdf');
  a('Rajasekhar','Identity','Passport','Passport No.','E8690728','Nationality','IND','ID_Rajasekhar_Passport_E8690728.pdf');
  a('Rajasekhar','Employment','Employment Record','Emp ID','18','Company','Dataspeaks Services','BGV Form.docx');
  a('Rajasekhar','Education','B.Tech Certificate','Roll No.','95 PE 023','University','Nagarjuna University','EDU_Rajasekhar_BTech_NagarjunaUniversity_1999.pdf');
  a('Rajasekhar','Education','Intermediate Certificate','Roll No.','527896','Board','BIE, AP','EDU_Rajasekhar_Intermediate_BIEAndhraPradesh_1994.pdf');
  a('Rajasekhar','Education','SSC Certificate','Roll No.','0913225','Board','BSE, AP','EDU_Rajasekhar_SSC_BSEAndhraPradesh_1992.pdf');
  a('Rajasekhar','Insurance','Individual Health Insurance','Policy','4128i/HSNR/92094505/10/000','Period','2025–2026','INS_Rajasekhar_HealthInsurance_ICICI_Individual_2025-26.pdf');
  a('Rajasekhar','Finance','HDFC Bank Account','Account','50100245463742','Type','Primary Savings','FIN_Family_BankAccounts_Reference.txt');
  a('Rajasekhar','Finance','ICICI Bank Account','Account','020201506595','Type','Savings','FIN_Family_BankAccounts_Reference.txt');
  a('Rajasekhar','Finance','AXIS Bank Account','Account','008010101337901','Type','Account 1','FIN_Family_BankAccounts_Reference.txt');
  a('Rajasekhar','Property','OneCity Flat 807','PTI','1231502265','Area','1,501 Sq.Ft.','PROP_Rajasekhar_Flat807_OneCity_Hyderabad.jpg');
  a('Vasundhara','Identity','Aadhaar Card','Aadhaar No.','3372 3106 9560','VID','9157 4654 1152 8966','ID_Vasundhara_Aadhaar_3372-3106-9560.pdf');
  a('Vasundhara','Identity','PAN Card','PAN No.','BDXPD9514R','DOB','26/08/1982','ID_Vasundhara_PANCard_BDXPD9514R.pdf');
  a('Family','Identity','Marriage Certificate','Date','22nd December 2004','Act','Hindu Marriage Act 1955','ID_Family_MarriageCertificate_2004.pdf');
  a('Family','Insurance','Family Floater Health','Policy','4193i/APRN/400529214/00/000','Coverage','₹15L/member','INS_Family_HealthInsurance_ICICI_Floater_2025-26.pdf');
  a('Vasundhara','Vehicle','Honda Activa 125','Reg.','TS08HJ8438','Insurance','3005/430080806/00/000','INS_Vasundhara_BikeInsurance_ICICI_TS08HJ8438_2025-26.pdf');
  a('Vasundhara','Vehicle','Hyundai i10 Sportz','Reg.','AP27AK7873','Insurance','3001/103498197/10/000','INS_Vasundhara_CarInsurance_ICICI_AP27AK7873_2025-26.pdf');
  a('Vasundhara','Finance','Indian Bank Savings','Account No.','446333602','Bank','Indian Bank','FIN_Family_BankAccounts_Reference.txt');
  a('Vasundhara','Finance','AXIS Bank Savings','Account No.','917010048201559','User ID','875153108','FIN_Family_BankAccounts_Reference.txt');
  a('Vasundhara','Finance','HDFC Bank Savings','Account No.','50100638839241','CIF','244624331','FIN_Family_BankAccounts_Reference.txt');
  a('Vasundhara','Property','Flat 403 – Ongole','Assessment','1035037996','Type','Residential','PROP_Vasundhara_Flat403_MangamuruDonka_Ongole.pdf');
  a('Vasundhara','Property','Shop G5 – Ongole','Assessment','1035038052','Type','Non-Residential','PROP_Vasundhara_ShopG5_SilverSpring_Ongole.pdf');
  a('Josritha','Identity','Aadhaar Card','Aadhaar No.','8316 6458 6848','VID','9124 7918 6424 2719','ID_Josritha_Aadhaar_8316-6458-6848.pdf');
  a('Josritha','Identity','Voter ID','EPIC No.','UPD3143468','Assembly','108-Ongole','ID_Josritha_VoterCard_UPD3143468.pdf');
  a('Josritha','Identity','Birth Certificate','DOB','26-February-2006','Place','Hyderabad','ID_Josritha_BirthCertificate_Hyderabad.pdf');
  a('Josritha','Education','B.Tech (Current)','Roll','2420030493','Institution','KL University – KLH','EDU_Josritha_BTech_KLUniversity_Details.html');
    a('Josritha', 'Education', 'B.Tech Results (Till Date)', 'CGPA', '9.24 (Sem 1–3)', 'Latest SGPA', '7.17 (Sem 3)','EDU_Josritha_BTech_KLUniversity_Results.html');
  a('Josritha','Education','B.Tech Attendance – Even Sem','Year','2025-2026','Critical (<75%)','6 subjects','EDU_Josritha_BTech_KLUniversity_Attendance_EvenSem_2025-26.pdf');
  a('Josritha','Education','Intermediate Certificate','Reg. No.','2417214778','Result','PASS – A GRADE 878','EDU_Josritha_Intermediate_BIEAndhraPradesh_2024.pdf');
  a('Josritha','Education','SSC Certificate','Roll','20164403','Board','CBSE','EDU_Josritha_SSC_CBSE_2022.pdf');
  a('Jeevan','Identity','Aadhaar Card','Aadhaar No.','6918 2946 7739','VID','9158 3149 4395 7932','ID_Jeevan_Aadhaar_6918-2946-7739.pdf');
  a('Jeevan','Identity','Birth Certificate','DOB','22/08/2010','Place','Ongole, AP','ID_Jeevan_BirthCertificate_Ongole.pdf');
  a('Jeevan','Finance','HDFC Bank Account','Account','50100671382555','Type','Savings','FIN_Family_BankAccounts_Reference.txt');
}

function initDocuments() {
  buildAllDocs();
  const types=['All','Identity','Finance','Insurance','Education','Property','Vehicle','Employment','Family'];
  const persons=['All','Rajasekhar','Vasundhara','Josritha','Jeevan','Family'];

  // Update hero count
  const tn=document.getElementById('docs-total-num');if(tn)tn.textContent=ALL_DOCS.length;

  // Type chips
  const tcWrap = document.getElementById('type-chips');
  if(tcWrap) {
    tcWrap.innerHTML = types.map(function(t){return '<div class="fc-chip '+(t==='All'?'active':'')+'" onclick="setDocType(\''+t+'\')" data-type-chip="'+t+'">'+(t!=='All'?(TYPE_ICONS[t]||'📄')+' ':'')+t+'</div>';}).join('');
  }

  // Person chips
  const pcWrap = document.getElementById('person-chips');
  if(pcWrap) {
    pcWrap.innerHTML = persons.map(p=>{
      if(p==='All') return'<div class="fc-chip active" onclick="setDocPerson(\'All\')" data-person-chip="All">All</div>';
      const pg=PERSON_GRAD[p]||'linear-gradient(135deg,#374151,#6b7280)';const pi=PERSON_INIT[p]||p[0];
      const mk=p.toLowerCase();
      const chipAv=MEMBER_PHOTOS[mk]?`<img src="${MEMBER_PHOTOS[mk]}" style="width:16px;height:16px;border-radius:3px;object-fit:cover;object-position:center top;flex-shrink:0;">`:`<span class="fc-av" style="background:${pg}">${pi}</span>`;
      return'<div class="fc-chip" onclick="setDocPerson(\''+p+'\')" data-person-chip="'+p+'">'+chipAv+p+'</div>';
    }).join('');
  }

  buildDocList();
  // Start fully collapsed — applyDocFilters will NOT reopen them
  setTimeout(collapseAllDocSections, 20);
}

function buildDocList() {
  const grouped = {};
  ALL_DOCS.forEach(d=>{if(!grouped[d.type])grouped[d.type]=[];grouped[d.type].push(d);});
  const body = document.getElementById('doc-list-body');
  if(!body) return;

  let html = '';
  Object.entries(grouped).forEach(([type,docs])=>{
    const col=TYPE_COLORS[type]||'var(--text2)'; const icon=TYPE_ICONS[type]||'📄';
    html += `<div class="doc-cat-section" data-cat-section="${type}">
      <div class="doc-cat-hdr pressable collapsed" onclick="toggleDocCat(this)" data-cat="${type}">
        <div class="doc-cat-left">
          <div class="doc-cat-icon" style="background:${col}18;color:${col}">${icon}</div>
          <span class="doc-cat-name" style="color:${col}">${type}</span>
          <span class="doc-cat-ct" data-cat-ct="${type}" data-total="${docs.length}">${docs.length} doc${docs.length>1?'s':''}</span>
        </div>
        <span class="doc-cat-chevron">▾</span>
      </div>
      <div class="doc-cat-body" data-cat-body="${type}" style="display:none">`;

    docs.forEach(doc=>{
      const dc=TYPE_COLORS[doc.type]||'var(--text2)'; const di=TYPE_ICONS[doc.type]||'📄';
      const pg=PERSON_GRAD[doc.person]||'linear-gradient(135deg,#374151,#6b7280)'; const pi=PERSON_INIT[doc.person]||doc.person[0];
      const expiryDays = EXPIRY_DOC_DAYS[doc.src];
      const expiryDot = expiryDays!==undefined ? `<span class="dr-expiry-dot" style="background:${expiryColor(expiryDays)}" title="${expiryBadge(expiryDays)}"></span>` : '';
      const v1safe = String(doc.val1).replace(/'/g,"\\'");
      const viewBtn = DOC_LINKS[doc.src] ? `<a class="dr-view-btn" href="${DOC_LINKS[doc.src]}" target="_blank" onclick="event.stopPropagation()">👁 View</a>` : '';
      html += `<div class="doc-row pressable" data-type="${doc.type}" data-person="${doc.person}">
        <div class="dr-icon" style="background:${dc}18;color:${dc}">${di}</div>
        <div class="dr-body">
          <div class="dr-line1">
            ${expiryDot}
            <span class="dr-name">${doc.name}</span>
            <span class="dr-person-pill" style="background:${pg};color:#fff">${pi}</span>
          </div>
          <div class="dr-line2">
            <span class="dr-key-val" onclick="copyVal('${v1safe}',this)" title="Copy">${doc.key1}: <strong>${doc.val1}</strong> <span class="dr-copy-hint">⎘</span></span>
            ${doc.key2?`<span class="dr-file">· ${doc.key2}: ${doc.val2}</span>`:''}
          </div>
          <div class="dr-line2" style="margin-top:2px"><span class="dr-file">📎 ${doc.src}</span></div>
        </div>
        <div class="dr-actions">${viewBtn}</div>
      </div>`;
    });
    html += `</div></div>`;
  });

  html += `<div class="doc-no-match" id="doc-no-match">No matching documents</div>`;
  body.innerHTML = html;

  // Reveal animation
  setTimeout(()=>{
    const rows = body.querySelectorAll('.doc-row');
    rows.forEach((r,i)=>{r.style.opacity='0';r.style.transform='translateX(-6px)';r.style.transition='none';setTimeout(()=>{r.style.transition='opacity .18s,transform .18s';r.style.opacity='1';r.style.transform='none';},i*8);});
  },50);
}

function toggleDocCat(hdr) {
  hdr.classList.toggle('collapsed');
  const body = hdr.nextElementSibling;
  if(body) body.style.display = hdr.classList.contains('collapsed') ? 'none' : '';
}

function collapseAllDocSections() {
  document.querySelectorAll('#doc-list-body .doc-cat-hdr').forEach(hdr => {
    hdr.classList.add('collapsed');
    const body = hdr.nextElementSibling;
    if (body) body.style.display = 'none';
  });
}

function setDocType(val) {
  docTypeFilter=val;
  document.querySelectorAll('[data-type-chip]').forEach(c=>c.classList.toggle('active',c.getAttribute('data-type-chip')===val));
  applyDocFilters();
}

function setDocPerson(val) {
  docPersonFilter=val;
  document.querySelectorAll('[data-person-chip]').forEach(c=>c.classList.toggle('active',c.getAttribute('data-person-chip')===val));
  applyDocFilters();
}

function applyDocFilters() {
  const q=(document.getElementById('doc-search')?.value||'').toLowerCase();
  const rows=document.querySelectorAll('#doc-list-body .doc-row');
  let vis=0;
  rows.forEach(r=>{
    const tm=docTypeFilter==='All'||r.dataset.type===docTypeFilter;
    const pm=docPersonFilter==='All'||r.dataset.person===docPersonFilter;
    const sm=!q||r.textContent.toLowerCase().includes(q);
    const show=tm&&pm&&sm;
    r.style.display=show?'':'none';
    if(show)vis++;
  });

  // ── Per-category: count visible rows, update header badge, show/hide section ──
  let visibleCats=0;
  document.querySelectorAll('[data-cat-section]').forEach(section=>{
    const body=section.querySelector('.doc-cat-body');if(!body)return;
    const catRows=Array.from(body.querySelectorAll('.doc-row'));
    const visCount=catRows.filter(r=>r.style.display!=='none').length;
    const totalCount=catRows.length;
    const hasVis=visCount>0;
    section.style.display=hasVis?'':'none';
    if(hasVis) visibleCats++;
    // Update category header count badge
    const ct=section.querySelector('[data-cat-ct]');
    if(ct){
      const isFiltering=docTypeFilter!=='All'||docPersonFilter!=='All'||!!q;
      if(isFiltering && visCount<totalCount){
        ct.textContent=visCount+' / '+totalCount+' doc'+(totalCount!==1?'s':'');
        ct.style.color='var(--blue2)';
      } else {
        ct.textContent=totalCount+' doc'+(totalCount!==1?'s':'');
        ct.style.color='';
      }
    }
  });

  const total=rows.length;
  const isFiltered=docTypeFilter!=='All'||docPersonFilter!=='All'||!!q;
  const mc=document.getElementById('doc-match-ct');if(mc)mc.textContent=q?vis+' match'+(vis!==1?'es':''):'';
  const cl=document.getElementById('docs-count-lbl');
  if(cl){
    if(isFiltered){
      cl.textContent=vis+' doc'+(vis!==1?'s':'')+' · '+visibleCats+' categor'+(visibleCats!==1?'ies':'y');
    } else {
      cl.textContent=total+' records · 8 categories · 4 members';
    }
  }
  // Update hero doc count
  const tn=document.getElementById('docs-total-num');
  if(tn) tn.textContent=isFiltered?vis:total;
  const nm=document.getElementById('doc-no-match');if(nm)nm.style.display=vis===0?'block':'none';
  const rb=document.getElementById('docs-reset');if(rb)rb.style.display=isFiltered?'flex':'';
  const sc=document.getElementById('doc-clr');if(sc)sc.style.display=q?'flex':'none';
}
function clearDocSearch(){const inp=document.getElementById('doc-search');if(inp)inp.value='';applyDocFilters();}
function resetDocFilters(){docTypeFilter='All';docPersonFilter='All';clearDocSearch();document.querySelectorAll('[data-type-chip]').forEach(c=>c.classList.toggle('active',c.getAttribute('data-type-chip')==='All'));document.querySelectorAll('[data-person-chip]').forEach(c=>c.classList.toggle('active',c.getAttribute('data-person-chip')==='All'));}

// ═══════════════════════════════════════════════════
// IDEA C — DOCUMENT TIMELINE VIEW
// ═══════════════════════════════════════════════════
function setExpiryView(view) {
  const listP=document.getElementById('expiry-list-pane');
  const tlP=document.getElementById('timeline-pane');
  const btnL=document.getElementById('evtb-list');
  const btnT=document.getElementById('evtb-timeline');
  if(view==='timeline'){
    listP.style.display='none'; tlP.style.display='';
    btnL.classList.remove('active'); btnT.classList.add('active');
    buildTimeline();
  } else {
    listP.style.display=''; tlP.style.display='none';
    btnL.classList.add('active'); btnT.classList.remove('active');
    setTimeout(animateExpBars,100);
  }
}

function buildTimeline() {
  var vtlList = document.getElementById('vtl-list');
  var legend  = document.getElementById('vtl-legend');
  if (!vtlList) return;

  var sorted = EXPIRY.slice().sort(function(a,b){ return daysUntil(a.date) - daysUntil(b.date); });
  // Store sorted on element for openTlSheet
  vtlList._expiry = sorted;

  function hexForDays(d){ return d < 0 ? '#ff4f4f' : d <= 30 ? '#ff8c42' : d <= 90 ? '#f0b429' : '#3ecf8e'; }
  function badgeTxt(d){ return d < 0 ? (Math.abs(d)+'d overdue') : d === 0 ? 'TODAY' : (d+'d left'); }
  function badgeBg(d){ return d < 0 ? 'rgba(255,79,79,.15)' : d <= 30 ? 'rgba(255,140,66,.15)' : d <= 90 ? 'rgba(240,180,41,.15)' : 'rgba(62,207,142,.12)'; }
  function fmtD(dateStr){
    var dt = new Date(dateStr + 'T12:00:00');
    return dt.toLocaleDateString('en-IN',{day:'numeric',month:'short',year:'numeric'});
  }
  function groupLabel(d){
    return d < 0 ? 'OVERDUE' : d === 0 ? 'TODAY' : d <= 30 ? 'CRITICAL · ≤30 DAYS' : d <= 90 ? 'URGENT · ≤90 DAYS' : d <= 180 ? 'WARNING · 6 MONTHS' : 'SAFE';
  }

  // Group items
  var groups = [];
  var lastGroup = null;
  sorted.forEach(function(e, i) {
    var d = daysUntil(e.date);
    var gl = groupLabel(d);
    if (gl !== lastGroup) {
      groups.push({ label: gl, items: [], hex: hexForDays(d) });
      lastGroup = gl;
    }
    groups[groups.length-1].items.push({ e: e, d: d, idx: i });
  });

  var html = '';
  groups.forEach(function(g) {
    html += '<div class="vtl-group-label" style="color:' + g.hex + '">' + g.label + '</div>';
    g.items.forEach(function(item, ii) {
      var e = item.e; var d = item.d; var idx = item.idx;
      var hex = hexForDays(d);
      var isLast = (ii === g.items.length - 1);
      html += '<div class="vtl-item pressable" onclick="openTlSheet(' + idx + ')">'
        + '<div class="vtl-spine">'
        + '<div class="vtl-spine-dot" style="background:' + hex + ';box-shadow:0 0 0 3px ' + badgeBg(d) + '"></div>'
        + '<div class="vtl-spine-line" style="background:linear-gradient(' + hex + ',transparent)' + (isLast ? ';opacity:.3' : '') + '"></div>'
        + '</div>'
        + '<div class="vtl-body" style="border-left:3px solid ' + hex + '">'
        + '<div class="vtl-body-top">'
        + '<div class="vtl-icon-title">'
        + '<span class="vtl-icon">' + e.icon + '</span>'
        + '<div><div class="vtl-title">' + e.label + '</div>'
        + '<div class="vtl-sub">' + (e.sub || e.person) + '</div></div>'
        + '</div>'
        + '<div class="vtl-badge" style="background:' + badgeBg(d) + ';color:' + hex + '">' + badgeTxt(d) + '</div>'
        + '</div>'
        + '<div class="vtl-date-row">'
        + '<span class="vtl-date">' + fmtD(e.date) + '</span>'
        + (e.policy ? '<span style="font-size:9px;color:var(--text3);font-family:DM Mono,monospace;">· ' + e.policy + '</span>' : '')
        + '</div>'
        + '</div>'
        + '</div>';
    });
  });

  vtlList.innerHTML = html || '<div style="padding:32px 16px;text-align:center;color:var(--text3);font-size:12px;">No expiry items found</div>';

  if (legend) legend.innerHTML = [
    { col: '#ff4f4f', lbl: 'Overdue' },
    { col: '#ff8c42', lbl: '≤30 days' },
    { col: '#f0b429', lbl: '≤90 days' },
    { col: '#3ecf8e', lbl: 'Safe (>90d)' }
  ].map(function(l){ return '<div class="vtl-leg"><div class="vtl-leg-dot" style="background:' + l.col + '"></div>' + l.lbl + '</div>'; }).join('');
}

function openTlSheet(idx) {
  var axis=document.getElementById('vtl-list');
  var sorted=axis?._expiry;
  if(!sorted) return;
  const e=sorted[idx];
  if(!e) return;
  const days=daysUntil(e.date);
  const col=days<0?'var(--red)':days<=30?'var(--orange)':days<=90?'var(--gold)':'var(--green)';
  const badge=days<0?`${Math.abs(days)} days OVERDUE`:days===0?'Expires TODAY':`${days} days remaining`;
  const body=document.getElementById('tl-sheet-body');
  if(body) body.innerHTML=`
    <div style="display:flex;align-items:center;gap:12px;margin-bottom:16px;">
      <div style="font-size:32px;">${e.icon}</div>
      <div>
        <div style="font-family:'Syne',sans-serif;font-size:17px;font-weight:800;color:var(--text)">${e.label}</div>
        <div style="font-size:12px;color:var(--text2);margin-top:3px;">${e.sub}</div>
      </div>
    </div>
    <div style="display:inline-block;padding:7px 14px;border-radius:10px;background:${col}18;color:${col};font-family:'DM Mono',monospace;font-size:12px;font-weight:700;border:1px solid ${col}33;margin-bottom:14px;">${badge}</div>
    <div style="font-size:12px;color:var(--text2);margin-bottom:14px;">Expiry date: <strong style="color:var(--text)">${fmtDate(e.date)}</strong></div>
    <div style="font-size:11px;color:var(--text2);font-family:'DM Mono',monospace;">Policy / Ref: ${e.policy||'—'}</div>
    ${days<=90?`<div style="margin-top:16px;display:flex;gap:8px;flex-wrap:wrap;">
      <div onclick="window.open('https://www.icicilombard.com','_blank')" style="flex:1;min-width:120px;padding:10px;border-radius:10px;background:var(--blue-dim);border:1px solid rgba(79,127,255,.3);color:var(--blue2);font-size:12px;font-weight:700;text-align:center;cursor:pointer;">🔄 Renew Now</div>
    </div>`:''}
  `;
  var _sy=window.scrollY||window.pageYOffset;document.body.dataset.scrollY=_sy;document.body.style.top='-'+_sy+'px';document.body.classList.add('modal-open');
  document.getElementById('tl-sheet').classList.remove('hidden');
}

function closeTlSheet() {
  document.getElementById('tl-sheet').classList.add('hidden');
  var _sy2=parseInt(document.body.dataset.scrollY||'0',10);document.body.classList.remove('modal-open');document.body.style.top='';window.scrollTo(0,_sy2);
}

// ═══════════════════════════════════════
// EXPIRY (original list)
// ═══════════════════════════════════════
function initExpiry() {
  const sorted=[...EXPIRY].sort((a,b)=>daysUntil(a.date)-daysUntil(b.date));
  const overdue=sorted.filter(e=>daysUntil(e.date)<0).length;
  const urgent=sorted.filter(e=>{const d=daysUntil(e.date);return d>=0&&d<=90;}).length;

  // Chips
  const chipsEl=document.getElementById('expiry-chips');
  if(chipsEl) chipsEl.innerHTML=[
    `<div class="exp-chip" style="border-color:rgba(255,79,79,.3);color:var(--red)">🚨 ${overdue} Overdue</div>`,
    `<div class="exp-chip" style="border-color:rgba(255,140,66,.3);color:var(--orange)">⚠️ ${urgent} Urgent</div>`,
    `<div class="exp-chip" style="border-color:rgba(62,207,142,.3);color:var(--green)">✅ ${EXPIRY.length-overdue-urgent} OK</div>`
  ].join('');

  // Doc items
  const docPane=document.getElementById('exp-docs-pane');
  if(docPane) docPane.innerHTML=sorted.map(e=>{
    const days=daysUntil(e.date);const col=expiryColor(days);
    const pct=days<0?100:Math.max(1,Math.min(100,(days/730)*100));
    return `<div class="eli pressable" style="border-left:4px solid ${col}${days<0?';background:rgba(255,79,79,.04)':''}">
      <span class="eli-icon">${e.icon}</span>
      <div class="eli-body">
        <div class="eli-title">${e.label}</div>
        <div class="eli-sub">${e.sub}</div>
        <div class="eli-progress"><div class="eli-bar" style="background:${col};width:0%" data-width="${pct}"></div></div>
      </div>
      <div class="eli-right">
        <div class="eli-days" style="color:${col}">${days<0?Math.abs(days):days}</div>
        <div class="eli-type" style="color:${col}">${days<0?'OVERDUE':'DAYS'}</div>
        <div class="eli-date">${fmtDate(e.date)}</div>
        <div class="eli-policy">📋 ${e.policy}</div>
      </div>
    </div>`;
  }).join('');
}

function animateExpBars() {
  document.querySelectorAll('.eli-bar[data-width],.att-bar-fill[data-width]').forEach(el=>el.style.width=el.dataset.width+'%');
  document.querySelectorAll('.ui-bar-fill[data-width]').forEach(el=>el.style.width=el.dataset.width+'%');
}


// ═══════════════════════════════════════
// SEARCH (dedicated tab)
// ═══════════════════════════════════════
const SEARCH_IDX = [];
function buildSearchIdx() {
  if(SEARCH_IDX.length) return;
  Object.values(MEMBERS).forEach(m=>{
    const add=(key,val,sec,tab)=>{if(val)SEARCH_IDX.push({person:m.shortName,memberId:m.id,tab,key,val:String(val),section:sec});};
    const id=m.sections.identity;
    if(id.aadhaar){add('Aadhaar Number',id.aadhaar.number,'Identity','identity');add('VID',id.aadhaar.vid,'Identity','identity');}
    if(id.pan) add('PAN Number',id.pan.number,'Identity','identity');
    if(id.dl) add('DL Number',id.dl.number,'Identity','identity');
    if(id.voter) add('Voter EPIC',id.voter.epic,'Identity','identity');
    if(id.passport) add('Passport No.',id.passport.number,'Identity','identity');
    if(id.birthCert) add('Birth DOB',id.birthCert.dob,'Identity','identity');
    add('Full Name',m.name,'Personal','identity');
    add('Date of Birth',m.dob,'Personal','identity');
    add('Mobile',m.mobile,'Personal','identity');
    if(m.sections.finance) m.sections.finance.forEach(f=>{add(f.bank+' Account',f.account,'Finance','finance');if(f.userId)add(f.bank+' User ID',f.userId,'Finance','finance');});
    if(m.sections.insurance) m.sections.insurance.forEach(i=>{if(i.policy&&!i.note)add('Policy No.',i.policy,'Insurance','insurance');});
    if(m.sections.vehicle) m.sections.vehicle.forEach(v=>{add(v.name+' Reg.',v.reg,'Vehicle','vehicle');add(v.name+' Policy',v.policy,'Vehicle','vehicle');});
    if(m.sections.property) m.sections.property.forEach(p=>{add('PTI/Assessment',p.pti||p.assessment,'Property','property');});
    if(m.sections.education) m.sections.education.forEach(e=>{add(e.level+' Roll',e.roll||e.regNo,'Education','education');});
    if(m.sections.employment){add('Company',m.sections.employment.company,'Employment','employment');add('Employee ID',m.sections.employment.empId,'Employment','employment');}
  });
}

let searchFocusIdx=-1;
function doSearch(q) {
  buildSearchIdx();
  const wrap=document.getElementById('search-results-wrap');
  if(!wrap) return;
  if(!q.trim()){wrap.innerHTML='<div class="search-empty">Start typing to search all family documents…</div>';return;}
  const terms=q.toLowerCase().split(/\s+/).filter(Boolean);
  const matches=SEARCH_IDX.filter(item=>terms.every(t=>(item.key+' '+item.val+' '+item.person).toLowerCase().includes(t)));
  if(!matches.length){wrap.innerHTML=`<div class="search-empty">No results for "${q}"</div>`;return;}
  const grouped={};
  matches.forEach(m=>{if(!grouped[m.person])grouped[m.person]=[];grouped[m.person].push(m);});
  let html='<div class="search-results">';
  Object.entries(grouped).forEach(([person,items])=>{
    html+=`<div class="search-sec-hdr">${person} — ${items.length} match${items.length>1?'es':''}</div>`;
    items.slice(0,10).forEach(item=>{
      const sv=item.val.replace(/'/g,"\\'");
      const hlVal=item.val.replace(new RegExp('('+q.replace(/[.*+?^${}()|[\]\\]/g,'\\$&')+')', 'gi'),'<mark>$1</mark>');
      html+=`<div class="sri pressable" onclick="jumpSearch('${item.memberId}','${item.tab}')">
        <div class="sri-key">${item.section} › ${item.key}</div>
        <div class="sri-val">${hlVal}<button class="sri-copy" onclick="event.stopPropagation();copyVal('${sv}',this)">⎘</button></div>
        <div class="sri-person">→ ${item.person} · Tap to view</div>
      </div>`;
    });
  });
  html+='</div>';
  wrap.innerHTML=html;
}

function jumpSearch(memberId,tab){
  goPage('members');
  setTimeout(()=>showMemberDetail(memberId,tab),80);
}

// ═══════════════════════════════════════
// KEYBOARD (desktop)
// ═══════════════════════════════════════
document.addEventListener('keydown',e=>{
  if((e.ctrlKey||e.metaKey)&&e.key==='k'){e.preventDefault();goSearch();}
});

// ═══════════════════════════════════════
// INIT ALL
// ═══════════════════════════════════════
// ═══════════════════════════════════════════════════════════
// FEATURE 01 — SMART HEALTH DASHBOARD (Phase 1)
// ═══════════════════════════════════════════════════════════

// ── Member colour/gradient map (mirrors MEMBERS object) ──
const HEALTH_MEMBER_META = {
  rajasekhar: { label:'Rajasekhar', initials:'RR', gradient:'linear-gradient(135deg,#1a3254,#3b6fd4)', color:'#4f7fff', age:48, gender:'M' },
  vasundhara: { label:'Vasundhara', initials:'VD', gradient:'linear-gradient(135deg,#5b21b6,#9333ea)', color:'#a78bfa', age:42, gender:'F' },
  josritha:   { label:'Josritha',   initials:'JD', gradient:'linear-gradient(135deg,#9d174d,#ec4899)', color:'#f472b6', age:19, gender:'F' },
  jeevan:     { label:'Jeevan',     initials:'JV', gradient:'linear-gradient(135deg,#065f46,#0d9488)', color:'#3ecf8e', age:14, gender:'M' },
};

// ── Biomarker definitions: id, name, icon, unit, ranges, category, insight ──
const BM_DEFS = [
  { id:'glucose',    name:'Blood Glucose (Fasting)', icon:'🩸', unit:'mg/dL',  cat:'Blood',    low:70,  normLow:70,  normHigh:99,  high:126,  max:200,
    insight:'Fasting glucose below 100 mg/dL is normal. Between 100–125 is pre-diabetic range — lifestyle changes can reverse this.' },
  { id:'hba1c',      name:'HbA1c',                  icon:'🔬', unit:'%',      cat:'Blood',    low:0,   normLow:4,   normHigh:5.6, high:6.5,  max:10,
    insight:'HbA1c reflects average blood sugar over 3 months. Under 5.7% is normal. 5.7–6.4% indicates pre-diabetes.' },
  { id:'cholesterol',name:'Total Cholesterol',       icon:'🫀', unit:'mg/dL',  cat:'Lipids',   low:0,   normLow:0,   normHigh:200, high:240,  max:300,
    insight:'Desirable cholesterol is below 200 mg/dL. 200–239 is borderline high. Above 240 increases cardiovascular risk significantly.' },
  { id:'ldl',        name:'LDL Cholesterol',         icon:'⚡', unit:'mg/dL',  cat:'Lipids',   low:0,   normLow:0,   normHigh:100, high:160,  max:220,
    insight:'LDL ("bad") cholesterol should be under 100 mg/dL for optimal health. High LDL increases arterial plaque risk.' },
  { id:'hdl',        name:'HDL Cholesterol',         icon:'💙', unit:'mg/dL',  cat:'Lipids',   low:40,  normLow:40,  normHigh:200, high:999,  max:100,
    insight:'HDL ("good") cholesterol — higher is better. Above 60 mg/dL is protective against heart disease. Below 40 is a risk factor.' },
  { id:'triglycerides',name:'Triglycerides',         icon:'🧪', unit:'mg/dL',  cat:'Lipids',   low:0,   normLow:0,   normHigh:150, high:200,  max:400,
    insight:'Triglycerides under 150 mg/dL is normal. High levels combined with low HDL significantly raise cardiovascular risk.' },
  { id:'hemoglobin', name:'Hemoglobin',              icon:'🩺', unit:'g/dL',   cat:'Blood',    low:12,  normLow:13,  normHigh:17,  high:999,  max:20,
    insight:'Normal hemoglobin for men is 13.5–17.5 g/dL; for women 12–15.5 g/dL. Low hemoglobin indicates anemia.' },
  { id:'tsh',        name:'Thyroid TSH',             icon:'🦋', unit:'mIU/L',  cat:'Thyroid',  low:0.4, normLow:0.4, normHigh:4.0, high:10,   max:15,
    insight:'Normal TSH is 0.4–4.0 mIU/L. High TSH suggests hypothyroidism (underactive thyroid); low TSH suggests hyperthyroidism.' },
  { id:'creatinine', name:'Creatinine (Serum)',      icon:'🫘', unit:'mg/dL',  cat:'Kidney',   low:0.6, normLow:0.6, normHigh:1.2, high:2.0,  max:4,
    insight:'Creatinine measures kidney filtration. Normal range is 0.6–1.2 mg/dL for adults. Elevated levels may indicate kidney stress.' },
  { id:'uricacid',   name:'Uric Acid',               icon:'🧫', unit:'mg/dL',  cat:'Kidney',   low:2.4, normLow:2.4, normHigh:7.0, high:8.0,  max:12,
    insight:'Normal uric acid is 2.4–7.0 mg/dL. Elevated levels can cause gout and may indicate kidney or metabolic issues.' },
  { id:'vitd',       name:'Vitamin D (25-OH)',        icon:'☀️', unit:'ng/mL',  cat:'Vitamins', low:20,  normLow:30,  normHigh:100, high:150,  max:150,
    insight:'Vitamin D above 30 ng/mL is sufficient. 20–29 is insufficient; below 20 is deficient. Common deficiency in India.' },
  { id:'vitb12',     name:'Vitamin B12',             icon:'💊', unit:'pg/mL',  cat:'Vitamins', low:200, normLow:200, normHigh:900, high:2000, max:2000,
    insight:'Normal B12 is 200–900 pg/mL. Deficiency causes fatigue, neurological issues, and anemia — very common in vegetarians.' },
  { id:'wbc',        name:'WBC Count',               icon:'🛡️', unit:'×10³/µL',cat:'CBC',      low:4,   normLow:4,   normHigh:11,  high:15,   max:20,
    insight:'White blood cell count should be 4–11 ×10³/µL. Elevated WBC may indicate infection or inflammation; low WBC reduces immunity.' },
  { id:'platelets',  name:'Platelets',               icon:'🔴', unit:'×10³/µL',cat:'CBC',      low:150, normLow:150, normHigh:400, high:500,  max:700,
    insight:'Normal platelet count is 150–400 ×10³/µL. Low platelets cause bleeding risk; high platelets increase clotting risk.' },
  { id:'bp_sys',     name:'Blood Pressure (Systolic)',icon:'❤️', unit:'mmHg',  cat:'Vitals',   low:90,  normLow:90,  normHigh:120, high:140,  max:180,
    insight:'Normal systolic BP is 90–120 mmHg. 120–139 is elevated; 140+ is hypertension stage 1. Regular monitoring is key.' },
  { id:'bilirubin',  name:'Bilirubin (Total)',         icon:'🟡', unit:'mg/dL',  cat:'Liver',    low:0,   normLow:0.3, normHigh:1.2, high:2.0,  max:5,
    insight:'Total bilirubin should be 0.3–1.2 mg/dL. Elevated levels indicate liver stress, bile duct issues, or hemolysis.' },
  { id:'alt',        name:'ALT / SGPT',                icon:'🫁', unit:'IU/L',   cat:'Liver',    low:0,   normLow:0,   normHigh:50,  high:80,   max:200,
    insight:'ALT is a liver enzyme. Normal is below 50 IU/L. Elevated ALT is a key indicator of liver inflammation or damage.' },
  { id:'ast',        name:'AST / SGOT',                icon:'🫁', unit:'IU/L',   cat:'Liver',    low:0,   normLow:0,   normHigh:50,  high:80,   max:200,
    insight:'AST is elevated in liver disease, muscle damage, or heart issues. Normal range is below 50 IU/L.' },
  { id:'alp',        name:'Alkaline Phosphatase (ALP)',icon:'🧬', unit:'IU/L',   cat:'Liver',    low:30,  normLow:30,  normHigh:120, high:200,  max:300,
    insight:'ALP is 30–120 IU/L normally. Elevated ALP can indicate liver or bone disease. It rises in bile duct obstruction.' },
  { id:'ggt',        name:'GGT',                       icon:'🧬', unit:'U/L',    cat:'Liver',    low:0,   normLow:0,   normHigh:55,  high:100,  max:200,
    insight:'GGT above 55 U/L may indicate liver disease, alcohol use, or bile duct problems. A sensitive marker for liver stress.' },
];

// ── Seed health data per member ──
const HEALTH_SEED = {
  rajasekhar: { lastUpdated:null, labName:null, reportRef:null, vitals:{weight:null,height:null,bmi:null}, markers:{} },
  vasundhara:  { lastUpdated:null, labName:null, reportRef:null, vitals:{weight:null,height:null,bmi:null}, markers:{} },
  josritha:    { lastUpdated:null, labName:null, reportRef:null, vitals:{weight:null,height:null,bmi:null}, markers:{} },
  jeevan:      { lastUpdated:null, labName:null, reportRef:null, vitals:{weight:null,height:null,bmi:null}, markers:{} }
};

const HEALTH_CATS = ['All','Blood','Lipids','Thyroid','Kidney','Liver','Vitamins','CBC','Vitals'];
let healthActiveMember = 'rajasekhar';
let healthActiveCat    = 'All';

// ── Load / save health data from localStorage ──
function getHealthData() {
  try {
    const s = localStorage.getItem('fp_health_v3');
    if (s) return JSON.parse(s);
  } catch(e) {}
  const d = JSON.parse(JSON.stringify(HEALTH_SEED));
  localStorage.setItem('fp_health_v3', JSON.stringify(d));
  return d;
}
function saveHealthData(data) {
  localStorage.setItem('fp_health_v3', JSON.stringify(data));
  setTimeout(function() { auraRenderHealth(); auraRenderAlerts(); }, 50);
}

// ── Compute health score (0–100) for a member ──
function computeHealthScore(memberId) {
  const data = getHealthData()[memberId];
  if (!data) return 50;
  const meta = HEALTH_MEMBER_META[memberId];
  let score = 100, issues = 0;
  BM_DEFS.forEach(def => {
    const val = data.markers[def.id];
    if (val === undefined || val === null) return;
    const st = getBmStatus(def, val, meta.gender);
    if (st === 'high' || st === 'low') { score -= 8; issues++; }
    else if (st === 'borderline')      { score -= 4; }
  });
  return Math.max(10, Math.min(100, Math.round(score)));
}

// ── Determine biomarker status ──
function getBmStatus(def, val, gender) {
  // Special HDL logic (higher is better, lower is bad)
  if (def.id === 'hdl') {
    const threshold = gender === 'F' ? 50 : 40;
    if (val < threshold) return 'low';
    return 'normal';
  }
  if (val < def.low)      return 'low';
  if (val < def.normLow)  return 'borderline';
  if (val <= def.normHigh) return 'normal';
  if (val <= def.high)    return 'borderline';
  return 'high';
}

// ── Status colour ──
function statusColor(st) {
  return { normal:getComputedStyle(document.documentElement).getPropertyValue('--green').trim()||'#3ecf8e',
           high:  getComputedStyle(document.documentElement).getPropertyValue('--red').trim()||'#ff4f4f',
           low:   getComputedStyle(document.documentElement).getPropertyValue('--orange').trim()||'#ff8c42',
           borderline:getComputedStyle(document.documentElement).getPropertyValue('--gold').trim()||'#f0b429' }[st]||'#8b93a8';
}
function scoreColor(score) {
  if (score >= 80) return '#3ecf8e';
  if (score >= 60) return '#f0b429';
  return '#ff4f4f';
}
function scoreLabel(score) {
  if (score >= 85) return 'Excellent';
  if (score >= 70) return 'Good';
  if (score >= 55) return 'Fair';
  return 'Needs Attention';
}

// ── Bar fill % for a marker within its scale ──
function bmBarPct(def, val) {
  return Math.max(2, Math.min(100, Math.round((val / def.max) * 100)));
}

// ── Init Health Page ──
// ═══════════════════════════════════════════════════════════
// FEATURE 01 — PHASE 2: Lab Reports, Appointments, History
// ═══════════════════════════════════════════════════════════

// ── State ──
let hrActiveMember  = 'rajasekhar'; // selected member in add-report sheet
let haActiveMember  = 'rajasekhar'; // selected member in add-appt sheet

// ── Appointments storage ──
function getAppts() {
  try { const s=localStorage.getItem('fp_health_appts_v3'); if(s) return JSON.parse(s); } catch(e){}
  return SEED_APPTS();
}
function saveAppts(arr) { localStorage.setItem('fp_health_appts_v3',JSON.stringify(arr)); }

function SEED_APPTS() {
  const appts = [
    { id:'a1', member:'rajasekhar', title:'Cardiology Consultation',   date:'2026-03-20', time:'10:00', loc:'Dr. Reddy, Yashoda Hospitals', notes:'Bring ECG + last lipid report' },
    { id:'a2', member:'vasundhara', title:'Thyroid Follow-up',         date:'2026-04-05', time:'09:30', loc:'Dr. Priya, KIMS Hospital',      notes:'Fasting required · 6 hrs' },
    { id:'a3', member:'josritha',   title:'Annual Health Check-up',    date:'2026-05-12', time:'08:00', loc:'Apollo Diagnostics, Hyderabad', notes:'Full body check package' },
  ];
  localStorage.setItem('fp_health_appts_v3', JSON.stringify(appts));
  return appts;
}

// ── Report history storage ──
function getReportHistory() {
  try { const s=localStorage.getItem('fp_health_reports_v3'); if(s) return JSON.parse(s); } catch(e){}
  return [];
}
function saveReportHistory(arr) { localStorage.setItem('fp_health_reports_v3',JSON.stringify(arr)); }

// ── Extend initHealthPage to also render Phase 2 sections ──
const _origInitHealthPage = initHealthPage;
initHealthPage = function() {
  _origInitHealthPage();
  renderHealthAppts();
  renderReportHistory();
};

// ── Render appointments for active member ──
function renderHealthAppts() {
  const wrap = document.getElementById('health-appt-list');
  if (!wrap) return;
  const today = new Date(); today.setHours(0,0,0,0);
  const appts = getAppts()
    .filter(a => a.member === healthActiveMember)
    .filter(a => new Date(a.date + 'T12:00:00') >= today)
    .sort((a,b) => a.date.localeCompare(b.date));

  if (!appts.length) {
    wrap.innerHTML = `<div style="text-align:center;padding:16px;background:var(--surface);border:1px solid var(--border);border-radius:14px;font-family:'DM Mono',monospace;font-size:11px;color:var(--text3);">No upcoming appointments<br><span style="font-size:10px;opacity:.6">Tap + Add to schedule one</span></div>`;
    return;
  }
  wrap.innerHTML = appts.map(a => {
    const d = new Date(a.date + 'T12:00:00');
    const daysAway = Math.ceil((d - today) / 86400000);
    const dd = String(d.getDate()).padStart(2,'0');
    const mm = d.toLocaleString('en-IN',{month:'short'}).toUpperCase();
    const col = daysAway <= 7 ? 'var(--red)' : daysAway <= 30 ? 'var(--gold)' : 'var(--green)';
    return `<div class="appt-card">
      <div class="appt-datebox">
        <div class="appt-dd">${dd}</div>
        <div class="appt-mm">${mm}</div>
      </div>
      <div class="appt-body">
        <div class="appt-title">${a.title}</div>
        <div class="appt-who">${a.time ? '🕐 '+a.time+' · ' : ''}${a.loc}</div>
        ${a.notes ? `<div class="appt-loc">${a.notes}</div>` : ''}
      </div>
      <div class="appt-right">
        <div class="appt-days" style="color:${col}">${daysAway}</div>
        <div class="appt-dlbl">days</div>
      </div>
      <button class="appt-del" onclick="deleteAppt('${a.id}')">−</button>
    </div>`;
  }).join('');
}

function deleteAppt(id) {
  const arr = getAppts().filter(a => a.id !== id);
  saveAppts(arr);
  renderHealthAppts();
  showToast('Appointment removed');
}

// ── Render report history ──
function renderReportHistory() {
  const wrap  = document.getElementById('rpt-history-list');
  const countEl = document.getElementById('rpt-history-count');
  if (!wrap) return;
  const history = getReportHistory()
    .filter(r => r.member === healthActiveMember)
    .sort((a,b) => b.date.localeCompare(a.date));

  if (countEl) countEl.textContent = history.length + (history.length===1?' report':' reports');

  if (!history.length) {
    wrap.innerHTML = `<div style="text-align:center;padding:16px;background:var(--surface);border:1px solid var(--border);border-radius:14px;font-family:'DM Mono',monospace;font-size:11px;color:var(--text3);">No saved reports yet<br><span style="font-size:10px;opacity:.6">Tap 📋 Add Lab Report to enter values</span></div>`;
    return;
  }
  const m = HEALTH_MEMBER_META[healthActiveMember];
  wrap.innerHTML = history.map(r => {
    // Count flags in this report
    let abnormal=0, borderline=0;
    BM_DEFS.forEach(def => {
      const val = r.markers[def.id];
      if (val == null) return;
      const st = getBmStatus(def, val, m.gender);
      if (st==='high'||st==='low') abnormal++;
      else if (st==='borderline') borderline++;
    });
    const flags = [];
    if (abnormal)   flags.push(`<span class="rpt-entry-flag" style="background:var(--red-dim);color:var(--red)">${abnormal} Abnormal</span>`);
    if (borderline) flags.push(`<span class="rpt-entry-flag" style="background:var(--gold-dim);color:var(--gold)">${borderline} Borderline</span>`);
    if (!abnormal && !borderline) flags.push(`<span class="rpt-entry-flag" style="background:var(--green-dim);color:var(--green)">All Normal ✓</span>`);
    return `<div class="rpt-entry" onclick="loadReportIntoView('${r.id}')">
      <div class="rpt-entry-top">
        <div class="rpt-entry-lab">${r.labName}</div>
        <div class="rpt-entry-date">${fmtHealthDate(r.date)}</div>
      </div>
      <div class="rpt-entry-flags">${flags.join('')}</div>
    </div>`;
  }).join('');
}

// Tap a history entry → load those values as the active view
function loadReportIntoView(reportId) {
  const history = getReportHistory();
  const r = history.find(x => x.id === reportId);
  if (!r) return;
  // Only update the member who owns this report
  const owner = r.member;
  if (owner !== healthActiveMember) return; // safety: should not happen
  const data = getHealthData();
  // Show exactly what was in this report — do NOT merge with existing markers
  data[owner] = {
    lastUpdated: r.date,
    labName:     r.labName,
    reportRef:   r.ref || '',
    vitals:      r.vitals && (r.vitals.weight || r.vitals.height) ? r.vitals : data[owner].vitals,
    markers:     { ...r.markers }   // only this report's markers, no bleed-over
  };
  saveHealthData(data);
  renderHealthHero();
  renderHealthReportStrip();
  renderBiomarkers();
  showToast('📋 Viewing report from ' + fmtHealthDate(r.date));
}

// ── Add Report sheet ──
function openAddReportSheet() {
  hrActiveMember = healthActiveMember;
  renderHrMemberSelect();
  // Pre-fill date with today
  document.getElementById('hr-date').value = new Date().toISOString().slice(0,10);
  document.getElementById('hr-lab').value = '';
  document.getElementById('hr-ref').value = '';
  // Clear all marker inputs
  ['weight','height'].forEach(f => { const el=document.getElementById('hrv-'+f); if(el) el.value=''; });
  BM_DEFS.forEach(def => { const el=document.getElementById('hrm-'+def.id); if(el) el.value=''; });
  var _sy=window.scrollY||window.pageYOffset;document.body.dataset.scrollY=_sy;document.body.style.top='-'+_sy+'px';document.body.classList.add('modal-open');
  document.getElementById('hr-sheet').classList.remove('hidden');
}
function closeAddReportSheet() {
  document.getElementById('hr-sheet').classList.add('hidden');
  var _sy2=parseInt(document.body.dataset.scrollY||'0',10);document.body.classList.remove('modal-open');document.body.style.top='';window.scrollTo(0,_sy2);
}

function renderHrMemberSelect() {
  const wrap = document.getElementById('hr-member-select');
  if (!wrap) return;
  wrap.innerHTML = Object.entries(HEALTH_MEMBER_META).map(([id,m]) =>
    `<button class="hr-ms-btn${id===hrActiveMember?' active':''}"
       style="${id===hrActiveMember?'background:'+m.gradient+';border-color:transparent':''}"
       onclick="hrSelectMember('${id}')">${m.label}</button>`
  ).join('');
}
function hrSelectMember(id) {
  hrActiveMember = id;
  renderHrMemberSelect();
}

function saveLabReport() {
  const date   = document.getElementById('hr-date').value;
  const labName= document.getElementById('hr-lab').value.trim() || 'Lab Report';
  const ref    = document.getElementById('hr-ref').value.trim();
  const weight = parseFloat(document.getElementById('hrv-weight').value)||null;
  const height = parseFloat(document.getElementById('hrv-height').value)||null;

  // Collect all marker values — only save non-empty ones
  const markers = {};
  BM_DEFS.forEach(def => {
    const el = document.getElementById('hrm-'+def.id);
    if (el && el.value !== '') {
      const v = parseFloat(el.value);
      if (!isNaN(v)) markers[def.id] = v;
    }
  });

  if (!date) { showToast('⚠️ Please enter a date'); return; }
  if (!Object.keys(markers).length) { showToast('⚠️ Enter at least one marker value'); return; }

  // Save to report history
  const history = getReportHistory();
  const newReport = {
    id:      'r' + Date.now(),
    member:  hrActiveMember,
    date,
    labName,
    ref,
    vitals:  { weight, height, bmi: (weight&&height) ? parseFloat((weight/(height/100)**2).toFixed(1)) : null },
    markers
  };
  history.unshift(newReport);
  saveReportHistory(history);

  // Update the active health data for this member
  const data = getHealthData();
  data[hrActiveMember] = {
    lastUpdated: date,
    labName,
    reportRef:   ref,
    vitals: {
      weight: weight || data[hrActiveMember].vitals.weight,
      height: height || data[hrActiveMember].vitals.height,
      bmi:    newReport.vitals.bmi || data[hrActiveMember].vitals.bmi
    },
    markers: { ...markers }   // this report only — no merge with prior data
  };
  saveHealthData(data);

  closeAddReportSheet();
  // Refresh the active member view if it matches
  if (hrActiveMember === healthActiveMember) {
    renderHealthHero();
    renderHealthReportStrip();
    renderBiomarkers();
    renderReportHistory();
  }
  showToast('✓ Lab report saved for ' + HEALTH_MEMBER_META[hrActiveMember].label);
  updateHealthBadge();
  // Refresh dashboard hero so status line reflects new health data immediately
  setTimeout(() => initWidgetDynamic(), 50);
}

// ── Add Appointment sheet ──
function openAddApptSheet() {
  haActiveMember = healthActiveMember;
  renderHaMemberSelect();
  document.getElementById('ha-title').value = '';
  document.getElementById('ha-date').value  = '';
  document.getElementById('ha-time').value  = '';
  document.getElementById('ha-loc').value   = '';
  document.getElementById('ha-notes').value = '';
  var _sy=window.scrollY||window.pageYOffset;document.body.dataset.scrollY=_sy;document.body.style.top='-'+_sy+'px';document.body.classList.add('modal-open');
  document.getElementById('ha-sheet').classList.remove('hidden');
}
function closeAddApptSheet() {
  document.getElementById('ha-sheet').classList.add('hidden');
  var _sy2=parseInt(document.body.dataset.scrollY||'0',10);document.body.classList.remove('modal-open');document.body.style.top='';window.scrollTo(0,_sy2);
}
function renderHaMemberSelect() {
  const wrap = document.getElementById('ha-member-select');
  if (!wrap) return;
  wrap.innerHTML = Object.entries(HEALTH_MEMBER_META).map(([id,m]) =>
    `<button class="hr-ms-btn${id===haActiveMember?' active':''}"
       style="${id===haActiveMember?'background:'+m.gradient+';border-color:transparent':''}"
       onclick="haSelectMember('${id}')">${m.label}</button>`
  ).join('');
}
function haSelectMember(id) {
  haActiveMember = id;
  renderHaMemberSelect();
}
function saveAppt() {
  const title = document.getElementById('ha-title').value.trim();
  const date  = document.getElementById('ha-date').value;
  const time  = document.getElementById('ha-time').value;
  const loc   = document.getElementById('ha-loc').value.trim();
  const notes = document.getElementById('ha-notes').value.trim();
  if (!title) { showToast('⚠️ Enter appointment title'); return; }
  if (!date)  { showToast('⚠️ Pick a date'); return; }
  const appts = getAppts();
  appts.push({ id:'a'+Date.now(), member:haActiveMember, title, date, time, loc, notes });
  saveAppts(appts);
  closeAddApptSheet();
  if (haActiveMember === healthActiveMember) renderHealthAppts();
  showToast('✓ Appointment saved for ' + HEALTH_MEMBER_META[haActiveMember].label);
}

// ═══════════════════════════════════════════════════════════
// FEATURE 01 — PHASE 3: PDF.js Text Extraction + OCR.space Fallback
// Digital PDFs → PDF.js (unlimited pages, 100% accurate, offline)
// Photos / scanned PDFs → OCR.space (free, no key needed)
// ═══════════════════════════════════════════════════════════

// ── OCR.space fallback config ──
const OCR_SPACE_URL = 'https://api.ocr.space/parse/image';
function getOcrKey() { return localStorage.getItem('fp_ocr_key') || 'helloworld'; }

// ── Regex patterns for Indian lab report biomarker extraction ──
const OCR_PATTERNS = [
  { id:'glucose',       patterns:[/(?:glucose|blood\s*sugar|fasting\s*glucose|fbs)[^\d]*(\d+\.?\d*)/i] },
  { id:'hba1c',         patterns:[/(?:hba1c|glycated|a1c|hb\s*a1c)[^\d]*(\d+\.?\d*)/i] },
  { id:'cholesterol',   patterns:[/(?:total\s*cholesterol|cholesterol\s*total)[^\d]*(\d+\.?\d*)/i, /(?:^|\n)cholesterol[^\d]*(\d{2,3}\.?\d*)/im] },
  { id:'ldl',           patterns:[/(?:ldl|low\s*density)[^\d]*(\d+\.?\d*)/i] },
  { id:'hdl',           patterns:[/(?:hdl|high\s*density)[^\d]*(\d+\.?\d*)/i] },
  { id:'triglycerides', patterns:[/(?:triglycerides?|tgl\b|tg\b)[^\d]*(\d+\.?\d*)/i] },
  { id:'hemoglobin',    patterns:[/(?:haemoglobin|hemoglobin|hgb|\bhb\b)[^\d]*(\d+\.?\d*)/i] },
  { id:'tsh',           patterns:[/(?:\btsh\b|thyroid\s*stimulating)[^\d]*(\d+\.?\d*)/i] },
  { id:'creatinine',    patterns:[/(?:creatinine|s\.?\s*creatinine)[^\d]*(\d+\.?\d*)/i] },
  { id:'uricacid',      patterns:[/(?:uric\s*acid)[^\d]*(\d+\.?\d*)/i] },
  { id:'vitd',          patterns:[/(?:vitamin\s*d|25[\s-]*oh|calcidiol)[^\d]*(\d+\.?\d*)/i] },
  { id:'vitb12',        patterns:[/(?:vitamin\s*b[\s-]?12|\bb12\b|cobalamin)[^\d]*(\d+\.?\d*)/i] },
  { id:'wbc',           patterns:[/(?:wbc|total\s*leucocyte|tlc|white\s*blood)[^\d]*([\d.]+)/i] },
  { id:'platelets',     patterns:[/(?:platelet|\bplt\b)[^\d]*([\d.]+)/i] },
  { id:'bp_sys',        patterns:[/(?:systolic)[^\d]*(\d{2,3})/i, /\bbp\b[^\d]*(\d{2,3})\s*\//i] },
  { id:'weight',        meta:true, patterns:[/(?:weight|wt)[^\d]*(\d+\.?\d*)\s*kg/i] },
  { id:'height',        meta:true, patterns:[/(?:height|ht)[^\d]*(\d+\.?\d*)\s*cm/i] },
  { id:'lab_name', text:true, patterns:[
    /(apollo[\w\s]+(?:diagnostics?|hospital)?)/i,
    /(star[\w\s]+hospital?)/i,
    /(vijaya[\w\s]+diagnostic?)/i,
    /(thyrocare[\w\s]*)/i,
    /(srl[\w\s]+)/i,
    /(metropolis[\w\s]+)/i,
    /(kims[\w\s]+)/i,
    /(yashoda[\w\s]+)/i,
  ]},
  { id:'report_date', date:true, patterns:[
    /(?:date|collected|reported)[^\d]*(\d{1,2}[\/\-]\d{1,2}[\/\-]\d{2,4})/i,
    /(\d{2}[\/\-]\d{2}[\/\-]\d{4})/,
    /(\d{4}-\d{2}-\d{2})/,
    /(\d{1,2}\s+(?:jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)\w*\s+\d{4})/i,
  ]},
  { id:'report_ref', text:true, patterns:[
    /(?:report\s*(?:no|num|id)|accession\s*no|lab\s*no)[^\w]*([\w\-\/]{3,20})/i,
  ]},
  { id:'bilirubin', patterns:[/(?:bilirubin\s*total|total\s*bilirubin)[^\d]*(\d+\.?\d*)/i, /(?:^|\n)bilirubin[^\d]*(\d+\.?\d*)/im] },
  { id:'alt', patterns:[/(?:alt|sgpt|alanine\s*amino)[^\d]*(\d+\.?\d*)/i] },
  { id:'ast', patterns:[/(?:ast|sgot|aspartate\s*amino)[^\d]*(\d+\.?\d*)/i] },
  { id:'alp', patterns:[/(?:alkaline\s*phosphatase|\balp\b)[^\d]*(\d+\.?\d*)/i] },
  { id:'ggt', patterns:[/(?:gamma\s*glutamyl|\bggt\b)[^\d]*(\d+\.?\d*)/i] },
];

const OCR_INPUT_MAP = {
  glucose:'hrm-glucose', hba1c:'hrm-hba1c', cholesterol:'hrm-cholesterol',
  ldl:'hrm-ldl', hdl:'hrm-hdl', triglycerides:'hrm-triglycerides',
  hemoglobin:'hrm-hemoglobin', tsh:'hrm-tsh', creatinine:'hrm-creatinine',
  uricacid:'hrm-uricacid', vitd:'hrm-vitd', vitb12:'hrm-vitb12',
  wbc:'hrm-wbc', platelets:'hrm-platelets', bp_sys:'hrm-bp_sys',
  bilirubin:'hrm-bilirubin', alt:'hrm-alt', ast:'hrm-ast', alp:'hrm-alp', ggt:'hrm-ggt',
  weight:'hrv-weight', height:'hrv-height',
  lab_name:'hr-lab', report_date:'hr-date', report_ref:'hr-ref',
};

const SANITY = {
  glucose:[40,500], hba1c:[3,15], cholesterol:[50,500],
  ldl:[10,400], hdl:[10,150], triglycerides:[20,1000],
  hemoglobin:[4,22], tsh:[0.01,100], creatinine:[0.2,20],
  uricacid:[1,20], vitd:[1,200], vitb12:[50,3000],
  wbc:[0.5,50], platelets:[20,1000], bp_sys:[60,250],
  bilirubin:[0.1,20], alt:[5,500], ast:[5,500], alp:[10,500], ggt:[5,500],
  weight:[20,200], height:[50,220],
};

function normaliseCount(id, val) {
  if (id === 'wbc'       && val > 100)  return parseFloat((val / 1000).toFixed(2));
  if (id === 'platelets' && val > 1000) return parseFloat((val / 1000).toFixed(0));
  return val;
}

function parseOcrDate(str) {
  if (!str) return '';
  if (/^\d{4}-\d{2}-\d{2}$/.test(str)) return str;
  const m1 = str.match(/^(\d{1,2})[\/\-](\d{1,2})[\/\-](\d{2,4})$/);
  if (m1) {
    const y = m1[3].length === 2 ? '20' + m1[3] : m1[3];
    return y + '-' + m1[2].padStart(2,'0') + '-' + m1[1].padStart(2,'0');
  }
  const months = {jan:'01',feb:'02',mar:'03',apr:'04',may:'05',jun:'06',
                  jul:'07',aug:'08',sep:'09',oct:'10',nov:'11',dec:'12'};
  const m2 = str.match(/(\d{1,2})\s+(\w+)\s+(\d{4})/i);
  if (m2) {
    const mo = months[m2[2].toLowerCase().slice(0,3)];
    if (mo) return m2[3] + '-' + mo + '-' + m2[1].padStart(2,'0');
  }
  return '';
}

function extractFromText(rawText) {
  let filled = 0;
  const result = {};
  OCR_PATTERNS.forEach(p => {
    for (const rx of p.patterns) {
      const m = rawText.match(rx);
      if (!m || !m[1]) continue;
      const val = m[1].trim();
      if (p.date) {
        const d = parseOcrDate(val);
        if (d) { result[p.id] = d; filled++; }
      } else if (p.text) {
        result[p.id] = val.slice(0, 60); filled++;
      } else {
        let num = parseFloat(val);
        if (isNaN(num)) continue;
        num = normaliseCount(p.id, num);
        const s = SANITY[p.id];
        if (s && (num < s[0] || num > s[1])) continue;
        result[p.id] = num; filled++;
      }
      break;
    }
  });
  return { result, filled };
}

// ════════════════════════════════════════════════════════
// PATH A: PDF.js — reads text directly from digital PDFs
// Unlimited pages · Offline · Zero API · 100% accurate
// ════════════════════════════════════════════════════════
// Load PDF.js legacy UMD build (classic <script>, not ES module)
// v2.16.105 is the last stable version that exposes window.pdfjsLib reliably
const PDFJS_SRC    = 'https://cdn.jsdelivr.net/npm/pdfjs-dist@2.16.105/build/pdf.min.js';
const PDFJS_WORKER = 'https://cdn.jsdelivr.net/npm/pdfjs-dist@2.16.105/build/pdf.worker.min.js';

function loadScript(src) {
  return new Promise((resolve, reject) => {
    if (document.querySelector('script[src="' + src + '"]')) { resolve(); return; }
    const s = document.createElement('script');
    s.src = src;
    s.onload = resolve;
    s.onerror = () => reject(new Error('Failed to load: ' + src));
    document.head.appendChild(s);
  });
}

async function ensurePdfJs() {
  if (window.pdfjsLib) return window.pdfjsLib;
  setScanProgressText('Loading PDF reader…');
  await loadScript(PDFJS_SRC);
  if (!window.pdfjsLib) throw new Error('PDF.js did not load. Try refreshing the page.');
  window.pdfjsLib.GlobalWorkerOptions.workerSrc = PDFJS_WORKER;
  return window.pdfjsLib;
}

async function extractPdfText(arrayBuffer) {
  const pdfjs = await ensurePdfJs();
  setScanProgressText('Reading PDF…');

  const pdf = await pdfjs.getDocument({ data: new Uint8Array(arrayBuffer) }).promise;
  const totalPages = pdf.numPages;
  let allText = '';

  for (let i = 1; i <= totalPages; i++) {
    setScanProgressText('Reading page ' + i + ' of ' + totalPages + '…');
    const page = await pdf.getPage(i);
    const content = await page.getTextContent();
    let lastY = null;
    content.items.forEach(item => {
      if (lastY !== null && Math.abs(item.transform[5] - lastY) > 5) allText += '\n';
      allText += item.str + ' ';
      lastY = item.transform[5];
    });
    allText += '\n';
  }
  return allText.trim();
}

// ════════════════════════════════════════════════════════
// PATH B: OCR.space — for photos and scanned PDFs
// Free · No key needed · Server-side OCR
// ════════════════════════════════════════════════════════
async function extractViaOcr(dataUrl, fileName) {
  setScanProgressText('Uploading to OCR engine…');
  const formData = new FormData();
  formData.append('apikey', getOcrKey());
  formData.append('language', 'eng');
  formData.append('isOverlayRequired', 'false');
  formData.append('detectOrientation', 'true');
  formData.append('scale', 'true');
  formData.append('OCREngine', '2');
  formData.append('isTable', 'true');

  // Convert dataURL to blob
  const arr = dataUrl.split(',');
  const mime = arr[0].match(/:(.*?);/)[1];
  const bstr = atob(arr[1]);
  const u8 = new Uint8Array(bstr.length);
  for (let i = 0; i < bstr.length; i++) u8[i] = bstr.charCodeAt(i);
  formData.append('file', new Blob([u8], { type: mime }), fileName || 'report.jpg');

  setScanProgressText('Reading report…');
  const res = await fetch(OCR_SPACE_URL, { method: 'POST', body: formData });
  if (!res.ok) throw new Error('OCR service error ' + res.status);

  const data = await res.json();
  if (data.IsErroredOnProcessing) {
    const msg = (data.ErrorMessage || [])[0] || 'OCR failed';
    if (msg.includes('File size')) throw new Error('File too large for OCR (max 5MB). Try compressing the image.');
    throw new Error(msg);
  }
  return (data.ParsedResults || []).map(r => r.ParsedText).join(' ');
}

// ════════════════════════════════════════════════════════
// MAIN ENTRY — smartly chooses Path A or B
// ════════════════════════════════════════════════════════
function handleReportFile(file) {
  if (!file) return;
  if (file.size > 50 * 1024 * 1024) {
    setScanState('error', 'File too large. Please use a file under 50MB.');
    return;
  }
  setScanState('scanning');

  const isPdf = file.type === 'application/pdf' || file.name.toLowerCase().endsWith('.pdf');

  if (isPdf) {
    // Path A — PDF.js text extraction (unlimited pages)
    setScanProgressText('Reading PDF…');
    const reader = new FileReader();
    reader.onload = async e => {
      try {
        const text = await extractPdfText(e.target.result);
        if (!text || text.length < 30) {
          // PDF has no text layer (scanned) — fall back to OCR
          setScanProgressText('No text layer found — trying OCR…');
          const dataUrl = await arrayBufferToDataUrl(e.target.result, file.type);
          const ocrText = await extractViaOcr(dataUrl, file.name);
          processExtractedText(ocrText);
        } else {
          processExtractedText(text);
        }
      } catch(err) {
        setScanState('error', err.message || 'Could not read PDF.');
      }
    };
    reader.onerror = () => setScanState('error', 'Could not read file.');
    reader.readAsArrayBuffer(file);
  } else {
    // Path B — image → OCR.space
    if (file.size > 5 * 1024 * 1024) {
      setScanState('error', 'Image too large for OCR (max 5MB). Try a lower resolution photo.');
      return;
    }
    const reader = new FileReader();
    reader.onload = async e => {
      try {
        const text = await extractViaOcr(e.target.result, file.name);
        processExtractedText(text);
      } catch(err) {
        setScanState('error', err.message || 'OCR failed. Try a clearer photo.');
      }
    };
    reader.onerror = () => setScanState('error', 'Could not read file.');
    reader.readAsDataURL(file);
  }
}

function arrayBufferToDataUrl(buffer, mimeType) {
  const bytes = new Uint8Array(buffer);
  let binary = '';
  bytes.forEach(b => binary += String.fromCharCode(b));
  return 'data:' + mimeType + ';base64,' + btoa(binary);
}

function processExtractedText(rawText) {
  if (!rawText || rawText.trim().length < 20) {
    setScanState('error', 'No readable text found. Try a clearer image with good lighting.');
    return;
  }
  setScanProgressText('Extracting biomarker values…');
  const { result, filled } = extractFromText(rawText);
  if (filled === 0) {
    setScanState('error', 'Text read successfully but no biomarker values matched. You can enter values manually below.');
    return;
  }
  fillFormFromExtracted(result);
  setScanState('success', filled);
}

function handleReportDrop(e) {
  e.preventDefault();
  document.getElementById('scan-zone').classList.remove('drag-over');
  const file = e.dataTransfer.files[0];
  if (file) handleReportFile(file);
}

// ── Fill form fields ──
function fillFormFromExtracted(extracted) {
  Object.entries(extracted).forEach(([key, val]) => {
    const inputId = OCR_INPUT_MAP[key];
    if (!inputId) return;
    const el = document.getElementById(inputId);
    if (!el) return;
    el.value = val;
    el.style.borderColor = 'rgba(62,207,142,.7)';
    el.style.background  = 'rgba(62,207,142,.07)';
    setTimeout(() => { el.style.borderColor = ''; el.style.background = ''; }, 3000);
  });
}

// ── Scan UI state ──
function setScanState(state, payload) {
  const progress = document.getElementById('scan-progress');
  const errEl    = document.getElementById('scan-err');
  const banner   = document.getElementById('scan-result-banner');
  const zone     = document.getElementById('scan-zone');
  if (!progress) return;
  progress.classList.remove('active');
  errEl.classList.remove('active');
  banner.classList.remove('active');
  if (state === 'scanning') {
    progress.classList.add('active');
    zone.style.opacity = '.5';
    zone.style.pointerEvents = 'none';
  } else if (state === 'success') {
    zone.style.opacity = '';
    zone.style.pointerEvents = '';
    banner.classList.add('active');
    const n = payload;
    document.getElementById('scan-result-text').textContent =
      n + ' value' + (n === 1 ? '' : 's') + ' extracted — review below';
    const fi = document.getElementById('scan-file-input');
    if (fi) fi.value = '';
    setTimeout(() => {
      const el = document.getElementById('hr-lab');
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }, 400);
  } else if (state === 'error') {
    zone.style.opacity = '';
    zone.style.pointerEvents = '';
    errEl.classList.add('active');
    errEl.textContent = '⚠️ ' + (payload || 'Could not read report.');
  }
}
function setScanProgressText(txt) {
  const el = document.getElementById('scan-progress-text');
  if (el) el.textContent = txt;
}
function showScanError(msg) { setScanState('error', msg); }

// ── Reset scan UI when sheet opens ──
const _origOpenAddReportSheet = openAddReportSheet;
openAddReportSheet = function() {
  _origOpenAddReportSheet();
  ['scan-progress','scan-err','scan-result-banner'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.classList.remove('active');
  });
  const zone = document.getElementById('scan-zone');
  if (zone) { zone.style.opacity = ''; zone.style.pointerEvents = ''; }
  const fi = document.getElementById('scan-file-input');
  if (fi) fi.value = '';
};

function initHealthPage() {
  // Respect global member context
  if (activePortalMember !== 'all') {
    healthActiveMember = activePortalMember;
  }
  renderHealthMemberTabs();
  // Hide member tabs when filtered to single member
  const tabsEl = document.getElementById('health-member-tabs');
  if (tabsEl) tabsEl.style.display = (activePortalMember === 'all') ? '' : 'none';
  renderHealthHero();
  renderHealthReportStrip();
  renderHealthCatTabs();
  renderBiomarkers();
}

function renderHealthPage() {
  // Delegate to full initHealthPage (which includes Phase 2 wrapper for appts + history)
  initHealthPage();
}

function renderHealthMemberTabs() {
  const wrap = document.getElementById('health-member-tabs');
  if (!wrap) return;
  wrap.innerHTML = Object.entries(HEALTH_MEMBER_META).map(([id, m]) => `
    <div class="hmt-tab pressable${id===healthActiveMember?' active':''}"
         style="${id===healthActiveMember?'background:'+m.gradient+';border-color:transparent':''}"
         onclick="switchHealthMember('${id}')">
      <div class="hmt-av" style="background:${m.color}">${m.initials}</div>
      <span class="hmt-name">${m.label}</span>
    </div>`).join('');
}

function renderHealthHero() {
  const wrap = document.getElementById('health-hero-wrap');
  if (!wrap) return;
  const m    = HEALTH_MEMBER_META[healthActiveMember];
  const data = getHealthData()[healthActiveMember];
  const score = computeHealthScore(healthActiveMember);
  const col   = scoreColor(score);
  const r = 36, circ = 2 * Math.PI * r;
  const offset = circ - (score / 100) * circ;

  // Count issues
  let abnormal = 0, borderline = 0;
  BM_DEFS.forEach(def => {
    const val = data.markers[def.id];
    if (val == null) return;
    const st = getBmStatus(def, val, m.gender);
    if (st === 'high' || st === 'low') abnormal++;
    else if (st === 'borderline') borderline++;
  });

  wrap.innerHTML = `
  <div class="health-hero" style="background:linear-gradient(145deg,#08101e 0%,#0c1830 60%,#080f1a 100%);">
    <div class="health-hero-top">
      <div>
        <div class="health-hero-name">${m.label}</div>
        <div class="health-hero-role">Age ${m.age} · ${m.gender==='M'?'Male':'Female'}</div>
        <div class="health-hero-updated">Last report: ${fmtHealthDate(data.lastUpdated)}</div>
      </div>
      <div class="health-score-ring">
        <svg class="hsr-svg" width="84" height="84" viewBox="0 0 84 84">
          <circle class="hsr-track" cx="42" cy="42" r="${r}" stroke-width="7"/>
          <circle class="hsr-fill" cx="42" cy="42" r="${r}" stroke="${col}" stroke-width="7"
            stroke-dasharray="${circ}" stroke-dashoffset="${circ}" data-offset="${offset}" id="hsr-circle-${healthActiveMember}"/>
        </svg>
        <div class="hsr-label">
          <div class="hsr-num" style="color:${col}">${score}</div>
          <div class="hsr-tag">Score</div>
        </div>
      </div>
    </div>
    <div class="health-hero-stats">
      <div class="hhs">
        <div class="hhs-val">${data.vitals.bmi}</div>
        <div class="hhs-lbl">BMI</div>
      </div>
      <div class="hhs" style="${abnormal>0?'background:rgba(255,79,79,.1);border-color:rgba(255,79,79,.2)':''}">
        <div class="hhs-val" style="color:${abnormal>0?'#ff4f4f':'#3ecf8e'}">${abnormal}</div>
        <div class="hhs-lbl">Abnormal</div>
      </div>
      <div class="hhs" style="${borderline>0?'background:rgba(240,180,41,.08);border-color:rgba(240,180,41,.18)':''}">
        <div class="hhs-val" style="color:${borderline>0?'#f0b429':'#3ecf8e'}">${borderline}</div>
        <div class="hhs-lbl">Borderline</div>
      </div>
    </div>
  </div>`;

  // Animate ring after render
  requestAnimationFrame(() => {
    setTimeout(() => {
      const el = document.getElementById(`hsr-circle-${healthActiveMember}`);
      if (el) el.style.strokeDashoffset = el.dataset.offset;
    }, 100);
  });
}

function renderHealthReportStrip() {
  const wrap = document.getElementById('health-report-strip');
  if (!wrap) return;
  const data = getHealthData()[healthActiveMember];
  wrap.innerHTML = `
  <div class="health-report-strip">
    <div class="hrs-icon">🧾</div>
    <div class="hrs-body">
      <div class="hrs-title">${data.labName}</div>
      <div class="hrs-date">Ref: ${data.reportRef} · ${fmtHealthDate(data.lastUpdated)}</div>
    </div>
  </div>`;
}

function renderHealthCatTabs() {
  const wrap = document.getElementById('health-cat-tabs');
  if (!wrap) return;
  wrap.innerHTML = HEALTH_CATS.map(cat => `
    <div class="hct-tab${cat===healthActiveCat?' active':''}"
         onclick="switchHealthCat('${cat}')">${cat}</div>`).join('');
}

function renderBiomarkers() {
  const grid = document.getElementById('biomarker-grid');
  const countEl = document.getElementById('health-bm-count');
  const titleEl = document.getElementById('health-bm-title');
  if (!grid) return;

  const data = getHealthData()[healthActiveMember];
  const m    = HEALTH_MEMBER_META[healthActiveMember];

  const filtered = BM_DEFS.filter(def =>
    healthActiveCat === 'All' || def.cat === healthActiveCat
  );

  if (titleEl) titleEl.textContent = healthActiveCat === 'All' ? 'All Biomarkers' : healthActiveCat;
  if (countEl) countEl.textContent = filtered.length + ' markers';

  grid.innerHTML = filtered.map(def => {
    const val = data.markers[def.id];
    if (val === undefined || val === null) return '';
    const st  = getBmStatus(def, val, m.gender);
    const col = statusColor(st);
    const pct = bmBarPct(def, val);
    const normPct = Math.round((def.normHigh / def.max) * 100);

    return `<div class="bm-card s-${st} pressable" onclick="openBmSheet('${def.id}','${healthActiveMember}')">
      <div class="bm-icon">${def.icon}</div>
      <div class="bm-body">
        <div class="bm-name">${def.name}</div>
        <div class="bm-ref">Ref: ${def.normLow > 0 ? def.normLow+'–' : '<'}${def.normHigh} ${def.unit}</div>
        <div class="bm-bar-wrap">
          <div class="bm-bar" style="width:0%;background:${col}" data-w="${pct}"></div>
        </div>
      </div>
      <div class="bm-right">
        <div class="bm-val" style="color:${col}">${val}</div>
        <div class="bm-unit">${def.unit}</div>
        <div class="bm-badge ${st}">${st}</div>
      </div>
    </div>`;
  }).join('');

  // Animate bars
  requestAnimationFrame(() => {
    setTimeout(() => {
      grid.querySelectorAll('.bm-bar[data-w]').forEach(el => {
        el.style.width = el.dataset.w + '%';
      });
    }, 80);
  });
}

function switchHealthMember(id) {
  healthActiveMember = id;
  initHealthPage();
}

function switchHealthCat(cat) {
  healthActiveCat = cat;
  renderHealthCatTabs();
  renderBiomarkers();
}

// ── Biomarker detail sheet ──
function openBmSheet(bmId, memberId) {
  const def  = BM_DEFS.find(d => d.id === bmId);
  const data = getHealthData()[memberId];
  const m    = HEALTH_MEMBER_META[memberId];
  if (!def || !data) return;

  const val = data.markers[bmId];
  const st  = getBmStatus(def, val, m.gender);
  const col = statusColor(st);

  // Gauge zones: low = 0→normLow, normal = normLow→normHigh, high = normHigh→max
  const lowPct    = Math.round((Math.max(0, def.normLow - (def.low||0)) / def.max) * 100);
  const normPct   = Math.round(((def.normHigh - Math.max(0,def.normLow)) / def.max) * 100);
  const highPct   = 100 - lowPct - normPct;
  const needlePct = Math.max(2, Math.min(98, Math.round((val / def.max) * 100)));

  const body = document.getElementById('bm-sheet-body');
  body.innerHTML = `
    <div style="display:flex;align-items:center;gap:10px;margin-bottom:6px;">
      <span style="font-size:28px">${def.icon}</span>
      <div>
        <div class="bm-sheet-name">${def.name}</div>
        <div class="bm-badge ${st}" style="display:inline-block">${st.toUpperCase()}</div>
      </div>
    </div>
    <div class="bm-big-val" style="color:${col}">${val} <span class="bm-big-unit">${def.unit}</span></div>
    <div class="bm-gauge-wrap">
      <div class="bm-gauge-lbl">
        <span>Low</span><span>Normal Range</span><span>High</span>
      </div>
      <div class="bm-gauge" id="bm-gauge-bar">
        <div class="bm-g-low"  style="left:0;width:${lowPct}%"></div>
        <div class="bm-g-norm" style="left:${lowPct}%;width:${normPct}%"></div>
        <div class="bm-g-high" style="left:${lowPct+normPct}%;width:${highPct}%"></div>
        <div class="bm-needle" id="bm-needle" style="left:0%"></div>
      </div>
      <div class="bm-ref-row">
        <div class="bm-ref-item">
          <div class="bm-ref-val">${def.normLow > 0 ? def.normLow : '—'}</div>
          <div class="bm-ref-lbl">Min Normal</div>
        </div>
        <div class="bm-ref-item">
          <div class="bm-ref-val" style="color:${col}">${val}</div>
          <div class="bm-ref-lbl">Your Value</div>
        </div>
        <div class="bm-ref-item">
          <div class="bm-ref-val">${def.normHigh}</div>
          <div class="bm-ref-lbl">Max Normal</div>
        </div>
      </div>
    </div>
    <div class="bm-insight">
      <div class="bm-insight-title">💡 What this means</div>
      <div class="bm-insight-text">${def.insight}</div>
    </div>
    <div style="margin-top:14px;padding:12px 14px;background:var(--surface2);border:1px solid var(--border);border-radius:12px;">
      <div style="font-family:'DM Mono',monospace;font-size:9px;color:var(--text3);text-transform:uppercase;letter-spacing:.5px;margin-bottom:8px;">Last Tested</div>
      <div style="font-size:12px;font-weight:600;color:var(--text)">${data.labName}</div>
      <div style="font-family:'DM Mono',monospace;font-size:10px;color:var(--text3);margin-top:2px">${fmtHealthDate(data.lastUpdated)} · ${data.reportRef}</div>
    </div>
    <button onclick="closeBmSheet()" style="width:100%;margin-top:12px;padding:13px;border-radius:12px;background:var(--surface2);border:1px solid var(--border2);color:var(--text2);font-size:13px;font-weight:700;cursor:pointer;">Close</button>
  `;

  var _sy=window.scrollY||window.pageYOffset;document.body.dataset.scrollY=_sy;document.body.style.top='-'+_sy+'px';document.body.classList.add('modal-open');
  document.getElementById('bm-sheet').classList.remove('hidden');
  // Animate needle
  requestAnimationFrame(() => {
    setTimeout(() => {
      const needle = document.getElementById('bm-needle');
      if (needle) needle.style.left = needlePct + '%';
    }, 120);
  });
}

function closeBmSheet() {
  document.getElementById('bm-sheet').classList.add('hidden');
  var _sy2=parseInt(document.body.dataset.scrollY||'0',10);document.body.classList.remove('modal-open');document.body.style.top='';window.scrollTo(0,_sy2);
}

// ── Dashboard health widget builder ──
function buildHealthWidget() {
  const data = getHealthData();
  const scores = Object.entries(HEALTH_MEMBER_META).map(([id, m]) => {
    const score = computeHealthScore(id);
    const col   = scoreColor(score);
    const r = 24, circ = 2 * Math.PI * r;
    const offset = circ - (score / 100) * circ;
    // Gather flags
    const mData = data[id];
    const mMeta = m;
    let flags = [];
    BM_DEFS.forEach(def => {
      const val = mData.markers[def.id];
      if (val == null) return;
      const st = getBmStatus(def, val, mMeta.gender);
      if (st === 'high' || st === 'low') flags.push({ name:def.name.split(' ')[0], st });
    });
    return { id, m, score, col, circ, offset, flags };
  });

  // Always feature Rajasekhar (head of family) on dashboard
  const featured = scores.find(s => s.id === 'rajasekhar') || scores[0];
  const r = 24, circ = 2 * Math.PI * r;

  // Top 3 abnormal markers for featured member (Rajasekhar / head of family)
  const featData = data[featured.id];
  const featMeta = featured.m;
  const hasAnyData = featData && Object.keys(featData.markers||{}).length > 0;
  const topMarkers = !hasAnyData ? [] : BM_DEFS
    .map(def => ({ def, val:featData.markers[def.id], st:getBmStatus(def, featData.markers[def.id], featMeta.gender) }))
    .filter(x => x.val != null && x.st !== 'normal')
    .sort((a,b) => { const o={'high':0,'low':1,'borderline':2}; return (o[a.st]||3)-(o[b.st]||3); })
    .slice(0, 3);

  const flagHtml = featured.flags.slice(0,3).map(f =>
    `<span class="hw-flag ${f.st==='high'||f.st==='low'?'red':'gold'}">${f.name}</span>`
  ).join('');

  const bmRows = topMarkers.map(({ def, val, st }) => {
    const col = statusColor(st);
    return `<div class="hw-bm-row pressable" onclick="goPage('health')">
      <span class="hw-bm-icon">${def.icon}</span>
      <span class="hw-bm-name">${def.name.split('(')[0].trim()}</span>
      <span class="hw-bm-val" style="color:${col}">${val}</span>
      <div class="hw-bm-dot" style="background:${col}"></div>
    </div>`;
  }).join('');

  const allOk = !hasAnyData || scores.every(s => s.flags.length === 0);
  const reportDateStr = featData && featData.lastUpdated ? ' · ' + fmtHealthDate(featData.lastUpdated) : '';

  return `<div class="w-card">
    <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;">
      <div class="w-hdr" style="margin:0">💊 &nbsp;Family Health</div>
      <span class="card-action" onclick="goPage('health')" style="font-size:11px">View All →</span>
    </div>
    <div class="hw-score-row">
      <div class="hw-ring">
        <svg class="hw-ring-svg" width="58" height="58" viewBox="0 0 58 58">
          <circle class="hw-ring-track" cx="29" cy="29" r="${r}" stroke-width="6"/>
          <circle class="hw-ring-fill" cx="29" cy="29" r="${r}" stroke="${featured.col}" stroke-width="6"
            stroke-dasharray="${circ.toFixed(1)}" stroke-dashoffset="${circ.toFixed(1)}"
            data-offset="${featured.offset.toFixed(1)}" id="hw-ring-fill"/>
        </svg>
        <div class="hw-ring-lbl">
          <div class="hw-ring-num" style="color:${featured.col}">${featured.score}</div>
          <div class="hw-ring-tag">Score</div>
        </div>
      </div>
      <div class="hws-info">
        <div class="hw-info-name">${featured.m.label}</div>
        <div class="hw-info-sub">${hasAnyData ? scoreLabel(featured.score) : 'No reports yet'}${reportDateStr}</div>
        <div class="hw-flags">${flagHtml || '<span class="hw-flag green">All Clear ✓</span>'}</div>
      </div>
    </div>
    ${!hasAnyData ? `<div style="text-align:center;padding:12px 8px;font-family:'DM Mono',monospace;font-size:11px;color:var(--text3);line-height:1.6">No reports yet<br><span style="font-size:10px;opacity:.6">Go to Health → Add Lab Report</span></div>` : topMarkers.length ? `<div class="hw-bm-rows">${bmRows}</div>` : `<div style="text-align:center;padding:8px;font-family:'DM Mono',monospace;font-size:10px;color:var(--green)">✓ All markers normal</div>`}
  </div>`;
}

// ── Date formatter ──
function fmtHealthDate(ds) {
  if (!ds) return '—';
  const d = new Date(ds + 'T12:00:00');
  return d.toLocaleDateString('en-IN', { day:'numeric', month:'short', year:'numeric' });
}

function initHealthWidgetDynamic() {
  // Animate health widget ring
  requestAnimationFrame(() => {
    setTimeout(() => {
      const el = document.getElementById('hw-ring-fill');
      if (el && el.dataset.offset) el.style.strokeDashoffset = el.dataset.offset;
    }, 150);
  });
}

// ═══════════════════════════════════════
// GLOBAL MEMBER CONTEXT
// ═══════════════════════════════════════
const GM_META = {
  all:        { label:'All',        shortLabel:'All',     role:'Full portal view',    gradient:'linear-gradient(135deg,#374151,#6b7280)', color:'#6b7280', initials:'👨‍👩‍👧‍👦', personChip:'All' },
  rajasekhar: { label:'Rajasekhar', shortLabel:'Rajasekhar', role:'Head of Family · 48M', gradient:'linear-gradient(135deg,#1a3254,#3b6fd4)', color:'#3b6fd4', initials:'RR', personChip:'Rajasekhar' },
  vasundhara: { label:'Vasundhara', shortLabel:'Vasundhara', role:'Spouse · 42F',       gradient:'linear-gradient(135deg,#5b21b6,#9333ea)', color:'#9333ea', initials:'VD', personChip:'Vasundhara' },
  josritha:   { label:'Josritha',   shortLabel:'Josritha',   role:'Daughter · 19F',     gradient:'linear-gradient(135deg,#9d174d,#ec4899)', color:'#ec4899', initials:'JD', personChip:'Josritha' },
  jeevan:     { label:'Jeevan',     shortLabel:'Jeevan',     role:'Son · 14M',           gradient:'linear-gradient(135deg,#065f46,#0d9488)', color:'#0d9488', initials:'JV', personChip:'Jeevan' },
};

let activePortalMember = localStorage.getItem('fp_active_member') || 'all';

function setPortalMember(id) {
  activePortalMember = id;
  localStorage.setItem('fp_active_member', id);
  closeGmDropdown();
  updateGmPill();
  applyMemberContextToCurrentPage();
}

function updateGmPill() {
  const m = GM_META[activePortalMember] || GM_META.all;
  const pill = document.getElementById('gm-pill');
  const av   = document.getElementById('gm-av');
  const nm   = document.getElementById('gm-name');
  if (!pill || !av || !nm) return;
  av.style.background = m.gradient;
  av.innerHTML = activePortalMember === 'all' ? '👨‍👩‍👧‍👦' : m.initials;
  nm.textContent = m.shortLabel;
  if (activePortalMember === 'all') {
    pill.classList.remove('member-active');
  } else {
    pill.classList.add('member-active');
    pill.style.setProperty('--gm-color', m.color);
  }
  // Update dropdown checks
  document.querySelectorAll('#gm-dropdown .gm-dd-item').forEach(el => {
    const isActive = el.dataset.gm === activePortalMember;
    el.classList.toggle('active', isActive);
    const chk = el.querySelector('.gm-dd-check');
    if (chk) chk.style.display = isActive ? '' : 'none';
  });
}

function toggleGmDropdown() {
  const dd = document.getElementById('gm-dropdown');
  const pill = document.getElementById('gm-pill');
  const isOpen = dd.classList.contains('show');
  if (isOpen) { closeGmDropdown(); }
  else { dd.classList.add('show'); pill.classList.add('open'); }
}

function closeGmDropdown() {
  document.getElementById('gm-dropdown').classList.remove('show');
  document.getElementById('gm-pill').classList.remove('open');
}

// Close dropdown on outside tap
document.addEventListener('click', e => {
  if (!e.target.closest('#gm-pill') && !e.target.closest('#gm-dropdown')) closeGmDropdown();
}, true);

// ── Context banner builder ──
function gmContextBanner(pageId) {
  if (activePortalMember === 'all') return '';
  const m = GM_META[activePortalMember];
  return `<div class="gm-context-banner">
    <div class="gm-av" style="background:${m.gradient}">${m.initials}</div>
    <span>Showing <strong>${m.label}</strong>'s data only</span>
    <span class="gm-cb-clear" onclick="setPortalMember('all')">✕ Show All</span>
  </div>`;
}

// ── Apply context to current active page ──
function applyMemberContextToCurrentPage() {
  const activePage = document.querySelector('.page.active');
  if (!activePage) return;
  const pageId = activePage.id.replace('page-', '');
  switch(pageId) {
    case 'dashboard':   applyGmDashboard();   break;
    case 'members':     applyGmMembers();     break;
    case 'documents':   applyGmDocuments();   break;
    case 'health':      applyGmHealth();      break;
    case 'calendar':    applyGmCalendar();    break;
    case 'expiry':      break; // expiry is family-wide, no filter needed
  }
}

// ── Dashboard: hide/show family summary cards + refresh live widgets ──
function applyGmDashboard() {
  // Re-render family widget on member context switch via initWidgetDynamic
  initWidgetDynamic();
}

// ── Members: filter list and jump straight to member ──
function applyGmMembers() {
  if (activePortalMember === 'all') {
    // Restore full list view
    document.getElementById('members-detail-view').style.display = 'none';
    document.getElementById('members-list-view').style.display = '';
    // Re-render list with all members
    const container = document.getElementById('members-cards');
    if (container) {
      container.innerHTML = Object.values(MEMBERS).map(m => {
        const tabs = SECTION_TABS[m.id]||['identity'];
        const badges = tabs.map(t=>`<span class="mcf-badge">${SECTION_META[t]?.icon||'📄'} ${SECTION_META[t]?.label||t}</span>`).join('');
        return `<div class="member-card-full pressable" onclick="showMemberDetail('${m.id}','identity')" style="border-left-color:${m.color}">
          <div class="mcf-av" style="background:${m.gradient};overflow:hidden;padding:0;">${MEMBER_PHOTOS[m.id]?`<img src="${MEMBER_PHOTOS[m.id]}" style="width:100%;height:100%;object-fit:cover;object-position:center top;border-radius:14px;" alt="${m.shortName}">`:m.initials}</div>
          <div class="mcf-body">
            <div class="mcf-name">${m.name}</div>
            <div class="mcf-role">${m.role} · Age ${age(m.dob)}</div>
            <div class="mcf-badges">${badges}</div>
          </div>
          <div class="mcf-arrow">›</div>
        </div>`;
      }).join('');
    }
  } else {
    // Jump directly to this member's profile
    showMemberDetail(activePortalMember, 'identity');
    // Hide the back button's "← Family" since there's no list to go back to in filtered mode
  }
}

// ── Documents: auto-set person filter chip ──
function applyGmDocuments() {
  if (activePortalMember === 'all') {
    docPersonFilter = 'All';
    document.querySelectorAll('[data-person-chip]').forEach(c => c.classList.toggle('active', c.getAttribute('data-person-chip') === 'All'));
    document.querySelectorAll('[data-person-chip]').forEach(c => c.style.display = '');
  } else {
    const chipName = GM_META[activePortalMember].personChip;
    docPersonFilter = chipName;
    document.querySelectorAll('[data-person-chip]').forEach(c => {
      const val = c.getAttribute('data-person-chip');
      c.classList.toggle('active', val === chipName);
      c.style.display = (val === 'All' || val === chipName) ? '' : 'none';
    });
  }
  // Apply row/section visibility first, then collapse all bodies
  applyDocFilters();
  collapseAllDocSections();
}

// ── Health: switch to member ──
function applyGmHealth() {
  if (activePortalMember !== 'all') {
    healthActiveMember = activePortalMember;
    // Hide member switcher tabs when in filtered mode
    const tabsEl = document.getElementById('health-member-tabs');
    if (tabsEl) tabsEl.style.display = 'none';
  } else {
    healthActiveMember = 'rajasekhar';
    const tabsEl = document.getElementById('health-member-tabs');
    if (tabsEl) tabsEl.style.display = '';
  }
  renderHealthPage();
}

// ── Calendar: set member filter ──
function applyGmCalendar() {
  if (activePortalMember === 'all') {
    setCalFilter('all');
    // Show all chips
    document.querySelectorAll('#cal-chips .cal-chip').forEach(c => c.style.display = '');
  } else {
    const name = GM_META[activePortalMember].label;
    setCalFilter(name);
    // Hide other member chips
    document.querySelectorAll('#cal-chips .cal-chip').forEach(c => {
      const txt = c.textContent.trim();
      c.style.display = (txt.includes('All') || txt.includes(name)) ? '' : 'none';
    });
  }
}

/* ═══════════════════════════════════════════════
   BACKUP JSON AUTO-LOADER
   Embeds the backup data so portal works immediately
   without requiring manual restore
═══════════════════════════════════════════════ */
(function() {
  var BACKUP_DATA = {"fp_cal_events":"[{\"id\":\"e4\",\"title\":\"Jeevan Birthday \uD83C\uDF82\",\"date\":\"2026-08-22\",\"start\":\"\",\"end\":\"\",\"cat\":\"birthday\",\"color\":\"#f472b6\",\"members\":[\"all\"],\"notes\":\"Plan family celebration\"},{\"id\":\"e6\",\"title\":\"Income Tax Filing Deadline\",\"date\":\"2026-07-31\",\"start\":\"\",\"end\":\"\",\"cat\":\"finance\",\"color\":\"#f0b429\",\"members\":[\"Rajasekhar\"],\"notes\":\"Submit via CA\"},{\"id\":\"tr_prop_flat403\",\"title\":\"\uD83C\uDFD8\uFE0F Property Tax \u2013 Flat 403\",\"date\":\"2026-02-20\",\"start\":\"\",\"end\":\"\",\"cat\":\"finance\",\"color\":\"#ff4f4f\",\"members\":[\"Rajasekhar\"],\"notes\":\"Assessment 1035037996 \u00b7 Mangamuru Donka, Ongole \u00b7 Pay at cdma.ap.gov.in\"},{\"id\":\"tr_prop_shopg5\",\"title\":\"\uD83C\uDFEC Property Tax \u2013 Shop G5\",\"date\":\"2026-02-20\",\"start\":\"\",\"end\":\"\",\"cat\":\"finance\",\"color\":\"#ff4f4f\",\"members\":[\"Rajasekhar\"],\"notes\":\"Assessment 1035038052 \u00b7 Silver Spring Apts, Ongole \u00b7 Pay at cdma.ap.gov.in\"},{\"id\":\"tr_car_ins\",\"title\":\"\uD83D\uDE97 Car Insurance Renewal\",\"date\":\"2026-06-28\",\"start\":\"\",\"end\":\"\",\"cat\":\"finance\",\"color\":\"#f0b429\",\"members\":[\"Rajasekhar\"],\"notes\":\"Hyundai i10 \u00b7 AP27AK7873 \u00b7 Policy 3001/103498197/10/000 \u00b7 ICICI Lombard\"},{\"id\":\"tr_health_fam\",\"title\":\"\uD83D\uDC68\u200D\uD83D\uDC69\u200D\uD83D\uDC67\u200D\uD83D\uDC66 Family Health Insurance Renewal\",\"date\":\"2026-08-04\",\"start\":\"\",\"end\":\"\",\"cat\":\"health\",\"color\":\"#4f7fff\",\"members\":[\"Rajasekhar\"],\"notes\":\"ICICI Lombard Family Floater \u00b7 Policy 4193i/APRN/400529214/00/000 \u00b7 \u20b925,812\"},{\"id\":\"tr_health_ind\",\"title\":\"\uD83C\uDFE5 Individual Health Insurance Renewal\",\"date\":\"2026-08-06\",\"start\":\"\",\"end\":\"\",\"cat\":\"health\",\"color\":\"#4f7fff\",\"members\":[\"Rajasekhar\"],\"notes\":\"ICICI Lombard \u00b7 Rajasekhar \u00b7 Policy 4128i/HSNR/92094505/10/000 \u00b7 \u20b921,502\"},{\"id\":\"tr_dl\",\"title\":\"\uD83E\uDEAA Driving Licence Expiry\",\"date\":\"2027-01-20\",\"start\":\"\",\"end\":\"\",\"cat\":\"government\",\"color\":\"#ff8c42\",\"members\":[\"Rajasekhar\"],\"notes\":\"DLFAP62729122008 \u00b7 Renew at Sarathi portal\"},{\"id\":\"tr_bike_ins\",\"title\":\"\uD83D\uDEF5 Bike Insurance Renewal\",\"date\":\"2028-02-24\",\"start\":\"\",\"end\":\"\",\"cat\":\"finance\",\"color\":\"#3ecf8e\",\"members\":[\"Rajasekhar\"],\"notes\":\"Honda Activa 125 \u00b7 TS08HJ8438 \u00b7 Policy 3005/430080806/00/000 \u00b7 ICICI Lombard\"},{\"id\":\"e1772740339031\",\"title\":\"Maid Bill Payment\",\"date\":\"2026-03-06\",\"start\":\"01:21\",\"end\":\"\",\"cat\":\"other\",\"color\":\"#f472b6\",\"members\":[\"Rajasekhar\"],\"notes\":\"Maid bill\"},{\"id\":\"e1772740438429\",\"title\":\"Maintenance Payment\",\"date\":\"2026-04-01\",\"start\":\"01:23\",\"end\":\"\",\"cat\":\"other\",\"color\":\"#a78bfa\",\"members\":[\"Rajasekhar\"],\"notes\":\"\"},{\"id\":\"e1772740464314\",\"title\":\"Daddy Amount Transfer\",\"date\":\"2026-04-01\",\"start\":\"01:23\",\"end\":\"\",\"cat\":\"finance\",\"color\":\"#f0b429\",\"members\":[\"Rajasekhar\"],\"notes\":\"\"},{\"id\":\"e1772740504905\",\"title\":\"Josritha Semester Fees\",\"date\":\"2026-04-01\",\"start\":\"01:24\",\"end\":\"\",\"cat\":\"finance\",\"color\":\"#f0b429\",\"members\":[\"Josritha\"],\"notes\":\"\"},{\"id\":\"e1772740591048\",\"title\":\"AC Service\",\"date\":\"2026-03-09\",\"start\":\"01:26\",\"end\":\"\",\"cat\":\"other\",\"color\":\"#38bdf8\",\"members\":[\"Rajasekhar\"],\"notes\":\"\"},{\"id\":\"e1772786486992\",\"title\":\"Thyroid Doctor appointment\",\"date\":\"2026-03-07\",\"start\":\"\",\"end\":\"\",\"cat\":\"health\",\"color\":\"#4f7fff\",\"members\":[\"Vasundhara\"],\"notes\":\"\"}]","fp_health_v3":"{\"rajasekhar\":{\"lastUpdated\":\"2026-03-05\",\"labName\":\"Lab Report\",\"reportRef\":\"\",\"vitals\":{\"weight\":null,\"height\":null,\"bmi\":null},\"markers\":{\"glucose\":102,\"hba1c\":6,\"ldl\":86,\"hdl\":37,\"triglycerides\":138,\"tsh\":4,\"creatinine\":1.1,\"uricacid\":5.6,\"vitd\":45,\"vitb12\":388,\"wbc\":8.84,\"bilirubin\":1.51,\"alt\":11,\"ast\":102,\"alp\":81,\"ggt\":11}},\"vasundhara\":{\"lastUpdated\":\"2025-10-31\",\"labName\":\"Mfine\",\"reportRef\":\"\",\"vitals\":{\"weight\":null,\"height\":null,\"bmi\":null},\"markers\":{\"glucose\":99.34,\"hba1c\":5.1,\"cholesterol\":182,\"ldl\":121.02,\"hdl\":48.7,\"triglycerides\":200,\"hemoglobin\":11.7,\"tsh\":6.004,\"uricacid\":3.7,\"vitd\":25,\"vitb12\":132,\"wbc\":4.77,\"platelets\":150,\"ast\":20,\"alp\":59,\"ggt\":14}},\"josritha\":{\"lastUpdated\":\"2025-10-26\",\"labName\":\"Lab Report\",\"reportRef\":\"\",\"vitals\":{\"weight\":null,\"height\":null,\"bmi\":null},\"markers\":{\"cholesterol\":80,\"ldl\":80,\"hdl\":80,\"triglycerides\":200,\"hemoglobin\":15,\"tsh\":8,\"creatinine\":9,\"uricacid\":20,\"vitd\":7,\"wbc\":16,\"bilirubin\":15,\"alp\":13,\"ggt\":13}},\"jeevan\":{\"lastUpdated\":\"2025-10-26\",\"labName\":\"Lab Report\",\"reportRef\":\"\",\"vitals\":{\"weight\":null,\"height\":null,\"bmi\":null},\"markers\":{\"glucose\":98.77,\"hba1c\":5.08,\"cholesterol\":121,\"ldl\":70.34,\"hdl\":34.4,\"triglycerides\":200,\"hemoglobin\":14.2,\"tsh\":3.132,\"uricacid\":6.2,\"vitd\":25,\"vitb12\":240,\"wbc\":6.67,\"platelets\":150,\"ast\":15.8,\"alp\":202,\"ggt\":11.4}}}","fp_health_appts_v3":"[{\"id\":\"a1\",\"member\":\"rajasekhar\",\"title\":\"Cardiology Consultation\",\"date\":\"2026-03-20\",\"time\":\"10:00\",\"loc\":\"Dr. Reddy, Yashoda Hospitals\",\"notes\":\"Bring ECG + last lipid report\"},{\"id\":\"a2\",\"member\":\"vasundhara\",\"title\":\"Thyroid Follow-up\",\"date\":\"2026-04-05\",\"time\":\"09:30\",\"loc\":\"Dr. Priya, KIMS Hospital\",\"notes\":\"Fasting required \u00b7 6 hrs\"}]","fp_bank_stmt_icici":"{\"bank\":\"ICICI\",\"accountLast4\":\"6595\",\"holder\":\"Rajasekhar Reddy Duggireddy\",\"fetchedOn\":\"2026-03-07\",\"period\":\"FEB 1, 2026 to MAR 7, 2026\",\"openingBalance\":1302.41,\"closingBalance\":19113.82,\"txnCount\":10,\"transactions\":[{\"date\":\"2026-03-07\",\"title\":\"OTHERS\",\"sub\":\"UPL/858653471223\",\"remark\":\"UPI Transfer\",\"credit\":0,\"debit\":1500,\"balance\":19113.82,\"type\":\"DR\"},{\"date\":\"2026-03-06\",\"title\":\"VATTIPALLI\",\"sub\":\"UPI/9866725991\",\"remark\":\"UPI Payment\",\"credit\":0,\"debit\":400,\"balance\":20613.82,\"type\":\"DR\"},{\"date\":\"2026-03-05\",\"title\":\"AIRTEL\",\"sub\":\"Airtel/billpay\",\"remark\":\"Mobile Recharge\",\"credit\":0,\"debit\":1188.26,\"balance\":21013.82,\"type\":\"DR\"},{\"date\":\"2026-03-05\",\"title\":\"SELF\",\"sub\":\"IMPS Transfer\",\"remark\":\"Self Transfer\",\"credit\":0,\"debit\":649,\"balance\":22202.08,\"type\":\"DR\"},{\"date\":\"2026-03-05\",\"title\":\"SELF\",\"sub\":\"NEFT Transfer\",\"remark\":\"Self Transfer\",\"credit\":0,\"debit\":9371.33,\"balance\":22851.08,\"type\":\"DR\"},{\"date\":\"2026-03-05\",\"title\":\"RAJASEKHAR\",\"sub\":\"NEFT/INW\",\"remark\":\"Salary Credit\",\"credit\":30000,\"debit\":0,\"balance\":32222.41,\"type\":\"CR\"},{\"date\":\"2026-03-05\",\"title\":\"OTHERS\",\"sub\":\"UPI/Credit\",\"remark\":\"UPI Receipt\",\"credit\":1022,\"debit\":0,\"balance\":2222.41,\"type\":\"CR\"},{\"date\":\"2026-03-04\",\"title\":\"OTHERS\",\"sub\":\"UPI Transfer\",\"remark\":\"UPI Payment\",\"credit\":0,\"debit\":1500,\"balance\":1200.41,\"type\":\"DR\"},{\"date\":\"2026-03-03\",\"title\":\"NOBROKER T\",\"sub\":\"NoBroker/Rent\",\"remark\":\"Rent Payment\",\"credit\":0,\"debit\":7000,\"balance\":2700.41,\"type\":\"DR\"},{\"date\":\"2026-03-02\",\"title\":\"OTHERS\",\"sub\":\"UPI/Credit\",\"remark\":\"UPI Receipt\",\"credit\":1081,\"debit\":0,\"balance\":9700.41,\"type\":\"CR\"}]}"};

  // Load each key into localStorage only if not already present (don't overwrite fresh scrapes)
  var keys = Object.keys(BACKUP_DATA);
  for (var i = 0; i < keys.length; i++) {
    var k = keys[i];
    if (!localStorage.getItem(k)) {
      try { localStorage.setItem(k, BACKUP_DATA[k]); } catch(e){}
    }
  }
})();

function init() {
  initDashboard();
  setTimeout(restoreWidgetCollapse, 100);
  initMembers();
  initDocuments();
  initExpiry();
  buildSearchIdx();
  // Apply saved member context after full init
  updateGmPill();
  applyMemberContextToCurrentPage();
}

init();


// ═══════════════════════════════════════
// SIDEBAR NAV SYNC
// ═══════════════════════════════════════
let pwaPromptEvent = null;
window.addEventListener('beforeinstallprompt', e => { e.preventDefault(); pwaPromptEvent = e; });
function checkPwaPrompt() {}
function pwaInstall() {}
function pwaDismiss() {}
function showIosInstallHelp() {}

// ═══════════════════════════════════════
// SIDEBAR NAV SYNC
// ═══════════════════════════════════════
function syncSidebarNav(page) {
  document.querySelectorAll('.snav-item').forEach(el => el.classList.remove('active'));
  const target = document.getElementById('snav-' + page);
  if (target) target.classList.add('active');
}


// ═══════════════════════════════════════
// INIT LOCK CHECK (PIN disabled)
// ═══════════════════════════════════════
// ═══════════════════════════════════════
// PWA STANDALONE MODE DETECTION
// Adds .pwa-standalone to <html> when running as Home Screen app
// ═══════════════════════════════════════
(function detectStandalone() {
  const isStandalone = window.navigator.standalone === true ||
    window.matchMedia('(display-mode: standalone)').matches;
  if (isStandalone) {
    document.documentElement.classList.add('pwa-standalone');
  }
})();

checkPinSession();
checkPwaPrompt();
(function initLoader() {
  // Generate floating particles
  const container = document.getElementById('loader-particles');
  if (container) {
    const colors = ['rgba(79,127,255,.4)', 'rgba(240,180,41,.3)', 'rgba(62,207,142,.25)', 'rgba(167,139,250,.3)'];
    for (let i = 0; i < 22; i++) {
      const p = document.createElement('div');
      p.className = 'lp';
      const size = Math.random() * 4 + 2;
      p.style.cssText = `width:${size}px;height:${size}px;left:${Math.random()*100}%;background:${colors[Math.floor(Math.random()*colors.length)]};animation-duration:${Math.random()*7+6}s;animation-delay:${Math.random()*4}s;`;
      container.appendChild(p);
    }
  }
  // Status text cycling
  const statuses = ['Initialising…','Loading family data…','Securing portal…','Decrypting records…','Almost ready…'];
  let si = 0;
  const statusEl = document.getElementById('loader-status');
  const statusTimer = setInterval(() => {
    si++;
    if (statusEl && si < statuses.length) statusEl.textContent = statuses[si];
    else clearInterval(statusTimer);
  }, 600);
  // Hide loader after 3.2s and show portal
  setTimeout(() => {
    const loader = document.getElementById('loader-screen');
    if (loader) {
      loader.classList.add('fade-out');
      setTimeout(() => { loader.style.display = 'none'; }, 850);
    }
  }, 3200);
})();

// ═══════════════════════════════════════
// DARK / LIGHT THEME TOGGLE
// ═══════════════════════════════════════
function initTheme() {
  const saved = localStorage.getItem('fp_theme') || 'dark';
  applyTheme(saved);
}

function applyTheme(theme) {
  const root = document.documentElement;
  const btn = document.getElementById('theme-toggle');
  if (theme === 'light') {
    root.setAttribute('data-theme', 'light');
    if (btn) btn.textContent = '☀️';
    document.querySelector('meta[name="theme-color"]')?.setAttribute('content', '#f0f2f8');
  } else {
    root.removeAttribute('data-theme');
    if (btn) btn.textContent = '🌙';
    document.querySelector('meta[name="theme-color"]')?.setAttribute('content', '#07080f');
  }
  localStorage.setItem('fp_theme', theme);
}

function toggleTheme() {
  const current = localStorage.getItem('fp_theme') || 'dark';
  applyTheme(current === 'dark' ? 'light' : 'dark');
}

initTheme();

// ═══════════════════════════════════════
// PIN LOCK SYSTEM — DISABLED
// (Re-enable by removing class="hidden" from #pin-lock HTML
//  and calling checkPinSession() at bottom)
// ═══════════════════════════════════════
const PIN_CORRECT = '1234';
const PIN_SESSION_KEY = 'fp_unlocked';
const PIN_LOCK_TIMEOUT = 5 * 60 * 1000;
let pinBuffer = '';
let pinLockTimer = null;

function checkPinSession() {
  // PIN disabled — skip directly to portal
  document.getElementById('pin-lock').classList.add('hidden');
}

// ═══════════════════════════════════════
// KEYBOARD DISMISS — BOTTOM NAV JUMP FIX
// ═══════════════════════════════════════
(function() {
  const nav = document.getElementById('bottom-nav');
  if (!nav) return;

  // ── visualViewport API (Chrome Android, iOS 13+) ──
  if (window.visualViewport) {
    let _lastVPHeight = window.visualViewport.height;
    let _pinTimer = null;

    window.visualViewport.addEventListener('resize', () => {
      const newH = window.visualViewport.height;
      const delta = newH - _lastVPHeight;
      _lastVPHeight = newH;

      // Keyboard dismissed = viewport grew significantly (> 100px)
      if (delta > 100) {
        // Pin the nav during the reflow frame
        nav.style.transition = 'none';
        nav.style.transform = 'translateZ(0) translateY(0)';
        // Lock scroll position to prevent jump
        const sy = window.scrollY;
        requestAnimationFrame(() => {
          window.scrollTo(0, sy);
          requestAnimationFrame(() => {
            nav.style.transform = '';
            nav.style.transition = '';
          });
        });
      }

      // Keyboard open = viewport shrank — offset nav up so it stays above keyboard
      if (delta < -100) {
        // Nothing needed — fixed positioning handles this
      }
    });
  }

  // ── Fallback: blur on any text input (search, health inputs, etc.) ──
  document.addEventListener('blur', function(e) {
    if (!e.target || !e.target.matches('input, textarea')) return;
    // Small delay so viewport resize event fires first
    setTimeout(() => {
      const sy = window.scrollY;
      nav.style.transition = 'none';
      requestAnimationFrame(() => {
        window.scrollTo(0, sy);
        nav.style.transform = 'translateZ(0)';
        requestAnimationFrame(() => {
          nav.style.transform = '';
          nav.style.transition = '';
        });
      });
    }, 50);
  }, true);

  // ── Search page: blur input when user taps outside ──
  const searchInp = document.getElementById('search-input');
  if (searchInp) {
    // After results render, tapping a result blurs the input — handled by blur above
    // Additionally suppress scroll-jump on focus by locking scrollY
    searchInp.addEventListener('focus', () => {
      // Remember scroll position before keyboard opens
      searchInp._scrollY = window.scrollY;
    });
  }
})();

// ═══════════════════════════════════════
// BACKUP & RESTORE
// ═══════════════════════════════════════
const BACKUP_KEYS = [
  'fp_cal_events','fp_cal_seed_ver',
  'fp_health_v3','fp_health_appts_v3','fp_health_reports_v3',
  'fp_attendance_synced','fp_attendance_synced_ts',
  'fp_timetable_synced','fp_timetable_synced_ts',
  'fp_bank_stmt_icici','fp_bank_stmt_icici_ts',
  'fp_bank_stmt_hdfc','fp_bank_stmt_hdfc_ts',
  'fp_bank_stmt_axis','fp_bank_stmt_axis_ts',
  'fp_widgets','fp_widgets_ver',
  'fp_theme','fp_active_member','fp_pin','emg_collapsed',
  'fp_groq_key',  // ← AI key — included in backup so it survives redeployment
  'fp_grocery','fp_tasks','fp_vehicle_service','fp_photos','fp_interests','fp_briefing_cache','fp_weekly_recap'
];

function openBackupModal() {
  const lastTs = localStorage.getItem('fp_backup_ts');
  document.getElementById('backup-last-ts').textContent = lastTs ? 'Last backup: ' + lastTs : 'No backup yet — backup now to save your Groq AI key!';

  // Populate AI key section
  const statusEl = document.getElementById('bm-groq-status');
  const bodyEl   = document.getElementById('bm-groq-body');
  const key = groqGetKey();

  if (key) {
    const masked = key.slice(0,8) + '••••••••' + key.slice(-4);
    statusEl.style.cssText = 'background:rgba(62,207,142,.12);color:var(--green);border:1px solid rgba(62,207,142,.25);font-family:\'DM Mono\',monospace;font-size:10px;padding:3px 9px;border-radius:20px;';
    statusEl.textContent = '✓ Active';
    bodyEl.innerHTML = `
      <div style="display:flex;align-items:center;gap:8px;background:rgba(255,255,255,.05);border:1px solid rgba(255,255,255,.09);border-radius:9px;padding:9px 12px;margin-bottom:10px;">
        <span style="font-size:14px;">🔑</span>
        <span style="font-family:'DM Mono',monospace;font-size:11px;color:var(--text2);flex:1;">${masked}</span>
        <span onclick="bmCopyKey()" style="font-size:10px;font-weight:700;color:var(--blue2);cursor:pointer;font-family:'DM Mono',monospace;padding:3px 8px;border:1px solid rgba(79,127,255,.25);border-radius:6px;" id="bm-copy-key-btn">Copy</span>
      </div>
      <div style="font-size:11px;color:var(--text2);line-height:1.6;margin-bottom:10px;">
        ✅ Included in backup. After redeployment, just restore your backup file — AI activates automatically, no re-entry needed.
      </div>
      <div style="display:flex;gap:8px;">
        <div onclick="bmUpdateKey()" style="flex:1;text-align:center;padding:8px;border-radius:9px;background:rgba(167,139,250,.1);border:1px solid rgba(167,139,250,.25);color:var(--purple);font-size:11px;font-weight:700;cursor:pointer;">✏️ Update Key</div>
        <div onclick="groqClearKey();openBackupModal();" style="padding:8px 14px;border-radius:9px;background:rgba(255,79,79,.08);border:1px solid rgba(255,79,79,.2);color:var(--red);font-size:11px;font-weight:700;cursor:pointer;">🗑 Remove</div>
      </div>`;
  } else {
    statusEl.style.cssText = 'background:rgba(255,79,79,.1);color:var(--red);border:1px solid rgba(255,79,79,.2);font-family:\'DM Mono\',monospace;font-size:10px;padding:3px 9px;border-radius:20px;';
    statusEl.textContent = '✗ Not set';
    bodyEl.innerHTML = `
      <div style="font-size:12px;color:var(--text2);margin-bottom:10px;line-height:1.5;">
        No Groq key saved. Enter your key to activate AI features. Get one free at <span style="color:var(--blue2);font-family:'DM Mono',monospace;">console.groq.com</span>
      </div>
      <div style="display:flex;gap:8px;">
        <input id="bm-key-input" type="password" placeholder="gsk_xxxxxxxxxxxxxxxxxxxx"
          style="flex:1;background:rgba(255,255,255,.06);border:1px solid rgba(167,139,250,.3);border-radius:9px;padding:9px 12px;font-family:'DM Mono',monospace;font-size:12px;color:var(--text);outline:none;"
          onkeydown="if(event.key==='Enter')bmSaveKey()">
        <div onclick="bmSaveKey()" style="padding:9px 14px;border-radius:9px;background:linear-gradient(135deg,var(--blue),#6366f1);color:#fff;font-size:12px;font-weight:700;cursor:pointer;white-space:nowrap;">Save ✓</div>
      </div>`;
  }

  var modal = document.getElementById('backup-modal');
  modal.style.display = 'flex';
  var scrollY = window.scrollY || window.pageYOffset;
  document.body.dataset.scrollY = scrollY;
  document.body.style.top = '-' + scrollY + 'px';
  document.body.classList.add('modal-open');
}

function bmCopyKey() {
  const key = groqGetKey();
  if (!key) return;
  navigator.clipboard.writeText(key).then(() => {
    const btn = document.getElementById('bm-copy-key-btn');
    if (btn) { btn.textContent = 'Copied!'; setTimeout(() => btn.textContent = 'Copy', 2000); }
  });
}

function bmUpdateKey() {
  const bodyEl = document.getElementById('bm-groq-body');
  if (!bodyEl) return;
  bodyEl.innerHTML = `
    <div style="display:flex;gap:8px;margin-top:4px;">
      <input id="bm-key-input" type="password" placeholder="Enter new gsk_ key"
        style="flex:1;background:rgba(255,255,255,.06);border:1px solid rgba(167,139,250,.3);border-radius:9px;padding:9px 12px;font-family:'DM Mono',monospace;font-size:12px;color:var(--text);outline:none;"
        onkeydown="if(event.key==='Enter')bmSaveKey()">
      <div onclick="bmSaveKey()" style="padding:9px 14px;border-radius:9px;background:linear-gradient(135deg,var(--blue),#6366f1);color:#fff;font-size:12px;font-weight:700;cursor:pointer;white-space:nowrap;">Save ✓</div>
    </div>`;
  setTimeout(() => document.getElementById('bm-key-input')?.focus(), 100);
}

function bmSaveKey() {
  const inp = document.getElementById('bm-key-input');
  if (!inp) return;
  const key = inp.value.trim();
  if (!key.startsWith('gsk_')) {
    inp.style.borderColor = 'var(--red)';
    inp.placeholder = 'Must start with gsk_...';
    return;
  }
  groqSaveKey(key);
  aibLoaded = false;
  showToast('✅ Groq key saved!', 'success');
  openBackupModal();
  setTimeout(() => { if (document.getElementById('ai-briefing-card')) aibShowIdle(); }, 400);
}
function closeBackupModal() {
  document.getElementById('backup-modal').style.display = 'none';
  var scrollY = parseInt(document.body.dataset.scrollY || '0', 10);
  document.body.classList.remove('modal-open');
  document.body.style.top = '';
  window.scrollTo(0, scrollY);
}

function openSyncModal() {
  if (typeof uhRefreshUI === 'function') uhRefreshUI();
  var modal = document.getElementById('sync-modal');
  modal.style.display = 'flex';
  var scrollY = window.scrollY || window.pageYOffset;
  document.body.dataset.scrollY = scrollY;
  document.body.style.top = '-' + scrollY + 'px';
  document.body.classList.add('modal-open');
}

function closeSyncModal() {
  document.getElementById('sync-modal').style.display = 'none';
  var scrollY = parseInt(document.body.dataset.scrollY || '0', 10);
  document.body.classList.remove('modal-open');
  document.body.style.top = '';
  window.scrollTo(0, scrollY);
}

function doBackup() {
  const data = { _version: 1, _ts: new Date().toISOString(), keys: {} };
  BACKUP_KEYS.forEach(k => {
    const v = localStorage.getItem(k);
    if (v !== null) data.keys[k] = v;
  });
  const json = JSON.stringify(data, null, 2);
  const blob = new Blob([json], { type: 'application/json' });
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  const d = new Date();
  a.download = `family-portal-backup-${d.getFullYear()}${String(d.getMonth()+1).padStart(2,'0')}${String(d.getDate()).padStart(2,'0')}.json`;
  a.click();
  const ts = d.toLocaleString('en-IN', {day:'numeric',month:'short',year:'numeric',hour:'2-digit',minute:'2-digit'});
  localStorage.setItem('fp_backup_ts', ts);
  document.getElementById('backup-last-ts').textContent = 'Last backup: ' + ts;
  document.getElementById('snav-backup-ts').textContent = 'Backed up: ' + ts;
  showToast('✅ Backup downloaded — ' + Object.keys(data.keys).length + ' items saved');
}

function doRestore(input) {
  const file = input.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = function(e) {
    try {
      const data = JSON.parse(e.target.result);
      if (!data.keys || typeof data.keys !== 'object') { showToast('❌ Invalid backup file'); return; }
      let count = 0;
      Object.entries(data.keys).forEach(([k, v]) => {
        localStorage.setItem(k, v);
        count++;
      });
      const ts = new Date().toLocaleString('en-IN', {day:'numeric',month:'short',year:'numeric',hour:'2-digit',minute:'2-digit'});
      localStorage.setItem('fp_backup_ts', ts);
      showToast('✅ Restored ' + count + ' items — reloading…');
      setTimeout(() => location.reload(), 1200);
    } catch(err) { showToast('❌ Could not read backup file'); }
  };
  reader.readAsText(file);
  input.value = '';
}

// Update sidebar timestamp on load
(function() {
  const ts = localStorage.getItem('fp_backup_ts');
  if (ts) {
    const el = document.getElementById('snav-backup-ts');
    if (el) el.textContent = 'Backed up: ' + ts;
  }
})();

// ═══════════════════════════════════════


// ═══════════════════════════════════════════════════════
// UI IMPROVEMENT 1 — HAPTIC FEEDBACK HELPER
// ═══════════════════════════════════════════════════════
function haptic(type = 'light') {
  if (!navigator.vibrate) return;
  const patterns = { light: [10], medium: [20], heavy: [40], success: [10,50,10], error: [80,40,80] };
  navigator.vibrate(patterns[type] || [10]);
}

// ═══════════════════════════════════════════════════════
// UI IMPROVEMENT 2 — ANIMATED COUNT-UP
// ═══════════════════════════════════════════════════════
function animateCountUp(el, target, duration = 900, suffix = '') {
  if (!el) return;
  const start = 0;
  const startTime = performance.now();
  function update(now) {
    const elapsed = now - startTime;
    const progress = Math.min(elapsed / duration, 1);
    // Ease out cubic
    const eased = 1 - Math.pow(1 - progress, 3);
    const current = Math.round(start + (target - start) * eased);
    el.textContent = current + suffix;
    if (progress < 1) requestAnimationFrame(update);
    else el.textContent = target + suffix;
  }
  requestAnimationFrame(update);
}

// Run count-up on stat cards when dashboard becomes visible
function runDashboardCountUps() {
  // Stat numbers with data-target attributes
  document.querySelectorAll('[data-countup]').forEach(el => {
    const target = parseFloat(el.getAttribute('data-countup'));
    const suffix = el.getAttribute('data-suffix') || '';
    if (!isNaN(target)) animateCountUp(el, target, 900, suffix);
  });
}

// ═══════════════════════════════════════════════════════
// ═══════════════════════════════════════════════════════
// AI FLOATING PANEL
// ═══════════════════════════════════════════════════════
let aiPanelOpen = false;
let aiPanelBusy = false;
let aiPanelHistory = [];
var _aiGreetedToday = '';
var _aiWeeklyRecapDay = -1;
var _tlMonthOffset = 0; // 0=current month, 1=next, -1=prev

/* Chip data — NO apostrophes in strings to avoid HTML attribute breakage */
var AI_CHIPS = {
  dashboard: [
    ["skip", "Can Josritha skip classes today?"],
    ["predict", "Predict Josritha attendance for each subject by semester end and tell me which subjects are at risk of being barred"],
    ["report", "Give Josritha full attendance risk report"],
    ["docs", "Which family documents are expiring soon?"]
  ],
  members: [
    ["skip", "Can Josritha skip classes today?"],
    ["tt", "Show today timetable for Josritha"],
    ["att", "Give Josritha full attendance summary with safe or risk status per subject"],
    ["miss", "For each subject how many more classes can Josritha miss before 75 percent?"]
  ],
  calendar: [
    ["events", "What important events are coming up for the family?"],
    ["tip", "Give a useful tip or reminder for the family this week"]
  ],
  expiry: [
    ["exp", "Which documents or policies are expiring soon and what should be done?"],
    ["ins", "Summarize all family insurance policies and their status"]
  ],
  health: [
    ["hlth", "Give a health records summary for the family"],
    ["appt", "Are there any health appointments or checkups due?"]
  ]
};

var AI_CHIP_LABELS = {
  skip: "🏃 Can she skip today?",
  predict: "🔮 Predict semester end",
  report: "📊 Attendance risk",
  docs: "📄 Expiring documents",
  brief: "🌤️ Family briefing",
  tt: "📅 Today timetable",
  att: "📊 Attendance summary",
  miss: "🎯 How many can she miss?",
  events: "📅 Events coming up?",
  tip: "💡 Family tip",
  exp: "⚠️ What is expiring?",
  ins: "🏥 Insurance summary",
  hlth: "🏥 Health summary",
  appt: "💊 Appointments due?"
};

/* Store chip questions by index so onclick just passes an index — no string in attribute */
var _aiChipQuestions = [];

/* ════════════════════════════════════════════════
   AI PANEL — SMART GREETING + WEEKLY RECAP + FESTIVAL
════════════════════════════════════════════════ */
var INDIAN_FESTIVALS = [
  { date:'03-14', name:'Ugadi',        emoji:'\uD83C\uDF3A', sub:'Telugu New Year' },
  { date:'03-25', name:'Holi',         emoji:'\uD83C\uDF08', sub:'Festival of Colors' },
  { date:'04-14', name:'Ambedkar Jayanti', emoji:'\uD83C\uDDEE\uD83C\uDDF3', sub:'National Holiday' },
  { date:'04-19', name:'Good Friday',  emoji:'\u271D\uFE0F',  sub:'Public Holiday' },
  { date:'08-15', name:'Independence Day', emoji:'\uD83C\uDDEE\uD83C\uDDF3', sub:'National Holiday' },
  { date:'08-26', name:'Janmashtami', emoji:'\uD83D\uDC2E', sub:'Lord Krishna Birthday' },
  { date:'09-07', name:'Ganesh Chaturthi', emoji:'\uD83D\uDC18', sub:'10-day festival begins' },
  { date:'10-02', name:'Gandhi Jayanti', emoji:'\uD83C\uDDEE\uD83C\uDDF3', sub:'National Holiday' },
  { date:'10-12', name:'Navratri begins', emoji:'\uD83D\uDCA5', sub:'9-night festival' },
  { date:'10-20', name:'Dussehra',     emoji:'\uD83C\uDF1F', sub:'Victory of Good over Evil' },
  { date:'11-01', name:'Diwali',       emoji:'\uD83E\uDE94', sub:'Festival of Lights' },
  { date:'11-15', name:'Karthika Pournami', emoji:'\uD83D\uDD6F\uFE0F', sub:'Telugu festival' },
  { date:'12-25', name:'Christmas',   emoji:'\uD83C\uDF84', sub:'Public Holiday' },
  { date:'01-14', name:'Sankranti',   emoji:'\uD83E\uDD85', sub:'Telugu harvest festival' },
  { date:'01-26', name:'Republic Day', emoji:'\uD83C\uDDEE\uD83C\uDDF3', sub:'National Holiday' }
];

function aiGetFestival() {
  var now = new Date();
  var mmdd = String(now.getMonth()+1).padStart(2,'0') + '-' + String(now.getDate()).padStart(2,'0');
  var tomorrow = new Date(now); tomorrow.setDate(now.getDate()+1);
  var tmmdd = String(tomorrow.getMonth()+1).padStart(2,'0') + '-' + String(tomorrow.getDate()).padStart(2,'0');
  var found = INDIAN_FESTIVALS.find(function(f){ return f.date===mmdd; });
  var foundTomorrow = !found ? INDIAN_FESTIVALS.find(function(f){ return f.date===tmmdd; }) : null;
  if (found) return { festival: found, when: 'today' };
  if (foundTomorrow) return { festival: foundTomorrow, when: 'tomorrow' };
  return null;
}

function aiPanelAutoGreet() {
  var todayKey = new Date().toISOString().slice(0,10);
  if (_aiGreetedToday === todayKey) return;
  _aiGreetedToday = todayKey;

  var msgs = document.getElementById('ai-panel-messages');
  if (!msgs) return;

  var hour = new Date().getHours();
  var dow = new Date().getDay(); // 0=Sun
  var greet = hour < 12 ? 'Good morning' : hour < 17 ? 'Good afternoon' : 'Good evening';
  var names = ['Rajasekhar','Vasundhara','Josritha','Jeevan'];
  var name = names[Math.floor(Math.random()*2)]; // Rajasekhar or Vasundhara

  // Build banner HTML
  var bannerHtml = '';

  // Festival banner
  var fest = aiGetFestival();
  if (fest) {
    bannerHtml += '<div class="ai-festival-banner">'
      + '<div class="ai-festival-emoji">' + fest.festival.emoji + '</div>'
      + '<div class="ai-festival-info">'
      + '<div class="ai-festival-name">' + fest.festival.name + ' ' + (fest.when==='today'?'Today!':'Tomorrow') + '</div>'
      + '<div class="ai-festival-sub">' + fest.festival.sub + '</div>'
      + '</div></div>';
  }

  // Quick attendance alert
  var attRaw = localStorage.getItem('fp_attendance_synced');
  var attAlert = '';
  if (attRaw) {
    try {
      var att = JSON.parse(attRaw);
      var critical = att.filter(function(a){ return Math.round(a.present/a.total*100) < 70; });
      var risk = att.filter(function(a){ var p=Math.round(a.present/a.total*100); return p>=70&&p<75; });
      if (critical.length) attAlert = '\uD83D\uDEA8 ' + critical.length + ' subject' + (critical.length>1?'s':'') + ' CRITICAL (<70%)';
      else if (risk.length) attAlert = '\u26A0\uFE0F ' + risk.length + ' subject' + (risk.length>1?'s':'') + ' at risk (70\u201374%)';
    } catch(e) {}
  }

  // Expiry alert
  var expiryAlert = '';
  if (typeof EXPIRY !== 'undefined' && typeof daysUntil === 'function') {
    var urgent = EXPIRY.filter(function(e){ return daysUntil(e.date)>=0 && daysUntil(e.date)<=30; });
    if (urgent.length) expiryAlert = '\uD83D\uDCCB ' + urgent.length + ' document' + (urgent.length>1?'s':'') + ' expiring within 30 days';
  }

  var greetMsg = greet + ', ' + name + '! \uD83D\uDE4F\n';
  if (attAlert) greetMsg += attAlert + '\n';
  if (expiryAlert) greetMsg += expiryAlert + '\n';
  greetMsg += 'How can I help the family today?';

  // Weekly recap on Sunday
  if (dow === 0) {
    var weekKey = todayKey.slice(0,7) + '-W' + Math.ceil(new Date().getDate()/7);
    if (_aiWeeklyRecapDay !== weekKey) {
      _aiWeeklyRecapDay = weekKey;
      bannerHtml += '<div class="ai-recap-banner">'
        + '<div class="ai-recap-title">\uD83D\uDCC5 Weekly Family Recap</div>'
        + '<div class="ai-recap-body" id="ai-recap-body">Loading Sunday recap\u2026</div>'
        + '</div>';
      setTimeout(aiLoadWeeklyRecap, 800);
    }
  }

  if (bannerHtml) {
    var bannerDiv = document.createElement('div');
    bannerDiv.innerHTML = bannerHtml;
    var welcome = msgs.querySelector('.ai-panel-welcome');
    if (welcome) msgs.insertBefore(bannerDiv, welcome);
    else msgs.insertBefore(bannerDiv, msgs.firstChild);
  }

  aiPanelAppendMsg('ai', greetMsg.replace(/\n/g,'<br>'));
}

async function aiLoadWeeklyRecap() {
  var el = document.getElementById('ai-recap-body');
  if (!el) return;
  var key = typeof groqGetKey === 'function' ? groqGetKey() : '';
  if (!key) { if (el) el.textContent = 'Add Groq API key to get weekly recap.'; return; }

  var attRaw = localStorage.getItem('fp_attendance_synced');
  var attBrief = 'No attendance data.';
  if (attRaw) {
    try {
      var att = JSON.parse(attRaw);
      var risky = att.filter(function(a){ return Math.round(a.present/a.total*100)<75; });
      attBrief = risky.length
        ? risky.map(function(a){ return a.subject + ' ' + Math.round(a.present/a.total*100) + '%'; }).join(', ')
        : 'All subjects above 75%.';
    } catch(e) {}
  }

  var prompt = 'Generate a brief warm Sunday weekly recap for the Duggireddy family (Rajasekhar-software engineer, Vasundhara-homemaker, Josritha-KL University student, Jeevan-14yr school). '
    + 'Josritha attendance status: ' + attBrief + '. '
    + 'Give 4-5 bullet points: achievements, reminders, motivation for next week. Telugu family context, warm tone, 2 lines max per point. No markdown.';

  try {
    var endpoint = typeof GROQ_ENDPOINT !== 'undefined' ? GROQ_ENDPOINT : 'https://api.groq.com/openai/v1/chat/completions';
    var model = typeof GROQ_MODEL !== 'undefined' ? GROQ_MODEL : 'llama-3.1-8b-instant';
    var resp = await fetch(endpoint, {
      method:'POST',
      headers:{'Content-Type':'application/json','Authorization':'Bearer '+key},
      body: JSON.stringify({model:model, max_tokens:300, temperature:0.7,
        messages:[{role:'user',content:prompt}]})
    });
    var data = await resp.json();
    var text = data.choices&&data.choices[0]?data.choices[0].message.content:'';
    if (el) el.innerHTML = text.split('\n').filter(function(l){return l.trim();}).map(function(l){
      return '<div style="margin-bottom:5px;">' + l.replace(/^[\-\*\u2022]\s*/,'') + '</div>';
    }).join('');
    localStorage.setItem('fp_weekly_recap', JSON.stringify({date:new Date().toISOString().slice(0,10), text:text}));
  } catch(e) {
    if (el) el.textContent = 'Could not load recap.';
  }
}

/* Attendance Prediction — injected into buildAICWSystem */
function buildAttPredictionContext() {
  var attRaw = localStorage.getItem('fp_attendance_synced');
  if (!attRaw) return '';
  try {
    var att = JSON.parse(attRaw);
    // Estimate remaining classes: assume 60 total per semester, remaining = 60 - total
    var SEMESTER_TOTAL = 60;
    var lines = att.map(function(a) {
      var pct = Math.round(a.present/a.total*100);
      var remaining = Math.max(0, SEMESTER_TOTAL - a.total);
      var neededMore = Math.max(0, Math.ceil(0.75*(a.total+remaining)) - a.present);
      var projectedIfAllAttended = Math.round((a.present+remaining)/(a.total+remaining)*100);
      var projectedIfNoneAttended = Math.round(a.present/(a.total+remaining)*100);
      return a.subject + ' (' + a.code + '/' + a.type + '): now=' + pct + '%, ~' + remaining
        + ' classes left, if all attended=' + projectedIfAllAttended + '%, if none=' + projectedIfNoneAttended
        + '%, still needs ' + neededMore + ' to reach 75%';
    });
    return '\n\nATTENDANCE PREDICTION DATA (est. ' + SEMESTER_TOTAL + ' total/sem):\n' + lines.join('\n');
  } catch(e) { return ''; }
}

function tlNavMonth(dir) {
  _tlMonthOffset += dir;
  if (_tlMonthOffset < -3) _tlMonthOffset = -3;
  if (_tlMonthOffset > 3)  _tlMonthOffset = 3;
  // Re-render only the timeline portion, not full widget refresh
  if (typeof renderTimeline === 'function') renderTimeline();
  else if (typeof initWidgetDynamic === 'function') initWidgetDynamic();
  if (typeof haptic === 'function') haptic('light');
}

function buildCollapsibleWidget(title, innerHtml, wid, collapsed) {
  var state = collapsed ? ' collapsed' : '';
  return '<div class="w-card w-card-collapsible' + state + '" data-wid="' + wid + '">'
    + '<div style="display:flex;align-items:center;justify-content:space-between;cursor:pointer;" onclick="wToggle(this)">'
    + '<div class="w-hdr" style="margin:0;pointer-events:none;">' + title + '</div>'
    + '<div class="w-collapse-btn" style="pointer-events:none;">&#x203A;</div>'
    + '</div>'
    + '<div class="w-body"><div style="height:10px;"></div>' + innerHtml + '</div>'
    + '</div>';
}

function wToggle(btn) {
  var card = btn.closest('.w-card-collapsible');
  if (!card) return;
  card.classList.toggle('collapsed');
  // Persist per-widget collapse state
  var wid = card.getAttribute('data-wid');
  if (wid) {
    var collapsed = card.classList.contains('collapsed');
    try {
      var states = JSON.parse(localStorage.getItem('fp_widget_collapse') || '{}');
      states[wid] = collapsed;
      localStorage.setItem('fp_widget_collapse', JSON.stringify(states));
    } catch(e) {}
  }
  if (typeof haptic === 'function') haptic('light');
}

function restoreWidgetCollapse() {
  // DEFAULT collapsed: grocery, vehicle, photos, ai_briefing2, actions, family
  var DEFAULTS_COLLAPSED = { grocery:true, vehicle:true, photos:true, ai_briefing2:true, actions:true, family:true };
  // ALWAYS_COLLAPSED: these reset to collapsed on every page load regardless of user preference
  var ALWAYS_COLLAPSED = { vehicle:true };
  try {
    var states = JSON.parse(localStorage.getItem('fp_widget_collapse') || '{}');
    var merged = Object.assign({}, DEFAULTS_COLLAPSED, states);
    // Override always-collapsed widgets
    Object.keys(ALWAYS_COLLAPSED).forEach(function(k) { merged[k] = true; });
    document.querySelectorAll('.w-card-collapsible').forEach(function(card) {
      var wid = card.getAttribute('data-wid');
      if (wid && merged[wid] === true)  card.classList.add('collapsed');
      if (wid && merged[wid] === false) card.classList.remove('collapsed');
    });
  } catch(e) {}
}

function toggleAIPanel() {
  /* Close FAB menu if open */
  if (typeof fabOpen !== 'undefined' && fabOpen) {
    var fmenu = document.getElementById('fab-menu');
    var fbtn  = document.getElementById('fab-btn');
    fabOpen = false;
    if (fmenu) fmenu.classList.add('hidden');
    if (fbtn)  { fbtn.textContent = '\uFF0B'; fbtn.style.background = ''; }
  }
  aiPanelOpen = !aiPanelOpen;
  var panel    = document.getElementById('ai-panel');
  var backdrop = document.getElementById('ai-panel-backdrop');
  var fab      = document.getElementById('ai-fab');
  var fabIcon  = document.getElementById('ai-fab-icon');
  if (!panel || !backdrop || !fab || !fabIcon) return;
  if (aiPanelOpen) {
    panel.classList.remove('ai-panel-closed');
    panel.classList.add('ai-panel-open');
    backdrop.classList.add('visible');
    fab.classList.add('panel-open');
    document.body.classList.add('ai-panel-open');
    fabIcon.textContent = '\u2715';
    aiPanelUpdateChips();
    aiPanelUpdateStatus();
    aiPanelAutoGreet();
    // Close + menu if open (don't hide the button itself — it's on the left, no overlap)
    var plusMenu = document.getElementById('fab-menu');
    if (plusMenu && fabOpen) { plusMenu.classList.add('hidden'); fabOpen=false; }
    if (typeof haptic === 'function') haptic('medium');
  } else {
    panel.classList.add('ai-panel-closed');
    panel.classList.remove('ai-panel-open');
    backdrop.classList.remove('visible');
    fab.classList.remove('panel-open');
    document.body.classList.remove('ai-panel-open');
    fabIcon.textContent = '\u2726';
    // Nothing to restore — fab-btn is on left, always visible
    if (typeof haptic === 'function') haptic('light');
  }
}

function aiPanelUpdateStatus() {
  var dot = document.getElementById('ai-panel-dot');
  var txt = document.getElementById('ai-panel-status-text');
  var hasKey = !!(typeof groqGetKey === 'function' && groqGetKey());
  if (dot) dot.className = hasKey ? '' : 'offline';
  if (txt) txt.textContent = hasKey ? 'Groq LLaMA 3.1 — Ready' : 'No API key — add in Settings';
}

function aiPanelUpdateChips() {
  var container = document.getElementById('ai-panel-chips');
  if (!container) return;
  var page = typeof currentPage !== 'undefined' ? currentPage : 'dashboard';
  var chips = AI_CHIPS[page] || AI_CHIPS.dashboard;
  _aiChipQuestions = [];
  var html = '';
  for (var i = 0; i < chips.length; i++) {
    _aiChipQuestions.push(chips[i][1]);
    html += '<div class="ai-pc" onclick="aiPanelChipClick(' + i + ')">' + AI_CHIP_LABELS[chips[i][0]] + '</div>';
  }
  container.innerHTML = html;
}

function aiPanelChipClick(idx) {
  var q = _aiChipQuestions[idx];
  if (!q) return;
  var input = document.getElementById('ai-panel-input');
  if (input) { input.value = q; aiPanelAutoResize(input); }
  aiPanelSend();
}

function aiPanelKeyDown(e) {
  if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); aiPanelSend(); }
}

function aiPanelAutoResize(el) {
  el.style.height = 'auto';
  el.style.height = Math.min(el.scrollHeight, 90) + 'px';
}

function aiPanelAppendMsg(role, html) {
  var container = document.getElementById('ai-panel-messages');
  if (!container) return;
  var welcome = container.querySelector('.ai-panel-welcome');
  if (welcome) welcome.remove();
  var div = document.createElement('div');
  div.className = 'ai-pm ' + role;
  if (role === 'ai') {
    div.innerHTML = '<div class="ai-pm-av">\u2726</div><div class="ai-pm-bubble">' + html + '</div>';
  } else {
    div.innerHTML = '<div class="ai-pm-bubble">' + html + '</div>';
  }
  container.appendChild(div);
  container.scrollTop = container.scrollHeight;
}

function aiPanelShowTyping() {
  var container = document.getElementById('ai-panel-messages');
  if (!container) return;
  var welcome = container.querySelector('.ai-panel-welcome');
  if (welcome) welcome.remove();
  var div = document.createElement('div');
  div.className = 'ai-pm ai';
  div.id = 'ai-panel-typing';
  div.innerHTML = '<div class="ai-pm-av">\u2726</div><div class="ai-pm-bubble"><div class="ai-typing-dots"><div class="ai-typing-dot"></div><div class="ai-typing-dot"></div><div class="ai-typing-dot"></div></div></div>';
  container.appendChild(div);
  container.scrollTop = container.scrollHeight;
  var fab = document.getElementById('ai-fab');
  if (fab) fab.classList.add('thinking');
}

function aiPanelRemoveTyping() {
  var el = document.getElementById('ai-panel-typing');
  if (el) el.remove();
  var fab = document.getElementById('ai-fab');
  if (fab) fab.classList.remove('thinking');
}

function aiPanelFormatResponse(text) {
  if (!text) return '';
  /* If AI returned HTML cards already — render directly */
  if (text.indexOf('<div') !== -1) return text;
  /* Convert markdown bold and bullet lines */
  var parts = text.split('**');
  var bold = '';
  for (var i = 0; i < parts.length; i++) {
    bold += (i % 2 === 1) ? '<strong>' + parts[i] + '</strong>' : parts[i];
  }
  var lines = bold.split('\n');
  var result = [];
  for (var j = 0; j < lines.length; j++) {
    var line = lines[j];
    if (line.indexOf('- ') === 0 || line.indexOf('\u2022 ') === 0) {
      result.push('<div style="padding:4px 0 4px 14px;border-left:2px solid rgba(124,58,237,.5);margin:4px 0;line-height:1.6;">' + line.substring(2) + '</div>');
    } else if (line === '') {
      result.push('<div style="height:6px;"></div>');
    } else {
      result.push(line);
    }
  }
  return result.join('<br>');
}

function aiPanelClear() {
  aiPanelHistory = [];
  var container = document.getElementById('ai-panel-messages');
  if (container) {
    container.innerHTML = '<div class="ai-panel-welcome"><div class="ai-pw-icon">\u2726</div><div class="ai-pw-title">Chat cleared</div><div class="ai-pw-sub">Ask me anything about the family.</div></div>';
  }
  if (typeof haptic === 'function') haptic('light');
}

async function aiPanelSend() {
  if (aiPanelBusy) return;
  var input   = document.getElementById('ai-panel-input');
  var sendBtn = document.getElementById('ai-panel-send');
  if (!input) return;
  var text = input.value.trim();
  if (!text) return;

  input.value = '';
  input.style.height = 'auto';
  aiPanelBusy = true;
  if (sendBtn) sendBtn.disabled = true;

  aiPanelAppendMsg('user', text);
  aiPanelHistory.push({role: 'user', content: text});
  aiPanelShowTyping();

  try {
    var key = (typeof groqGetKey === 'function') ? groqGetKey() : '';
    if (!key) {
      aiPanelRemoveTyping();
      aiPanelAppendMsg('ai', '\uD83D\uDD11 No Groq API key found. Add it via the Backup button \u2192 AI Key section.');
      aiPanelBusy = false;
      if (sendBtn) sendBtn.disabled = false;
      return;
    }
    var sysPrompt = (typeof buildAICWSystem === 'function') ? buildAICWSystem() : 'You are a helpful family assistant.';
    var endpoint  = (typeof GROQ_ENDPOINT !== 'undefined') ? GROQ_ENDPOINT : 'https://api.groq.com/openai/v1/chat/completions';
    var model     = (typeof GROQ_MODEL    !== 'undefined') ? GROQ_MODEL    : 'llama-3.1-8b-instant';

    var resp = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + key
      },
      body: JSON.stringify({
        model: model,
        max_tokens: 900,
        temperature: 0.7,
        messages: [{role: 'system', content: sysPrompt}].concat(aiPanelHistory)
      })
    });
    var data = await resp.json();
    var reply = (data.choices && data.choices[0] && data.choices[0].message)
      ? data.choices[0].message.content
      : "I could not get a response. Please try again.";
    aiPanelRemoveTyping();
    aiPanelAppendMsg('ai', aiPanelFormatResponse(reply.trim()));
    aiPanelHistory.push({role: 'assistant', content: reply.trim()});
    if (aiPanelHistory.length > 20) aiPanelHistory = aiPanelHistory.slice(-20);
  } catch(err) {
    aiPanelRemoveTyping();
    aiPanelAppendMsg('ai', 'Connection error: ' + (err.message || 'unknown') + '. Check your internet and try again.');
  }

  aiPanelBusy = false;
  if (sendBtn) sendBtn.disabled = false;
}

// UI IMPROVEMENT 3 — FAB BUTTON
// ═══════════════════════════════════════════════════════
let fabOpen = false;

function toggleFab() {
  haptic('medium');
  // Close AI panel if open
  if (aiPanelOpen) toggleAIPanel();
  fabOpen = !fabOpen;
  const menu = document.getElementById('fab-menu');
  const btn = document.getElementById('fab-btn');
  if (fabOpen) {
    menu.classList.remove('hidden');
    btn.textContent = '✕';
    btn.style.background = 'linear-gradient(135deg,#ff4f4f,#cc1a1a)';
  } else {
    menu.classList.add('hidden');
    btn.textContent = '＋';
    btn.style.background = '';
  }
}

function fabAction(action) {
  haptic('light');
  toggleFab();
  if (action === 'upload') {
    openSyncModal();
  } else if (action === 'event') {
    goPage('calendar');
    setTimeout(() => { if(typeof openCalSheet === 'function') openCalSheet(); }, 200);
  } else if (action === 'search') {
    openCommandPalette();
  } else if (action === 'backup') {
    openBackupModal();
  }
}

// Update FAB visibility per page — hide on search/dashboard
function updateFabVisibility(page) {
  const fab = document.getElementById('fab-btn');
  const menu = document.getElementById('fab-menu');
  if (!fab) return;
  if (page === 'search') {
    fab.classList.add('hidden');
  } else {
    fab.classList.remove('hidden');
  }
  // Close menu on page change
  if (fabOpen) toggleFab();
}

// ═══════════════════════════════════════════════════════
// UI IMPROVEMENT 4 — COMMAND PALETTE
// ═══════════════════════════════════════════════════════
let cmdSelectedIdx = -1;

const CMD_PAGES = [
  { icon: '🏠', title: 'Dashboard', sub: 'Home overview', action: () => goPage('dashboard'), badge: 'Page' },
  { icon: '👨‍👩‍👧‍👦', title: 'Members', sub: 'Family profiles & documents', action: () => goPage('members'), badge: 'Page' },
  { icon: '📁', title: 'Documents', sub: 'All family records', action: () => goPage('documents'), badge: 'Page' },
  { icon: '⏰', title: 'Expiry Tracker', sub: 'Passports, insurance, visas', action: () => goPage('expiry'), badge: 'Page' },
  { icon: '📅', title: 'Calendar', sub: 'Family events & reminders', action: () => goPage('calendar'), badge: 'Page' },
  { icon: '💊', title: 'Health', sub: 'Medical records & appointments', action: () => goPage('health'), badge: 'Page' },
  { icon: '🔍', title: 'Search', sub: 'Find documents & IDs', action: () => goPage('search'), badge: 'Page' },
  { icon: '🌙', title: 'Toggle Theme', sub: 'Switch dark / light mode', action: () => toggleTheme(), badge: 'Action' },
  { icon: '💾', title: 'Backup Data', sub: 'Download backup JSON', action: () => openBackupModal(), badge: 'Action' },
  { icon: '➕', title: 'Add Calendar Event', sub: 'Create a new family event', action: () => { goPage('calendar'); setTimeout(() => { if(typeof openCalSheet === 'function') openCalSheet(); }, 200); }, badge: 'Action' },
];

// Build member entries from MEMBERS data
function getCmdEntries() {
  const entries = [...CMD_PAGES];
  if (typeof MEMBERS !== 'undefined') {
    Object.values(MEMBERS).forEach(m => {
      entries.push({
        icon: '👤', title: m.name, sub: m.role + ' · Tap to view profile',
        action: () => { goPage('members'); setTimeout(() => showMemberDetail(m.id || Object.keys(MEMBERS).find(k=>MEMBERS[k]===m)), 150); },
        badge: 'Member'
      });
    });
  }
  return entries;
}

function openCommandPalette() {
  const overlay = document.getElementById('cmd-overlay');
  const input = document.getElementById('cmd-input');
  overlay.classList.add('open');
  input.value = '';
  cmdSearch('');
  setTimeout(() => input.focus(), 120);
  haptic('light');
}

function closeCommandPalette() {
  document.getElementById('cmd-overlay').classList.remove('open');
  cmdSelectedIdx = -1;
}

function cmdSearch(query) {
  const results = document.getElementById('cmd-results');
  const q = query.trim().toLowerCase();
  const entries = getCmdEntries();
  const filtered = q
    ? entries.filter(e => e.title.toLowerCase().includes(q) || e.sub.toLowerCase().includes(q) || (e.badge||'').toLowerCase().includes(q))
    : entries.slice(0, 12);

  if (filtered.length === 0) {
    results.innerHTML = `<div class="cmd-empty">😕 No results for "<strong>${query}</strong>"</div>`;
    return;
  }

  // Group by badge type
  const groups = {};
  filtered.forEach(e => {
    const g = e.badge || 'Other';
    if (!groups[g]) groups[g] = [];
    groups[g].push(e);
  });

  let html = '';
  let globalIdx = 0;
  Object.entries(groups).forEach(([group, items]) => {
    if (!q) html += `<div class="cmd-section-label">${group}s</div>`;
    items.forEach(item => {
      html += `
        <div class="cmd-result-item" data-idx="${globalIdx}" onclick="cmdExecute(${globalIdx})">
          <div class="cmd-result-icon">${item.icon}</div>
          <div class="cmd-result-body">
            <div class="cmd-result-title">${item.title}</div>
            <div class="cmd-result-sub">${item.sub}</div>
          </div>
          <div class="cmd-result-badge">${item.badge || ''}</div>
        </div>`;
      globalIdx++;
    });
  });
  results.innerHTML = html;
  // Store filtered for keyboard nav
  results._filtered = filtered;
  cmdSelectedIdx = -1;
}

function cmdExecute(idx) {
  const results = document.getElementById('cmd-results');
  const filtered = results._filtered;
  if (!filtered || !filtered[idx]) return;
  closeCommandPalette();
  haptic('medium');
  setTimeout(() => filtered[idx].action(), 80);
}

// Keyboard navigation
document.addEventListener('keydown', e => {
  // ⌘K or Ctrl+K to open
  if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
    e.preventDefault();
    const overlay = document.getElementById('cmd-overlay');
    if (overlay.classList.contains('open')) closeCommandPalette();
    else openCommandPalette();
    return;
  }
  const overlay = document.getElementById('cmd-overlay');
  if (!overlay.classList.contains('open')) return;
  const results = document.getElementById('cmd-results');
  const items = results.querySelectorAll('.cmd-result-item');
  if (e.key === 'Escape') { closeCommandPalette(); return; }
  if (e.key === 'ArrowDown') {
    e.preventDefault();
    cmdSelectedIdx = Math.min(cmdSelectedIdx + 1, items.length - 1);
  } else if (e.key === 'ArrowUp') {
    e.preventDefault();
    cmdSelectedIdx = Math.max(cmdSelectedIdx - 1, 0);
  } else if (e.key === 'Enter') {
    e.preventDefault();
    if (cmdSelectedIdx >= 0) cmdExecute(cmdSelectedIdx);
    else if (items.length > 0) cmdExecute(0);
    return;
  }
  items.forEach((el, i) => el.classList.toggle('selected', i === cmdSelectedIdx));
  if (items[cmdSelectedIdx]) items[cmdSelectedIdx].scrollIntoView({ block: 'nearest' });
});



// ═══════════════════════════════════════════════════════
// UI IMPROVEMENT 6 — RIPPLE ON PRESSABLE ELEMENTS
// ═══════════════════════════════════════════════════════
document.addEventListener('pointerdown', e => {
  const el = e.target.closest('.pressable');
  if (!el) return;
  const rect = el.getBoundingClientRect();
  const x = ((e.clientX - rect.left) / rect.width) * 100;
  const y = ((e.clientY - rect.top) / rect.height) * 100;
  el.style.setProperty('--ripple-x', x + '%');
  el.style.setProperty('--ripple-y', y + '%');
  haptic('light');
});

// ═══════════════════════════════════════════════════════
// UI IMPROVEMENT 7 — SKELETON LOADERS
// ═══════════════════════════════════════════════════════
function showSkeletonLoader(containerId, count = 3) {
  const container = document.getElementById(containerId);
  if (!container) return;
  let html = '';
  for (let i = 0; i < count; i++) {
    html += `
      <div class="skeleton-card">
        <div class="skel-row">
          <div class="skeleton skel-avatar"></div>
          <div class="skel-body">
            <div class="skeleton skel-line w-70"></div>
            <div class="skeleton skel-line w-50"></div>
          </div>
        </div>
        <div class="skeleton skel-line w-90"></div>
        <div class="skeleton skel-line w-30"></div>
      </div>`;
  }
  container.innerHTML = html;
}

// ═══════════════════════════════════════════════════════
// UI IMPROVEMENT 8 — ENHANCED EMPTY STATE HELPER
// ═══════════════════════════════════════════════════════
function renderEmptyState(config) {
  return `
    <div class="empty-state">
      <div class="empty-state-icon">${config.icon || '📭'}</div>
      <div class="empty-state-title">${config.title || 'Nothing here yet'}</div>
      <div class="empty-state-sub">${config.sub || 'Add some items to get started.'}</div>
      ${config.cta ? `<button class="empty-state-cta" onclick="${config.ctaAction}">${config.cta}</button>` : ''}
    </div>`;
}

// ═══════════════════════════════════════════════════════
// UI IMPROVEMENT 9 — ENHANCED TOAST WITH ICON + TITLE
// ═══════════════════════════════════════════════════════
// Override showToast to support rich format
const _originalShowToast = window.showToast;
function showToast(msg, type = 'info', subtitle = '') {
  const toast = document.getElementById('toast');
  if (!toast) return;
  const icons = { info: 'ℹ️', success: '✅', error: '❌', warning: '⚠️' };
  const icon = icons[type] || (msg.startsWith('✅') ? '' : msg.startsWith('❌') ? '' : '');
  if (subtitle) {
    toast.innerHTML = `
      <span class="toast-icon">${icon}</span>
      <div class="toast-body">
        <div class="toast-title">${msg}</div>
        <div class="toast-sub">${subtitle}</div>
      </div>`;
  } else {
    toast.innerHTML = `<span style="font-size:16px;">${msg}</span>`;
  }
  toast.classList.add('show');
  clearTimeout(toast._timer);
  toast._timer = setTimeout(() => toast.classList.remove('show'), 3000);
}

// ═══════════════════════════════════════════════════════
// UI IMPROVEMENT 10 — PAGE CHANGE HOOK
// ═══════════════════════════════════════════════════════
const _origGoPage = goPage;
// Patch goPage to add haptic + FAB update + count-up trigger
window.goPage = function(page) {
  haptic('light');
  _origGoPage(page);
  updateFabVisibility(page);
  if (page === 'dashboard') setTimeout(runDashboardCountUps, 400);
};

// Keyboard shortcut hint in topbar on desktop
(function addCmdKHint() {
  const tbRight = document.querySelector('.tb-right');
  if (!tbRight || window.innerWidth < 768) return;
  const hint = document.createElement('div');
  hint.style.cssText = 'display:flex;align-items:center;gap:5px;font-family:"DM Mono",monospace;font-size:10px;color:var(--text3);background:rgba(255,255,255,.05);border:1px solid rgba(255,255,255,.08);border-radius:7px;padding:5px 10px;cursor:pointer;white-space:nowrap;transition:all .15s;';
  hint.innerHTML = '⌘K <span style="opacity:.7">Search</span>';
  hint.onclick = openCommandPalette;
  hint.onmouseenter = () => hint.style.borderColor = 'rgba(79,127,255,.4)';
  hint.onmouseleave = () => hint.style.borderColor = 'rgba(255,255,255,.08)';
  tbRight.insertBefore(hint, tbRight.firstChild);
})();

// ═══════════════════════════════════════════════════════
// ✨ AI FEATURES — v8
// Uses Groq API (FREE — llama-3.1-8b-instant)
// ═══════════════════════════════════════════════════════

// ── Groq Key Management ───────────────────────────────
const GROQ_KEY_STORAGE = 'fp_groq_key';
const GROQ_MODEL = 'llama-3.1-8b-instant';
const GROQ_ENDPOINT = 'https://api.groq.com/openai/v1/chat/completions';

function groqGetKey() {
  return localStorage.getItem(GROQ_KEY_STORAGE) || '';
}
function groqSaveKey(k) {
  localStorage.setItem(GROQ_KEY_STORAGE, k.trim());
}
function groqClearKey() {
  localStorage.removeItem(GROQ_KEY_STORAGE);
  aibLoaded = false;
  aimwPlan = null;
  aicwHistory = [];
  showToast('🔑 Groq key removed', 'info');
  setTimeout(() => {
    if (document.getElementById('ai-briefing-card')) aiShowKeyPrompt();
  }, 300);
}

// Show key setup prompt inside briefing card
function aiShowKeyPrompt() {
  const textEl = document.getElementById('aib-text');
  if (!textEl) return;
  textEl.innerHTML = `
    <div style="display:flex;flex-direction:column;gap:10px;">
      <div style="font-size:13px;color:var(--text2);line-height:1.5;">
        🔑 Enter your <strong style="color:var(--purple)">free Groq API key</strong> to activate AI features.<br>
        Get one free at <span style="color:var(--blue2);font-family:'DM Mono',monospace;">console.groq.com</span>
      </div>
      <div style="display:flex;gap:8px;">
        <input id="groq-key-input" type="password"
          placeholder="gsk_xxxxxxxxxxxxxxxxxxxx"
          style="flex:1;background:rgba(255,255,255,.06);border:1px solid rgba(167,139,250,.3);border-radius:10px;padding:10px 13px;font-family:'DM Mono',monospace;font-size:12px;color:var(--text);outline:none;"
          onkeydown="if(event.key==='Enter')groqSubmitKey()">
        <div onclick="groqSubmitKey()"
          style="padding:10px 16px;border-radius:10px;background:linear-gradient(135deg,var(--blue),#6366f1);color:#fff;font-size:12px;font-weight:700;cursor:pointer;white-space:nowrap;display:flex;align-items:center;">
          Activate ✓
        </div>
      </div>
    </div>`;
  const tsEl = document.getElementById('aib-ts');
  if (tsEl) tsEl.textContent = 'Key required';
}

function groqSubmitKey() {
  const inp = document.getElementById('groq-key-input');
  if (!inp) return;
  const key = inp.value.trim();
  if (!key.startsWith('gsk_')) {
    inp.style.borderColor = 'var(--red)';
    inp.placeholder = 'Must start with gsk_...';
    return;
  }
  groqSaveKey(key);
  aibLoaded = false;
  showToast('✅ Groq AI activated! Tap briefing to generate.', 'success');
  aibShowIdle();
}

function aiShowKeySetup() {
  const hasKey = !!groqGetKey();
  const textEl = document.getElementById('aib-text');
  if (!textEl) return;
  if (hasKey) {
    const masked = groqGetKey().slice(0,8) + '••••••••••••••••' + groqGetKey().slice(-4);
    textEl.innerHTML = `
      <div style="display:flex;flex-direction:column;gap:10px;">
        <div style="font-size:13px;color:var(--green);font-weight:600;">✅ Groq AI is active</div>
        <div style="font-family:'DM Mono',monospace;font-size:11px;color:var(--text3);background:rgba(255,255,255,.05);padding:8px 12px;border-radius:8px;">${masked}</div>
        <div style="display:flex;gap:8px;">
          <div onclick="aibLoaded=false;aibShowIdle()"
            style="flex:1;padding:9px;border-radius:9px;background:rgba(62,207,142,.12);border:1px solid rgba(62,207,142,.25);color:var(--green);font-size:12px;font-weight:700;cursor:pointer;text-align:center;">
            ✓ Keep & Continue
          </div>
          <div onclick="groqClearKey()"
            style="padding:9px 14px;border-radius:9px;background:rgba(255,79,79,.1);border:1px solid rgba(255,79,79,.25);color:var(--red);font-size:12px;font-weight:700;cursor:pointer;">
            🗑 Remove
          </div>
        </div>
      </div>`;
  } else {
    aiShowKeyPrompt();
  }
}

// ── Shared Family Context ──────────────────────────────
const AI_FAMILY_CONTEXT = {
  name: 'Duggireddy Family',
  location: 'Hyderabad, Telangana, India',
  members: [
    { name:'Rajasekhar', role:'Head of Family · Software Engineer at Dataspeaks, 48M', initials:'RR' },
    { name:'Vasundhara', role:'Spouse · Homemaker, 42F', initials:'VD' },
    { name:'Josritha',   role:'Daughter · B.Tech student at KL University, 19F, CGPA 9.24', initials:'JD' },
    { name:'Jeevan',     role:'Son · Student, 14M', initials:'JV' }
  ],
  expiringSoon: [
    'Property Tax – Flat 403 & Shop G5 (overdue Feb 2026)',
    'Car Insurance – Hyundai i10 (Jun 2026)',
    'Family Health Insurance – ICICI Lombard Floater (Aug 2026)',
    'Individual Health Insurance – Rajasekhar (Aug 2026)',
    'Driving Licence – Rajasekhar (Jan 2027)'
  ]
};

function aiGetDate() {
  const now = new Date();
  return now.toLocaleDateString('en-IN',{weekday:'long',day:'numeric',month:'long',year:'numeric'});
}
function aiGetTime() {
  const now = new Date();
  return now.toLocaleTimeString('en-IN',{hour:'2-digit',minute:'2-digit',hour12:true});
}
function aiGetHour() { return new Date().getHours(); }

// ── Groq API call helper (OpenAI-compatible) ──────────
async function aiCall(systemPrompt, userPrompt, maxTokens=600) {
  const key = groqGetKey();
  if (!key) throw new Error('no_key');
  const resp = await fetch(GROQ_ENDPOINT, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${key}`
    },
    body: JSON.stringify({
      model: GROQ_MODEL,
      max_tokens: maxTokens,
      temperature: 0.7,
      messages: [
        { role: 'system', content: systemPrompt },
        { role: 'user',   content: userPrompt }
      ]
    })
  });
  const data = await resp.json();
  if (!resp.ok) throw new Error(data.error?.message || `HTTP ${resp.status}`);
  return data.choices?.[0]?.message?.content || '';
}

// ── FESTIVAL CHECKER ──────────────────────────────────
function aiCheckFestival() {
  const now = new Date();
  const mm = now.getMonth()+1, dd = now.getDate();
  const festivals = [
    {mm:1,dd:14,emoji:'🪁',name:'Makar Sankranti — Pongal!'},
    {mm:1,dd:26,emoji:'🇮🇳',name:'Republic Day 🇮🇳'},
    {mm:3,dd:14,emoji:'🎨',name:'Holi — Festival of Colours!'},
    {mm:3,dd:30,emoji:'🌸',name:'Ugadi — Telugu New Year!'},
    {mm:4,dd:6,emoji:'🌸',name:'Ugadi — Telugu New Year!'},
    {mm:8,dd:15,emoji:'🇮🇳',name:'Independence Day 🇮🇳'},
    {mm:8,dd:16,emoji:'🪈',name:'Janmashtami — Krishna Jayanti!'},
    {mm:9,dd:2,emoji:'🐘',name:'Ganesh Chaturthi!'},
    {mm:10,dd:2,emoji:'🕊️',name:'Gandhi Jayanti'},
    {mm:10,dd:12,emoji:'🪔',name:'Navratri begins!'},
    {mm:10,dd:20,emoji:'🪔',name:'Dussehra!'},
    {mm:10,dd:29,emoji:'🪔',name:'Diwali — Festival of Lights!'},
    {mm:11,dd:1,emoji:'🪔',name:'Diwali — Festival of Lights!'},
    {mm:12,dd:25,emoji:'🎄',name:'Christmas!'},
    {mm:3,dd:6,emoji:'🌟',name:"Today's a great day for the family!"}
  ];
  return festivals.find(f=>f.mm===mm && Math.abs(f.dd-dd)<=1) || null;
}

// ═══════════════════════════════════════════════════════
// AI DAILY BRIEFING WIDGET
// ═══════════════════════════════════════════════════════
let aibLoaded = false;
let aibDetailsOpen = false;

// Show idle "tap to generate" state — no API call
function aibShowIdle() {
  const textEl = document.getElementById('aib-text');
  const tsEl   = document.getElementById('aib-ts');
  const dateEl = document.getElementById('aib-date');
  if (!textEl) return;
  if (!groqGetKey()) { aiShowKeyPrompt(); return; }
  if (aibLoaded) return; // already generated this session, keep showing it
  if (dateEl) dateEl.innerHTML = `📅 ${aiGetDate()}`;
  textEl.innerHTML = `
    <div onclick="aiLoadBriefing(true)" style="display:flex;align-items:center;gap:12px;padding:4px 0;cursor:pointer;opacity:.85;transition:opacity .15s;" onmouseenter="this.style.opacity=1" onmouseleave="this.style.opacity='.85'">
      <div style="width:38px;height:38px;border-radius:12px;background:rgba(167,139,250,.12);border:1px solid rgba(167,139,250,.25);display:flex;align-items:center;justify-content:center;font-size:20px;flex-shrink:0;">✨</div>
      <div>
        <div style="font-size:13px;font-weight:700;color:var(--text);margin-bottom:2px;">Tap to generate today's briefing</div>
        <div style="font-size:11px;color:var(--text3);font-family:'DM Mono',monospace;">Uses 1 Groq API call · Free</div>
      </div>
      <div style="margin-left:auto;font-size:18px;color:var(--purple);">›</div>
    </div>`;
  if (tsEl) tsEl.textContent = 'On demand';
}

function aiLoadBriefing(force=false) {
  if (aibLoaded && !force) return;
  const card = document.getElementById('ai-briefing-card');
  if (!card) return; // widget not in DOM yet

  // Check key first
  if (!groqGetKey()) { aiShowKeyPrompt(); return; }

  const textEl = document.getElementById('aib-text');
  const dateEl = document.getElementById('aib-date');
  const tsEl   = document.getElementById('aib-ts');
  const btn    = document.getElementById('aib-refresh-btn');
  const festChip = document.getElementById('aib-festival-chip');

  if (!textEl) return;

  // Loading state
  if (btn) { btn.classList.add('spinning'); }
  textEl.innerHTML = `<div class="aib-skeleton-wrap"><div class="aib-skel"></div><div class="aib-skel"></div><div class="aib-skel"></div></div>`;
  if (dateEl) dateEl.innerHTML = `📅 ${aiGetDate()}`;
  if (tsEl) tsEl.textContent = 'Generating…';

  // Festival banner
  const festival = aiCheckFestival();
  if (festChip) {
    if (festival) {
      document.getElementById('aib-festival-emoji').textContent = festival.emoji;
      document.getElementById('aib-festival-text').textContent = festival.name;
      festChip.classList.add('show');
    } else {
      festChip.classList.remove('show');
    }
  }

  const h = aiGetHour();
  const tod = h<12 ? 'morning' : h<17 ? 'afternoon' : 'evening';
  const isWeekend = [0,6].includes(new Date().getDay());
  const festNote = festival ? `Today is ${festival.name}.` : '';

  const system = `You are a warm, intelligent AI assistant for the ${AI_FAMILY_CONTEXT.name} in ${AI_FAMILY_CONTEXT.location}.
Family: Rajasekhar (Head of Family, Software Engineer), Vasundhara (Homemaker), Josritha (B.Tech student, CGPA 9.24), Jeevan (school student, 14).
Be warm, personal, culturally aware of Telugu/Indian family values.`;

  const userPrompt = `Write a warm, personal 2-3 sentence family briefing for ${aiGetDate()}, ${tod}.
${isWeekend ? 'It is the weekend — a family time!' : 'It is a weekday.'}
${festNote}
Include: (1) warm ${tod} greeting for the family, (2) one practical/seasonal tip relevant to a Telugu family in Hyderabad in ${new Date().toLocaleString('en',{month:'long'})}, (3) encouraging closing.
Use 1-2 natural emojis. No bullet points. Max 55 words. Natural flowing sentences.`;

  aiCall(system, userPrompt, 300)
    .then(text => {
      if (!text) throw new Error('empty');
      if (textEl) textEl.textContent = text.trim();
      if (tsEl) tsEl.textContent = `Generated at ${aiGetTime()}`;
      aibLoaded = true;
      // Populate detail grid
      aibPopulateDetails();
    })
    .catch((err) => {
      if (err.message === 'no_key' || String(err.message).includes('401') || String(err.message).includes('invalid_api_key')) {
        groqClearKey();
        aiShowKeyPrompt();
        return;
      }
      // Network / other error — show warm fallback
      const fallbacks = [
        `Good ${tod}, Duggireddy family! 🙏 Today is ${new Date().toLocaleDateString('en-IN',{weekday:'long'})} — a wonderful day to stay connected and make meaningful memories. ${isWeekend ? 'Cherish the weekend together!' : 'Wishing everyone a productive and joyful day!'} ✨`,
        `Namaste, Duggireddy family! 🌟 Today brings new opportunities for Rajasekhar at work, Josritha at college, and Jeevan at school. Vasundhara's warmth keeps the home running beautifully. Have a blessed day together!`
      ];
      if (textEl) textEl.textContent = fallbacks[Math.floor(Math.random()*fallbacks.length)];
      if (tsEl) tsEl.textContent = 'Offline mode';
      aibLoaded = true;
      aibPopulateDetails();
    })
    .finally(() => {
      if (btn) btn.classList.remove('spinning');
    });
}

function aibPopulateDetails() {
  const grid = document.getElementById('aib-detail-grid');
  if (!grid) return;
  const isWeekend = [0,6].includes(new Date().getDay());
  grid.innerHTML = `
    <div class="aib-ditem">
      <div class="aib-ditem-label">Day Type</div>
      <div class="aib-ditem-val">${isWeekend ? '🎉 Weekend' : '💼 Weekday'}</div>
      <div class="aib-ditem-sub">${isWeekend ? 'Family time' : 'Work & School'}</div>
    </div>
    <div class="aib-ditem">
      <div class="aib-ditem-label">Weather</div>
      <div class="aib-ditem-val">~32°C</div>
      <div class="aib-ditem-sub">Hyderabad · Warm</div>
    </div>
    <div class="aib-ditem">
      <div class="aib-ditem-label">Expiry Alerts</div>
      <div class="aib-ditem-val" style="color:var(--red)">2 Overdue</div>
      <div class="aib-ditem-sub">Property Tax due</div>
    </div>
    <div class="aib-ditem">
      <div class="aib-ditem-label">Josritha CGPA</div>
      <div class="aib-ditem-val" style="color:var(--green)">9.24</div>
      <div class="aib-ditem-sub">KL University · Sem 3</div>
    </div>`;
}

function aibToggleDetails() {
  aibDetailsOpen = !aibDetailsOpen;
  const det = document.getElementById('aib-details');
  const btn = document.getElementById('aib-details-btn');
  if (det) det.classList.toggle('open', aibDetailsOpen);
  if (btn) btn.textContent = aibDetailsOpen ? '🔼 Less' : '📊 Details';
}

// ═══════════════════════════════════════════════════════
// AI FAMILY CHAT WIDGET
// ═══════════════════════════════════════════════════════
let aicwHistory = [];
let aicwBusy = false;

// System prompt with full family context
function buildAICWSystem() {
  var dayNames = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
  var todayName = dayNames[new Date().getDay()].toUpperCase();
  var todayDate = new Date().toLocaleDateString('en-IN',{weekday:'long',day:'numeric',month:'long',year:'numeric'});

  var attRaw = localStorage.getItem('fp_attendance_synced');
  var attData = attRaw ? JSON.parse(attRaw) : (typeof ATTENDANCE !== 'undefined' ? ATTENDANCE : []);
  var ttRaw = localStorage.getItem('fp_timetable_synced');
  var ttData = ttRaw ? JSON.parse(ttRaw) : [];
  var todaySlots = ttData.filter(function(s){ return s.day === todayName; });

  var attSummary = attData.map(function(a) {
    var pct = Math.round(a.present / a.total * 100);
    var canSkip = Math.floor(a.total * 0.25) - (a.total - a.present);
    var status = pct >= 75 ? 'SAFE' : pct >= 70 ? 'AT RISK' : 'CRITICAL';
    return '  - ' + a.subject + ' (' + a.code + ', ' + a.type + '): ' + a.present + '/' + a.total + ' = ' + pct + '% [' + status + '] can skip ' + Math.max(0,canSkip) + ' more';
  }).join('\n');

  var todaySummary = '';
  if (todaySlots.length > 0) {
    todaySummary = todaySlots.map(function(s) {
      var att = attData.find(function(a){ return a.code === s.code && a.type === s.type; });
      var pct = att ? Math.round(att.present/att.total*100) : null;
      var canSkip = att ? Math.max(0, Math.floor(att.total*0.25)-(att.total-att.present)) : null;
      return '  - Period ' + s.period + ' (' + (s.time||'') + '): ' + s.subject + ' | ' + s.type + ' | Room ' + s.room + (att ? ' | ' + pct + '%, can skip ' + canSkip + ' more' : '');
    }).join('\n');
  } else {
    todaySummary = '  - No classes scheduled today';
  }

  var sys = 'You are the AI Family Assistant for the Duggireddy Family.\n'
    + 'Members: Rajasekhar (Software Engineer), Vasundhara (Homemaker), Josritha (KL University B.Tech, CGPA 9.24), Jeevan (14, school).\n'
    + 'Location: Flat 807, INDIS OneCity, KPHB, Hyderabad.\n\n'
    + 'KEY DETAILS:\n'
    + '- Rajasekhar: Aadhaar 6106 1778 4861, PAN AICPD3992N, DL expires Jan 2027, Passport E8690728\n'
    + '- Vasundhara: Aadhaar 3372 3106 9560, PAN BDXPD9514R, Activa TS08HJ8438, i10 AP27AK7873\n'
    + '- Josritha: Aadhaar 8316 6458 6848, Roll 2420030493\n'
    + '- Health Floater: ICICI 4193i/APRN/400529214, Rs15L/member, expires Aug 2026\n'
    + '- Property Tax overdue: Flat 403 & Shop G5 Ongole\n\n'
    + 'TODAY: ' + todayDate + '\n\n'
    + 'JOSRITHA ATTENDANCE (KL University, Even Sem 2025-26):\n'
    + 'Rule: Min 75% per subject. Formula: can_skip = floor(total x 0.25) - (total - present)\n'
    + attSummary + '\n\n'
    + 'TIMETABLE FOR ' + todayName + ': \n'
    + todaySummary + '\n\n'
    + 'FORMATTING RULES:\n'
    + 'For attendance/skip questions, reply with HTML using these exact CSS classes:\n'
    + 'Per subject: div.ai-subject-card.safe/.risk/.critical containing div.ai-card-header (span.ai-subject-name + span.ai-badge.safe/.risk/.critical) + div.ai-card-body (span.ai-stat items) + div.ai-verdict.safe/.critical\n'
    + 'End with: div.ai-summary-box containing div.ai-summary-title and div.ai-summary-body\n'
    + 'For all other questions: plain warm friendly text, 2-4 sentences, emojis ok, Telugu/Indian family context.'
    + buildAttPredictionContext();

  return sys;
}
function aiChatOpen(prefill) {
  // Find the chat widget input
  const input = document.getElementById('aicw-input');
  const chatEl = document.getElementById('aicw-messages');

  // Scroll chat widget into view if it exists
  if (chatEl) {
    const widgetItem = chatEl.closest('.widget-item');
    if (widgetItem) widgetItem.scrollIntoView({behavior:'smooth', block:'start'});
  }

  // Set prefill and send after scroll settles
  setTimeout(() => {
    const inp = document.getElementById('aicw-input');
    if (inp && prefill) {
      inp.value = prefill;
      aiChatAutoResize(inp);
      aiChatSend();
    }
  }, chatEl ? 450 : 50);
}

function aiChatSendQuick(chip) {
  const text = chip.textContent.trim();
  const input = document.getElementById('aicw-input');
  if (input) { input.value = text; aiChatAutoResize(input); }
  aiChatSend();
}

function aiChatKeyDown(e) {
  if (e.key==='Enter' && !e.shiftKey) { e.preventDefault(); aiChatSend(); }
}

function aiChatAutoResize(el) {
  el.style.height = 'auto';
  el.style.height = Math.min(el.scrollHeight, 90) + 'px';
}

function aiChatAppendMsg(role, text) {
  const container = document.getElementById('aicw-messages');
  if (!container) return;
  const div = document.createElement('div');
  div.className = 'aicw-msg ' + role;
  if (role === 'ai') {
    let html = text;
    if (!/<div|<span|<b|<strong/.test(text)) {
      html = text
        .split('**').map(function(s,i){return i%2===1?'<strong>'+s+'</strong>':s;}).join('')
        .split('\n').join('<br>');
    }
    div.innerHTML = '<div class="aicw-av">🧠</div><div class="aicw-bubble ai-rich">' + html + '</div>';
  } else {
    div.innerHTML = '<div class="aicw-bubble">' + text + '</div>';
  }
  container.appendChild(div);
  container.scrollTop = container.scrollHeight;
}

function aiChatShowTyping() {
  const container = document.getElementById('aicw-messages');
  if (!container) return;
  const div = document.createElement('div');
  div.className = 'aicw-msg ai'; div.id = 'aicw-typing';
  div.innerHTML = `<div class="aicw-av">🧠</div><div class="aicw-bubble"><div class="aicw-typing"><div class="aicw-tdot"></div><div class="aicw-tdot"></div><div class="aicw-tdot"></div></div></div>`;
  container.appendChild(div);
  container.scrollTop = container.scrollHeight;
}

function aiChatRemoveTyping() {
  document.getElementById('aicw-typing')?.remove();
}

async function aiChatSend() {
  if (aicwBusy) return;
  const input = document.getElementById('aicw-input');
  const sendBtn = document.getElementById('aicw-send');
  if (!input) return;
  const text = input.value.trim();
  if (!text) return;

  input.value = ''; input.style.height = 'auto';
  aicwBusy = true;
  if (sendBtn) sendBtn.disabled = true;

  aiChatAppendMsg('user', text);
  aicwHistory.push({role:'user', content:text});

  aiChatShowTyping();

  try {
    const key = groqGetKey();
    if (!key) {
      aiChatRemoveTyping();
      aiChatAppendMsg('ai', '🔑 Please enter your Groq API key in the Daily Briefing widget above to activate AI chat.');
      aicwBusy = false;
      if (sendBtn) sendBtn.disabled = false;
      return;
    }
    const resp = await fetch(GROQ_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${key}`
      },
      body: JSON.stringify({
        model: GROQ_MODEL,
        max_tokens: 900,
        temperature: 0.7,
        messages: [
          { role: 'system', content: buildAICWSystem() },
          ...aicwHistory
        ]
      })
    });
    const data = await resp.json();
    const reply = data.choices?.[0]?.message?.content || "I'm here to help! Could you please rephrase that? 🙏";
    aiChatRemoveTyping();
    aiChatAppendMsg('ai', reply.trim());
    aicwHistory.push({role:'assistant', content:reply.trim()});
    // Keep history manageable
    if (aicwHistory.length > 20) aicwHistory = aicwHistory.slice(-20);
  } catch(err) {
    aiChatRemoveTyping();
    aiChatAppendMsg('ai', "Sorry, I couldn't connect right now. Please check your internet connection and try again. 🙏");
  }

  aicwBusy = false;
  if (sendBtn) sendBtn.disabled = false;
}

// ═══════════════════════════════════════════════════════
// AI MEAL PLANNER WIDGET
// ═══════════════════════════════════════════════════════
let aimwPlan = null;
let aimwDay = 0;
let aimwLoading = false;

const AIMW_DAYS = ['Today','Tue','Wed','Thu','Fri','Sat','Sun'];
const AIMW_FALLBACK = [
  { breakfast:'Pesarattu with ginger chutney 🫘', lunch:'Rice, Sambar, Drumstick curry 🍚', dinner:'Chapati, Paneer butter masala 🫓' },
  { breakfast:'Idli, Coconut chutney & Sambar 🫓', lunch:'Veg Biryani with Raita 🍛', dinner:'Rice, Rasam, Beans poriyal 🌿' },
  { breakfast:'Upma with pickle 🥣', lunch:'Chapati, Dal makhani, Salad 🫘', dinner:'Dosa, Tomato chutney 🫓' },
  { breakfast:'Poha with peanuts 🌾', lunch:'Rice, Gongura chicken, Pappad 🍗', dinner:'Chapati, Mixed veg curry 🥦' },
  { breakfast:'Medu Vada, Sambar 🍩', lunch:'Veg Fried Rice, Gobi Manchurian 🥢', dinner:'Rice, Dhal tadka, Papad 🫘' },
  { breakfast:'Aloo Paratha, Curd 🫓', lunch:'Mutton Curry, Rice, Salad 🍖', dinner:'Chapati, Dal, Green beans 🌿' },
  { breakfast:'Rava Dosa, Sambar 🫓', lunch:'Pulihora, Perugu Pachadi 🍛', dinner:'Chapati, Chole, Rice 🫘' }
];

function aimwSelectDay(d) {
  aimwDay = d;
  document.querySelectorAll('.aimw-tab').forEach((t,i)=>{
    t.classList.toggle('active', i===d);
  });
  aimwRenderDay();
}

function aimwRenderDay() {
  const body = document.getElementById('aimw-meals-body');
  if (!body) return;
  const plan = aimwPlan || AIMW_FALLBACK;
  const day = plan[aimwDay] || plan[0];
  body.innerHTML = `
    <div class="aimw-meals">
      <div class="aimw-meal-row">
        <div class="aimw-meal-type">Breakfast</div>
        <div class="aimw-meal-name">${day.breakfast}</div>
      </div>
      <div class="aimw-meal-row">
        <div class="aimw-meal-type">Lunch</div>
        <div class="aimw-meal-name">${day.lunch}</div>
      </div>
      <div class="aimw-meal-row">
        <div class="aimw-meal-type">Dinner</div>
        <div class="aimw-meal-name">${day.dinner}</div>
      </div>
    </div>`;
}

async function aiMealGenerate() {
  if (aimwLoading) return;
  // If no key, just show fallback silently
  if (!groqGetKey()) { aimwPlan = null; aimwRenderDay(); return; }
  aimwLoading = true;
  const body = document.getElementById('aimw-meals-body');
  const btn = document.getElementById('aimw-regen');
  if (body) body.innerHTML = `<div class="aimw-loading"><div class="aimw-skel"></div><div class="aimw-skel"></div><div class="aimw-skel"></div></div>`;
  if (btn) btn.textContent = '⏳ Generating…';

  const system = `You are a Telugu family meal planner for the Duggireddy family in Hyderabad. They prefer traditional Andhra/Telugu home cooking — rice-based meals, dals, chutneys, sambar, curries (veg & non-veg), chapati. Jeevan is 14 (growing boy), Josritha is 19 (college student). Rajasekhar and Vasundhara are adults. Healthy, balanced, seasonal. ${new Date().toLocaleString('en',{month:'long'})} in Hyderabad.`;

  const userPrompt = `Generate a 7-day Telugu family meal plan. Return ONLY valid JSON array of 7 objects, no markdown, no explanation. Each object: {"breakfast":"...","lunch":"...","dinner":"..."}. Keep meal names concise (under 40 chars each), include 1 emoji per meal. Mix veg and non-veg. Day 1 = today (${new Date().toLocaleDateString('en-IN',{weekday:'long'})}).`;

  try {
    const text = await aiCall(system, userPrompt, 800);
    const clean = text.replace(/```json|```/g,'').trim();
    const parsed = JSON.parse(clean);
    if (Array.isArray(parsed) && parsed.length >= 7) {
      aimwPlan = parsed;
    } else {
      aimwPlan = AIMW_FALLBACK;
    }
  } catch(e) {
    aimwPlan = AIMW_FALLBACK;
  }

  aimwLoading = false;
  if (btn) btn.textContent = '↻ New Plan';
  aimwRenderDay();
}

// ── AI Widget post-render init ────────────────────────
// Called safely after renderWidgets() completes
function aiWidgetsInit() {
  // Briefing — show idle state, no API call on load
  if (document.getElementById('ai-briefing-card')) {
    aibShowIdle();
  }
  // Meal planner — render fallback plan immediately, no API call
  if (document.getElementById('aimw-meals-body')) {
    aimwRenderDay();
  }
}

// ═══════════════════════════════════════

// ═══════════════════════════════════════════════════════
// UPLOAD HUB
// ═══════════════════════════════════════════════════════

var UH_CONFIG = {
  'attendance': {
    key: 'fp_attendance_synced',
    tsKey: 'fp_attendance_synced_ts',
    validate: function(data) {
      return Array.isArray(data) && data.length > 0 && data[0].hasOwnProperty('subject');
    },
    onSuccess: function(data, ts) {
      localStorage.setItem('fp_attendance_synced', JSON.stringify(data));
      localStorage.setItem('fp_attendance_synced_ts', ts);
      setTimeout(function() { autoManageAttendanceEvents(data); }, 200);
      setTimeout(function() { initWidgetDynamic(); }, 100);
      return data.length + ' subjects synced';
    }
  },
  'timetable': {
    key: 'fp_timetable_synced',
    tsKey: 'fp_timetable_synced_ts',
    validate: function(data) {
      var arr = Array.isArray(data) ? data : (data.timetable && Array.isArray(data.timetable) ? data.timetable : null);
      return arr && arr.length > 0 && arr[0].hasOwnProperty('day');
    },
    onSuccess: function(data, ts) {
      var arr = Array.isArray(data) ? data : data.timetable;
      localStorage.setItem('fp_timetable_synced', JSON.stringify(arr));
      localStorage.setItem('fp_timetable_synced_ts', ts);
      window._acadView = 'combined';
      setTimeout(function() { initWidgetDynamic(); }, 100);
      return arr.length + ' slots loaded';
    }
  },
  'bank-icici': {
    key: 'fp_bank_stmt_icici',
    tsKey: 'fp_bank_stmt_icici_ts',
    validate: function(data) {
      return data && data.bank === 'ICICI' && Array.isArray(data.transactions);
    },
    onSuccess: function(data, ts) {
      localStorage.setItem('fp_bank_stmt_icici', JSON.stringify(data));
      localStorage.setItem('fp_bank_stmt_icici_ts', ts);
      return data.transactions.length + ' transactions · \u20b9' + (data.closingBalance || 0).toLocaleString('en-IN');
    }
  },
  'bank-hdfc': {
    key: 'fp_bank_stmt_hdfc',
    tsKey: 'fp_bank_stmt_hdfc_ts',
    validate: function(data) {
      return data && data.bank === 'HDFC' && Array.isArray(data.transactions);
    },
    onSuccess: function(data, ts) {
      localStorage.setItem('fp_bank_stmt_hdfc', JSON.stringify(data));
      localStorage.setItem('fp_bank_stmt_hdfc_ts', ts);
      return data.transactions.length + ' transactions · \u20b9' + (data.closingBalance || 0).toLocaleString('en-IN');
    }
  },
  'bank-axis': {
    key: 'fp_bank_stmt_axis',
    tsKey: 'fp_bank_stmt_axis_ts',
    validate: function(data) {
      return data && data.bank === 'AXIS' && Array.isArray(data.transactions);
    },
    onSuccess: function(data, ts) {
      localStorage.setItem('fp_bank_stmt_axis', JSON.stringify(data));
      localStorage.setItem('fp_bank_stmt_axis_ts', ts);
      return data.transactions.length + ' transactions · \u20b9' + (data.closingBalance || 0).toLocaleString('en-IN');
    }
  }
};

function uhTrigger(type) {
  var inp = document.getElementById('uh-file-' + type);
  if (inp) inp.click();
}

function uhHandleFile(type, input) {
  var file = input.files[0];
  if (!file) return;
  var cfg = UH_CONFIG[type];
  if (!cfg) return;

  var card = document.getElementById('uhcard-' + type);
  if (card) card.classList.add('uploading');

  var reader = new FileReader();
  reader.onload = function(e) {
    try {
      var data = JSON.parse(e.target.result);
      if (!cfg.validate(data)) {
        showToast('\u274c Invalid file for ' + type);
        if (card) card.classList.remove('uploading');
        return;
      }
      var ts = new Date().toLocaleString('en-IN', {day:'numeric',month:'short',year:'numeric',hour:'2-digit',minute:'2-digit'});
      var msg = cfg.onSuccess(data, ts);
      showToast('\u2705 ' + msg);
      if (card) card.classList.remove('uploading');
      uhRefreshUI();
      setTimeout(function() { auraRenderAlerts(); auraRenderHealth(); auraRenderEducation(); auraRenderFinance(); auraRenderHome(); }, 100);
      input.value = '';
    } catch(err) {
      showToast('\u274c Could not parse JSON');
      if (card) card.classList.remove('uploading');
    }
  };
  reader.readAsText(file);
}

function uhRefreshUI() {
  var totalSynced = 0;
  var totalTxns = 0;
  var types = ['attendance','timetable','bank-icici','bank-hdfc','bank-axis'];

  for (var i = 0; i < types.length; i++) {
    var t = types[i];
    var cfg = UH_CONFIG[t];
    var dot = document.getElementById('uh-dot-' + t);
    var tsEl = document.getElementById('uh-ts-' + t);
    var card = document.getElementById('uhcard-' + t);
    var ts = localStorage.getItem(cfg.tsKey);

    if (ts) {
      totalSynced++;
      if (dot) { dot.className = 'upload-hub-status-dot synced'; }
      if (tsEl) { tsEl.textContent = '\ud83d\udfe2 ' + ts; }
      if (card) { card.classList.add('synced'); }

      if (t.indexOf('bank-') === 0) {
        try {
          var raw = localStorage.getItem(cfg.key);
          if (raw) {
            var d = JSON.parse(raw);
            if (d.transactions) totalTxns += d.transactions.length;
          }
        } catch(e) {}
      }
    } else {
      if (dot) { dot.className = 'upload-hub-status-dot'; }
      if (tsEl) { tsEl.textContent = ''; }
      if (card) { card.classList.remove('synced'); }
    }
  }

  // Summary bar
  var sumEl = document.getElementById('upload-hub-summary');
  if (sumEl) {
    var attSubjects = 0;
    try { var ar = JSON.parse(localStorage.getItem('fp_attendance_synced')||'[]'); attSubjects = ar.length; } catch(e){}
    var ttSlots = 0;
    try { var tr = JSON.parse(localStorage.getItem('fp_timetable_synced')||'[]'); ttSlots = tr.length; } catch(e){}

    sumEl.innerHTML =
      '<div class="upload-hub-stat"><div class="upload-hub-stat-val">' + totalSynced + '<span style="font-size:12px;color:var(--text3)">/5</span></div><div class="upload-hub-stat-lbl">Synced</div></div>' +
      '<div class="upload-hub-stat"><div class="upload-hub-stat-val">' + attSubjects + '</div><div class="upload-hub-stat-lbl">Subjects</div></div>' +
      '<div class="upload-hub-stat"><div class="upload-hub-stat-val">' + ttSlots + '</div><div class="upload-hub-stat-lbl">TT Slots</div></div>' +
      '<div class="upload-hub-stat"><div class="upload-hub-stat-val">' + totalTxns + '</div><div class="upload-hub-stat-lbl">Txns</div></div>';
  }

  // Last sync line in header
  var lastEl = document.getElementById('upload-hub-last-sync');
  if (lastEl) {
    var lines = [];
    var attTs = localStorage.getItem('fp_attendance_synced_ts');
    var ttTs  = localStorage.getItem('fp_timetable_synced_ts');
    if (attTs) lines.push('Att: ' + attTs);
    if (ttTs)  lines.push('TT: ' + ttTs);
    lastEl.textContent = lines.join('\n');
  }
}

// ═══════════════════════════════════════════════════════
// BANK TRANSACTIONS WIDGET
// ═══════════════════════════════════════════════════════

var _btwActiveBank = 'icici';

function btwFmtAmt(n) {
  if (!n || n === 0) return '\u20b90';
  return '\u20b9' + Math.abs(n).toLocaleString('en-IN', {minimumFractionDigits:2, maximumFractionDigits:2});
}

function btwGetIcon(title, type) {
  var t = (title || '').toLowerCase();
  if (t.indexOf('upi') !== -1 || t.indexOf('payme') !== -1 || t.indexOf('gpay') !== -1 || t.indexOf('phonepe') !== -1) return '\ud83d\udcf1';
  if (t.indexOf('airtel') !== -1 || t.indexOf('jio') !== -1 || t.indexOf('bsnl') !== -1) return '\ud83d\udcde';
  if (t.indexOf('swiggy') !== -1 || t.indexOf('zomato') !== -1) return '\ud83c\udf5b';
  if (t.indexOf('amazon') !== -1 || t.indexOf('flipkart') !== -1 || t.indexOf('myntra') !== -1) return '\ud83d\udece\ufe0f';
  if (t.indexOf('petrol') !== -1 || t.indexOf('fuel') !== -1 || t.indexOf('bpcl') !== -1 || t.indexOf('iocl') !== -1) return '\u26fd';
  if (t.indexOf('self') !== -1 || t.indexOf('transfer') !== -1 || t.indexOf('neft') !== -1 || t.indexOf('imps') !== -1 || t.indexOf('rtgs') !== -1) return '\ud83d\udd04';
  if (t.indexOf('salary') !== -1 || t.indexOf('payroll') !== -1 || t.indexOf('dataspeaks') !== -1) return '\ud83d\udcbc';
  if (t.indexOf('atm') !== -1 || t.indexOf('cash') !== -1) return '\ud83d\udcb5';
  if (t.indexOf('emi') !== -1 || t.indexOf('loan') !== -1) return '\ud83c\udfe6';
  if (t.indexOf('insurance') !== -1 || t.indexOf('lic') !== -1) return '\ud83d\udee1\ufe0f';
  if (t.indexOf('electricity') !== -1 || t.indexOf('bill') !== -1) return '\u26a1';
  if (type === 'CR') return '\ud83d\udcb0';
  return '\ud83d\udcb3';
}

function btwSetTab(bank) {
  _btwActiveBank = bank;
  var body = document.getElementById('btw-body');
  if (body) body.innerHTML = buildBankTxnsBody();
}

function buildBankTxnsBody() {
  var banks = [
    { key: 'icici', label: 'ICICI', storageKey: 'fp_bank_stmt_icici' },
    { key: 'hdfc',  label: 'HDFC',  storageKey: 'fp_bank_stmt_hdfc'  },
    { key: 'axis',  label: 'AXIS',  storageKey: 'fp_bank_stmt_axis'  }
  ];

  var html = '';

  // Tabs
  html += '<div class="btw-tabs">';
  banks.forEach(function(b) {
    var hasData = !!localStorage.getItem(b.storageKey);
    var activeClass = (_btwActiveBank === b.key) ? ' active' : '';
    var noDataClass = !hasData ? ' no-data' : '';
    html += '<div class="btw-tab' + activeClass + noDataClass + '" onclick="btwSetTab(\'' + b.key + '\')">'
      + '<div class="btw-tab-dot"></div>' + b.label + '</div>';
  });
  html += '</div>';

  var activeBankCfg = null;
  for (var i = 0; i < banks.length; i++) { if (banks[i].key === _btwActiveBank) { activeBankCfg = banks[i]; break; } }
  if (!activeBankCfg) return html;

  var raw = localStorage.getItem(activeBankCfg.storageKey);
  if (!raw) {
    html += '<div class="btw-no-data">'
      + '<div class="btw-no-data-icon">\ud83c\udfe6</div>'
      + '<div class="btw-no-data-title">' + activeBankCfg.label + ' not synced yet</div>'
      + '<div class="btw-no-data-sub">Run the bookmark scraper on the ' + activeBankCfg.label + ' statement<br>page, then upload the JSON via Data Sync Hub.</div>'
      + '<div class="btw-no-data-btn" onclick="goPage(\'upload\')">&#x1F4E1; Open Data Sync Hub</div>'
      + '</div>';
    return html;
  }

  var data = null;
  try { data = JSON.parse(raw); } catch(e) { return html + '<div class="btw-no-data"><div class="btw-no-data-title">Parse error — re-upload file</div></div>'; }

  var txns = data.transactions || [];
  var totalDebit  = txns.reduce(function(s,t){ return s + (t.debit  || 0); }, 0);
  var totalCredit = txns.reduce(function(s,t){ return s + (t.credit || 0); }, 0);
  var closingBal  = data.closingBalance || 0;

  html += '<div class="btw-summary">'
    + '<div class="btw-sum-tile"><div class="btw-sum-val" style="color:var(--green);">' + btwFmtAmt(totalCredit) + '</div><div class="btw-sum-lbl">Credit</div></div>'
    + '<div class="btw-sum-tile"><div class="btw-sum-val" style="color:var(--red);">'   + btwFmtAmt(totalDebit)  + '</div><div class="btw-sum-lbl">Debit</div></div>'
    + '<div class="btw-sum-tile"><div class="btw-sum-val" style="color:var(--gold);">'  + btwFmtAmt(closingBal)  + '</div><div class="btw-sum-lbl">Balance</div></div>'
    + '</div>';

  if (data.period) {
    html += '<div class="btw-sum-period">' + data.period + ' \u00b7 ' + txns.length + ' transactions</div>';
  }

  var recent = txns.slice().sort(function(a,b){ return (b.date||'').localeCompare(a.date||''); }).slice(0, 8);

  html += '<div class="btw-txn-list">';
  recent.forEach(function(t) {
    var isDebit  = (t.debit  || 0) > 0;
    var amt      = isDebit ? (t.debit || 0) : (t.credit || 0);
    var typeClass = isDebit ? 'dr' : 'cr';
    var sign     = isDebit ? '\u2212' : '+';
    var parts    = (t.date || '').split('-');
    var dayNum   = parts[2] ? parseInt(parts[2]) : '--';
    var monIdx   = parts[1] ? parseInt(parts[1]) : 0;
    var mons     = ['','Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    var monStr   = mons[monIdx] || '';
    var title    = (t.title || t.remark || 'Transaction').substring(0, 22);
    var sub      = (t.sub || '').substring(0, 30);
    var ico      = btwGetIcon(t.title || t.remark || '', t.type || '');

    html += '<div class="btw-txn-row">'
      + '<div class="btw-txn-date-col"><div class="btw-txn-day">' + dayNum + '</div><div class="btw-txn-mon">' + monStr + '</div></div>'
      + '<div class="btw-txn-ico ' + typeClass + '">' + ico + '</div>'
      + '<div class="btw-txn-mid"><div class="btw-txn-title">' + title + '</div>'
      + (sub ? '<div class="btw-txn-sub">' + sub + '</div>' : '') + '</div>'
      + '<div><div class="btw-txn-amt ' + typeClass + '">' + sign + btwFmtAmt(amt) + '</div>'
      + (t.balance ? '<div class="btw-txn-bal">\u20b9' + Number(t.balance).toLocaleString('en-IN') + '</div>' : '')
      + '</div></div>';
  });
  html += '</div>';

  html += '<div class="btw-balance-bar">'
    + '<div><div class="btw-balance-label">Closing Balance</div>'
    + '<div class="btw-balance-val">' + btwFmtAmt(closingBal) + '</div></div>'
    + '<div class="btw-see-all pressable" onclick="goPage(\'upload\')">Sync \u2192</div>'
    + '</div>';

  return html;
}

function buildBankTxnsWidget() {
  return '<div class="btw-card">'
    + '<div class="btw-header">'
    + '<div class="btw-header-left">'
    + '<div class="btw-title">\ud83c\udfe6 Bank Transactions</div>'
    + '<div class="btw-sub">ICICI \u00b7 HDFC \u00b7 AXIS \u00b7 Scraped live</div>'
    + '</div>'
    + '<div class="btw-upload-btn pressable" onclick="goPage(\'upload\')">\ud83d\udce1 Sync</div>'
    + '</div>'
    + '<div id="btw-body">' + buildBankTxnsBody() + '</div>'
    + '</div>';
}

// Call uhRefreshUI when upload page is visited — hooked via goPage\\'s page-show logic
function initUploadHub() {
  uhRefreshUI();
}

