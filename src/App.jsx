import { useState } from "react";

const CAMP_COLORS = ["#4a9ab5", "#4a8a68", "#8a6aa8", "#b56a3a"];
const CAMP_ICONS = ["🏙️", "🧊", "🌋", "🌊"];
const HOTEL_KEYS = ["reykjavik", "glacier", "myvatn", "snaefellsnes"];

const hotels = {
  reykjavik: {
    name: "Reykjavik Residence Apartment Hotel ✓ BOOKED",
    rating: "4.7", reviews: "568", price: "$2,469 total (4 nights)",
    dates: "Jul 16–20 · 4 nights",
    highlight: "2 bedrooms, full kitchen, central location",
    why: "Premium 2-bedroom apartment with full kitchen, two bathrooms, central location 5 min from Old Harbour. 4 nights gives you time to ease in after the overnight flight, do whale + puffin tours, Golden Circle day trip, and enjoy the city without rushing. Kitchen saves significantly on food over 4 days.",
    phone: "+354 561 1200",
    bookUrl: "https://www.booking.com/hotel/is/reykjavik-residence-apartment.html",
    directUrl: "http://www.reykjavikresidence.is/",
  },
  glacier: {
    name: "Hotel Jokulsarlon — Glacier Lagoon Hotel ✓ BOOKED",
    rating: "4.8", reviews: "461", price: "$2,120 total (3 nights)",
    dates: "Jul 20–23 · 3 nights",
    highlight: "4.8 stars — highest-rated hotel on the Ring Road",
    why: "Closest hotel to the lagoon. Outdoor hot tubs, sauna with glacier views, on-site restaurant. Reviewers consistently call it their favourite stay in all of Iceland. Hotel confirmed the booked room accommodates your family of 4 — no upgrade needed.",
    phone: "+354 449 7000",
    bookUrl: "https://www.booking.com/hotel/is/glacier-lagoon.html",
    directUrl: "https://hoteljokulsarlon.is/",
  },
  myvatn: {
    name: "Akureyri Log Cabin ✓ BOOKED",
    rating: "—", reviews: "—", price: "$878 total (2 nights)",
    dates: "Jul 23–25 · 2 nights",
    highlight: "Log cabin base for north Iceland — best lodging value of the trip",
    why: "Mývatn area was sold out, so we restructured: stop at Mývatn on the drive day (Jul 23) to hit Dimmuborgir, Hverir geothermal area, and the pseudo-craters in 3-4 hours, then continue to Akureyri for the night. Day 24 is a relaxed Akureyri day — botanical garden, swimming pool, possible Húsavík whale day trip. Big upside: real city for two evenings instead of a remote lodge.",
    phone: null,
    bookUrl: null,
    directUrl: null,
  },
  snaefellsnes: {
    name: "Hotel Vest Mar ✓ BOOKED",
    rating: "4.6", reviews: "—", price: "$904 total (2 nights)",
    dates: "Jul 25–27 · 2 nights",
    highlight: "10 min from Snæfellsjökull National Park — renovated 2025",
    why: "Located in Olafsvik, charming fishing village on the north coast of the peninsula. Half the hotel was renovated in spring 2025 with fresh Scandinavian design. Spacious rooms with big windows, classic-style hotel rare in Iceland. On-site Sker Restaurant. Closest hotel to the main park attractions you came for: glacier, lava arch at Arnarstapi (30 min), Kirkjufell (30 min), Vatnshellir cave.",
    phone: null,
    bookUrl: "https://www.booking.com/hotel/is/vestmar.html",
    directUrl: "https://www.west.is/en/service/hotel-vest-mar",
  },
};

const camps = [
  {
    name: "Reykjavik",
    days: [
      {
        n: 1, date: "Thu Jul 16", title: "Arrival — take it easy",
        drive: "Keflavik to Reykjavik: 49 km · 45 min",
        plan: [
          "Land 6:25am — you have been traveling since yesterday. Pace yourself.",
          "Collect rental SUV — confirm child seats, gravel + SAAP insurance, automatic",
          "Drive to Reykjavik, check in at Reykjavik Residence (request early check-in)",
          "Big grocery run at Bonus supermarket — stock up for the whole trip",
          "Short walk to Old Harbour, early dinner, get the kids to sleep at a normal Iceland bedtime",
        ],
        creatures: [],
        tip: "Resist the urge to 'make the most' of day one — jet lag from a 13-hr overnight flight with kids is brutal. Bonus is Iceland's cheapest supermarket. Pick up skyr, bread, snacks, easy breakfast, and kid-friendly dinner for the apartment kitchen. Spending $150 here saves $600+ over the trip.",
      },
      {
        n: 2, date: "Fri Jul 17", title: "Whales + Puffins + Harbor",
        drive: "No driving — full day walking Reykjavik",
        plan: [
          "Breakfast at apartment (kitchen saves time and money all week)",
          "Morning: Whales of Iceland museum — life-size models kids can touch",
          "Late morning: Puffin Express from Old Harbour — 1 hr, 10,000+ puffins at Lundey island",
          "Lunch: Baejarins Beztu hot dog stand (legendary, $5/each) — order 'ein með öllu' = 'one with everything'",
          "Afternoon: Classic Whale Watching tour — 3 to 3.5 hrs in Faxafloi Bay",
          "Dinner at apartment or grab fish and chips at Reykjavik Fish Restaurant",
        ],
        creatures: ["🐋 Humpback and Minke whales in Faxafloi Bay", "🦜 10,000+ puffins at Lundey island", "🐬 White-beaked dolphins (common in July)"],
        tip: "Book Elding whale watching (elding.is) — departs Old Harbour, 5 min walk from apartment. Morning departures have the calmest seas. Pack Sea-Bands for the 6-year-old before boarding. Bring layers — it's cold on the water even in July.",
      },
      {
        n: 3, date: "Sat Jul 18", title: "Golden Circle Day Trip",
        drive: "Reykjavik loop ~240 km · ~3.5 hrs spread across the day",
        plan: [
          "Leave Reykjavik by 9am",
          "Thingvellir National Park — walk the rift between tectonic plates",
          "Geysir — Strokkur erupts every 5 to 8 minutes, kids will lose it",
          "Lunch stop: Fridheimar tomato farm restaurant — family lunches inside a greenhouse with tomato plants everywhere, famous tomato soup (book ahead)",
          "Gullfoss — double-tiered waterfall, walk right to the edge",
          "Secret Lagoon in Fludir — quieter and cheaper than Blue Lagoon, $28/adult, kid-friendly",
          "Back to Reykjavik hotel by evening",
        ],
        creatures: ["🦢 Arctic terns at Thingvellir lake", "🐑 Icelandic sheep everywhere on the drive"],
        tip: "Fridheimar is a genuine highlight — a working tomato greenhouse with a restaurant literally among the plants. Kids love it. Book a table at fridheimar.is ahead of time. Order the tomato soup with unlimited refills.",
      },
      {
        n: 4, date: "Sun Jul 19", title: "Reykjavik Full Day",
        drive: "No driving — downtown walk",
        plan: [
          "Slow breakfast at apartment",
          "Morning: Hallgrimskirkja church + elevator to the top for city views",
          "Mid-morning coffee and pastries at Braud & Co (rainbow-painted bakery, legendary kleina)",
          "Walk Laugavegur main shopping street — lopapeysa shopping at the Handknitting Association",
          "Lunch at Icelandic Street Food — unlimited lamb soup refills, complimentary waffles with jam",
          "Afternoon: Perlan museum — inside a real ice cave, northern lights planetarium",
          "Sun Voyager sculpture + Harpa Concert Hall at golden hour (but it never sets)",
          "Dinner: Messinn harbor location — big fish skillets for sharing ($30-35 feeds 2-3 kids)",
        ],
        creatures: [],
        tip: "Hallgrimskirkja elevator is $12/adult, kids cheap. Skip the line by going right after it opens at 10am. Perlan is built inside an old hot water tank with a real 100m ice cave you can walk through — genuine wow factor for kids.",
      },
    ],
  },
  {
    name: "Glacier Zone",
    days: [
      {
        n: 5, date: "Mon Jul 20", title: "South Coast Drive → Glacier Zone",
        drive: "Reykjavik to Glacier Zone: ~370 km · plan 8+ hrs with all the stops",
        plan: [
          "Leave Reykjavik by 8am — major stop day",
          "Seljalandsfoss — walk BEHIND the waterfall (full raincoat required)",
          "Gljufrabui — secret waterfall hidden inside a cave, 10 min walk from road",
          "Skogafoss — hike the 370-step staircase for rainbow views at the top",
          "Lunch stop in Vik: Sudur-Vik (lamb leg, arctic char, kids menu) or Black Crust Pizzeria",
          "Reynisfjara black sand beach — basalt columns, sea stacks, crashing surf (stay BACK from water)",
          "Dyrholaey promontory if time — puffins nesting on cliffs until mid-August",
          "Continue east. Optional Fjadrarglufur canyon pullover (10 min detour)",
          "Arrive Hotel Jokulsarlon by evening, check in — home for 3 nights",
        ],
        creatures: ["🦭 Seals sometimes spotted along Seljalandsa river", "🦜 Puffins nesting at Dyrholaey cliffs (bring binoculars)", "⚠️ Sneaker waves at Reynisfjara are deadly — NEVER turn your back on the water, stay 30m up the beach"],
        tip: "This is the longest and most packed driving day of the trip. Pack snacks, water, audiobooks. Stock up in Vik (last real grocery store) — it's 2 hrs east to Kirkjubaejarklaustur before the next options. The Reynisfjara warning is real, people die here every year.",
      },
      {
        n: 6, date: "Tue Jul 21", title: "Glacier Lagoon + Diamond Beach",
        drive: "Hotel to lagoon: ~10 min each way",
        plan: [
          "Slow morning at hotel (kids need it after yesterday's drive)",
          "Late morning: Jokulsarlon amphibious boat tour among icebergs the size of buildings",
          "Watch seals play in the lagoon from the shore",
          "Lunch at Fancy Sheep Truck right in the lagoon parking lot — lamb burgers, fish and chips, coffee",
          "Diamond Beach across the road — icebergs washing up on jet-black sand",
          "Afternoon back to hotel for hot tub + sauna + rest",
          "Dinner at hotel restaurant (the isolated location means no other real options nearby)",
          "Back to the lagoon at 10pm — midnight sun, zero crowds, completely surreal",
        ],
        creatures: ["🦭 Harbor seals among icebergs — almost guaranteed", "🕊️ Arctic terns near Diamond Beach (they will dive at you, wear a hat)", "🐦 Great skuas on the lagoon shore"],
        tip: "The lagoon at 10pm under the midnight sun is the single most surreal experience in Iceland. Go twice — afternoon for the boat tour, late evening for the light and quiet. Your kids will remember this forever.",
      },
      {
        n: 7, date: "Wed Jul 22", title: "Glacier Walk at Skaftafell",
        drive: "Hotel to Skaftafell: ~45 min each way",
        plan: [
          "Skaftafell visitor centre — pick up your guided glacier walk (pre-booked)",
          "3-hour family glacier walk on Vatnajokull (Europe's largest glacier) — crampons and helmets provided",
          "Lunch at Skaftafell Bistro — soup, sandwiches, coffee. The cafe in the visitor centre.",
          "Svartifoss waterfall hike after lunch — 45 min each way, stunning basalt columns behind the falls",
          "Afternoon drive back, relax at hotel hot tubs",
          "Optional evening: Fjadrargljufur canyon — stunning green gorge on the way back",
          "Dinner at hotel — their arctic char is excellent",
        ],
        creatures: ["🦅 White-tailed eagles occasionally near Skaftafell", "🐦 Ptarmigan on the glacier margins"],
        tip: "Book with Icelandic Mountain Guides (icelandicmountainguides.is). Minimum age ~6 for the Blue Ice Experience beginner walk — confirm when booking. Layer up under waterproofs. It's noticeably colder on the ice even in July.",
      },
    ],
  },
  {
    name: "Akureyri + Mývatn",
    days: [
      {
        n: 8, date: "Thu Jul 23", title: "Glacier → East Fjords → Mývatn → Akureyri",
        drive: "Glacier Zone to Akureyri via Mývatn: ~580 km · the biggest drive day, 9+ hrs with stops",
        plan: [
          "Hard start — leave hotel by 7:30am",
          "Hofn for fuel + a proper bathroom stop (10-15 min)",
          "Optional breakfast at Kaffi Hornid in Hofn (famous langoustine soup if you want lunch for breakfast)",
          "Drive the East Fjords — scenic but long. Pull over whenever kids need a break",
          "Stop at Djupivogur — tiny village with colorful harbor",
          "Mid-afternoon: arrive at Mývatn area (3-4 hr stop)",
          "Hit Mývatn highlights: Dimmuborgir lava labyrinth, Skútustaðir pseudo-craters, Hverir geothermal area (boiling mud, sulfur steam — alien landscape)",
          "Vogafjós farm restaurant for dinner — cowshed dining room with lake views, smoked lamb, fresh trout, Geysir bread baked underground (the kids will love watching the cows)",
          "Drive 90 min west to Akureyri Log Cabin, arrive by 9-10pm (still light out)",
        ],
        creatures: ["🦌 REINDEER — scan roadsides constantly in East Iceland", "🦅 White-tailed eagles near the fjords", "🦭 Harbor seals at Djupivogur", "🦆 15+ duck species around Mývatn lake"],
        tip: "This is THE drive day. Pre-download 3+ hours of audiobooks/shows for the kids. Ice pack in the cooler with skyr and fruit. Make reindeer-spotting a game — they're real and they're there. Vogafjós is the dining highlight of your trip — the restaurant is inside a converted working dairy cowshed with floor-to-ceiling windows into the barn.",
      },
      {
        n: 9, date: "Fri Jul 24", title: "Akureyri — City Recovery Day",
        drive: "Local only — under 15 min driving total",
        plan: [
          "Sleep in — everyone earned it",
          "Late breakfast at Kaffi Ilmur (downtown Akureyri) — homemade pastries and the city's best coffee",
          "Akureyri Botanical Garden — free entry, stunning roses and Arctic plants, great for kids to run around",
          "Lunch at Bryggjan by the harbor — fresh fish, kid-friendly menu",
          "Akureyri Swimming Pool (Sundlaug Akureyrar) — 2 hrs there, Icelanders' favorite pool in the country, slides + hot tubs + outdoor pool, family-priced",
          "Ice cream at Brynja — legendary ice cream shop open since 1939, the soft-serve is the stuff of Icelandic childhood",
          "Quiet evening back at the cabin — grill dinner or Akureyri Fish & Chips takeaway",
        ],
        creatures: ["🦢 Ducks in the botanical garden pond"],
        tip: "This day is intentionally easy. After the east fjords + Mývatn marathon, the kids (and you) need recovery. The Akureyri pool is a local institution — Icelanders consider it the best public pool in the country, and at ~$12 for the whole family it's the best value activity of your trip. Brynja is a pilgrimage for Icelanders — do not leave without trying their soft-serve.",
      },
    ],
  },
  {
    name: "Snaefellsnes",
    days: [
      {
        n: 10, date: "Sat Jul 25", title: "Drive Akureyri → Snaefellsnes",
        drive: "Akureyri to Olafsvik: ~430 km · ~5.5 hrs with stops",
        plan: [
          "Breakfast at cabin, check out by 10am",
          "Drive south and west across north Iceland",
          "Stop in Varmahlid for fuel + snacks",
          "Lunch in Blonduos at Vinberid — famous homemade ice cream cafe with real food too",
          "Optional short detour to Hvammstangi (seal watching centre — Iceland's seal capital)",
          "Continue west onto Snaefellsnes peninsula",
          "Arrive Hotel Vest Mar in Olafsvik by late afternoon — home for 2 nights",
          "Evening: Kirkjufell mountain and waterfall — 15 min drive east, most photographed mountain in Iceland",
          "Dinner at Sker Restaurant (in your hotel)",
        ],
        creatures: ["🐴 Icelandic horses on farms throughout the drive", "🦭 Seals at Hvammstangi if you detour"],
        tip: "Kirkjufell at 9-10pm with golden hour light is magic — plenty of time to drive there after dinner since it stays light until past midnight. Arnarstapi village is 30 min south of your hotel, keep it in mind for tomorrow.",
      },
      {
        n: 11, date: "Sun Jul 26", title: "Snaefellsnes Peninsula Full Day",
        drive: "Peninsula loop ~120 km · 2-3 hrs spread across the day",
        plan: [
          "Breakfast at hotel",
          "Morning: drive south to Ytri-Tunga beach — Iceland's most reliable seal colony, walk right up to the rocks (45 min drive)",
          "Arnarstapi village + lava arch — puffin burrows visible right from the coastal path",
          "Lunch: Fjöruhúsið cafe in Hellnar — literally on the beach, legendary fish soup (tiny and amazing)",
          "Snaefellsjokull glacier volcano viewing — Jules Verne's Journey to the Center of the Earth",
          "Djupalonssandur black pebble beach and shipwreck remains",
          "Vatnshellir Cave tour — descend 35m into a lava tube (~$50/adult, book ahead, minimum age 5)",
          "Return to hotel. Dinner at Sjávarpakkhúsið in Stykkishólmur (worth the drive for fresh fish)",
          "Evening: Kirkjufell again at midnight sun golden hour if you have stamina",
        ],
        creatures: ["🦭 10-30 seals at Ytri-Tunga (almost guaranteed)", "🦜 Puffins nesting at Arnarstapi cliffs", "🐴 Icelandic horses — ask hotel about a riding tour"],
        tip: "Ytri-Tunga is a private farm beach with ~$5 parking fee. The seals are so habituated they'll stare back at your kids from 3 metres away. Fjöruhúsið cafe is hard to find (look for the tiny wooden building right on the beach in Hellnar) — the soup is considered one of the best in Iceland by locals. Stop in Bjarnarhöfn shark museum if you want to try hákarl (fermented shark) and terrify the kids.",
      },
    ],
  },
];

const finalDay = {
  date: "Sun Jul 27",
  drive: "Snaefellsnes → Borgarnes → Keflavik: ~210 km · ~2.5 hrs",
  plan: [
    "Leisurely morning — no rush, check out by 9-9:30am",
    "Drive south through Snæfellsnes — the drive itself is beautiful, final views of the glacier",
    "Stop: Borgarnes (~11:30am) — lunch at Englendingavík restaurant by the harbor",
    "Dessert: Geirabakari Kaffihús bakery next door — chocolate cinnamon buns, featured in The Secret Life of Walter Mitty",
    "Drive 1 hour south to Keflavík, return rental SUV by 2:30-3pm",
    "Fill tank before returning — companies charge 3x market rate to refuel",
    "Check in, security, airport — relaxed with time to spare",
    "Fly home 5:10pm — arrive New Orleans 12:20am Jul 28",
  ],
  creatures: ["🦭 Last chance: Icelandic horses in fields along Route 54", "🐦 Seabirds at Borgarnes harbor"],
  tip: "Englendingavík is in an 1885 building on a quiet bay — fish-focused, harbor views, family-friendly, consistently the best meal in Borgarnes. Blue Lagoon moved to a Reykjavik day trip (Jul 18 or 19 afternoon). Travel days with two small kids should be relaxed, not a race.",
};

const bookingPhases = [
  {
    label: "✅ Already Done", urgent: false, done: true,
    items: [
      { text: "Flights booked — MSY → KEF Jul 15 night, KEF → MSY Jul 27 5:10pm", note: "Confirmed", url: null },
      { text: "Reykjavik Residence Apartment Hotel — Jul 16-20 · $2,469", note: "Premium 2BR apartment with full kitchen", url: null },
      { text: "Hotel Jokulsarlon Glacier Lagoon — Jul 20-23 · $2,120", note: "Family of 4 confirmed OK in booked room", url: null },
      { text: "Akureyri Log Cabin — Jul 23-25 · $878", note: "Replaced sold-out Mývatn options. Mývatn becomes a drive-day stop.", url: null },
      { text: "Hotel Vest Mar (Olafsvik, Snæfellsnes) — Jul 25-27 · $904", note: "Renovated 2025, 10 min from National Park entrance", url: null },
      { text: "T-Mobile confirmed for Iceland — data roaming included on your plan", note: "Enable data roaming before you leave", url: null },
      { text: "Itinerary structure locked — 4-3-2-2 split", note: "All 11 nights of lodging booked. Total: $6,371.", url: null },
    ],
  },
  {
    label: "🔴 This Week — Do Not Delay", urgent: true,
    items: [
      { text: "Travel insurance — family of 4, 12 days, adventure activities covered", note: "Buy within 14 days of first trip deposit for CFAR and pre-existing coverage", url: "https://www.squaremouth.com/travel-insurance-providers/tin-leg/gold" },
      { text: "Blue Lagoon Comfort package — Jul 18 or 19, afternoon slot (3-4pm)", note: "Reykjavik day trip, not departure day. Comfort package only. Book at bluelagoon.com directly.", url: "https://www.bluelagoon.com/" },
      { text: "North Sailing whale + puffin combo, Husavik (day trip from Akureyri Jul 24)", note: "~$100/adult, ~$55/child. Books out months ahead for July.", url: "https://www.northsailing.is/" },
      { text: "Order Wise card — takes 2 to 3 weeks to arrive", note: "Best exchange rate, no foreign transaction fees", url: "https://wise.com/us/card/" },
      { text: "Rental SUV — MyCar or Lotus Car Rental", note: "Toyota RAV4 or Kia Sportage, automatic, 4x4/AWD. Platinum/Zero Excess insurance. 2 high-back boosters reserved. Additional driver added. Credit card in main driver's name. Measure kids' heights first.", url: "https://www.mycar.is/" },
    ],
  },
  {
    label: "📅 Within 2 Weeks", urgent: false,
    items: [
      { text: "Glacier walk at Skaftafell", note: "icelandicmountainguides.is — confirm minimum age 6 is accepted. Date follows glacier lagoon check-in.", url: "https://www.icelandicmountainguides.is/" },
      { text: "Jokulsarlon amphibious boat tour", note: "~$65/adult, ~$35/child. Book for a day at glacier base camp.", url: "https://icelagoon.is/" },
      { text: "Elding whale watching + puffin express, Reykjavik (Day 2)", note: "Book morning departure — calmest seas", url: "https://elding.is/" },
      { text: "Check all 4 passports expire after Oct 27, 2026", note: "Kids passports valid 5 years only — check carefully", url: "https://travel.state.gov" },
    ],
  },
  {
    label: "🤔 Still To Discuss", urgent: false,
    items: [
      { text: "Photography plan — midnight sun golden hour runs 10pm to 2am", note: null, url: null },
      { text: "Kids' entertainment for long drives (Day 4 = 4.5 hrs, Day 7 = 5.5 hrs)", note: "Audiobooks, downloaded shows, car snack strategy", url: null },
      { text: "Reykjavik last day plan — you now have a full day at the end", note: "Old Harbour, Laugavegur, lopapeysa shopping, midnight sun walk", url: null },
      { text: "Volcano activity monitoring — Reykjanes Peninsula near Keflavik is active", note: "Check mbls.is for eruption status before travel", url: "https://www.mbls.is/english/" },
      { text: "VAT refund at airport — reclaim 24% on purchases over ~6,000 ISK", note: "Present goods, form, and receipts at Keflavik before checking bags", url: null },
      { text: "ETIAS status check — may launch for US travelers by Jul 2026", note: "Check travel.state.gov the week before departure", url: "https://travel.state.gov" },
      { text: "Iceland time zone — UTC year-round, 5 hrs ahead of New Orleans in July", note: null, url: null },
    ],
  },
  {
    label: "📦 Before You Fly", urgent: false,
    items: [
      { text: "Download road.is app and check every morning before driving", note: null, url: "https://www.road.is/" },
      { text: "Download Iceland offline maps — Google Maps and Maps.me", note: null, url: null },
      { text: "Download 112 Iceland safety app", note: "Sends your GPS to rescue services instantly", url: "https://safetravel.is/112-iceland-app/" },
      { text: "Print all hotel + tour confirmations", note: "No cell signal in remote areas — physical copies matter", url: null },
      { text: "Pack portable blackout curtain strips with suction cups", note: "July = 24 hrs daylight. Kids cannot sleep without them.", url: null },
      { text: "Enable T-Mobile data roaming before departure", note: "Settings → Cellular → Roaming → On", url: null },
      { text: "Pack kids medical kit — Dramamine, ibuprofen, antihistamine, blister plasters, sunscreen SPF 50, melatonin, antidiarrheal", note: null, url: null },
      { text: "Notify your bank of Iceland travel Jul 15 to 28", note: null, url: null },
      { text: "Buy Icelandic krona — withdraw ~15,000 ISK at Keflavik airport ATM on arrival", note: "~$110 total for the family. Card accepted almost everywhere but useful for emergencies.", url: null },
    ],
  },
];

const budgetLines = [
  { label: "Flights (family of 4)", comfort: 3000, goBig: 4500 },
  { label: "SUV Rental (10 days, full insurance)", comfort: 2000, goBig: 2800 },
  { label: "Fuel (~1,500 km total)", comfort: 420, goBig: 420 },
  { label: "Iceland Km Tax (2026)", comfort: 105, goBig: 105 },
  { label: "Lodging (11 nights, 4 hotels) ✓ BOOKED", comfort: 6371, goBig: 6371 },
  { label: "Food + Restaurants", comfort: 2200, goBig: 3800 },
  { label: "Tours + Activities", comfort: 2500, goBig: 4000 },
];

const activities = [
  { name: "Puffin Express Boat Tour", location: "Reykjavik", price: "$35 adult / $20 child", duration: "1 hr", book: "elding.is", priority: true },
  { name: "Whale Watching Classic Tour", location: "Reykjavik", price: "$80 adult / $45 child", duration: "3 to 3.5 hrs", book: "elding.is", priority: true },
  { name: "Whales of Iceland Museum", location: "Reykjavik", price: "$30 adult / $15 child", duration: "1.5 hrs", book: "Walk-in fine", priority: true },
  { name: "North Sailing Whale + Puffin Combo", location: "Husavik", price: "$100 adult / $55 child", duration: "3 hrs", book: "northsailing.is — book months ahead", priority: true },
  { name: "Jokulsarlon Amphibious Boat Tour", location: "Glacier Lagoon", price: "$65 adult / $35 child", duration: "45 min", book: "icelagoon.is", priority: true },
  { name: "Family Glacier Walk (Vatnajokull)", location: "Skaftafell", price: "$85 adult / $65 child", duration: "3 hrs", book: "icelandicmountainguides.is", priority: true },
  { name: "Icelandic Horse Riding", location: "Snaefellsnes", price: "$80 adult / $60 child", duration: "1 to 2 hrs", book: "Book through hotel", priority: true },
  { name: "Blue Lagoon Comfort Package", location: "Reykjavik day trip (Jul 18 or 19)", price: "$120 adult / $60 child", duration: "2 to 3 hrs", book: "bluelagoon.com ONLY — book afternoon slot 3pm or 4pm. Comfort package only, skip Lava Restaurant for family visit.", priority: true },
  { name: "Myvatn Nature Baths", location: "Lake Myvatn", price: "$38 adult / FREE under 12", duration: "2 hrs", book: "jardbadin.is", priority: false },
  { name: "Secret Lagoon", location: "Fludir, Golden Circle", price: "$28 adult / $15 child", duration: "1.5 hrs", book: "secretlagoon.is", priority: false },
  { name: "Whale Museum Husavik", location: "Husavik", price: "$22 adult / $10 child", duration: "1 hr", book: "Walk-in fine", priority: false },
];

const freeAttractions = [
  "Thingvellir National Park — walk between tectonic plates (just $10 parking)",
  "Seljalandsfoss, Gljufrabui, Skogafoss, Gullfoss waterfalls",
  "Reynisfjara black sand beach and basalt columns",
  "Diamond Beach — icebergs on black sand",
  "Dimmuborgir lava labyrinth at Myvatn",
  "Skutustadir pseudo-craters",
  "Krafla volcano and Leirhnjukur lava field",
  "Seydisfjordur rainbow town detour",
  "East Fjords scenic drive — reindeer watching",
  "Kirkjufell mountain viewpoint",
  "Ytri-Tunga seal beach (~$5 parking)",
];

const packingList = {
  "Clothing": [
    "Waterproof jacket with hood — worn every day, non-negotiable",
    "Waterproof rain trousers for the kids",
    "Merino wool base layers (2 sets each)",
    "Fleece mid-layer",
    "Warm hat and gloves — July highs are only 10 to 14C (50 to 57F)",
    "Sturdy waterproof hiking boots, not trail runners",
    "Sandals or Crocs for geothermal pools",
    "Swimsuit for each person — used at 3 pools on this trip",
    "7+ pairs of socks per person — feet will get wet",
  ],
  "Kids Specific": [
    "Blackout sleep masks — July means 24-hr daylight, essential for kids' sleep",
    "Bug head nets for Myvatn midge season (buy locally or bring)",
    "Small daypack each kid for hikes",
    "Sea-Bands or kids' Dramamine for whale watching boats",
    "Compact binoculars — transforms whale watching and bird spotting",
    "Snacks for the car — trail mix, bars, fruit pouches",
    "Birds of Iceland picture guide for the 9-year-old",
  ],
  "Car Essentials": [
    "Grocery bags — big shop at Bonus supermarket on Day 1",
    "Soft cooler bag for dairy and produce",
    "4 reusable water bottles — tap water is glacier-fed, never buy bottled",
    "Car chargers and power bank",
    "Wet wipes and hand sanitizer",
    "High-protein snacks for East Fjords — no services for hours",
  ],
  "Documents + Admin": [
    "Passports (no visa needed for US citizens in Iceland)",
    "Car rental docs and insurance confirmation",
    "Printed hotel confirmations for all 4 base camps",
    "Iceland emergency number: 112",
    "road.is app — check road conditions every morning",
    "Google Maps or Maps.me downloaded offline for Iceland",
    "Travel insurance with trip cancellation and emergency medical",
  ],
};

const carCompanies = [
  {
    name: "MyCar Rental",
    rating: "9.6", reviews: "493",
    tag: "Top Pick",
    tagColor: "#4a9ab5",
    fleet: "2023–2025 vehicles",
    notes: "Highest-rated Icelandic company. Connected to Toyota's nationwide service network — if anything breaks on the Ring Road, you have backup. Free airport shuttle, smooth pickup.",
    url: "https://www.mycar.is/",
    priceRange: "$90–590/day",
  },
  {
    name: "Lotus Car Rental",
    rating: "9.6", reviews: "500+",
    tag: "Best Value",
    tagColor: "#4a8a68",
    fleet: "2022–2025 vehicles",
    notes: "Local family-owned. Platinum insurance includes FREE WIFI IN THE CAR — genuinely useful for road.is and maps. No deposit with a valid credit card. 24/7 office, self-service pickup available with Platinum.",
    url: "https://www.lotuscarrental.is/",
    priceRange: "$75–520/day",
  },
  {
    name: "Lava Car Rental",
    rating: "9.4", reviews: "2,000+",
    tag: "Family Favorite",
    tagColor: "#c08030",
    fleet: "Brand new vehicles only",
    notes: "Family-owned since 2016. No deposit at pickup. All insurance included as standard. Won Iceland's Leading Car Rental award 2023 and 2024. 5 min from Keflavik with free shuttle.",
    url: "https://www.lavacarrental.is/",
    priceRange: "$80–400/day",
  },
  {
    name: "Blue Car Rental",
    rating: "8.8", reviews: "1,000+",
    tag: "Closest to Airport",
    tagColor: "#8a6aa8",
    fleet: "New fleet, no older models",
    notes: "300m from KEF terminal. Transparent pricing, no hidden fees, no deposit. Discounted fuel at partner stations. Consistently smooth operations.",
    url: "https://www.bluecarrental.is/",
    priceRange: "$75–520/day",
  },
];

const insuranceItems = [
  {
    name: "CDW — Collision Damage Waiver",
    included: true,
    verdict: "Included — verify at booking",
    color: "#4a8a68",
    detail: "Covers collision damage to the car body with a deductible. Third-Party Liability (legally required) is also included automatically. Both baseline coverages come with every rental.",
  },
  {
    name: "SCDW — Super CDW",
    included: true,
    verdict: "Usually included — lowers deductible",
    color: "#4a8a68",
    detail: "Reduces your deductible if you're in an accident. Most local companies include this automatically. With a Silver/base tier you may still have a $400-1,100 deductible — Platinum brings it to zero.",
  },
  {
    name: "GP — Gravel Protection",
    included: false,
    verdict: "GET IT — essential",
    color: "#4a9ab5",
    detail: "If you only buy ONE add-on, make it this. Gravel road stone chips are the single most common claim in Iceland. A cracked windshield without GP runs $1,500-3,000 out of pocket. Covers windshield, headlights, paint, mirrors.",
  },
  {
    name: "SAAP — Sand and Ash Protection",
    included: false,
    verdict: "GET IT — essential",
    color: "#4a9ab5",
    detail: "Volcanic sand and ash causes paint, window, and plastic damage, especially on the south coast and near active volcanoes. A sandstorm hit can cost $3,500-10,500 out of pocket. ~$15-25/day. Non-negotiable for your route.",
  },
  {
    name: "TP — Theft Protection",
    included: true,
    verdict: "Usually included — verify",
    color: "#4a8a68",
    detail: "Covers vehicle theft. Typically included at reputable Icelandic companies. Iceland has very low theft rates but confirm at booking anyway.",
  },
  {
    name: "Tire Protection (TIP)",
    included: false,
    verdict: "Worth it on Platinum",
    color: "#4a9ab5",
    detail: "Usually bundled into Platinum/Zero Excess packages. Covers flat tires and wheel damage. Gravel roads puncture tires regularly. Without TIP, replacements are on you.",
  },
  {
    name: "Platinum / Zero Excess Bundle",
    included: false,
    verdict: "RECOMMENDED — all-in-one",
    color: "#4a9ab5",
    detail: "Most companies offer a top-tier bundle (Platinum/Zero Excess/Full) that includes CDW+SCDW+GP+SAAP+TP+TIP all with $0 deductible. Costs $22-45/day, total $250-500 for 11 days. For peace of mind and the math on potential damage, it's worth it.",
  },
  {
    name: "Wind Damage to Doors",
    included: false,
    verdict: "NOT insurable — be careful",
    color: "#b56a3a",
    detail: "No insurance covers wind damage to car doors. Icelandic wind can rip a door backwards off its hinges in one gust. Repairs run $1,500-3,000. Rule: park facing into the wind, hold doors firmly when opening.",
  },
  {
    name: "Water / River Crossing Damage",
    included: false,
    verdict: "NEVER covered — avoid",
    color: "#b56a3a",
    detail: "No insurance at any level covers water damage from river crossings. You won't be doing F-roads so this shouldn't come up, but know that if you drive through a stream and it kills the engine, you pay for everything.",
  },
  {
    name: "Credit Card Coverage",
    included: false,
    verdict: "Don't rely on it alone",
    color: "#b56a3a",
    detail: "Many US cards exclude Iceland entirely or exclude 4x4/SUV vehicles. Even cards that cover international rentals usually exclude gravel and sand damage — the two most common claims here. Call your card issuer and get exclusions IN WRITING before departure. Buy rental insurance regardless.",
  },
];

const drivingRules = [
  { icon: "🚗", rule: "Drive on the right", detail: "Same as the US — no adjustment needed." },
  { icon: "💡", rule: "Headlights on always", detail: "Day or night, midnight sun or blizzard. It is the law. Most rentals have auto lights — confirm at pickup." },
  { icon: "🍺", rule: "Effectively zero alcohol", detail: "BAC limit is 0.02% — one drink and you cannot legally drive. Fines up to 100,000 ISK, license suspension, or jail." },
  { icon: "📱", rule: "No phone while driving", detail: "Hands-free only. Fines are actively enforced." },
  { icon: "🐑", rule: "Sheep on the road", detail: "Free-roaming sheep appear without warning, year-round. If you see a lamb on one side and a sheep on the other, expect the lamb to bolt. Slow down near any livestock. Hitting a sheep must be reported to 112 immediately." },
  { icon: "🌉", rule: "Single-lane bridges", detail: "You will encounter many. Sign says Einbreid Bru. First vehicle to arrive has right of way. If a car is already on it, wait. If you arrive simultaneously, car on the right goes first. Never rush these." },
  { icon: "💨", rule: "Icelandic wind is serious", detail: "Wind can push your vehicle and rip car doors off hinges. Always hold your door firmly when opening. Park facing into the wind when possible. Wind damage is not covered by any insurance." },
  { icon: "🪨", rule: "Gravel roads — slow down", detail: "About a third of Iceland's roads are gravel. Reduce speed before corners. Keep extra distance — flying stones crack windscreens. Do not brake hard. Watch for road edges that drop off suddenly." },
  { icon: "⚠️", rule: "Malbik Endar sign", detail: "This means pavement ends — road is about to become gravel. Slow down immediately when you see it." },
  { icon: "🔄", rule: "Roundabouts work differently", detail: "Inner lane always has priority — opposite to what many US drivers expect. Signal right when exiting regardless of lane." },
  { icon: "🚫", rule: "Off-road driving is illegal", detail: "Everywhere, even on soft grass or moss. Tire tracks damage Iceland's fragile volcanic landscape for decades. Fines are severe." },
  { icon: "📷", rule: "No stopping in the road for photos", detail: "Pull fully off the road before stopping. A common tourist mistake that causes accidents and hefty fines." },
];

const speedLimits = [
  { type: "Towns and urban areas", limit: "50 km/h", mph: "31 mph" },
  { type: "Gravel rural roads", limit: "80 km/h", mph: "50 mph" },
  { type: "Paved rural roads (Ring Road)", limit: "90 km/h", mph: "56 mph" },
  { type: "Single-lane bridges", limit: "50 km/h", mph: "31 mph" },
];

const apps = [
  { name: "road.is", use: "Live road closures, weather alerts, F-road status — check every morning before driving", essential: true, url: "https://www.road.is/" },
  { name: "112 Iceland", use: "Safety app — sends your GPS to emergency services instantly. Install before you land.", essential: true, url: "https://safetravel.is/112-iceland-app/" },
  { name: "Maps.me", use: "Offline maps — download Iceland before you go. No cell signal in remote areas.", essential: true, url: "https://maps.me/" },
  { name: "Vedur.is", use: "Iceland Met Office weather app — essential for day-to-day planning", essential: true, url: "https://en.vedur.is/" },
  { name: "Google Maps", use: "Download Iceland offline as a backup. Familiar interface for the family.", essential: false, url: "https://maps.google.com" },
];

const carPickupChecklist = [
  "Physical credit card in main driver's name — mobile wallets and virtual cards are rejected",
  "Automatic transmission confirmed — manuals are cheaper but brutal with kids and long drives",
  "4x4/AWD confirmed — not just 'SUV', actual four-wheel drive",
  "2 high-back booster seats reserved — confirm RESERVED for your dates, not just requested. ECE R44/04 or R129 certified (look for orange sticker).",
  "Gravel Protection (GP) added to policy",
  "Sand and Ash Protection (SAAP) added to policy",
  "Platinum / Zero Excess bundle for maximum coverage with $0 deductible",
  "Additional driver added — free at most local companies, essential for switching on long drives",
  "Ask where the spare tire is and how to use it before leaving the lot",
  "Walk-around video of entire car BEFORE driving off — all 4 sides, roof, underside, windshield. Photograph every existing scratch, chip, dent.",
  "Verify fuel tank is actually full (not just stated as full)",
  "Confirm how the 2026 km road tax is charged — per km at return or built into daily rate",
  "Confirm GPS is in the car OR your phone offline maps are ready (Google Maps + Maps.me)",
  "Check headlights are set to automatic (legally required on at all times)",
  "Save rental company's 24/7 emergency number in your phone",
];

const carSeatRules = {
  rule: "Iceland law: all children under 135 cm (4'5\") must use an approved child car seat or booster — no exceptions.",
  yourKids: [
    {
      age: "9-year-old",
      action: "Measure height tonight",
      detail: "Iceland's threshold is 135 cm (4'5\"). If under 135 cm → high-back booster required. If over 135 cm → regular seatbelt in back seat is legal (but booster recommended until 150 cm for proper seatbelt fit). Never front seat with active airbag until 150 cm.",
    },
    {
      age: "6-year-old",
      action: "Booster seat required",
      detail: "High-back booster is recommended over backless. Must weigh at least 15 kg (33 lbs) for a booster — if lighter, a forward-facing harness seat is required. Back seat only.",
    },
  ],
  dontDo: "DO NOT bring US car seats. They're not ECE R44/04 or R129 certified and are technically illegal in Iceland. Could be an insurance issue if you're in an accident.",
  whatToDo: "Rent 2 high-back boosters from your rental company. $7–28 per seat per day. For 11 days × 2 seats = roughly $150–300 extra. Reserve in advance — July demand is high. When booking, give them each child's height and weight.",
};

const cantMiss = {
  food: [
    {
      name: "Lamb soup (Kjötsúpa)",
      where: "Everywhere — every guesthouse, every town",
      price: "$15–22",
      verdict: "The national comfort food. Slow-cooked Icelandic lamb with root vegetables. Order it on your first cold, wet day after a waterfall. You will order it again.",
      mustTry: true,
    },
    {
      name: "Hot dog at Bæjarins Beztu",
      where: "Old Harbour, Reykjavik — the red stand",
      price: "$4",
      verdict: "Eina með öllu — one with everything. Lamb and pork dog with raw onion, crispy onion, ketchup, sweet mustard, and remoulade. Bill Clinton ate here. So did Anthony Bourdain. Your kids will demand a second one.",
      mustTry: true,
    },
    {
      name: "Langoustine (Lobster soup or tails)",
      where: "Hofn — the langoustine capital of Iceland",
      price: "$30–50 for a bowl",
      verdict: "Hofn is 30 min from your glacier lagoon base camp. This is the freshest, sweetest langoustine you will ever eat. Go to Pakkhus restaurant. Worth every krona.",
      mustTry: true,
    },
    {
      name: "Skyr",
      where: "Every supermarket, every breakfast table",
      price: "$3–5 at a supermarket",
      verdict: "Thick Icelandic dairy — not quite yogurt, not quite cheese. High protein, slightly tangy. Your kids will live on this at breakfast. Buy it at Bonus on Day 1 and keep it in the cooler bag.",
      mustTry: true,
    },
    {
      name: "Rye bread ice cream",
      where: "Geysir area and Mývatn",
      price: "$6–9",
      verdict: "Warm dark rye bread baked underground using geothermal heat, crumbled over soft vanilla ice cream. Sounds bizarre. Tastes extraordinary. The 9-year-old will talk about this for weeks.",
      mustTry: true,
    },
    {
      name: "Icelandic fish and chips",
      where: "Reykjavik Old Harbour — try Fishmarket or Fish & Chips van",
      price: "$18–25",
      verdict: "Cod and haddock so fresh it was in the ocean yesterday. The batter is lighter than anything you know from the US. Eat it standing up at the harbour.",
      mustTry: true,
    },
    {
      name: "Arctic char (Bleikja)",
      where: "Any restaurant near the glacier zone or Myvatn",
      price: "$30–45",
      verdict: "Indigenous Icelandic fish, salmon-like but more delicate. Often served with local herbs and glacier water butter. Order it instead of salmon — it is far more interesting and uniquely Icelandic.",
      mustTry: false,
    },
    {
      name: "Kleina (Icelandic doughnut)",
      where: "Any bakery, petrol station, guesthouse",
      price: "$2–3",
      verdict: "Twisted fried pastry, lightly spiced with cardamom. The Icelandic version of a doughnut, less sweet and more interesting. Buy a bag at a petrol station for the car.",
      mustTry: false,
    },
    {
      name: "Hákarl (fermented shark)",
      where: "Supermarkets and some restaurants",
      price: "$5 to try",
      verdict: "Fermented Greenlandic shark, smells like powerful ammonia, tastes like blue cheese crossed with something alarming. A genuine Icelandic tradition. Your 9-year-old will either be horrified or delighted. Try a tiny piece — it is a story forever.",
      mustTry: false,
    },
    {
      name: "Skúffukaka (sheet cake)",
      where: "Any Icelandic bakery or cafe",
      price: "$4–6",
      verdict: "Dense chocolate cake with caramel glaze, sold in thick slabs. Every Icelandic grandmother makes it. Every cafe has a version. Perfect with coffee while it rains outside.",
      mustTry: false,
    },
  ],

  experiences: [
    {
      name: "Jökulsárlón at 10pm under the midnight sun",
      type: "Unmissable moment",
      detail: "No boat tour. Just walk to the lagoon edge at 10pm when everyone else is gone. Icebergs glowing in angled golden light, complete silence, seals occasionally surfacing. This is the single most otherworldly thing you will experience in Iceland. Build it into Day 5 deliberately.",
    },
    {
      name: "Walk behind Seljalandsfoss",
      type: "Physical experience",
      detail: "The path goes completely behind the waterfall curtain. You are drenched, the roar is overwhelming, and you see the valley through a wall of water. The kids will think this is the best thing they have ever done. Wear the full waterproofs.",
    },
    {
      name: "Watch Strokkur erupt from 2 metres away",
      type: "Nature spectacle",
      detail: "Every 5 to 8 minutes, a column of boiling water shoots 20 to 30 metres into the air. Go late evening when the tour buses are gone and stand right at the edge. The ground trembles slightly before it blows. Kids absolutely lose their minds.",
    },
    {
      name: "The tectonic plate walk at Þingvellir",
      type: "Geological wonder",
      detail: "You walk along the actual rift between the North American and Eurasian plates. The ground is slowly pulling apart — about 2 cm per year. Explain this to the kids while standing in it. The 9-year-old will be thinking about this for days.",
    },
    {
      name: "Geothermal pool, late evening",
      type: "Cultural experience",
      detail: "Whether Myvatn Nature Baths, Secret Lagoon, or Blue Lagoon — pick at least one. Sitting in 38°C geothermal water at 9pm under a pale gold sky while it is 12°C outside is one of the most distinctly Icelandic feelings there is. Kids get it immediately.",
    },
    {
      name: "Driving the East Fjords in silence",
      type: "Drive and atmosphere",
      detail: "Put on music you love, slow down, and drive the East Fjords without an agenda. The winding in and out of fjords, the reindeer scanning, the almost total absence of other people — it is meditative in a way that big attractions cannot be. One of the best days of the trip.",
    },
    {
      name: "Glacier walk on Vatnajökull",
      type: "Once in a lifetime",
      detail: "Standing on 1,000 metres of ancient ice with your 6-year-old in crampons is an absurd and wonderful thing. The ice is vivid blue inside the crevasses. The silence is absolute except for wind. This is why you came to Iceland.",
    },
    {
      name: "Whale breaching next to the boat at Húsavík",
      type: "Wildlife encounter",
      detail: "When a humpback whale surfaces 10 metres from your wooden boat and exhales, the spray hits you and the sound is enormous. Your kids will be standing there with their mouths open. This is the wildlife moment of the trip.",
    },
  ],

  dontMiss: [
    { item: "Gljúfrabúi waterfall", why: "Secret cave waterfall 10 min walk from Seljalandsfoss. Almost nobody goes. You scramble through a narrow rock opening and suddenly a waterfall is inside a cave above you." },
    { item: "Diamond Beach at dawn or dusk", why: "Icebergs washed up on black sand in raking light. Photographic and genuinely surreal. Five minutes from your glacier base camp." },
    { item: "Dimmuborgir at golden hour", why: "The twisted lava towers turn orange and shadow at golden hour (which is basically all evening in July). Your kids can run loose through the labyrinth." },
    { item: "Hofn's langoustine festival (late June/July)", why: "If the timing aligns, Hofn hosts a langoustine festival with tastings, boats, and festivities. Check the dates — worth planning around." },
    { item: "Hallgrímskirkja tower elevator", why: "Most people photograph the church but don't take the elevator to the top. The view over Reykjavik is spectacular and it costs almost nothing." },
    { item: "Feed the birds at Tjörnin pond, Reykjavik", why: "The city pond in central Reykjavik has ducks, geese, and swans that are completely tame. Buy birdseed (not bread) from nearby shops. Great for the 6-year-old on arrival day." },
  ],

  souvenirsBuy: [
    {
      name: "Lopapeysa (Icelandic wool sweater)",
      price: "$80–180",
      where: "Rammagerðin, Handknitting Association of Iceland (Laugavegur), or direct from farms",
      why: "Hand-knitted by Icelandic women using pure Icelandic wool. The circular yoke pattern is genuinely unique. Keeps you warm in the field for the rest of the trip. One of the few souvenirs that is both authentic and useful. Buy early — wear it the whole trip.",
    },
    {
      name: "Nói Síríus Icelandic chocolate",
      price: "$4–8 per bar",
      where: "Any Bónus or Krónan supermarket",
      why: "Iceland's beloved domestic chocolate brand. The blue wrapper milk chocolate bar has been made since 1920. Buy a dozen at the supermarket — far cheaper than tourist shops and just as good.",
    },
    {
      name: "Icelandic sea salt (Saltverk)",
      price: "$12–18",
      where: "Specialty shops in Reykjavik, or direct at the Westfjords",
      why: "Handcrafted using geothermal energy in the Westfjords. Genuinely extraordinary salt, flaky and clean. The small tins are perfect gifts. Cooks back home will love it.",
    },
    {
      name: "Lava jewelry or volcanic stone pieces",
      price: "$20–80",
      where: "Reykjavik design shops — try Geysir or Kraum",
      why: "Jewellery set with Icelandic obsidian, lava, or hekla stone. Genuinely made from local materials. Far more meaningful than generic tourist versions.",
    },
    {
      name: "Icelandic wool blanket or throw",
      price: "$60–150",
      where: "Rammagerðin or Handknitting Association",
      why: "Pure Icelandic wool, impossibly warm, will outlast anything you own. The natural undyed colours — cream, grey, brown, black — are beautiful. A real heirloom piece.",
    },
    {
      name: "Brennivín (Icelandic schnapps)",
      price: "$25–35",
      where: "Vínbúðin (government liquor store) — only place alcohol is sold",
      why: "The Icelandic national spirit, caraway-flavoured, called 'Black Death.' The Reykjavik Vínbúðin has a good selection. A great gift for a liquor-drinking friend back home who has never heard of it.",
    },
    {
      name: "Children's picture books in Icelandic",
      price: "$10–20",
      where: "Mál og Menning bookshop, Reykjavik",
      why: "An Icelandic picture book or saga for kids is a genuinely meaningful souvenir. Even if they can't read it, the illustrations are stunning and it connects them to the trip.",
    },
  ],

  souvenirAvoid: [
    { item: "Plastic Viking helmets and 'I Love Iceland' hoodies", why: "Made in China, sold at inflated prices near tourist spots. Completely disconnected from anything Icelandic." },
    { item: "Airport duty-free chocolate", why: "Keflavik airport charges roughly 3x the supermarket price for the same Nói Síríus bars. Buy at Bónus on Day 1 and bring them home in your luggage." },
    { item: "Puffin stuffed animals from tourist shops", why: "Manufactured abroad. If the kids want puffin things, buy them at the Icelandic-made craft shops in Reykjavik, not the airport stalls." },
    { item: "Lopapeysa from a tourist shop that seems cheap", why: "Authentic hand-knitted lopapeysas cost $80+. If it's $25, it is not authentic Icelandic wool and not hand-knitted. Go to the Handknitting Association on Skólavörðustígur and buy the real thing." },
    { item: "Alcohol anywhere other than Vínbúðin", why: "Alcohol is only sold legally at government Vínbúðin stores. Anything sold elsewhere is either illegal or massively overpriced duty-free. Find the store, buy there." },
  ],
};

const desserts = {
  classics: [
    {
      name: "Skyr",
      emoji: "🥛",
      what: "Iceland's iconic yogurt-like dessert. Thicker, creamier, less sour than Greek yogurt. Eaten plain or topped with berries and honey.",
      where: "Every supermarket (Bonus, Kronan) sells 20+ flavors. Try blueberry, vanilla, or caramel. Breakfast staple at every hotel.",
      kidTip: "Get them the vanilla or blueberry skyr cups from Bonus on day 1 — cheap, filling, healthy-ish breakfast for the apartment.",
    },
    {
      name: "Skúffukaka",
      emoji: "🍫",
      what: "Iceland's national chocolate sheet cake. Moist, deeply chocolatey, topped with chocolate glaze and toasted coconut. Every Icelandic family has their own recipe. It's THE cake — served at every birthday, every gathering.",
      where: "Bernhöftsbakarí in Reykjavik has the most traditional version. Most bakeries on the Ring Road sell their own take. Sandholt in Reykjavik also excellent.",
      kidTip: "Dense, fudgy, chocolate-coconut — basically a brownie elevated. 6 and 9 year olds will demolish it. Pair with cold milk.",
    },
    {
      name: "Kleina (Kleinur plural)",
      emoji: "🍩",
      what: "Twisted, deep-fried dough knots flavored with cardamom. Slightly crisp outside, soft inside. The Icelandic donut, eaten with coffee or hot chocolate. 200+ years of history.",
      where: "Sandholt Bakery (Laugavegur), Bernhöftsbakarí. Or — fun fact — IKEA's kleinur are legitimately considered some of the best in Iceland by locals. The recipe is from an Icelandic grandmother.",
      kidTip: "Sweet, slightly crunchy, twisted shape that's fun to eat. Order a few — they disappear fast.",
    },
    {
      name: "Snúður",
      emoji: "🧁",
      what: "Icelandic cinnamon roll, but bigger and with a thick layer of chocolate, caramel, or pink glaze on top. Eat it by peeling apart the layers. Much more bready than American cinnamon rolls.",
      where: "Braud & Co (rainbow-painted storefront in Reykjavik) — the defining version. Also Sandholt. Available at most gas station bakeries across Iceland too.",
      kidTip: "The pink-glaze bleikt snúður is a kid magnet. Get a chocolate one for yourself. One is enough to share between 2 kids.",
    },
    {
      name: "Pönnukökur",
      emoji: "🥞",
      what: "Thin Icelandic pancakes/crepes, folded and filled with whipped cream and rhubarb jam, or rolled with sugar inside. More delicate than American pancakes.",
      where: "Kaffi Loki near Hallgrímskirkja in Reykjavik (traditional Icelandic food with pönnukökur on the menu). Mokka Kaffi (Reykjavik's oldest coffeehouse, since 1958) is iconic.",
      kidTip: "Order one to share between the kids — with whipped cream and jam they'll be thrilled. Adults: get one with sugar and lemon.",
    },
    {
      name: "Hjónabandssæla",
      emoji: "🥧",
      what: "Literally 'marriage bliss' — a rhubarb or blueberry jam tart with a buttery oat crumble top. Dense, sweet, slightly tart. A bakery case staple.",
      where: "Braud & Co in Reykjavik. Most proper bakeries across Iceland. Café Vatnajökull near Skaftafell is a great stop after the glacier walk.",
      kidTip: "Kids love the crumble top. The rhubarb version is tart-sweet; blueberry is sweeter and a safer kid bet.",
    },
    {
      name: "Vínarterta",
      emoji: "🎂",
      what: "Iceland's layered celebration cake — 5 to 7 thin almond cake layers sandwiched with sticky prune jam. Traditionally a Christmas cake but available year-round.",
      where: "Bernhöftsbakarí. Large bakeries in Reykjavik and Akureyri. Sliced thin — a little goes a long way.",
      kidTip: "More of an adult dessert — the prune filling is less kid-friendly. But show them a slice for the visual — the layers are striking.",
    },
    {
      name: "Ástarpungar (Love Balls)",
      emoji: "🍪",
      what: "Deep-fried sweet dough balls studded with raisins. Denser than kleina, eaten warm with coffee. The name translates to 'love balls' which delights every English-speaking tourist.",
      where: "Most Icelandic bakeries. Great warm on a cold morning.",
      kidTip: "Ball-shaped, sweet, fun name — your kids will request 'love balls' for weeks after you get home.",
    },
  ],
  iceCream: [
    {
      name: "Brynja (Akureyri) — the pilgrimage spot",
      emoji: "🍦",
      what: "Akureyri's legendary soft-serve ice cream stand, open since 1939. Icelanders drive hours for it. The plain vanilla is the stuff of Icelandic childhood memories.",
      where: "Aðalstræti 3, Akureyri. On foot from your log cabin base. Open late.",
      kidTip: "This is NON-NEGOTIABLE on your Akureyri day. Go. Get the dipped cone. The Icelandic soft-serve tradition is a real thing and this is its temple.",
    },
    {
      name: "Valdís (Reykjavik)",
      emoji: "🍨",
      what: "Reykjavik's beloved ice cream shop. 20+ rotating flavors including licorice, rye bread, birch, sea salt caramel, and seasonal Icelandic berries.",
      where: "Grandagarður 21, Reykjavik (Old Harbour area, very close to your apartment).",
      kidTip: "Let the kids pick the weirdest flavor they can find. Skip licorice (adult-only Icelandic specialty). The strawberry and vanilla are kid-safe winners.",
    },
    {
      name: "Ísbúð Vesturbæjar (Reykjavik)",
      emoji: "🍦",
      what: "Classic neighborhood ice cream stand, locals' favorite. Soft-serve with every topping imaginable — chocolate dip, rainbow sprinkles, crushed Prins Póló (Iceland's favorite candy bar).",
      where: "Hagamelur 67, Reykjavik. Walkable from Reykjavik Residence area.",
      kidTip: "Order 'brædingur' — soft serve with broken-up candy mixed in. Peak kid happiness.",
    },
    {
      name: "Vinberið (Blonduos, drive day stop)",
      emoji: "🍨",
      what: "Famous stop on the Akureyri-to-Snæfellsnes drive. Homemade ice cream plus full cafe menu. Legitimate road trip institution.",
      where: "Blonduos, right on Ring Road between Akureyri and Snæfellsnes. About halfway through your Day 10 drive.",
      kidTip: "Perfect break point on the long Day 10 drive. Proper lunch and ice cream in one stop.",
    },
    {
      name: "Sveitasetrið Gamli Bær (near Vik)",
      emoji: "🍦",
      what: "Farm-based ice cream made from the dairy's own cows. Rare and special — farm-to-cone.",
      where: "Just off Ring Road near Vik. Good stop on the way to the glacier zone.",
      kidTip: "Tell the kids the milk came from cows they can see from the window. Blows their minds.",
    },
  ],
  hotDrinks: [
    {
      name: "Icelandic hot chocolate",
      emoji: "☕",
      what: "Thicker and richer than American hot chocolate, usually topped with a pile of whipped cream. The post-waterfall reward.",
      where: "Every cafe. Notable: Mokka Kaffi (Reykjavik), Kaffi Ilmur (Akureyri), Café Loki (Reykjavik).",
      kidTip: "After a cold whale watching boat or a waterfall soaking, ordering hot chocolate is a tradition. Worth every krona.",
    },
    {
      name: "Kakósúpa (chocolate soup)",
      emoji: "🍵",
      what: "Literally chocolate soup — hot cocoa served as a dessert course with whipped cream. Icelandic school cafeteria classic many adults still crave.",
      where: "Some traditional restaurants. Ask specifically — not every menu lists it.",
      kidTip: "Kids will lose their minds at 'chocolate soup.' If you see it on a menu, order it immediately.",
    },
  ],
  chocolate: [
    {
      name: "Nói Síríus (grocery store chocolate)",
      emoji: "🍫",
      what: "Iceland's beloved national chocolate brand since 1933. Milk chocolate, hazelnut, rum raisin, licorice-filled. Cheap, delicious, ubiquitous.",
      where: "Every Bonus and Kronan grocery store. Stock up on Day 1. DO NOT buy at the airport — 3x the price.",
      kidTip: "Buy a handful of different bars for trip snacks. The milk chocolate 'Konsum' bars are the kid-safe classic.",
    },
    {
      name: "Prins Póló",
      emoji: "🍫",
      what: "Polish wafer bar that became Iceland's unofficial national candy. Every Icelandic child grew up on these. Cheap, chocolatey, crispy.",
      where: "Every gas station and grocery store.",
      kidTip: "Trip snack essential. Pack a handful in the car.",
    },
    {
      name: "Omnom Chocolate (artisan)",
      emoji: "🍫",
      what: "Reykjavik-based bean-to-bar chocolate maker, internationally famous. Beautiful packaging, serious craft chocolate. Flavors like black and burnt barley, liquorice and sea salt, milk + caramel.",
      where: "Omnom factory store at Hólmaslóð 4, Reykjavik (worth a visit — free tasting). Also at Flying Tiger and gift shops.",
      kidTip: "Grown-up chocolate. Let the kids taste a square and keep the rest for yourself. The milk + caramel is kid-friendly.",
    },
  ],
  candy: [
    {
      name: "Nammi (pick 'n mix)",
      emoji: "🍬",
      what: "Every supermarket has a massive pick 'n mix candy wall with 50+ options. Saturday candy is an Icelandic tradition — locals call it 'laugardagsnammi.' Pay by weight.",
      where: "Bonus, Kronan, every grocery. Saturday afternoons especially busy with families doing their weekly candy run.",
      kidTip: "Give the kids a small bag each and let them pick their own. This is peak kid happiness. Avoid the salted licorice bins — that stuff is aggressive.",
    },
    {
      name: "Lakkrís (Icelandic licorice)",
      emoji: "🖤",
      what: "Iceland's national sweet obsession. Salted licorice, chocolate-covered licorice, licorice-in-everything. An acquired taste — most adults love it, most kids hate it.",
      where: "Everywhere. Djúpur is the legendary brand.",
      kidTip: "Let them try ONE piece. They will make a face. You will now have a trip story.",
    },
    {
      name: "Appolo Lakkrís (chocolate-covered licorice)",
      emoji: "🍬",
      what: "Icelandic candy classic — soft licorice chunks coated in milk chocolate. The training-wheels version of Icelandic licorice for the rest of the world.",
      where: "Any grocery store, gas station.",
      kidTip: "More kid-accessible than pure salted licorice. Start here if they want to try Icelandic candy.",
    },
  ],
  specialTreats: [
    {
      name: "Reykjavik Roasters pastry + coffee",
      emoji: "☕",
      what: "Reykjavik's best coffee shop. Their pastry case rotates daily — cardamom buns, kanelbullar, cruffins, seasonal specials.",
      where: "Kárastígur 1, Reykjavik. Small and always busy.",
      kidTip: "Adult dessert destination, but the cardamom bun for the kids works.",
    },
    {
      name: "Bæjarins Beztu Bryggjan Ice Cream",
      emoji: "🍦",
      what: "Dip-cone soft-serve next door to the famous hot dog stand. Post-hot-dog tradition for Reykjavik families.",
      where: "Tryggvagata, Old Harbour.",
      kidTip: "Hot dog THEN ice cream. Full Reykjavik kid experience.",
    },
    {
      name: "Gullfoss Kaffi rhubarb crumble",
      emoji: "🥧",
      what: "At the Gullfoss waterfall visitor center on Golden Circle day — their hot rhubarb crumble with vanilla ice cream is reputedly the best in Iceland.",
      where: "Gullfoss parking lot cafe. Right on your Day 3 route.",
      kidTip: "Perfect warm-up after the freezing waterfall mist. Share one between the whole family.",
    },
    {
      name: "Hot fresh kleina from Almar Bakari",
      emoji: "🍩",
      what: "Three locations along the South Ring Road (Hveragerði, Selfoss, Hella). Ring Road legend — hot kleinur straight from the fryer.",
      where: "Almar Bakari, roadside. Right on your Day 5 South Coast drive.",
      kidTip: "Make this the first stop out of Reykjavik on South Coast day. Hot, sweet, warm kids = happy kids.",
    },
  ],
};

const TABS = ["Itinerary", "Hotels", "Budget", "Activities", "Packing", "Car + Driving", "Can't Miss", "Desserts", "Booking"];

export default function IcelandGuide() {
  const [tab, setTab] = useState(0);
  const [openCamp, setOpenCamp] = useState(0);
  const [openDay, setOpenDay] = useState(null);
  const [checked, setChecked] = useState({});
  const [budgetMode, setBudgetMode] = useState("comfort");

  const toggle = (k) => setChecked((p) => ({ ...p, [k]: !p[k] }));

  const s = {
    page: { fontFamily: "Georgia, 'Times New Roman', serif", background: "#080f1c", minHeight: "100vh", color: "#d0e8f4" },
    header: { padding: "30px 20px 18px", borderBottom: "1px solid #1a3040" },
    inner: { maxWidth: 820, margin: "0 auto" },
    eyebrow: { fontSize: 10, letterSpacing: 5, textTransform: "uppercase", color: "#5aa8c4", marginBottom: 6 },
    h1: { margin: "0 0 4px", fontSize: 36, fontWeight: "normal", color: "#fff", letterSpacing: "-0.5px" },
    sub: { margin: "0 0 14px", color: "#3a5a6a", fontSize: 13 },
    pillRow: { display: "flex", gap: 8, flexWrap: "wrap" },
    tabBar: { background: "rgba(0,0,0,0.4)", borderBottom: "1px solid #1a3040", position: "sticky", top: 0, zIndex: 10 },
    tabInner: { maxWidth: 820, margin: "0 auto", display: "flex" },
    body: { maxWidth: 820, margin: "0 auto", padding: "20px 16px 60px" },
    intro: { color: "#3a5a6a", fontSize: 13, margin: "0 0 16px", lineHeight: 1.7 },
  };

  return (
    <div style={s.page}>
      <div style={s.header}>
        <div style={s.inner}>
          <div style={s.eyebrow}>Iceland · Family of 4 · 4 Base Camps</div>
          <h1 style={s.h1}>Iceland — Jul 16–27, 2026</h1>
          <p style={s.sub}>MSY departs Jul 15 night · Arrives KEF Jul 16 6:25am · Departs KEF Jul 27 5:10pm · 12 nights</p>
          <div style={s.pillRow}>
            {camps.map((c, i) => (
              <span key={i} style={{ background: "#0d2030", border: "1px solid " + CAMP_COLORS[i] + "40", borderRadius: 20, padding: "3px 12px", fontSize: 11, color: CAMP_COLORS[i] }}>
                {CAMP_ICONS[i]} {c.name} · {hotels[HOTEL_KEYS[i]].dates}
              </span>
            ))}
            <span style={{ background: "#0d2030", border: "1px solid #c09030", borderRadius: 20, padding: "3px 12px", fontSize: 11, color: "#c09030" }}>
              ✈️ Fly Home · Jul 27
            </span>
          </div>
        </div>
      </div>

      <div style={s.tabBar}>
        <div style={s.tabInner}>
          {TABS.map((t, i) => (
            <button key={t} onClick={() => setTab(i)} style={{ background: "none", border: "none", borderBottom: tab === i ? "2px solid #5aa8c4" : "2px solid transparent", color: tab === i ? "#5aa8c4" : "#2a5060", padding: "12px 20px", cursor: "pointer", fontSize: 13, fontFamily: "inherit" }}>
              {t}
            </button>
          ))}
        </div>
      </div>

      <div style={s.body}>

        {tab === 0 && (
          <div>
            <div style={{ padding: "12px 14px", background: "#0d1a10", borderRadius: 9, border: "1px solid #2a4a30", marginBottom: 18 }}>
              <div style={{ fontSize: 11, letterSpacing: 2, textTransform: "uppercase", color: "#5a9068", marginBottom: 4 }}>✓ 11 Nights · 4 Base Camps · $6,371 Total Lodging</div>
              <div style={{ fontSize: 12, color: "#6a9878", lineHeight: 1.6 }}>
                Reykjavik (4) → Glacier (3) → Akureyri + Mývatn (2) → Snæfellsnes (2). All hotels booked. Day plans include real drive times, stop suggestions, and restaurant recommendations.
              </div>
            </div>
            <p style={s.intro}>4 hotels, 4 check-ins over 11 nights. Tap any camp or day to expand.</p>
            {camps.map((camp, ci) => {
              const color = CAMP_COLORS[ci];
              const hotel = hotels[HOTEL_KEYS[ci]];
              const isOpen = openCamp === ci;
              return (
                <div key={ci} style={{ marginBottom: 10, borderRadius: 10, overflow: "hidden", border: "1px solid " + color + (isOpen ? "50" : "22") }}>
                  <button onClick={() => { setOpenCamp(isOpen ? -1 : ci); setOpenDay(null); }} style={{ width: "100%", background: "#0d1e28", border: "none", padding: "15px 17px", cursor: "pointer", textAlign: "left", display: "flex", alignItems: "center", gap: 12, fontFamily: "inherit", color: "inherit" }}>
                    <span style={{ fontSize: 22 }}>{CAMP_ICONS[ci]}</span>
                    <div style={{ flex: 1 }}>
                      <div style={{ fontSize: 15, color: "#e8f4fa" }}>Base Camp {ci + 1}: {camp.name}</div>
                      <div style={{ fontSize: 11, color: color, marginTop: 2 }}>{hotel.dates} — {hotel.name}</div>
                    </div>
                    <span style={{ color: "#1e4050", fontSize: 13 }}>{isOpen ? "▲" : "▼"}</span>
                  </button>

                  {isOpen && (
                    <div style={{ padding: "0 13px 13px" }}>
                      <div style={{ margin: "12px 0 10px", padding: "11px 13px", background: "#0a1820", borderRadius: 8, border: "1px solid #1a3040", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 10 }}>
                        <div>
                          <div style={{ fontSize: 9, letterSpacing: 3, textTransform: "uppercase", color: color, marginBottom: 4 }}>Your Hotel</div>
                          <div style={{ fontSize: 14, color: "#d8f0f8" }}>{hotel.name}</div>
                          <div style={{ fontSize: 11, color: "#2a5060", marginTop: 2 }}>{"★ " + hotel.rating + " · " + hotel.reviews + " reviews · " + hotel.price}</div>
                          <div style={{ fontSize: 11, color: "#4a7080", marginTop: 3, fontStyle: "italic" }}>{hotel.highlight}</div>
                        </div>
                        <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                          <a href={hotel.bookUrl} style={{ background: "#0d2030", border: "1px solid " + color + "50", borderRadius: 6, padding: "6px 13px", color: color, fontSize: 12, textDecoration: "none" }}>Booking.com</a>
                          <a href={hotel.directUrl} style={{ background: "transparent", border: "1px solid #1a3040", borderRadius: 6, padding: "6px 13px", color: "#3a6070", fontSize: 12, textDecoration: "none" }}>Direct site</a>
                        </div>
                      </div>

                      {camp.days.map((day, di) => {
                        const dk = ci + "-" + di;
                        const isDayOpen = openDay === dk;
                        return (
                          <div key={di} style={{ marginBottom: 6, borderRadius: 7, overflow: "hidden", border: isDayOpen ? "1px solid " + color + "40" : "1px solid #1a2a30", background: isDayOpen ? "#0a1820" : "#090f18" }}>
                            <button onClick={() => setOpenDay(isDayOpen ? null : dk)} style={{ width: "100%", background: "none", border: "none", padding: "10px 13px", cursor: "pointer", textAlign: "left", display: "flex", alignItems: "center", gap: 10, fontFamily: "inherit", color: "inherit" }}>
                              <div style={{ background: "#0d2030", border: "1px solid " + color + "40", borderRadius: "50%", width: 26, height: 26, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 10, color: color, flexShrink: 0 }}>
                                {"D" + day.n}
                              </div>
                              <div style={{ flex: 1 }}>
                                <div style={{ fontSize: 13, color: "#c0e0f0" }}>
                                  <span style={{ color: "#2a5060", marginRight: 6 }}>{day.date}</span>
                                  {day.title}
                                </div>
                              </div>
                              <span style={{ color: "#1a3040", fontSize: 12 }}>{isDayOpen ? "▲" : "▼"}</span>
                            </button>
                            {isDayOpen && (
                              <div style={{ padding: "0 13px 13px", borderTop: "1px solid #1a2a30" }}>
                                <div style={{ fontSize: 11, color: "#2a5060", padding: "8px 0 9px", borderBottom: "1px solid #1a2a30" }}>{"🚗 " + day.drive}</div>
                                <div style={{ fontSize: 9, letterSpacing: 3, textTransform: "uppercase", color: color, margin: "9px 0 6px" }}>Day Plan</div>
                                {day.plan.map((p, pi) => (
                                  <div key={pi} style={{ display: "flex", gap: 7, marginBottom: 5, fontSize: 12, color: "#90b8c8", lineHeight: 1.55 }}>
                                    <span style={{ color: "#1a4050", flexShrink: 0 }}>→</span>
                                    <span>{p}</span>
                                  </div>
                                ))}
                                {day.creatures.length > 0 && (
                                  <div style={{ margin: "10px 0 7px", padding: "9px 11px", background: "#0a1820", borderRadius: 6, border: "1px solid #1a3040" }}>
                                    <div style={{ fontSize: 9, letterSpacing: 3, textTransform: "uppercase", color: "#5aa8c4", marginBottom: 5 }}>Wildlife Today</div>
                                    {day.creatures.map((c, i) => (
                                      <div key={i} style={{ fontSize: 12, color: "#6a9aaa", marginBottom: 3 }}>{c}</div>
                                    ))}
                                  </div>
                                )}
                                <div style={{ marginTop: 8, padding: "9px 11px", background: "#0a1410", borderRadius: 6, borderLeft: "3px solid #705020" }}>
                                  <div style={{ fontSize: 9, letterSpacing: 3, textTransform: "uppercase", color: "#906020", marginBottom: 4 }}>Pro Tip</div>
                                  <div style={{ fontSize: 11, color: "#806030", lineHeight: 1.6 }}>{day.tip}</div>
                                </div>
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            })}

            <div style={{ borderRadius: 10, overflow: "hidden", border: "1px solid " + (openDay === "final" ? "#c09030" : "#302010") }}>
              <button onClick={() => setOpenDay(openDay === "final" ? null : "final")} style={{ width: "100%", background: "#0d1810", border: "none", padding: "15px 17px", cursor: "pointer", textAlign: "left", display: "flex", alignItems: "center", gap: 12, fontFamily: "inherit", color: "inherit" }}>
                <span style={{ fontSize: 22 }}>✈️</span>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 15, color: "#e8f4fa" }}>Day 12 — Fly Home</div>
                  <div style={{ fontSize: 11, color: "#c09030", marginTop: 2 }}>{finalDay.date} · Blue Lagoon then KEF 5:10pm</div>
                </div>
                <span style={{ color: "#302010", fontSize: 13 }}>{openDay === "final" ? "▲" : "▼"}</span>
              </button>
              {openDay === "final" && (
                <div style={{ padding: "0 15px 15px", borderTop: "1px solid #302010" }}>
                  <div style={{ fontSize: 11, color: "#2a5060", padding: "8px 0 9px", borderBottom: "1px solid #1a2a30" }}>{"🚗 " + finalDay.drive}</div>
                  <div style={{ fontSize: 9, letterSpacing: 3, textTransform: "uppercase", color: "#c09030", margin: "9px 0 6px" }}>Day Plan</div>
                  {finalDay.plan.map((p, i) => (
                    <div key={i} style={{ display: "flex", gap: 7, marginBottom: 5, fontSize: 12, color: "#90b8c8", lineHeight: 1.55 }}>
                      <span style={{ color: "#503010", flexShrink: 0 }}>→</span>
                      <span>{p}</span>
                    </div>
                  ))}
                  <div style={{ margin: "10px 0 7px", padding: "9px 11px", background: "#0a1820", borderRadius: 6, border: "1px solid #1a3040" }}>
                    {finalDay.creatures.map((c, i) => (
                      <div key={i} style={{ fontSize: 12, color: "#6a9aaa" }}>{c}</div>
                    ))}
                  </div>
                  <div style={{ padding: "9px 11px", background: "#0a1410", borderRadius: 6, borderLeft: "3px solid #705020" }}>
                    <div style={{ fontSize: 9, letterSpacing: 3, textTransform: "uppercase", color: "#906020", marginBottom: 4 }}>Pro Tip</div>
                    <div style={{ fontSize: 11, color: "#806030", lineHeight: 1.6 }}>{finalDay.tip}</div>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {tab === 1 && (
          <div>
            <p style={s.intro}>4 hotels total. Book in this order — glacier zone first, it sells out soonest.</p>
            {HOTEL_KEYS.map((key, i) => {
              const h = hotels[key];
              const color = CAMP_COLORS[i];
              return (
                <div key={key} style={{ marginBottom: 12, background: "#0a1820", border: "1px solid #1a3040", borderRadius: 10, padding: "16px 16px" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 12, flexWrap: "wrap", marginBottom: 12 }}>
                    <div>
                      <div style={{ fontSize: 9, letterSpacing: 3, textTransform: "uppercase", color: color, marginBottom: 4 }}>{CAMP_ICONS[i]} Base Camp {i + 1} · {h.dates}</div>
                      <div style={{ fontSize: 16, color: "#d8f0f8" }}>{h.name}</div>
                      <div style={{ fontSize: 11, color: "#2a5060", marginTop: 3 }}>{"★ " + h.rating + " (" + h.reviews + " reviews) · " + h.price}</div>
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", gap: 7 }}>
                      <a href={h.bookUrl} style={{ background: "#0d2030", border: "1px solid " + color + "50", borderRadius: 6, padding: "7px 14px", color: color, fontSize: 12, textDecoration: "none" }}>Booking.com →</a>
                      <a href={h.directUrl} style={{ border: "1px solid #1a3040", borderRadius: 6, padding: "7px 14px", color: "#3a6070", fontSize: 12, textDecoration: "none", background: "transparent" }}>Direct site →</a>
                    </div>
                  </div>
                  <div style={{ padding: "10px 12px", background: "#080f18", borderRadius: 7, border: "1px solid #1a2a30", marginBottom: 10 }}>
                    <div style={{ fontSize: 12, color: "#6a9aaa", lineHeight: 1.6 }}>{h.why}</div>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                    <span style={{ background: "#0d2030", border: "1px solid " + color + "35", borderRadius: 6, padding: "3px 10px", fontSize: 11, color: color }}>{h.highlight}</span>
                    <span style={{ fontSize: 11, color: "#2a5060" }}>{h.phone}</span>
                  </div>
                </div>
              );
            })}
            <div style={{ padding: "12px 14px", background: "#120808", borderRadius: 9, border: "1px solid #401010" }}>
              <div style={{ fontSize: 13, color: "#d06050", lineHeight: 1.7 }}>
                Booking priority: Hotel Jokulsarlon (glacier zone) first — this sells out months ahead for July. Its available dates anchor the whole trip. Open that link right now.
              </div>
            </div>
          </div>
        )}

        {tab === 2 && (
          <div>
            <p style={s.intro}>Toggle between Comfort and Go Big to see the full cost breakdown.</p>
            <div style={{ display: "flex", gap: 10, marginBottom: 20 }}>
              {["comfort", "goBig"].map((m) => (
                <button key={m} onClick={() => setBudgetMode(m)} style={{ background: budgetMode === m ? "#0d2030" : "transparent", border: "1px solid " + (budgetMode === m ? "#5aa8c4" : "#1a3040"), borderRadius: 7, padding: "9px 18px", color: budgetMode === m ? "#5aa8c4" : "#2a5060", cursor: "pointer", fontSize: 13, fontFamily: "inherit" }}>
                  {m === "comfort" ? "Comfort" : "Go Big"}
                </button>
              ))}
            </div>
            {(() => {
              const total = budgetLines.reduce((sum, l) => sum + l[budgetMode], 0);
              return (
                <div>
                  <div style={{ background: "#0a1820", border: "1px solid #1a3040", borderRadius: 10, padding: "18px 20px", marginBottom: 20, display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 10 }}>
                    <div>
                      <div style={{ fontSize: 10, letterSpacing: 4, textTransform: "uppercase", color: "#5aa8c4" }}>Estimated Total</div>
                      <div style={{ fontSize: 34, color: "#fff", marginTop: 4 }}>{"$" + total.toLocaleString()}</div>
                      <div style={{ fontSize: 11, color: "#2a5060", marginTop: 3 }}>Family of 4 · 12 days · July · All-in including flights</div>
                    </div>
                    <div style={{ textAlign: "right" }}>
                      <div style={{ fontSize: 13, color: "#4a8090" }}>Per person: <span style={{ color: "#5aa8c4" }}>{"$" + Math.round(total / 4).toLocaleString()}</span></div>
                      <div style={{ fontSize: 13, color: "#4a8090", marginTop: 4 }}>Per day (family): <span style={{ color: "#5aa8c4" }}>{"$" + Math.round(total / 12).toLocaleString()}</span></div>
                    </div>
                  </div>
                  {budgetLines.map((line, i) => {
                    const val = line[budgetMode];
                    const pct = Math.round((val / total) * 100);
                    return (
                      <div key={i} style={{ marginBottom: 13 }}>
                        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 4, fontSize: 13 }}>
                          <span style={{ color: "#90b8c8" }}>{line.label}</span>
                          <span style={{ color: "#5aa8c4" }}>{"$" + val.toLocaleString()}</span>
                        </div>
                        <div style={{ height: 5, background: "#0d1820", borderRadius: 3 }}>
                          <div style={{ height: "100%", width: pct + "%", background: "#1e6080", borderRadius: 3 }} />
                        </div>
                        <div style={{ fontSize: 10, color: "#1a4050", marginTop: 2 }}>{pct + "% of total"}</div>
                      </div>
                    );
                  })}
                </div>
              );
            })()}
            <div style={{ marginTop: 20, background: "#0a1408", borderRadius: 9, padding: "14px 16px", border: "1px solid #1a3010" }}>
              <div style={{ fontSize: 10, letterSpacing: 3, textTransform: "uppercase", color: "#608030", marginBottom: 10 }}>Save $800 to 1,500</div>
              {["Use accommodation kitchens for breakfast and lunch every day — saves $600 to 800 vs eating out every meal.", "Big grocery run at Bonus on Day 1. Cheapest supermarket in Iceland.", "Iceland's best stuff is free: every waterfall, every beach, every viewpoint, every roadside reindeer.", "Fill water bottles from the tap — Icelandic water is glacier-fed, never buy bottled.", "Return rental car with full tank — companies charge 2 to 3x market rate to fill it.", "Kids under 12 free at Myvatn Nature Baths — saves $76 right there."].map((tip, i) => (
                <div key={i} style={{ display: "flex", gap: 8, marginBottom: 6, fontSize: 12, color: "#507030", lineHeight: 1.5 }}>
                  <span style={{ flexShrink: 0 }}>→</span><span>{tip}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {tab === 3 && (
          <div>
            <p style={s.intro}>Activity total estimate: $2,500 to $4,000 for the family. Every major paid activity plus a full list of free ones.</p>
            {activities.map((a, i) => (
              <div key={i} style={{ background: "#0a1820", border: "1px solid #1a2a30", borderRadius: 8, padding: "11px 14px", marginBottom: 7, display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 10 }}>
                <div>
                  <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 3 }}>
                    <span style={{ fontSize: 11 }}>{a.priority ? "⭐" : "✅"}</span>
                    <span style={{ fontSize: 13, color: "#c0e0f0" }}>{a.name}</span>
                  </div>
                  <div style={{ fontSize: 11, color: "#2a5060", marginBottom: 2 }}>{"📍 " + a.location + " · ⏱ " + a.duration}</div>
                  <div style={{ fontSize: 11, color: "#3a6070" }}>{"Book: " + a.book}</div>
                </div>
                <div style={{ background: "#0d2030", border: "1px solid #1e4050", borderRadius: 6, padding: "4px 10px", whiteSpace: "nowrap", flexShrink: 0 }}>
                  <div style={{ fontSize: 11, color: "#5aa8c4" }}>{a.price}</div>
                </div>
              </div>
            ))}
            <div style={{ marginTop: 10, padding: "13px 14px", background: "#0a1408", borderRadius: 8, border: "1px solid #1a3010" }}>
              <div style={{ fontSize: 10, letterSpacing: 3, textTransform: "uppercase", color: "#608030", marginBottom: 8 }}>Free — Just Show Up</div>
              {freeAttractions.map((f, i) => (
                <div key={i} style={{ fontSize: 12, color: "#507030", marginBottom: 4, paddingLeft: 12, position: "relative" }}>
                  <span style={{ position: "absolute", left: 0 }}>·</span>{f}
                </div>
              ))}
            </div>
          </div>
        )}

        {tab === 4 && (
          <div>
            {Object.entries(packingList).map(([cat, items]) => (
              <div key={cat} style={{ marginBottom: 20 }}>
                <div style={{ fontSize: 10, letterSpacing: 3, textTransform: "uppercase", color: "#5aa8c4", marginBottom: 9, paddingBottom: 5, borderBottom: "1px solid #1a2a30" }}>{cat}</div>
                {items.map((item, i) => (
                  <div key={i} style={{ display: "flex", gap: 9, fontSize: 13, color: "#80a8b8", lineHeight: 1.5, marginBottom: 7 }}>
                    <span style={{ color: "#1a3040", flexShrink: 0, marginTop: 2 }}>□</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            ))}
            <div style={{ background: "#0a1408", borderRadius: 8, padding: "13px 14px", border: "1px solid #1a3010" }}>
              <div style={{ fontSize: 12, color: "#508030", fontStyle: "italic", lineHeight: 1.7 }}>
                July averages 10 to 14C (50 to 57F). Feels cold on whale boats and glaciers regardless of sunshine. Layering is the system — you will strip and re-dress multiple times each day. The kids will be wet at every waterfall whether they want to be or not.
              </div>
            </div>
          </div>
        )}

        {tab === 5 && (
          <div>
            <p style={s.intro}>Everything you need to know before picking up your keys — companies, insurance, rules, and apps.</p>

            {/* COMPANIES */}
            <div style={{ fontSize: 10, letterSpacing: 3, textTransform: "uppercase", color: "#5aa8c4", marginBottom: 10 }}>Recommended Rental Companies</div>
            {carCompanies.map((c, i) => (
              <div key={i} style={{ background: "#0a1820", border: "1px solid #1a3040", borderRadius: 10, padding: "14px 16px", marginBottom: 10 }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: 8, marginBottom: 10 }}>
                  <div>
                    <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 3 }}>
                      <span style={{ fontSize: 15, color: "#d8f0f8" }}>{c.name}</span>
                      <span style={{ background: "#0d2030", border: "1px solid " + c.tagColor + "40", borderRadius: 5, padding: "2px 8px", fontSize: 10, color: c.tagColor }}>{c.tag}</span>
                    </div>
                    <div style={{ fontSize: 11, color: "#2a5060" }}>{"★ " + c.rating + " · " + c.reviews + " reviews · " + c.fleet}</div>
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", gap: 6, alignItems: "flex-end" }}>
                    <a href={c.url} style={{ background: "#0d2030", border: "1px solid " + c.tagColor + "40", borderRadius: 6, padding: "6px 13px", color: c.tagColor, fontSize: 12, textDecoration: "none" }}>Book direct →</a>
                    <span style={{ fontSize: 11, color: "#2a5060" }}>{c.priceRange}</span>
                  </div>
                </div>
                <div style={{ fontSize: 12, color: "#6a9aaa", lineHeight: 1.6 }}>{c.notes}</div>
              </div>
            ))}
            <div style={{ padding: "10px 14px", background: "#0a1408", borderRadius: 8, border: "1px solid #1a3010", marginBottom: 22 }}>
              <div style={{ fontSize: 12, color: "#508030", lineHeight: 1.6 }}>Avoid Hertz, Avis, and Europcar in Iceland — consistently more expensive than local operators for the same vehicle class.</div>
            </div>

            {/* WHAT TO RENT */}
            <div style={{ fontSize: 10, letterSpacing: 3, textTransform: "uppercase", color: "#5aa8c4", marginBottom: 10 }}>What to Rent</div>
            <div style={{ background: "#0a1820", border: "1px solid #1a3040", borderRadius: 10, padding: "14px 16px", marginBottom: 22 }}>
              {[
                ["Vehicle class", "4x4 SUV — Kia Sorento, Toyota RAV4, or Hyundai Santa Fe class. Proper four-wheel drive, not just AWD."],
                ["Transmission", "Automatic. Manuals are cheaper but you will be tired, distracted by scenery, and managing two kids."],
                ["Seats", "5-seat with large boot. Fits family of 4 plus luggage for 12 days."],
                ["Extras to book", "2x child seats (legally required), GPS, additional driver if sharing driving"],
                ["4x4 needed?", "Yes. You are not doing F-roads, but gravel roads, East Fjords, and general confidence in wind all benefit from proper 4x4."],
              ].map(([label, detail], i) => (
                <div key={i} style={{ display: "flex", gap: 12, marginBottom: 10, paddingBottom: 10, borderBottom: i < 4 ? "1px solid #1a2a30" : "none" }}>
                  <span style={{ fontSize: 12, color: "#5aa8c4", minWidth: 130, flexShrink: 0 }}>{label}</span>
                  <span style={{ fontSize: 12, color: "#80a8b8", lineHeight: 1.6 }}>{detail}</span>
                </div>
              ))}
            </div>

            {/* INSURANCE */}
            <div style={{ fontSize: 10, letterSpacing: 3, textTransform: "uppercase", color: "#5aa8c4", marginBottom: 10 }}>Insurance — Read This Carefully</div>
            {insuranceItems.map((ins, i) => (
              <div key={i} style={{ background: "#0a1820", border: "1px solid #1a2a30", borderRadius: 8, padding: "11px 14px", marginBottom: 7, display: "flex", gap: 12, alignItems: "flex-start" }}>
                <span style={{ background: "#0d2030", border: "1px solid " + ins.color + "40", borderRadius: 5, padding: "3px 8px", fontSize: 10, color: ins.color, whiteSpace: "nowrap", flexShrink: 0, marginTop: 1 }}>{ins.verdict}</span>
                <div>
                  <div style={{ fontSize: 13, color: "#c0e0f0", marginBottom: 3 }}>{ins.name}</div>
                  <div style={{ fontSize: 11, color: "#507080", lineHeight: 1.6 }}>{ins.detail}</div>
                </div>
              </div>
            ))}

            {/* SPEED LIMITS */}
            <div style={{ fontSize: 10, letterSpacing: 3, textTransform: "uppercase", color: "#5aa8c4", margin: "22px 0 10px" }}>Speed Limits</div>
            <div style={{ background: "#0a1820", border: "1px solid #1a3040", borderRadius: 10, overflow: "hidden", marginBottom: 22 }}>
              {speedLimits.map((s2, i) => (
                <div key={i} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "10px 14px", borderBottom: i < speedLimits.length - 1 ? "1px solid #1a2a30" : "none" }}>
                  <span style={{ fontSize: 13, color: "#80a8b8" }}>{s2.type}</span>
                  <div style={{ textAlign: "right" }}>
                    <span style={{ fontSize: 14, color: "#5aa8c4", fontWeight: 500 }}>{s2.limit}</span>
                    <span style={{ fontSize: 11, color: "#2a5060", marginLeft: 8 }}>{s2.mph}</span>
                  </div>
                </div>
              ))}
              <div style={{ padding: "10px 14px", background: "#120808", borderTop: "1px solid #1a2a30" }}>
                <div style={{ fontSize: 11, color: "#b05040", lineHeight: 1.6 }}>Speed cameras are widespread including remote areas. Fines are steep — 20 km/h over the limit = ISK 50,000+ (~$330). Fines are charged directly to your rental car credit card.</div>
              </div>
            </div>

            {/* DRIVING RULES */}
            <div style={{ fontSize: 10, letterSpacing: 3, textTransform: "uppercase", color: "#5aa8c4", marginBottom: 10 }}>Rules + Things That Will Surprise You</div>
            <div style={{ display: "grid", gap: 7, marginBottom: 22 }}>
              {drivingRules.map((r, i) => (
                <div key={i} style={{ background: "#0a1820", border: "1px solid #1a2a30", borderRadius: 8, padding: "10px 13px", display: "flex", gap: 10, alignItems: "flex-start" }}>
                  <span style={{ fontSize: 16, flexShrink: 0, lineHeight: 1.4 }}>{r.icon}</span>
                  <div>
                    <div style={{ fontSize: 13, color: "#c0e0f0", marginBottom: 2 }}>{r.rule}</div>
                    <div style={{ fontSize: 11, color: "#507080", lineHeight: 1.6 }}>{r.detail}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* APPS */}
            <div style={{ fontSize: 10, letterSpacing: 3, textTransform: "uppercase", color: "#5aa8c4", marginBottom: 10 }}>Apps to Download Before You Fly</div>
            {apps.map((app, i) => (
              <div key={i} style={{ display: "flex", gap: 10, alignItems: "flex-start", marginBottom: 8, padding: "10px 12px", background: "#0a1820", borderRadius: 8, border: "1px solid #1a2a30" }}>
                <span style={{ background: app.essential ? "#0d2030" : "#080f18", border: "1px solid " + (app.essential ? "#5aa8c4" : "#1a2a30") + "40", borderRadius: 5, padding: "2px 7px", fontSize: 10, color: app.essential ? "#5aa8c4" : "#3a5060", whiteSpace: "nowrap", flexShrink: 0 }}>{app.essential ? "Essential" : "Backup"}</span>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 13, color: "#c0e0f0", marginBottom: 2 }}>{app.name}</div>
                  <div style={{ fontSize: 11, color: "#507080", lineHeight: 1.5 }}>{app.use}</div>
                </div>
                <a href={app.url} style={{ fontSize: 11, color: "#5aa8c4", textDecoration: "none", paddingTop: 2, whiteSpace: "nowrap" }}>Open →</a>
              </div>
            ))}

            {/* CAR SEAT RULES */}
            <div style={{ fontSize: 10, letterSpacing: 3, textTransform: "uppercase", color: "#5aa8c4", margin: "22px 0 10px" }}>Car Seats — Icelandic Law</div>
            <div style={{ padding: "14px 16px", background: "#1a1408", borderRadius: 9, border: "1px solid #3a2810", marginBottom: 12 }}>
              <div style={{ fontSize: 13, color: "#c0a058", lineHeight: 1.6, marginBottom: 10, fontWeight: 600 }}>
                {carSeatRules.rule}
              </div>
              {carSeatRules.yourKids.map((kid, i) => (
                <div key={i} style={{ marginBottom: 10, padding: "10px 12px", background: "#100a04", borderRadius: 7, border: "1px solid #2a1a08" }}>
                  <div style={{ fontSize: 12, color: "#e0b068", marginBottom: 3, fontWeight: 600 }}>{kid.age} — {kid.action}</div>
                  <div style={{ fontSize: 12, color: "#a08058", lineHeight: 1.6 }}>{kid.detail}</div>
                </div>
              ))}
              <div style={{ marginTop: 10, padding: "10px 12px", background: "#200808", borderRadius: 7, border: "1px solid #601010" }}>
                <div style={{ fontSize: 12, color: "#d06050", lineHeight: 1.6 }}>⚠ {carSeatRules.dontDo}</div>
              </div>
              <div style={{ marginTop: 8, padding: "10px 12px", background: "#081810", borderRadius: 7, border: "1px solid #1a4028" }}>
                <div style={{ fontSize: 12, color: "#60a078", lineHeight: 1.6 }}>✓ {carSeatRules.whatToDo}</div>
              </div>
            </div>

            {/* PICKUP CHECKLIST */}
            <div style={{ fontSize: 10, letterSpacing: 3, textTransform: "uppercase", color: "#5aa8c4", margin: "22px 0 10px" }}>At Pickup — Do Not Skip These</div>
            {carPickupChecklist.map((item, i) => (
              <div key={i} style={{ display: "flex", gap: 9, fontSize: 13, color: "#80a8b8", lineHeight: 1.5, marginBottom: 7, padding: "8px 12px", background: "#0a1820", borderRadius: 7, border: "1px solid #1a2a30" }}>
                <span style={{ color: "#1a3040", flexShrink: 0, marginTop: 2 }}>□</span>
                <span>{item}</span>
              </div>
            ))}

            {/* FUEL */}
            <div style={{ marginTop: 20, padding: "14px 16px", background: "#0a1408", borderRadius: 9, border: "1px solid #1a3010" }}>
              <div style={{ fontSize: 10, letterSpacing: 3, textTransform: "uppercase", color: "#608030", marginBottom: 8 }}>Fuel</div>
              <div style={{ fontSize: 12, color: "#508030", lineHeight: 1.7 }}>
                Fuel costs roughly $9.50 to $10.50 per US gallon — about double US prices. Fill up whenever your tank drops below half. Gaps between stations can be 200 km in the East Fjords. Most stations accept credit cards including unmanned self-service ones. Return the car with a full tank — rental companies charge 2 to 3x market rate to refuel it themselves.
              </div>
            </div>
          </div>
        )}

        {tab === 6 && (
          <div>
            <p style={s.intro}>The food you must eat, the moments you must not rush past, the things worth buying, and the tourist traps to skip.</p>

            {/* FOOD */}
            <div style={{ fontSize: 10, letterSpacing: 3, textTransform: "uppercase", color: "#5aa8c4", marginBottom: 12 }}>Food — What to Eat in Iceland</div>
            {cantMiss.food.map((f, i) => (
              <div key={i} style={{ background: "#0a1820", border: "1px solid #1a2a30", borderRadius: 9, padding: "13px 15px", marginBottom: 8 }}>
                <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 10, marginBottom: 6 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                    {f.mustTry && <span style={{ background: "#0d2030", border: "1px solid #5aa8c4", borderRadius: 5, padding: "2px 7px", fontSize: 9, color: "#5aa8c4", flexShrink: 0 }}>Must Try</span>}
                    <span style={{ fontSize: 14, color: "#d8f0f8" }}>{f.name}</span>
                  </div>
                  <span style={{ fontSize: 12, color: "#5aa8c4", whiteSpace: "nowrap", flexShrink: 0 }}>{f.price}</span>
                </div>
                <div style={{ fontSize: 11, color: "#2a5060", marginBottom: 5 }}>{"📍 " + f.where}</div>
                <div style={{ fontSize: 12, color: "#6a9aaa", lineHeight: 1.6 }}>{f.verdict}</div>
              </div>
            ))}

            {/* EXPERIENCES */}
            <div style={{ fontSize: 10, letterSpacing: 3, textTransform: "uppercase", color: "#5aa8c4", margin: "22px 0 12px" }}>Experiences — Do Not Rush Past These</div>
            {cantMiss.experiences.map((e, i) => (
              <div key={i} style={{ background: "#0a1820", border: "1px solid #1a2a30", borderRadius: 9, padding: "13px 15px", marginBottom: 8 }}>
                <div style={{ display: "flex", alignItems: "flex-start", gap: 10, marginBottom: 6 }}>
                  <span style={{ background: "#0d2030", border: "1px solid #8a6aa8", borderRadius: 5, padding: "2px 7px", fontSize: 9, color: "#8a6aa8", flexShrink: 0, marginTop: 1 }}>{e.type}</span>
                  <span style={{ fontSize: 14, color: "#d8f0f8" }}>{e.name}</span>
                </div>
                <div style={{ fontSize: 12, color: "#6a9aaa", lineHeight: 1.6 }}>{e.detail}</div>
              </div>
            ))}

            {/* HIDDEN GEMS */}
            <div style={{ fontSize: 10, letterSpacing: 3, textTransform: "uppercase", color: "#5aa8c4", margin: "22px 0 12px" }}>Easy Wins — Things Most Tourists Miss</div>
            {cantMiss.dontMiss.map((d, i) => (
              <div key={i} style={{ display: "flex", gap: 10, alignItems: "flex-start", marginBottom: 8, padding: "10px 13px", background: "#0a1820", borderRadius: 8, border: "1px solid #1a2a30" }}>
                <span style={{ color: "#b56a3a", flexShrink: 0, marginTop: 2 }}>→</span>
                <div>
                  <div style={{ fontSize: 13, color: "#c0e0f0", marginBottom: 2 }}>{d.item}</div>
                  <div style={{ fontSize: 11, color: "#507080", lineHeight: 1.5 }}>{d.why}</div>
                </div>
              </div>
            ))}

            {/* SOUVENIRS — BUY */}
            <div style={{ fontSize: 10, letterSpacing: 3, textTransform: "uppercase", color: "#5aa8c4", margin: "22px 0 12px" }}>Souvenirs — What to Buy</div>
            {cantMiss.souvenirsBuy.map((sv, i) => (
              <div key={i} style={{ background: "#0a1820", border: "1px solid #1a2a30", borderRadius: 9, padding: "13px 15px", marginBottom: 8 }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 10, marginBottom: 5 }}>
                  <span style={{ fontSize: 14, color: "#d8f0f8" }}>{sv.name}</span>
                  <span style={{ fontSize: 12, color: "#5aa8c4", whiteSpace: "nowrap", flexShrink: 0 }}>{sv.price}</span>
                </div>
                <div style={{ fontSize: 11, color: "#2a5060", marginBottom: 5 }}>{"🛍 " + sv.where}</div>
                <div style={{ fontSize: 12, color: "#6a9aaa", lineHeight: 1.6 }}>{sv.why}</div>
              </div>
            ))}

            {/* SOUVENIRS — AVOID */}
            <div style={{ fontSize: 10, letterSpacing: 3, textTransform: "uppercase", color: "#b56a3a", margin: "22px 0 12px" }}>Souvenirs — What to Avoid</div>
            {cantMiss.souvenirAvoid.map((sv, i) => (
              <div key={i} style={{ display: "flex", gap: 10, alignItems: "flex-start", marginBottom: 8, padding: "10px 13px", background: "#120808", borderRadius: 8, border: "1px solid #2a1010" }}>
                <span style={{ color: "#b05040", flexShrink: 0, marginTop: 2 }}>✕</span>
                <div>
                  <div style={{ fontSize: 13, color: "#c09080", marginBottom: 2 }}>{sv.item}</div>
                  <div style={{ fontSize: 11, color: "#704030", lineHeight: 1.5 }}>{sv.why}</div>
                </div>
              </div>
            ))}

            {/* STILL TO DO */}
            <div style={{ fontSize: 10, letterSpacing: 3, textTransform: "uppercase", color: "#5aa8c4", margin: "22px 0 12px" }}>Still on Your To-Do List</div>
            {[
              { item: "Rental car — decision pending", detail: "Quotes in hand from MyCar and Lotus. Toyota RAV4 or Kia Sportage, automatic, 4WD, Platinum/Zero Excess insurance, 2 high-back boosters. Measure kids' heights before booking. Credit card only.", done: false, urgent: true },
              { item: "Book all 4 hotels", detail: "Reykjavik Residence, Hótel Jökulsarlon, Akureyri Log Cabin, Hotel Vest Mar — all 11 nights locked. Total: $6,371.", done: true, urgent: false },
              { item: "Travel insurance", detail: "Squaremouth.com → Tin Leg Gold. Buy this week — 14-day window for best coverage is closing.", done: false, urgent: true },
              { item: "Order Wise card", detail: "wise.com — takes 2 to 3 weeks to arrive. Best exchange rate for Iceland spending.", done: false, urgent: true },
              { item: "Rental SUV", detail: "MyCar or Lava Car Rental. Large 4x4, automatic, gravel protection, SAAP, 2 child seats.", done: false, urgent: true },
              { item: "Blue Lagoon slot", detail: "bluelagoon.com — Jul 18 or 19, 3pm or 4pm afternoon slot. Comfort package only. Day trip from Reykjavik, not departure day.", done: false, urgent: false },
              { item: "North Sailing Husavik", detail: "northsailing.is — whale and puffin combo. Date follows Myvatn check-in. Books out for July.", done: false, urgent: false },
              { item: "ISK cash", detail: "Not urgent. Withdraw ~15,000 ISK (~$110) from ATM at Keflavik airport on arrival. Iceland is nearly cashless.", done: false, urgent: false },
              { item: "Check all 4 passports", detail: "Must be valid past Oct 27, 2026. Kids passports are 5-year validity — check carefully.", done: false, urgent: false },
              { item: "Glacier walk, boat tour, whale watching Reykjavik", detail: "icelandicmountainguides.is, icelagoon.is, elding.is — within 2 weeks.", done: false, urgent: false },
              { item: "Photography — midnight sun golden hour", detail: "Golden hour runs roughly 10pm to 2am in July. Best light of your life. Worth knowing before you go.", done: false, urgent: false },
              { item: "Kids' car entertainment plan", detail: "Day 4 is 4.5 hrs driving, Day 7 is 5.5 hrs. Downloaded shows, audiobooks, car snack rotation.", done: false, urgent: false },
              { item: "Volcano activity check", detail: "Reykjanes Peninsula near Keflavik has been active. Monitor mbls.is closer to departure.", done: false, urgent: false },
              { item: "VAT refund at airport", detail: "Reclaim 24% on purchases over ~6,000 ISK. Present goods and receipts at Keflavik before checking bags.", done: false, urgent: false },
              { item: "Flights booked", detail: "MSY Jul 15 11:50pm → KEF Jul 16 6:25am. KEF Jul 27 5:10pm → MSY Jul 28 12:20am.", done: true, urgent: false },
              { item: "T-Mobile confirmed for Iceland", detail: "Data roaming included on your plan. Enable roaming before departure.", done: true, urgent: false },
              { item: "SIM card", detail: "No action needed. T-Mobile works in Iceland on your plan.", done: true, urgent: false },
              { item: "ISK cash strategy", detail: "Iceland is nearly cashless. Wise card for spending. ~$110 cash at airport ATM on arrival.", done: true, urgent: false },
            ].map((item, i) => (
              <div key={i} style={{ display: "flex", gap: 10, alignItems: "flex-start", marginBottom: 8, padding: "10px 13px", background: item.done ? "#080f10" : item.urgent ? "#120808" : "#0a1820", borderRadius: 8, border: "1px solid " + (item.done ? "#1a3a20" : item.urgent ? "#2a1010" : "#1a2a30") }}>
                <span style={{ color: item.done ? "#4a8a68" : item.urgent ? "#d06050" : "#f0c050", flexShrink: 0, marginTop: 2, fontSize: 14 }}>{item.done ? "✓" : item.urgent ? "!" : "·"}</span>
                <div>
                  <div style={{ fontSize: 13, color: item.done ? "#3a6a48" : item.urgent ? "#c08070" : "#c0e0f0", marginBottom: 2, textDecoration: item.done ? "line-through" : "none" }}>{item.item}</div>
                  <div style={{ fontSize: 11, color: item.done ? "#2a4a30" : item.urgent ? "#704030" : "#507080", lineHeight: 1.5 }}>{item.detail}</div>
                </div>
              </div>
            ))}
          </div>
        )}

        {tab === 7 && (
          <div>
            <p style={s.intro}>Iceland takes its sweets seriously. Your kids will too.</p>

            {/* CLASSIC ICELANDIC DESSERTS */}
            <div style={{ fontSize: 10, letterSpacing: 3, textTransform: "uppercase", color: "#5aa8c4", margin: "14px 0 12px" }}>Classic Icelandic Desserts</div>
            {desserts.classics.map((d, i) => (
              <div key={i} style={{ padding: "12px 13px", background: "#0a1820", borderRadius: 9, border: "1px solid #1a2a30", marginBottom: 10 }}>
                <div style={{ fontSize: 14, color: "#c0e0f0", marginBottom: 6 }}>{d.emoji} {d.name}</div>
                <div style={{ fontSize: 12, color: "#8aa0b0", lineHeight: 1.6, marginBottom: 6 }}>{d.what}</div>
                <div style={{ fontSize: 11, color: "#6a8a9a", marginBottom: 4 }}><span style={{ color: "#5aa8c4" }}>Where:</span> {d.where}</div>
                <div style={{ fontSize: 11, color: "#c09060", lineHeight: 1.5 }}>🧒 {d.kidTip}</div>
              </div>
            ))}

            {/* ICE CREAM */}
            <div style={{ fontSize: 10, letterSpacing: 3, textTransform: "uppercase", color: "#5aa8c4", margin: "22px 0 12px" }}>Ice Cream — Iceland's Real Obsession</div>
            <div style={{ fontSize: 12, color: "#8aa0b0", lineHeight: 1.6, marginBottom: 12, fontStyle: "italic" }}>
              Icelanders eat ice cream year-round — even in winter. Every town has its shrine. These are the ones to actually hit.
            </div>
            {desserts.iceCream.map((d, i) => (
              <div key={i} style={{ padding: "12px 13px", background: "#0a1820", borderRadius: 9, border: "1px solid #1a2a30", marginBottom: 10 }}>
                <div style={{ fontSize: 14, color: "#c0e0f0", marginBottom: 6 }}>{d.emoji} {d.name}</div>
                <div style={{ fontSize: 12, color: "#8aa0b0", lineHeight: 1.6, marginBottom: 6 }}>{d.what}</div>
                <div style={{ fontSize: 11, color: "#6a8a9a", marginBottom: 4 }}><span style={{ color: "#5aa8c4" }}>Where:</span> {d.where}</div>
                <div style={{ fontSize: 11, color: "#c09060", lineHeight: 1.5 }}>🧒 {d.kidTip}</div>
              </div>
            ))}

            {/* HOT DRINKS */}
            <div style={{ fontSize: 10, letterSpacing: 3, textTransform: "uppercase", color: "#5aa8c4", margin: "22px 0 12px" }}>Hot Chocolate + Warm Drinks</div>
            {desserts.hotDrinks.map((d, i) => (
              <div key={i} style={{ padding: "12px 13px", background: "#0a1820", borderRadius: 9, border: "1px solid #1a2a30", marginBottom: 10 }}>
                <div style={{ fontSize: 14, color: "#c0e0f0", marginBottom: 6 }}>{d.emoji} {d.name}</div>
                <div style={{ fontSize: 12, color: "#8aa0b0", lineHeight: 1.6, marginBottom: 6 }}>{d.what}</div>
                <div style={{ fontSize: 11, color: "#6a8a9a", marginBottom: 4 }}><span style={{ color: "#5aa8c4" }}>Where:</span> {d.where}</div>
                <div style={{ fontSize: 11, color: "#c09060", lineHeight: 1.5 }}>🧒 {d.kidTip}</div>
              </div>
            ))}

            {/* CHOCOLATE */}
            <div style={{ fontSize: 10, letterSpacing: 3, textTransform: "uppercase", color: "#5aa8c4", margin: "22px 0 12px" }}>Chocolate</div>
            {desserts.chocolate.map((d, i) => (
              <div key={i} style={{ padding: "12px 13px", background: "#0a1820", borderRadius: 9, border: "1px solid #1a2a30", marginBottom: 10 }}>
                <div style={{ fontSize: 14, color: "#c0e0f0", marginBottom: 6 }}>{d.emoji} {d.name}</div>
                <div style={{ fontSize: 12, color: "#8aa0b0", lineHeight: 1.6, marginBottom: 6 }}>{d.what}</div>
                <div style={{ fontSize: 11, color: "#6a8a9a", marginBottom: 4 }}><span style={{ color: "#5aa8c4" }}>Where:</span> {d.where}</div>
                <div style={{ fontSize: 11, color: "#c09060", lineHeight: 1.5 }}>🧒 {d.kidTip}</div>
              </div>
            ))}

            {/* CANDY */}
            <div style={{ fontSize: 10, letterSpacing: 3, textTransform: "uppercase", color: "#5aa8c4", margin: "22px 0 12px" }}>Candy & Nammi</div>
            {desserts.candy.map((d, i) => (
              <div key={i} style={{ padding: "12px 13px", background: "#0a1820", borderRadius: 9, border: "1px solid #1a2a30", marginBottom: 10 }}>
                <div style={{ fontSize: 14, color: "#c0e0f0", marginBottom: 6 }}>{d.emoji} {d.name}</div>
                <div style={{ fontSize: 12, color: "#8aa0b0", lineHeight: 1.6, marginBottom: 6 }}>{d.what}</div>
                <div style={{ fontSize: 11, color: "#6a8a9a", marginBottom: 4 }}><span style={{ color: "#5aa8c4" }}>Where:</span> {d.where}</div>
                <div style={{ fontSize: 11, color: "#c09060", lineHeight: 1.5 }}>🧒 {d.kidTip}</div>
              </div>
            ))}

            {/* SPECIAL TREATS */}
            <div style={{ fontSize: 10, letterSpacing: 3, textTransform: "uppercase", color: "#5aa8c4", margin: "22px 0 12px" }}>Specific Spots to Hit</div>
            {desserts.specialTreats.map((d, i) => (
              <div key={i} style={{ padding: "12px 13px", background: "#0a1820", borderRadius: 9, border: "1px solid #1a2a30", marginBottom: 10 }}>
                <div style={{ fontSize: 14, color: "#c0e0f0", marginBottom: 6 }}>{d.emoji} {d.name}</div>
                <div style={{ fontSize: 12, color: "#8aa0b0", lineHeight: 1.6, marginBottom: 6 }}>{d.what}</div>
                <div style={{ fontSize: 11, color: "#6a8a9a", marginBottom: 4 }}><span style={{ color: "#5aa8c4" }}>Where:</span> {d.where}</div>
                <div style={{ fontSize: 11, color: "#c09060", lineHeight: 1.5 }}>🧒 {d.kidTip}</div>
              </div>
            ))}

            <div style={{ marginTop: 24, padding: "14px 16px", background: "#1a1408", borderRadius: 10, border: "1px solid #3a2810" }}>
              <div style={{ fontSize: 11, letterSpacing: 2, textTransform: "uppercase", color: "#c09060", marginBottom: 6 }}>🏆 The Non-Negotiables</div>
              <div style={{ fontSize: 12, color: "#a08060", lineHeight: 1.7 }}>
                1. <strong>Brynja soft-serve in Akureyri</strong> — pilgrimage-worthy, Icelanders travel for this<br/>
                2. <strong>Skúffukaka at any proper bakery</strong> — the national cake, every kid's new favorite<br/>
                3. <strong>Braud & Co snúður in Reykjavik</strong> — the rainbow bakery, best cinnamon roll in the country<br/>
                4. <strong>Nammi pick 'n mix on a Saturday</strong> — proper Icelandic kid tradition<br/>
                5. <strong>Gullfoss rhubarb crumble</strong> — right on your Day 3 Golden Circle route
              </div>
            </div>
          </div>
        )}

        {tab === 8 && (
          <div>
            <p style={s.intro}>Flights are booked. Work through this in order. Tap any item to check it off.</p>
            {bookingPhases.map((phase, pi) => (
              <div key={pi} style={{ marginBottom: 20 }}>
                <div style={{ display: "inline-block", background: phase.done ? "rgba(74,138,104,0.15)" : phase.urgent ? "#200808" : "#0a1820", border: "1px solid " + (phase.done ? "#4a8a6840" : phase.urgent ? "#601010" : "#1a3040"), borderRadius: 6, padding: "3px 12px", fontSize: 11, color: phase.done ? "#4a8a68" : phase.urgent ? "#d06050" : "#5aa8c4", marginBottom: 9 }}>
                  {phase.label}
                </div>
                {phase.items.map((item, ii) => {
                  const k = pi + "-" + ii;
                  const done = !!checked[k];
                  return (
                    <div key={ii} onClick={() => toggle(k)} style={{ display: "flex", gap: 10, alignItems: "flex-start", marginBottom: 7, padding: "10px 12px", background: done ? "#080f18" : "#090f18", borderRadius: 7, border: "1px solid #1a2a30", cursor: "pointer" }}>
                      <div style={{ width: 16, height: 16, border: "1px solid #2a5060", borderRadius: 3, flexShrink: 0, marginTop: 1, background: done ? "#5aa8c4" : "none", display: "flex", alignItems: "center", justifyContent: "center" }}>
                        {done && <span style={{ fontSize: 10, color: "#080f18" }}>✓</span>}
                      </div>
                      <div style={{ flex: 1 }}>
                        <div style={{ fontSize: 13, color: done ? "#2a5060" : "#90b8c8", textDecoration: done ? "line-through" : "none", lineHeight: 1.5 }}>{item.text}</div>
                        {item.note && <div style={{ fontSize: 11, color: "#2a4050", marginTop: 2 }}>{item.note}</div>}
                      </div>
                      {item.url && !done && (
                        <a href={item.url} onClick={(e) => e.stopPropagation()} style={{ fontSize: 11, color: "#5aa8c4", textDecoration: "none", paddingTop: 2, whiteSpace: "nowrap" }}>Open →</a>
                      )}
                    </div>
                  );
                })}
              </div>
            ))}
          </div>
        )}

      </div>
    </div>
  );
}
