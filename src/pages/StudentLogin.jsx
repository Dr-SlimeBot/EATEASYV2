
import React, { useState } from 'react';
import { Mail, Lock, AlertCircle, Eye, EyeOff } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function StudentLogin() {
  const navigate = useNavigate();
  // Store what the student types in the form
 // const [formData, setFormData] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  // Toggle between showing password as text or dots
  const [showPassword, setShowPassword] = useState(false);
  const[email,setEmail]=useState("")
    const[password,setPassword]=useState("")

  const handleSubmit = async (e) => {
    e.preventDefault();
        // Basic validation to check to make sure both fields are filled
    if (!email || !password) {
      setError('Please enter both email and password');
      setLoading(false)
      return;
    }
 
            try{
            await fetch('http://localhost:5002/login',{
                method:'POST',
                headers:{
                    'Content-Type':'application/json'
                },
                body:JSON.stringify({
                    email:email,
                    password:password,
                })
            })
      
        }catch(error){
                console.log("PARI KUBHAIZIKA!!")
            }
     // Simulate login process - in real app this would be an API call
    setTimeout(() => {
    // Redirect to student dashboard after successful login
      navigate('/student/dashboard');
      setLoading(false);
    }, 1500);
    setLoading(true);
    setError('');
            
        }

   
    


  return (
    <div id='main-div' className="min-h-screen flex items-center justify-center p-4 sm:p-6 lg:p-8">
      <div style={{backgroundColor:'#fff',opacity:'0.7',borderRadius:'5px'}}>
        
        {/* Logo and Header */}
        <div className="text-center mb-6 sm:mb-8 animate-fade-in">
          <img 
            src="/Uz-logo.png"
            alt="University of Zimbabwe"
            className="h-20 sm:h-24 lg:h-28 w-auto mx-auto mb-3 sm:mb-4"
            onClick={() => navigate('/')}
            style={{cursor: 'pointer'}}
          />
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-2" style={{color: '#1e3a8a'}}>
            Student Login
          </h1>
          <p className="text-sm sm:text-base lg:text-lg" style={{color: '#4b5563'}}>
            EatEasy - University of Zimbabwe
          </p>
        </div>

        {/* Login Form - the main card*/}
        <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 lg:p-10 animate-slide-up" style={{borderTop: '4px solid #ea580c'}}>
          <div className="space-y-5 sm:space-y-6">
            
            {/* Email Input */}
            <div>
              <label className="block text-sm sm:text-base font-medium mb-2" style={{color: '#374151'}}>
                Student Email
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 sm:w-6 sm:h-6" style={{color: '#9ca3af'}} />
                <input
                  type="email"
                  value={email} 
                  onChange={(e)=>setEmail(e.target.value)}
                  placeholder="student@uz.ac.zw"
                  className="w-full pl-10 sm:pl-12 pr-4 py-3 sm:py-4 border rounded-lg outline-none transition text-sm sm:text-base"
                  style={{borderColor: '#d1d5db'}}
                  onFocus={(e) => e.target.style.borderColor = '#ea580c'}
                  onBlur={(e) => e.target.style.borderColor = '#d1d5db'}
                />
              </div>
            </div>

            {/* Password Input */}
            <div>
              <label className="block text-sm sm:text-base font-medium mb-2" style={{color: '#374151'}}>
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 sm:w-6 sm:h-6" style={{color: '#9ca3af'}} />
                <input
                value={password} 
                onChange={(e)=>setPassword(e.target.value)}
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Enter your password"
                  className="w-full pl-10 sm:pl-12 pr-12 sm:pr-14 py-3 sm:py-4 border rounded-lg outline-none transition text-sm sm:text-base"
                  style={{borderColor: '#d1d5db'}}
                  onFocus={(e) => e.target.style.borderColor = '#ea580c'}
                  onBlur={(e) => e.target.style.borderColor = '#d1d5db'}
                />
                {/**Toggle button to show/hide password */}
                <button
                  type="button"
                  onClick={handleSubmit}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2"
                  style={{color: '#9ca3af'}}
                >
                  {showPassword ? <EyeOff className="w-5 h-5 sm:w-6 sm:h-6" /> : <Eye className="w-5 h-5 sm:w-6 sm:h-6" />}
                </button>
              </div>
            </div>

            {/* Error Message - shows when something goes wrong*/}
            {error && (
              <div className="flex items-center gap-2 p-3 sm:p-4 rounded-lg animate-shake" style={{backgroundColor: '#fef2f2', color: '#dc2626'}}>
                <AlertCircle className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0" />
                <span className="text-sm sm:text-base">{error}</span>
              </div>
            )}

            {/* Submit Button */}
            <button
              onClick={handleSubmit}
              disabled={loading}
              className="w-full py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
              style={{backgroundColor: '#ea580c', color: 'white', border: 'none', cursor: 'pointer'}}
            >
              {loading ? (
                <span className="flex items-center justify-center gap-2">
                  <div className="w-5 h-5 sm:w-6 sm:h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  Logging in...
                </span>
              ) : (
                'Login'
              )}
            </button>
          </div>

          {/* Additional Links below the form */}
          <div className="mt-5 sm:mt-6 text-center space-y-3">
            <button 
              onClick={() => navigate('/forgot-password')}
              className="text-sm sm:text-base transition-colors"
              style={{color: '#1e3a8a', background: 'none', border: 'none', cursor: 'pointer'}}
              onMouseEnter={(e) => e.target.style.color = '#ea580c'}
              onMouseLeave={(e) => e.target.style.color = '#1e3a8a'}
            >
              Forgot Password?
            </button>
            <div className="pt-3 sm:pt-4" style={{borderTop: '1px solid #e5e7eb'}}>
              <p className="text-sm sm:text-base mb-2" style={{color: '#6b7280'}}>
                Login as:
              </p>
              <div className="flex gap-3 justify-center text-sm sm:text-base">
                <button onClick={() => navigate('/staff-login')} className="transition-colors" style={{color: '#1e3a8a', background: 'none', border: 'none', cursor: 'pointer'}}>Staff</button>
                <span style={{color: '#d1d5db'}}>|</span>
                <button onClick={() => navigate('/admin-login')} className="transition-colors" style={{color: '#1e3a8a', background: 'none', border: 'none', cursor: 'pointer'}}>Admin</button>
              </div>
            </div>
          </div>
        </div>

        {/* Help Text and back link*/}
        <div className="mt-5 sm:mt-6 text-center">
          <p className="text-sm sm:text-base mb-2" style={{color: '#6b7280'}}>
            New to EatEasy? Check your UZ email for login credentials.
          </p>
          <button 
            onClick={() => navigate('/')}
            className="text-sm sm:text-base font-medium transition-colors"
            style={{color: '#1e3a8a', background: 'none', border: 'none', cursor: 'pointer'}}
            onMouseEnter={(e) => e.target.style.color = '#ea580c'}
            onMouseLeave={(e) => e.target.style.color = '#1e3a8a'}
          >
            ← Back to Home
          </button>
        </div>
      </div>

      {/**Custom css animations for the page */}
      <style>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slide-up {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          25% { transform: translateX(-5px); }
          75% { transform: translateX(5px); }
        }
        .animate-fade-in { animation: fade-in 0.6s ease-out; }
        .animate-slide-up { animation: slide-up 0.6s ease-out; }
        .animate-shake { animation: shake 0.4s ease-out; }
      `}</style>
    </div>
  );
}

