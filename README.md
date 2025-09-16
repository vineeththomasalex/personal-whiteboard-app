# Personal Whiteboard Teams App

A Teams app that enhances meetings with personal whiteboards for each participant and presenter controls to share selected whiteboards on the meeting stage.

## 🏗️ Project Structure

```
personal-whiteboard-app/
├── docs/
│   └── design.md                 # Comprehensive design document
├── public/
│   ├── manifest/
│   │   └── manifest.json         # Teams app manifest
│   └── index.html               # Entry HTML
├── src/
│   ├── components/
│   │   └── ErrorBoundary.tsx    # Error handling
│   ├── pages/
│   │   ├── SidePanelView.tsx    # Personal whiteboard view
│   │   ├── StageView.tsx        # Shared presenter view
│   │   └── ConfigPage.tsx       # Teams app configuration
│   ├── hooks/                   # Custom React hooks (future)
│   ├── utils/                   # Utility functions (future)
│   ├── App.tsx                  # Main app component
│   └── main.tsx                 # Entry point
├── package.json                 # Dependencies and scripts
├── tsconfig.json               # TypeScript configuration
├── vite.config.ts              # Vite build configuration
└── README.md                   # This file
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ and npm
- Microsoft 365 E5 subscription with developer sandbox
- Teams development environment
- ngrok for local development tunneling

### Installation

1. **Install dependencies:**
```bash
cd personal-whiteboard-app
npm install
```

2. **Start development server:**
```bash
npm run dev
```

3. **Set up ngrok for Teams development:**
```bash
# Install ngrok if you haven't already
npm install -g ngrok

# In a separate terminal, create tunnel
ngrok http 3000
```

4. **Update manifest URLs:**
   - Copy the HTTPS URL from ngrok (e.g., `https://abc123.ngrok.io`)
   - Update `public/manifest/manifest.json` with your ngrok URL
   - Replace `"https://yourapp.com"` with your ngrok URL

5. **Configure Teams app:**
   - Go to Teams Admin Center or Teams Developer Portal
   - Upload the manifest from `public/manifest/manifest.json`
   - Add the app to a test meeting

## 🔧 Development Workflow

### Phase 1: Foundation (Current Status)
- [x] Project structure created
- [x] Basic React components scaffolded
- [x] Teams app manifest configured
- [x] Dependencies defined

### Phase 2: Implementation (Next Steps)
- [ ] Install dependencies and fix TypeScript issues
- [ ] Implement Live Share integration
- [ ] Add canvas functionality with live-share-canvas
- [ ] Create presenter controls
- [ ] Test in Teams development environment

### Phase 3: Enhancement
- [ ] Add real canvas drawing with tools
- [ ] Implement snapshot sharing
- [ ] Add participant presence tracking
- [ ] Polish UI/UX

## 📋 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript checking

## 🎯 Key Features

### Personal Whiteboard (Side Panel)
- Private canvas for each meeting participant
- Drawing tools: pen, highlighter, eraser, clear
- Session-only storage (no persistence)
- Always accessible during meetings

### Presenter Sharing (Stage App)
- Presenter can share any participant's whiteboard
- Cycle through different participants
- Show/hide controls for stage management
- Read-only display for meeting attendees

### Live Share Integration
- Real-time state synchronization
- Participant presence tracking
- Canvas snapshot sharing
- Secure meeting-scoped data

## 🔐 Security & Privacy

- **Session-only data**: No whiteboard content persists after meetings
- **Explicit sharing**: Participants' content only shared when presenter chooses
- **Teams SSO**: Uses Teams identity for authentication
- **Live Share security**: All data flows through Microsoft's secure infrastructure

## 📖 Documentation

See `docs/design.md` for comprehensive architecture and design documentation.

## 🚧 Current Status

This is a proof-of-concept implementation. The basic structure is complete and ready for development. Next steps:

1. Run `npm install` to install dependencies
2. Set up ngrok for Teams development
3. Begin implementing Live Share canvas integration
4. Test in Teams meeting environment

## 🔗 Useful Links

- [Microsoft Live Share SDK Documentation](https://docs.microsoft.com/en-us/microsoftteams/platform/apps-in-teams-meetings/teams-live-share-overview)
- [Teams App Development Guide](https://docs.microsoft.com/en-us/microsoftteams/platform/overview)
- [Live Share Canvas Package](https://docs.microsoft.com/en-us/javascript/api/@microsoft/live-share-canvas/)
- [Teams Developer Portal](https://dev.teams.microsoft.com/)

## 📜 Privacy Policy {#privacy}

### Data Collection and Usage
The Personal Whiteboard Teams App is designed with privacy in mind:

- **No Data Storage**: All whiteboard drawings are session-only and are not stored on any servers
- **No Personal Information**: The app does not collect, store, or transmit personal information beyond what Microsoft Teams provides for app functionality
- **Meeting-Scoped Data**: All whiteboard content is scoped to the current Teams meeting and is automatically discarded when the meeting ends
- **Microsoft Infrastructure**: All data flows through Microsoft's secure Live Share infrastructure

### Data Sharing
- **Explicit Sharing Only**: Your whiteboard content is only visible to other meeting participants when you or a presenter explicitly chooses to share it
- **No Third-Party Access**: No whiteboard data is shared with third parties
- **Teams Integration**: The app uses standard Microsoft Teams security and identity features

### Data Retention
- **Session-Only**: All whiteboard data is deleted when the meeting ends
- **No Logs**: Drawing actions are not logged or recorded
- **No Analytics**: The app does not collect usage analytics or telemetry

### Contact
For privacy concerns, please create an issue at: https://github.com/vineeththomasalex/personal-whiteboard-app/issues

## 📋 Terms of Use {#terms}

### Acceptance of Terms
By using the Personal Whiteboard Teams App, you agree to these terms of use.

### Permitted Use
- **Meeting Enhancement**: This app is designed to enhance Microsoft Teams meetings with collaborative whiteboard functionality
- **Educational and Business Use**: Appropriate for educational institutions, businesses, and professional organizations
- **Compliance**: Users must comply with their organization's Microsoft Teams usage policies

### Prohibited Use
- **No Inappropriate Content**: Do not create or share offensive, inappropriate, or illegal content
- **No Abuse**: Do not use the app in ways that could disrupt Teams meetings or violate Microsoft's terms of service
- **No Commercial Redistribution**: This app is provided for use, not for redistribution or commercial resale

### Disclaimer
- **As-Is Service**: The app is provided "as-is" without warranties of any kind
- **No Liability**: The developers are not liable for any issues arising from app usage
- **Microsoft Teams Dependencies**: App functionality depends on Microsoft Teams and Live Share services

### Open Source
- **MIT License**: This app is open source under the MIT License
- **Contributions Welcome**: Community contributions are welcomed through GitHub
- **No Support Guarantee**: Support is provided on a best-effort basis

### Changes to Terms
These terms may be updated occasionally. Continued use constitutes acceptance of any changes.

### Contact
For terms-related questions, please create an issue at: https://github.com/vineeththomasalex/personal-whiteboard-app/issues