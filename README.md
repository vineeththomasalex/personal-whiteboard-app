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