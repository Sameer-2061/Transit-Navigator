import os
from dotenv import load_dotenv
import google.generativeai as genai

# .env file se variables load karne ke liye
load_dotenv()

# Humne tumhari custom config ke hisab se 'API_KEY' mapping ki hai
api_key = os.getenv("API_KEY")

if not api_key:
    print(" Error: .env file mein 'API_KEY' nahi mila!")
    print("Ensure karo ki tum sahi directory mein ho aur .env file validated hai.")
    exit(1)

# Gemini configuration
genai.configure(api_key=api_key)

print("====================================================")
print("🔍 Fetching Active Gemini Models From Google Server...")
print("====================================================\n")

try:
    available_models = genai.list_models()
    count = 0
    
    for model in available_models:
        # Sirf wahi models filter kar rahe hain jo text generation support karte hain
        if 'generateContent' in model.supported_generation_methods:
            count += 1
            print(f"🔹 Model ID: {model.name}")
            print(f"   Description: {model.description}")
            print(f"   Input Token Limit: {model.input_token_limit}")
            print("-" * 50)
            
    print(f"\n Done! Total {count} content generation models found for your API key.")

except Exception as e:
    print(" Google API Se Connect Karne Mein Issue Aaya:")
    print(str(e))