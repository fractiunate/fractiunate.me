import { Button } from "@/components/ui/button"
import { Cloud, Server, GitBranch, Shield, Container, Github, Linkedin, Download, FileText, Mail, Phone, Globe, MessageCircle, ChevronLeft, ChevronRight, ArrowUp, BookOpen, Calendar, ArrowRight, FolderGit2, ArrowDown, Network, Trophy, Lightbulb } from "lucide-react"
import { useEffect, useState } from "react"
 
function App() {
  const [showBackToTop, setShowBackToTop] = useState(false)
  const [currentCard, setCurrentCard] = useState(0)
  const [currentSection, setCurrentSection] = useState(0)
  const [isCarouselPaused, setIsCarouselPaused] = useState(false)

  const sections = ['hero', 'contact', 'cv']

  const services = [
    { 
      icon: <Cloud className="w-8 h-8" />, 
      title: "Cloud Architecture",
      description: "Designing scalable and resilient cloud infrastructure on AWS and Azure. Expertise in microservices, serverless architectures, and cloud-native solutions."
    },
    { 
      icon: <Lightbulb className="w-8 h-8" />, 
      title: "Consultance",
      description: "Providing expert guidance on cloud strategy, DevOps transformation, and technical architecture. Helping teams optimize workflows and make informed technology decisions."
    },
    { 
      icon: <Server className="w-8 h-8" />, 
      title: "DevOps",
      description: "Implementing CI/CD pipelines, infrastructure as code, and automation strategies. Streamlining development workflows for faster, reliable deployments."
    },
    { 
      icon: <Container className="w-8 h-8" />, 
      title: "Containers",
      description: "Building and managing containerized applications with Docker. Optimizing container images and orchestrating multi-container environments."
    },
    { 
      icon: <GitBranch className="w-8 h-8" />, 
      title: "CI/CD",
      description: "Automating build, test, and deployment processes. Creating robust pipelines with GitHub Actions, GitLab CI and ArgoCD."
    },
    { 
      icon: <Shield className="w-8 h-8" />, 
      title: "Security",
      description: "Implementing security best practices, compliance standards, and automated security scanning. Ensuring secure infrastructure and application deployments."
    },
    { 
      icon: <Network className="w-8 h-8" />, 
      title: "Kubernetes",
      description: "Deploying and managing production-grade Kubernetes clusters. Expertise in Helm, operators, service mesh, and cloud-native ecosystem tools."
    },
    { 
      icon: <Server className="w-8 h-8" />, 
      title: "Backend",
      description: "Building robust server-side applications and APIs. Expertise in Node.js, Python, and microservices architecture for scalable backend solutions."
    },
    { 
      icon: <Trophy className="w-8 h-8" />, 
      title: "Frontend",
      description: "Creating responsive and modern web applications. Proficient in React, TypeScript, and modern frontend frameworks for exceptional user experiences."
    },
  ]

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      // Show back to top button after scrolling past the first viewport
      setShowBackToTop(scrollPosition > window.innerHeight)
      
      // Determine current section
      const viewportHeight = window.innerHeight
      const sectionIndex = Math.floor(scrollPosition / viewportHeight)
      setCurrentSection(Math.min(sectionIndex, sections.length - 1))
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [sections.length])

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isCarouselPaused) {
        setCurrentCard((prev) => (prev + 1) % services.length)
      }
    }, 5000)
    return () => clearInterval(interval)
  }, [services.length, isCarouselPaused])

  const nextCard = () => {
    setCurrentCard((prev) => (prev + 1) % services.length)
  }

  const prevCard = () => {
    setCurrentCard((prev) => (prev - 1 + services.length) % services.length)
  }

  const scrollToNextSection = () => {
    const nextSection = currentSection + 1
    if (nextSection < sections.length) {
      const element = document.getElementById(sections[nextSection])
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-x-hidden">
      {/* Navigation Buttons - Bottom Right (Desktop) */}
      <div className="hidden lg:flex fixed right-8 bottom-6 flex-col items-center gap-3 z-50">
        {/* Scroll Down Indicator / Back to Top Button - Seamless Transition */}
        <div className={`relative flex items-center justify-center transition-all duration-500 ${
          currentSection === 0 ? 'h-[140px]' : 'h-12'
        }`}>
          {/* Scroll Down Indicator - Hero Section Only (not clickable) */}
          <div className={`absolute flex flex-col items-center gap-2 pointer-events-none transition-all duration-500 ${
            currentSection === 0 ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}>
            <span className="text-slate-400 text-xs whitespace-nowrap">scroll</span>
            <span className="text-slate-400 text-xs whitespace-nowrap">down</span>
            <div className="h-8 w-px border-l-2 border-dotted border-slate-400"></div>
            <div className="w-6 h-10 border-2 border-slate-600 rounded-full flex items-start justify-center p-2 animate-bounce">
              <div className="w-1 h-2 bg-[oklch(60%_.25_330)] rounded-full"></div>
            </div>
          </div>

          {/* Back to Top Button */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className={`group relative w-12 h-12 rounded-full bg-gradient-to-r from-[oklch(60%_.25_330)] to-[oklch(65%_.25_320)] hover:from-[oklch(55%_.22_325)] hover:to-[oklch(60%_.25_320)] shadow-lg shadow-[oklch(60%_.25_330)]/30 flex items-center justify-center transition-all duration-500 ${
              showBackToTop ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'
            }`}
            aria-label="Back to top"
          >
            <ArrowUp className="w-5 h-5 text-white" />
            {/* Tooltip */}
            <span className="absolute right-full mr-3 px-3 py-1.5 bg-slate-800 border border-slate-700 rounded-md text-sm text-white whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
              Back to top
            </span>
          </button>
        </div>

        {/* Next Page Button - Same position on all sections */}
        <button
          onClick={scrollToNextSection}
          className={`group relative w-12 h-12 rounded-full bg-slate-800/80 backdrop-blur-sm border border-slate-700 hover:bg-slate-700 hover:border-[oklch(60%_.25_330)] transition-all duration-300 flex items-center justify-center shadow-lg ${
            currentSection < sections.length - 1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
          }`}
          aria-label="Next page"
        >
          <ArrowDown className="w-5 h-5 text-slate-300" />
          {/* Tooltip */}
          <span className="absolute right-full mr-3 px-3 py-1.5 bg-slate-800 border border-slate-700 rounded-md text-sm text-white whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
            Next page
          </span>
        </button>
      </div>

      {/* Navigation Buttons - Mobile Only */}
      <div className="lg:hidden fixed right-6 bottom-8 flex flex-col items-center gap-3 z-50">
        {/* Back to Top Button */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className={`w-12 h-12 rounded-full bg-gradient-to-r from-[oklch(60%_.25_330)] to-[oklch(65%_.25_320)] hover:from-[oklch(55%_.22_325)] hover:to-[oklch(60%_.25_320)] shadow-lg shadow-[oklch(60%_.25_330)]/30 flex items-center justify-center transition-all duration-300 ${
            showBackToTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
          }`}
          aria-label="Back to top"
        >
          <ArrowUp className="w-5 h-5 text-white" />
        </button>

        {/* Next Page Button */}
        <button
          onClick={scrollToNextSection}
          className={`w-12 h-12 rounded-full bg-slate-800/80 backdrop-blur-sm border border-slate-700 hover:bg-slate-700 hover:border-[oklch(60%_.25_330)] transition-all duration-300 flex items-center justify-center shadow-lg ${
            currentSection < sections.length - 1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
          }`}
          aria-label="Next page"
        >
          <ArrowDown className="w-5 h-5 text-slate-300" />
        </button>
      </div>

      {/* Social Sidebar - Desktop Only */}
      <div className="hidden lg:flex fixed right-8 top-1/2 -translate-y-1/2 flex-col gap-4 z-50">
        <a
          href="https://github.com/fractiunate"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative flex items-center justify-center w-12 h-12 rounded-full bg-slate-800/80 backdrop-blur-sm border border-slate-700 hover:bg-slate-700 hover:border-[oklch(60%_.25_330)] transition-all duration-300 hover:scale-110 shadow-lg"
          aria-label="GitHub Profile"
        >
          <Github className="w-5 h-5 text-slate-300 group-hover:text-white transition-colors" />
          {/* Tooltip */}
          <span className="absolute right-full mr-3 px-3 py-1.5 bg-slate-800 border border-slate-700 rounded-md text-sm text-white whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
            GitHub
          </span>
        </a>
        <a
          href="https://www.linkedin.com/in/fractiunate/"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative flex items-center justify-center w-12 h-12 rounded-full bg-slate-800/80 backdrop-blur-sm border border-slate-700 hover:bg-slate-700 hover:border-[oklch(60%_.25_330)] transition-all duration-300 hover:scale-110 shadow-lg"
          aria-label="LinkedIn Profile"
        >
          <Linkedin className="w-5 h-5 text-slate-300 group-hover:text-white transition-colors" />
          {/* Tooltip */}
          <span className="absolute right-full mr-3 px-3 py-1.5 bg-slate-800 border border-slate-700 rounded-md text-sm text-white whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
            LinkedIn
          </span>
        </a>
      </div>

      {/* Hero Section */}
      <div className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 pb-32">
        <div id="hero" className="max-w-4xl mx-auto text-center">
          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight mt-16 sm:mt-20 lg:mt-24">
            This is{" "}
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-[oklch(60%_.25_330)] to-[oklch(65%_.25_320)] bg-clip-text text-transparent" style={{
                WebkitTextStroke: '1px transparent',
                paintOrder: 'stroke fill'
              }}>
                FRACTIUNATE.me
              </span>
              <span className="absolute inset-0 bg-gradient-to-r from-[oklch(60%_.25_330)] to-[oklch(65%_.25_320)] bg-clip-text text-transparent" style={{
                WebkitTextStroke: '1px turquoise',
                filter: 'drop-shadow(-2px 0 3px rgba(64, 224, 208, 0.2)) drop-shadow(-1px 0 2px rgba(64, 224, 208, 0.1))',
                WebkitMaskImage: 'linear-gradient(to right, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.7) 20%, rgba(0,0,0,0) 80%)',
                maskImage: 'linear-gradient(to right, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.7) 20%, rgba(0,0,0,0) 80%)'
              }}>
                FRACTIUNATE.me
              </span>
            </span>
          </h1>
          
          {/* Subheading */}
          <p className="text-lg sm:text-xl md:text-2xl text-slate-300 mb-8 max-w-2xl mx-auto">
            Hi, I'm David. Glad you found your way to Quality Software Engineering & Cloud Architecture, made in Berlin.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <a href="#contact" className="w-full sm:w-auto">
              <Button 
                size="lg" 
                className="w-full sm:w-48 bg-gradient-to-r from-[oklch(60%_.25_330)] to-[oklch(65%_.25_320)] hover:from-[oklch(55%_.22_325)] hover:to-[oklch(60%_.25_320)] text-white border-0 shadow-lg shadow-[oklch(60%_.25_330)]/30"
              >
                Get in Touch
              </Button>
            </a>
            <a href="#cv" className="w-full sm:w-auto">
              <Button 
                size="lg" 
                variant="outline" 
                className="w-full sm:w-48 bg-transparent border-2 border-slate-600 text-white hover:bg-slate-800/50 hover:border-[oklch(60%_.25_330)] hover:text-white transition-all duration-300"
              >
                <Trophy className="w-5 h-5 mr-2" />
                My Experience
              </Button>
            </a>
            <a href="https://devops-sushi.de/" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
              <Button 
                size="lg" 
                variant="outline" 
                className="w-full sm:w-48 bg-transparent border-2 border-slate-600 text-white hover:bg-slate-800/50 hover:border-[oklch(60%_.25_330)] hover:text-white transition-all duration-300"
              >
                <BookOpen className="w-5 h-5 mr-2" />
                Read Blog
              </Button>
            </a>
          </div>

          {/* Services Carousel Wrapper */}
          <div className="relative mb-8 max-w-4xl mx-auto px-16">
            {/* Navigation Buttons - Outside Left */}
            <button
              onClick={prevCard}
              className="absolute -left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-slate-800/80 backdrop-blur-sm border border-slate-700 hover:bg-slate-700 hover:border-[oklch(60%_.25_330)] transition-all duration-300 flex items-center justify-center z-40 shadow-lg"
              aria-label="Previous service"
            >
              <ChevronLeft className="w-5 h-5 text-slate-300" />
            </button>
            {/* Navigation Buttons - Outside Right */}
            <button
              onClick={nextCard}
              className="absolute -right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-slate-800/80 backdrop-blur-sm border border-slate-700 hover:bg-slate-700 hover:border-[oklch(60%_.25_330)] transition-all duration-300 flex items-center justify-center z-40 shadow-lg"
              aria-label="Next service"
            >
              <ChevronRight className="w-5 h-5 text-slate-300" />
            </button>

            {/* Services Carousel */}
            <div className="relative h-48 perspective-1000 overflow-hidden">
              <div className="relative h-full flex items-center justify-center">
                {services.map((service, index) => {
                  const offset = (index - currentCard + services.length) % services.length
                  const isCurrent = offset === 0
                  const isNext = offset === 1
                  const isPrev = offset === services.length - 1

                  let transform = 'translateX(0) rotateY(0deg) scale(1)'
                  let opacity = 1
                  let zIndex = 0
                  let maskImage = 'none'

                  if (isCurrent) {
                    transform = 'translateX(0) scale(1)'
                    opacity = 1
                    zIndex = 30
                    maskImage = 'none'
                  } else if (isNext) {
                    transform = 'translateX(50%) scale(0.85) rotateY(-10deg)'
                    opacity = 0.4
                    zIndex = 10
                    // Fade to the right (toward outside)
                    maskImage = 'linear-gradient(to right, rgba(0,0,0,1) 0%, rgba(0,0,0,0.3) 100%)'
                  } else if (isPrev) {
                    transform = 'translateX(-50%) scale(0.85) rotateY(10deg)'
                    opacity = 0.4
                    zIndex = 10
                    // Fade to the left (toward outside)
                    maskImage = 'linear-gradient(to left, rgba(0,0,0,1) 0%, rgba(0,0,0,0.3) 100%)'
                  } else {
                    // Hide cards that are not current/next/prev
                    opacity = 0
                    zIndex = 0
                  }

                  return (
                    <div
                      key={index}
                      className="absolute inset-0 flex items-center justify-center transition-all duration-300 ease-out"
                      style={{
                        transform,
                        opacity,
                        zIndex,
                        pointerEvents: isCurrent ? 'auto' : 'none',
                        WebkitMaskImage: maskImage,
                        maskImage: maskImage,
                      }}
                      onMouseEnter={() => isCurrent && setIsCarouselPaused(true)}
                      onMouseLeave={() => isCurrent && setIsCarouselPaused(false)}
                    >
                      <div className="card-3d bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-lg p-6 w-64 sm:w-72 h-40 flex flex-col items-center justify-center hover:bg-slate-800/70 hover:border-[oklch(60%_.25_330)]/50 transition-all duration-300">
                        <div className="text-[oklch(60%_.25_330)] mb-3 transition-transform duration-300">
                          {service.icon}
                        </div>
                        <h3 className="text-white text-lg sm:text-xl font-semibold text-center">{service.title}</h3>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>

          {/* Service Description - Code Block Style */}
          <div className="mb-2 max-w-3xl mx-auto">
            <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-lg p-3 font-mono text-xs sm:text-sm">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-slate-500 select-none">$</span>
                <span className="text-[oklch(60%_.25_330)]">describe</span>
                <span className="text-slate-400">--service</span>
                <span className="text-white">{services[currentCard].title}</span>
              </div>
              <div className="pl-4 text-slate-300 leading-snug text-xs sm:text-sm">
                {services[currentCard].description}
              </div>
            </div>
          </div>

          {/* Indicators */}
          <div className="flex justify-center gap-2 mt-6">
            {services.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentCard(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentCard 
                    ? 'bg-[oklch(60%_.25_330)] w-8' 
                    : 'bg-slate-600 hover:bg-slate-500'
                }`}
                aria-label={`Go to ${services[index].title}`}
              />
            ))}
          </div>

          {/* Social Links - Mobile Only */}
          <div className="flex lg:hidden gap-4 justify-center items-center mt-12">
            <a
              href="https://github.com/fractiunate"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center w-12 h-12 rounded-full bg-slate-800/50 border border-slate-700 hover:bg-slate-700 hover:border-[oklch(60%_.25_330)] transition-all duration-300 hover:scale-110"
              aria-label="GitHub Profile"
            >
              <Github className="w-5 h-5 text-slate-300 group-hover:text-white transition-colors" />
            </a>
            <a
              href="https://www.linkedin.com/in/fractiunate/"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center w-12 h-12 rounded-full bg-slate-800/50 border border-slate-700 hover:bg-slate-700 hover:border-[oklch(60%_.25_330)] transition-all duration-300 hover:scale-110"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-5 h-5 text-slate-300 group-hover:text-white transition-colors" />
            </a>
          </div>
        </div>

          {/* Current Work Status */}
          {/* <div className="flex justify-center mt-16">
            <div className="inline-flex items-center gap-2 bg-slate-800/50 border border-slate-700 rounded-full px-6 py-3">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <p className="text-sm sm:text-base text-slate-300">
                Currently working for <span className="text-white font-semibold">GEBIT Solutions GmbH</span>
              </p>
            </div>
          </div> */}
      </div>

      {/* Contact Section */}
      <div id="contact" className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-4xl mx-auto w-full">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              Get in Touch
            </h2>
            <p className="text-slate-300 text-lg">
              Let's discuss your next project or collaboration
            </p>
          </div>

          {/* Contact Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {/* Name Card */}
            <div className="bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-lg p-6 hover:bg-slate-800/50 hover:border-[oklch(60%_.25_330)]/50 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-[oklch(60%_.25_330)]/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-[oklch(60%_.25_330)]" />
                </div>
                <div className="flex-1">
                  <h3 className="text-white font-semibold mb-2">Email</h3>
                  <a 
                    href="mailto:d.rahaeuser@gmail.com"
                    className="text-slate-300 hover:text-[oklch(60%_.25_330)] transition-colors"
                  >
                    d.rahaeuser@gmail.com
                  </a>
                </div>
              </div>
            </div>

            {/* Phone Card */}
            <div className="bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-lg p-6 hover:bg-slate-800/50 hover:border-[oklch(60%_.25_330)]/50 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-[oklch(60%_.25_330)]/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-[oklch(60%_.25_330)]" />
                </div>
                <div className="flex-1">
                  <h3 className="text-white font-semibold mb-2">Mobile</h3>
                  <a 
                    href="tel:+4915209261143"
                    className="text-slate-300 hover:text-[oklch(60%_.25_330)] transition-colors"
                  >
                    +49 152 0926 1143
                  </a>
                </div>
              </div>
            </div>

            {/* Website Card */}
            <div className="bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-lg p-6 hover:bg-slate-800/50 hover:border-[oklch(60%_.25_330)]/50 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-[oklch(60%_.25_330)]/10 flex items-center justify-center flex-shrink-0">
                  <Globe className="w-6 h-6 text-[oklch(60%_.25_330)]" />
                </div>
                <div className="flex-1">
                  <h3 className="text-white font-semibold mb-2">Website</h3>
                  <a 
                    href="https://fractiunate.me"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-300 hover:text-[oklch(60%_.25_330)] transition-colors"
                  >
                    fractiunate.me
                  </a>
                </div>
              </div>
            </div>

            {/* WhatsApp Card */}
            <div className="bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-lg p-6 hover:bg-slate-800/50 hover:border-[oklch(60%_.25_330)]/50 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-[oklch(60%_.25_330)]/10 flex items-center justify-center flex-shrink-0">
                  <MessageCircle className="w-6 h-6 text-[oklch(60%_.25_330)]" />
                </div>
                <div className="flex-1">
                  <h3 className="text-white font-semibold mb-2">WhatsApp</h3>
                  <a 
                    href="https://wa.me/4915209261143"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-300 hover:text-[oklch(60%_.25_330)] transition-colors"
                  >
                    Contact me
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* CV Section */}
      <div id="cv" className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-6xl mx-auto w-full">
          {/* Section Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-3 mb-4">
              <FileText className="w-8 h-8 text-[oklch(60%_.25_330)]" />
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
                Curriculum Vitae
              </h2>
            </div>
            <p className="text-slate-300 text-lg">
              Download or view my professional experience and qualifications
            </p>
          </div>

          {/* Download Button */}
          <div className="flex justify-center mb-8">
            <a href="/cv.pdf" download="Fractiunate_CV.pdf">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-[oklch(60%_.25_330)] to-[oklch(65%_.25_320)] hover:from-[oklch(55%_.22_325)] hover:to-[oklch(60%_.25_320)] text-white border-0 shadow-lg shadow-[oklch(60%_.25_330)]/30"
              >
                <Download className="w-5 h-5 mr-2" />
                Download CV
              </Button>
            </a>
          </div>

          {/* PDF Viewer */}
          <div className="bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-lg overflow-hidden shadow-2xl">
            <div className="aspect-[8.5/11] w-full">
              <iframe
                src="/cv.pdf"
                className="w-full h-full"
                title="Curriculum Vitae"
              />
            </div>
          </div>

          {/* Fallback message for mobile or if PDF doesn't load */}
          <p className="text-center text-slate-400 text-sm mt-6">
            If the PDF doesn't display, you can{" "}
            <a 
              href="/cv.pdf" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[oklch(60%_.25_330)] hover:underline"
            >
              open it in a new tab
            </a>
            {" "}or download it using the button above.
          </p>
        </div>
      </div>
    </div>
  )
}

// Service Card Component
function ServiceCard({ icon, title }: { icon: React.ReactNode; title: string }) {
  return (
    <div className="group bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-lg p-4 sm:p-6 hover:bg-slate-800/50 hover:border-[oklch(60%_.25_330)]/50 transition-all duration-300 hover:scale-105">
      <div className="text-[oklch(60%_.25_330)] mb-2 group-hover:scale-110 transition-transform duration-300 flex justify-center">
        {icon}
      </div>
      <h3 className="text-white text-sm sm:text-base font-medium">{title}</h3>
    </div>
  )
}
 
export default App