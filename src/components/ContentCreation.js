import React, { useState } from 'react';

const ContentCreation = () => {
  const [businessName, setBusinessName] = useState('');
  const [audience, setAudience] = useState('');
  const [contentType, setContentType] = useState('');
  const [headline, setHeadline] = useState('');
  const [content, setContent] = useState('');

  const generateContent = () => {
    const newHeadline = `Grow Your ${businessName} with Our ${contentType} Tips!`;
    const newContent = `Looking to attract more ${audience}? Our guide to creating a ${contentType} for ${businessName} will give you the edge you need!`;

    setHeadline(newHeadline);
    setContent(newContent);
  };

  return (
    <div className="bg-white p-8 rounded-lg shadow-xl mt-8 w-full max-w-4xl">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Left: Form Section */}
        <div className="w-full md:w-1/2">
          <div className="mb-6">
            <label className="block text-gray-700 font-semibold mb-2">Business Name</label>
            <input
              type="text"
              value={businessName}
              onChange={(e) => setBusinessName(e.target.value)}
              placeholder="e.g., Tech Solutions"
              className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="mb-6">
            <label className="block text-gray-700 font-semibold mb-2">Target Audience</label>
            <input
              type="text"
              value={audience}
              onChange={(e) => setAudience(e.target.value)}
              placeholder="e.g., small business owners"
              className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="mb-6">
            <label className="block text-gray-700 font-semibold mb-2">Content Type</label>
            <select
              value={contentType}
              onChange={(e) => setContentType(e.target.value)}
              className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select a content type</option>
              <option value="Blog Post">Blog Post</option>
              <option value="Instagram Post">Instagram Post</option>
              <option value="Ad Copy">Ad Copy</option>
            </select>
          </div>

          <button
            onClick={generateContent}
            className="w-full bg-gradient-to-r from-blue-500 to-indigo-500 text-white py-3 px-4 rounded-lg hover:shadow-lg transition duration-200 ease-in-out mb-6"
          >
            Generate Headline & Content
          </button>
        </div>

        {/* Right: Generated Output */}
        <div className="w-full md:w-1/2 bg-gray-50 p-6 rounded-lg shadow-lg">
          {headline ? (
            <>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Generated Headline</h2>
              <p className="text-xl text-gray-700 mb-6">{headline}</p>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Generated Content</h3>
              <p className="text-lg text-gray-600">{content}</p>
            </>
          ) : (
            <p className="text-gray-500">Your generated headline and content will appear here...</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ContentCreation;
