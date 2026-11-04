/**
 * Site copy and structured content for the homepage, division pages, NBIS,
 * Team, Careers and the navigation. Insights live in src/data/insights.ts.
 *
 * Link targets are written as short view names ("nbis", "services-ai-lab",
 * "home#technology") and turned into real URLs by toPath() in src/lib/routes.ts.
 */

export interface Division {
  slug: string; tag: string; title: string; img: string; desc: string; sub: string;
  hero: string; sec: string; secH: string; lead?: string;
  items: [string, string][]; plat?: [string, string][]; train?: [string, string][];
  trainBtn?: string; extra?: [string, string]; cta: [string, string, string] | null;
}

export const DIVISIONS: Division[] = [
    { slug: "analytics", tag: "Analytics", title: "Giospatial Analytics", img: "analytics-dashboard",
      desc: "Spatial analysis and data visualization for organisations that need to see patterns in geospatial data, not just store it.",
      sub: "Spatial analysis and visualization for teams making decisions from geospatial data",
      hero: "Get Started", sec: "Geospatial analytics services tailored to your needs", secH: "Our Services",
      items: [["Spatial Analysis","Geospatial modelling and spatial data analysis for teams making location-based decisions"],["Data Visualization","Interactive maps and dashboards built from complex, multi-source datasets"],["Big Data Processing","Processing pipelines built to handle large geospatial datasets at scale"],["Predictive Analytics","Statistical models for forecasting trends and spatial patterns"],["Custom Dashboards","Analytics dashboards built to each client's own reporting needs"]],
      cta: ["Ready to unlock insights from your data?","Contact us to discuss how our analytics solutions can transform your operations","Contact Our Team"] },
    { slug: "ai-lab", tag: "GeoAI", title: "Giospatial AI Lab", img: "neural-network-ai",
      desc: "Machine learning for geospatial intelligence: predictive modelling and automated feature extraction from satellite imagery.",
      sub: "AI and machine learning for geospatial intelligence",
      hero: "Explore AI Solutions", sec: "Cutting-edge artificial intelligence and machine learning technologies", secH: "AI Capabilities",
      items: [["Computer Vision","Automated feature extraction and object detection from satellite and aerial imagery"],["Deep Learning Models","Custom neural networks for land cover classification and change detection"],["ML Pipeline","End-to-end machine learning workflows for geospatial intelligence"],["Real-time Processing","Fast inference and prediction on streaming geospatial data"],["AI-Powered Insights","Intelligent pattern recognition and anomaly detection"]],
      extra: ["Innovation Through Research","Our AI Lab is at the forefront of geospatial AI research, developing novel algorithms and methodologies that push the boundaries of what's possible with Earth observation data."],
      cta: ["Innovation Through Research","Our AI Lab is at the forefront of geospatial AI research, developing novel algorithms and methodologies that push the boundaries of what's possible with Earth observation data.","Learn About Our Research"] },
    { slug: "platforms", tag: "Platforms", title: "Giospatial Platforms", img: "data-center-servers",
      desc: "Cloud-based SaaS platforms including Giospatial Earth Monitor and Giospatial Cloud for real-time Earth observation.",
      sub: "Cloud-based SaaS platforms for Earth observation and spatial data management",
      hero: "Try Our Platforms", sec: "Platform Features", secH: "Our Platforms",
      plat: [["Giospatial Earth Monitor","Real-time Earth observation platform for monitoring environmental changes and natural resources"],["Giospatial Cloud","Scalable cloud infrastructure for storing, processing, and analyzing geospatial data"]],
      items: [["Data Management","Enterprise-grade spatial data management and versioning systems"],["Real-time Processing","Process and analyze satellite imagery as it arrives"],["Secure & Compliant","Enterprise security with full data sovereignty"],["Multi-source Integration","Integrate data from multiple satellite providers"]],
      cta: ["Ready to experience our platforms?","Get started with a demo or free trial of our cloud-based geospatial platforms","Request Demo"] },
    { slug: "consulting", tag: "Consulting", title: "Consulting & Training", img: "gis-training-workshop",
      desc: "Consulting and training in GIS, remote sensing, and spatial data science for organisations and individual professionals.",
      sub: "Consulting and training in GIS, remote sensing, and spatial data science",
      hero: "Explore Programs", sec: "Professional development and strategic guidance for geospatial excellence", secH: "Our Services",
      items: [["Strategic Consulting","Expert guidance on GIS strategy, implementation, and digital transformation"],["Training Programs","Courses in GIS, remote sensing, and spatial data science"],["Certification Prep","Prepare for industry-recognized GIS and remote sensing certifications"],["Custom Workshops","Tailored training workshops for your organization's specific needs"],["Capacity Building","Long-term programs to build in-house geospatial capabilities"]],
      train: [["GIS Fundamentals","Master the essentials of Geographic Information Systems, from basic concepts to advanced analysis"],["Remote Sensing","Learn satellite image processing, interpretation, and Earth observation techniques"],["Spatial Data Science","Apply Python, R, and machine learning to geospatial data analysis"],["Web GIS","Build interactive web mapping applications and geospatial APIs"]],
      cta: null, trainBtn: "View Course Catalog" },
    { slug: "impact", tag: "Impact", title: "Giospatial Impact", img: "drone-agriculture-kenya",
      desc: "Applying geospatial technology to environmental conservation and social projects across Kenya, often at reduced or no cost.",
      sub: "Geospatial technology applied to conservation and community projects",
      hero: "Learn More", sec: "Where We Focus", secH: "Where We Focus",
      lead: "Giospatial Impact applies our geospatial tools to conservation and community work. We partner with NGOs, governments, and communities on environmental and social projects across Kenya, offering pro-bono and subsidized services where they matter most.",
      items: [["Environmental Conservation","Monitor deforestation, biodiversity, and ecosystem health across Kenya"],["Water Resource Management","Track water bodies, predict droughts, and optimize irrigation systems"],["Community Development","Support sustainable development and poverty reduction initiatives"],["Climate Action","Monitor climate change impacts and support mitigation strategies"],["Disaster Response","Rapid geospatial intelligence for humanitarian crises and natural disasters"]],
      extra: ["", "GIOSPATIAL Impact directs spatial intelligence toward conservation, community resilience, and environmental monitoring across Kenya, engagements are scoped individually with each partner organisation."],
      cta: ["Partner with us for impact","Are you an NGO or organization working on environmental or social initiatives? Let's discuss how we can support your mission with geospatial technology.","Get In Touch"] }
  ];

export const C = {
  hero: {
    h1: "Intelligence in every Location.",
    lead: "GIOSPATIAL engineers end-to-end geospatial systems, from satellite ingestion and GeoAI analysis to enterprise decision APIs, for organisations managing Kenya's land, water, and infrastructure."
  },
  marquee: ["GIOSPATIAL", "NBIS", "GeoAI", "Basin-Scale Intelligence", "Nairobi, Kenya", "Intelligence in Every Location"],
  stats: [
    { v: 5, s: "", l: "Specialised Divisions" },
    { v: 12, s: "+", l: "Sectors Served" },
    { v: 8, s: "", l: "Core Technology Stacks" },
    { v: 2025, s: "", l: "Founded in Nairobi" }
  ],
  where: {
    h2: "Based in Nairobi. Working across the Rift Valley.",
    p: "GIOSPATIAL is headquartered in Nairobi, with the NBIS pilot actively running at Lake Naivasha, one basin over from the Bogoria-Baringo system covered in our Insights. Same team, same Rift Valley, real coordinates."
  },
  
  nbis: {
    h2: "Naivasha Basin Intelligence System",
    p: "Our flagship platform, a basin-scale geospatial decision-support system, actively piloted at Lake Naivasha, pulling water, environmental, and agricultural data into one place for water resource management, compliance, and risk mitigation.",
    sub: "A basin-scale geospatial decision-support platform, actively piloted at Lake Naivasha and designed to extend to other Kenyan basins.",
    caps: [
      ["droplets","Water Resource Management","Basin-scale hydrological monitoring with dynamic flood risk mapping via Sentinel-1 SAR imagery, groundwater abstraction tracking, and lake level trend analysis."],
      ["shield","Environmental Compliance","Automated riparian buffer violation detection, Ramsar wetland boundary monitoring, and encroachment alerts to support regulatory enforcement."],
      ["activity","Risk Mitigation","ML-powered submerged zone prediction, real-time deforestation alerts via pixel-level change detection, and 24-hour PostGIS-backed notification pipeline."],
      ["grid","Land Use Governance","Multi-temporal land cover change analysis, horticulture and floriculture expansion tracking, and peri-urban settlement growth monitoring."]
    ],
    ctxTag: "Ramsar-Designated Wetland · Lake Naivasha, Kenya's Rift Valley",
    ctx: "Lake Naivasha faces compounding pressures from intensive horticulture and floriculture, rapid peri-urban settlement expansion, groundwater over-abstraction, and climate variability. NBIS addresses these gaps by integrating multi-source satellite imagery, climate reanalysis datasets, terrain models, and ground-truth observations into a unified analytical framework with near-real-time processing capability.",
    arch: ["Basin-Agnostic Architecture","Configuration-driven deployment parameters enable rapid adaptation to other Kenyan lake basins and river catchments without core engine modification.",["CRS & coordinate system configuration","Buffer geometries & hydrological thresholds","Climate input source adapters","Rapid redeployment to new basins"]],
    data: ["Sentinel-1 SAR","Sentinel-2 Multispectral","PostGIS","GDAL / Fiona / Shapely","Climate Reanalysis","Digital Elevation Model","Python / Flask","Redis"],
    stackLine: "Secure · Scalable · Enterprise-Grade · PostGIS · Redis · Docker · GitHub Actions CI/CD",
    sectors: ["Water Resource Management","Urban Planning & Growth","Precision Agriculture","Environmental Impact Assessment","Disaster Risk & Flood Mapping","Infrastructure Site Selection","Wildlife & Biodiversity Tracking","Energy Grid Planning","Real Estate Risk Scoring","Climate Change Adaptation","Public Health Logistics","Supply Chain Optimisation"],
    tiles: [["farm-field-aerial","Precision Agriculture"],["reservoir-dam-aerial","Water Resource Management"],["earth-night-lights","Earth Observation"]],
    demoH: "The Working NBIS Pilot Dashboard",
    demoP: "A real screen recording of the Lake Naivasha papyrus restoration platform, in active development."
  },
  engine: {
    h2: "The GIOSPATIAL Engine",
    p: "End-to-end geospatial architecture designed for the modern enterprise, from satellite data ingestion and geo-processing to GeoAI analysis and decision APIs. Secure, scalable, and production-proven across Kenya.",
    stack: [
      ["Geo-Processing",["GDAL","Fiona","Shapely","PostGIS","GeoPandas","Rasterio"]],
      ["Earth Observation",["Sentinel Hub","Sentinel-1 SAR","Sentinel-2 MSI","Planet API","Landsat 8/9"]],
      ["GeoAI & Machine Learning",["NDVI Analysis","Change Detection","YOLOv8 Object Detection","Random Forest","Computer Vision"]],
      ["Backend & APIs",["Python","Flask","Django","Pydantic","Marshmallow","Retrofit (Android)"]],
      ["Mapping & Visualisation",["react-leaflet","Mapbox GL","QGIS","Leaflet","OpenAPI (Swagger)"]],
      ["Ops & Reliability",["Docker","Redis","Celery","Prometheus","Sentry","GitHub Actions"]]
    ],
    steps: [
      ["Data Acquisition","Pulling in satellite imagery and sensor data at the source.",["Sentinel-1 SAR & Sentinel-2 multispectral ingestion","Near real-time tasking via Sentinel Hub & Planet API"],"earth-night-lights"],
      ["Geo-Processing","Turning raw imagery into structured, queryable spatial data.",["GDAL/Fiona/Shapely for format conversion & geometry ops","PostGIS spatial database for persistent storage"],"satellite-space"],
      ["GeoAI Analysis","Machine learning applied to the processed imagery.",["NDVI analysis & automated change detection","YOLOv8 object detection, Random Forest classification"],"neural-network-ai"],
      ["Caching & Storage","Keeping the system fast under real query load.",["Redis for hot-path caching of frequent queries","S3/GCP object storage for imagery and processed layers"],"data-center-servers"],
      ["Decision Insight","Delivering the result where the decision actually gets made.",["REST/GeoJSON APIs for system integration","Real-time dashboards for direct human decision-making"],"nbis-demo-poster"]
    ],
    tiers: [["Frontend & Clients","React (Leaflet/Mapbox) · Android"],["Orchestration","Python Flask/Django · GeoAI Service Layer"],["Persistence","PostGIS geometry · Redis cache"],["Infrastructure","Docker · S3/GCP · GitHub Actions"]]
  },
  about: {
    h2: "We build the architecture underneath the map.",
    p1: "GIOSPATIAL engineers complete, end-to-end geospatial systems, from satellite data ingestion and geo-processing pipelines, through GeoAI analysis, to enterprise decision APIs and real-time dashboards.",
    p2: "Our flagship platform, NBIS, is a production-grade basin-scale intelligence system built for Kenya's most critical environmental challenges, and deployable nationwide.",
    mission: "Give Kenyan organisations the same spatial decision-making infrastructure that only large, well-resourced institutions could previously afford to build.",
    vision: "A Kenya where every water authority, land office, and city planning department makes decisions from live spatial data, not static maps.",
    cap: "Drag to compare · Real NASA satellite imagery, Lake Naivasha basin",
    pains: [
      ["layers","Fragmented spatial data","Organisations across Kenya operate on siloed, static datasets. Real decisions demand unified, near-real-time spatial intelligence at scale."],
      ["database","Weak geospatial architecture","Traditional GIS tools stop at visualisation. Modern enterprises need end-to-end systems: from satellite ingestion to API-ready decision layers."],
      ["activity","Rapidly changing landscapes","Climate shifts, urban expansion, and resource pressure demand systems that move from observation to prediction, not yesterday's static maps."]
    ],
    cards: [
      ["NBIS Platform","Basin-scale geospatial decision-support built for Lake Naivasha and deployable nationwide.",["Sentinel-1/2 satellite ingestion","PostGIS spatial architecture","Real-time decision APIs"],"nbis"],
      ["GeoAI & Analytics","Machine learning applied to Earth Observation imagery to predict change before it happens.",["NDVI & change detection","YOLOv8 object detection","Predictive spatial modelling"],"services-ai-lab"],
      ["Consulting & Training","ArcGIS Enterprise, open-source GIS, and capacity building for teams and organisations.",["Architecture & implementation","Team GIS training programs","System integration support"],"services-consulting"]
    ]
  },
  why: {
    h2: "Built to be trusted with critical decisions",
    items: [
      ["headphones","Dedicated Implementation Support","Every deployment is backed by a solutions engineer who handles configuration, data onboarding, and system integration from day one."],
      ["lock","Enterprise Security & Compliance","JWT authentication, role-based access control, HSTS, encrypted data-at-rest, and audit logging built into every deployment."],
      ["code","Open Standards, No Lock-In","Built on OGC standards, open-source GIS libraries, and published APIs: your spatial data stays portable and reusable."]
    ],
    cta: ["Ready to build with geo&#8209;intelligence?","No commitment required, request a demo or reach out directly."],
    banners: [
      ["Explore NBIS","See the flagship platform's full data pipeline in action.","See the Platform","nbis"],
      ["Partner with Us","Government agency, enterprise, or NGO, let's talk deployment.","Get in Touch","contact"],
      ["Careers at GIOSPATIAL","Building geospatial systems for Africa from Nairobi, Kenya.","View Openings","careers"]
    ]
  },
  faq: [
    ["Is NBIS a live, deployed platform or a concept?","NBIS (Naivasha Basin Intelligence System) is GIOSPATIAL's flagship architecture, currently demonstrated through illustrative case studies on this site. Production deployments are scoped and built per client, talk to our team about what's live today for your use case."],
    ["What geospatial technology stack does GIOSPATIAL use?","Our core stack spans ArcGIS Enterprise and the ArcGIS API for Python, open-source geoprocessing (GDAL, GeoPandas, Rasterio, PostGIS), Sentinel-1/2 and Landsat Earth Observation data, and GeoAI models (YOLOv8, Random Forest, CNN-based change detection) delivered through Python/Flask or Django REST APIs."],
    ["Do you work with government agencies as well as private companies?","Yes. We build for public-sector bodies (water authorities, land commissions, urban planning departments), private enterprise (agriculture, real estate, energy, insurance), and research/NGO partners across East Africa."],
    ["How long does a typical engagement take?","It depends on scope. A focused analytics or GeoAI pilot can run 4-8 weeks; a full enterprise platform deployment (data pipelines, dashboards, ongoing monitoring) typically spans 3-6 months. We scope this precisely during the initial consultation."],
    ["Can GIOSPATIAL integrate with our existing ArcGIS Enterprise or GIS setup?","Yes, this is one of our core consulting services. We work directly with ArcGIS Enterprise, Workflow Manager, Survey123, and SDE geodatabases, and we design integrations to sit alongside your existing systems rather than replace them."],
    ["What does it cost to get started?","Pricing depends on data volume, integration complexity, and deployment scope. Submit the form below with your use case and a solutions engineer will follow up with a scoped estimate within one business day."],
    ["Where is GIOSPATIAL based, and do you work outside Kenya?","We're headquartered in Nairobi, Kenya, and our primary focus is East Africa. We take on select engagements elsewhere on the continent, reach out and we'll let you know if it's a fit."]
  ],
  contact: {
    h2: "Talk to a solutions engineer",
    p: "Ready to deploy an enterprise geospatial system? Our team responds within one business day.",
    addr: ["Naivasha Road, Uthiru, Westlands, Nairobi","P.O. Box 21934-00100 GPO, Nairobi"],
    hours: "Business hours EAT, Mon-Fri",
    domains: ["Water Resource Management","Urban Intelligence","Precision Agriculture","Environmental Compliance","Infrastructure & Energy","Other"],
    note: "We respond within one business day · EAT timezone",
    thanks: "Thanks for reaching out. A GIOSPATIAL solutions engineer will respond within one business day (EAT timezone). In the meantime, feel free to explore our platform or check recent case studies."
  },
  legalLine: "GIOSPATIAL is the trading name of Giospatial Earth Limited (Reg. PVT-YQ1DZJ29)",
  nav: [
    { name: "Services", groups: [
        ["By Discipline",[["Analytics","services-analytics"],["GeoAI Lab","services-ai-lab"],["Platforms","services-platforms"],["Consulting & Training","services-consulting"]]],
        ["By Sector",[["Water Management","nbis#sectors"],["Urban Intelligence","nbis#sectors"],["Precision Agriculture","nbis#sectors"],["Environmental Compliance","nbis#sectors"]]],
        ["Impact",[["Conservation & Community","services-impact"],["Careers","careers"],["Partner Programme","partners"],["Contact Sales","contact"]]]
      ], feat: ["Consulting","GIS Services, By Discipline","Analytics, GeoAI, platforms, training, and impact work, delivered as consulting engagements.","services"] },
    { name: "Insights", groups: [["Recent",[]]], feat: [] },
    { name: "NBIS", groups: [["Platform",[["Overview","nbis"],["Technology Stack","home#technology"],["Pilot Progress","insights-nbis-pilot-progress"],["Watch the Demo","nbis#demo"]]]],
      feat: ["Flagship Platform","Naivasha Basin Intelligence System","Basin-scale geospatial decision-support, actively piloted at Lake Naivasha.","nbis"] },
    { name: "About", groups: [
        ["Company",[["About GIOSPATIAL","home#about"],["Leadership & Team","team"],["Developer Forum","developer-forum"],["Events & Conferences","events"]]],
        ["Resources",[["Press & Media","press"],["FAQ","home#faq"],["Careers","careers"],["Contact Sales","contact"]]]
      ], feat: ["Our Story","A GIS Consultancy, Founded October 2025","Real client work, real analysis, one working team, based in Nairobi, Kenya.","home#about"] }
  ],
  footCols: [
    ["NBIS",[["Platform Overview","nbis"],["How It Works","home#technology"],["Pilot Progress","insights-nbis-pilot-progress"],["Watch the Demo","nbis#demo"]]],
    ["Services",[["Analytics","services-analytics"],["GeoAI Lab","services-ai-lab"],["Platforms","services-platforms"],["Consulting & Training","services-consulting"],["Impact","services-impact"]]],
    ["Company",[["About GIOSPATIAL","home#about"],["Insights","insights"],["Leadership & Team","team"],["FAQ","home#faq"],["Careers","careers"],["Contact Sales","contact"]]]
  ],
  socials: [["facebook","https://facebook.com/giospatial","Facebook"],["x","https://twitter.com/giospatial","X / Twitter"],["linkedin","https://linkedin.com/company/giospatial","LinkedIn"],["instagram","https://instagram.com/giospatial","Instagram"],["youtube","https://youtube.com/@giospatial","YouTube"]],
  team: {
    lead: { name: "Giovanni Bwayo", role: "Founder, CEO & Chief GIS Developer", bio: "Founded GIOSPATIAL to build GIS systems that go past static maps: GeoAI pipelines, spatial APIs, and decision tools. Works across Python, Django, Flask, PostgreSQL/PostGIS, remote sensing, and predictive spatial modelling.", links: [["GitHub","https://github.com/GIOVESS"],["Website","https://giovannibwayo.site"]] },
    branches: [
      ["Chief Operating Officer",["Business Development Lead"]],
      ["Chief Financial Officer",["Finance & Operations Associate"]],
      ["Chief Technology Officer",["Head of GIS Engineering","Head of Data Science"]]
    ]
  },
  careers: {
    intro: "GIOSPATIAL is a small, technical team solving large-scale spatial problems: basin monitoring, urban planning, precision agriculture, across Kenya. We're always interested in hearing from engineers, scientists, and business builders who want to work at the intersection of GIS, AI, and Earth observation.",
    roles: [["GIS / Remote Sensing Engineer","Nairobi, Kenya · Hybrid","Build and maintain satellite ingestion pipelines, geo-processing workflows, and PostGIS-backed spatial APIs for NBIS and future platforms."],["GeoAI / Machine Learning Engineer","Nairobi, Kenya · Hybrid","Develop and deploy computer vision and predictive models: change detection, NDVI analysis, object detection, across satellite and drone imagery."],["Full-Stack Developer (React / Python)","Remote · Kenya","Ship dashboards, decision APIs, and client-facing tools on our Flask/Django and React stack, working closely with our GIS engineering team."],["Business Development Associate","Nairobi, Kenya","Build relationships with government agencies, NGOs, and enterprise clients across Kenya to grow GIOSPATIAL's platform and consulting business."]],
    fit: "We're a growing team and open roles change often. If you have geospatial, AI, or software engineering experience and want to work on real infrastructure for Kenyan enterprises and governments, send us your CV and a short note about what you'd want to build."
  }
} as const;
