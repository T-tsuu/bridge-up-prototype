"use strict";

const TRANSLATIONS = {
    fr: {
        // ── NAVBAR ──
        "Dashboard": "Tableau de bord",
        "Job Listings": "Offres d'emploi",
        "Freelance Market": "Marché freelance",
        "Messages": "Messages",
        "My Profile": "Mon profil",
        "Post a Job": "Publier une offre",
        "Talent Pool": "Talent Pool",
        "Logout": "Déconnexion",
        "Login": "Connexion",
        "Get Started": "S'inscrire",
        "How it Works": "Comment ça marche",
        "For You": "Pour Toi",
        "Numbers": "Chiffres",

        // ── INDEX ──
        "Your Bridge to the": "Votre Pont vers le",
        "Professional World": "Monde Professionnel",
        "Bridge Up connects Algerian students, employers, and universities — turning university years into a launchpad for professional life.": "Bridge Up connecte les étudiants algériens, les entreprises et les universités — transformant les années universitaires en tremplin vers la vie professionnelle.",
        "I'm a Student": "Je suis étudiant",
        "I'm a Recruiter": "Je suis recruteur",
        "I'm a University": "Je suis une université",
        "Students Registered": "Étudiants inscrits",
        "Verified Recruiters": "Recruteurs vérifiés",
        "Open Opportunities": "Opportunités Ouvertes",
        "Partner Universities": "Universités partenaires",
        "How Bridge": "Comment Fonctionne Bridge",
        "Works": "",
        "1. Create Your Profile": "1. Créez Votre Profil",
        "Fill in your academic info, interests, and skills. Our algorithm starts recommending opportunities immediately.": "Renseignez vos informations académiques. Notre algorithme commence immédiatement à vous recommander des opportunités.",
        "2. Apply & Get Hired": "2. Postulez et Soyez Recruté",
        "Browse personalized job recommendations, apply with one click, and sign a digital contract for security.": "Parcourez les offres personnalisées, postulez en un clic et signez un contrat numérique sécurisé.",
        "3. Earn XP & Certificates": "3. Gagnez des XP et des Certificats",
        "Complete experiences to earn XP points, unlock rewards, and get official certificates for your portfolio.": "Complétez des expériences pour gagner des points XP, débloquer des récompenses et obtenir des certificats officiels.",
        "Built for": "Conçu pour",
        "Everyone": "Tout le Monde",
        "Students": "Étudiants",
        "Discover tailored internships and jobs, build your portfolio, earn XP, and get certified — all before graduation.": "Découvrez des stages personnalisés, construisez votre portfolio, gagnez des XP et obtenez des certifications — avant même de diplômer.",
        "JOIN AS STUDENT": "Rejoindre comme Étudiant",
        "Recruiters": "Recruteurs",
        "Find motivated, affordable talent from Algerian universities. Post opportunities and shape your next hire.": "Trouvez des talents motivés issus des universités algériennes. Publiez des offres et façonnez vos futurs collaborateurs.",
        "Join as Recruiter": "Rejoindre comme Recreteur",
        "Universities": "Universités",
        "Track your students' real-world performance, identify skill gaps, and align your curriculum with market needs.": "Suivez les performances professionnelles de vos étudiants, identifiez les lacunes et alignez le programme sur les besoins du marché.",
        "Join as University": "Rejoindre comme Université",
        "Level Up Your": "Propulsez",
        "Career Game": "Votre Carrière",
        "Every internship, project, and review earns you Experience Points. Unlock exclusive rewards as you grow.": "",
        "Starter": "Débutant",
        "0–200 XP · Platform badge": "0–200 XP · Badge de plateforme",
        "Rising Talent": "Émergent",
        "201–600 XP · Premium job listings": "201–600 XP · Offres d'emploi Premium",
        "Experienced": "Expérimenté",
        "601–1200 XP · Course discounts": "601–1200 XP · Réductions sur les cours",
        "Pro": "Pro",
        "1201–2500 XP · Featured profile": "1201–2500 XP · Profil à la une",
        "Elite": "Élite",
        "2500+ XP · Priority placement + exclusive roles": "2500+ XP · Placement prioritaire + rôles exclusifs",
        "🎮 Sample XP Journey": "🎮 Exemple de Parcours XP",
        "✅ Completed your profile": "✅ Profil complété",
        "📨 First application submitted": "📨 Première candidature envoyée",
        "🏢 Completed 1-month internship": "🏢 Stage d’un mois effectué",
        "⭐ Received a 5-star review": "⭐ Avis 5 étoiles reçu",
        "📜 Certificate earned": "📜 Certificat obtenu",
        "Total après le premier stage": "",
        "385 XP → Rising Talent 🎉": "385 XP → Talent Émergent 🎉",
        "Ready to bridge the gap?": "Prêt à Bridger l'écart?",
        "Join 5,100+ students already building their professional future.": "Rejoignez plus de 5 100 étudiants qui construisent déjà leur avenir professionnel.",
        "GET STARTED — IT'S FREE": "COMMENCER — C'EST GRATUIT",

        // ── LOGIN ──
        "Welcome back.": "Bon Retour",
        "Your bridge to Algeria's\n                professional world.": "Votre Pont vers le Monde Professionnel Algérien.",
        "Personalised job recommendations": "Recommandations d'offres personnalisées",
        "XP Points & certificates": "Points XP & certificats",
        "Digital contracts & security": "Contrats numériques & sécurité",
        "In-app chat with recruiters": "Messagerie intégrée avec les recruteurs",
        "Sign In": "Connexion",
        "No account?": "Pas de compte?",
        "Get started": "S'inscrire",
        "Email": "Email",
        "Password": "Mot de passe",
        "Log In": "Se connecter",
        "Try a demo account": "Essayez un compte démo",
        "Student Demo": "Démo Étudiant",
        "Recruiter Demo": "Démo Recruteur",
        "University Demo": "Démo Université",
        "Use →": "Utiliser →",
        "Invalid email or password.": "Email ou mot de passe incorrect.",
        "Demo credentials filled — click Sign In!": "Identifiants remplis — cliquez sur Se connecter!",
        "Welcome back!": "Bon retour!",

        // ── REGISTER ──
        "Create your account": "Créer votre compte",
        "Already have an account?": "Vous avez déjà un compte?",
        "Sign in": "Se connecter",
        "Student": "Étudiant",
        "Find internships and build your portfolio": "Trouvez des stages et construisez votre portfolio",
        "Recruiter": "Recruteur",
        "Post opportunities & find talent": "Publiez des offres et trouvez des talents",
        "University": "Université",
        "Track students & align the curriculum": "Suivez les étudiants et alignez le programme",
        "Freelancer": "Freelance",
        "Offer services & find projects": "Proposez des services et trouvez des projets",
        "Account": "Compte",
        "Profile": "Profil",
        "Interests": "Intérêts",
        "Done": "Fin",
        "Account Info": "Info du Compte",
        "Institutional Info": "Info d'Institution",
        "Full Name": "Nom Complet",
        "Your full name": "Votre nom complet",
        "Min 8 characters": "Min 8 charactères",
        "optional": "facultatif",
        "University": "Université",
        "Field of Study": "Domaine d'études",
        "Degree Type": "Type de diplôme",
        "Academic Year": "Année académique",
        "Continue →": "Continuer →",
        "🚀 Create my account": "🚀 Créer mon compte",
        "You're registered!": "Vous êtes inscrit!",
        "You're in!": "Vous êtes inscrit!",
        "Your Bridge Up account is ready.": "Votre compte Bridge Up est prêt.",
        "Go to my dashboard →": "Aller à mon tableau de bord →",
        "Select your interests": "Sélectionnez vos intérêts",
        "Step 3 of 3 — choose up to 5": "Étape 3 sur 3 — choisissez jusqu'à 5",
        "Skills (press Enter to add)": "Compétences (appuyez sur Entrée pour ajouter)",
        "Add": "Ajouter",
        "Maximum 5 interests.": "Maximum 5 intérêts.",
        "Enter the University you study at...":"Entrez le nom de l'université où vous étudiez...",

        // ── STUDENT DASHBOARD ──
        "Welcome back 👋": "Bon retour 👋",
        "Applications": "Candidatures",
        "Completed": "Complétés",
        "Certificates": "Certificats",
        "🎁 Perk: Platform badge": "🎁 Avantage : Badge de plateforme",
        "🎁 Perk: Access to premium job listings": "🎁 Avantage : Accès aux offres d'emploi premium",
        "🎁 Perk: Discount on partner online courses": "🎁 Avantage : Réduction sur les cours en ligne partenaires",
        "🎁 Perk: Featured profile placement": "🎁 Avantage : Mise en avant du profil",
        "🎁 Perk: Priority recommendation + exclusive opportunities": "🎁 Avantage : Recommandation prioritaire + opportunités exclusives",
        "Explore Jobs": "Offres d'emploi",
        "Marketplace": "Marché Freelance",
        "📊 Dashboard": "📊 Tableau de bord",
        "🔍 Explore Jobs": "🔍 Offres d'emploi",
        "🛒 Marketplace": "🛒 Marché freelance",
        "👤 My Profile": "👤 Mon profil",
        "💬 Messages": "💬 Messages",
        "📜 Certificates": "📜 Certificats",
        "Complete your profile to unlock better matches!": "Complétez votre profil pour de meilleures correspondances !",
        "Add skills and bio to earn +50 XP.": "Ajoutez des compétences et une biographie pour gagner +50 XP.",
        "Complete\n                                Profile": "Compléter le profil",
        "🎯 Recommended For You": "🎯 Recommandé pour vous",
        "See All →": "Voir tout →",
        "📅 Recent Activity": "📅 Activité récente",
        "2 hours ago": "Il y a 2 heures",
        "Yesterday": "Hier",
        "3 days ago": "Il y a 3 jours",
        "Last week": "La semaine dernière",

        // ── STUDENT PROFILE ──
        "Edit Profile": "Modifier le profil",
        "🛠️ Skills": "🛠️ Compétences",
        "💼 Work History": "💼 Expérience professionnelle",
        "📜 Certificates": "📜 Certificats",
        "View all →": "Voir tout →",
        "📄 CV / Curriculum Vitae": "📄 CV / Curriculum Vitae",
        "Upload your CV (PDF, max 5MB)": "Importez votre CV (PDF, max 5 Mo)",
        "Upload\n                            CV": "Importer le CV",
        "CV uploaded successfully! ✅": "CV importé avec succès ! ✅",
        "💻 Freelance Mode": "💻 Mode Freelance",
        "Enable to offer services on the marketplace": "Activez pour proposer des services sur le marché",
        "Freelance mode enabled! 🎉": "Mode freelance activé ! 🎉",
        "Freelance mode disabled.": "Mode freelance désactivé.",
        "⭐ Reviews": "⭐ Avis",
        "Recruiters & universities only": "Recruteurs & universités uniquement",
        "Written by employers after completed\n                        engagements.": "Rédigés par les employeurs après les missions terminées.",
        "No reviews yet. Complete an engagement to receive your first review.": "Pas encore d'avis. Terminez une mission pour recevoir votre premier avis.",
        "No skills added.": "Aucune compétence ajoutée.",
        "No experience yet. Apply to listings to get started!": "Pas d'expérience. Postulez à des offres pour commencer !",
        "Complete an internship or project to earn your first certificate.": "Terminez un stage ou un projet pour obtenir votre premier certificat.",
        "Issued by Bridge Up · 2026": "Émis par Bridge Up · 2026",
        "View": "Voir",
        "Bio (max 300 characters)": "Biographie (max 300 caractères)",
        "LinkedIn URL": "URL LinkedIn",
        "GitHub URL": "URL GitHub",
        "Cancel": "Annuler",
        "Save": "Enregistrer",
        "Profile updated! ✅": "Profil mis à jour ! ✅",
        "Reviews": "Avis",
        "Certificate of completion #": "Certificat de complétion n°",
        "Send Message": "Envoyer un message",
        "⭐ Save": "⭐ Sauvegarder",
        "🎉 Freelance mode is active!": "🎉 Mode Freelance est actif!",
        "Create your first gig →": "Créer votre premier service →",
        "Save Changes": "Sauvegarder",

        // ── RECRUITER DASHBOARD ──
        "Recruiter Dashboard": "Tableau de bord recruteur",
        "+ Post a New Opportunity": "+ Publier une nouvelle offre",
        "Posted Jobs": "Offres publiées",
        "Active Listings": "Annonces actives",
        "Hired": "Recrutés",
        "📨 Applications": "📨 Candidatures",
        "📋 My Listings": "📋 Mes annonces",
        "🔍 Browse Talent": "🔍 Talent Pool",
        "➕ Post New Job": "➕ Publier une Nouvelle Offre",
        "📝 Contracts": "📝 Contrats",
        "Applications Inbox": "Inbox des Candidatures",
        "All": "Tout",
        "Pending": "En attente",
        "Accepted": "Acceptés",
        "Rejected": "Refusés",
        "My Listings": "Mes offres",
        "Search by name, skill, field…": "Rechercher par nom, compétence, domaine…",
        "All Fields": "Tous les domaines",
        "All Levels": "Tous les niveaux",
        "Applied to:": "Candidature à :",
        "Cover Letter": "Lettre de motivation",
        "✗ Reject": "✗ Refuser",
        "✓ Accept & Send Contract": "✓ Accepter & envoyer le contrat",
        "Application accepted! Contract sent to student. 📝": "Candidature acceptée ! Contrat envoyé à l'étudiant. 📝",
        "Application rejected.": "Candidature refusée.",
        "Close": "Fermer",
        "Reopen": "Rouvrir",
        "Listing closed.": "Annonce fermée.",
        "Listing reopened.": "Annonce rouverte.",
        "💬 Message": "💬 Message",
        "Profile saved to shortlist!": "Profil sauvegardé dans la liste courte !",
        "applicants": "candidats",
        "Deadline:": "Échéance :",
        "My Job Listings": "Mes offres d'emploi",

        // ── POST JOB ──
        "Post a New Opportunity": "Publier une nouvelle offre",
        "Fill in the details below. XP reward is assigned automatically based\n                on type and duration.": "Remplissez les détails ci-dessous. La récompense XP est attribuée automatiquement selon le type et la durée.",
        "Job / Internship Title *": "Titre du poste / stage *",
        "Opportunity Type *": "Type d'offre *",
        "Select a type…": "Sélectionnez un type…",
        "Field *": "Domaine *",
        "Select a field…": "Sélectionnez un domaine…",
        "Duration *": "Durée *",
        "Select a duration…": "Sélectionnez une durée…",
        "Location *": "Lieu *",
        "Description *": "Description *",
        "Required Skills": "Compétences requises",
        "Application Deadline *": "Date limite de candidature *",
        "🎮 XP Reward Preview": "🎮 Aperçu de la récompense XP",
        "Students who complete this listing will earn:": "Les étudiants qui complètent cette offre gagneront :",
        "Save as Draft": "Sauvegarder comme brouillon",
        "🚀 Publish Opportunity": "🚀 Publier l'offre",
        "Draft saved! You can publish it later.": "Brouillon sauvegardé ! Vous pouvez le publier plus tard.",
        "Listing Published!": "Offre publiée !",
        "Your listing is now live and students will receive recommendations immediately.": "Votre annonce est maintenant en ligne et les étudiants recevront des recommandations immédiatement.",
        "Back to Dashboard": "Retour au tableau de bord",
        "Post Another": "Publier une autre",
        "Please fill in the field": "Veuillez remplir le champ",

        // ── UNIVERSITY DASHBOARD ──
        "University Dashboard": "Tableau de bord universitaire",
        "⬇ Export\n                    CSV": "⬇ Exporter CSV",
        "Registered Students": "Étudiants inscrits",
        "Avg XP": "XP moyen",
        "Certificates Earned": "Certificats obtenus",
        "Completion Rate": "Taux de complétion",
        "📊 Macro View": "📊 Vue macro",
        "🔍 Student Search": "🔍 Recherche étudiants",
        "📈 Skill Gap Analysis": "📈 Analyse des écarts de compétences",
        "Institutional Overview": "Vue d'ensemble institutionnelle",
        "All Faculties": "Toutes les facultés",
        "🏆 Top Fields of Study": "🏆 Principaux domaines d'étude",
        "📊 XP Level Distribution": "📊 Distribution par niveau XP",
        "Student Search": "Recherche d'étudiants",
        "Search students by name or field…": "Rechercher des étudiants par nom ou par domaine…",
        "Skill Gap Analysis": "Analyse des lacunes de compétences",
        "Comparing the most in-demand skills on\n                        the platform with the most common skills among your students.": "Comparaison entre les compétences les plus demandées sur la plateforme et celles des étudiants.",
        "🔥 Most Demanded by Recruiters": "🔥 Plus demandées par les recruteurs",
        "👩‍🎓 Most Common Among Your Students": "👩‍🎓 Plus courantes chez vos étudiants",
        "CSV exported! ✅": "CSV exporté ! ✅",
        "Faculty filter applied.": "Filtre faculté appliqué.",
        "No students found.": "Aucun étudiant trouvé.",

        // ── JOB LISTING ──
        "Explore Opportunities": "Explorer les Opportunités",
        "Search jobs, companies, skills…": "Rechercher offres, entreprises, compétences…",
        "All Types": "Tous les types",
        "Remote": "À distance",
        "Full-time": "Temps-plein",
        "All Locations": "Tous les lieux",
        "40 opportunities found": "40 offres trouvées",
        "No listings match your criteria. Try different filters.": "Aucune offre ne correspond à vos critères. Essayez d'autres filtres.",
        "← Back to Listings": "← Retour aux annonces",
        "About the Company": "À propos de l'entreprise",
        "📋 Job Description": "📋 Description du poste",
        "🛠️ Required Skills": "🛠️ Compétences requises",
        "🎯 Similar Opportunities": "🎯 Offres similaires",
        "🚀 Apply Now": "🚀 Postuler",
        "← Back to\n                listings": "← Retour aux offres",
        "XP Reward": "Récompense XP",
        "Deadline": "Date limite",
        "Apply to": "Postuler à",
        "Your profile and CV will be attached automatically. Add an optional message.": "Votre profil et CV seront joints automatiquement. Ajoutez un message optionnel.",
        "🚀 Submit Application": "🚀 Envoyer la candidature",
        "Application Sent!": "Candidature envoyée !",
        "Your application was submitted successfully.": "Votre candidature a été soumise avec succès.",
        "+10 XP for your first application!": "+10 XP pour votre première candidature !",
        "Browse More Listings": "Voir plus d'offres",
        "No similar listings.": "Aucune offre similaire.",
        "A unique chance to work with one of Algeria's leading companies. You will be exposed to diverse challenges and a collaborative team culture.": "Une opportunité unique de travailler pour l'une des entreprises leaders d'Algérie. Vous serez confronté(e) à des défis variés et évoluerez au sein d'une équipe collaborative.",
        "Your profile and CV will be automatically\n                attached. Add an optional message to the recruiter.": "Votre profil et votre CV seront automatiquement joints. Vous pouvez ajouter un message au recruteur.",
        "Hi, I'm very excited about this opportunity because…": "Bonjour, je suis très enthousiaste à l'idée de cette opportunité car…",
        "Cover Letter / Message (optional)": "Lettre de motivation / Message (facultatif)",

        // ── MARKETPLACE ──
        "Market": "Marché",
        "Freelance": "­",
        "Hire talented students for your projects, or\n                offer your own services.": "Recrutez des étudiants talentueux pour vos projets, ou proposez vos propres services.",
        "Search services, categories…": "Rechercher services, catégories…",
        "🛒 Browse Gigs": "🛒 Parcourir les gigs",
        "📋 Project Briefs": "📋 Briefs de projets",
        "+ Create\n                    Gig": "+ Créer un gig",
        "Create a New Gig": "Créer un nouveau service",
        "I will…": "Je vais…",
        "Open Project Briefs": "Briefs de projets ouverts",
        "+ Post Brief": "+ Publier un brief",
        "💼 Hire Now": "💼 Recruter maintenant",
        "Request sent! The freelancer will contact you soon. 🎉": "Demande envoyée ! Le freelance vous contactera bientôt. 🎉",
        "Gig Title": "Titre du gig",
        "Category": "Catégorie",
        "Price (DZD)": "Prix (DZD)",
        "Turnaround Time": "Délai de livraison",
        "e.g. 5 days": "Par exemple, 5 jours",
        "e.g. 5000": "Par exemple, 5000 DZD",
        "Description": "Description",
        "Describe what you offer…": "Décrivez ce que vous offrir…",
        "🚀 Publish Gig": "🚀 Publier le gig",
        "Gig published! 🎉 It's now visible on the marketplace.": "Gig publié ! 🎉 Il est maintenant visible sur le marché.",
        "Please fill in all required fields.": "Veuillez remplir tous les champs requis.",
        "Project Title": "Titre du projet",
        "Budget (DZD)": "Budget (DZD)",
        "Budget Range (DZD)": "Budget (DZD)",
        "Min": "Min",
        "Max": "Max",
        "📋 Publish Brief": "📋 Publier le brief",
        "e.g. Build a landing page for my startup": "Par exemple, créer une page d'accueil pour ma startup",
        "Brief published! Freelancers will start submitting proposals.": "Brief publié ! Les freelances vont commencer à soumettre des propositions.",
        "Please add a project title.": "Veuillez ajouter un titre de projet.",
        "Describe your project requirements…": "Décrivez les exigences de votre projet…",
        "Submit Proposal": "Soumettre une proposition",
        "Proposal sent! 🎉": "Proposition envoyée ! 🎉",
        "proposals": "propositions",
        "✅ Deliverables": "✅ Livrables",
        "No gigs found.": "Aucun gig trouvé.",
        "reviews": "avis",

        // ── CHAT ──
        "Search conversations…": "Rechercher des conversations…",
        "Attachment coming soon.": "Pièce jointe bientôt disponible.",
        "Send": "Envoyer",
        "Select a conversation": "Sélectionnez une conversation",
        "Select a conversation to start messaging": "Sélectionnez une conversation pour commencer",
        "● Online": "● En ligne",
        "Type a message…": "Saisissez un message…",

        // ── CONTRACT ──
        "Digital Contract": "Contrat numérique",
        "Review and sign your engagement contract below.": "Lisez et signez votre contrat d'engagement ci-dessous.",
        "Awaiting Signatures": "En attente de signatures",
        "Partially signed": "Partiellement signé",
        "Fully Signed ✅": "Entièrement signé ✅",
        "🖨️ Print / PDF": "🖨️ Imprimer / PDF",
        "Work Engagement Contract": "Contrat d'Engagement de Travail",
        "Opening print dialog…": "Ouverture de la boîte de dialogue d'impression…",
        "Contract #": "N° de contrat",
        "Issued on": "Émis le",
        "Professional Engagement Contract": "Contrat d'Engagement Professionnel",
        "1. Parties": "1. Parties",
        "STUDENT / FREELANCER": "ÉTUDIANT / FREELANCE",
        "EMPLOYER / CLIENT": "EMPLOYEUR / CLIENT",
        "2. Role & Duration": "2. Rôle et durée",
        "Role:": "Rôle :",
        "Type:": "Type :",
        "Duration:": "Durée :",
        "Start Date:": "Date de début :",
        "Location:": "Lieu :",
        "3. Compensation & XP": "3. Rémunération & XP",
        "Compensation:": "Rémunération :",
        "Payment: CCP or bank transfer, within 5 working days of completion.": "Paiement : virement CCP ou bancaire, dans les 5 jours ouvrés suivant la fin.",
        "XP Reward:": "Récompense XP :",
        "awarded after validation by Bridge Up.": "attribuée après validation par Bridge Up.",
        "4. Responsibilities": "4. Responsabilités",
        "Student agrees to:": "L'étudiant s'engage à :",
        "Complete assigned tasks diligently and professionally": "Accomplir les tâches assignées avec diligence et professionnalisme",
        "Maintain confidentiality of employer's proprietary information": "Maintenir la confidentialité des informations propriétaires de l'employeur",
        "Communicate proactively and meet agreed deadlines": "Communiquer de manière proactive et respecter les délais convenus",
        "Deliver work of satisfactory quality as defined in the job description": "Livrer un travail de qualité satisfaisante tel que défini dans la description du poste",
        "Employer agrees to:": "L'employeur s'engage à :",
        "Provide clear instructions, tools, and necessary access": "Fournir des instructions claires, des outils et les accès nécessaires",
        "Offer constructive feedback and mentorship": "Offrir des retours constructifs et un mentorat",
        "Make timely payment as agreed": "Effectuer les paiements dans les délais convenus",
        "Treat the student with respect and provide a safe work environment": "Traiter l'étudiant avec respect et fournir un environnement de travail sûr",
        "5. Intellectual Property": "5. Propriété intellectuelle",
        "All work produced during this engagement is the\n                    property of the Employer, unless otherwise agreed in writing. The Student retains the right to\n                    reference this engagement in their portfolio with the Employer's consent.": "Tous les travaux produits au cours de cet engagement sont la propriété de l'Employeur, sauf accord écrit contraire. L'étudiant conserve le droit de faire référence à cet engagement dans son portfolio avec l'accord de l'Employeur.",
        "6. Termination": "6. Résiliation",
        "Either party may terminate this contract with": "Chacune des parties peut résilier le présent contrat ",
        "7 days written notice": "moyennant un préavis écrit de 7 jours",
        "via Bridge Up messaging. Early termination without cause by\n                    the Employer will result in pro-rated payment for work completed. The Bridge Up platform serves as\n                    mediator in any disputes.": "via la messagerie Bridge Up. En cas de résiliation anticipée sans motif par l'employeur, le paiement sera effectué au prorata du travail accompli. La plateforme Bridge Up joue le rôle de médiateur en cas de litige.",
        "7. Platform Role": "7. Rôle de la plateforme",
        "Bridge Up acts as a facilitator only and is not\n                    a party to this contract. Bridge Up will issue the Certificate of Completion and XP reward upon\n                    confirmation from both parties that the engagement was successfully completed.": "Bridge Up agit uniquement en tant qu'intermédiaire et n'est pas partie à ce contrat. Bridge Up délivrera le certificat d'achèvement et la récompense XP après confirmation par les deux parties de la bonne réalisation de la mission.",
        "Bridge Up acts solely as a facilitator and is not a party to this contract. Bridge Up will issue the Certificate of Completion and XP reward after both parties confirm the engagement has been successfully completed.": "Bridge Up agit uniquement comme facilitateur et n'est pas partie à ce contrat. Bridge Up émettra le Certificat de complétion et la récompense XP après confirmation des deux parties que l'engagement a été complété avec succès.",
        "Student Signature": "Signature de l'étudiant",
        "Employer Signature": "Signature de l'employeur",
        "Sign\n                        Now": "Signer maintenant",
        "✅ Signed": "✅ Signé",
        "You have signed the contract! ✅": "Vous avez signé le contrat ! ✅",
        "Employer signature recorded! ✅": "Signature de l'employeur enregistrée ! ✅",
        "Contract Fully Signed!": "Contrat entièrement signé !",
        "Both parties have signed. The engagement is now officially\n                active.": "Les deux parties ont signé. L'engagement est officiellement actif.",
        "A certificate will be issued automatically upon completion.": "Un certificat sera émis automatiquement à la complétion.",
        "Go to\n                    Dashboard": "Aller au tableau de bord",
        "💬 Contact Employer": "💬 Contacter l'employeur",
        "Employer Representative": "Représentant de l'employeur",
        "Unpaid Internship (Educational Engagement)": "Stage non rémunéré (engagement éducatif)",
        "To be agreed between parties": "À convenir entre les parties",

        // ── CERTIFICATE ──
        "My Certificates": "Mes certificats",
        "Official proof of your completed engagements\n                        on Bridge Up.": "Preuve officielle de vos engagements complétés sur Bridge Up.",
        "All Types": "Tous les types",
        "Internship": "Stage",
        "Freelance Project": "Projet Freelance",
        "Part-time": "Temps-partiel",
        "Earn More Certificates": "Obtenez Plus de Certificats",
        "Apply to opportunities, complete them, and\n                    collect official certificates for your portfolio.": "Postulez à des offres, complétez-les et collectez des certificats officiels pour votre portfolio.",
        "Browse Opportunities →": "Parcourir les Opportunités →",
        "← Back": "← Retour",
        "🔗\n                        Share Link": "🔗 Partager le lien",
        "Certificate link copied!": "Lien du certificat copié !",
        "Certificate of Completion": "Certificat de complétion",
        "This certifies that": "Certifie que",
        "has successfully completed": "a complété avec succès",
        "at": "chez",
        "XP Earned": "XP gagnés",
        "SKILLS DEMONSTRATED": "COMPÉTENCES DÉMONTRÉES",
        "Platform Director": "Directeur de la plateforme",
        "This certificate is issued by Bridge Up and verifiable at": "Ce certificat est émis par Bridge Up et vérifiable sur",
        "Issued on": "Émis le",
        "Valid indefinitely": "Valable indéfiniment",

        // ── SHARED UI ──
        "Open": "Ouvert",
        "Closed": "Fermé",
        "Today": "Aujourd'hui",
        "Got it, thanks!": "Compris, merci !",
        "I'll get back to you shortly.": "Je reviens vers vous rapidement.",
        "That sounds perfect!": "Ça semble parfait !",
        "Let me check and confirm.": "Je vais vérifier et confirmer.",
        "See you soon!": "À bientôt !",
    },

    en: {}
};

// ─────────────────────────────────────────────
// I18N — text-node scanner, zero data-i18n needed
// ─────────────────────────────────────────────
const I18N = {
    lang: "fr",
    _map: {},
    _enMap: {},  // reverse map: fr text → en text (built at runtime)

    init(defaultLang = "fr") {
        const saved = sessionStorage.getItem("bu_lang");
        this.lang = saved || defaultLang;
        this._map = this.lang === "fr" ? TRANSLATIONS.fr : {};
        this.apply();
    },

    t(key, vars = {}) {
        let str = TRANSLATIONS.fr[key] ? (this.lang === "fr" ? TRANSLATIONS.fr[key] : key) : key;
        Object.entries(vars).forEach(([k, v]) => { str = str.replace(`{${k}}`, v); });
        return str;
    },

    setLang(lang) {
        this.lang = lang;
        this._map = lang === "fr" ? TRANSLATIONS.fr : {};
        sessionStorage.setItem("bu_lang", lang);
        this.apply();
        this._updateToggleUI();
        document.dispatchEvent(new CustomEvent("langchange", { detail: { lang } }));

        document.querySelectorAll('.lang-btn').forEach(btn => {
            const isActive = btn.dataset.lang === lang;
            btn.classList.toggle('lang-btn--active', isActive);
        });
    },

    apply() {
        const isFR = this.lang === "fr";
        const frMap = TRANSLATIONS.fr;

        // Build reverse map on first FR→EN switch
        // frMap values → frMap keys (fr text → en key)
        const toEN = {};
        Object.entries(frMap).forEach(([en, fr]) => { toEN[fr] = en; });

        const walker = document.createTreeWalker(
            document.body,
            NodeFilter.SHOW_TEXT,
            {
                acceptNode(node) {
                    // Skip script and style tags
                    const parent = node.parentElement;
                    if (!parent) return NodeFilter.FILTER_REJECT;
                    const tag = parent.tagName;
                    if (tag === "SCRIPT" || tag === "STYLE") return NodeFilter.FILTER_REJECT;
                    return node.textContent.trim() ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
                }
            }
        );

        const nodes = [];
        while (walker.nextNode()) nodes.push(walker.currentNode);

        nodes.forEach(node => {
            const text = node.textContent;
            const trimmed = text.trim();
            if (!trimmed) return;

            if (isFR) {
                // EN → FR: look up English text as key
                if (frMap[trimmed] !== undefined) {
                    node.textContent = text.replace(trimmed, frMap[trimmed]);
                }
            } else {
                // FR → EN: look up French text in reverse map
                if (toEN[trimmed] !== undefined) {
                    node.textContent = text.replace(trimmed, toEN[trimmed]);
                }
            }
        });

        // Handle placeholders
        document.querySelectorAll("input[placeholder], textarea[placeholder]").forEach(el => {
            const p = el.placeholder.trim();
            if (!p) return;
            if (isFR && frMap[p]) {
                el.setAttribute("data-ph-en", el.placeholder); // save original
                el.placeholder = frMap[p];
            } else if (!isFR) {
                const original = el.getAttribute("data-ph-en");
                if (original) el.placeholder = original;
            }
        });

        document.documentElement.lang = isFR ? "fr" : "en";
        this._updateToggleUI();
    },

    _updateToggleUI() {
        document.querySelectorAll(".lang-btn").forEach(btn => {
            btn.classList.toggle("active", btn.dataset.lang === this.lang);
        });
    }
};

if (typeof window !== "undefined") window.I18N = I18N;