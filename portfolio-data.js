// ============================================================
//   GLOBAL DATA OBJECT — ADD / EDIT CONTENT HERE ONLY
//   Add new certification, project, achievement → copy object
// ============================================================
const DATA = {
  profile: {
    name: "Bilawal Ali",
    badge: "Open for SOC Analyst & Blue Team roles",
    titleLine: "SOC Analyst | Threat Hunter | CEH",
    roleMono: "SOC_ANALYST_L1  |  CEH  |  3.31 CGPA",
    bio: "SOC Analyst with hands-on experience in <strong>SIEM monitoring, threat detection, incident response</strong>, and blue team operations. Skilled in Wazuh, Splunk, ELK Stack, and MITRE ATT&CK.",
    photo: "assets/profile/bilawal.jpg",
    resume: "resume/Bilawal_Ali_Resume.pdf",
    email: "khooharobilawalali@gmail.com",
    phone: "+92 344 3559788",
    linkedin: "https://linkedin.com/in/bilawal-ali-0b0211245",
    github: "https://github.com/Bila-Ali",
    location: "Hyderabad, Sindh, Pakistan",
    stats: [
      { num: "1K+", label: "Daily Events" },
      { num: "150+", label: "PortSwigger Labs" },
      { num: "10+", label: "Vulnerabilities" }
    ]
  },

  skills: [
    { icon: "🛡️", title: "SIEM & Log Analysis", items: ["Wazuh", "Splunk", "ELK Stack", "Kibana", "Logstash", "Alert Triage"] },
    { icon: "🔍", title: "Threat Detection & IR", items: ["Threat Hunting", "Incident Response", "MITRE ATT&CK", "IOC Analysis", "YARA"] },
    { icon: "⚔️", title: "Offensive Security", items: ["Burp Suite", "Nmap", "Metasploit", "SQLmap", "Hydra"] },
    { icon: "🔬", title: "DFIR & Malware", items: ["Volatility", "Autopsy", "REMnux", "FLARE-VM", "Static Analysis"] },
    { icon: "💻", title: "Programming", items: ["Python", "Bash", "Scapy", "Pandas", "Flask"] },
    { icon: "🌐", title: "Networking & Tools", items: ["Suricata", "pfSense", "Wireshark", "TCP/IP", "NIST 800-61"] }
  ],

  experience: [
    {
      role: "SOC Analyst Intern — L1",
      company: "Cyberster",
      location: "Remote",
      date: "2025 – Present",
      badge: "BLUE TEAM",
      badgeColor: "green",
      points: [
        "Monitored 1,000+ daily security events with Wazuh SIEM, reducing MTD via alert prioritization.",
        "Investigated brute-force, anomalies, and lateral movement across Linux/Windows endpoints.",
        "Developed 5+ custom Wazuh detection rules, improved coverage for attack vectors.",
        "Configured File Integrity Monitoring (FIM) to detect unauthorized changes."
      ]
    },
    {
      role: "Red Team Intern",
      company: "ITSOLERA Pvt Ltd",
      location: "Remote",
      date: "June 2024 – Aug 2024",
      badge: "RED TEAM",
      badgeColor: "red",
      points: [
        "Executed 20+ VAPT assessments; identified SQLi, XSS, CSRF, broken authentication.",
        "Used Burp Suite & Metasploit for exploitation and privilege escalation."
      ]
    },
    {
      role: "Bug Bounty Researcher",
      company: "Independent",
      location: "Self-employed",
      date: "2024 – Present",
      badge: "BOUNTY",
      badgeColor: "amber",
      points: [
        "Discovered SQLi, XSS, IDOR across public programs; responsible disclosure.",
        "Consolation prize - NADRA Bug Bounty 2026 (Team Lead)."
      ]
    }
  ],

  vulnerabilities: [
    { icon: "💉", title: "Union-Based SQL Injection", image: "assets/vulnerabilities/sqli-union.jpg", desc: "Union-based injection exposing database credentials.", tags: ["SQLi", "Burp", "OWASP"] },
    { icon: "⏱️", title: "Time-Based Blind SQLi", image: "assets/vulnerabilities/sqli-time.jpg", desc: "Time-delay technique confirmed data extraction.", tags: ["Blind SQLi", "SQLmap"] },
    { icon: "🔀", title: "IDOR - Sensitive Data Exposure", image: "assets/vulnerabilities/data-exposure.jpg", desc: "Parameter tampering leaked user records (CNIC, emails).", tags: ["IDOR", "Access Control"] },
    { icon: "⚡", title: "Reflected XSS", image: "assets/vulnerabilities/xss.jpg", desc: "Cross-site scripting in input fields.", tags: ["XSS", "Web Security"] }
  ],

  projects: [
    { icon: "📧", title: "MailForensics DFIR", image: "assets/projects/mailforensics.png", desc: "Streamlit app to parse .eml, extract IOCs, detect phishing.", tags: ["Python", "Streamlit", "DFIR"], link: "https://github.com/Bila-Ali" },
    { icon: "🤖", title: "AI PDF Malware Detection", image: "assets/projects/pdf-malware.png", desc: "ML + SHAP explainability for PDF malware.", tags: ["Python", "ML", "SHAP"], link: "" },
    { icon: "🖥️", title: "SOC Simulation Lab", image: "assets/projects/soc-lab.png", desc: "Splunk, Wazuh, pfSense, Suricata; IR playbooks.", tags: ["Splunk", "Wazuh", "Suricata"], link: "" }
  ],

  certifications: [
    { name: "Certified Ethical Hacker (CEH)", issuer: "EC-Council", medal: true, image: "assets/certifications/ceh.jpg", verify: "" },
    { name: "Professional Offensive Operations", issuer: "Hack The Box", medal: false, image: "assets/certifications/htb-poo.jpg", verify: "" },
    { name: "Google Cybersecurity Cert", issuer: "Google", medal: false, image: "assets/certifications/google.jpg", verify: "" },
    { name: "Intro to Splunk", issuer: "Splunk", medal: false, image: "assets/certifications/splunk.jpg", verify: "" }
  ],

  achievements: [
    { icon: "🥇", title: "QUEST CTF 2026", ribbon: "1st Place", ribbonColor: "amber", image: "assets/achievements/quest-ctf.jpg", desc: "University CTF winner." },
    { icon: "🏆", title: "NADRA Bug Bounty", ribbon: "Consolation Prize", ribbonColor: "green", image: "assets/achievements/nadra-bugbounty.jpg", desc: "National-level live bug hunting." },
    { icon: "🎤", title: "Guest Speaker MUET", ribbon: "Invited", ribbonColor: "cyan", image: "assets/achievements/speaker-muet.jpg", desc: "Cybersecurity session for BSc batch." }
  ],

  education: {
    degree: "BSc Cyber Security",
    university: "Mehran UET, Jamshoro",
    cgpa: "3.31 / 4.0",
    year: "2025",
    location: "Jamshoro, Pakistan",
    bannerImg: "assets/education/muet-campus.jpg",
    desc: "Focused on network security, digital forensics, ethical hacking. Led CTF teams, final-year AI malware detection project."
  },

  currentlyLearning: ["Advanced Threat Hunting", "Detection Engineering", "Malware RE", "Splunk SPL", "Cloud Security (AWS)", "Sigma Rules"],

  volunteer: [
    { icon: "🤝", title: "MUET Job Fair 2025", org: "MUET ORIC", image: "assets/events/job-fair.jpg", desc: "Coordinated with 20+ companies for internships." },
    { icon: "🎤", title: "Cybersecurity Guest Speaker", org: "MUET Cyber Society", image: "assets/events/speaker.jpg", desc: "Delivered session on SOC careers." }
  ]
};
