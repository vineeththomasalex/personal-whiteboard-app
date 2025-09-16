# 🎯 **Teams Whiteboard App - Next Session Instructions**

## 📋 **Context & Current Status**

### **What We Built:**
A Microsoft Teams app with dual functionality:
- **Personal Whiteboard**: Side panel where each meeting participant can draw privately
- **Presenter Sharing**: Stage app where presenter can share selected participant whiteboards to everyone

### **Current Status: 95% Complete ✅**
- ✅ **All HTML/CSS/JS files**: Functional whiteboard app ready
- ✅ **Teams Integration**: SDK integrated, manifest configured  
- ✅ **Cross-platform**: Works on desktop and mobile
- ✅ **Documentation**: Comprehensive design docs and guides
- ✅ **Standalone Repo**: Files copied to `f:\repos\Hack\personal-whiteboard-app`

### **What's Left: Deploy & Test in Teams**
- 🔄 **GitHub Pages deployment** (5 minutes)
- 🔄 **Teams app upload** (10 minutes)  
- 🔄 **M365 tenant testing** (15 minutes)

### **Why These Steps:**
1. **GitHub Pages**: Azure Static Web Apps got stuck uploading for 12+ hours, so we switched to GitHub Pages for reliable hosting
2. **Teams Deployment**: Need to test the complete workflow in actual Teams meetings
3. **M365 Developer Tenant**: Using `1h56wf.onmicrosoft.com` for safe testing environment

---

## 🚀 **Step-by-Step Next Actions**

### **STEP 1: Open Correct Directory**
```bash
# Open VS Code in the standalone repo
cd f:\repos\Hack\personal-whiteboard-app
code .
```

**Files you should see:**
- `index.html` - Landing page
- `sidepanel.html` - Personal whiteboard  
- `stage.html` - Presenter view
- `config.html` - Teams configuration
- `public/manifest/manifest.json` - Teams app manifest
- `docs/` - Design documentation
- `.gitignore` - Git ignore file

### **STEP 2: GitHub Repository Setup (5 minutes)**
**Why:** Need public HTTPS URL for Teams (Teams requires HTTPS)

1. **Create GitHub repo:**
   ```bash
   # Initialize git
   git init
   git add .
   git commit -m "Initial commit: Teams whiteboard app MVP"
   
   # Create repo on GitHub (via web interface)
   # Name: personal-whiteboard-app
   # Public repository
   
   # Connect and push
   git remote add origin https://github.com/YOUR_USERNAME/personal-whiteboard-app.git
   git branch -M main
   git push -u origin main
   ```

2. **Enable GitHub Pages:**
   - Go to repo Settings → Pages
   - Source: "Deploy from a branch"  
   - Branch: main / (root)
   - Save

3. **Get URL:** `https://YOUR_USERNAME.github.io/personal-whiteboard-app/`

### **STEP 3: Update Teams Manifest (2 minutes)**
**Why:** Teams manifest needs actual GitHub Pages URL (currently has placeholder Azure URL)

1. **Edit `public/manifest/manifest.json`:**
   ```json
   // Replace these URLs with your GitHub Pages URL:
   "contentUrl": "https://YOUR_USERNAME.github.io/personal-whiteboard-app/sidepanel.html?{context}",
   "configurationUrl": "https://YOUR_USERNAME.github.io/personal-whiteboard-app/config.html?{context}",
   
   // And update validDomains:
   "validDomains": [
     "YOUR_USERNAME.github.io"
   ]
   ```

2. **Commit and push changes:**
   ```bash
   git add public/manifest/manifest.json
   git commit -m "Update manifest with GitHub Pages URL"
   git push
   ```

### **STEP 4: Test GitHub Pages Deployment (3 minutes)**
**Why:** Verify the app works before uploading to Teams

1. **Visit:** `https://YOUR_USERNAME.github.io/personal-whiteboard-app/`
2. **Test each page:**
   - Landing page loads
   - Sidepanel: Drawing canvas works
   - Stage: Presenter controls work  
   - Config: Teams configuration page loads

### **STEP 5: Deploy to Teams (10 minutes)**
**Why:** Upload to M365 developer tenant for Teams meeting testing

1. **Go to Teams Developer Portal:** [dev.teams.microsoft.com](https://dev.teams.microsoft.com)
2. **Sign in with:** `1h56wf.onmicrosoft.com` account
3. **Upload app:**
   - Apps → Import app
   - Upload: `public/manifest/manifest.json`
   - Validate and save
4. **Publish to tenant:**
   - Publish → Publish to your org
   - Submit for approval (auto-approved in dev tenant)

### **STEP 6: Test in Teams Meeting (15 minutes)**
**Why:** Validate complete workflow end-to-end

1. **Create Teams meeting** in `1h56wf.onmicrosoft.com` tenant
2. **Join meeting**
3. **Test personal whiteboard:**
   - App appears in side panel
   - Drawing tools work (pen, highlighter, eraser)
   - Canvas responds to touch/mouse
4. **Test presenter sharing:**
   - Click "Share to Stage" button
   - Stage app opens for all participants
   - Navigation controls work
   - Hide functionality works

---

## 🔧 **Troubleshooting Guide**

### **If GitHub Pages doesn't load:**
- Check repo is public
- Verify GitHub Pages is enabled
- Wait 2-3 minutes for deployment
- Check browser console for errors

### **If Teams upload fails:**
- Validate manifest at [dev.teams.microsoft.com](https://dev.teams.microsoft.com)
- Check all URLs are HTTPS
- Verify GUIDs are valid format
- Ensure domain is in validDomains

### **If drawing doesn't work:**
- Check browser console for JavaScript errors
- Verify canvas element loads properly
- Test touch events vs mouse events
- Check Teams SDK initialization

### **If Teams SDK fails:**
- Verify running in Teams context (not browser directly)
- Check Teams SDK version compatibility
- Verify manifest permissions

---

## 📊 **Success Criteria**

### **MVP Complete When:**
- ✅ **GitHub Pages**: App loads at public URL
- ✅ **Teams Integration**: App installs in Teams without errors
- ✅ **Personal Whiteboard**: Drawing works in side panel
- ✅ **Presenter Sharing**: Stage view can be shared and controlled
- ✅ **Multi-user**: Multiple meeting participants can use simultaneously

### **Next Phase (Future Enhancement):**
- Live Share SDK integration for real-time collaboration
- Enhanced drawing tools (colors, shapes, text)
- Canvas export functionality
- Meeting notes integration

---

## 🎯 **Key Files Reference**

### **Main App Files:**
- `sidepanel.html` - Core functionality, main drawing canvas
- `stage.html` - Presenter controls and shared view
- `config.html` - Teams app setup and configuration

### **Teams Integration:**
- `public/manifest/manifest.json` - Teams app definition
- Teams SDK loaded via CDN in HTML files

### **Documentation:**
- `docs/design.md` - Complete architecture document
- `docs/progress.md` - Implementation progress tracking
- `docs/m365-setup.md` - M365 deployment guide

---

## 💡 **Important Notes**

1. **App is Pure HTML/JS**: No build process needed, deploys directly
2. **Teams Manifest is Key**: All URLs must be HTTPS and in validDomains
3. **M365 Dev Tenant**: Use `1h56wf.onmicrosoft.com` for testing
4. **Session-Only Data**: No persistence - drawings are meeting-scoped
5. **Cross-Account Setup**: GitHub Pages (your account) → Teams (M365 tenant) is normal

---

**🎨 You're 95% done! Just need to deploy and test in Teams meetings!**

**Total estimated time remaining: 30 minutes to fully deployed and tested Teams app.**