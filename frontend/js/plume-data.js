window.PLUME = {
pillars: [["Grammaire",72],["Orthographe",64],["Vocabulaire",58],["Conjugaison",69],["Syntaxe",51],["Ponctuation",77],["Registres",43],["Écrit",55],["Oral",38]],
subjects: [
{id:"fr",name:"Français",icon:"pen-line",hours:"CECRL A1–C2",bg:"var(--plume-orange)",fg:"var(--plume-kite)",p:61,ref:"Niveaux CECRL",
 ch:["Grammaire","Orthographe","Vocabulaire","Conjugaison","Syntaxe","Ponctuation","Registres","Méthodes universitaires"]},
{id:"en",name:"Anglais",icon:"languages",hours:"CECRL A1–C2",bg:"var(--plume-aqua)",fg:"var(--plume-kite)",p:34,ref:"Niveaux CECRL",
 ch:["Grammar","Spelling","Vocabulary","Tenses","Syntax","Punctuation","Registers","Academic methods"]},
{id:"ma",name:"Mathématiques",icon:"sigma",hours:"150 h",bg:"var(--plume-kite)",fg:"var(--plume-snow)",p:28,ref:"Programme universitaire",
 ch:["Calcul algébrique","Trigonométrie","Nombres complexes","Étude de fonctions","Calcul intégral","Probabilités"]},
{id:"ph",name:"Physique",icon:"atom",hours:"90 h",bg:"var(--plume-garnet)",fg:"var(--plume-snow)",p:12,ref:"Programme universitaire",
 ch:["Mécanique","Électromagnétisme","Vibrations et propagation","Ondes"]},
{id:"ch",name:"Chimie",icon:"flask-conical",hours:"90 h",bg:"var(--plume-mist)",fg:"var(--plume-kite)",p:21,ref:"Programme universitaire",
 ch:["Structure de la matière","Solutions","Acidité et pH","Oxydoréduction","Dosages","Estérification et hydrolyse","Chimie organique","Analyses spectrales"]},
{id:"bi",name:"Biologie",icon:"dna",hours:"90 h",bg:"var(--color-accent-2-700)",fg:"var(--plume-snow)",p:9,ref:"Programme universitaire",
 ch:["Cellule","Constituants du vivant","Cycle cellulaire","Génétique","Système immunitaire","Procréation","Endocrinologie","Un dernier système (à préciser)"]},
{id:"cg",name:"Culture générale",icon:"globe",hours:"À définir",bg:"var(--color-accent-200)",fg:"var(--plume-kite)",p:0,ref:"Programme à définir",ch:[]}
],
fiches: [
{t:"La dissertation",d:"Problématiser un sujet, construire un plan en deux ou trois parties, argumenter avec des exemples.",time:"12 min",
 steps:[["Analyser le sujet","Définir chaque terme, repérer les présupposés et le champ du sujet."],["Formuler la problématique","Transformer le sujet en tension : une question qui oppose deux lectures possibles."],["Bâtir le plan","Deux ou trois parties, chacune répondant à la problématique sous un angle différent."],["Rédiger l'introduction","Amorce, définition, problématique, annonce du plan — dans cet ordre."],["Soigner les transitions","Chaque partie se clôt par un bilan et ouvre la suivante avec un connecteur."]]},
{t:"La note de synthèse",d:"Restituer un dossier de documents de façon neutre, concise et structurée.",time:"9 min",
 steps:[["Lire le dossier","Une première lecture rapide, puis une lecture annotée par idée."],["Classer les idées","Tableau de confrontation : chaque idée, les documents qui la portent."],["Construire le plan","Un plan apparent, titres compris, sans avis personnel."],["Rédiger sans citer","Reformuler, attribuer chaque idée à sa source (doc. 1, doc. 3)."]]},
{t:"La problématique de recherche",d:"Passer d'un thème à une question de recherche précise et vérifiable.",time:"7 min",
 steps:[["Du thème au sujet","Restreindre : un terrain, une période, un objet."],["État de l'art","Repérer ce qui est établi et ce qui reste discuté."],["Formuler la question","Une question ouverte, à laquelle une enquête peut répondre."]]},
{t:"L'introduction de mémoire",d:"Contextualiser, justifier, annoncer la démarche.",time:"6 min",
 steps:[["Contexte","Situer le sujet dans son champ."],["Enjeux","Pourquoi la question mérite d'être posée."],["Démarche","Méthode, corpus, annonce du plan."]]},
{t:"Le plan de soutenance",d:"Préparer un exposé de 15 à 20 minutes face à un jury.",time:"8 min",
 steps:[["Accroche et objet","Ouvrir sur le cœur du travail, pas sur sa genèse."],["Résultats clés","Trois résultats au plus, chacun illustré."],["Limites","Les nommer avant que le jury ne le fasse."],["Anticiper les objections","Préparer une réponse structurée aux trois questions probables."]]}
],
vocab: [
{t:"Connecteurs logiques",groups:[["Addition",["en outre","de surcroît","par ailleurs","qui plus est"]],["Opposition",["néanmoins","en revanche","toutefois","or"]],["Cause",["dans la mesure où","étant donné que","du fait de"]],["Conséquence",["par conséquent","dès lors","de ce fait","ainsi"]]]},
{t:"Verbes d'analyse",groups:[["Démontrer",["démontrer","établir","attester","étayer"]],["Relier",["corréler","articuler","mettre en regard"]],["Discuter",["inférer","réfuter","nuancer","objecter"]]]},
{t:"Formules de transition",groups:[["Ouvrir",["Il convient d'abord de…","Dans un premier temps…"]],["Enchaîner",["Après avoir montré que…, il s'agit désormais de…","Reste à examiner…"]],["Conclure",["Au terme de cette analyse…","Il apparaît ainsi que…"]]]}
],
quiz: [
{part:"Grammaire",q:"Bien que la réunion <u>___</u> reportée, nous avons maintenu l'ordre du jour.",o:["a été","ait été","fut","soit été"],a:1,why:"« Bien que » exprime une concession : il appelle toujours le subjonctif. Ici, subjonctif passé : ait été."},
{part:"Registres",q:"Quelle formule de clôture est la plus soutenue pour un courriel à une directrice de département ?",o:["Cordialement","Bien à vous","Veuillez agréer, Madame, l'expression de mes salutations respectueuses.","Merci d'avance"],a:2,why:"La formule complète « Veuillez agréer… » relève du registre administratif soutenu ; « Cordialement » reste courant."},
{part:"Vocabulaire",q:"Complétez avec le verbe le plus précis : « Ce résultat permet de <u>___</u> une objection majeure. »",o:["sortir","soulever","monter","lever"],a:1,why:"On « soulève » une objection : collocation figée du registre universitaire."},
{part:"Orthographe",q:"Les fiches que j'ai <u>___</u> hier sont dans le dossier partagé.",o:["relu","relus","relues","relue"],a:2,why:"Avec « avoir », le participe s'accorde avec le COD placé avant : « que » reprend « les fiches », féminin pluriel."},
{part:"Syntaxe",q:"Les résultats sont encourageants ; <u>___</u>, l'échantillon reste limité.",o:["par conséquent","en outre","néanmoins","ainsi"],a:2,why:"La seconde proposition nuance la première : il faut un connecteur d'opposition, « néanmoins »."}
]
};

window.PLUME.tests={
fr:window.PLUME.quiz,
en:[
{part:"Temps",q:"She <u>___</u> in Paris since 2019.",o:["lives","has lived","is living","lived"],a:1,why:"Avec « since », on emploie le present perfect : l'action commence dans le passé et continue aujourd'hui."},
{part:"Registre",q:"Fin d'un courriel formel : « I look forward to <u>___</u> from you. »",o:["hear","hearing","heard","be heard"],a:1,why:"Dans « look forward to », « to » est une préposition : elle est suivie de la forme en -ing."},
{part:"Connecteurs",q:"The results were promising. <u>___</u>, further research is needed.",o:["Moreover","Nevertheless","Therefore","Likewise"],a:1,why:"La seconde phrase nuance la première : il faut un connecteur d'opposition, « nevertheless »."}],
ma:[
{part:"Calcul algébrique",q:"Développez (x + 3)².",o:["x² + 9","x² + 6x + 9","x² + 3x + 9","2x + 6"],a:1,why:"Identité remarquable : (a + b)² = a² + 2ab + b², donc x² + 6x + 9."},
{part:"Étude de fonctions",q:"Quelle est la dérivée de f(x) = x³ ?",o:["x²","3x²","3x","x⁴ / 4"],a:1,why:"La dérivée de xⁿ est n·xⁿ⁻¹ : ici 3x². x⁴ / 4 est une primitive, pas la dérivée."},
{part:"Trigonométrie",q:"Que vaut cos(π / 3) ?",o:["1 / 2","√3 / 2","√2 / 2","0"],a:0,why:"π / 3 correspond à 60° : cos 60° = 1 / 2 et sin 60° = √3 / 2."}],
ph:[
{part:"Unités",q:"Dans quelle unité exprime-t-on une force ?",o:["Le joule","Le newton","Le watt","Le pascal"],a:1,why:"La force s'exprime en newtons (N). Le joule mesure une énergie, le watt une puissance, le pascal une pression."},
{part:"Mécanique",q:"Sans frottements, l'accélération d'un objet en chute libre près du sol vaut environ :",o:["0 m·s⁻²","9,8 m·s⁻²","98 m·s⁻²","Elle dépend de la masse"],a:1,why:"En chute libre, tous les corps ont la même accélération, g ≈ 9,8 m·s⁻², quelle que soit leur masse."},
{part:"Ondes",q:"La vitesse de la lumière dans le vide est d'environ :",o:["340 m·s⁻¹","3 × 10⁵ m·s⁻¹","3 × 10⁸ m·s⁻¹","3 × 10⁸ km·s⁻¹"],a:2,why:"c ≈ 3 × 10⁸ m·s⁻¹. 340 m·s⁻¹ est la vitesse du son dans l'air."}],
ch:[
{part:"Acidité et pH",q:"Quel est le pH d'une solution neutre à 25 °C ?",o:["0","1","7","14"],a:2,why:"À 25 °C, une solution neutre a un pH de 7 ; en dessous elle est acide, au-dessus basique."},
{part:"Acidité et pH",q:"Selon Brønsted, un acide est une espèce qui :",o:["cède un proton H⁺","capte un proton H⁺","cède un électron","capte un électron"],a:0,why:"Un acide de Brønsted cède un proton H⁺ ; une base en capte un."},
{part:"Oxydoréduction",q:"Lors d'une oxydation, une espèce chimique :",o:["gagne des électrons","perd des électrons","perd des protons","gagne des neutrons"],a:1,why:"Oxydation = perte d'électrons ; réduction = gain d'électrons."}],
bi:[
{part:"Cellule",q:"Dans une cellule eucaryote, l'essentiel de l'ATP est produit dans :",o:["le noyau","les ribosomes","les mitochondries","l'appareil de Golgi"],a:2,why:"La respiration cellulaire, qui fournit l'essentiel de l'ATP, a lieu dans les mitochondries."},
{part:"Cycle cellulaire",q:"À l'issue d'une mitose, on obtient :",o:["2 cellules identiques à la cellule mère","4 cellules haploïdes","2 cellules haploïdes","1 seule cellule"],a:0,why:"La mitose donne 2 cellules génétiquement identiques. Les 4 cellules haploïdes, c'est la méiose."},
{part:"Système immunitaire",q:"Les anticorps sont produits par :",o:["les globules rouges","les lymphocytes T","les plaquettes","les lymphocytes B (plasmocytes)"],a:3,why:"Les lymphocytes B, une fois différenciés en plasmocytes, sécrètent les anticorps."}]
};
