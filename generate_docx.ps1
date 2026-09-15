$ErrorActionPreference = "Stop"

$tempDir = Join-Path $PSScriptRoot "docx_temp"
if (Test-Path $tempDir) { Remove-Item -Recurse -Force $tempDir }
New-Item -ItemType Directory -Path "$tempDir\_rels" -Force | Out-Null
New-Item -ItemType Directory -Path "$tempDir\word\_rels" -Force | Out-Null

$contentTypes = @'
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types">
  <Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/>
  <Default Extension="xml" ContentType="application/xml"/>
  <Override PartName="/word/document.xml" ContentType="application/vnd.openxmlformats-officedocument.wordprocessingml.document.main+xml"/>
  <Override PartName="/word/styles.xml" ContentType="application/vnd.openxmlformats-officedocument.wordprocessingml.styles+xml"/>
</Types>
'@
[System.IO.File]::WriteAllText("$tempDir\[Content_Types].xml", $contentTypes)

$rels = @'
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">
  <Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument" Target="word/document.xml"/>
</Relationships>
'@
[System.IO.File]::WriteAllText("$tempDir\_rels\.rels", $rels)

$docRels = @'
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">
  <Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/styles" Target="styles.xml"/>
  <Relationship Id="rId2" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/hyperlink" Target="https://portfolio-ndip.vercel.app" TargetMode="External"/>
  <Relationship Id="rId3" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/hyperlink" Target="https://github.com/ndip23" TargetMode="External"/>
  <Relationship Id="rId4" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/hyperlink" Target="https://www.linkedin.com/in/ndip-samuel-1b0175294" TargetMode="External"/>
</Relationships>
'@
[System.IO.File]::WriteAllText("$tempDir\word\_rels\document.xml.rels", $docRels)

$styles = @'
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<w:styles xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main">
  <w:docDefaults>
    <w:rPrDefault>
      <w:rPr>
        <w:rFonts w:ascii="Calibri" w:hAnsi="Calibri" w:cs="Calibri"/>
        <w:sz w:val="21"/>
        <w:color w:val="222222"/>
      </w:rPr>
    </w:rPrDefault>
  </w:docDefaults>
</w:styles>
'@
[System.IO.File]::WriteAllText("$tempDir\word\styles.xml", $styles)

$doc = @'
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<w:document xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
  <w:body>
    <!-- Name -->
    <w:p>
      <w:pPr><w:jc w:val="center"/><w:spacing w:after="40"/></w:pPr>
      <w:r><w:rPr><w:b/><w:sz w:val="38"/><w:color w:val="0F172A"/></w:rPr><w:t>NDIP SAMUEL AGBOR OJONG</w:t></w:r>
    </w:p>
    <!-- Title -->
    <w:p>
      <w:pPr><w:jc w:val="center"/><w:spacing w:after="60"/></w:pPr>
      <w:r><w:rPr><w:b/><w:sz w:val="22"/><w:color w:val="2563EB"/></w:rPr><w:t>Senior Full-Stack &amp; Mobile Software Engineer (Flutter • React • Node.js)</w:t></w:r>
    </w:p>
    <!-- Contact Info -->
    <w:p>
      <w:pPr><w:jc w:val="center"/><w:spacing w:after="160"/></w:pPr>
      <w:r><w:rPr><w:sz w:val="18"/><w:color w:val="475569"/></w:rPr><w:t>Douala, Cameroon  |  +237 679 267 153  |  nojong23@gmail.com</w:t></w:r>
    </w:p>
    <w:p>
      <w:pPr><w:jc w:val="center"/><w:spacing w:after="200"/></w:pPr>
      <w:hyperlink r:id="rId2"><w:r><w:rPr><w:color w:val="2563EB"/><w:u w:val="single"/><w:sz w:val="18"/></w:rPr><w:t>Portfolio: portfolio-ndip.vercel.app</w:t></w:r></w:hyperlink>
      <w:r><w:rPr><w:sz w:val="18"/><w:color w:val="475569"/></w:rPr><w:t>  |  </w:t></w:r>
      <w:hyperlink r:id="rId3"><w:r><w:rPr><w:color w:val="2563EB"/><w:u w:val="single"/><w:sz w:val="18"/></w:rPr><w:t>GitHub: github.com/ndip23</w:t></w:r></w:hyperlink>
      <w:r><w:rPr><w:sz w:val="18"/><w:color w:val="475569"/></w:rPr><w:t>  |  </w:t></w:r>
      <w:hyperlink r:id="rId4"><w:r><w:rPr><w:color w:val="2563EB"/><w:u w:val="single"/><w:sz w:val="18"/></w:rPr><w:t>LinkedIn</w:t></w:r></w:hyperlink>
    </w:p>

    <!-- SECTION: SUMMARY -->
    <w:p>
      <w:pPr><w:spacing w:before="140" w:after="80"/><w:pBdr><w:bottom w:val="single" w:sz="12" w:space="4" w:color="2563EB"/></w:pBdr></w:pPr>
      <w:r><w:rPr><w:b/><w:sz w:val="24"/><w:color w:val="0F172A"/></w:rPr><w:t>PROFESSIONAL SUMMARY</w:t></w:r>
    </w:p>
    <w:p>
      <w:pPr><w:spacing w:after="160"/><w:jc w:val="both"/></w:pPr>
      <w:r><w:rPr><w:sz w:val="20"/><w:color w:val="334155"/></w:rPr><w:t>Performance-driven Mobile &amp; Full-Stack Software Engineer with deep expertise in Flutter &amp; Dart, cross-platform mobile architectures, and scalable cloud backends. Proven track record of architecting production Flutter applications utilizing Clean Architecture, reactive state management (BLoC/Provider), background GPS tracking, and Paystack fintech payment gateways. Experienced in taking products from zero to production deployment across Android, Web, and Cloud systems with over 2,500+ commercial transactions handled.</w:t></w:r>
    </w:p>

    <!-- SECTION: TECHNICAL SKILLS -->
    <w:p>
      <w:pPr><w:spacing w:before="140" w:after="80"/><w:pBdr><w:bottom w:val="single" w:sz="12" w:space="4" w:color="2563EB"/></w:pBdr></w:pPr>
      <w:r><w:rPr><w:b/><w:sz w:val="24"/><w:color w:val="0F172A"/></w:rPr><w:t>TECHNICAL ARSENAL</w:t></w:r>
    </w:p>
    <w:p>
      <w:pPr><w:spacing w:after="60"/></w:pPr>
      <w:r><w:rPr><w:b/><w:sz w:val="20"/><w:color w:val="0F172A"/></w:rPr><w:t>Mobile Development: </w:t></w:r>
      <w:r><w:rPr><w:sz w:val="20"/><w:color w:val="334155"/></w:rPr><w:t>Flutter (Advanced), Dart, Clean Architecture (Data/Domain/Presentation), BLoC / Provider / Riverpod, React Native, Method Channels, Background Services, Push Notifications (FCM).</w:t></w:r>
    </w:p>
    <w:p>
      <w:pPr><w:spacing w:after="60"/></w:pPr>
      <w:r><w:rPr><w:b/><w:sz w:val="20"/><w:color w:val="0F172A"/></w:rPr><w:t>Maps &amp; Geolocation: </w:t></w:r>
      <w:r><w:rPr><w:sz w:val="20"/><w:color w:val="334155"/></w:rPr><w:t>Google Maps Platform, OpenStreetMap (OSM), Geocoding, Real-time Driver/Provider Tracking, Distance Matrix APIs.</w:t></w:r>
    </w:p>
    <w:p>
      <w:pPr><w:spacing w:after="60"/></w:pPr>
      <w:r><w:rPr><w:b/><w:sz w:val="20"/><w:color w:val="0F172A"/></w:rPr><w:t>Fintech &amp; Payments: </w:t></w:r>
      <w:r><w:rPr><w:sz w:val="20"/><w:color w:val="334155"/></w:rPr><w:t>Paystack Mobile SDK, Payment Webhooks, Escrow Pre-payment Holding Systems, Automated Verification via OTP.</w:t></w:r>
    </w:p>
    <w:p>
      <w:pPr><w:spacing w:after="60"/></w:pPr>
      <w:r><w:rPr><w:b/><w:sz w:val="20"/><w:color w:val="0F172A"/></w:rPr><w:t>Frontend Engineering: </w:t></w:r>
      <w:r><w:rPr><w:sz w:val="20"/><w:color w:val="334155"/></w:rPr><w:t>React.js, Next.js (App Router), TypeScript, JavaScript (ESNext), Tailwind CSS, Framer Motion.</w:t></w:r>
    </w:p>
    <w:p>
      <w:pPr><w:spacing w:after="60"/></w:pPr>
      <w:r><w:rPr><w:b/><w:sz w:val="20"/><w:color w:val="0F172A"/></w:rPr><w:t>Backend &amp; Systems: </w:t></w:r>
      <w:r><w:rPr><w:sz w:val="20"/><w:color w:val="334155"/></w:rPr><w:t>Node.js, Express.js, Python (FastAPI), C++ Systems Programming, RESTful APIs, JWT Auth, WebSockets.</w:t></w:r>
    </w:p>
    <w:p>
      <w:pPr><w:spacing w:after="160"/></w:pPr>
      <w:r><w:rPr><w:b/><w:sz w:val="20"/><w:color w:val="0F172A"/></w:rPr><w:t>Databases &amp; DevOps: </w:t></w:r>
      <w:r><w:rPr><w:sz w:val="20"/><w:color w:val="334155"/></w:rPr><w:t>Firebase (Firestore, Auth, Functions), PostgreSQL, MongoDB, Prisma ORM, Docker, Android Keystore &amp; Release Pipelines.</w:t></w:r>
    </w:p>

    <!-- SECTION: EXPERIENCE -->
    <w:p>
      <w:pPr><w:spacing w:before="140" w:after="80"/><w:pBdr><w:bottom w:val="single" w:sz="12" w:space="4" w:color="2563EB"/></w:pBdr></w:pPr>
      <w:r><w:rPr><w:b/><w:sz w:val="24"/><w:color w:val="0F172A"/></w:rPr><w:t>WORK EXPERIENCE</w:t></w:r>
    </w:p>

    <!-- Role 1 -->
    <w:p>
      <w:pPr><w:spacing w:before="60" w:after="30"/></w:pPr>
      <w:r><w:rPr><w:b/><w:sz w:val="22"/><w:color w:val="0F172A"/></w:rPr><w:t>Full-Stack &amp; Mobile Developer (Freelance)</w:t></w:r>
      <w:r><w:rPr><w:sz w:val="18"/><w:color w:val="64748B"/></w:rPr><w:t>  |  Douala, Cameroon</w:t></w:r>
    </w:p>
    <w:p>
      <w:pPr><w:spacing w:after="50"/></w:pPr>
      <w:r><w:rPr><w:i/><w:sz w:val="18"/><w:color w:val="2563EB"/></w:rPr><w:t>January 2023 — Present</w:t></w:r>
    </w:p>
    <w:p>
      <w:pPr><w:spacing w:after="40"/></w:pPr>
      <w:r><w:rPr><w:sz w:val="20"/><w:color w:val="334155"/></w:rPr><w:t>• Engineered G-WASH NG Mobile App in Flutter implementing Clean Architecture separation (Data, Domain, Presentation) and state management, reducing code redundancy by 40%.</w:t></w:r>
    </w:p>
    <w:p>
      <w:pPr><w:spacing w:after="40"/></w:pPr>
      <w:r><w:rPr><w:sz w:val="20"/><w:color w:val="334155"/></w:rPr><w:t>• Embedded dual map engines (Google Maps SDK &amp; OpenStreetMap) for live provider dispatch, dynamic distance calculations, and real-time route tracing.</w:t></w:r>
    </w:p>
    <w:p>
      <w:pPr><w:spacing w:after="40"/></w:pPr>
      <w:r><w:rPr><w:sz w:val="20"/><w:color w:val="334155"/></w:rPr><w:t>• Implemented Paystack financial escrow system holding customer pre-payments until secure OTP verification upon service completion.</w:t></w:r>
    </w:p>
    <w:p>
      <w:pPr><w:spacing w:after="100"/></w:pPr>
      <w:r><w:rPr><w:sz w:val="20"/><w:color w:val="334155"/></w:rPr><w:t>• Configured Android Keystore signing and automated PowerShell release compilation pipelines (build_release.ps1) for Google Play App Bundles (.aab).</w:t></w:r>
    </w:p>

    <!-- Role 2 -->
    <w:p>
      <w:pPr><w:spacing w:before="60" w:after="30"/></w:pPr>
      <w:r><w:rPr><w:b/><w:sz w:val="22"/><w:color w:val="0F172A"/></w:rPr><w:t>Software Engineering Intern — Kanyuy Marketing</w:t></w:r>
    </w:p>
    <w:p>
      <w:pPr><w:spacing w:after="50"/></w:pPr>
      <w:r><w:rPr><w:i/><w:sz w:val="18"/><w:color w:val="2563EB"/></w:rPr><w:t>April 2025 — December 2025</w:t></w:r>
    </w:p>
    <w:p>
      <w:pPr><w:spacing w:after="40"/></w:pPr>
      <w:r><w:rPr><w:sz w:val="20"/><w:color w:val="334155"/></w:rPr><w:t>• Developed responsive client web interfaces with Next.js and optimized backend REST APIs in Node.js, slashing request latency across high-traffic hours.</w:t></w:r>
    </w:p>
    <w:p>
      <w:pPr><w:spacing w:after="40"/></w:pPr>
      <w:r><w:rPr><w:sz w:val="20"/><w:color w:val="334155"/></w:rPr><w:t>• Diagnosed and resolved critical production UI bugs across multi-device mobile viewports, achieving 100% responsive cross-platform compatibility.</w:t></w:r>
    </w:p>
    <w:p>
      <w:pPr><w:spacing w:after="100"/></w:pPr>
      <w:r><w:rPr><w:sz w:val="20"/><w:color w:val="334155"/></w:rPr><w:t>• Participated in sprint planning, CI/CD automated deployments, and API integration testing with Postman.</w:t></w:r>
    </w:p>

    <!-- Role 3 -->
    <w:p>
      <w:pPr><w:spacing w:before="60" w:after="30"/></w:pPr>
      <w:r><w:rPr><w:b/><w:sz w:val="22"/><w:color w:val="0F172A"/></w:rPr><w:t>Frontend Developer — Chatakk Delivery</w:t></w:r>
    </w:p>
    <w:p>
      <w:pPr><w:spacing w:after="50"/></w:pPr>
      <w:r><w:rPr><w:i/><w:sz w:val="18"/><w:color w:val="2563EB"/></w:rPr><w:t>January 2023 — March 2025</w:t></w:r>
    </w:p>
    <w:p>
      <w:pPr><w:spacing w:after="40"/></w:pPr>
      <w:r><w:rPr><w:sz w:val="20"/><w:color w:val="334155"/></w:rPr><w:t>• Architected 4 interconnected React dashboards (Customer, Driver Dispatch, Admin, Enterprise) supporting 150+ daily active users and 2,500+ completed deliveries.</w:t></w:r>
    </w:p>
    <w:p>
      <w:pPr><w:spacing w:after="40"/></w:pPr>
      <w:r><w:rPr><w:sz w:val="20"/><w:color w:val="334155"/></w:rPr><w:t>• Integrated Google Maps Distance Matrix &amp; Directions APIs for automated courier matching and dynamic pricing.</w:t></w:r>
    </w:p>
    <w:p>
      <w:pPr><w:spacing w:after="160"/></w:pPr>
      <w:r><w:rPr><w:sz w:val="20"/><w:color w:val="334155"/></w:rPr><w:t>• Reduced state re-rendering overhead and optimized dashboard performance over low-bandwidth mobile networks.</w:t></w:r>
    </w:p>

    <!-- SECTION: PROJECTS -->
    <w:p>
      <w:pPr><w:spacing w:before="140" w:after="80"/><w:pBdr><w:bottom w:val="single" w:sz="12" w:space="4" w:color="2563EB"/></w:pBdr></w:pPr>
      <w:r><w:rPr><w:b/><w:sz w:val="24"/><w:color w:val="0F172A"/></w:rPr><w:t>FEATURED PRODUCTION PROJECTS</w:t></w:r>
    </w:p>

    <!-- Project 1 -->
    <w:p>
      <w:pPr><w:spacing w:before="60" w:after="30"/></w:pPr>
      <w:r><w:rPr><w:b/><w:sz w:val="20"/><w:color w:val="0F172A"/></w:rPr><w:t>G-WASH NG — Doorstep Mobile Marketplace</w:t></w:r>
      <w:r><w:rPr><w:sz w:val="18"/><w:color w:val="2563EB"/></w:rPr><w:t> [Flutter, Firebase, Paystack SDK, Google Maps &amp; OSM]</w:t></w:r>
    </w:p>
    <w:p>
      <w:pPr><w:spacing w:after="60"/></w:pPr>
      <w:r><w:rPr><w:sz w:val="19"/><w:color w:val="334155"/></w:rPr><w:t>Cross-platform mobile app with live GPS tracking, provider matching, in-app sound popups, and automated escrow releasing payment upon OTP confirmation. (Live: g-wash-ngl.vercel.app)</w:t></w:r>
    </w:p>

    <!-- Project 2 -->
    <w:p>
      <w:pPr><w:spacing w:before="60" w:after="30"/></w:pPr>
      <w:r><w:rPr><w:b/><w:sz w:val="20"/><w:color w:val="0F172A"/></w:rPr><w:t>Bidora (AI Bid Copilot) — Procurement SaaS</w:t></w:r>
      <w:r><w:rPr><w:sz w:val="18"/><w:color w:val="2563EB"/></w:rPr><w:t> [Next.js, Node.js, Prisma, PostgreSQL, OpenAI API]</w:t></w:r>
    </w:p>
    <w:p>
      <w:pPr><w:spacing w:after="60"/></w:pPr>
      <w:r><w:rPr><w:sz w:val="19"/><w:color w:val="334155"/></w:rPr><w:t>Enterprise AI copilot automating tender document ingestion, capability match scoring, and subcontracting opportunities. (Live: ai-bid-frontend.vercel.app)</w:t></w:r>
    </w:p>

    <!-- Project 3 -->
    <w:p>
      <w:pPr><w:spacing w:before="60" w:after="30"/></w:pPr>
      <w:r><w:rPr><w:b/><w:sz w:val="20"/><w:color w:val="0F172A"/></w:rPr><w:t>SentinelGov AI — Payroll Anomaly Engine</w:t></w:r>
      <w:r><w:rPr><w:sz w:val="18"/><w:color w:val="2563EB"/></w:rPr><w:t> [Python, FastAPI, Next.js, Anomaly Detection]</w:t></w:r>
    </w:p>
    <w:p>
      <w:pPr><w:spacing w:after="60"/></w:pPr>
      <w:r><w:rPr><w:sz w:val="19"/><w:color w:val="334155"/></w:rPr><w:t>Institutional workforce risk monitoring system scanning ministries for ghost workers and duplicate payroll disbursements. (Live: sentinelgove-ai.vercel.app)</w:t></w:r>
    </w:p>

    <!-- Project 4 -->
    <w:p>
      <w:pPr><w:spacing w:before="60" w:after="30"/></w:pPr>
      <w:r><w:rPr><w:b/><w:sz w:val="20"/><w:color w:val="0F172A"/></w:rPr><w:t>PressFlow (PressMark) — Multi-Tenant SaaS</w:t></w:r>
      <w:r><w:rPr><w:sz w:val="18"/><w:color w:val="2563EB"/></w:rPr><w:t> [MongoDB, Express.js, React, Node.js]</w:t></w:r>
    </w:p>
    <w:p>
      <w:pPr><w:spacing w:after="160"/></w:pPr>
      <w:r><w:rPr><w:sz w:val="19"/><w:color w:val="334155"/></w:rPr><w:t>SaaS engine with subscription billing, isolated tenant schemas, and super-admin metrics. (Live: pressmark.site)</w:t></w:r>
    </w:p>

    <!-- SECTION: EDUCATION -->
    <w:p>
      <w:pPr><w:spacing w:before="140" w:after="80"/><w:pBdr><w:bottom w:val="single" w:sz="12" w:space="4" w:color="2563EB"/></w:pBdr></w:pPr>
      <w:r><w:rPr><w:b/><w:sz w:val="24"/><w:color w:val="0F172A"/></w:rPr><w:t>EDUCATION</w:t></w:r>
    </w:p>
    <w:p>
      <w:pPr><w:spacing w:before="40" w:after="20"/></w:pPr>
      <w:r><w:rPr><w:b/><w:sz w:val="22"/><w:color w:val="0F172A"/></w:rPr><w:t>Bachelor of Engineering (B.Eng.) in Software Engineering</w:t></w:r>
    </w:p>
    <w:p>
      <w:pPr><w:spacing w:after="40"/></w:pPr>
      <w:r><w:rPr><w:sz w:val="20"/><w:color w:val="2563EB"/></w:rPr><w:t>Faculty of Engineering and Technology — University of Buea (2023 — 2027)</w:t></w:r>
    </w:p>
    <w:p>
      <w:pPr><w:spacing w:after="100"/></w:pPr>
      <w:r><w:rPr><w:sz w:val="19"/><w:color w:val="475569"/></w:rPr><w:t>Key Coursework: Mobile Communications &amp; Computing, Distributed Systems, Software Architecture, Cryptography &amp; Network Security, Object-Oriented System Design (C++ / Java).</w:t></w:r>
    </w:p>
  </w:body>
</w:document>
'@
[System.IO.File]::WriteAllText("$tempDir\word\document.xml", $doc)

$outputDocx = "$PSScriptRoot\public\resume.docx"
if (Test-Path $outputDocx) { Remove-Item -Force $outputDocx }

Add-Type -AssemblyName System.IO.Compression.FileSystem
[System.IO.Compression.ZipFile]::CreateFromDirectory($tempDir, $outputDocx)
Remove-Item -Recurse -Force $tempDir
Write-Output "Successfully generated $outputDocx"
