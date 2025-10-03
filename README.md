#  ESP Integration API

A Node.js/Express API for integrating with **Mailchimp** and **GetResponse**.  
It supports saving & validating ESP API keys and fetching subscriber lists/audiences.

---

##  Features
- Save and validate ESP API keys (Mailchimp / GetResponse)
- Securely store integration data in MongoDB
- Fetch audiences/lists from the connected ESP
- RESTful API endpoints

---

##  Setup Instructions
<!-- NUMBER 1 -->
### 1. Clone Repository
```bash
git clone https://github.com/steffanii/Email-Service-Provider.git
cd Email-Service-Provider



# NUMBER 2
2. Install Dependencies
bash
npm install


# NUMBER 3
3. Create Environment Variables
Create a .env file in the root directory with the following:

env
PORT=5000
MONGO_URI=mongodb://localhost:27017/espIntegration

# Optional if you want to preload keys during development
MAILCHIMP_API_KEY="xxxxxxxxxxxxxxxxxxxx-xxxx"
GETRESPONSE_API_KEY=xxxxxxxxxxxxxxxxxxxx




# NUMBER 4
4. Run the Project
bash
npm run dev
API will be available at:
  http://localhost:5000

 API Endpoints
Save & Validate ESP API Key
POST /api/integrations/esp

json

{
  "provider": "mailchimp" | "getresponse",
  "apiKey": "your-api-key"
}
Fetch Lists / Audiences
GET /api/integrations/esp/lists?provider=mailchimp
GET /api/integrations/esp/lists?provider=getresponse

  Database Schema
We use MongoDB to store integration data.

Collection: integrations
json
{
  "_id": "ObjectId",
  "provider": "mailchimp",       // ESP provider (mailchimp/getresponse)
  "apiKey": "encrypted_api_key", // Stored securely (hashed or encrypted)
  "createdAt": "2025-10-03T12:00:00Z",
  "updatedAt": "2025-10-03T12:00:00Z"
}
Example Document
json
{
  "_id": "652a8dfb9123aa45e1234567",
  "provider": "getresponse",
  "apiKey": "xxxxxxxxxxxxxxxxxxxx",
  "createdAt": "2025-10-03T10:22:45Z",
  "updatedAt": "2025-10-03T10:22:45Z"
}
  Tech Stack
Node.js + Express – API Framework

MongoDB + Mongoose – Database & Schema

Postman – API testing

TypeScript – Strong typing and clean code

  