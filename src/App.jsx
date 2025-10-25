import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Mail, ExternalLink, ChevronDown } from 'lucide-react';
import youtubeimg from './assets/images/banner_youtube.jpg';
import olympicsimg from './assets/images/olympics.jpg';
import leagueimg from './assets/images/league-of-legends.jpg';
import tvfsimg from './assets/images/TVFs.jpg';
import codeimg from './assets/images/codebanner.jpg';
import jsonimg from './assets/images/introjsonfunctions.jpg';
import locilocimg from './assets/images/lociloc.png';
import tenonelinersimg from './assets/images/10oneliners.png';

const Portfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('about');

  const projects = [
    {
      title: "Spotify Track Analysis",
      image: "https://images.unsplash.com/photo-1614680376593-902f74cf0d41?w=800&h=500&fit=crop",
      description: "An analysis of my Spotify liked songs playlist!",
      tools: "Python, Spotify API, Plotly, Streamlit",
      link: "https://github.com/zachmort/Spotify_Project"
    },
    {
      title: "YouTube Analysis",
      image: youtubeimg,
      description: "A brief analysis of one of my most-watched YouTube channels!",
      tools: "Python, YouTube API",
      link: "https://github.com/zachmort/youtube_analytics"
    },
    {
      title: "League of Legends ML Project",
      image: leagueimg,
      description: "Using Logistic Regression to uncover which factors have the highest impact on winning a LoL match.",
      tools: "RStudio",
      link: "https://github.com/zachmort/League-of-Legends-Data-Analysis"
    },
    {
      title: "Covid-19 Data Analysis",
      image: "https://images.unsplash.com/photo-1584118624012-df056829fbd0?w=800&h=500&fit=crop",
      description: "Using SQL to gain real insights on the current state of the virus around the world.",
      tools: "SQL, Tableau",
      link: "https://github.com/zachmort/SQL-Covid-Project"
    },
    {
      title: "Olympic Data Analysis",
      image: olympicsimg,
      description: "Analyzing historical Olympics records by Country, Gender, Year, and more.",
      tools: "RStudio",
      link: "https://github.com/zachmort/Olympics-data-analysis-and-visualization"
    },
    {
      title: "College Data Analysis",
      image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800&h=500&fit=crop",
      description: "Exploring revenue, graduation rates, and more from a dataset with over 2,400 variables.",
      tools: "SQL, RStudio, Tableau",
      link: "https://github.com/zachmort/College-Scorecard-Data"
    }
  ];

  const blogPosts = [
    {
      title: "Getting Started with Python",
      image: "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=800&h=500&fit=crop",
      link: "https://medium.com/@zach.mortenson7/getting-started-with-python-270853b620cb"
    },
    {
      title: "A Guide to BigQuery Table Functions (TVFs)",
      image: tvfsimg,
      link: "https://medium.com/@zach.mortenson7/a-guide-to-bigquery-table-functions-tvfs-937889c0ff04"
    },
    {
      title: "Logical Processing and Execution of SQL Queries",
      image: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=800&h=500&fit=crop",
      link: "https://medium.com/@zach.mortenson7/logical-processing-and-execution-of-sql-queries-30be8e815eab"
    },
    {
      title: "Introduction to BigQuery JSON Functions",
      image: jsonimg,
      link: "https://medium.com/@zach.mortenson7/introduction-to-bigquery-json-functions-7106b9a17780"
    },
    {
      title: "10 Essential Python One-Liners That You'll Actually Use",
      image: tenonelinersimg,
      link: "https://medium.com/@zach.mortenson7/10-essential-python-one-liners-that-youll-actually-use-543fd97b3bbc"
    },
    {
      title: "Python Introduction to .loc and .iloc",
      image: locilocimg,
      link: "https://medium.com/@zach.mortenson7/python-introduction-to-loc-and-iloc-9160fe374a4b"
    }
  ];

  // const skills = [
  //   { name: "Esports Analytics", icon: "🎮" },
  //   { name: "Sports Analytics", icon: "🏀" },
  //   { name: "Data Mining", icon: "⚡" },
  //   { name: "Machine Learning", icon: "💻" }
  // ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'blog', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-xl font-bold text-slate-900">Zachary Mortenson</div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {['about', 'blog', 'projects', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`capitalize transition-colors ${
                    activeSection === section
                      ? 'text-blue-600 font-medium'
                      : 'text-slate-600 hover:text-blue-600'
                  }`}
                >
                  {section}
                </button>
              ))}
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-slate-100"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-4 py-2 space-y-1">
              {['about', 'experience', 'blog', 'projects', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`block w-full text-left px-4 py-2 rounded-lg capitalize ${
                    activeSection === section
                      ? 'bg-blue-50 text-blue-600'
                      : 'text-slate-600 hover:bg-slate-50'
                  }`}
                >
                  {section === 'experience' ? 'Skills' : section}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="about" className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block px-4 py-1 bg-blue-50 text-blue-600 rounded-full text-sm font-medium mb-4">
                Data Analyst
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 mb-6">
                Hi, I'm Zach
              </h1>
              <p className="text-lg text-slate-600 mb-4">
              Senior BI Engineer • 5+ years turning data into decisions
              </p>
              <p className="text-slate-600 mb-8">
              I build clean, reusable analytics pipelines, automate repetitive workflows with Python, and surface insights that stick—lately across esports, healthcare, and NBA analytics.
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                <a
                  href="https://raw.githubusercontent.com/zachmort/zachmort.github.io/main/Zachary_Mortenson_Resume.pdf"
                  download
                  className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Download Resume
                </a>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="px-6 py-3 border-2 border-slate-300 text-slate-700 rounded-lg hover:border-blue-600 hover:text-blue-600 transition-colors"
                >
                  Get in Touch
                </button>
              </div>
              <div className="flex gap-4">
                <a href="https://www.linkedin.com/in/zachary-mortenson-8923b4152/" 
                   className="p-2 text-slate-600 hover:text-blue-600 transition-colors"
                   target="_blank" rel="noopener noreferrer">
                  <Linkedin size={24} />
                </a>
                <a href="https://github.com/zachmort"
                   className="p-2 text-slate-600 hover:text-blue-600 transition-colors"
                   target="_blank" rel="noopener noreferrer">
                  <Github size={24} />
                </a>
                <a href="mailto:zach.mortenson7@gmail.com"
                   className="p-2 text-slate-600 hover:text-blue-600 transition-colors">
                  <Mail size={24} />
                </a>
              </div>
            </div>
            <div className="relative">
            <div className="relative">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-blue-100 to-blue-50 flex items-center justify-center text-6xl">
              <img
              src={codeimg}
              alt="Data visualization"
              className="aspect-square w-full rounded-2xl object-cover"
            />
              </div>
              <div className="absolute -bottom-4 -right-4 px-6 py-3 bg-white rounded-lg shadow-lg">…quote…</div>
            </div>
              <div className="absolute -bottom-4 -right-4 px-6 py-3 bg-white rounded-lg shadow-lg">
                <p className="text-sm text-slate-600">
                  "The world is one big data problem"
                </p>
                <p className="text-xs text-slate-400 mt-1">- Andrew McAfee</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      {/* <section id="experience" className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">
            Interests & Experience
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <div key={index} className="p-6 bg-slate-50 rounded-xl hover:shadow-md transition-shadow">
                <div className="text-4xl mb-4">{skill.icon}</div>
                <h3 className="font-semibold text-slate-900">{skill.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Blog Section */}
      <section id="blog" className="py-9 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Blog</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Articles on a wide range of data analytics topics over on Medium.com
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {blogPosts.map((post, index) => (
              <a
                key={index}
                href={post.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all"
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-semibold text-slate-900 group-hover:text-blue-600 transition-colors">
                    {post.title}
                  </h3>
                  <div className="mt-4 flex items-center text-blue-600">
                    <span className="text-sm">Read more</span>
                    <ExternalLink size={16} className="ml-2" />
                  </div>
                </div>
              </a>
            ))}
          </div>
          <div className="text-center">
            <a
              href="https://medium.com/@zach.mortenson7"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition-colors"
            >
              View All Articles
              <ExternalLink size={18} className="ml-2" />
            </a>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Projects</h2>
            <p className="text-slate-600">A showcase of my personal projects</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
            {projects.map((project, index) => (
              <a
                key={index}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-slate-50 rounded-xl overflow-hidden hover:shadow-xl transition-all"
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-semibold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-slate-600 mb-3">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tools.split(', ').map((tool, i) => (
                      <span key={i} className="text-xs px-2 py-1 bg-blue-50 text-blue-600 rounded">
                        {tool}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center text-blue-600">
                    <span className="text-sm">View Project</span>
                    <ExternalLink size={16} className="ml-2" />
                  </div>
                </div>
              </a>
            ))}
          </div>
          <div className="text-center">
            <a
              href="https://github.com/zachmort?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition-colors"
            >
              View Full Portfolio
              <Github size={18} className="ml-2" />
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Get In Touch</h2>
          <p className="text-slate-600 mb-8">
            Feel free to reach out for collaborations or just a friendly chat!
          </p>
          <div className="bg-white rounded-xl p-8 shadow-sm">
            <div className="space-y-4">
              <div className="flex items-center justify-center gap-3">
                <Mail className="text-blue-600" size={20} />
                <a href="mailto:zach.mortenson7@gmail.com" className="text-slate-900 hover:text-blue-600">
                  zach.mortenson7@gmail.com
                </a>
              </div>
            </div>
            <div className="flex justify-center gap-4 mt-8">
              <a href="https://www.linkedin.com/in/zachary-mortenson-8923b4152/" 
                 className="p-3 bg-slate-100 rounded-lg hover:bg-blue-50 hover:text-blue-600 transition-colors"
                 target="_blank" rel="noopener noreferrer">
                <Linkedin size={24} />
              </a>
              <a href="https://github.com/zachmort"
                 className="p-3 bg-slate-100 rounded-lg hover:bg-blue-50 hover:text-blue-600 transition-colors"
                 target="_blank" rel="noopener noreferrer">
                <Github size={24} />
              </a>
              <a href="mailto:zach.mortenson7@gmail.com"
                 className="p-3 bg-slate-100 rounded-lg hover:bg-blue-50 hover:text-blue-600 transition-colors">
                <Mail size={24} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 bg-slate-900 text-white text-center">
      </footer>
    </div>
  );
};

export default Portfolio;