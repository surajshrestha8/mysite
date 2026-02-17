export type Plan = "Starter" | "Pro" | "Enterprise";
export type Status = "Active" | "Churned" | "Trial";

export interface Customer {
  id: string;
  name: string;
  email: string;
  company: string;
  plan: Plan;
  status: Status;
  mrr: number;
  joined: string;
  avatarInitials: string;
  avatarColor: string;
}

export const customers: Customer[] = [
  { id: "1", name: "Sarah Johnson", email: "sarah@acmecorp.io", company: "Acme Corp", plan: "Enterprise", status: "Active", mrr: 899, joined: "2023-03-15", avatarInitials: "SJ", avatarColor: "#3b82f6" },
  { id: "2", name: "Marcus Chen", email: "m.chen@techflow.co", company: "TechFlow", plan: "Pro", status: "Active", mrr: 299, joined: "2023-07-22", avatarInitials: "MC", avatarColor: "#8b5cf6" },
  { id: "3", name: "Emily Rodriguez", email: "emily@datasync.com", company: "DataSync", plan: "Starter", status: "Active", mrr: 49, joined: "2024-01-08", avatarInitials: "ER", avatarColor: "#10b981" },
  { id: "4", name: "James Wilson", email: "jwilson@cloudbase.io", company: "CloudBase", plan: "Enterprise", status: "Active", mrr: 899, joined: "2022-11-30", avatarInitials: "JW", avatarColor: "#f59e0b" },
  { id: "5", name: "Priya Patel", email: "priya@retailhub.com", company: "RetailHub", plan: "Pro", status: "Churned", mrr: 0, joined: "2023-05-14", avatarInitials: "PP", avatarColor: "#ef4444" },
  { id: "6", name: "David Kim", email: "dkim@nexus.ai", company: "Nexus AI", plan: "Enterprise", status: "Active", mrr: 899, joined: "2023-09-01", avatarInitials: "DK", avatarColor: "#06b6d4" },
  { id: "7", name: "Laura Martinez", email: "laura@pixelstudio.io", company: "Pixel Studio", plan: "Starter", status: "Trial", mrr: 0, joined: "2024-01-20", avatarInitials: "LM", avatarColor: "#ec4899" },
  { id: "8", name: "Tom Anderson", email: "tom@growthlab.com", company: "Growth Lab", plan: "Pro", status: "Active", mrr: 299, joined: "2023-06-18", avatarInitials: "TA", avatarColor: "#14b8a6" },
  { id: "9", name: "Aisha Okafor", email: "aisha@finpulse.co", company: "FinPulse", plan: "Enterprise", status: "Active", mrr: 899, joined: "2022-08-10", avatarInitials: "AO", avatarColor: "#f97316" },
  { id: "10", name: "Ryan O'Brien", email: "ryan@shipfast.io", company: "ShipFast", plan: "Pro", status: "Active", mrr: 299, joined: "2023-12-01", avatarInitials: "RO", avatarColor: "#6366f1" },
  { id: "11", name: "Nina Schulz", email: "nina@mediahub.de", company: "MediaHub", plan: "Starter", status: "Active", mrr: 49, joined: "2024-01-05", avatarInitials: "NS", avatarColor: "#84cc16" },
  { id: "12", name: "Carlos Ferreira", email: "carlos@softlabs.br", company: "SoftLabs", plan: "Pro", status: "Active", mrr: 299, joined: "2023-10-15", avatarInitials: "CF", avatarColor: "#a855f7" },
  { id: "13", name: "Isabella Wong", email: "isabella@designco.hk", company: "Design Co", plan: "Starter", status: "Trial", mrr: 0, joined: "2024-01-18", avatarInitials: "IW", avatarColor: "#f43f5e" },
  { id: "14", name: "Mohammed Al-Rashid", email: "m.rashid@techbridge.ae", company: "TechBridge", plan: "Enterprise", status: "Active", mrr: 899, joined: "2023-04-22", avatarInitials: "MR", avatarColor: "#0ea5e9" },
  { id: "15", name: "Sophie Dubois", email: "sophie@agenceplus.fr", company: "Agence Plus", plan: "Pro", status: "Churned", mrr: 0, joined: "2023-02-14", avatarInitials: "SD", avatarColor: "#d97706" },
  { id: "16", name: "Alex Turner", email: "alex@codeforge.uk", company: "CodeForge", plan: "Pro", status: "Active", mrr: 299, joined: "2023-08-30", avatarInitials: "AT", avatarColor: "#059669" },
  { id: "17", name: "Yuki Tanaka", email: "yuki@appworks.jp", company: "AppWorks", plan: "Starter", status: "Active", mrr: 49, joined: "2023-11-11", avatarInitials: "YT", avatarColor: "#7c3aed" },
  { id: "18", name: "Fatima Hassan", email: "fatima@infotec.eg", company: "InfoTec", plan: "Starter", status: "Active", mrr: 49, joined: "2024-01-02", avatarInitials: "FH", avatarColor: "#dc2626" },
  { id: "19", name: "Lucas Moreau", email: "lucas@digitalpulse.fr", company: "Digital Pulse", plan: "Enterprise", status: "Active", mrr: 899, joined: "2022-12-15", avatarInitials: "LM", avatarColor: "#2563eb" },
  { id: "20", name: "Hannah Schmidt", email: "hannah@venture.de", company: "Venture GmbH", plan: "Pro", status: "Active", mrr: 299, joined: "2023-09-20", avatarInitials: "HS", avatarColor: "#16a34a" },
  { id: "21", name: "Oliver James", email: "oliver@launchpad.io", company: "LaunchPad", plan: "Starter", status: "Trial", mrr: 0, joined: "2024-01-15", avatarInitials: "OJ", avatarColor: "#9333ea" },
  { id: "22", name: "Zara Ahmed", email: "zara@cloudnine.pk", company: "CloudNine", plan: "Pro", status: "Active", mrr: 299, joined: "2023-07-07", avatarInitials: "ZA", avatarColor: "#0891b2" },
  { id: "23", name: "Benjamin Lee", email: "ben@stackup.sg", company: "StackUp", plan: "Enterprise", status: "Active", mrr: 899, joined: "2023-03-30", avatarInitials: "BL", avatarColor: "#b45309" },
  { id: "24", name: "Amara Diallo", email: "amara@afrotech.sn", company: "AfroTech", plan: "Starter", status: "Active", mrr: 49, joined: "2023-12-12", avatarInitials: "AD", avatarColor: "#be123c" },
  { id: "25", name: "Nathan Brooks", email: "nathan@buildfast.ca", company: "BuildFast", plan: "Pro", status: "Churned", mrr: 0, joined: "2023-01-25", avatarInitials: "NB", avatarColor: "#4f46e5" },
  { id: "26", name: "Mei Lin", email: "mei@smartsys.cn", company: "SmartSys", plan: "Enterprise", status: "Active", mrr: 899, joined: "2022-10-05", avatarInitials: "ML", avatarColor: "#0d9488" },
  { id: "27", name: "Ethan Clarke", email: "ethan@devhub.au", company: "DevHub", plan: "Pro", status: "Active", mrr: 299, joined: "2023-11-01", avatarInitials: "EC", avatarColor: "#7c2d12" },
  { id: "28", name: "Isabela Santos", email: "isabela@codex.br", company: "Codex", plan: "Starter", status: "Active", mrr: 49, joined: "2024-01-10", avatarInitials: "IS", avatarColor: "#1d4ed8" },
  { id: "29", name: "Michael Park", email: "mike@koreadata.kr", company: "KoreaData", plan: "Pro", status: "Active", mrr: 299, joined: "2023-06-25", avatarInitials: "MP", avatarColor: "#15803d" },
  { id: "30", name: "Charlotte Evans", email: "charlotte@agileflow.uk", company: "AgileFlow", plan: "Enterprise", status: "Active", mrr: 899, joined: "2023-02-28", avatarInitials: "CE", avatarColor: "#7e22ce" },
  { id: "31", name: "Dmitri Volkov", email: "dmitri@techspire.ru", company: "TechSpire", plan: "Starter", status: "Churned", mrr: 0, joined: "2023-08-15", avatarInitials: "DV", avatarColor: "#b91c1c" },
  { id: "32", name: "Aaliya Khan", email: "aaliya@sparktech.in", company: "SparkTech", plan: "Pro", status: "Active", mrr: 299, joined: "2023-10-08", avatarInitials: "AK", avatarColor: "#0284c7" },
  { id: "33", name: "François Leroy", email: "francois@innov8.fr", company: "Innov8", plan: "Enterprise", status: "Active", mrr: 899, joined: "2022-09-18", avatarInitials: "FL", avatarColor: "#d97706" },
  { id: "34", name: "Sofia Andersen", email: "sofia@nordtech.dk", company: "NordTech", plan: "Pro", status: "Active", mrr: 299, joined: "2023-05-05", avatarInitials: "SA", avatarColor: "#059669" },
  { id: "35", name: "Kwame Asante", email: "kwame@afrodigital.gh", company: "AfroDigital", plan: "Starter", status: "Trial", mrr: 0, joined: "2024-01-22", avatarInitials: "KA", avatarColor: "#dc2626" },
  { id: "36", name: "Victoria Ivanova", email: "victoria@digibiz.ru", company: "DigiBiz", plan: "Pro", status: "Active", mrr: 299, joined: "2023-09-12", avatarInitials: "VI", avatarColor: "#7c3aed" },
  { id: "37", name: "Samuel Osei", email: "samuel@webcraft.gh", company: "WebCraft", plan: "Starter", status: "Active", mrr: 49, joined: "2023-12-28", avatarInitials: "SO", avatarColor: "#0f766e" },
  { id: "38", name: "Elena Petrov", email: "elena@pixelcraft.ru", company: "PixelCraft", plan: "Pro", status: "Active", mrr: 299, joined: "2023-07-14", avatarInitials: "EP", avatarColor: "#a21caf" },
  { id: "39", name: "Liam Murphy", email: "liam@emeraldtech.ie", company: "EmeraldTech", plan: "Enterprise", status: "Active", mrr: 899, joined: "2022-11-20", avatarInitials: "LM", avatarColor: "#16a34a" },
  { id: "40", name: "Akira Yamamoto", email: "akira@futurelab.jp", company: "FutureLab", plan: "Pro", status: "Churned", mrr: 0, joined: "2023-04-10", avatarInitials: "AY", avatarColor: "#ca8a04" },
  { id: "41", name: "Grace Nkomo", email: "grace@techafrica.za", company: "TechAfrica", plan: "Starter", status: "Active", mrr: 49, joined: "2024-01-01", avatarInitials: "GN", avatarColor: "#2563eb" },
  { id: "42", name: "Tobias Weber", email: "tobias@digitalhaus.de", company: "DigitalHaus", plan: "Enterprise", status: "Active", mrr: 899, joined: "2023-01-15", avatarInitials: "TW", avatarColor: "#c026d3" },
  { id: "43", name: "Ananya Krishnan", email: "ananya@techguru.in", company: "TechGuru", plan: "Pro", status: "Active", mrr: 299, joined: "2023-08-05", avatarInitials: "AK", avatarColor: "#0891b2" },
  { id: "44", name: "Joshua Mensah", email: "joshua@boolabs.gh", company: "BooLabs", plan: "Starter", status: "Trial", mrr: 0, joined: "2024-01-25", avatarInitials: "JM", avatarColor: "#ea580c" },
  { id: "45", name: "Nadia Kowalski", email: "nadia@softpol.pl", company: "SoftPol", plan: "Pro", status: "Active", mrr: 299, joined: "2023-11-22", avatarInitials: "NK", avatarColor: "#9333ea" },
  { id: "46", name: "Rafael Gomes", email: "rafael@devbrasil.br", company: "DevBrasil", plan: "Starter", status: "Active", mrr: 49, joined: "2023-10-30", avatarInitials: "RG", avatarColor: "#0d9488" },
  { id: "47", name: "Ingrid Lindqvist", email: "ingrid@nordicsoft.se", company: "NordicSoft", plan: "Enterprise", status: "Active", mrr: 899, joined: "2022-07-22", avatarInitials: "IL", avatarColor: "#1d4ed8" },
  { id: "48", name: "Rajan Sharma", email: "rajan@cloudworks.in", company: "CloudWorks", plan: "Pro", status: "Active", mrr: 299, joined: "2023-06-10", avatarInitials: "RS", avatarColor: "#15803d" },
  { id: "49", name: "Chloe Beaumont", email: "chloe@paristech.fr", company: "ParisTech", plan: "Starter", status: "Active", mrr: 49, joined: "2023-12-05", avatarInitials: "CB", avatarColor: "#b45309" },
  { id: "50", name: "Ahmed Mansouri", email: "ahmed@arabtech.sa", company: "ArabTech", plan: "Enterprise", status: "Active", mrr: 899, joined: "2022-06-30", avatarInitials: "AM", avatarColor: "#4f46e5" },
];
