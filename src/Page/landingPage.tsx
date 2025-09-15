import { BackgroundGradient } from '@/components/ui/background-gradient';
import { IconArrowAutofitContent, IconArrowRight } from '@tabler/icons-react';
import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
// Import required components (you'll need to create these)
// import { Button } from '@/components/ui/button';
// import { Card } from '@/components/ui/card';
// import { Badge } from '@/components/ui/badge';
// import { LanguageSelector } from '@/components/language/language-selector';
// import { VideoPreview } from '@/components/video/video-preview';
// import { TestimonialCard } from '@/components/testimonial/testimonial-card';



const PreLoginLanding = () => {
  const router = useRouter()
  const features = [
    {
      icon: '📹',
      title: 'Video Consultations',
      description: 'Connect with qualified doctors through secure video calls in your preferred language',
      highlight: 'Multilingual Support',
      link:'/consult'
    },
    {
      icon: '📱',
      title: 'Offline Health Records',
      description: 'Access your medical records even without internet connection in rural areas',
      highlight: 'Works Offline',
      link:'records'
    },
    {
      icon: '💊',
      title: 'Medicine Availability',
      description: 'Real-time updates on medicine stock at local pharmacies near you',
      highlight: 'Local Pharmacy Network',
      link:'/medicines'
    },
    {
      icon: '🤖',
      title: 'AI Symptom Checker',
      description: 'Get instant preliminary health assessment powered by AI technology',
      highlight: 'AI-Powered',
      link:'/chatbot'
    }
  ];

 
  const testimonials = [
    {
      name: 'Rajesh Kumar',
      location: 'Rural Maharashtra',
      text: 'This app helped me consult with a specialist doctor without traveling 50km to the city. The Hindi interface made it so easy!',
      rating: 5
    },
    {
      name: 'Sunita Devi',
      location: 'Village in Bihar',
      text: 'I could access my health records even when there was no internet. The offline feature is a lifesaver!',
      rating: 5
    },
    {
      name: 'Vikram Patel',
      location: 'Gujarat Village',
      text: 'Found my medicine at a nearby pharmacy through this app. Saved me hours of searching!',
      rating: 5
    }
  ];

  const stats = [
    { number: '50,000+', label: 'Patients Served' },
    { number: '500+', label: 'Doctors Available' },
    { number: '1,200+', label: 'Pharmacies Connected' },
    { number: '15+', label: 'Languages Supported' }
  ];

  return (
    <div className="min-h-screen text-white">
      {/* Header */}
     

      {/* Hero Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-gray-900 dark:text-primary mb-6">
              Healthcare Access for 
              <span className="text-blue-600"> Rural India</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Connect with qualified doctors, access your health records offline, and find medicines locally - 
              all in your preferred language, designed for rural communities.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={()=>{router.push('/signup')}}
                className="px-8 py-4 bg-blue-600 cursor-pointer text-white text-lg font-semibold rounded-lg hover:bg-blue-700 transition-colors shadow-lg"
              >
                Get Started Free
              </button>
              <button className="px-8 cursor-pointer py-4 border-2 border-blue-600 text-blue-600 text-lg font-semibold rounded-lg hover:bg-gray-100 transition-colors">
                Watch Demo
              </button>
            </div>
          </div>

          {/* Hero Video/Image Placeholder */}
          <div className="max-w-4xl  mx-auto">
            <div className=" rounded-2xl p-8">
              <div className="aspect-video bg-gray-200 rounded-xl flex items-center dark:bg-gray-700 justify-center">
                <div className="text-center ">
                  <div className="text-6xl mb-4">📱</div>
                  <p className="dark:text-primary text-black text-lg">App Demo Video</p>
                  {/* 
                  <VideoPreview
                    src="/demo-video.mp4"
                    poster="/demo-poster.jpg"
                    autoplay={false}
                  />
                  */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-primary mb-4">
              Everything You Need for Rural Healthcare
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our platform is specifically designed to address the unique challenges of healthcare access in rural India
            </p>
          </div>

          <div className="grid grid-cols-1 place-items-center items-start md:grid-cols-2 gap-4">
            {features.map((feature, index) => (
                <div key={index} className='h-full sm:max-w-[600px]'>
                <BackgroundGradient  className='bg-white h-full rounded-[22px] dark:bg-zinc-800  '>
              <div  className=" rounded-xl flex flex-wrap h-full gap-y-6 items-center p-4 ">
                
                <div className="flex items-center space-x-4">
                  <div className="text-4xl">{feature.icon}</div>
                  <div>
                    <div className="flex items-center space-x-2 mb-2">
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{feature.title}</h3>
                      <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-2xl">
                        {feature.highlight}
                      </span>
                    </div>
                    <p className="text-gray-600 dark:text-white">{feature.description}</p>
                  </div>
                </div>
                <Link href={feature.link} className=' mx-auto hover:bg-zinc-500/10 dark:hover:bg-zinc-900/70 self-end border-3 p-2 px-3 rounded-2xl'>
                <IconArrowRight color="gray" />
                </Link>
               
              </div>
              </BackgroundGradient>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 ">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold dark:text-white text-gray-900 mb-4">How It Works</h2>
            <p className="text-xl text-gray-600">Simple steps to access healthcare</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 dark:text-white text-gray-600">
            <div className="text-center ">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-xl font-semibold mb-2">Sign Up</h3>
              <p>Create your account in your preferred language</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-xl font-semibold dark:text-white mb-2">Connect</h3>
              <p >Video call with qualified doctors or use AI symptom checker</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-xl font-semibold mb-2">Access</h3>
              <p>Get prescriptions, find medicines, and access records offline</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 text-black dark:text-primary">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">What Our Users Say</h2>
            <p className="text-xl text-gray-500">Real stories from rural communities across India</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="dark:bg-gray-800/70 rounded-xl shadow-lg p-6">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-lg">⭐</span>
                  ))}
                </div>
                <p className="text-primary mb-4 italic">{`"${testimonial.text}"`}</p>
                <div>
                  <p className="font-semibold dark:text-gray-300">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Ready to Transform Rural Healthcare?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join thousands of patients and doctors already using our platform
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={()=>{router.push('/signup')}}
              className="px-8 py-4 bg-gray-100 cursor-pointer text-blue-600 text-lg font-semibold rounded-lg hover:bg-gray-100 transition-colors"
            >
              Start Your Journey
            </button>
            <button 
              onClick={()=>{router.push('/login')}}           
              className="px-8 py-4 border-2 cursor-pointer border-gray-100 text-white text-lg font-semibold rounded-lg hover:bg-gray-100 hover:text-blue-600 transition-colors"
            >
              Already Have Account?
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
     
    </div>
  );
};

export default PreLoginLanding;
