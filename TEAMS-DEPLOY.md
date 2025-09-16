# 🚀 Quick Teams Deployment for 1h56wf.onmicrosoft.com

## 🎯 Current Status
✅ **App Server Running**: `http://localhost:55298`  
✅ **All Files Ready**: HTML pages functional  
⏳ **Need Public URL**: For Teams integration  

## 🔄 Option 1: Free ngrok Setup (Recommended - 5 minutes)

Since ngrok requires authentication, let's set it up quickly:

### Step 1: Get Free ngrok Account
1. Go to [ngrok.com](https://ngrok.com)
2. Sign up with GitHub/Google (free)
3. Get your authtoken from [dashboard](https://dashboard.ngrok.com/get-started/your-authtoken)

### Step 2: Configure ngrok
```bash
# Install authtoken (replace YOUR_TOKEN with actual token)
npx ngrok config add-authtoken YOUR_TOKEN

# Create tunnel to your app
npx ngrok http 55298
```

### Step 3: Update Manifest
Copy the HTTPS URL from ngrok (e.g., `https://abc123.ngrok.io`) and update manifest.

---

## 🔄 Option 2: Azure Static Web Apps (Alternative - 10 minutes)

If you prefer not to use ngrok:

### Step 1: Create Azure Static Web App
1. Go to [Azure Portal](https://portal.azure.com)
2. Create **Static Web App** resource
3. Choose **"Upload"** deployment method

### Step 2: Upload Files
1. Zip your app folder contents
2. Upload to Azure Static Web Apps
3. Get the public URL (e.g., `https://yourapp.azurestaticapps.net`)

---

## 🔄 Option 3: Quick Local Testing (Immediate)

For immediate testing without public URL:

### Test Locally First
1. Open `http://localhost:55298` in browser
2. Test all three pages:
   - **Landing**: `http://localhost:55298/index.html`
   - **Side Panel**: `http://localhost:55298/sidepanel.html`
   - **Stage View**: `http://localhost:55298/stage.html`
   - **Config**: `http://localhost:55298/config.html`

This validates everything works before Teams deployment.

---

## 📋 Manifest Update Template

Once you have your public URL, update `public/manifest/manifest.json`:

**Replace this:**
```json
"contentUrl": "https://yourapp.com/sidepanel.html?{context}"
"configurationUrl": "https://yourapp.com/config.html?{context}"
```

**With your actual URL:**
```json
"contentUrl": "https://YOUR-NGROK-URL.ngrok.io/sidepanel.html?{context}"
"configurationUrl": "https://YOUR-NGROK-URL.ngrok.io/config.html?{context}"
```

---

## 🎯 Teams Upload Steps for 1h56wf.onmicrosoft.com

### Step 1: Access Teams Developer Portal
1. Go to [dev.teams.microsoft.com](https://dev.teams.microsoft.com)
2. Sign in with your **1h56wf.onmicrosoft.com** account
3. Click **"Apps"** in left navigation

### Step 2: Upload Your App
1. Click **"Import app"**
2. Upload your updated `manifest.json`
3. Teams will validate the manifest
4. Click **"Preview in Teams"**

### Step 3: Test in Teams Meeting
1. Create a Teams meeting in your tenant
2. Join the meeting
3. Look for your app in the side panel
4. Test the "Share to Stage" functionality

---

## 🚨 Quick Validation Checklist

Before uploading to Teams:

- [ ] App loads at `http://localhost:55298`
- [ ] Drawing works in side panel
- [ ] Stage view shows presenter controls
- [ ] Config page displays properly
- [ ] Manifest has valid HTTPS URLs
- [ ] All URLs point to your public domain

---

## 💡 Pro Tip: Rapid Iteration

Once ngrok is set up, you can:
1. Keep ngrok running with same URL
2. Make code changes locally
3. Refresh in Teams - changes appear immediately
4. No need to re-upload manifest for code changes

---

**🎯 Next Step**: Choose Option 1 (ngrok) for fastest setup, then update manifest and upload to your Teams tenant!