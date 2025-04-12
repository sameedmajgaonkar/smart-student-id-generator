# Smart Student ID Generator

## Project Overview

Smart Student ID Generator is a React-based web application that simplifies the process of creating and managing student identification cards. Built as an assignment for Unity Education, this application allows educational institutions to generate professional-looking student ID cards with QR codes, store student data, and export cards as images.

### Thought Process

- Build a form using react-hook-form and validate it using zod
- Use cloudinary to store profile pictures
- Store the students data in local storage and develop a seperate localStorageService for retrieving and storing data
- Design two templates having different styles and allow students to switch between templates
- Use the libraries mentioned in the pdf for generating QR Code and adding download functionality

## Live Demo

The application is deployed on Replit and can be accessed [here](https://c912b721-410f-4425-b794-7122b2a12185-00-1wxnuelyi9se.sisko.replit.dev/).

## Features

### Student Data Management

- **Comprehensive Form**: Easily input student information including:
  - Full name (First, Middle, Last)
  - Roll number
  - Class (I-X) and Division (A-F)
  - Allergies (multi-select options)
  - Photo upload with preview
  - Rack number assignment
  - Bus route selection
- **Form Validation**: Ensures all required fields are filled correctly before submission

### ID Card Generation

- **Real-time Preview**: Instantly see how the ID card will look with entered information
- **QR Code Integration**: Each card includes a QR code containing the student's information in JSON format
- **Dual Template Designs**: Choose between two visually distinct card layouts:
  - Card 1: Clean, professional design with prominent school logo
  - Card 2: Contemporary layout with color accents and alternative information arrangement
- **Export Functionality**: Download ID cards as PNG images for printing or digital distribution

### Data Persistence

- **LocalStorage Integration**: Student records are saved in browser storage
- **Student Listing**: View all previously created student ID cards
- **Edit Capability**: Update existing student information when needed
- **Delete Function**: Remove outdated or incorrect student records

## Technical Implementation

### Technology Stack

- **Frontend Framework**: React.js with TypeScript
- **Styling**: CSS for responsive design
- **Key Libraries**:
  - `qrcode.react`: QR code generation
  - `react-hook-form and zod`:Handling form submission and validation
  - `cloudinary`: Upload Profile images
  - `html-to-image`: PNG export functionality
  - `axios`: HTTP client
- **Development & Deployment**: Hosted on Replit

### Project Structure

```
smart-student-id-generator/
├── src/
│   ├── assets/
│   ├── components/
│   │   └── templates/
│   │       ├── Card_1.tsx
│   │       ├── Card_2.tsx
│   │       ├── ErrorMessage.tsx
│   │       ├── StudentForm.tsx
│   │       ├── StudentIDCard.tsx
│   │       └── StudentList.tsx
│   ├── services/
│   │   └── localStorageService.ts
│   ├── App.css
│   ├── App.tsx
│   ├── index.css
│   ├── main.tsx
│   ├── routes.tsx
│   ├── schema.ts
│   └── vite-env.d.ts
├── .gitignore
├── eslint.config.js
├── index.html
├── package-lock.json
├── package.json
├── README.md
├── tsconfig.app.json
├── tsconfig.json
├── tsconfig.node.json
└── vite.config.ts
```

### Key Implementation Details

#### TypeScript Integration

The project uses TypeScript for type safety and improved developer experience. The `schema.ts` file defines types and interfaces for student data, ensuring consistency throughout the application.

#### Template System

The template switching functionality is implemented through separate template components (`Card_1.tsx` and `Card_2.tsx`), allowing users to choose different visual styles for ID cards while maintaining the same data structure.

#### Storage Service

The `localStorageService.ts` provides a clean API for CRUD operations on student data:

- `add(student)`: Creates a new student record
- `getAll()`: Retrieves all students
- `get(id)`: Fetches a specific student by ID

#### Form Handling

The `StudentForm.tsx` component manages form state and validation, ensuring that all required fields are properly filled before submission.

#### QR Code Implementation

Each ID card contains a QR code generated from the full student data JSON. When scanned, this QR code provides quick access to all student information, making the ID card both visually informative and digitally functional.

## Setup and Development

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:

   ```
   git clone https://github.com/sameedmajgaonkar/smart-student-id-generator.git
   ```

2. Navigate to the project directory:

   ```
   cd smart-student-id-generator
   ```

3. Install dependencies:

   ```
   npm install
   ```

4. Start the development server:

   ```
   npm run dev
   ```

5. Open your browser and visit `http://localhost:5173`

### Deployment

The application is configured for easy deployment on Replit. The repository includes a properly configured `vite.config.ts` file that allows for hosting on Replit's environment.

## Usage Guide

### Adding a New Student

1. Navigate to the student form
2. Fill in all required fields
3. Upload a student photo (supported formats: JPG, PNG)
4. Select applicable allergies (if any)
5. Click "Submit" to create the ID card

### Viewing and Managing Students

1. Visit the student list view to see all saved student records
2. Click on a student to view their full details and ID card
3. Use available options to edit or delete student information

### Exporting ID Cards

1. Navigate to a specific student's card view
2. Select your preferred template (Card 1 or Card 2)
3. Click the download button to save the card as a PNG image

## Future Enhancements

- Batch processing for multiple students
- Additional card templates
- Cloud storage integration
- Dark mode support
- Export to PDF format
- QR code scanning functionality within the app
- Admin dashboard for school management

## About the Developer

This project was developed by Sameed Majgaonkar as an internship assignment for Unity Education. Connect with me on [GitHub](https://github.com/sameedmajgaonkar) or [LinkedIn](https://in.linkedin.com/in/sameed-majgaonkar-537b36293).

## License

This project is not licensed for public use as it was created specifically for an internship assignment evaluation.
