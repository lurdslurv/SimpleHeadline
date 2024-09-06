import React, { useState } from 'react';
import { fetchAIContent } from "../services/aiService.js";

const ContentCreation = () => {
  const [businessName, setBusinessName] = useState('');
  const [audience, setAudience] = useState('');
  const [contentType, setContentType] = useState('');
  const [headline, setHeadline] = useState('');
  const [content, setContent] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [iniHead, setIniHead] = useState('');

  const generateContent = async () => {
    setLoading(true);
    setError('');

    try {
        // Create the prompt based on user input
        const prompt = `Generate a headline and content for a ${contentType} targeting ${audience} for a business about ${businessName}.`;
  
        // Fetch content from AI API
        const aiResponse = await fetchAIContent(prompt);

        // console.log("API Response:", JSON.stringify(aiResponse, null, 2)); // Log the full response


        // Extract content from the response
        if (aiResponse.length > 0) {
          const generatedContent = aiResponse; // Access the generated content
           
          // Separate headline and content
            const textParts = generatedContent.split('\n'); // Splitting by newline or another delimiter
            const newHeadline = textParts[0]; // First part as headline
            const newContent = textParts.slice(1).join('\n'); // Remaining parts as content

            if (newHeadline.length <= 0){
                setIniHead('')
            } else{
                setHeadline(newHeadline);
            }
          
          setContent(newContent);


        } else {
          setError('Unexpected response format from API.');
        }
  
  
      } catch (error) {
        setError('Failed to generate content. Please try again.');
        console.error("Error generating content:", error);
      } finally {
        setLoading(false);
      }
    };

  return (
    <div className="bg-white p-8 rounded-lg shadow-xl mt-8 w-full max-w-4xl">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Left: Form Section */}
        <div className="w-full md:w-1/2">
          <div className="mb-6">
            <label className="block text-gray-700 font-semibold mb-2">About Your Business</label>
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
            disabled={loading} // Disable button while loading
            className="w-full bg-gradient-to-r from-yellow-500 to-indigo-500 text-black py-3 px-4 rounded-lg hover:shadow-lg transition duration-200 ease-in-out mb-6"
          >
            {loading ? 'Generating...' : 'Generate Content'}
          </button>
          {error && <p className="text-red-500">{error}</p>}
        
        </div>


        {/* Right: Generated Output */}
        <div className="w-full md:w-1/2 bg-gray-50 p-6 rounded-lg shadow-lg h-96 overflow-y-auto">
          {headline || content ? (
            <>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">{iniHead}</h2>
              <p className="text-xl text-gray-700 mb-6">{headline}</p>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">See the Results</h3>
              <p className="text-lg text-gray-600">{content}</p>
            </>
          ) : (
            <p className="text-gray-500">Your generated content will appear here...</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ContentCreation;
