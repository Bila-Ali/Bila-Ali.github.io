// portfolio-data.js
const DATA = {
  profile: {
    name: "Bilawal Ali",
    badge: "Open to SOC Analyst & Blue Team Roles",
    title: "SOC Analyst • Threat Hunter • Security Researcher",
    bio: "Passionate SOC Analyst with hands-on experience in SIEM monitoring, incident response, threat hunting, and vulnerability research. Skilled in Wazuh, Splunk, ELK Stack, and MITRE ATT&CK framework.",
    photo: "assets/profile/bilawal.jpg",
    resume: "resume/Bilawal_Ali_Resume.pdf",
    email: "khooharobilawalali@gmail.com",
    phone: "+92 344 3559788",
    linkedin: "https://linkedin.com/in/bilawal-ali-0b0211245",
    github: "https://github.com/Bila-Ali",
    location: "Hyderabad, Sindh, Pakistan",
    stats: [
      { num: "1K+", label: "Events Monitored Daily" },
      { num: "150+", label: "PortSwigger Labs" },
      { num: "15+", label: "Vulnerabilities Found" }
    ]
  },

  skills: {
    "SIEM & Log Analysis": ["Wazuh", "Splunk", "ELK Stack", "Kibana", "Logstash", "Alert Triage"],
    "Threat Detection & IR": ["Threat Hunting", "Incident Response", "MITRE ATT&CK", "IOC Analysis", "YARA"],
    "Offensive Security": ["Burp Suite", "Nmap", "Metasploit", "SQLmap", "VAPT"],
    "DFIR & Malware Analysis": ["Volatility", "Autopsy", "REMnux", "FLARE-VM", "Static & Dynamic Analysis"],
    "Programming & Scripting": ["Python", "Bash", "Scapy", "Pandas"],
    "Networking & Frameworks": ["Wireshark", "Suricata", "pfSense", "OWASP Top 10", "NIST 800-61"]
  },

  experience: {
    "cyberster_soc": {
      role: "SOC Analyst Intern (L1)",
      company: "Cyberster",
      location: "Remote",
      date: "2025 – Present",
      badge: "BLUE TEAM",
      badgeColor: "green",
      points: [
        "Monitored 1,000+ daily security events using Wazuh SIEM",
        "Developed custom detection rules and improved alert triage process",
        "Conducted incident response and forensic investigation",
        "Implemented File Integrity Monitoring (FIM) and Active Response"
      ]
    },
    "itsolera_redteam": {
      role: "Red Team Intern",
      company: "ITSOLERA Pvt Ltd",
      location: "Remote",
      date: "Jun 2024 – Aug 2024",
      badge: "RED TEAM",
      badgeColor: "red",
      points: [
        "Performed 20+ Web Application VAPT assessments",
        "Discovered critical vulnerabilities (SQLi, XSS, IDOR)",
        "Delivered professional vulnerability reports"
      ]
    }
  },

  certifications: {
    "CEH": {
      name: "Certified Ethical Hacker (CEH)",
      issuer: "EC-Council • PFTP",
      date: "2025",
      medal: true,
      image: "assets/certifications/ceh.jpg",
      verify: ""
    },
    "Google_Cyber": {
      name: "Google Cybersecurity Professional Certificate",
      issuer: "Google",
      date: "2025",
      medal: false,
      image: "assets/certifications/google.jpg",
      verify: ""
    },
    "Splunk": {
      name: "Introduction to Splunk",
      issuer: "Splunk",
      date: "2026",
      medal: false,
      image: "assets/certifications/splunk.jpg",
      verify: ""
    }
  },

  projects: {
    "mailforensics": {
      title: "MailForensics — DFIR Email Analyzer",
      image: "assets/projects/mailforensics.png",
      desc: "Open-source Streamlit tool for SOC teams to analyze .eml files, extract IOCs, check SPF/DKIM/DMARC, and detect phishing.",
      tags: ["Python", "Streamlit", "DFIR", "Phishing"],
      link: "https://github.com/Bila-Ali"
    },
    "pdf_malware": {
      title: "AI-Powered PDF Malware Detection",
      image: "assets/projects/pdf-malware.png",
      desc: "Machine Learning model with Explainable AI (SHAP) to detect malicious PDFs in enterprise environments.",
      tags: ["Python", "Machine Learning", "SHAP", "Malware"],
      link: ""
    }
  },

  vulnerabilities: {
    "union_sqli": {
      title: "Union-Based SQL Injection",
      image: "assets/vulnerabilities/sqli-union.jpg",
      desc: "Discovered Union-based SQLi leading to full database enumeration and sensitive data exposure.",
      tags: ["SQL Injection", "MySQL", "Burp Suite"],
      severity: "High"
    }
  },

  achievements: {
    "quest_ctf": {
      title: "QUEST CTF 2026",
      ribbon: "1st Place",
      ribbonColor: "amber",
      image: "assets/achievements/quest-ctf.jpg",
      desc: "Secured 1st position in university-level cybersecurity CTF competition."
    },
    "nadra_bugbounty": {
      title: "NADRA Bug Bounty 2026",
      ribbon: "Consolation Prize",
      ribbonColor: "green",
      image: "assets/achievements/nadra.jpg",
      desc: "Team Lead — Identified live vulnerabilities in national database systems."
    }
  },

  education: {
    degree: "Bachelor of Science in Cyber Security",
    university: "Mehran University of Engineering & Technology",
    cgpa: "3.31 / 4.0",
    year: "2025",
    location: "Jamshoro, Pakistan",
    banner: "assets/education/muet-campus.jpg",
    desc: "Active member of MUET Cyber Security Society. Led team in national bug bounty programs."
  },

  currentlyLearning: [
    "Advanced Detection Engineering",
    "Malware Reverse Engineering",
    "Splunk SPL & Dashboards",
    "Cloud Security (AWS)",
    "Sigma Rules"
  ],

  volunteer: {
    "jobfair": {
      title: "MUET Job Fair 2025",
      org: "MUET ORIC",
      image: "assets/events/jobfair.jpg",
      desc: "Coordinated with 20+ companies for student placements and internships."
    }
  }
};
