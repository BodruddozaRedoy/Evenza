# Event Management Web Application

## Overview
This project is a fully functional **Event Management Web Application** built using the **MERN Stack** (MongoDB, Express.js, React.js, and Node.js). The application supports custom authentication, dynamic event operations, a search and filter system for efficient event browsing, and an intuitive user interface designed for ease of use and performance.

## Features

### 1. Navbar
- **Components**: Logo + Website Name, Home, Events, Add Event, My Event, and Sign In (when not logged in).
- **Logged-in State**: Displays the user's profile picture. Clicking the profile picture shows a dropdown with:
  - User Name (non-clickable)
  - Logout button

### 2. Homepage
- Custom-designed homepage for a welcoming user experience.

### 3. Events (Private Route)
- Displays all events added via the "Add Event" page in **descending order** by date and time (most recent first).
- Events with the same date are sorted by time.
- Each event is displayed in a **card format** with:
  - Event Title
  - Name (who posted the event)
  - Date and Time
  - Location
  - Description
  - Attendee Count
  - Join Event Button
- **Join Event**: Increments the Attendee Count by 1 (a user can join an event only once).
- **Search System**: Allows searching events by title.
- **Filter Options**:
  - Today’s date
  - Date range with predefined options:
    - Current week
    - Last week
    - Current month
    - Last month

### 4. Add Event (Private Route)
- A form for users to add events with the following fields:
  - Event Title
  - Name (who posted the event)
  - Date and Time
  - Location
  - Description
  - Attendee Count (default: 0)
  - Add Event Button
- **Functionality**: Clicking the "Add Event" button stores the event data in the MongoDB database.

### 5. My Event (Private Route)
- Displays events added by the logged-in user in a card format with:
  - Event Title
  - Name (who posted the event)
  - Date and Time
  - Location
  - Description
  - Attendee Count
  - Update Button
  - Delete Button
- **Update**: Opens a form (in a modal or separate route) to update event details.
- **Delete**: Removes the event after a confirmation prompt.

### 6. Authentication System
- **Custom-built** without third-party packages.
- **Error Handling**: Displays clear error messages for invalid credentials, missing fields, etc.
- **Login Page**:
  - Fields: Email, Password
- **Registration Page**:
  - Fields: Name, Email, Password, Photo URL

## Video Task
### Video 1: Second Largest Number Function
A function that takes an array of numbers and returns the second largest number without using built-in functions (e.g., `max()`, `sort()`). The solution uses a loop to compare values.

**Example**:
- Input: `[4, 2, 7, 1, 9]`
- Output: `7`

**Explanation** (for students):
- **Step-by-Step**: Iterate through the array, keeping track of the largest and second largest numbers.
- **Loop Mechanics**: Use a single loop to compare each element with the current largest and second largest values.
- **Comparison Logic**: If a number is greater than the largest, update the second largest to the current largest and set the new largest. If a number is between the largest and second largest, update only the second largest.

### Video 2: Why Choose the Instructor Role?
An explanation of why the instructor role was chosen over a web developer role, highlighting the passion for teaching and empowering others through coding.

## Installation and Setup
1. **Clone the Repository**:
   ```bash
   git clone https://github.com/BodruddozaRedoy/Evenza.git
   ```
2. **Install Dependencies**:
   - Backend: Navigate to the `backend` folder and run:
     ```bash
     npm install
     ```
   - Frontend: Navigate to the `frontend` folder and run:
     ```bash
     npm install
     ```
3. **Set Up Environment Variables**:
   - Create a `.env` file in the `backend` folder with:
     ```env
     MONGODB_URI=<your-mongodb-uri>
     JWT_SECRET=<your-jwt-secret>
     ```
4. **Run the Application**:
   - Backend: In the `backend` folder, run:
     ```bash
     npm start
     ```
   - Frontend: In the `frontend` folder, run:
     ```bash
     npm start
     ```
5. **Access the Application**:
   - Open your browser and navigate to `http://localhost:5173`.

## Technologies Used
- **MongoDB**: Database for storing event and user data.
- **Express.js**: Backend framework for handling API requests.
- **React.js**: Frontend framework for building the user interface.
- **Node.js**: Runtime for the backend server.
- **JWT**: For secure authentication.

## Submission Details
- **Deadline**: July 1, 2025, 11:59 PM
- **Submission Form**: [Google Form](#)
- **Rules**:
  - Only the first submission will be considered.
  - Task-related assistance from Programming Hero team members is prohibited and will lead to rejection.

## Contact
For any questions or clarifications, please reach out to the Programming Hero team.