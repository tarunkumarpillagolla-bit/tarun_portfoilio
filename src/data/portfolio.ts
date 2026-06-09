/** Permanent GitHub Pages URL — do not change repo name or username */
export const site = {
  url: "https://tarunkumarpillagolla-bit.github.io/tarun_portfoilio/",
  githubUsername: "tarunkumarpillagolla-bit",
  repositoryName: "tarun_portfoilio",
} as const;

export const colors = {
  primary: "#00FFB3",
  secondary: "#00D9FF",
  background: "#050816",
  surface: "#0F172A",
  accent: "#00FF66",
  text: "#FFFFFF",
} as const;

export const hero = {
  name: "Tarun Kumar Pillagolla",
  title: "Cybersecurity Analyst | L1 SOC Analyst | Digital Forensics",
  tagline:
    "Monitoring threats, investigating incidents, and securing digital environments.",
  buttons: ["Download Resume", "Contact Me", "View LinkedIn"] as const,
};

export const about = {
  title: "About Me",
  content:
    "Detail-oriented cybersecurity professional with a BSc in Forensic Science and hands-on experience as a Cybersecurity Analyst Intern. Skilled in SIEM monitoring, digital forensics, network traffic analysis, incident response, and threat detection. Currently pursuing MCA in Cyber Security and seeking opportunities as an L1 SOC Analyst.",
};

export const skillCategories = [
  {
    name: "SOC Operations",
    skills: [
      "Security Monitoring",
      "Incident Response",
      "Alert Triage",
      "Ticket Management",
      "Threat Detection",
    ],
  },
  {
    name: "SIEM & Monitoring",
    skills: [
      "Splunk",
      "IBM QRadar",
      "VPN Monitoring",
      "EDR Monitoring",
      "Antivirus Monitoring",
    ],
  },
  {
    name: "Digital Forensics",
    skills: [
      "Autopsy",
      "FTK",
      "EnCase",
      "X-Ways Forensics",
      "Video Cleaner",
    ],
  },
  {
    name: "Network Security",
    skills: [
      "Wireshark",
      "TCP/IP Analysis",
      "Packet Analysis",
      "Network Monitoring",
      "Phishing Investigation",
    ],
  },
  {
    name: "Threat Intelligence",
    skills: [
      "MITRE ATT&CK",
      "Cyber Kill Chain",
      "IOC Analysis",
      "Incident Response Lifecycle",
    ],
  },
  {
    name: "Systems",
    skills: [
      "Linux",
      "Kali Linux",
      "Ubuntu",
      "Windows Server",
      "Active Directory",
      "DNS",
      "DHCP",
    ],
  },
];

export const experience = [
  {
    company: "Aadhiksha Institutes",
    role: "Cybersecurity Analyst Intern",
    duration: "Dec 2023 - Apr 2024",
    achievements: [
      "Monitored and analyzed security alerts using Splunk and QRadar.",
      "Conducted digital forensic investigations using Autopsy and FTK.",
      "Performed phishing investigations and email header analysis.",
      "Monitored VPN access logs, EDR alerts, and antivirus reports.",
      "Supported Linux and Windows server installations and configurations.",
    ],
  },
];

export const education = [
  {
    degree: "MCA in Cyber Security",
    institution: "Manipal University Jaipur",
    duration: "2025 - Present",
    score: undefined,
  },
  {
    degree: "BSc in Forensic Science, Genetics & Chemistry",
    institution: "Garden City University",
    duration: "2021 - 2024",
    score: "75%",
  },
  {
    degree: "Intermediate (Class XII)",
    institution: "Narayana Junior College",
    duration: "2018 - 2020",
    score: "89%",
  },
];

export const certifications = [
  "Cybersecurity Analyst Internship - Practical SOC",
  "Introduction to Cybersecurity Essentials - Coursera",
  "TryHackMe - Blue Team",
];

export const languages = ["English", "Telugu", "Hindi", "Kannada"];

export const interests = [
  "Volunteer Activities",
  "National Service Scheme (NSS)",
  "Cybersecurity Research",
  "Digital Investigations",
];

/** Place your resume PDF in /public — update `file` if you use a different filename */
export const resume = {
  file: "/resume.pdf",
  downloadName: "Tarunkumar_resume.pdf",
};

export const contact = {
  title: "Contact",
  name: "Tarun Kumar Pillagolla",
  email: "tarunkumarpillagolla@gmail.com",
  phone: "+91-9392633137",
  whatsapp: "919392633137",
  location: "Jangareddygudem, Andhra Pradesh, India",
  linkedin: "https://www.linkedin.com/in/tarunkumar-pillagolla-4311412b3/",
};

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Certifications", href: "#certifications" },
  { label: "Contact", href: "#contact" },
];

export const seo = {
  title: "Tarun Kumar Pillagolla | Cybersecurity Analyst",
  description:
    "Cybersecurity Analyst specializing in SOC Operations, SIEM Monitoring, Digital Forensics, Threat Detection, and Incident Response.",
};
