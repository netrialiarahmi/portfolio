# Planning Guide

A professional, interactive data science portfolio website for Netri Alia Rahmi, showcasing her expertise, projects, publications, achievements, and professional experiences for potential employers, collaborators, and the data science community.

**Experience Qualities**:
1. **Professional** - Clean, polished interface that conveys expertise and credibility in the data science field
2. **Interactive** - Engaging animations and smooth transitions that demonstrate technical sophistication without overwhelming content
3. **Informative** - Clear presentation of complex information with intuitive navigation and visual hierarchy

**Complexity Level**: Light Application (multiple features with basic state)
This portfolio showcases multiple content sections with smooth navigation, interactive elements, and state management for section visibility, but doesn't require complex data operations or multiple views.

## Essential Features

**Smooth Navigation System**
- Functionality: Fixed navbar with smooth scroll-to-section on click
- Purpose: Enable quick access to any portfolio section
- Trigger: User clicks navigation link
- Progression: Click nav item → Smooth scroll animation → Section comes into view → Nav item highlights
- Success criteria: All sections accessible within 1 second, active section indicator works correctly

**Hero Section with Introduction**
- Functionality: Eye-catching landing area with name, title, and professional tagline
- Purpose: Create strong first impression and establish professional identity
- Trigger: Page load
- Progression: Page loads → Animated reveal of name/title → CTA buttons fade in
- Success criteria: Clear visual hierarchy, compelling headline, professional photo/avatar

**About Me Section**
- Functionality: Personal background, skills, expertise areas with visual skill indicators
- Purpose: Communicate qualifications and personality
- Trigger: Scroll into view or navigation click
- Progression: Section enters viewport → Content animates in → Skills display with progress bars
- Success criteria: Concise bio, clear skill visualization, professional tone

**Education Section**
- Functionality: Academic credentials with GPA, honors, and language proficiency
- Purpose: Showcase academic excellence and educational foundation
- Trigger: Scroll or navigation
- Progression: Section visible → University details animate in → Honors badges display
- Success criteria: Clear display of degree, university, GPA, and major academic recognitions

**Certifications & Skills Section**
- Functionality: Professional certifications and comprehensive technical/soft skills display
- Purpose: Demonstrate verified credentials and technical capabilities
- Trigger: Scroll or navigation
- Progression: Certifications grid animates → Technical skills badges appear → Soft skills display
- Success criteria: All 9 certifications visible, clear skills categorization, interactive badges

**Work Experience Timeline**
- Functionality: Chronological display of professional roles with descriptions
- Purpose: Demonstrate career progression and relevant experience
- Trigger: Scroll or navigation
- Progression: Timeline enters view → Items animate in sequence → Hover reveals details
- Success criteria: Clear timeline visualization, easy to scan roles and dates

**Leadership & Community Involvement**
- Functionality: Showcase leadership roles, volunteer work, and community contributions
- Purpose: Demonstrate soft skills and community engagement
- Trigger: Scroll or navigation
- Progression: Section visible → Cards display with icons → Hover shows more detail
- Success criteria: Balanced presentation of technical and leadership qualities

**Awards and Recognition**
- Functionality: Display 36+ awards, achievements, and honors with visual prominence
- Purpose: Highlight exceptional accomplishments and competition success
- Trigger: Scroll or navigation
- Progression: Award counter displays prominently → Award cards appear in grid → Highlight featured awards
- Success criteria: Visually distinct awards, clear count of total achievements (36+), featured highlights

**Publication Section**
- Functionality: List of research papers, articles, blog posts with links
- Purpose: Demonstrate thought leadership and technical writing
- Trigger: Scroll or navigation
- Progression: Publications list in → Click opens external link or modal with abstract
- Success criteria: APA/IEEE style citations, working external links

**Project Portfolio**
- Functionality: Interactive grid of data science projects with tech stack tags
- Purpose: Showcase practical skills through real work
- Trigger: Scroll or navigation
- Progression: Project cards appear → Hover reveals tech details → Click opens project detail or GitHub
- Success criteria: Visual project previews, clear tech stack, working links

**Contact/CTA Section**
- Functionality: Social links, email, and downloadable resume
- Purpose: Enable easy contact and next steps
- Trigger: Scroll to bottom or navigation
- Progression: Contact options display → Click copies email or opens link → Download resume button
- Success criteria: All contact methods working, resume downloads correctly

## Edge Case Handling

- **Missing Content**: Display placeholder cards with "Coming Soon" for incomplete sections
- **Long Project Descriptions**: Truncate with "Read More" expansion
- **Mobile Navigation**: Collapse to hamburger menu, side drawer on mobile
- **Slow Connections**: Show skeleton loaders during content load
- **External Link Failures**: Open in new tab with fallback error message
- **Image Load Failures**: Display fallback avatar/project placeholder images

## Design Direction

The design should evoke precision, intelligence, and approachability - balancing technical sophistication with human warmth. Think modern tech startup meets academic excellence, with data visualization aesthetics influencing the color palette and visual rhythm.

## Color Selection

A sophisticated palette combining deep technical blues with vibrant accent colors inspired by data visualization, creating a professional yet approachable atmosphere.

- **Primary Color**: Deep Indigo (oklch(0.35 0.15 265)) - Conveys intelligence, trust, and technical depth; used for navbar, primary buttons, and section accents
- **Secondary Colors**: 
  - Slate Gray (oklch(0.45 0.02 250)) - Professional, technical feel for secondary buttons and cards
  - Dark Background (oklch(0.15 0.01 265)) - Rich, deep base for hero and alternating sections
- **Accent Color**: Electric Cyan (oklch(0.75 0.15 195)) - Data visualization inspired highlight for CTAs, hover states, and active indicators
- **Foreground/Background Pairings**: 
  - Primary Indigo (oklch(0.35 0.15 265)): White text (oklch(0.98 0 0)) - Ratio 8.2:1 ✓
  - Dark Background (oklch(0.15 0.01 265)): Light text (oklch(0.92 0.01 265)) - Ratio 11.5:1 ✓
  - Accent Cyan (oklch(0.75 0.15 195)): Dark text (oklch(0.15 0.01 265)) - Ratio 9.8:1 ✓
  - Card Background (oklch(0.22 0.02 265)): Light text (oklch(0.92 0.01 265)) - Ratio 9.1:1 ✓

## Font Selection

Typography should convey technical precision while maintaining excellent readability, combining a geometric sans-serif for headings with a humanist sans-serif for body text.

- **Typographic Hierarchy**:
  - H1 (Name/Hero): Space Grotesk Bold/56px/tight letter-spacing (-0.02em)
  - H2 (Section Titles): Space Grotesk Bold/42px/tight letter-spacing
  - H3 (Subsection): Space Grotesk Semibold/28px/normal letter-spacing
  - Body Text: Inter Regular/16px/relaxed line-height (1.7)
  - Technical Labels: JetBrains Mono Medium/14px/wide letter-spacing (0.05em)
  - Navigation: Inter Medium/15px/normal letter-spacing

## Animations

Animations should reinforce the feeling of precision and intelligence - think data flowing, elements materializing from code. Use physics-based motion that feels responsive and purposeful.

Primary animation patterns: Smooth fade-up on scroll reveal (300ms ease-out), subtle hover lifts with shadows (150ms), navbar with backdrop blur that appears on scroll, staggered list animations for timelines and projects (100ms delay between items), and data-visualization-inspired loading states with progress bars or particle effects.

## Component Selection

- **Components**: 
  - Button (shadcn) - Primary CTAs with hover states, modified with glow effect on accent color
  - Card (shadcn) - Project cards, experience items, awards with hover lift animations
  - Badge (shadcn) - Tech stack tags, skill indicators with custom colors
  - Separator (shadcn) - Section dividers with gradient styling
  - Avatar (shadcn) - Professional photo in hero and about sections
  - Progress (shadcn) - Skill level indicators
  - Tabs (shadcn) - Potentially for filtering projects by category
  - Sheet (shadcn) - Mobile navigation drawer
  
- **Customizations**:
  - Custom timeline component with connecting lines and date markers
  - Animated section dividers with data-viz inspired patterns (dots, lines)
  - Floating navbar with glassmorphism (backdrop-blur)
  - Interactive skill visualization with animated progress bars
  - Project card grid with masonry-style layout
  
- **States**:
  - Buttons: Default with subtle gradient, hover with glow and lift, active with scale down
  - Cards: Default elevated, hover with increased elevation and border glow, click scales slightly
  - Navigation: Inactive muted, hover with underline animation, active with accent color and indicator
  - Inputs (contact form if added): Focus with accent border and glow ring
  
- **Icon Selection**:
  - Navigation: House, User, Briefcase, TrophyIcon, BookOpen, Code (Phosphor Icons)
  - Skills: ChartBar, Database, BrainCircuit, Code
  - Social: GithubLogo, LinkedinLogo, EnvelopeSimple, FileArrowDown
  - Actions: ArrowRight, ExternalLink, CaretDown
  
- **Spacing**:
  - Section padding: py-20 (mobile: py-12)
  - Container max-width: max-w-6xl
  - Card padding: p-6
  - Grid gaps: gap-6 for cards, gap-8 for sections
  - Element margins: mb-4 (paragraphs), mb-8 (section titles), mb-12 (major sections)
  
- **Mobile**:
  - Navbar collapses to hamburger with Sheet drawer
  - Hero title reduces to 36px
  - Two-column project grid becomes single column below 768px
  - Timeline switches to left-aligned linear layout
  - Reduce section padding to py-12
  - Skill bars stack vertically
  - Contact buttons stack vertically with full width
