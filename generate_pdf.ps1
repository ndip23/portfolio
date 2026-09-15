$ErrorActionPreference = "Stop"

function Build-Pdf {
    param(
        [string]$OutputPath
    )

    # We will build a clean 2-page PDF
    # Margins: Left = 40, Right = 555 (width = 515), Top = 800, Bottom = 45. Page height = 842.
    
    # Helper to escape PDF strings
    function Esc([string]$s) {
        return $s.Replace("\", "\\").Replace("(", "\(").Replace(")", "\)")
    }

    # Stream for Page 1
    $p1 = [System.Text.StringBuilder]::new()
    # Stream for Page 2
    $p2 = [System.Text.StringBuilder]::new()

    # --- PAGE 1 ---
    # Header Background Accent / Top bar
    [void]$p1.AppendLine("0.145 0.388 0.921 rg") # Blue #2563EB
    [void]$p1.AppendLine("40 808 515 4 re f")
    
    # Name
    [void]$p1.AppendLine("BT /F2 20 Tf 0.058 0.090 0.165 rg 40 782 Td (NDIP SAMUEL AGBOR OJONG) Tj ET")
    
    # Title
    [void]$p1.AppendLine("BT /F2 11 Tf 0.145 0.388 0.921 rg 40 766 Td (Senior Full-Stack & Mobile Software Engineer  \\(Flutter - React - Node.js\\)) Tj ET")
    
    # Contacts
    [void]$p1.AppendLine("BT /F1 8.5 Tf 0.35 0.40 0.48 rg 40 750 Td (Douala, Cameroon  |  +237 679 267 153  |  nojong23@gmail.com) Tj ET")
    [void]$p1.AppendLine("BT /F1 8.5 Tf 0.145 0.388 0.921 rg 40 738 Td (Portfolio: portfolio-ndip.vercel.app   |   GitHub: github.com/ndip23   |   LinkedIn: ndip-samuel) Tj ET")

    # Section 1: Professional Summary
    [void]$p1.AppendLine("0.85 0.88 0.94 RG 1 w 40 726 m 555 726 l S")
    [void]$p1.AppendLine("BT /F2 11 Tf 0.058 0.090 0.165 rg 40 710 Td (PROFESSIONAL SUMMARY) Tj ET")
    [void]$p1.AppendLine("0.145 0.388 0.921 RG 2 w 40 704 m 95 704 l S")

    $summary = @(
        "Performance-driven Mobile & Full-Stack Software Engineer with deep expertise in Flutter & Dart,",
        "cross-platform mobile architectures, and scalable cloud backends. Proven track record of architecting",
        "production Flutter applications utilizing Clean Architecture, reactive state management (BLoC/Provider),",
        "background GPS tracking, and Paystack fintech payment gateways. Experienced taking products from 0",
        "to production across Android, Web, and Cloud systems with over 2,500+ commercial deliveries handled."
    )
    $y = 688
    foreach ($line in $summary) {
        [void]$p1.AppendLine("BT /F1 9 Tf 0.20 0.25 0.33 rg 40 $y Td ($(Esc $line)) Tj ET")
        $y -= 12
    }

    # Section 2: Technical Arsenal
    $y -= 4
    [void]$p1.AppendLine("0.85 0.88 0.94 RG 1 w 40 $y m 555 $y l S")
    $y -= 16
    [void]$p1.AppendLine("BT /F2 11 Tf 0.058 0.090 0.165 rg 40 $y Td (TECHNICAL ARSENAL) Tj ET")
    $lineY = $y - 6
    [void]$p1.AppendLine("0.145 0.388 0.921 RG 2 w 40 $lineY m 95 $lineY l S")
    $y -= 18

    $skills = @(
        @("Mobile Development: ", "Flutter (Advanced), Dart, Clean Architecture, BLoC, Provider, React Native, Push (FCM)"),
        @("Maps & Geolocation: ", "Google Maps Platform, OpenStreetMap (OSM), Live GPS Provider Tracking, Distance Matrix"),
        @("Fintech & Payments: ", "Paystack Mobile SDK, Payment Webhooks, Escrow Holding Systems, OTP Verification"),
        @("Frontend Engineering: ", "React.js, Next.js (App Router), TypeScript, JavaScript (ESNext), Tailwind CSS, Framer Motion"),
        @("Backend & Systems: ", "Node.js, Express.js, Python (FastAPI), C++ Systems, RESTful APIs, JWT Auth, WebSockets"),
        @("Databases & Cloud: ", "Firebase (Firestore, Auth, Functions), PostgreSQL, MongoDB, Prisma ORM, Docker, AWS"),
        @("Mobile DevOps: ", "Android Keystore Signing, Automated PowerShell Builds (build_release.ps1), ProGuard, .aab")
    )

    foreach ($s in $skills) {
        [void]$p1.AppendLine("BT /F2 8.5 Tf 0.058 0.090 0.165 rg 40 $y Td ($(Esc $s[0])) Tj /F1 8.5 Tf 0.25 0.30 0.38 rg ($(Esc $s[1])) Tj ET")
        $y -= 13
    }

    # Section 3: Work Experience
    $y -= 4
    [void]$p1.AppendLine("0.85 0.88 0.94 RG 1 w 40 $y m 555 $y l S")
    $y -= 16
    [void]$p1.AppendLine("BT /F2 11 Tf 0.058 0.090 0.165 rg 40 $y Td (WORK EXPERIENCE) Tj ET")
    $lineY = $y - 6
    [void]$p1.AppendLine("0.145 0.388 0.921 RG 2 w 40 $lineY m 95 $lineY l S")
    $y -= 18

    # Role 1: Freelance
    [void]$p1.AppendLine("BT /F2 9.5 Tf 0.058 0.090 0.165 rg 40 $y Td (Full-Stack & Mobile Developer \\(Freelance\\)) Tj /F1 8.5 Tf 0.4 0.45 0.5 rg (  |  Douala, Cameroon) Tj ET")
    [void]$p1.AppendLine("BT /F3 8.5 Tf 0.145 0.388 0.921 rg 430 $y Td (January 2023 - Present) Tj ET")
    $y -= 13

    $r1Bullets = @(
        "• Engineered G-WASH NG in Flutter using Clean Architecture (Data/Domain/Presentation), cutting redundancy by 40%.",
        "• Embedded dual map engines (Google Maps & OSM) for dynamic provider dispatch and real-time route tracing.",
        "• Implemented Paystack financial escrow system holding customer funds until secure OTP service completion.",
        "• Authored automated PowerShell release scripts (build_release.ps1) for keystore signing and App Bundle (.aab) generation."
    )
    foreach ($b in $r1Bullets) {
        [void]$p1.AppendLine("BT /F1 8.5 Tf 0.25 0.30 0.38 rg 45 $y Td ($(Esc $b)) Tj ET")
        $y -= 11.5
    }

    # Role 2: Kanyuy
    $y -= 4
    [void]$p1.AppendLine("BT /F2 9.5 Tf 0.058 0.090 0.165 rg 40 $y Td (Software Engineering Intern - Kanyuy Marketing) Tj ET")
    [void]$p1.AppendLine("BT /F3 8.5 Tf 0.145 0.388 0.921 rg 415 $y Td (April 2025 - December 2025) Tj ET")
    $y -= 13

    $r2Bullets = @(
        "• Developed responsive client web interfaces in Next.js and optimized backend REST API endpoints in Node.js.",
        "• Diagnosed and patched critical production bugs across multi-device viewports, ensuring 100% mobile compatibility.",
        "• Participated in agile development sprints, CI/CD automated deployments, and API integration testing with Postman."
    )
    foreach ($b in $r2Bullets) {
        [void]$p1.AppendLine("BT /F1 8.5 Tf 0.25 0.30 0.38 rg 45 $y Td ($(Esc $b)) Tj ET")
        $y -= 11.5
    }

    # Role 3: Chatakk Delivery
    $y -= 4
    [void]$p1.AppendLine("BT /F2 9.5 Tf 0.058 0.090 0.165 rg 40 $y Td (Frontend Developer - Chatakk Delivery) Tj ET")
    [void]$p1.AppendLine("BT /F3 8.5 Tf 0.145 0.388 0.921 rg 420 $y Td (January 2023 - March 2025) Tj ET")
    $y -= 13

    $r3Bullets = @(
        "• Architected 4 interconnected React dashboards (User, Driver, Admin, Enterprise) supporting 150+ users & 2,500+ deliveries.",
        "• Integrated Google Maps Distance Matrix & Directions APIs for automated courier dispatch and dynamic zone pricing.",
        "• Optimized state re-renders and network caching, delivering fluid performance across 3G/4G cellular networks."
    )
    foreach ($b in $r3Bullets) {
        [void]$p1.AppendLine("BT /F1 8.5 Tf 0.25 0.30 0.38 rg 45 $y Td ($(Esc $b)) Tj ET")
        $y -= 11.5
    }

    # Page 1 Footer
    [void]$p1.AppendLine("BT /F1 8 Tf 0.5 0.55 0.6 rg 260 25 Td (Page 1 of 2  |  Ndip Samuel) Tj ET")

    # --- PAGE 2 ---
    # Top Bar
    [void]$p2.AppendLine("0.145 0.388 0.921 rg 40 808 515 4 re f")
    [void]$p2.AppendLine("BT /F2 11 Tf 0.058 0.090 0.165 rg 40 782 Td (FEATURED PRODUCTION PROJECTS) Tj ET")
    [void]$p2.AppendLine("0.145 0.388 0.921 RG 2 w 40 776 m 130 776 l S")
    $y2 = 756

    $projects = @(
        @{
            Title = "1. G-WASH NG - On-Demand Doorstep Mobile Marketplace"
            Tech = "Flutter, Dart, Firebase, Paystack SDK, Google Maps & OSM, Clean Architecture"
            Bullets = @(
                "• On-demand vehicle detailing marketplace with live GPS provider matching, distance routing, and sound popups.",
                "• Automated Paystack escrow pre-payment system releasing customer funds only upon OTP physical verification.",
                "• Multi-channel alerts via Twilio SMS, automated SMTP transactional receipts, and Firebase Cloud Messaging."
            )
            Links = "Live: g-wash-ngl.vercel.app   |   Code: github.com/Otuu02/g_wash_ngl"
        },
        @{
            Title = "2. Bidora (AI Bid Copilot) - Tender Procurement SaaS"
            Tech = "Next.js (App Router), Node.js, Prisma ORM, PostgreSQL, OpenAI API, Tailwind CSS"
            Bullets = @(
                "• AI copilot analyzing complex tender specifications and scoring enterprise capability matrices for winning bids.",
                "• Subcontracting intelligence engine analyzing African and global public/private procurement databases.",
                "• Automated certification compliance checklist generation and real-time vendor fit scoring."
            )
            Links = "Live: ai-bid-frontend.vercel.app   |   Code: github.com/ndip23/AI-Bid"
        },
        @{
            Title = "3. SentinelGov AI - Government Payroll Integrity Engine"
            Tech = "Python, FastAPI, Next.js, Anomaly Detection Algorithms, Tailwind CSS"
            Bullets = @(
                "• High-throughput risk monitoring system scanning ministry payroll registries for ghost workers and duplicate payouts.",
                "• Real-time anomaly dashboard with severity scoring, audit trails, and departmental compliance reporting."
            )
            Links = "Live: sentinelgove-ai.vercel.app   |   Code: github.com/ndip23/payroll-ai"
        },
        @{
            Title = "4. PressFlow (PressMark) - Multi-Tenant SaaS Platform"
            Tech = "MERN Stack (MongoDB, Express.js, React, Node.js), Tailwind CSS"
            Bullets = @(
                "• Multi-tenant software platform with isolated tenant database schemas, automated subscription billing, and super-admin metrics."
            )
            Links = "Live: pressmark.site"
        },
        @{
            Title = "5. Mascode Lab - Digital Engineering Agency Platform"
            Tech = "Next.js, TypeScript, Tailwind CSS, Framer Motion"
            Bullets = @(
                "• High-performance corporate site and academy platform showcasing digital products, client services, and student training curricula."
            )
            Links = "Live: mascodelab.com   |   Code: github.com/ndip23/mascode"
        },
        @{
            Title = "6. Fitness Dashboard - Cross-Platform Health Application"
            Tech = "Flutter, React Native, Local Storage, QR Verification Engine, Tailwind"
            Bullets = @(
                "• Workout and nutrition tracking application featuring activity rings, daily calorie burn analytics, and digital QR check-in badges."
            )
            Links = "Featured on portfolio-ndip.vercel.app"
        }
    )

    foreach ($p in $projects) {
        [void]$p2.AppendLine("BT /F2 9.5 Tf 0.058 0.090 0.165 rg 40 $y2 Td ($(Esc $p.Title)) Tj ET")
        $y2 -= 11
        [void]$p2.AppendLine("BT /F3 8 Tf 0.145 0.388 0.921 rg 40 $y2 Td ($(Esc $p.Tech)) Tj ET")
        $y2 -= 11
        foreach ($b in $p.Bullets) {
            [void]$p2.AppendLine("BT /F1 8.5 Tf 0.25 0.30 0.38 rg 45 $y2 Td ($(Esc $b)) Tj ET")
            $y2 -= 10.5
        }
        [void]$p2.AppendLine("BT /F1 8 Tf 0.35 0.40 0.48 rg 45 $y2 Td ($(Esc $p.Links)) Tj ET")
        $y2 -= 14
    }

    # Section: Education
    $y2 -= 4
    [void]$p2.AppendLine("0.85 0.88 0.94 RG 1 w 40 $y2 m 555 $y2 l S")
    $y2 -= 16
    [void]$p2.AppendLine("BT /F2 11 Tf 0.058 0.090 0.165 rg 40 $y2 Td (EDUCATION) Tj ET")
    $lineY2 = $y2 - 6
    [void]$p2.AppendLine("0.145 0.388 0.921 RG 2 w 40 $lineY2 m 95 $lineY2 l S")
    $y2 -= 16

    [void]$p2.AppendLine("BT /F2 9.5 Tf 0.058 0.090 0.165 rg 40 $y2 Td (Bachelor of Engineering \\(B.Eng.\\) in Software Engineering) Tj ET")
    [void]$p2.AppendLine("BT /F3 8.5 Tf 0.145 0.388 0.921 rg 445 $y2 Td (2023 - 2027) Tj ET")
    $y2 -= 12
    [void]$p2.AppendLine("BT /F1 8.5 Tf 0.35 0.40 0.48 rg 40 $y2 Td (Faculty of Engineering and Technology - University of Buea) Tj ET")
    $y2 -= 12
    [void]$p2.AppendLine("BT /F1 8.5 Tf 0.25 0.30 0.38 rg 40 $y2 Td (Key Coursework: Mobile Communications & Computing, Distributed Systems, Software Architecture, Cryptography, OOP System Design.) Tj ET")

    # Page 2 Footer
    [void]$p2.AppendLine("BT /F1 8 Tf 0.5 0.55 0.6 rg 260 25 Td (Page 2 of 2  |  Ndip Samuel) Tj ET")

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
    $offsets.Add(0) # 0 is dummy

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

    # 7: Resources & Fonts (Helvetica, Helvetica-Bold, Helvetica-Oblique)
    $offsets.Add($stream.Position)
    $writer.WriteLine("7 0 obj")
    $writer.WriteLine("<< /Font <<")
    $writer.WriteLine("  /F1 << /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>")
    $writer.WriteLine("  /F2 << /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold >>")
    $writer.WriteLine("  /F3 << /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Oblique >>")
    $writer.WriteLine(">> >>")
    $writer.WriteLine("endobj")
    $writer.Flush()

    # Xref table
    $xrefPos = $stream.Position
    $writer.WriteLine("xref")
    $writer.WriteLine("0 $($offsets.Count)")
    $writer.WriteLine("0000000000 65535 f ")
    for ($i = 1; $i -lt $offsets.Count; $i++) {
        $writer.WriteLine(("{0:D10} 00000 n " -f $offsets[$i]))
    }

    # Trailer
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
