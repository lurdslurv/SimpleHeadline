export const fetchAIContent = async (promptText) => {
    const apiKey = "NPGVAUVujriv6NIqko2nCNslHqtowkkV"
  
    const response = await fetch("https://api.ai21.com/studio/v1/j2-mid/complete", {
      headers: {
        "Authorization": `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({
        prompt: promptText,
        numResults: 1,
        maxTokens: 100, // adjust as necessary
        temperature: 0.7,
        topP: 1,
      }),
    });
  
    if (!response.ok) {
      throw new Error("Failed to fetch AI content");
    }
  
    const result = await response.json();
    return result.completions[0].data.text;
  };
  