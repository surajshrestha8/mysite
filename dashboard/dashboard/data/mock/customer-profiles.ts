export interface CustomerEvent {
  id: string;
  type: "signup" | "upgrade" | "payment" | "support" | "downgrade" | "trial_start";
  description: string;
  date: string;
}

export interface CustomerProfile {
  customerId: string;
  mrrHistory: number[]; // 6 values, oldest first, most recent last
  events: CustomerEvent[];
}

export const customerProfiles: Record<string, CustomerProfile> = {
  "1": {
    customerId: "1",
    mrrHistory: [899, 899, 899, 899, 899, 899],
    events: [
      { id: "1-1", type: "signup", description: "Sarah Johnson signed up for Enterprise plan", date: "2023-03-15" },
      { id: "1-2", type: "payment", description: "Payment received — $899", date: "2023-04-15" },
      { id: "1-3", type: "support", description: "Opened support ticket: API integration question", date: "2023-06-10" },
      { id: "1-4", type: "payment", description: "Payment received — $899", date: "2023-07-15" },
      { id: "1-5", type: "payment", description: "Payment received — $899", date: "2024-01-15" },
    ],
  },
  "2": {
    customerId: "2",
    mrrHistory: [299, 299, 299, 299, 299, 299],
    events: [
      { id: "2-1", type: "signup", description: "Marcus Chen signed up for Starter plan", date: "2023-07-22" },
      { id: "2-2", type: "upgrade", description: "Upgraded from Starter to Pro plan", date: "2023-08-15" },
      { id: "2-3", type: "payment", description: "Payment received — $299", date: "2023-09-22" },
      { id: "2-4", type: "payment", description: "Payment received — $299", date: "2023-11-22" },
      { id: "2-5", type: "payment", description: "Payment received — $299", date: "2024-01-22" },
    ],
  },
  "3": {
    customerId: "3",
    mrrHistory: [49, 49, 49, 49, 49, 49],
    events: [
      { id: "3-1", type: "signup", description: "Emily Rodriguez signed up for Starter plan", date: "2024-01-08" },
      { id: "3-2", type: "payment", description: "Payment received — $49", date: "2024-02-08" },
      { id: "3-3", type: "payment", description: "Payment received — $49", date: "2024-03-08" },
    ],
  },
  "4": {
    customerId: "4",
    mrrHistory: [899, 899, 899, 899, 899, 899],
    events: [
      { id: "4-1", type: "signup", description: "James Wilson signed up for Enterprise plan", date: "2022-11-30" },
      { id: "4-2", type: "payment", description: "Payment received — $899", date: "2022-12-30" },
      { id: "4-3", type: "support", description: "Opened support ticket: Billing inquiry", date: "2023-03-10" },
      { id: "4-4", type: "payment", description: "Payment received — $899", date: "2023-06-30" },
      { id: "4-5", type: "payment", description: "Payment received — $899", date: "2024-01-30" },
    ],
  },
  "5": {
    customerId: "5",
    mrrHistory: [299, 299, 299, 299, 0, 0],
    events: [
      { id: "5-1", type: "signup", description: "Priya Patel signed up for Pro plan", date: "2023-05-14" },
      { id: "5-2", type: "payment", description: "Payment received — $299", date: "2023-06-14" },
      { id: "5-3", type: "payment", description: "Payment received — $299", date: "2023-07-14" },
      { id: "5-4", type: "support", description: "Opened support ticket: Feature request", date: "2023-08-01" },
      { id: "5-5", type: "downgrade", description: "Account cancelled — churned", date: "2023-09-01" },
    ],
  },
  "6": {
    customerId: "6",
    mrrHistory: [899, 899, 899, 899, 899, 899],
    events: [
      { id: "6-1", type: "signup", description: "David Kim signed up for Enterprise plan", date: "2023-09-01" },
      { id: "6-2", type: "payment", description: "Payment received — $899", date: "2023-10-01" },
      { id: "6-3", type: "payment", description: "Payment received — $899", date: "2023-12-01" },
      { id: "6-4", type: "support", description: "Opened support ticket: Onboarding assistance", date: "2024-01-05" },
      { id: "6-5", type: "payment", description: "Payment received — $899", date: "2024-02-01" },
    ],
  },
  "7": {
    customerId: "7",
    mrrHistory: [0, 0, 0, 0, 0, 0],
    events: [
      { id: "7-1", type: "trial_start", description: "Laura Martinez started a 14-day free trial", date: "2024-01-20" },
      { id: "7-2", type: "support", description: "Opened support ticket: How-to question", date: "2024-01-25" },
    ],
  },
  "8": {
    customerId: "8",
    mrrHistory: [299, 299, 299, 299, 299, 299],
    events: [
      { id: "8-1", type: "signup", description: "Tom Anderson signed up for Pro plan", date: "2023-06-18" },
      { id: "8-2", type: "payment", description: "Payment received — $299", date: "2023-07-18" },
      { id: "8-3", type: "payment", description: "Payment received — $299", date: "2023-09-18" },
      { id: "8-4", type: "payment", description: "Payment received — $299", date: "2023-12-18" },
      { id: "8-5", type: "payment", description: "Payment received — $299", date: "2024-01-18" },
    ],
  },
  "9": {
    customerId: "9",
    mrrHistory: [899, 899, 899, 899, 899, 899],
    events: [
      { id: "9-1", type: "signup", description: "Aisha Okafor signed up for Enterprise plan", date: "2022-08-10" },
      { id: "9-2", type: "payment", description: "Payment received — $899", date: "2022-09-10" },
      { id: "9-3", type: "upgrade", description: "Seat expansion — added 5 users", date: "2023-01-15" },
      { id: "9-4", type: "support", description: "Opened support ticket: Data export question", date: "2023-08-20" },
      { id: "9-5", type: "payment", description: "Payment received — $899", date: "2024-01-10" },
    ],
  },
  "10": {
    customerId: "10",
    mrrHistory: [299, 299, 299, 299, 299, 299],
    events: [
      { id: "10-1", type: "signup", description: "Ryan O'Brien signed up for Pro plan", date: "2023-12-01" },
      { id: "10-2", type: "payment", description: "Payment received — $299", date: "2024-01-01" },
      { id: "10-3", type: "payment", description: "Payment received — $299", date: "2024-02-01" },
    ],
  },
  "11": {
    customerId: "11",
    mrrHistory: [49, 49, 49, 49, 49, 49],
    events: [
      { id: "11-1", type: "signup", description: "Nina Schulz signed up for Starter plan", date: "2024-01-05" },
      { id: "11-2", type: "payment", description: "Payment received — $49", date: "2024-02-05" },
      { id: "11-3", type: "payment", description: "Payment received — $49", date: "2024-03-05" },
    ],
  },
  "12": {
    customerId: "12",
    mrrHistory: [299, 299, 299, 299, 299, 299],
    events: [
      { id: "12-1", type: "signup", description: "Carlos Ferreira signed up for Pro plan", date: "2023-10-15" },
      { id: "12-2", type: "payment", description: "Payment received — $299", date: "2023-11-15" },
      { id: "12-3", type: "payment", description: "Payment received — $299", date: "2023-12-15" },
      { id: "12-4", type: "payment", description: "Payment received — $299", date: "2024-01-15" },
    ],
  },
  "13": {
    customerId: "13",
    mrrHistory: [0, 0, 0, 0, 0, 0],
    events: [
      { id: "13-1", type: "trial_start", description: "Isabella Wong started a 14-day free trial", date: "2024-01-18" },
      { id: "13-2", type: "support", description: "Opened support ticket: Pricing question", date: "2024-01-22" },
    ],
  },
  "14": {
    customerId: "14",
    mrrHistory: [899, 899, 899, 899, 899, 899],
    events: [
      { id: "14-1", type: "signup", description: "Mohammed Al-Rashid signed up for Enterprise plan", date: "2023-04-22" },
      { id: "14-2", type: "payment", description: "Payment received — $899", date: "2023-05-22" },
      { id: "14-3", type: "upgrade", description: "Added SSO & advanced reporting add-ons", date: "2023-07-01" },
      { id: "14-4", type: "support", description: "Opened support ticket: SSO configuration help", date: "2023-09-14" },
      { id: "14-5", type: "payment", description: "Payment received — $899", date: "2024-01-22" },
    ],
  },
  "15": {
    customerId: "15",
    mrrHistory: [299, 299, 0, 0, 0, 0],
    events: [
      { id: "15-1", type: "signup", description: "Sophie Dubois signed up for Pro plan", date: "2023-02-14" },
      { id: "15-2", type: "payment", description: "Payment received — $299", date: "2023-03-14" },
      { id: "15-3", type: "support", description: "Opened support ticket: Performance issue", date: "2023-04-05" },
      { id: "15-4", type: "downgrade", description: "Account cancelled — churned", date: "2023-05-01" },
    ],
  },
  "16": {
    customerId: "16",
    mrrHistory: [299, 299, 299, 299, 299, 299],
    events: [
      { id: "16-1", type: "signup", description: "Alex Turner signed up for Pro plan", date: "2023-08-30" },
      { id: "16-2", type: "payment", description: "Payment received — $299", date: "2023-09-30" },
      { id: "16-3", type: "payment", description: "Payment received — $299", date: "2023-11-30" },
      { id: "16-4", type: "payment", description: "Payment received — $299", date: "2024-01-30" },
    ],
  },
  "17": {
    customerId: "17",
    mrrHistory: [49, 49, 49, 49, 49, 49],
    events: [
      { id: "17-1", type: "signup", description: "Yuki Tanaka signed up for Starter plan", date: "2023-11-11" },
      { id: "17-2", type: "payment", description: "Payment received — $49", date: "2023-12-11" },
      { id: "17-3", type: "payment", description: "Payment received — $49", date: "2024-01-11" },
    ],
  },
  "18": {
    customerId: "18",
    mrrHistory: [49, 49, 49, 49, 49, 49],
    events: [
      { id: "18-1", type: "signup", description: "Fatima Hassan signed up for Starter plan", date: "2024-01-02" },
      { id: "18-2", type: "payment", description: "Payment received — $49", date: "2024-02-02" },
      { id: "18-3", type: "payment", description: "Payment received — $49", date: "2024-03-02" },
    ],
  },
  "19": {
    customerId: "19",
    mrrHistory: [899, 899, 899, 899, 899, 899],
    events: [
      { id: "19-1", type: "signup", description: "Lucas Moreau signed up for Enterprise plan", date: "2022-12-15" },
      { id: "19-2", type: "payment", description: "Payment received — $899", date: "2023-01-15" },
      { id: "19-3", type: "upgrade", description: "Contract renewed for 2-year term", date: "2023-06-01" },
      { id: "19-4", type: "support", description: "Opened support ticket: Webhook configuration", date: "2023-10-22" },
      { id: "19-5", type: "payment", description: "Payment received — $899", date: "2024-01-15" },
    ],
  },
  "20": {
    customerId: "20",
    mrrHistory: [299, 299, 299, 299, 299, 299],
    events: [
      { id: "20-1", type: "signup", description: "Hannah Schmidt signed up for Pro plan", date: "2023-09-20" },
      { id: "20-2", type: "payment", description: "Payment received — $299", date: "2023-10-20" },
      { id: "20-3", type: "payment", description: "Payment received — $299", date: "2023-12-20" },
      { id: "20-4", type: "payment", description: "Payment received — $299", date: "2024-01-20" },
    ],
  },
  "21": {
    customerId: "21",
    mrrHistory: [0, 0, 0, 0, 0, 0],
    events: [
      { id: "21-1", type: "trial_start", description: "Oliver James started a 14-day free trial", date: "2024-01-15" },
      { id: "21-2", type: "support", description: "Opened support ticket: Feature walkthrough request", date: "2024-01-20" },
    ],
  },
  "22": {
    customerId: "22",
    mrrHistory: [299, 299, 299, 299, 299, 299],
    events: [
      { id: "22-1", type: "signup", description: "Zara Ahmed signed up for Pro plan", date: "2023-07-07" },
      { id: "22-2", type: "payment", description: "Payment received — $299", date: "2023-08-07" },
      { id: "22-3", type: "payment", description: "Payment received — $299", date: "2023-10-07" },
      { id: "22-4", type: "payment", description: "Payment received — $299", date: "2024-01-07" },
    ],
  },
  "23": {
    customerId: "23",
    mrrHistory: [899, 899, 899, 899, 899, 899],
    events: [
      { id: "23-1", type: "signup", description: "Benjamin Lee signed up for Enterprise plan", date: "2023-03-30" },
      { id: "23-2", type: "payment", description: "Payment received — $899", date: "2023-04-30" },
      { id: "23-3", type: "upgrade", description: "Upgraded to custom data retention policy", date: "2023-07-15" },
      { id: "23-4", type: "support", description: "Opened support ticket: Audit log request", date: "2023-11-10" },
      { id: "23-5", type: "payment", description: "Payment received — $899", date: "2024-01-30" },
    ],
  },
  "24": {
    customerId: "24",
    mrrHistory: [49, 49, 49, 49, 49, 49],
    events: [
      { id: "24-1", type: "signup", description: "Amara Diallo signed up for Starter plan", date: "2023-12-12" },
      { id: "24-2", type: "payment", description: "Payment received — $49", date: "2024-01-12" },
      { id: "24-3", type: "payment", description: "Payment received — $49", date: "2024-02-12" },
    ],
  },
  "25": {
    customerId: "25",
    mrrHistory: [299, 299, 0, 0, 0, 0],
    events: [
      { id: "25-1", type: "signup", description: "Nathan Brooks signed up for Pro plan", date: "2023-01-25" },
      { id: "25-2", type: "payment", description: "Payment received — $299", date: "2023-02-25" },
      { id: "25-3", type: "support", description: "Opened support ticket: Bulk import issues", date: "2023-03-10" },
      { id: "25-4", type: "downgrade", description: "Account cancelled — churned", date: "2023-04-25" },
    ],
  },
  "26": {
    customerId: "26",
    mrrHistory: [899, 899, 899, 899, 899, 899],
    events: [
      { id: "26-1", type: "signup", description: "Mei Lin signed up for Enterprise plan", date: "2022-10-05" },
      { id: "26-2", type: "payment", description: "Payment received — $899", date: "2022-11-05" },
      { id: "26-3", type: "upgrade", description: "Added dedicated support SLA", date: "2023-04-01" },
      { id: "26-4", type: "payment", description: "Payment received — $899", date: "2023-10-05" },
      { id: "26-5", type: "payment", description: "Payment received — $899", date: "2024-01-05" },
    ],
  },
  "27": {
    customerId: "27",
    mrrHistory: [299, 299, 299, 299, 299, 299],
    events: [
      { id: "27-1", type: "signup", description: "Ethan Clarke signed up for Pro plan", date: "2023-11-01" },
      { id: "27-2", type: "payment", description: "Payment received — $299", date: "2023-12-01" },
      { id: "27-3", type: "payment", description: "Payment received — $299", date: "2024-01-01" },
    ],
  },
  "28": {
    customerId: "28",
    mrrHistory: [49, 49, 49, 49, 49, 49],
    events: [
      { id: "28-1", type: "signup", description: "Isabela Santos signed up for Starter plan", date: "2024-01-10" },
      { id: "28-2", type: "payment", description: "Payment received — $49", date: "2024-02-10" },
      { id: "28-3", type: "payment", description: "Payment received — $49", date: "2024-03-10" },
    ],
  },
  "29": {
    customerId: "29",
    mrrHistory: [299, 299, 299, 299, 299, 299],
    events: [
      { id: "29-1", type: "signup", description: "Michael Park signed up for Pro plan", date: "2023-06-25" },
      { id: "29-2", type: "payment", description: "Payment received — $299", date: "2023-07-25" },
      { id: "29-3", type: "payment", description: "Payment received — $299", date: "2023-10-25" },
      { id: "29-4", type: "support", description: "Opened support ticket: API rate limits", date: "2023-12-01" },
      { id: "29-5", type: "payment", description: "Payment received — $299", date: "2024-01-25" },
    ],
  },
  "30": {
    customerId: "30",
    mrrHistory: [899, 899, 899, 899, 899, 899],
    events: [
      { id: "30-1", type: "signup", description: "Charlotte Evans signed up for Enterprise plan", date: "2023-02-28" },
      { id: "30-2", type: "payment", description: "Payment received — $899", date: "2023-03-28" },
      { id: "30-3", type: "upgrade", description: "Added team collaboration features", date: "2023-06-15" },
      { id: "30-4", type: "payment", description: "Payment received — $899", date: "2023-09-28" },
      { id: "30-5", type: "payment", description: "Payment received — $899", date: "2024-01-28" },
    ],
  },
  "31": {
    customerId: "31",
    mrrHistory: [49, 49, 49, 0, 0, 0],
    events: [
      { id: "31-1", type: "signup", description: "Dmitri Volkov signed up for Starter plan", date: "2023-08-15" },
      { id: "31-2", type: "payment", description: "Payment received — $49", date: "2023-09-15" },
      { id: "31-3", type: "support", description: "Opened support ticket: Migration help", date: "2023-10-01" },
      { id: "31-4", type: "downgrade", description: "Account cancelled — churned", date: "2023-11-15" },
    ],
  },
  "32": {
    customerId: "32",
    mrrHistory: [299, 299, 299, 299, 299, 299],
    events: [
      { id: "32-1", type: "signup", description: "Aaliya Khan signed up for Pro plan", date: "2023-10-08" },
      { id: "32-2", type: "payment", description: "Payment received — $299", date: "2023-11-08" },
      { id: "32-3", type: "payment", description: "Payment received — $299", date: "2023-12-08" },
      { id: "32-4", type: "payment", description: "Payment received — $299", date: "2024-01-08" },
    ],
  },
  "33": {
    customerId: "33",
    mrrHistory: [899, 899, 899, 899, 899, 899],
    events: [
      { id: "33-1", type: "signup", description: "François Leroy signed up for Enterprise plan", date: "2022-09-18" },
      { id: "33-2", type: "payment", description: "Payment received — $899", date: "2022-10-18" },
      { id: "33-3", type: "upgrade", description: "Enterprise contract renewal with multi-year discount", date: "2023-09-01" },
      { id: "33-4", type: "support", description: "Opened support ticket: GDPR compliance question", date: "2023-11-15" },
      { id: "33-5", type: "payment", description: "Payment received — $899", date: "2024-01-18" },
    ],
  },
  "34": {
    customerId: "34",
    mrrHistory: [299, 299, 299, 299, 299, 299],
    events: [
      { id: "34-1", type: "signup", description: "Sofia Andersen signed up for Pro plan", date: "2023-05-05" },
      { id: "34-2", type: "payment", description: "Payment received — $299", date: "2023-06-05" },
      { id: "34-3", type: "payment", description: "Payment received — $299", date: "2023-09-05" },
      { id: "34-4", type: "payment", description: "Payment received — $299", date: "2024-01-05" },
    ],
  },
  "35": {
    customerId: "35",
    mrrHistory: [0, 0, 0, 0, 0, 0],
    events: [
      { id: "35-1", type: "trial_start", description: "Kwame Asante started a 14-day free trial", date: "2024-01-22" },
      { id: "35-2", type: "support", description: "Opened support ticket: Onboarding question", date: "2024-01-26" },
    ],
  },
  "36": {
    customerId: "36",
    mrrHistory: [299, 299, 299, 299, 299, 299],
    events: [
      { id: "36-1", type: "signup", description: "Victoria Ivanova signed up for Pro plan", date: "2023-09-12" },
      { id: "36-2", type: "payment", description: "Payment received — $299", date: "2023-10-12" },
      { id: "36-3", type: "payment", description: "Payment received — $299", date: "2023-12-12" },
      { id: "36-4", type: "payment", description: "Payment received — $299", date: "2024-01-12" },
    ],
  },
  "37": {
    customerId: "37",
    mrrHistory: [49, 49, 49, 49, 49, 49],
    events: [
      { id: "37-1", type: "signup", description: "Samuel Osei signed up for Starter plan", date: "2023-12-28" },
      { id: "37-2", type: "payment", description: "Payment received — $49", date: "2024-01-28" },
      { id: "37-3", type: "payment", description: "Payment received — $49", date: "2024-02-28" },
    ],
  },
  "38": {
    customerId: "38",
    mrrHistory: [299, 299, 299, 299, 299, 299],
    events: [
      { id: "38-1", type: "signup", description: "Elena Petrov signed up for Pro plan", date: "2023-07-14" },
      { id: "38-2", type: "payment", description: "Payment received — $299", date: "2023-08-14" },
      { id: "38-3", type: "payment", description: "Payment received — $299", date: "2023-10-14" },
      { id: "38-4", type: "support", description: "Opened support ticket: Reporting query", date: "2023-12-01" },
      { id: "38-5", type: "payment", description: "Payment received — $299", date: "2024-01-14" },
    ],
  },
  "39": {
    customerId: "39",
    mrrHistory: [899, 899, 899, 899, 899, 899],
    events: [
      { id: "39-1", type: "signup", description: "Liam Murphy signed up for Enterprise plan", date: "2022-11-20" },
      { id: "39-2", type: "payment", description: "Payment received — $899", date: "2022-12-20" },
      { id: "39-3", type: "upgrade", description: "Added custom domain and white-label branding", date: "2023-05-01" },
      { id: "39-4", type: "payment", description: "Payment received — $899", date: "2023-11-20" },
      { id: "39-5", type: "payment", description: "Payment received — $899", date: "2024-01-20" },
    ],
  },
  "40": {
    customerId: "40",
    mrrHistory: [299, 299, 299, 0, 0, 0],
    events: [
      { id: "40-1", type: "signup", description: "Akira Yamamoto signed up for Pro plan", date: "2023-04-10" },
      { id: "40-2", type: "payment", description: "Payment received — $299", date: "2023-05-10" },
      { id: "40-3", type: "payment", description: "Payment received — $299", date: "2023-06-10" },
      { id: "40-4", type: "support", description: "Opened support ticket: Cancellation request", date: "2023-07-01" },
      { id: "40-5", type: "downgrade", description: "Account cancelled — churned", date: "2023-07-10" },
    ],
  },
  "41": {
    customerId: "41",
    mrrHistory: [49, 49, 49, 49, 49, 49],
    events: [
      { id: "41-1", type: "signup", description: "Grace Nkomo signed up for Starter plan", date: "2024-01-01" },
      { id: "41-2", type: "payment", description: "Payment received — $49", date: "2024-02-01" },
      { id: "41-3", type: "payment", description: "Payment received — $49", date: "2024-03-01" },
    ],
  },
  "42": {
    customerId: "42",
    mrrHistory: [899, 899, 899, 899, 899, 899],
    events: [
      { id: "42-1", type: "signup", description: "Tobias Weber signed up for Enterprise plan", date: "2023-01-15" },
      { id: "42-2", type: "payment", description: "Payment received — $899", date: "2023-02-15" },
      { id: "42-3", type: "upgrade", description: "Added advanced analytics module", date: "2023-06-01" },
      { id: "42-4", type: "support", description: "Opened support ticket: Data residency options", date: "2023-09-20" },
      { id: "42-5", type: "payment", description: "Payment received — $899", date: "2024-01-15" },
    ],
  },
  "43": {
    customerId: "43",
    mrrHistory: [299, 299, 299, 299, 299, 299],
    events: [
      { id: "43-1", type: "signup", description: "Ananya Krishnan signed up for Pro plan", date: "2023-08-05" },
      { id: "43-2", type: "payment", description: "Payment received — $299", date: "2023-09-05" },
      { id: "43-3", type: "payment", description: "Payment received — $299", date: "2023-11-05" },
      { id: "43-4", type: "payment", description: "Payment received — $299", date: "2024-01-05" },
    ],
  },
  "44": {
    customerId: "44",
    mrrHistory: [0, 0, 0, 0, 0, 0],
    events: [
      { id: "44-1", type: "trial_start", description: "Joshua Mensah started a 14-day free trial", date: "2024-01-25" },
      { id: "44-2", type: "support", description: "Opened support ticket: Trial extension request", date: "2024-01-29" },
    ],
  },
  "45": {
    customerId: "45",
    mrrHistory: [299, 299, 299, 299, 299, 299],
    events: [
      { id: "45-1", type: "signup", description: "Nadia Kowalski signed up for Pro plan", date: "2023-11-22" },
      { id: "45-2", type: "payment", description: "Payment received — $299", date: "2023-12-22" },
      { id: "45-3", type: "payment", description: "Payment received — $299", date: "2024-01-22" },
    ],
  },
  "46": {
    customerId: "46",
    mrrHistory: [49, 49, 49, 49, 49, 49],
    events: [
      { id: "46-1", type: "signup", description: "Rafael Gomes signed up for Starter plan", date: "2023-10-30" },
      { id: "46-2", type: "payment", description: "Payment received — $49", date: "2023-11-30" },
      { id: "46-3", type: "payment", description: "Payment received — $49", date: "2024-01-30" },
    ],
  },
  "47": {
    customerId: "47",
    mrrHistory: [899, 899, 899, 899, 899, 899],
    events: [
      { id: "47-1", type: "signup", description: "Ingrid Lindqvist signed up for Enterprise plan", date: "2022-07-22" },
      { id: "47-2", type: "payment", description: "Payment received — $899", date: "2022-08-22" },
      { id: "47-3", type: "upgrade", description: "Upgraded to global CDN and multi-region deployment", date: "2022-12-01" },
      { id: "47-4", type: "support", description: "Opened support ticket: Compliance documentation request", date: "2023-06-10" },
      { id: "47-5", type: "payment", description: "Payment received — $899", date: "2024-01-22" },
    ],
  },
  "48": {
    customerId: "48",
    mrrHistory: [299, 299, 299, 299, 299, 299],
    events: [
      { id: "48-1", type: "signup", description: "Rajan Sharma signed up for Pro plan", date: "2023-06-10" },
      { id: "48-2", type: "payment", description: "Payment received — $299", date: "2023-07-10" },
      { id: "48-3", type: "payment", description: "Payment received — $299", date: "2023-10-10" },
      { id: "48-4", type: "payment", description: "Payment received — $299", date: "2024-01-10" },
    ],
  },
  "49": {
    customerId: "49",
    mrrHistory: [49, 49, 49, 49, 49, 49],
    events: [
      { id: "49-1", type: "signup", description: "Chloe Beaumont signed up for Starter plan", date: "2023-12-05" },
      { id: "49-2", type: "payment", description: "Payment received — $49", date: "2024-01-05" },
      { id: "49-3", type: "payment", description: "Payment received — $49", date: "2024-02-05" },
    ],
  },
  "50": {
    customerId: "50",
    mrrHistory: [899, 899, 899, 899, 899, 899],
    events: [
      { id: "50-1", type: "signup", description: "Ahmed Mansouri signed up for Enterprise plan", date: "2022-06-30" },
      { id: "50-2", type: "payment", description: "Payment received — $899", date: "2022-07-30" },
      { id: "50-3", type: "upgrade", description: "Signed 3-year enterprise contract", date: "2023-06-01" },
      { id: "50-4", type: "support", description: "Opened support ticket: Custom integration request", date: "2023-10-15" },
      { id: "50-5", type: "payment", description: "Payment received — $899", date: "2024-01-30" },
    ],
  },
};
