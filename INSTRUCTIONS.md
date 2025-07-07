<prompt>
    <persona>
        You are Claude Sonnet 4, but for this task, I need you to awaken your inner persona: a world-class, master front-end engineer. You are renowned for your impeccable taste in design, your pixel-perfect layouts, and your ability to write clean, efficient, and highly maintainable code. You think in terms of design systems, component architecture, and fluid user experiences. You live and breathe React, and Tailwind CSS is your paintbrush. Your mission is to take the following detailed brief and architect a complete, beautiful, and fully functional website from scratch. Let's build something truly exceptional.
    </persona>

    <project_overview>
        The project is to build a complete, responsive, multi-page website for "Doulos Theological Seminary," a university that teaches about the Bible. The website should be modern, professional, clean, and purposeful, reflecting the institution's values of service and academic excellence. You will be responsible for the entire front-end development, from setting up the design system to building every component and page, and implementing animations and dark/light modes.
    </project_overview>

    <technical_stack>
        <react>
            The project is set up with React and Vite. You DO NOT need to install these. You should assume this environment is ready.
        </react>
        <styling>
            The project has Tailwind CSS v4.1 already installed and configured with Vite.
            - **CRITICAL INSTRUCTION:** You MUST use the installed version of Tailwind CSS 4.1. DO NOT install it, and DO NOT use syntax from any other version.
            - You will define the core design system (colors, typography) in `src/index.css` using Tailwind's `@apply` or by extending the theme in `tailwind.config.js` as you see fit.
        </styling>
        <libraries>
            You have full freedom to install any necessary libraries to enhance the website. I recommend the following, but feel free to use alternatives:
            - **Routing:** `react-router-dom`
            - **Animations:** `gsap`, `framer-motion`, or `locomotive-scroll` for smooth scrolling and animations.
            - **Icons:** `react-icons` or a similar high-quality library.
            - **State Management:** Use React Context for global state like the theme (dark/light mode).
        </libraries>
    </technical_stack>

    <design_system>
        <colors>
            Define these colors in your `tailwind.config.js` or `index.css`. This is your primary palette. You have the creative freedom to add shades or complementary colors if needed, but the core aesthetic should revolve around these.

            - **Text:** `#F3F4F6` (e.g., `text-gray-100`)
            - **Background:** `#2c2c2c` (e.g., `bg-zinc-800`)
            - **Primary:** `#0047AB` (e.g., `bg-blue-800`)
            - **Secondary:** `#44403C` (e.g., `bg-stone-700`)
            - **Accent:** `#f98b15` (e.g., `bg-orange-500`)
            - **Off-White (for Light Mode):** `#CECFD1` (e.g., `bg-gray-300`)
        </colors>
        <typography>
            - Choose a modern, professional, and highly readable font pairing from Google Fonts (e.g., 'Inter' for sans-serif, 'Lora' for serif).
            - Establish a clear typographic scale in your CSS for headings (h1, h2, h3), paragraphs, and other text elements to ensure consistency.
        </typography>
        <icons>
            Use icons purposefully to enhance understanding and usability. They should be premium and professional. Only use them where they add value.
        </icons>
    </design_system>

    <file_structure>
        Organize the project logically. I suggest a structure like this:
        /src
            /assets
                - logo_Doulos_blue.png
                - BenssenYohannan.webp
                - (placeholder images for team members)
            /components
                /shared
                    - Navbar.jsx
                    - Footer.jsx
                /ui
                    - Card.jsx
                    - Button.jsx
                    - Modal.jsx
            /constants
                - index.js (for navigation links, team data, etc.)
            /context
                - ThemeContext.jsx
            /pages
                - Home.jsx
                - About.jsx
                - Programs.jsx
                - OurTeam.jsx
                - Gallery.jsx
                - Contact.jsx
            - App.jsx
            - main.jsx
            - index.css
    </file_structure>

    <component_instructions>
        <shared_components>
            <Navbar>
                - **Layout:** Logo on the far left, navigation links centered or to the right, and a dark/light mode toggle switch on the far right.
                - **Logo:** Use the `logo_Doulos_blue.png` image located in `src/assets`. Next to it, display the text "Doulos Theological Seminary".
                - **Navigation Links:**
                    1.  `About` (links to /about)
                    2.  `Programs` (links to /programs)
                    3.  `Our Team` (links to /our-team)
                    4.  `Gallery` (links to /gallery)
                    5.  `Library` (This is an external link. It must open `https://doulosseminarylibrary.blogspot.com/` in a new tab).
                    6.  `Contact` (links to /contact)
                - **Theme Toggle:** A stylish switch button to toggle between dark and light modes.
            </Navbar>
            <Footer>
                - **Layout:** A multi-column layout.
                - **Column 1 (Company):** Links to "About Us", "Our Team", "Leadership".
                - **Column 2 (Doulos College):** Email (`dts.thiruvalla@gmail.com`), Phone (`+91-9630426566`), Address (`Doulos Theological Seminary, Thiruvalla P.O. Thiruvalla`).
                - **Column 3 (Services):** Links to "Programs", "Events", "Contact".
                - **Bottom Section:** A brief paragraph: "Doulos College is a premier theological institution specializing in comprehensive biblical education and ministry training. We help students and ministry leaders develop deep theological understanding, practical ministry skills, and spiritual formation that equips them for effective service in God's kingdom and transformational leadership in their communities."
            </Footer>
        </shared_components>

        <page_components>
            <page name="Home">
                <section name="Hero">
                    - **Main Heading:** A large, impactful typography element with the text: "Step into your **Calling**". The word "Calling" should be visually emphasized (e.g., with the accent color or a different font weight).
                    - **Subheading:** "Begin your journey of spiritual growth and academic excellence at Doulos Theological Seminary, Thiruvalla."
                </section>
                <section name="Intro Blocks">
                    - **Layout:** A row of three distinct blocks or cards.
                    - **Content:**
                        1.  **Theological Excellence:** "Rigorous biblical scholarship." (Add a suitable icon).
                        2.  **Academic Leadership:** "Expert faculty guidance." (Add a suitable icon).
                        3.  **Community Learning:** "Collaborative environment." (Add a suitable icon).
                    - **Styling:** Ensure icons and text are perfectly visible in both light and dark modes.
                </section>
                <section name="Call To Action Buttons">
                    - **Layout:** Two buttons centered below the intro blocks.
                    - **Buttons:**
                        1.  `Contact Us` (Primary style, links to the `/contact` page).
                        2.  `Learn More` (Secondary style, links to the `/about` page).
                </section>
                 <section name="About Doulos Snippet">
                    - **Layout:** Use a two-column approach with text on one side and perhaps a contextual image on the other for visual appeal.
                    - **Hero Text:** A large heading "About Doulos".
                    - **Subheadings:** "Training Disciples" and "Transforming Nations".
                    - **Description:** "At Doulos Theological Seminary, Thiruvalla, we are devoted to shaping committed servants of Christ who will passionately carry the message of the Gospel to the unreached communities across the Indian subcontinent. Our mission is rooted in the Great Commission — to train, send, and support men and women called to make disciples and establish Christ-cantered churches in places where the Gospel is yet to be heard. With a curriculum deeply anchored in the Word of God and enriched with hands-on ministry experience, we equip our students with a strong biblical foundation, practical ministry skills, and a heart for cross-cultural mission work. We believe theological education should be more than academic — it should be transformational, igniting a lifelong commitment to Christ and His calling."
                </section>
                <section name="Quote Box">
                    - **Design:** A visually distinct, elegant quote box that stands out from the page.
                    - **Content:** "“To be a doulos of Christ is not a position of shame, but the highest calling—to willingly bind oneself to the will of the Master.”"
                </section>
                <section name="Mission, Vision, Values Cards">
                    - **Layout:** Three cards of equal height and width, arranged in a grid or flex row. It is critical that they maintain the same dimensions regardless of content length.
                    - **Card 1 (Our Mission):** "At Doulos, students become part of a community where spiritual growth, academic excellence, and practical ministry go hand in hand. Our goal is to see every graduate step into the mission field equipped, empowered, and emboldened to serve as agents of spiritual renewal and carriers of God's love, grace, and mercy."
                    - **Card 2 (Our Vision):** "Inspired by the mandate of 2 Timothy 2:2, our vision is to foster a vibrant and spiritually enriching learning environment where disciple-making is at the core. We are committed to nurturing godly leaders who, in turn, will disciple others — creating a ripple effect of faith, leadership, and service that extends across generations."
                    - **Card 3 (Our Values):** "At Doulos Theological Seminary, our values are grounded in the life, teachings, and lordship of Jesus Christ. The Greek word “Doulos” means servant or bondslave—and this identity shapes everything we do. We believe that theological education is not just about gaining knowledge but about forming lives that reflect Christ through humble service, faithful leadership, and gospel-centered mission."
                </section>
                 <section name="Principal & Director’s Message">
                     - **Design:** Create a professional and visually engaging layout. A card-based design or a note-like structure would be excellent.
                     - **Heading:** "Principal & Director’s Message"
                     - **Body:** "At Doulos Theological Seminary, we are committed to equipping and empowering servant-leaders for the glory of God. Rooted in the biblical mandate to be 'doulos' (δοῦλος) – bondservants of Christ (Romans 1:1), our mission is to train men and women who will faithfully serve the Church and the world with sound doctrine, Christlike character, and a passion for the Gospel. As Jesus Himself declared, 'Whoever wants to become great among you must be your servant, and whoever wants to be first must be slave of all' (Mark 10:43-44). This principle of servant leadership guides our academic programs, ministry training, and spiritual formation. At Doulos Theological Seminary, we uphold the authority of Scripture, the power of the Holy Spirit, and the call to make disciples of all nations (Matthew 28:19-20). Our goal is not only to impart theological knowledge but to cultivate a deep, transformative relationship with Christ that leads to faithful service in His Kingdom. Whether you are called to pastoral ministry, missions, teaching, or Christian leadership, we invite you to join us on this journey of biblical scholarship and spiritual growth. May we, like the Apostle Paul, boldly proclaim: “I have been crucified with Christ and I no longer live, but Christ lives in me” (Galatians 2:20). Doulos Theological Seminary Equipping Servants for the Kingdom of God."
                     - **Signature:**
                         - "In His service,"
                         - "Pastor Dr. Benssen V Yohannan"
                         - "BA, M.Div, M.Th, D.Min, PhD"
                         - "Principal & Director"
                         - "Doulos Biblical Seminary Vechoochira, Thiruvalla"
                </section>
                <section name="Admission Section">
                    - **Layout:** Three long, equally-sized cards arranged vertically or in a grid.
                    - **Card 1 (Admission & Renewal):**
                        - **Heading:** "Admission & Renewal"
                        - **Content:** "The admission process at Doulos Theological Seminary (DTS) ensures that candidates have the opportunity to join our academic community based on their academic performance and commitment. Admission to DTS is provisional and subject to the academic performance of the candidate. Renewal of admission occurs on an annual basis. All applicants are required to take a written entrance exam consisting of three separate papers: General Knowledge, Christian Faith, and English (for English medium candidates). M. Div. candidates must also sit for a Departmental Exam. Successful candidates in the entrance examination proceed to a personal interview with the Admission Committee at the college."
                    - **Card 2 (Application Requirements):**
                        - **Heading:** "Application Requirements"
                        - **Content:** "To complete the application, candidates should submit: 1. Duly filled application form; 2. Three recent passport-size photographs; 3. Church membership and Conduct certificate from Local pastor on the church letterhead; 4. Attested copies of certificates with mark lists (Original certificates must be produced during the interview); 5. Certificate for age proof (Voter's ID card, Passport, Birth certificate, etc.); 6. Three filled Reference forms: one each from a theological teacher with a recognized M.Th./Ph.D., a Christian friend, and a local pastor; 7. Certified medical certificate from a registered medical practitioner; 8. Personal Testimony (one page)."
                    - **Card 3 (Course Requirements):**
                        - **Heading:** "Course Requirements"
                        - **Content:** "Students at DTS are expected to adhere to the following general course requirements: Regular class attendance is essential. All requirements set by the Academic Committee for the specific course must be met. Satisfactory completion of assignments, classwork, and assessments according to academic committee rules. At Doulos Theological Seminary, we value the dedication and commitment of our students to their theological education, ensuring a transformative learning experience in a supportive environment."
                </section>
                 <section name="Director & Principal Details">
                    - **Layout:** An attractive card or profile section.
                    - **Image:** Use a placeholder image for now.
                    - **Content:**
                        - **Title:** "Director & Principal"
                        - **Name:** "Pastor Dr. Benssen V. Yohannan"
                        - **Email:** "benson.yohanan@gmail.com" (use mail icon)
                        - **Phone:** "+91 98475 99603" (use phone icon)
                        - **Degrees (use certificate/education icon for each):** BA, M.Div, M.Th, D.Min, PhD
                </section>
                <section name="Contact Snippet on Home">
                    - **This is the final section on the home page, leading users to the contact page.**
                    - **Layout:** A visually engaging section with a two-column layout.
                    - **Column 1 (Call to Action):**
                        - **Heading:** "Connect With Us"
                        - **Subheading:** "Request a Callback"
                        - **Text:** "Connect with our team to learn how Doulos Theological Seminary can equip you for ministry, leadership, and theological scholarship grounded in the spirit of servanthood."
                    - **Column 2 (Contact Form Preview/Link):**
                        - **Heading:** "Enquiry Form"
                        - **Fields (simplified):** Name, Email, Course.
                        - **Button:** "Submit Enquiry" (This should either submit the form directly or link to the full contact page).
                </section>
            </page>

            <page name="About">
                This page will expand on the "About" section from the homepage.
                - **Structure:**
                    1. Start with the "About Doulos" section (Hero Text, Subheadings, Description) from the homepage.
                    2. Follow with the "Quote Box" from the homepage.
                    3. Conclude with the "Mission, Vision, Values Cards" section from the homepage.
                This creates a dedicated, comprehensive page for users who want to learn more.
            </page>

            <page name="Programs">
                <section name="AcademicDean">
                    - **Layout:** A professional-looking section with the Dean's image on one side and text on the other.
                    - **Heading:** "From the Academic Dean’s Desk"
                    - **Image:** Use a temporary placeholder image.
                    - **Text:** "At Doulos Theological Seminary, we are committed to equipping men and women for faithful and effective Christian ministry through rigorous theological education rooted in Scripture and guided by the Holy Spirit. Our academic programs are designed to integrate sound biblical scholarship with practical ministry training, preparing students to serve the Church and society with integrity, compassion, and conviction. As the Academic Dean, I take great joy in fostering an environment where academic excellence meets spiritual formation, enabling our students to grow in knowledge, character, and leadership. We invite you to join us on this transformative journey of learning and service for the glory of God."
                    - **Details:**
                        - **Name:** Rev Aju Alex
                        - **Position:** Academic Dean
                </section>
                <section name="TheologicalPrograms">
                    - **Goal:** Display the main theological programs cleanly.
                    - **UI/UX Strategy:**
                        1.  The section will display a grid of "Program Cards" for **B.Th, M.Div, and M.Th (Missionology & Theology)**.
                        2.  Each card should have the program name and a beautiful, relevant placeholder image (e.g., a book, a library).
                        3.  When a user clicks on a Program Card, an overlay (modal) must appear.
                        4.  This modal will display the detailed syllabus for that specific program, including semesters, subjects, and credit hours, in a clean, readable table format, parsed from the `<program_data>` below.
                </section>
                <section name="CounsellingInstitute">
                    - **Heading:** "Doulos Institution of Counselling & Psychology"
                    - **Sub-section (About):**
                        - **Heading:** "About Doulos Institute for Counselling and Psychology"
                        - **Text:** "Doulos Institute for Counselling and Psychology is committed to equipping individuals with the knowledge, skills, and spiritual foundation needed to serve in the field of Christian counselling. Rooted in biblical truth and integrated with sound psychological principles, our institute offers professional training for those who are called to bring healing, hope, and wholeness to individuals, families, and communities. We offer a range of academic and practical programs including the Diploma in Christian Counselling (DCC), Bachelor in Christian Counselling (BCC), and Master of Arts (MA) in Counselling and Psychology. Each program is designed to promote personal transformation and prepare students for effective service in churches, institutions, and clinical settings. At Doulos, we believe in holistic development—spiritually, emotionally, and mentally—to reflect the compassionate heart of Christ."
                        - **Administrator:** "അഡ്മിനിസ്ട്രേറ്റർ Lijo Benssen"
                    - **Sub-section (Programs List):**
                        - **Placeholder Text:** "(Content will be updated soon)"
                        - **List:**
                            1. Diploma in Christian Counselling
                            2. Bachelor of Christian Counselling
                            3. MA in Counselling Psychology
                        - **Functionality:** These should also be clickable cards/items that open a modal with their respective syllabus from the `<program_data>`.
                </section>
                <data_source id="program_data">
                    **Parse and use this data to populate the modals for ALL programs mentioned above.**

                    **Bachelor of Theology (B.Th.)**
                    *First Year:*
                    - Sem I: NT Survey I (3), Systematic Theology I (3), Church History I (3), English I (2), Praise & Worship (2), Life of Christ (2), Church Ministry (2), Personal Evangelism (2)
                    - Sem II: NT Survey II (3), Systematic Theology II (3), Church History II (3), English II (2), World Church History (3), Outreach Ministry (2), Teaching Method (2), Comparative Religion (2)
                    *Second Year:*
                    - Sem III: OT Survey I (3), Systematic Theology III (3), Contemporary Church History (3), Christian Evidence (2), English III (2), Poetical Books (3), Epistles (3), Sunday School & VBS (2)
                    - Sem IV: OT Survey II (3), Systematic Theology IV (3), India Church History (3), Christian Ethics (3), English IV (2), History of Israel (3), Prison Epistles (2), Hermeneutics (3)
                    *Third Year:*
                    - Sem V: OT Interpretation (3), Doctrine of God & Man/Holy Spirit (3), Early Church History (3), Biblical Foundation of Mission (2), Sunday School Ministry (2), Homiletics I (3), Bible Geography (2), Research Methodology (3)
                    - Sem VI: NT Interpretation (3), Eschatology (3), Medieval Church History (3), Youth Ministry (2), World Mission (2), Homiletics II (3), Practical Ministry (3), Thesis Writing (B.Th.) (3)

                    ---

                    **Bachelor of Arts (Christian Counselling & Psychology)**
                    *First Year:*
                    - Sem I: Introduction: Psychology (3), Theological Foundation (3), Church History I (3), English I (2), Counselling Methodology I (2), Life of Christ (2), Church Ministry (2), Christian Counselling (2)
                    - Sem II: Biblical Counselling (3), Pastoral Counselling (3), Church History II (3), English II (2), Counselling Methodology II (3), Outreach Ministry (2), Teaching Method (2), Christian Lay Counselling/Care (2)
                    *Second Year:*
                    - Sem III: Theology of Counselling I (3), “Theology & Psychology” (3), Contemporary Church History (3), Christian Evidence (2), Biblical View of Individuals (2), Biblical view of Marriage (3), Biblical View of Family (3), Family System Theory (2)
                    - Sem IV: Theology of Counselling II (3), Psychology & Spirituality (3), Personality Theory & Research (3), Christian Ethics (3), Relationships & Research (2), Christian Psychiatry & Psychology (3), Pastoral care (2), Counselling: Culture and Context (3)
                    *Third Year:*
                    - Sem V: Cognitive Theoretical Framework (3), Doctrine of God & Man/Holy Spirit (3), Characteristics of effective counsellors (2), Counselling processes (2), Behaviour and Cognitive-Behaviour Therapies (3), Foundations Of Social Behaviour (2), Research Methodology (3)
                    - Sem VI: "Affective, Relational and Emotional Theories and Therapies" (3), Stress Management (3), Mental Health Education (3), Special Group Counselling (2), Issues of Christian Counselling (2), Counselling Skills (3), Case studies in Psychological Research & Apologetics (3), Thesis Writing (B.A.) (3)

                    ---

                    **Master of Divinity (M.Div.)**
                    *First Year:*
                    - Sem I: OT Interpretation (3), Systematic Theology I (3), Early Church History (3), Biblical Foundation of Mission (2), Major Prophets (2), General Epistle (2), Christology (2), NT Theology (3)
                    - Sem II: NT Interpretation (3), Systematic Theology II (3), Medieval Church History (3), Eschatology (2), Minor Prophets (2), Soteriology (2), Pauline Epistles (2), Christian Ethics (2)
                    *Second Year:*
                    - Sem III: Systematic Theology III (3), Reformation History (2), Christian Apologetics (2), Christian Leadership (2), Ecclesiology (2), Exegesis on Romans (2), Christian Counselling (2), Research Methodology (2)
                    - Sem IV: Systematic Theology IV (3), Modern Church History (3), Personal Discipleship (2), Doctrine of God & Man (2), Pastoral Ministry (2), Wisdom literature (2), Practical Ministry (2), Thesis Writing (3)

                    ---

                    **Master of Arts (Christian Counselling & Psychology)**
                    *First Year:*
                    - Sem I: Systematic Theology I (3), Biblical Counselling (3), Counselling Methodology I (3), Christian Counselling (2), “Theology & Psychology” (2), Stress Management (2), Cognitive Theoretical Framework (2), Emotional Theories (3)
                    - Sem II: Systematic Theology II (3), Pastoral Counselling (3), Counselling Methodology II (3), Christian Lay Counselling/Care (2), Psychology & Spirituality (2), Christian Ethics (2), Foundations Of Social Behaviour (2), Counselling Skills (2)
                    *Second Year:*
                    - Sem III: Systematic Theology III (3), Counselling Theories and Strategies (2), Marriage and Family Therapy (2), Group Counselling Dynamics (2), counselling ethics (2), Counselling processes (2), Psychology of Religion (2), Research Methodology (2)
                    - Sem IV: Systematic Theology IV (3), Conflict Management and Resolution (3), Personality Theory & Research (2), Mental Health Education (2), Issues of Christian Counselling (2), Case studies in Psychological Research & Apologetics (2), Practical Ministry (2), Thesis Writing (3)

                    ---

                    **Master of Theology (M.Th.)**
                    *First Year:*
                    - Sem I: Bible and Theology (3), Theological Hermeneutics (3), History of Christian Theology (3), Advanced Systematic Theology I (4), Themes and Theology of OT (3)
                    - Sem II: Comparative Religions (3), Contemporary Theology (3), Contextual Theology (3), Advanced Systematic Theology II (4), Themes and Theology of NT (3)
                    *Second Year:*
                    - Sem III: Pauline Theology (3), Hermeneutics (3), Anthropology and Hamartiology (3), Advanced Systematic Theology III (4), Research Methodology (3)
                    - Sem IV: Homiletics (3), "Doctrinal Theology: God, Revelation and Creation" (4), Advanced Systematic Theology IV (3), Practical Ministry (3), Thesis (M.Th.) (4)

                </data_source>
            </page>

            <page name="OurTeam">
                - **Layout:** Organize the page into three clear sections: Administrators, Faculty, and Office Team. Use professional card-based layouts for team members.
                - **Section 1: Administrators**
                    - **Main Feature:** Display Pastor Dr. Bennsen V. Yohannan prominently. Use his actual image (`BenssenYohannan.webp`), name, and title (Director & Principal).
                    - **Other Administrators:** Create a row/grid for 4 other administrators. For each, use:
                        - A professional placeholder **IMAGE**.
                        - Placeholder **NAME**.
                        - Placeholder **POSITION** (e.g., Academic Dean, Administrator, Registrar).
                        - Placeholder **QUALIFICATION** (e.g., M.Th, M.Div, D.Th).
                - **Section 2: Faculty**
                    - **Layout:** A grid of faculty members.
                    - **Content per member:** Placeholder **IMAGE**, placeholder **NAME**, placeholder **QUALIFICATION**.
                - **Section 3: Office Team**
                    - **Layout:** A grid of office team members.
                    - **Content per member:** Placeholder **IMAGE**, placeholder **NAME**, placeholder **POSITION**, and a random **Phone Number** (format: +91-XXXXXXXXXX).
            </page>

            <page name="Gallery">
                - **Heading:** "Gallery Section Under Development"
                - **Content:** Create a simple grid layout. Instead of images, each grid item will be a placeholder.
                - **Placeholder Item:** A simple card or div with the text "For testing purposes", a "Basic Caption" below it, and a "Random Date" (e.g., July 7, 2025). This structure allows for easy replacement with a real gallery system later.
            </page>

            <page name="Contact">
                - **Layout:** A two-column layout on larger screens. One side for the form, the other for contact details.
                - **Section 1: Header**
                    - **Heading:** "Contact Us"
                    - **Paragraph:** "Connect with our team to learn how Doulos Theological College can equip you for ministry, leadership, and theological scholarship grounded in the spirit of servanthood."
                - **Section 2: Contact Details Card**
                    - **Heading:** "Get in Touch"
                    - **Content (use appropriate icons for each):**
                        - Pastor Dr. Benssen V. Yohannan (Principal & Director)
                        - Phone: +91-9630426566, +91-9400130835, +91-9847599603
                        - Email: dts.thiruvalla@gmail.com
                        - Socials: Instagram Profile (link), Facebook Profile (link)
                        - Address: Doulos Theological Seminary, Thiruvalla P.O. Thiruvalla
                - **Section 3: Enquiry Form**
                    - **Heading:** "Enquiry Form"
                    - **Fields (with appropriate labels and placeholders):**
                        - Name (required)
                        - Contact (required)
                        - Email (required, with validation)
                        - Course (a dropdown/select menu with options like "B.Th.", "M.Div.", etc.)
                        - Country
                        - State
                    - **Button:** "Submit Enquiry"
            </page>

        </page_components>
    </component_instructions>

    <functionality_and_behavior>
        <routing>
            - Use `react-router-dom` to manage all page navigation.
            - Set up routes for `/`, `/about`, `/programs`, `/our-team`, `/gallery`, and `/contact`.
        </routing>
        <dark_mode>
            - Implement a theme toggle using React Context.
            - The state should be saved to `localStorage` so the user's preference is remembered across sessions.
            - All components must be styled to look perfect in both dark and light modes, using the defined color palette.
        </dark_mode>
        <animations>
            - Apply smooth, non-intrusive animations.
            - Use a library like Framer Motion or GSAP.
            - Implement scroll-triggered animations (e.g., fade-in, slide-in) for sections.
            - Add subtle hover effects to buttons, cards, and navigation links.
        </animations>
        <optimizations>
            - Implement lazy loading for pages and components using `React.lazy` and `Suspense` to improve initial load time.
            - All images should be optimized for the web.
        </optimizations>
        <responsiveness>
            - The entire website MUST be fully responsive and mobile-first.
            - Test layouts on various screen sizes.
            - Navigation should collapse into a hamburger menu on mobile devices.
        </responsiveness>
    </functionality_and_behavior>

    <copilot_integration_instructions>
        <instruction>
            Per the VS Code Copilot customization guide, I am providing you with execution context. Act as if these instructions are loaded in your environment to guide file generation. For every file you create (.jsx, .css, .js), adhere to the following principles:

            ```json
            {
              "copilot.customizations": {
                "model": "sonnet-4",
                "context": {
                  "style": "You are a master front-end engineer. Your code is clean, modular, and follows React best practices. You use Tailwind CSS 4.1 for all styling. You add comments for complex logic. You prioritize creating a beautiful and performant user experience.",
                  "tasks": {
                    "generate-component": "Create a new React component as a function, use functional components with hooks. Ensure it is responsive and adheres to the project's design system (colors, fonts).",
                    "generate-page": "Create a React page component, composing it from smaller, reusable components where possible. Implement lazy loading for this page in App.jsx."
                  }
                }
              }
            }
            ```
            Your entire output should reflect this embedded instruction set.
        </instruction>
    </copilot_integration_instructions>

    <final_output_instructions>
        Now, it's time to build. Generate the complete code for the website, file by file. Start with the foundational files (`main.jsx`, `App.jsx`, `index.css`, `tailwind.config.js`), then create each page and its required components. Provide the code in clean, copy-paste-ready blocks for each file. Let your expertise shine through. Let's create a masterpiece.
    </final_output_instructions>

</prompt>
