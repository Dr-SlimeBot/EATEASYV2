import React, { useState, useEffect } from 'react';
import { Camera, Clock, Bell, CheckCircle, Users, Smartphone, ChevronDown } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function Welcome() {
  const navigate = useNavigate();
  // This tracks kuti user wedu a scroller down here - used to change style yenavbar redu
  const [scrolled, setScrolled] = useState(false);

  //This runs when the component loads and handles scroll effects
  useEffect(() => {
    const handleScroll = () => {
      //If scrolled more than 20px,change navbar appearance
      setScrolled(window.scrollY > 20);
      
      //This makes sectons fade in as you scroll to them
      const elements = document.querySelectorAll('.fade-in-section');
      elements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight * 0.8;
        if (isVisible) {
          el.classList.add('is-visible');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    //Iyi ingori clean up- remove event listener when component unmounts
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Smooth scroll to different sections on the page
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 100; // Account for fixed navbar so we don't scroll under it
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="min-h-screen overflow-hidden" style={{background: 'linear-gradient(to bottom, #eff6ff, #ffffff)'}}>
      {/**Macustom css animations nestyles ari kutangira apa */}
      <style>{`
        * { color-scheme: light; }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
        .fade-in-section {
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 0.8s ease-out, transform 0.8s ease-out;
        }
        .fade-in-section.is-visible {
          opacity: 1;
          transform: translateY(0);
        }
        .hero-text { animation: fadeIn 1s ease-out; }
        .hero-subtitle { animation: fadeIn 1.2s ease-out; }
        .hero-buttons { animation: fadeIn 1.4s ease-out; }
        .bounce-arrow { animation: bounce 2s infinite; }
        .float-icon { animation: float 3s ease-in-out infinite; }
        .card-hover {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          background: white !important;
          will-change: transform;
        }
        .card-hover:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.12);
        }
        .button-hover {
          transition: all 0.3s ease;
          will-change: transform;
        }
        .button-hover:hover {
          transform: scale(1.05);
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
        }
        .dropdown-link {
          transition: background-color 0.2s ease;
        }
        .dropdown-link:hover {
          background-color: #fff7ed !important;
        }
        .gradient-text {
          background: linear-gradient(135deg, #ea580c 0%, #f97316 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .pulse-button { animation: pulse 2s infinite; }
        @keyframes pulse {
          0%, 100% { box-shadow: 0 0 0 0 rgba(234, 88, 12, 0.7); }
          50% { box-shadow: 0 0 0 20px rgba(234, 88, 12, 0); }
        }
        .icon-rotate { transition: transform 0.3s ease; }
        .icon-rotate:hover { transform: rotate(12deg); }
        .icon-scale { transition: transform 0.3s ease; }
        .icon-scale:hover { transform: scale(1.15); }
        .nav-dropdown {
          opacity: 0;
          visibility: hidden;
          transform: translateY(-10px);
          transition: all 0.3s ease;
        }
        .nav-dropdown-parent:hover .nav-dropdown {
          opacity: 1;
          visibility: visible;
          transform: translateY(0);
        }
      `}</style>

      {/* Navigation */}
      <nav className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'shadow-lg' : ''}`} 
           style={{backgroundColor: scrolled ? 'white' : 'rgba(255, 255, 255, 0.9)', backdropFilter: 'blur(10px)'}}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/**Logo nebrand name */}
            <div className="flex items-center gap-4">
              <img 
                src="/Uz-logo.png" 
                alt="University of Zimbabwe" 
                className="icon-scale"
                style={{height: '100px', width: 'auto', cursor: 'pointer'}}
                onClick={() => navigate('/')}
              />
              <div>
                <span className="text-5xl font-bold block" style={{cursor: 'pointer'}} onClick={() => navigate('/')}>
                  <span style={{color: '#1e3a8a'}}>Eat</span>
                  <span style={{color: '#ea580c'}}>Easy</span>
                </span>
              </div>
            </div>
           {/**Login dropdown button redu */}
            <div className="flex gap-4 items-center">
              <div className="relative nav-dropdown-parent">
                <button className="button-hover px-6 py-3 rounded-lg font-medium flex items-center gap-2" 
                        style={{backgroundColor: '#ea580c', color: 'white', border: 'none', cursor: 'pointer'}}>
                  Login
                  <ChevronDown className="w-4 h-4" />
                </button>
               {/**Dropdown menu redu richashower student-login,staff-login and admin-login if we hover on it */}
                <div className="nav-dropdown absolute right-0 mt-2 w-48 rounded-lg shadow-xl z-50 border" 
                     style={{backgroundColor: 'white', borderColor: '#e5e7eb'}}>
                  <button onClick={() => navigate('/student-login')} 
                          className="dropdown-link block w-full text-left px-4 py-3 border-b" 
                          style={{color: '#1e3a8a', borderColor: '#f3f4f6', background: 'none', border: 'none', borderBottom: '1px solid #f3f4f6', cursor: 'pointer'}}>
                    Student Login
                  </button>
                  <button onClick={() => navigate('/staff-login')} 
                          className="dropdown-link block w-full text-left px-4 py-3 border-b" 
                          style={{color: '#1e3a8a', borderColor: '#f3f4f6', background: 'none', border: 'none', borderBottom: '1px solid #f3f4f6', cursor: 'pointer'}}>
                    Staff Login
                  </button>
                  <button onClick={() => navigate('/admin-login')} 
                          className="dropdown-link block w-full text-left px-4 py-3 rounded-b-lg" 
                          style={{color: '#1e3a8a', background: 'none', border: 'none', cursor: 'pointer'}}>
                    Admin Login
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section - the main banner at the top */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative">
        <div className="text-center">
          <div className="mb-6 flex justify-center">
            <div className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium" 
                 style={{backgroundColor: '#dbeafe', color: '#1e3a8a'}}>
              <span className="w-2 h-2 rounded-full animate-pulse" style={{backgroundColor: '#ea580c'}}></span>
              University of Zimbabwe Official Meal Booking System
            </div>
          </div>
          {/**Main heading */}
          <h1 className="hero-text text-5xl sm:text-6xl font-bold mb-6" style={{color: '#1e3a8a'}}>
            Skip the Line,
            <span className="gradient-text block mt-2">Enjoy Your Time</span>
          </h1>
          {/**Subtitle */}
          <p className="hero-subtitle text-xl mb-8 max-w-2xl mx-auto" style={{color: '#4b5563', lineHeight: '1.8'}}>
            Book your meal slot in advance, get real-time queue updates, and breeze through the dining hall with our smart QR code system.
          </p>
          {/**Call to action buttons(login to book ne learn more buttons edu) */}
          <div className="hero-buttons flex gap-4 justify-center flex-wrap">
            <button onClick={() => navigate('/student-login')} 
                    className="pulse-button button-hover px-8 py-4 rounded-lg text-lg font-semibold" 
                    style={{backgroundColor: '#ea580c', color: 'white', border: 'none', cursor: 'pointer'}}>
              Login to Book
            </button>
            <button onClick={() => scrollToSection('why-choose')} 
                    className="button-hover px-8 py-4 rounded-lg text-lg font-semibold border-2" 
                    style={{backgroundColor: 'white', color: '#1e3a8a', borderColor: '#1e3a8a', cursor: 'pointer'}}>
              Learn More
            </button>
          </div>
          {/**Small note at bottom */}
          <p className="mt-6 text-sm" style={{color: '#6b7280'}}>
            <span className="inline-flex items-center gap-2">
              <span className="w-2 h-2 rounded-full" style={{backgroundColor: '#ea580c'}}></span>
              New to EatEasy? Check your UZ email for login credentials
            </span>
          </p>
          {/**Animated arrow that bounces to encourage scrolling */}
          <div className="mt-16 bounce-arrow" style={{cursor: 'pointer'}} onClick={() => scrollToSection('why-choose')}>
            <ChevronDown className="w-10 h-10 mx-auto" style={{color: '#ea580c'}} />
          </div>
        </div>
      </section>

      {/* Why Choose Us Section - shows benefits */}
      <section id="why-choose" className="py-20" style={{backgroundColor: 'white'}}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 fade-in-section">
            <h2 className="text-4xl font-bold mb-4" style={{color: '#1e3a8a'}}>Why Choose EatEasy?</h2>
            <p className="text-lg" style={{color: '#4b5563'}}>Making campus dining stress-free and efficient</p>
          </div>
          {/**Grid of feature cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Clock, title: 'Save Time', desc: 'Book your slot in advance and skip the long waiting lines during peak hours', bg: '#dbeafe', color: '#1e3a8a' },
              { icon: Bell, title: 'Stay Updated', desc: 'Get real-time notifications about your queue position via WhatsApp, SMS or email', bg: '#ffedd5', color: '#ea580c' },
              { icon: Users, title: 'Skip Crowds', desc: 'No more crowded dining halls. Know exactly when to arrive for your meal', bg: '#dbeafe', color: '#1e3a8a' },
              { icon: CheckCircle, title: 'Simple Process', desc: 'Book, receive your QR code, show it at the counter, and collect your meal', bg: '#ffedd5', color: '#ea580c' }
            ].map((item, idx) => (
              <div key={idx} className="fade-in-section card-hover text-center p-6 rounded-xl" 
                   style={{backgroundColor: 'white', borderTop: '4px solid #ea580c', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.07)'}}>
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-4 float-icon" 
                     style={{backgroundColor: item.bg, animationDelay: `${idx * 0.5}s`}}>
                  <item.icon className="w-8 h-8" style={{color: item.color}} />
                </div>
                <h3 className="text-xl font-semibold mb-3" style={{color: '#1e3a8a'}}>{item.title}</h3>
                <p style={{color: '#4b5563', lineHeight: '1.6'}}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section - explains the process*/}
      <section id="how-it-works" className="py-20" style={{background: 'linear-gradient(to bottom, white, #eff6ff)'}}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 fade-in-section">
            <h2 className="text-4xl font-bold mb-4" style={{color: '#1e3a8a'}}>How It Works</h2>
            <p className="text-lg" style={{color: '#4b5563'}}>Three simple steps to hassle-free dining</p>
          </div>
          {/**Three step process cards */}
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { num: 1, icon: Smartphone, title: 'Book Your Slot', desc: 'Choose your preferred meal time from available slots. Select breakfast, lunch, or dinner based on your schedule.', color: '#fed7aa' },
              { num: 2, icon: Camera, title: 'Get Your QR Code', desc: 'Receive a unique QR code instantly. Track your queue position in real-time and get notified when it\'s your turn.', color: '#bfdbfe' },
              { num: 3, icon: CheckCircle, title: 'Show & Collect', desc: 'Arrive at your time slot, show your QR code to staff, and collect your meal. No waiting, no hassle!', color: '#fed7aa' }
            ].map((item) => (
              <div key={item.num} className="fade-in-section card-hover p-8 rounded-xl" 
                   style={{backgroundColor: 'white', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.07)'}}>
                <div className="icon-rotate w-12 h-12 rounded-full flex items-center justify-center text-2xl font-bold mb-4" 
                     style={{backgroundColor: '#ea580c', color: 'white'}}>{item.num}</div>
                <h3 className="text-2xl font-semibold mb-3" style={{color: '#1e3a8a'}}>{item.title}</h3>
                <p className="mb-6" style={{color: '#4b5563', lineHeight: '1.7'}}>{item.desc}</p>
                <item.icon className="icon-scale w-16 h-16 ml-auto" style={{color: item.color}} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Us Section - tells the story*/}
      <section id="about" className="py-20" style={{backgroundColor: 'white'}}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="fade-in-section text-4xl font-bold mb-6" style={{color: '#1e3a8a'}}>About EatEasy</h2>
          <p className="fade-in-section text-lg leading-relaxed mb-6" style={{color: '#374151', lineHeight: '1.8'}}>
            EatEasy is designed to revolutionize dining at the University of Zimbabwe by eliminating long queues and wait times. 
            Our smart meal queue management system helps students, staff, and administrators create a more efficient and enjoyable dining experience.
          </p>
          <p className="fade-in-section text-lg leading-relaxed mb-12" style={{color: '#374151', lineHeight: '1.8'}}>
            Built by students, for students, we understand the challenges of busy campus life. 
            With EatEasy, you can plan your meals around your schedule, not the other way around.
          </p>
          {/**Stats section */}
          <div className="mt-12 grid grid-cols-3 gap-8">
            {[
              { num: '1000+', label: 'Active Students' },
              { num: '5000+', label: 'Meals Booked' },
              { num: '30min', label: 'Average Time Saved' }
            ].map((stat, idx) => (
              <div key={idx} className="fade-in-section">
                <div className="text-5xl font-bold mb-2" style={{color: '#ea580c'}}>{stat.num}</div>
                <div className="text-base" style={{color: '#4b5563'}}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - final call to action*/}
      <section className="py-20 relative overflow-hidden" style={{background: 'linear-gradient(to right, #1e3a8a, #1e40af)'}}>
       {/**Background decorative elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-72 h-72 rounded-full blur-3xl" style={{backgroundColor: '#ea580c'}}></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full blur-3xl" style={{backgroundColor: 'white'}}></div>
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="fade-in-section text-4xl font-bold mb-6" style={{color: 'white'}}>
            Ready to Transform Your Dining Experience?
          </h2>
          <p className="fade-in-section text-xl mb-10" style={{color: '#bfdbfe', lineHeight: '1.7'}}>
            Join thousands of UZ students who are already enjoying hassle-free meals
          </p>
          <button onClick={() => navigate('/student-login')} 
                  className="fade-in-section button-hover px-10 py-4 rounded-lg text-lg font-semibold" 
                  style={{backgroundColor: '#ea580c', color: 'white', border: 'none', cursor: 'pointer'}}>
            Login Now
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12" style={{backgroundColor: '#172554', color: 'white'}}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            {/**Brand section */}
            <div className="fade-in-section">
              <div className="flex items-center gap-3 mb-4">
                <img src="/Eat-logo.png" alt="EatEasy" style={{height: '100px', width: 'auto'}} />
              </div>
              <p style={{color: '#9ca3af', lineHeight: '1.6'}}>Making campus dining simple and efficient</p>
            </div>
           {/**Quick links */}
            <div className="fade-in-section">
              <h4 className="font-semibold mb-4" style={{color: '#f97316'}}>Quick Links</h4>
              <ul className="space-y-2" style={{color: '#9ca3af'}}>
                <li><button onClick={() => navigate('/')} style={{background: 'none', border: 'none', padding: 0, color: '#9ca3af', cursor: 'pointer'}}>Home</button></li>
                <li><button onClick={() => scrollToSection('about')} style={{background: 'none', border: 'none', padding: 0, color: '#9ca3af', cursor: 'pointer'}}>About Us</button></li>
                <li><button onClick={() => scrollToSection('how-it-works')} style={{background: 'none', border: 'none', padding: 0, color: '#9ca3af', cursor: 'pointer'}}>How It Works</button></li>
                <li><button onClick={() => window.location.href = 'mailto:support@eateasy.uz.ac.zw'} style={{background: 'none', border: 'none', padding: 0, color: '#9ca3af', cursor: 'pointer'}}>Contact</button></li>
              </ul>
            </div>
            {/**Contact info */}
            <div className="fade-in-section">
              <h4 className="font-semibold mb-4" style={{color: '#f97316'}}>For Users</h4>
              <ul className="space-y-2" style={{color: '#9ca3af'}}>
                <li><button onClick={() => navigate('/student-login')} style={{background: 'none', border: 'none', padding: 0, color: '#9ca3af', cursor: 'pointer'}}>Student Login</button></li>
                <li><button onClick={() => navigate('/staff-login')} style={{background: 'none', border: 'none', padding: 0, color: '#9ca3af', cursor: 'pointer'}}>Staff Login</button></li>
                <li><button onClick={() => navigate('/admin-login')} style={{background: 'none', border: 'none', padding: 0, color: '#9ca3af', cursor: 'pointer'}}>Admin Login</button></li>
                <li><button onClick={() => window.location.href = 'mailto:support@eateasy.uz.ac.zw'} style={{background: 'none', border: 'none', padding: 0, color: '#9ca3af', cursor: 'pointer'}}>Support</button></li>
              </ul>
            </div>
            <div className="fade-in-section">
              <h4 className="font-semibold mb-4" style={{color: '#f97316'}}>Contact Us</h4>
              <ul className="space-y-2" style={{color: '#9ca3af', lineHeight: '1.8'}}>
                <li>support@eateasy.uz.ac.zw</li>
                <li>Mount Pleasant, Harare</li>
                <li>University of Zimbabwe</li>
              </ul>
            </div>
          </div>
          {/**Copyright */}
          <div className="mt-8 pt-8 text-center" style={{borderTop: '1px solid #1e40af', color: '#9ca3af'}}>
            <p>&copy; 2025 EatEasy - University of Zimbabwe. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}