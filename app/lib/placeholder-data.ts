// This file contains placeholder data that you'll be replacing with real data in the Data Fetching chapter:
// https://nextjs.org/learn/dashboard-app/fetching-data

const user = [{
  id: '410544b2-4001-4271-9855-fec4b6a6442a',
  name: 'User',
  email: 'user@nextmail.com',
  password: '123456',
}]

const contacts = [
  {
    id: 'd6e15727-9fe1-4961-8c5b-ea44a9bd81aa',
    name: 'Evil Rabbit',
    email: 'evil@rabbit.com',
    image_url: '/contacts/evil-rabbit.png',
    user_id: '410544b2-4001-4271-9855-fec4b6a6442a', 
  },
  {
    id: '3958dc9e-712f-4377-85e9-fec4b6a6442a',
    name: 'Delba de Oliveira',
    email: 'delba@oliveira.com',
    image_url: '/contacts/delba-de-oliveira.png',
    user_id: '410544b2-4001-4271-9855-fec4b6a6442a', 
  },
  {
    id: '3958dc9e-742f-4377-85e9-fec4b6a6442a',
    name: 'Lee Robinson',
    email: 'lee@robinson.com',
    image_url: '/contacts/lee-robinson.png',
    user_id: '410544b2-4001-4271-9855-fec4b6a6442a', 
  },
  {
    id: '76d65c26-f784-44a2-ac19-586678f7c2f2',
    name: 'Michael Novotny',
    email: 'michael@novotny.com',
    image_url: '/contacts/michael-novotny.png',
    user_id: '410544b2-4001-4271-9855-fec4b6a6442a', 
  },
  {
    id: 'CC27C14A-0ACF-4F4A-A6C9-D45682C144B9',
    name: 'Amy Burns',
    email: 'amy@burns.com',
    image_url: '/contacts/amy-burns.png',
    user_id: '410544b2-4001-4271-9855-fec4b6a6442a', 
  },
  {
    id: '13D07535-C59E-4157-A011-F8D2EF4E0CBB',
    name: 'Balazs Orban',
    email: 'balazs@orban.com',
    image_url: '/contacts/balazs-orban.png',
    user_id: '410544b2-4001-4271-9855-fec4b6a6442a', 
  },
  {
    id: '13D07535-C59E-4157-B442-F8D2EF4E0CBB',
    name: 'Jane Doe',
    email: 'not@myfriend.com',
    image_url: '/contacts/balazs-orban.png',
    user_id: '410544b2-4001-4271-9855-aac2ba22312e', 
  },
];

// TODO: Generate a years worth of random pays using the contacts above
// I laid out the initial fields and set them with repeated, consistent values, which allowed easier and more accurate LLM parsing, which I then used to randomize values (see gptlog.txt)
// edits were made to make unix codes to miliseconds, as well as create a more effective data model
const pays = [
  {
    id:"0a1c0244-00a0-41d1-a82e-75fe76ab388e",
    pay_id:1110,
    amount: -1287,
    contact_id: '3958dc9e-712f-4377-85e9-fec4b6a6442a',
    user_id: '410544b2-4001-4271-9855-fec4b6a6442a',
    create_date: 1735771200000,
    finalize_date: 1735771200000,
    update_date: 1735771200000,
    delete_date: 1735771200000
  },
  {
    id:"77668c76-7067-493e-8c06-a176a69de3cf",
    pay_id:1111,
    amount: 342,
    contact_id: '76d65c26-f784-44a2-ac19-586678f7c2f2',
    user_id: '410544b2-4001-4271-9855-fec4b6a6442a',
    create_date: 1736030400000,
    finalize_date: 1736030400000,
    update_date: 1736030400000,
    delete_date: null
  },
  {
    id:"b6156d76-ba23-42ef-97fd-40dd4df6a322",
    pay_id:1112,
    amount: 75,
    contact_id: 'CC27C14A-0ACF-4F4A-A6C9-D45682C144B9',
    user_id: '410544b2-4001-4271-9855-fec4b6a6442a',
    create_date: 1738454400000,
    finalize_date: 1738480000000,
    update_date: 1738480000000,
    delete_date: null
  },
  {
    id:"d05e8195-cacd-422b-ad30-9886a8743b53",
    pay_id:1113,
    amount: 999,
    contact_id: '13D07535-C59E-4157-A011-F8D2EF4E0CBB',
    user_id: '410544b2-4001-4271-9855-fec4b6a6442a',
    create_date: 1738713600000,
    finalize_date: 1738740000000,
    update_date: 1738740000000,
    delete_date: null
  },
  {
    id:"21de55ba-ae60-4fbd-aa9c-cb2380f6dc98",
    pay_id:1114,
    amount: 412,
    contact_id: 'd6e15727-9fe1-4961-8c5b-ea44a9bd81aa',
    user_id: '410544b2-4001-4271-9855-fec4b6a6442a',
    create_date: 1741123200000,
    finalize_date: 1741150000000,
    update_date: 1741150000000,
    delete_date: null
  },
  {
    id:"f93d5807-f0ef-458a-8e75-2fba01c521de",
    pay_id:1115,
    amount: 67,
    contact_id: '3958dc9e-742f-4377-85e9-fec4b6a6442a',
    user_id: '410544b2-4001-4271-9855-fec4b6a6442a',
    create_date: 1741382400000,
    finalize_date: 1741400000000,
    update_date: 1741400000000,
    delete_date: null
  },
  {
    id:"999767c3-5490-46fe-b48a-0dc9739d30e6",
    pay_id:1116,
    amount: 1450,
    contact_id: '13D07535-C59E-4157-A011-F8D2EF4E0CBB',
    user_id: '410544b2-4001-4271-9855-fec4b6a6442a',
    create_date: 1743801600000,
    finalize_date: 1743830000000,
    update_date: 1743830000000,
    delete_date: null
  },
  {
    id:"fe656e94-a0ba-4469-ab3b-96d09c74435b",
    pay_id:1117,
    amount: 210,
    contact_id: '3958dc9e-712f-4377-85e9-fec4b6a6442a',
    user_id: '410544b2-4001-4271-9855-fec4b6a6442a',
    create_date: 1744060800000,
    finalize_date: 1744090000000,
    update_date: 1744090000000,
    delete_date: null
  },
  {
    id:"7619b63d-e941-4213-98dc-269f5b79aa04",
    pay_id:1118,
    amount: 888,
    contact_id: '76d65c26-f784-44a2-ac19-586678f7c2f2',
    user_id: '410544b2-4001-4271-9855-fec4b6a6442a',
    create_date: 1746480000000,
    finalize_date: 1746500000000,
    update_date: 1746500000000,
    delete_date: null
  },
  {
    id:"0d5b5ee0-1e1f-4d91-879c-c531ae9eaef9",
    pay_id:1119,
    amount: 54,
    contact_id: 'CC27C14A-0ACF-4F4A-A6C9-D45682C144B9',
    user_id: '410544b2-4001-4271-9855-fec4b6a6442a',
    create_date: 1746739200000,
    finalize_date: 1746760000000,
    update_date: 1746760000000,
    delete_date: null
  },
  {
    id:"63c6f845-2a83-424e-9221-cdf97c7baa22",
    pay_id:1120,
    amount: 1320,
    contact_id: '13D07535-C59E-4157-A011-F8D2EF4E0CBB',
    user_id: '410544b2-4001-4271-9855-fec4b6a6442a',
    create_date: 1749158400000,
    finalize_date: 1749180000000,
    update_date: 1749180000000,
    delete_date: null
  },
  {
    id:"83cbfdd4-2c1f-4e45-84ca-3e46cad5ddad",
    pay_id:1121,
    amount: 310,
    contact_id: '3958dc9e-712f-4377-85e9-fec4b6a6442a',
    user_id: '410544b2-4001-4271-9855-fec4b6a6442a',
    create_date: 1749417600000,
    finalize_date: 1749440000000,
    update_date: 1749440000000,
    delete_date: null
  },
  {
    id:"0a3ae6a0-e3f8-415a-a8ab-2adb3311f3ef",
    pay_id:1122,
    amount: -720,
    contact_id: 'd6e15727-9fe1-4961-8c5b-ea44a9bd81aa',
    user_id: '410544b2-4001-4271-9855-fec4b6a6442a',
    create_date: 1751836800000,
    finalize_date: 1751860000000,
    update_date: 1751860000000,
    delete_date: null
  },
  {
    id:"ea316e32-6d4b-4d4a-9059-c8eddfc268e6",
    pay_id:1123,
    amount: 95,
    contact_id: '3958dc9e-742f-4377-85e9-fec4b6a6442a',
    user_id: '410544b2-4001-4271-9855-fec4b6a6442a',
    create_date: 1752096000000,
    finalize_date: 1752120000000,
    update_date: 1752120000000,
    delete_date: null
  },
  {
    id:"3673f992-454c-4526-a61d-b2a31274e50d",
    pay_id:1124,
    amount: 1499,
    contact_id: '76d65c26-f784-44a2-ac19-586678f7c2f2',
    user_id: '410544b2-4001-4271-9855-fec4b6a6442a',
    create_date: 1754515200000,
    finalize_date: 1754540000000,
    update_date: 1754540000000,
    delete_date: null
  },
  {
    id:"23ed5dc5-cf07-42bd-8290-2bd8fe963794",
    pay_id:1125,
    amount: 33,
    contact_id: 'd6e15727-9fe1-4961-8c5b-ea44a9bd81aa',
    user_id: '410544b2-4001-4271-9855-fec4b6a6442a',
    create_date: 1754774400000,
    finalize_date: 1754790000000,
    update_date: 1754790000000,
    delete_date: null
  },
  {
    id:"840670f8-24e9-462e-9ffc-0cb5e5ebe43e",
    pay_id:1126,
    amount: -870,
    contact_id: '3958dc9e-742f-4377-85e9-fec4b6a6442a',
    user_id: '410544b2-4001-4271-9855-fec4b6a6442a',
    create_date: 1757193600000,
    finalize_date: 1757220000000,
    update_date: 1757220000000,
    delete_date: null
  },
  {
    id:"74331441-8377-4450-8055-2756914e1688",
    pay_id:1127,
    amount: 410,
    contact_id: '3958dc9e-712f-4377-85e9-fec4b6a6442a',
    user_id: '410544b2-4001-4271-9855-fec4b6a6442a',
    create_date: 1757452800000,
    finalize_date: 1757480000000,
    update_date: 1757480000000,
    delete_date: null
  },
  {
    id:"338b2fde-5e16-4503-ae26-b76c30ed3354",
    pay_id:1128,
    amount: 560,
    contact_id: '13D07535-C59E-4157-A011-F8D2EF4E0CBB',
    user_id: '410544b2-4001-4271-9855-fec4b6a6442a',
    create_date: 1759872000000,
    finalize_date: 1759900000000,
    update_date: 1759900000000,
    delete_date: null
  },
  {
    id:"8a2af66d-8f09-40ef-8ae0-5fc5b96f7e74",
    pay_id:1129,
    amount: 120,
    contact_id: 'CC27C14A-0ACF-4F4A-A6C9-D45682C144B9',
    user_id: '410544b2-4001-4271-9855-fec4b6a6442a',
    create_date: 1760131200000,
    finalize_date: 1760160000000,
    update_date: 1760160000000,
    delete_date: null
  },
  {
    id:"6f61c2c1-e16e-455d-bd07-4b4cfe43fa01",
    pay_id:1130,
    amount: 1340,
    contact_id: '3958dc9e-742f-4377-85e9-fec4b6a6442a',
    user_id: '410544b2-4001-4271-9855-fec4b6a6442a',
    create_date: 1762550400000,
    finalize_date: null,
    update_date: 1762550400000,
    delete_date: null
  },
  {
    id:"089a96e3-2d8f-4e34-9a22-8cadbfa6f420",
    pay_id:1131,
    amount: 260,
    contact_id: '13D07535-C59E-4157-A011-F8D2EF4E0CBB',
    user_id: '410544b2-4001-4271-9855-fec4b6a6442a',
    create_date: 1762809600000,
    finalize_date: 1762830000000,
    update_date: 1762830000000,
    delete_date: null
  },
  {
    id:"d5443ace-e45d-4965-aaed-0f0b67ab5624",
    pay_id:1132,
    amount: 75,
    contact_id: '76d65c26-f784-44a2-ac19-586678f7c2f2',
    user_id: '410544b2-4001-4271-9855-fec4b6a6442a',
    create_date: 1765228800000,
    finalize_date: 1765250000000,
    update_date: 1765250000000,
    delete_date: null
  },
  {
    id:"50c2aa2d-5c02-4d5d-9350-e48a84a7801d",
    pay_id:1133,
    amount: 615,
    contact_id: 'd6e15727-9fe1-4961-8c5b-ea44a9bd81aa',
    user_id: '410544b2-4001-4271-9855-fec4b6a6442a',
    create_date: 1765488000000,
    finalize_date: 1765510000000,
    update_date: 1765510000000,
    delete_date: null
  },
  {
    id:"f1f5bcb4-a5c2-43ff-b173-fd92b5948f3d",
    pay_id:1134,
    amount: 480,
    contact_id: '13D07535-C59E-4157-A011-F8D2EF4E0CBB',
    user_id: '410544b2-4001-4271-9855-fec4b6a6442a',
    create_date: 1767907200000,
    finalize_date: 1767930000000,
    update_date: 1767930000000,
    delete_date: null
  },
  {
    id:"e2b2efb4-8aae-42b9-9394-7c79b06f1b0f",
    pay_id:1135,
    amount: -150,
    contact_id: '3958dc9e-712f-4377-85e9-fec4b6a6442a',
    user_id: '410544b2-4001-4271-9855-fec4b6a6442a',
    create_date: 1768166400000,
    finalize_date: 1768190000000,
    update_date: 1768190000000,
    delete_date: null
  },
  {
    id:"3b2ec5f9-22f1-454b-b096-76492c0a0f28",
    pay_id:1136,
    amount: 905,
    contact_id: 'd6e15727-9fe1-4961-8c5b-ea44a9bd81aa',
    user_id: '410544b2-4001-4271-9855-fec4b6a6442a',
    create_date: 1770585600000,
    finalize_date: 1770610000000,
    update_date: 1770610000000,
    delete_date: null
  },
  {
    id:"0d51ff4f-688d-47b4-802c-e8beee54096f",
    pay_id:1137,
    amount: 300,
    contact_id: '3958dc9e-742f-4377-85e9-fec4b6a6442a',
    user_id: '410544b2-4001-4271-9855-fec4b6a6442a',
    create_date: 1770844800000,
    finalize_date: 1770870000000,
    update_date: 1770870000000,
    delete_date: null
  },
  {
    id:"eaa0abe3-280b-4c74-82e3-de9da49a08d0",
    pay_id:1138,
    amount: 1110,
    contact_id: 'CC27C14A-0ACF-4F4A-A6C9-D45682C144B9',
    user_id: '410544b2-4001-4271-9855-fec4b6a6442a',
    create_date: 1773264000000,
    finalize_date: null,
    update_date: 1773264000000,
    delete_date: null
  },
  {
    id:"ad8029d6-afda-4ab9-9c30-924b8e13091a",
    pay_id:1139,
    amount: 45,
    contact_id: '76d65c26-f784-44a2-ac19-586678f7c2f2',
    user_id: '410544b2-4001-4271-9855-fec4b6a6442a',
    create_date: 1773523200000,
    finalize_date: null,
    update_date: 1773523200000,
    delete_date: null
  }
];

// TODO: After you generate pays, calculate the activity for the respective months
const activity = [];

export { user, contacts, pays, activity };
