/*
===========================================
🏨 JSON Syntax Debugging: Hotel Booking Data
===========================================

🎯 Objective:
Students will analyze a JSON file containing multiple syntax errors,
identify the issues, and correct them.

This activity helps practice spotting and fixing common JSON mistakes such as:
- Missing commas
- Incorrect use of quotation marks
- Unmatched brackets/braces
- Trailing commas
- Invalid data types
*/


// ============================================
// 🧭 Instructions:
// ============================================

/*
📘 Scenario:
You’re a developer on a team building a travel booking API.

A teammate submitted a JSON file to represent a hotel booking, 
but it contains multiple syntax errors that prevent it from being parsed.

🔧 Your Task:
1️⃣ Review the provided JSON file
2️⃣ Identify all syntax errors
3️⃣ Write down what each error is and why it causes a problem
4️⃣ Correct the JSON structure so that it is valid
5️⃣ Validate your corrected version using a JSON linter or validator

🧪 Deliverables:
- A corrected version of the JSON
- A list of the corrections made and why each was necessary
*/


// ============================================
// 🔍 Provided JSON File with Errors
// ============================================

const invalidBookingJSON = `
{
  "hotelName": "Grand City Hotel",
  "checkInDate": "2024-05-15",
  "checkOutDate": "2024-05-20",
  "guests": [
    {
      "name": "Alice Johnson",
      "age": 30,
      "email": "alice.johnson@example.com"
    },
    {
      "name": "Bob Smith",
      "age": "undefined",
      "email": "bob.smith@example.com"
    }
  ],
  "roomDetails": {
    "type": "Suite",
    "pricePerNight": 200,
    "amenities": ["WiFi", "Breakfast", "Parking"]
  }
}
`;


// ============================================
// ✅ Requirements
// ============================================

/*
- Use a JSON validator or linter (e.g., https://jsonlint.com/) to test your final version
- Keep track of each fix:
  • What was wrong?
    - check in date added comma at the end
    - added quotation marks to "name" for Alice Johnson
    - put quotation marks around "age": "undefined" since undefined not supported in JSON
    - added .com to Bob's email
    - removed comma behind "Parking"
  • Why is it a problem in JSON?
    - need commas to separate items in JSON object but not for the last item in an object
    - every key must be in quotation marks
    - emails must be in certain format to be read by the program as a valid email
    - undefined not supported in JSON so it was changed to a string
  • What did you change to fix it?
*/


// ============================================
// 🤔 Follow-Up Questions
// ============================================

/*
💬 Reflect and answer the following:

1️⃣ What tools or techniques did you use to identify the errors?
  - I made a JSON file to see the colors a little better. It helps me pick things out more easily.
2️⃣ How did you confirm that your corrected JSON file was valid?
  - I used JSONLint online to validate.
3️⃣ Which errors were the most difficult to spot? Why?
  - I almost did not see the email was missing .com because it didn't have any errors near it just in the file. 
4️⃣ What strategies can help you avoid these kinds of errors in the future?
   (e.g., syntax highlighting, linters, writing JSON by example)
  - Using linters, making sure to have a structured format for each piece of information that needs to be similar. 
*/
