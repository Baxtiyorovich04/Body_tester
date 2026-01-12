# Body Tester - Cosmos Innovation

A modern React-based web application for comprehensive body health measurements and data collection. This application guides users through a series of health measurements including temperature, weight, height, blood oxygen, and blood pressure monitoring.

## 🌟 Features

### User Registration
- **Camera Integration**: Capture user photo using webcam
- **Name Input**: Personal registration with name entry
- **Guest Mode**: Option to skip registration and continue as guest

### Health Measurements
- **Age Input**: User-friendly age input with increment/decrement buttons
- **Gender Selection**: Choose between male and female options
- **Temperature Measurement**: Body temperature monitoring
- **Weight & Height**: Combined measurement tracking
- **Blood Oxygen**: Oxygen saturation level measurement
- **Blood Pressure & Pulse**: Comprehensive cardiovascular monitoring

### Advanced Features
- **Select All Mode**: Complete all measurements sequentially with a single click
- **Data Collection**: All measurements are stored and collected
- **Success Summary**: Complete data summary displayed in console
- **Responsive Design**: Modern UI with smooth animations and transitions

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd bodytester
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```


### Build for Production

```bash
npm run build
```

This creates an optimized production build in the `build` folder.

## 📁 Project Structure

```
bodytester/
├── public/
│   ├── assets/
│   │   ├── icons/          # SVG icons for UI elements
│   │   └── imgs/           # WebP images for illustrations
│   ├── index.html
│   └── manifest.json
├── src/
│   ├── components/         # Reusable components
│   │   └── Button.jsx
│   ├── layout/             # Layout components
│   │   ├── Header.jsx
│   │   └── MainLayout.jsx
│   ├── pages/              # Page components
│   │   ├── Registration.jsx
│   │   ├── Home.jsx
│   │   ├── AgeInput.jsx
│   │   ├── CoinDrop.jsx
│   │   ├── Selection.jsx
│   │   ├── GenderSelection.jsx
│   │   ├── TemperatureMeasurement.jsx
│   │   ├── WeightHeightMeasurement.jsx
│   │   ├── OxygenMeasurement.jsx
│   │   ├── BloodPressureMeasurement.jsx
│   │   └── Success.jsx
│   ├── styles/             # SCSS stylesheets
│   │   ├── base/           # Base styles and variables
│   │   ├── layout/         # Layout styles
│   │   ├── pages/          # Page-specific styles
│   │   └── main.scss       # Main stylesheet
│   ├── App.jsx             # Main app component with routing
│   └── index.js            # Entry point
└── package.json
```

## 🎨 Technology Stack

- **React 19.2.3** - UI library
- **React Router DOM 7.12.0** - Client-side routing
- **SCSS/Sass** - Styling with variables and nesting
- **React Icons** - Icon library
- **Web APIs** - Camera access (getUserMedia)

## 📱 Application Flow

1. **Registration** (`/`)
   - Camera capture or guest mode
   - Name input (if registering)

2. **Home** (`/home`)
   - Welcome screen
   - Start button

3. **Age Input** (`/age-input`)
   - Enter age with controls

4. **Coin Drop** (`/coin-drop`)
   - Interactive coin drop animation

5. **Selection** (`/selection`)
   - Choose measurement types
   - Select all option available

6. **Gender Selection** (`/gender-selection`)
   - Choose gender before measurements

7. **Measurement Pages** (`/measurement/*`)
   - Temperature
   - Weight & Height
   - Blood Oxygen
   - Blood Pressure & Pulse

8. **Success** (`/success`)
   - Completion message
   - Data summary in console

## 💾 Data Collection

All user data is collected and stored in browser localStorage:

- **Registration Data**: Photo (base64), name, guest status
- **Personal Info**: Age, gender
- **Measurements**: Temperature, weight, height, oxygen, blood pressure, pulse

On the Success page, all collected data is logged to the browser console in a formatted structure.

## 🎯 Key Features Explained

### Select All Mode
When users click "Hammasini tanlash" (Select All) button:
- All measurement types are queued
- Gender is asked once at the beginning
- Measurements proceed sequentially
- Each measurement must be completed before moving to the next

### Camera Integration
- Uses browser's `getUserMedia` API
- Real-time video preview
- Photo capture with canvas
- Error handling for camera permissions

### Responsive Design
- Centered content layout
- Consistent styling across all pages
- Smooth animations and transitions
- Modern UI with glow effects

## 🛠️ Development

### Available Scripts

- `npm start` - Runs development server
- `npm test` - Launches test runner
- `npm run build` - Creates production build
- `npm run eject` - Ejects from Create React App (one-way operation)

### Styling

The project uses SCSS with a modular structure:
- Variables in `styles/base/_variables.scss`
- Base styles in `styles/base/_base.scss`
- Page-specific styles in `styles/pages/`
- Layout styles in `styles/layout/`

## 📝 Notes

- The application requires camera permissions for registration
- All data is stored locally in browser localStorage
- Images are optimized using WebP format
- The app is designed for touch-screen kiosk environments

## 🤝 Contributing

This is a private project for Cosmos Innovation. For contributions or questions, please contact the project maintainers.

## 📄 License

Private project - All rights reserved.

---

**Developed by Cosmos Innovation**  
*"Innovatsion kelajakni biz bilan birga quring"*
