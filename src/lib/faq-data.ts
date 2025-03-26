
export interface FAQItem {
  id: string;
  question: string;
  answer: string | JSX.Element;
  category: string;
  videoEmbed?: string;
}

export const faqItems: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'What determines fair pricing in FX trading?',
    answer: 'Fair pricing in FX trading is driven by market liquidity, supply and demand, and interest rate differentials. Major financial institutions and liquidity       providers influence pricing through bid/ask spreads, while central bank policies and macroeconomic events create fluctuations. Transparent pricing comes from           competitive market forces, but traders should always compare quotes across providers to ensure minimal hidden costs.',
    category: 'FAQ',  // Change this to whatever category name you want
    videoEmbed: ''
  },
  {
    id: 'faq-2',
    question: 'How To Upload Trade Confirmations?',
    answer: 'To upload your trade confirmation files, log in and navigate to the top right corner of any screen, where you’ll find a green upload button with an arrow.       Click on it to begin. You can either drag and drop your files or select ‘Choose from computer’ to browse your recent files. Once you’ve selected the files, click       ‘Open’, then ‘Upload All’ to complete the process.',
    category: 'Video Tutorials',
    videoEmbed: 'https://www.youtube.com/embed/NjifB4RjvyQ'
  },
  {
    id: 'faq-3',
    question: 'How To Perform A Live Benchmark',
    answer: `## Performing a Real-Time Benchmark for a Currency Trade  

The **Live Margin section** provides a **pre-trade tool** that allows you to evaluate the **margin and cost** applied to individual currency trades in **real time**. This feature helps you make informed decisions before executing a trade.  

### Steps to Use:  
1. **Enter your trade details** – Select the **currencies, tenor, and amounts** for your transaction.  
2. **Adjust trade direction** – Use the **switch button** if needed.  
3. **Input an indicative rate** – Enter the exchange rate provided by your FX provider.  
4. **Review the margin applied** – The **PPM number** will show the margin your FX provider has applied and the exact **trade cost** for this transaction.  

By following these steps, you can **benchmark your trade in real time**, ensuring transparency in pricing before execution.
`,
    category: 'Video Tutorials',
    videoEmbed: 'https://www.youtube.com/embed/mhc30ghh6JA'
  },
  {
    id: 'faq-4',
    question: 'How To Use The Rate Watch Feature',
    answer: `## Using the Rate Watch Feature  

The **Rate Watch** tool helps you **track currency rates** and set **budget rates** for better financial planning.  

### How It Works:  
- At the **top of the screen**, a ribbon displays **live interbank market rates** for selected currencies.  
- You can **choose which currency pairs to track** by clicking on **“Manage Currency Cards”**.  
- You can also enter **budget FX rates**, which are used internally for financial planning.  

### Tracking Exchange Rate Deviations:  
- The **intuitive graph** allows you to **track deviations** from your budget rate over time.  
- This helps compare **planned vs. actual exchange rates** for better financial insights.  
- On the graph, the **yellow dotted line** represents your **budget rate**.  
- You can configure these rates by clicking on **“the rate and arrow”**.  

By leveraging **Rate Watch**, you gain **better visibility and control** over exchange rates, making financial planning more effective.
`,
    category: 'Video Tutorials',
    videoEmbed: 'https://www.youtube.com/embed/RcvMeM2Bzlw'
  },
  {
    id: 'faq-5',
    question: 'Understanding Fair Cost Feature',
    answer: `
The **Fair Cost** feature helps you compare your current **FX margins and costs** against what similar companies are paying for the same trades.  

### How It Works:  
- The benchmark is based on the **average margin** from analyzed trades of businesses that have negotiated with their providers.  
- This provides **a clear picture** of how **competitive your FX rates** really are.  

### Interpreting the Graph:  
- The **black line** represents **your average margins** across different tenors.  
- The **green line** represents the **fair margin**—what other businesses are paying.  
- **Color-coded zones** indicate where your margins stand:  
  - **Red** → Your rates are higher than the fair margin.  
  - **Yellow** → Close to fair, but there’s room for improvement.  
  - **Green** → Ideal zone, where your margins **match or beat** the fair margin.  
- The goal? **Get into the green zone.**  

### Additional Insights:  
- The **‘Distance to Fair Margin’** metric (highlighted in yellow) shows how much you’re being overpriced on average.  
- The **difference between ‘Trade Cost’ and ‘Fair Trade Cost’** highlights how much you could potentially **save** by aligning with fair cost levels.  

By using **Fair Cost**, businesses can make **data-driven decisions** and negotiate better FX rates with confidence.  
`,
    category: 'Video Tutorials',
    videoEmbed: 'https://www.youtube.com/embed/YjlSCyRt-fc'
  },
  {
    id: 'faq-6',
    question: 'Understanding The Savings Feature',
    answer: ` 

The **Savings** feature helps you track the **realized cost savings** from improvements in your **FX margins**. By comparing your **average margins** before and after a **negotiation event or a bank switch**, it provides a **clear view of the impact**.  

### How It Works:  
- The tool **compares** your past and present margins to quantify savings.  
- It provides **real-time updates** as you **upload trades**, allowing you to track your progress over time.  

### Interpreting the Graph:  
- **Three key lines** help visualize the savings:  
  - **Dotted line** → Represents your **previous margins** (before negotiations).  
  - **Solid black line** → Shows your **current margins** (after negotiations).  
  - **Green line** → The **target fair margin**, serving as a benchmark.  
- On the **left-hand side**, you’ll see:  
  - The **percentage change** from your previous margin (**hover over the green figure**).  
- In the **top-right corner**, you’ll find:  
  - The **realized savings figure**—the **total amount saved** since the displayed date (**hover over the green savings figure**).  

By using **Savings**, businesses can **quantify the benefits of better FX pricing**, track improvements, and measure the impact of negotiations.  
`,
    category: 'Video Tutorials',
    videoEmbed: 'https://www.youtube.com/embed/xuCIuolZbUI'
  },
  {
    id: 'faq-7',
    question: 'How To Use The Data Visualization Tools in Just FX Cost',
    answer: ` 

The **Trade Analysis** feature allows you to explore your trade data through multiple perspectives, helping you gain deeper insights into key metrics.  

### What You Can Analyze:  
- **Cost** – The total cost associated with your trades.  
- **Volume** – The total trade volume over a given period.  
- **Margin** – The margin applied to your trades.  

### Different Views for Analysis:  
- **Date View (Default)** – Tracks trade data **month by month** on the graph.  
- **Tenor View** – Displays how **trade parameters distribute** across different **forward contract lengths**.  
- **Month View & Year View** – Toggle between these options for a **broader or more detailed** time-based perspective.  

### Using Filters for Deeper Insights:  
The **‘Compare By’** filters allow you to segment data by:  
- **Business unit**  
- **Trade type**  
- **Provider**  
- **Currency pair**  

### Structured Data View:  
For a **more structured and tabular analysis**, switch to **Table View**, making it easier to review and compare trade data at a glance.  

By utilizing these views and filters, you can **customize your trade analysis** to better understand trends, optimize decision-making, and improve FX strategies.  
`,
    category: 'Video Tutorials',
    videoEmbed: 'https://www.youtube.com/embed/IM3Ooiqy6uU'
  },
  {
    id: 'faq-8',
    question: 'How To Add Bank Margin Discussion & What Insights It Provides',
    answer: ` 

The **Bank Margin Discussion** feature allows you to record negotiation events and track their impact on your FX margins over time.  

### How to Log a Bank Margin Discussion:  
1. Go to the **Cost** section of the platform.  
2. Above the graph on the right-hand side, click **‘+ Add Bank Margin Discussion’**.  
3. Enter the details of the negotiation event or **bank switch**.  

### How This Reflects in Your Analysis:  
- Once logged, the negotiation event appears as a **vertical orange dotted line** on the **margin graph**, marking the exact moment of the change.  
- This helps visualize how negotiations impact your FX margins.  

### Tracking Savings Post-Negotiation:  
- In the **Savings** feature, adjust the view to track savings **from the moment the negotiation was recorded**.  
- Select the negotiation discussion from the **‘Choose Another Date’** dropdown.  
- The **savings and fair cost view** will update to reflect **post-negotiation data**.  

By logging bank margin discussions, you gain **greater visibility** into the impact of negotiations, helping you track improvements and optimize future discussions.  
`,
    category: 'Video Tutorials',
    videoEmbed: 'https://www.youtube.com/embed/TTfWSzTkShQ'
  },
  {
    id: 'faq-9',
    question: 'How to use filters in FX Cost',
    answer: `

The **Filtering** feature allows you to refine your trade analysis by segmenting data based on various criteria, enabling a more targeted and insightful view.  

### How to Apply Filters:  
1. Click on the **blue filter button** in the **upper right-hand corner** of your screen.  
2. Choose from the following filter options:  
   - **Business unit**  
   - **Trade type**  
   - **Tenor** (*contract length for forward trades*)  
   - **FX provider or bank**  
   - **Currency pair**  
   - **Specific date ranges**  
   - **Margins**  

### Combining Filters for Deeper Insights:  
- You can apply **multiple filters simultaneously** to create a more refined analysis.  
- For example, filter by **a specific business unit, a particular provider, and a selected currency pair** to focus only on relevant trade data.  

By utilizing filters, you can **customize your trade analysis** to highlight key trends, identify cost-saving opportunities, and make data-driven decisions.  
`,
    category: 'Video Tutorials',
    videoEmbed: 'https://www.youtube.com/embed/zkbfTnArAsk'
  },
  {
    id: 'faq-10',
    question: 'How To Invite Colleagues And Set Up Your Company',
    answer: `

The **Company Management** feature allows you to invite colleagues and configure business units within the Just platform.  

### How to Invite a Colleague:  
1. In the **top right corner**, click on your **profile icon** and select **‘Company’** from the menu.  
2. Click **‘+ Colleague’** and enter the colleague’s **email address**.  
3. Assign their role as either **Member or Admin**:  
   - **Admins** can invite colleagues and manage permissions.  
4. Select the **business unit data** they can view and upload by ticking the relevant boxes.  
5. Click **‘Invite Colleague’**—they will receive an email to set up their profile.  

### Adding Business Units:  
- In the **Company Admin** section, you can add **business unit details**.  
- Under **“Business Unit”**, click **‘Create Business Unit’** to proceed.  

By managing company settings effectively, you ensure the right team members have **appropriate access** to data, streamlining collaboration on the Just platform.  
`,
    category: 'Video Tutorials',
    videoEmbed: 'https://www.youtube.com/embed/6yqFDs271mI'
  },
  {
    id: 'faq-11',
    question: 'How does the FX market operate?',
    answer: 'The FX market is decentralized or "over-the-counter" market, where trading occurs directly between two parties rather than via centralized exchanges. It       is the largest financial market in the world, accounting for over $5 trillion in daily trading volume.In a typical corporate FX transaction, a contract is made to      purchase one currency and sell another at a set rate. This contract is subsequently "settled" by physically delivering the currencies between parties.The key           participants of the FX market are international banks, who act as "market makers" and trade significant volumes of currency, driving global price movements.            Transactions between these major banks are referred to as the "interbank market", and represents the most efficient market (best pricing with smallest spread) for      FX.The FX market operates 24 hours a day, except weekends. Trading may also be suspended in individual markets on public holidays, which can impact liquidity for      example, relatively little volume is trade on Christmas Day and New Year\'s Day).',
    category: 'FX Market Mechanics',
    videoEmbed: ''
  },
  {
    id: 'faq-12',
    question: 'What are bid and ask?',
    answer: 'The "bid" price is what the dealer is willing to pay for currency if the customer is selling, while the “ask” price is how much the dealer wants for a         currency if the customer is buying. The ask price is also referred to as the "offer" price.The bid price is lower than the ask price, because you cannot sell           currency at a higher price than you buy it. The difference between the bid and ask prices is referred to as the "spread".',
    category: 'FX Market Mechanics',
    videoEmbed: ''
  },
  {
    id: 'faq-13',
    question: 'What is liquidity?',
    answer: 'Liquidity refers to the level of trading activity for a given currency pair at a point in time. High liquidity helps keep the market stable and avoid          price volatility, and keeps spread tighter and hence pricing more favourable. It is therefore often more risky to trade at times when liquidity is reduced, such as     major market holidays.',
    category: 'FX Market Mechanics',
    videoEmbed: ''
  },
  {
    id: 'faq-14',
    question: 'What is a market maker?',
    answer: 'A "market maker" quotes prices at which currency can be bought and sold to the counterparties (other organizations) with which they have a relationship.       Specifically, what identifies a market maker is that they always quote both bid and ask prices for a set of currencies.It is effectively the network of market          makers around the world which drive foreign exchange pricing. Large international banks typically have market makers for every major currency pair.Market makers        make money in two ways: firstly, through the bid/ask spread on the currencies they trade, and secondly (optionally) by taking positions themselves in the market by     trading with other banks.',
    category: 'FX Market Mechanics',
    videoEmbed: ''
  },
  {
    id: 'faq-15',
    question: 'How are prices set in the FX market?',
    answer: 'FX pricing is driven by market makers and due to the decentralized nature of the market, there is no single "source of truth" for pricing. In fact,            pricing available to a trade is highly dependent on the counterparties with which they have a relationship.Typically market makers will consider several factors in     setting pricing:1) Rates being quoted by other market makers - it is always desirable to attract FX "flow" (transaction volume) by offering competitive pricing.2)      Positions they have taken in the market - for example, if they wish to adjust their risk profile they may offer pricing which enables them to rebalance their           position.3) Their prediction of future direction for an exchange  rate.',
    category: 'FX Market Mechanics',
    videoEmbed: ''
  },
  {
    id: 'faq-16',
    question: 'How does the size of a trade affect the price?',
    answer: 'When market makers quote bid and ask pricing, they typically accompany this with a "volume". This is the size of trade for which the price will be             honoured. At any one time, there may be multiple quotes in the market with different pricing at different volumes. This means that depending on the size of a           trade, different prices may be available. The best pricing in the market ("top of book") may only be available for smaller volumes, and larger trades may be            executed at a price further down the order book.',
    category: 'FX Market Mechanics',
    videoEmbed: ''
  },
  {
    id: 'faq-17',
    question: 'How do banks make money on FX',
    answer: 'Banks make money on FX operations in several ways. The capital markets departments typically make money through market making and trading operations -         collecting bid/ask spread and taking positions in the market.However, banks also generate profit through the corporate FX services they provide. Typically, the FX      sales desk which quotes pricing to corporate customers will apply a margin or mark-up to the prices at which the bank\'s traders are dealing. This margin is not        disclosed, and can differ wildly from customer to customer ("price discrimination").Just FX Analytics uses interbank top-of-book prices usually accessible only to      professional traders to benchmark corporate FX rates and calculate this markup.',
    category: 'FX Market Mechanics',
    videoEmbed: ''
  },
  {
    id: 'faq-18',
    question: 'What is a SPOT contract?',
    answer: 'A spot FX transaction is the “simplest” trade and refers to an agreement between two parties to exchange currencies at an agreed price (the “spot rate”).      The idea of a spot trade is that it is as close as is often practical to an “immediate” exchange of  currencies, allowing for some time to physically deliver the       currency (“settle" the trade).Spot transactions are typically settled (that is, funds are transferred between parties) two business days after the trade date           (“T+2”). However, there are exceptions to this convention: most notably, USD/CAD settles on T+1.Spot trades are the most common type of FX trade, and account for       more than 2 trillion USD of daily transactions.',
    category: 'FX Instruments',
    videoEmbed: ''
  },
  {
    id: 'faq-19',
    question: 'What is a FORWARD contract?',
    answer: `An **FX forward transaction** (also referred to as a *“forward outright”*) is an agreement between two parties to exchange currencies at an agreed price on a future settlement date which is **not** the spot date. The purpose is to mitigate risk by guaranteeing an exchange rate between currencies for a future date. This might be used for a planned invoice payment in another currency, for example.

  The key difference between a **forward and spot trade** is that, due to the difference in settlement dates, forwards take into account the *“time value of money”*. The rate for a forward contract (*the “all-in rate”*) is composed of:

  - The **current spot price**, plus
  - A number of **“forward points”**, which are determined by:
  - The **interest rate differential** between the two currencies (since this reflects the relative value of holding one over the other).
  - The **length of the contract** (typically, the longer the contract, the greater the difference between the all-in rate and the spot rate).

  It is important to note that **the price of a forward contract is not a reflection of the future exchange rate** between the currencies (*expected future spot price*).

  ### **Settlement & Value Date**
  - Forward contracts may settle on **any valid business day** in both currencies.
  - The settlement date of a forward contract is referred to as the **“value date”**.
  - Common **fixed tenor durations** include:
  - **1 week**
  - **1 month**
  - **1 year**, etc.
  - A value date that does not fall on a **fixed tenor date** is referred to as a **“broken date”**. *(See “Tenors” for more details.)*

  ### **Short-Dated Forward Contracts**
  Forward contracts may also be **“short-dated”**, meaning their value date falls **before** the spot date. In this scenario, the all-in rate moves in the **opposite direction** to the spot rate compared to **post-spot forward contracts**.`,
    category: 'FX Instruments',
    videoEmbed: ''
  },
  {
    id: 'faq-20',
    question: 'What is a SWAP?',
    answer: 'An FX swap is two agreements to exchange a pair of currencies with two different value dates, in opposing directions. These agreements are referred to as      “legs” of the swap. The earlier leg is referred to as the “near leg”, and the latter is the “far leg”. For example, a swap contract might be created to buy             currency on the spot date, and sell the same amount in 1 month. Commonly one leg of a swap is a spot transaction, in which case the swap is essentially the forward     point component of a forward contract. However, it is also possible to execute a swap where both legs are forwards. Swaps are commonly used to allow the settlement     date of a forward trade to be moved later (“rolled forward”) or earlier in time, by using one leg to cancel out an existing forward contract.',
    category: 'FX Instruments',
    videoEmbed: ''
  },
  {
    id: 'faq-21',
    question: 'What are tenors?',
    answer: `Tenors refer to the common standard contract durations for forward trades.

  **Fixed FX tenors**
  **Pre-Spot** ("short-dated" forwards)
  - **TOD** (Today)
  - **TOM** (Tomorrow)

  **Post-Spot**
  - **SN** (Spot Next) - this is 1 day after a spot
  - 1 WEEK, 2 WEEK, 3 WEEK - number of weeks after the spot date
  - 1 MONTH, 2 MONTH, etc. - number of months after the spot date
  - 1 YEAR, 2 YEAR, 5 YEAR - number of years after the spot date

  **Calculating Fixed Tenors**
  If the date of a fixed tenor for a trade falls on a market holiday for either currency in the pair, the date is typically moved to the next business day.

  **Broken Tenors**
  A Broken Tenor is a forward contract that is for a time period that falls in between the fixed FX tenors described above.`,

    category: 'FX Instruments',
    videoEmbed: ''
  },
  {
    id: 'faq-22',
    question: 'FX Course Name',
    answer: 'FX Courses Content.',
    category: 'FX Courses',
    videoEmbed: ''
  },
{
  id: 'faq-23',
  question: 'What to focus on in negotiations',
  answer: `- **Best way to approach**
- **Success stories to exemplify** (testimonials, case studies)
- **Discount levels**
- **Use data** – leverage a **data-driven approach** to strengthen negotiations.
- **Spot is best to negotiate on**, as it will set the tone for **forward pricing**.`,
  category: 'Guides (Playbooks)',
  videoEmbed: ''
  },
{
    id: 'faq-24',
    question: 'Dummy : Multinational Retailer Saves Big) ',
    answer: `In early 2022, a leading multinational retail chain with operations across Europe and Asia faced mounting FX costs. The company routinely executed large-volume currency trades for procurement, supplier settlements, and overseas staff payrolls. Despite having a sophisticated finance department, they were consistently overpaying due to opaque pricing structures with their banks.

By onboarding with a transparent FX benchmarking solution, the company began monitoring margins on every trade. Within the first quarter, analytics revealed a consistent 50–70 PPM (points per million) markup on USD/SEK trades—far above industry standards.

Armed with this data, they negotiated better rates. Their primary bank adjusted its pricing algorithm to remain competitive, and a secondary provider entered negotiations, offering volume-based pricing tiers. Within six months, the company achieved a 60% reduction in FX margin costs, saving over €425,000 annually.

Beyond savings, they gained real-time visibility into pricing trends and were able to build a stronger, data-backed relationship with their providers.
In early 2022, a leading multinational retail chain with operations across Europe and Asia faced mounting FX costs. The company routinely executed large-volume currency trades for procurement, supplier settlements, and overseas staff payrolls. Despite having a sophisticated finance department, they were consistently overpaying due to opaque pricing structures with their banks.

By onboarding with a transparent FX benchmarking solution, the company began monitoring margins on every trade. Within the first quarter, analytics revealed a consistent 50–70 PPM (points per million) markup on USD/SEK trades—far above industry standards.

Armed with this data, they negotiated better rates. Their primary bank adjusted its pricing algorithm to remain competitive, and a secondary provider entered negotiations, offering volume-based pricing tiers. Within six months, the company achieved a 60% reduction in FX margin costs, saving over €425,000 annually.

Beyond savings, they gained real-time visibility into pricing trends and were able to build a stronger, data-backed relationship with their providers.
In early 2022, a leading multinational retail chain with operations across Europe and Asia faced mounting FX costs. The company routinely executed large-volume currency trades for procurement, supplier settlements, and overseas staff payrolls. Despite having a sophisticated finance department, they were consistently overpaying due to opaque pricing structures with their banks.

By onboarding with a transparent FX benchmarking solution, the company began monitoring margins on every trade. Within the first quarter, analytics revealed a consistent 50–70 PPM (points per million) markup on USD/SEK trades—far above industry standards.

Armed with this data, they negotiated better rates. Their primary bank adjusted its pricing algorithm to remain competitive, and a secondary provider entered negotiations, offering volume-based pricing tiers. Within six months, the company achieved a 60% reduction in FX margin costs, saving over €425,000 annually.

Beyond savings, they gained real-time visibility into pricing trends and were able to build a stronger, data-backed relationship with their providers.
`,
    category: 'Guides (Playbooks)',
    videoEmbed: ''
  },
  {
    id: 'faq-25',
    question: 'Another topic Ep2',
    answer: `- **Best way to approach**
  - **Success stories to exemplify** (testimonials, case studies)
  - **Discount levels**
  - **Use data** – leverage a **data-driven approach** to strengthen negotiations.
  - **Spot is best to negotiate on**, as it will set the tone for **forward pricing**.`,
    category: 'Guides (Playbooks)',
    videoEmbed: ''
  },
  {
    id: 'faq-26',
    question: 'Another topic Ep3',
    answer: `- **Best way to approach**
  - **Success stories to exemplify** (testimonials, case studies)
  - **Discount levels**
  - **Use data** – leverage a **data-driven approach** to strengthen negotiations.
  - **Spot is best to negotiate on**, as it will set the tone for **forward pricing**.`,
    category: 'Guides (Playbooks)',
    videoEmbed: ''
  },
  {
    id: 'faq-27',
    question: 'Another topic Ep4',
    answer: `- **Best way to approach**
  - **Success stories to exemplify** (testimonials, case studies)
  - **Discount levels**
  - **Use data** – leverage a **data-driven approach** to strengthen negotiations.
  - **Spot is best to negotiate on**, as it will set the tone for **forward pricing**.`,
    category: 'Guides (Playbooks)',
    videoEmbed: ''
  },
  {
    id: 'faq-28',
    question: 'Another topic Ep5',
    answer: `- **Best way to approach**
  - **Success stories to exemplify** (testimonials, case studies)
  - **Discount levels**
  - **Use data** – leverage a **data-driven approach** to strengthen negotiations.
  - **Spot is best to negotiate on**, as it will set the tone for **forward pricing**.`,
    category: 'Guides (Playbooks)',
    videoEmbed: ''
  },
  {
    id: 'faq-29',
    question: 'Another topic Ep6',
    answer: `- **Best way to approach**
  - **Success stories to exemplify** (testimonials, case studies)
  - **Discount levels**
  - **Use data** – leverage a **data-driven approach** to strengthen negotiations.
  - **Spot is best to negotiate on**, as it will set the tone for **forward pricing**.`,
    category: 'Guides (Playbooks)',
    videoEmbed: ''
  },
  {
    id: 'faq-30',
    question: 'Another topic Ep7',
    answer: `- **Best way to approach**
  - **Success stories to exemplify** (testimonials, case studies)
  - **Discount levels**
  - **Use data** – leverage a **data-driven approach** to strengthen negotiations.
  - **Spot is best to negotiate on**, as it will set the tone for **forward pricing**.`,
    category: 'Guides (Playbooks)',
    videoEmbed: ''
  },
  {
    id: 'faq-31',
    question: 'Another topic Ep8',
    answer: `- **Best way to approach**
  - **Success stories to exemplify** (testimonials, case studies)
  - **Discount levels**
  - **Use data** – leverage a **data-driven approach** to strengthen negotiations.
  - **Spot is best to negotiate on**, as it will set the tone for **forward pricing**.`,
    category: 'Guides (Playbooks)',
    videoEmbed: ''
  },
  {
    id: 'faq-32',
    question: 'Another topic Ep9',
    answer: `- **Best way to approach**
  - **Success stories to exemplify** (testimonials, case studies)
  - **Discount levels**
  - **Use data** – leverage a **data-driven approach** to strengthen negotiations.
  - **Spot is best to negotiate on**, as it will set the tone for **forward pricing**.`,
    category: 'Guides (Playbooks)',
    videoEmbed: ''
  },
  {
    id: 'faq-33',
    question: 'Another topic Ep10',
    answer: `- **Best way to approach**
  - **Success stories to exemplify** (testimonials, case studies)
  - **Discount levels**
  - **Use data** – leverage a **data-driven approach** to strengthen negotiations.
  - **Spot is best to negotiate on**, as it will set the tone for **forward pricing**.`,
    category: 'Guides (Playbooks)',
    videoEmbed: ''
  },
  {
    id: 'faq-34',
    question: 'Another topic Ep11',
    answer: `- **Best way to approach**
  - **Success stories to exemplify** (testimonials, case studies)
  - **Discount levels**
  - **Use data** – leverage a **data-driven approach** to strengthen negotiations.
  - **Spot is best to negotiate on**, as it will set the tone for **forward pricing**.`,
    category: 'Guides (Playbooks)',
    videoEmbed: ''
  },
];
