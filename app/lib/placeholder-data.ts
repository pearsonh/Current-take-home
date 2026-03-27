// This file contains placeholder data that you'll be replacing with real data in the Data Fetching chapter:
// https://nextjs.org/learn/dashboard-app/fetching-data
const user = {
  id: '410544b2-4001-4271-9855-fec4b6a6442a',
  name: 'User',
  email: 'user@nextmail.com',
  password: '123456',
}

const contacts = [
  {
    id: 'd6e15727-9fe1-4961-8c5b-ea44a9bd81aa',
    name: 'Evil Rabbit',
    email: 'evil@rabbit.com',
    image_url: '/contacts/evil-rabbit.png',
  },
  {
    id: '3958dc9e-712f-4377-85e9-fec4b6a6442a',
    name: 'Delba de Oliveira',
    email: 'delba@oliveira.com',
    image_url: '/contacts/delba-de-oliveira.png',
  },
  {
    id: '3958dc9e-742f-4377-85e9-fec4b6a6442a',
    name: 'Lee Robinson',
    email: 'lee@robinson.com',
    image_url: '/contacts/lee-robinson.png',
  },
  {
    id: '76d65c26-f784-44a2-ac19-586678f7c2f2',
    name: 'Michael Novotny',
    email: 'michael@novotny.com',
    image_url: '/contacts/michael-novotny.png',
  },
  {
    id: 'CC27C14A-0ACF-4F4A-A6C9-D45682C144B9',
    name: 'Amy Burns',
    email: 'amy@burns.com',
    image_url: '/contacts/amy-burns.png',
  },
  {
    id: '13D07535-C59E-4157-A011-F8D2EF4E0CBB',
    name: 'Balazs Orban',
    email: 'balazs@orban.com',
    image_url: '/contacts/balazs-orban.png',
  },
];

// TODO: Generate a years worth of random pays using the contacts above
// I laid out the initial fields and set them with repeated, consistent values, which allowed easier and more accurate LLM parsing, which I then used to randomize values (see gptlog.txt)
const pays = [
  {
    id:"0a1c0244-00a0-41d1-a82e-75fe76ab388e",
    amount: 1287,
    receiver: '3958dc9e-712f-4377-85e9-fec4b6a6442a',
    create_date: 1735771200,
    finalize_date: 1735800000,
  },
  {
    id:"77668c76-7067-493e-8c06-a176a69de3cf",
    amount: 342,
    receiver: '76d65c26-f784-44a2-ac19-586678f7c2f2',
    create_date: 1736030400,
    finalize_date: 1736070000,
  },
  {
    id:"b6156d76-ba23-42ef-97fd-40dd4df6a322",
    amount: 75,
    receiver: 'CC27C14A-0ACF-4F4A-A6C9-D45682C144B9',
    create_date: 1738454400,
    finalize_date: 1738480000,
  },
  {
    id:"d05e8195-cacd-422b-ad30-9886a8743b53",
    amount: 999,
    receiver: '13D07535-C59E-4157-A011-F8D2EF4E0CBB',
    create_date: 1738713600,
    finalize_date: 1738740000,
  },
  {
    id:"21de55ba-ae60-4fbd-aa9c-cb2380f6dc98",
    amount: 412,
    receiver: 'd6e15727-9fe1-4961-8c5b-ea44a9bd81aa',
    create_date: 1741123200,
    finalize_date: 1741150000,
  },
  {
    id:"f93d5807-f0ef-458a-8e75-2fba01c521de",
    amount: 67,
    receiver: '3958dc9e-742f-4377-85e9-fec4b6a6442a',
    create_date: 1741382400,
    finalize_date: 1741400000,
  },
  {
    id:"999767c3-5490-46fe-b48a-0dc9739d30e6",
    amount: 1450,
    receiver: '13D07535-C59E-4157-A011-F8D2EF4E0CBB',
    create_date: 1743801600,
    finalize_date: 1743830000,
  },
  {
    id:"fe656e94-a0ba-4469-ab3b-96d09c74435b",
    amount: 210,
    receiver: '3958dc9e-712f-4377-85e9-fec4b6a6442a',
    create_date: 1744060800,
    finalize_date: 1744090000,
  },
  {
    id:"7619b63d-e941-4213-98dc-269f5b79aa04",
    amount: 888,
    receiver: '76d65c26-f784-44a2-ac19-586678f7c2f2',
    create_date: 1746480000,
    finalize_date: 1746500000,
  },
  {
    id:"0d5b5ee0-1e1f-4d91-879c-c531ae9eaef9",
    amount: 54,
    receiver: 'CC27C14A-0ACF-4F4A-A6C9-D45682C144B9',
    create_date: 1746739200,
    finalize_date: 1746760000,
  },
  {
    id:"63c6f845-2a83-424e-9221-cdf97c7baa22",
    amount: 1320,
    receiver: '13D07535-C59E-4157-A011-F8D2EF4E0CBB',
    create_date: 1749158400,
    finalize_date: 1749180000,
  },
  {
    id:"83cbfdd4-2c1f-4e45-84ca-3e46cad5ddad",
    amount: 310,
    receiver: '3958dc9e-712f-4377-85e9-fec4b6a6442a',
    create_date: 1749417600,
    finalize_date: 1749440000,
  },
  {
    id:"0a3ae6a0-e3f8-415a-a8ab-2adb3311f3ef",
    amount: 720,
    receiver: 'd6e15727-9fe1-4961-8c5b-ea44a9bd81aa',
    create_date: 1751836800,
    finalize_date: 1751860000,
  },
  {
    id:"ea316e32-6d4b-4d4a-9059-c8eddfc268e6",
    amount: 95,
    receiver: '3958dc9e-742f-4377-85e9-fec4b6a6442a',
    create_date: 1752096000,
    finalize_date: 1752120000,
  },
  {
    id:"3673f992-454c-4526-a61d-b2a31274e50d",
    amount: 1499,
    receiver: '76d65c26-f784-44a2-ac19-586678f7c2f2',
    create_date: 1754515200,
    finalize_date: 1754540000,
  },
  {
    id:"23ed5dc5-cf07-42bd-8290-2bd8fe963794",
    amount: 33,
    receiver: 'd6e15727-9fe1-4961-8c5b-ea44a9bd81aa',
    create_date: 1754774400,
    finalize_date: 1754790000,
  },
  {
    id:"840670f8-24e9-462e-9ffc-0cb5e5ebe43e",
    amount: 870,
    receiver: '3958dc9e-742f-4377-85e9-fec4b6a6442a',
    create_date: 1757193600,
    finalize_date: 1757220000,
  },
  {
    id:"74331441-8377-4450-8055-2756914e1688",
    amount: 410,
    receiver: '3958dc9e-712f-4377-85e9-fec4b6a6442a',
    create_date: 1757452800,
    finalize_date: 1757480000,
  },
  {
    id:"338b2fde-5e16-4503-ae26-b76c30ed3354",
    amount: 560,
    receiver: '13D07535-C59E-4157-A011-F8D2EF4E0CBB',
    create_date: 1759872000,
    finalize_date: 1759900000,
  },
  {
    id:"8a2af66d-8f09-40ef-8ae0-5fc5b96f7e74",
    amount: 120,
    receiver: 'CC27C14A-0ACF-4F4A-A6C9-D45682C144B9',
    create_date: 1760131200,
    finalize_date: 1760160000,
  },
  {
    id:"6f61c2c1-e16e-455d-bd07-4b4cfe43fa01",
    amount: 1340,
    receiver: '3958dc9e-742f-4377-85e9-fec4b6a6442a',
    create_date: 1762550400,
    finalize_date: null,
  },
  {
    id:"089a96e3-2d8f-4e34-9a22-8cadbfa6f420",
    amount: 260,
    receiver: '13D07535-C59E-4157-A011-F8D2EF4E0CBB',
    create_date: 1762809600,
    finalize_date: 1762830000,
  },
  {
    id:"d5443ace-e45d-4965-aaed-0f0b67ab5624",
    amount: 75,
    receiver: '76d65c26-f784-44a2-ac19-586678f7c2f2',
    create_date: 1765228800,
    finalize_date: 1765250000,
  },
  {
    id:"50c2aa2d-5c02-4d5d-9350-e48a84a7801d",
    amount: 615,
    receiver: 'd6e15727-9fe1-4961-8c5b-ea44a9bd81aa',
    create_date: 1765488000,
    finalize_date: 1765510000,
  },
  {
    id:"f1f5bcb4-a5c2-43ff-b173-fd92b5948f3d",
    amount: 480,
    receiver: '13D07535-C59E-4157-A011-F8D2EF4E0CBB',
    create_date: 1767907200,
    finalize_date: 1767930000,
  },
  {
    id:"e2b2efb4-8aae-42b9-9394-7c79b06f1b0f",
    amount: 150,
    receiver: '3958dc9e-712f-4377-85e9-fec4b6a6442a',
    create_date: 1768166400,
    finalize_date: 1768190000,
  },
  {
    id:"3b2ec5f9-22f1-454b-b096-76492c0a0f28",
    amount: 905,
    receiver: 'd6e15727-9fe1-4961-8c5b-ea44a9bd81aa',
    create_date: 1770585600,
    finalize_date: 1770610000,
  },
  {
    id:"0d51ff4f-688d-47b4-802c-e8beee54096f",
    amount: 300,
    receiver: '3958dc9e-742f-4377-85e9-fec4b6a6442a',
    create_date: 1770844800,
    finalize_date: 1770870000,
  },
  {
    id:"eaa0abe3-280b-4c74-82e3-de9da49a08d0",
    amount: 1110,
    receiver: 'CC27C14A-0ACF-4F4A-A6C9-D45682C144B9',
    create_date: 1773264000,
    finalize_date: null,
  },
  {
    id:"ad8029d6-afda-4ab9-9c30-924b8e13091a",
    amount: 45,
    receiver: '76d65c26-f784-44a2-ac19-586678f7c2f2',
    create_date: 1773523200,
    finalize_date: null,
  }
];

// TODO: After you generate pays, calculate the activity for the respective months
const activity = [
  { month: 'Jan', activity: 2000 },
  // { month: 'Feb', activity: 1800 },
  // { month: 'Mar', activity: 2200 },
  // { month: 'Apr', activity: 2500 },
  // { month: 'May', activity: 2300 },
  // { month: 'Jun', activity: 3200 },
  // { month: 'Jul', activity: 3500 },
  // { month: 'Aug', activity: 3700 },
  // { month: 'Sep', activity: 2500 },
  // { month: 'Oct', activity: 2800 },
  // { month: 'Nov', activity: 3000 },
  // { month: 'Dec', activity: 4800 },
  {month: 'Jan', activity: 2000 }
];

export { user, contacts, pays, activity };
