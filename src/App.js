import React from 'react';
import Header from './components/Header';
import ContentCreation from './components/ContentCreation';
import ParticleBackground from './components/ParticleBackground';

function App() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Particle Background */}
      <ParticleBackground />

      {/* Header and Content */}
      <div className="relative z-10">
        <Header />
        
        <div className="flex flex-col items-center justify-center p-4">
          <h1 className="text-4xl font-bold mb-6 text-gray-900">Content Generator for Businesses</h1>
          
          <ContentCreation />
        </div>
      </div>
    </div>
  );
}

export default App;
