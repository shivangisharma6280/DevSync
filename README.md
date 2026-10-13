Landing page (/)
   │
   └─ "Get Started" click
          │
          ▼
   Logged in hai?
   ├─ NO  → Login / Register page
   │         (register mein role choose karo: Recruiter / Student)
   │
   └─ YES → Role check
             ├─ Recruiter → Recruiter Dashboard
             │                ├─ Create Interview Room
             │                ├─ Past sessions
             │                └─ Room mein jao (/room/:roomId)
             │
             └─ Student → Student Dashboard
                          ├─ AI Mock Interview (baad mein, "Coming soon")
                          └─ Join Interview (agar recruiter ne link diya)