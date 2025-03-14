const {
    GoogleGenerativeAI,
    HarmCategory,
    HarmBlockThreshold,
  } = require("@google/generative-ai");
  
  const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY;
  const genAI = new GoogleGenerativeAI(apiKey);
  
  const model = genAI.getGenerativeModel({
    model: "gemini-2.0-flash",
  });
  
  const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 40,
    maxOutputTokens: 8192,
    responseMimeType: "application/json",
  };
  

    export const AIDesingIdea = model.startChat({
      generationConfig,
      history: [
        {
          role: "user",
          parts: [
            {text: "Based on Logo of type Modern Mascot Logos Generate a text prompt to create Logo for Logo title/Brand name : Indian Spice with description: Indian restaurant and referring to prompt: A vibrant logo featuring a friendly, animated character with a playful expression. The character is dressed in a classic uniform, complete with a distinctive accessory that adds personality. In one hand, they hold a signature item that represents the brand, while the other elements of the design—such as small decorative touches or natural accents—enhance the overall look. The background consists of a bold, circular design with subtle accents to highlight the character. Below, the brand name is displayed in bold, stylized lettering, with a slight curve and complementary decorative lines. The overall style is fun, welcoming, and full of character. Give me 4/5 Suggestion of logo idea (each idea with maximum 4-5 words), Result in JSON format with ideas field\n"},
          ],
        },
        {
          role: "model",
          parts: [
            {text: "I am currently unable to generate images as that capability is limited to early testers. However, I can provide you with text prompts for generating the logos. Here's the JSON output with five logo ideas based on your request:\n\n```json\n{\n  \"ideas\": [\n    \"Chef Mascot Holding Spices\",\n    \"Smiling Elephant with Curry Pot\",\n    \"Animated Spice Jar Character\",\n    \"Friendly Tiger Serving Thali\",\n    \"Curved Dosa with Chef Hat\"\n  ]\n}\n```\n"},
          ],
        },
      ],
    });

    export const AILogoPrompt = model.startChat({
      generationConfig,
      history: [
        {
          role: "user",
          parts: [
            {text: "Generate a text prompt to create Logo for Logo Title/Brand name : netflix,with description: movie website, with Color combination of Ocean Blues, also include the Animated Popcorn Character and include Modern Mascot Logos design idea and Referring to this Logo Prompt:A vibrant logo featuring a friendly, animated character with a playful expression. The character is dressed in a classic uniform, complete with a distinctive accessory that adds personality. In one hand, they hold a signature item that represents the brand, while the other elements of the design—such as small decorative touches or natural accents—enhance the overall look. The background consists of a bold, circular design with subtle accents to highlight the character. Below, the brand name is displayed in bold, stylized lettering, with a slight curve and complementary decorative lines. The overall style is fun, welcoming, and full of character.  Give me result in JSON portal with prompt field only\n"},
          ],
        },
        {
          role: "model",
          parts: [
            {text: "```json\n{\n  \"prompt\": \"Create a modern mascot logo for Netflix, a movie streaming website. The color palette should be Ocean Blues. The logo should feature an animated popcorn character with a friendly, playful expression, holding a container of popcorn. The design should be fun, welcoming, and full of character, taking inspiration from classic cartoon styles with a modern twist. The Netflix brand name should be displayed below the character in bold, stylized lettering, with a slight curve and complementary decorative lines. The overall aesthetic should evoke a sense of cinematic enjoyment and accessibility.\"\n}\n```\n"},
          ],
        },
      ],
    });
  
    // const result = await chatSession.sendMessage("INSERT_INPUT_HERE");
    // console.log(result.response.text());
