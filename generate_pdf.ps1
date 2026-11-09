$ErrorActionPreference = "Stop"

function Build-Pdf {
    param(
        [string]$OutputPath
    )

    # Clean 2-page PDF matching Ndip_Samuel_Agbor_Ojong_CV.docx
    # Margins: Left = 40, Right = 555 (width = 515), Top = 800, Bottom = 45. Page height = 842.
    
    function Esc([string]$s) {
        return $s.Replace("\", "\\").Replace("(", "\(").Replace(")", "\)")
    }

    $p1 = [System.Text.StringBuilder]::new()
    $p2 = [System.Text.StringBuilder]::new()

    # --- PAGE 1 ---
    [void]$p1.AppendLine("0.145 0.388 0.921 rg") # Blue #2563EB
    [void]$p1.AppendLine("40 808 515 4 re f")
    
    # Name & Title
    [void]$p1.AppendLine("BT /F2 19 Tf 0.058 0.090 0.165 rg 40 784 Td (NDIP SAMUEL AGBOR OJONG) Tj ET")
    [void]$p1.AppendLine("BT /F2 11 Tf 0.058 0.090 0.165 rg 40 769 Td (Full-Stack & Mobile Software Engineer) Tj ET")
    [void]$p1.AppendLine("BT /F2 9.5 Tf 0.145 0.388 0.921 rg 40 756 Td (React  |  Next.js  |  Node.js  |  TypeScript  |  Flutter  |  AI Integrations) Tj ET")
    
    # Contacts
    [void]$p1.AppendLine("BT /F1 8.5 Tf 0.35 0.40 0.48 rg 40 742 Td (Douala, Cameroon \(GMT+1\)  |  +237 679 267 153  |  nojong23@gmail.com) Tj ET")
    [void]$p1.AppendLine("BT /F1 8.5 Tf 0.145 0.388 0.921 rg 40 730 Td (Portfolio: portfolio-ndip.vercel.app   |   GitHub: github.com/ndip23   |   LinkedIn: ndip-samuel) Tj ET")

    # Section 1: Professional Summary
    [void]$p1.AppendLine("0.85 0.88 0.94 RG 1 w 40 720 m 555 720 l S")
    [void]$p1.AppendLine("BT /F2 10.5 Tf 0.058 0.090 0.165 rg 40 706 Td (PROFESSIONAL SUMMARY) Tj ET")
    [void]$p1.AppendLine("0.145 0.388 0.921 RG 2 w 40 700 m 95 700 l S")

    $summary = @(
        "Full-stack and mobile software engineer with nearly 4 years of experience shipping production web and mobile",
        "products end to end, from payments and live GPS tracking to multi-tenant SaaS and AI features. Currently Lead",
        "System Developer & System Architect at Mascode, leading system design and a 7-person development team. Built and",
        "maintained 8+ production applications serving real users, including a delivery marketplace with 2,500+ deliveries.",
        "Strongest in React, Next.js, TypeScript, Node.js and Flutter; seeking a full-time remote engineering role."
    )
    $y = 686
    foreach ($line in $summary) {
        [void]$p1.AppendLine("BT /F1 8.8 Tf 0.20 0.25 0.33 rg 40 $y Td ($(Esc $line)) Tj ET")
        $y -= 11.5
    }

    # Section 2: Technical Skills
    $y -= 3
    [void]$p1.AppendLine("0.85 0.88 0.94 RG 1 w 40 $y m 555 $y l S")
    $y -= 14
    [void]$p1.AppendLine("BT /F2 10.5 Tf 0.058 0.090 0.165 rg 40 $y Td (TECHNICAL SKILLS) Tj ET")
    $lineY = $y - 5
    [void]$p1.AppendLine("0.145 0.388 0.921 RG 2 w 40 $lineY m 95 $lineY l S")
    $y -= 16

    $skills = @(
        @("Frontend: ", "React.js, Next.js, TypeScript, JavaScript, Tailwind CSS"),
        @("Backend: ", "Node.js, Express.js, FastAPI, Python, REST API design"),
        @("Mobile: ", "Flutter, Dart, BLoC, Clean Architecture"),
        @("Databases: ", "MongoDB, PostgreSQL, Prisma, Firebase"),
        @("Integrations: ", "Paystack, OpenAI, Google Maps, OpenStreetMap, Socket.io, OTP verification"),
        @("Engineering: ", "System architecture, authentication, RBAC, payment workflows, real-time systems, multi-tenant design"),
        @("Tools & Delivery: ", "Git, GitHub, Postman, CI/CD, Vercel, Android release automation (PowerShell)  |  Familiar: AWS, Docker")
    )

    foreach ($s in $skills) {
        [void]$p1.AppendLine("BT /F2 8.5 Tf 0.058 0.090 0.165 rg 40 $y Td ($(Esc $s[0])) Tj /F1 8.5 Tf 0.25 0.30 0.38 rg ($(Esc $s[1])) Tj ET")
        $y -= 12
    }

    # Section 3: Professional Experience
    $y -= 3
    [void]$p1.AppendLine("0.85 0.88 0.94 RG 1 w 40 $y m 555 $y l S")
    $y -= 14
    [void]$p1.AppendLine("BT /F2 10.5 Tf 0.058 0.090 0.165 rg 40 $y Td (PROFESSIONAL EXPERIENCE) Tj ET")
    $lineY = $y - 5
    [void]$p1.AppendLine("0.145 0.388 0.921 RG 2 w 40 $lineY m 95 $lineY l S")
    $y -= 16

    # Role 1: Mascode
    [void]$p1.AppendLine("BT /F2 9.2 Tf 0.058 0.090 0.165 rg 40 $y Td (Lead System Developer & System Architect, Mascode) Tj ET")
    [void]$p1.AppendLine("BT /F3 8.5 Tf 0.145 0.388 0.921 rg 450 $y Td (Sep 2026 - Present) Tj ET")
    $y -= 12

    $r1Bullets = @(
        "- Lead system design and architecture for a 7-person team: service boundaries, data models, API contracts & deployment.",
        "- Guide the team through code reviews, task breakdown and delivery planning.",
        "- Contributed to SandClip (sandclip.com), an asynchronous video-processing system with background workers and job queues.",
        "- Designed a 6-stage video-processing pipeline with defined inputs, outputs, execution timeouts, and worker/queue coordination.",
        "- Defined job-status tracking and completion handling, and delivered the website for Abibia Pressing."
    )
    foreach ($b in $r1Bullets) {
        [void]$p1.AppendLine("BT /F1 8.2 Tf 0.25 0.30 0.38 rg 45 $y Td ($(Esc $b)) Tj ET")
        $y -= 11
    }

    # Role 2: Spektralsoft
    $y -= 4
    [void]$p1.AppendLine("BT /F2 9.2 Tf 0.058 0.090 0.165 rg 40 $y Td (Software Developer, Spektralsoft) Tj ET")
    [void]$p1.AppendLine("BT /F3 8.5 Tf 0.145 0.388 0.921 rg 445 $y Td (Jun 2026 - Nov 2026) Tj ET")
    $y -= 12

    $r2Bullets = @(
        "- Built Bidora AI (ai-bid-frontend.vercel.app), an AI-powered tender discovery and intelligence SaaS for SMEs across Africa.",
        "- Built user-facing interfaces for tender discovery, analysis, and opportunity tracking (React, TypeScript, REST APIs, AI).",
        "- Implemented workflows for AI tender explanations, eligibility assessments, win-probability insights & proposal drafting.",
        "- Integrated multi-source tender discovery covering international development institutions and public procurement sources.",
        "- Contributed to a validation pipeline processing 108 unique tenders through 24 connectors (216% of 50-tender daily target)."
    )
    foreach ($b in $r2Bullets) {
        [void]$p1.AppendLine("BT /F1 8.2 Tf 0.25 0.30 0.38 rg 45 $y Td ($(Esc $b)) Tj ET")
        $y -= 11
    }

    # Role 3: Freelance (Part 1 on Page 1)
    $y -= 4
    [void]$p1.AppendLine("BT /F2 9.2 Tf 0.058 0.090 0.165 rg 40 $y Td (Full-Stack & Mobile Developer, Freelance) Tj /F1 8.2 Tf 0.4 0.45 0.5 rg (  |  Douala, Cameroon) Tj ET")
    [void]$p1.AppendLine("BT /F3 8.5 Tf 0.145 0.388 0.921 rg 450 $y Td (Jan 2023 - Present) Tj ET")
    $y -= 12

    $r3Bullets = @(
        "- Design, build, deploy and maintain production web, mobile, SaaS and marketplace applications end to end.",
        "- G-WASH NG (Flutter, Firebase, Paystack): Built live marketplace with 2,500+ deliveries, live GPS tracking, route tracing,",
        "  OTP-verified handovers, Paystack escrow workflows, Clean Architecture & BLoC (~40% less redundancy), and PowerShell CI.",
        "- PressFlow / PressMark (MERN): Designed tenant-aware data isolation, orders, pricing, subscriptions & RBAC modules.",
        "- SentinelGovAI (FastAPI, Next.js): Built FastAPI data processing and Next.js analyst dashboards for payroll anomalies.",
        "- School Management System & BIFRC (React, Node.js): School system for 200+ students & 25+ teachers; BIFRC platform",
        "  supporting 50+ users and $50K+ in transactions."
    )
    foreach ($b in $r3Bullets) {
        [void]$p1.AppendLine("BT /F1 8.2 Tf 0.25 0.30 0.38 rg 45 $y Td ($(Esc $b)) Tj ET")
        $y -= 11
    }

    # Role 4: Kanyuy Marketing
    $y -= 4
    [void]$p1.AppendLine("BT /F2 9.2 Tf 0.058 0.090 0.165 rg 40 $y Td (Software Engineering Intern, Kanyuy Marketing) Tj ET")
    [void]$p1.AppendLine("BT /F3 8.5 Tf 0.145 0.388 0.921 rg 445 $y Td (Apr 2025 - Dec 2025) Tj ET")
    $y -= 12

    $r4Bullets = @(
        "- Developed and maintained Next.js and Node.js applications used in production; diagnosed and fixed production bugs.",
        "- Worked in an Agile team using Git, CI/CD pipelines, and Postman API testing to ship integrated full-stack features."
    )
    foreach ($b in $r4Bullets) {
        [void]$p1.AppendLine("BT /F1 8.2 Tf 0.25 0.30 0.38 rg 45 $y Td ($(Esc $b)) Tj ET")
        $y -= 11
    }

    # Role 5: Chatakk Delivery
    $y -= 4
    [void]$p1.AppendLine("BT /F2 9.2 Tf 0.058 0.090 0.165 rg 40 $y Td (Frontend Developer, Chatakk Delivery) Tj ET")
    [void]$p1.AppendLine("BT /F3 8.5 Tf 0.145 0.388 0.921 rg 445 $y Td (Jan 2023 - Mar 2025) Tj ET")
    $y -= 12

    $r5Bullets = @(
        "- Built 4 React dashboards (User, Driver, Admin, Enterprise) supporting 150+ users; integrated Google Distance Matrix",
        "  for automated dispatch calculations and zone-based pricing; optimized performance for 3G/4G networks."
    )
    foreach ($b in $r5Bullets) {
        [void]$p1.AppendLine("BT /F1 8.2 Tf 0.25 0.30 0.38 rg 45 $y Td ($(Esc $b)) Tj ET")
        $y -= 11
    }

    # Page 1 Footer
    [void]$p1.AppendLine("BT /F1 8 Tf 0.5 0.55 0.6 rg 255 25 Td (Page 1 of 2  |  Ndip Samuel Agbor Ojong) Tj ET")

    # --- PAGE 2 ---
    [void]$p2.AppendLine("0.145 0.388 0.921 rg 40 808 515 4 re f")
    [void]$p2.AppendLine("BT /F2 10.5 Tf 0.058 0.090 0.165 rg 40 784 Td (FEATURED PROJECTS) Tj ET")
    [void]$p2.AppendLine("0.145 0.388 0.921 RG 2 w 40 778 m 120 778 l S")
    $y2 = 760

    $projects = @(
        @{
            Title = "1. G-WASH NG, Production Delivery Marketplace"
            Tech = "Flutter  |  Firebase  |  Paystack  |  Google Maps  |  OpenStreetMap  (g-wash-ngl.vercel.app)"
            Bullets = @(
                "- Marketplace with 2,500+ deliveries, live GPS tracking, route tracing, dispatch, OTP verification and escrow payments.",
                "- Built with Clean Architecture, BLoC state management, and an automated PowerShell Android release pipeline."
            )
        },
        @{
            Title = "2. Bidora AI, AI-Powered Tender Discovery & Intelligence SaaS"
            Tech = "React  |  TypeScript  |  REST APIs  |  AI Integration  (ai-bid-frontend.vercel.app)"
            Bullets = @(
                "- Helps contractors and SMEs across Africa find tenders, check eligibility, assess win probability and draft proposals.",
                "- Validation pipeline processed 108 unique tenders through 24 data connectors in a day (216% of the 50-tender target)."
            )
        },
        @{
            Title = "3. SandClip, Asynchronous Video Processing System"
            Tech = "Background Workers  |  Job Queues  |  Pipeline Orchestration  (sandclip.com)"
            Bullets = @(
                "- Six-stage video-processing pipeline with execution timeouts, job-status tracking and documented workflow transitions."
            )
        },
        @{
            Title = "4. PressFlow / PressMark, Multi-Tenant SaaS"
            Tech = "MongoDB  |  Express  |  React  |  Node.js  (pressmark.site)"
            Bullets = @(
                "- Laundry and pressing management SaaS covering customers, orders, pricing, payments, subscriptions, RBAC & tenant isolation."
            )
        },
        @{
            Title = "5. School & Report Card Management System"
            Tech = "React  |  Node.js  |  RBAC"
            Bullets = @(
                "- Production system used by 200+ students and 25+ teachers, with remote marks entry, automated results & controlled printing."
            )
        },
        @{
            Title = "6. SentinelGovAI, Payroll & Workforce Anomaly Detection"
            Tech = "FastAPI  |  Next.js  (sentinelgove-ai.vercel.app)"
            Bullets = @(
                "- Data-analysis platform with FastAPI processing and Next.js dashboards for reviewing workforce and payroll anomalies."
            )
        },
        @{
            Title = "7. BIFRC, Financial/Business Platform"
            Tech = "React  |  Node.js  |  Web Application  (bifrc.org)"
            Bullets = @(
                "- Production platform supporting 50+ users and $50K+ in transactions, with transaction workflows and responsive interfaces."
            )
        }
    )

    foreach ($p in $projects) {
        [void]$p2.AppendLine("BT /F2 9.2 Tf 0.058 0.090 0.165 rg 40 $y2 Td ($(Esc $p.Title)) Tj ET")
        $y2 -= 11
        [void]$p2.AppendLine("BT /F3 8 Tf 0.145 0.388 0.921 rg 40 $y2 Td ($(Esc $p.Tech)) Tj ET")
        $y2 -= 11
        foreach ($b in $p.Bullets) {
            [void]$p2.AppendLine("BT /F1 8.3 Tf 0.25 0.30 0.38 rg 45 $y2 Td ($(Esc $b)) Tj ET")
            $y2 -= 11
        }
        $y2 -= 6
    }

    # Section: Education
    $y2 -= 4
    [void]$p2.AppendLine("0.85 0.88 0.94 RG 1 w 40 $y2 m 555 $y2 l S")
    $y2 -= 16
    [void]$p2.AppendLine("BT /F2 10.5 Tf 0.058 0.090 0.165 rg 40 $y2 Td (EDUCATION) Tj ET")
    $lineY2 = $y2 - 5
    [void]$p2.AppendLine("0.145 0.388 0.921 RG 2 w 40 $lineY2 m 95 $lineY2 l S")
    $y2 -= 16

    [void]$p2.AppendLine("BT /F2 9.2 Tf 0.058 0.090 0.165 rg 40 $y2 Td (B.Eng. Software Engineering, University of Buea, Cameroon) Tj ET")
    [void]$p2.AppendLine("BT /F3 8.5 Tf 0.145 0.388 0.921 rg 435 $y2 Td (2023 - 2027 \(expected\)) Tj ET")
    $y2 -= 12
    [void]$p2.AppendLine("BT /F1 8.5 Tf 0.25 0.30 0.38 rg 40 $y2 Td (Coursework: Software Architecture, Distributed Systems, Web & Mobile Development, Database Systems.) Tj ET")

    # Section: Remote Work
    $y2 -= 16
    [void]$p2.AppendLine("0.85 0.88 0.94 RG 1 w 40 $y2 m 555 $y2 l S")
    $y2 -= 16
    [void]$p2.AppendLine("BT /F2 10.5 Tf 0.058 0.090 0.165 rg 40 $y2 Td (REMOTE WORK) Tj ET")
    $lineY3 = $y2 - 5
    [void]$p2.AppendLine("0.145 0.388 0.921 RG 2 w 40 $lineY3 m 95 $lineY3 l S")
    $y2 -= 16

    [void]$p2.AppendLine("BT /F1 8.5 Tf 0.25 0.30 0.38 rg 40 $y2 Td (Available for full-time remote engineering roles. Based in GMT+1 with working-hour overlap for EU and US teams,) Tj ET")
    $y2 -= 11.5
    [void]$p2.AppendLine("BT /F1 8.5 Tf 0.25 0.30 0.38 rg 40 $y2 Td (reliable Starlink internet and backup power, and comfortable working independently and leading distributed teams.) Tj ET")

    # Page 2 Footer
    [void]$p2.AppendLine("BT /F1 8 Tf 0.5 0.55 0.6 rg 255 25 Td (Page 2 of 2  |  Ndip Samuel Agbor Ojong) Tj ET")

    # Build PDF Objects
    $s1 = $p1.ToString()
    $s2 = $p2.ToString()
    $b1 = [System.Text.Encoding]::ASCII.GetBytes($s1)
    $b2 = [System.Text.Encoding]::ASCII.GetBytes($s2)

    $stream = [System.IO.MemoryStream]::new()
    $writer = [System.IO.StreamWriter]::new($stream, [System.Text.Encoding]::ASCII)

    $writer.WriteLine("%PDF-1.4")
    $writer.Flush()

    $offsets = [System.Collections.Generic.List[long]]::new()
    $offsets.Add(0)

    # 1: Catalog
    $offsets.Add($stream.Position)
    $writer.WriteLine("1 0 obj")
    $writer.WriteLine("<< /Type /Catalog /Pages 2 0 R >>")
    $writer.WriteLine("endobj")
    $writer.Flush()

    # 2: Pages
    $offsets.Add($stream.Position)
    $writer.WriteLine("2 0 obj")
    $writer.WriteLine("<< /Type /Pages /Kids [3 0 R 4 0 R] /Count 2 >>")
    $writer.WriteLine("endobj")
    $writer.Flush()

    # 3: Page 1
    $offsets.Add($stream.Position)
    $writer.WriteLine("3 0 obj")
    $writer.WriteLine("<< /Type /Page /Parent 2 0 R /MediaBox [0 0 595.28 841.89] /Contents 5 0 R /Resources 7 0 R >>")
    $writer.WriteLine("endobj")
    $writer.Flush()

    # 4: Page 2
    $offsets.Add($stream.Position)
    $writer.WriteLine("4 0 obj")
    $writer.WriteLine("<< /Type /Page /Parent 2 0 R /MediaBox [0 0 595.28 841.89] /Contents 6 0 R /Resources 7 0 R >>")
    $writer.WriteLine("endobj")
    $writer.Flush()

    # 5: Stream Page 1
    $offsets.Add($stream.Position)
    $writer.WriteLine("5 0 obj")
    $writer.WriteLine("<< /Length $($b1.Length) >>")
    $writer.WriteLine("stream")
    $writer.Flush()
    $stream.Write($b1, 0, $b1.Length)
    $writer.WriteLine()
    $writer.WriteLine("endstream")
    $writer.WriteLine("endobj")
    $writer.Flush()

    # 6: Stream Page 2
    $offsets.Add($stream.Position)
    $writer.WriteLine("6 0 obj")
    $writer.WriteLine("<< /Length $($b2.Length) >>")
    $writer.WriteLine("stream")
    $writer.Flush()
    $stream.Write($b2, 0, $b2.Length)
    $writer.WriteLine()
    $writer.WriteLine("endstream")
    $writer.WriteLine("endobj")
    $writer.Flush()

    # 7: Resources & Fonts
    $offsets.Add($stream.Position)
    $writer.WriteLine("7 0 obj")
    $writer.WriteLine("<< /Font <<")
    $writer.WriteLine("  /F1 << /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>")
    $writer.WriteLine("  /F2 << /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold >>")
    $writer.WriteLine("  /F3 << /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Oblique >>")
    $writer.WriteLine(">> >>")
    $writer.WriteLine("endobj")
    $writer.Flush()

    $xrefPos = $stream.Position
    $writer.WriteLine("xref")
    $writer.WriteLine("0 $($offsets.Count)")
    $writer.WriteLine("0000000000 65535 f ")
    for ($i = 1; $i -lt $offsets.Count; $i++) {
        $writer.WriteLine(("{0:D10} 00000 n " -f $offsets[$i]))
    }

    $writer.WriteLine("trailer")
    $writer.WriteLine("<< /Size $($offsets.Count) /Root 1 0 R >>")
    $writer.WriteLine("startxref")
    $writer.WriteLine("$xrefPos")
    $writer.WriteLine("%%EOF")
    $writer.Flush()

    [System.IO.File]::WriteAllBytes($OutputPath, $stream.ToArray())
    Write-Output "Successfully generated PDF at $OutputPath"
}

$pdfPath = "$PSScriptRoot\public\resume.pdf"
Build-Pdf -OutputPath $pdfPath
