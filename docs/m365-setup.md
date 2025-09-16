# 🚀 M365 Developer Subscription Setup Guide

## Why M365 Developer Subscription is Perfect for This Project

Your M365 E5 Developer subscription is **ideal** for testing this Teams app because:

✅ **Full Teams Admin Access**: Upload custom apps without IT approval  
✅ **Meeting Capabilities**: Test in real Teams meetings with multiple users  
✅ **Live Share Support**: Access to collaborative APIs and features  
✅ **Developer Tools**: Teams Developer Portal, App Studio access  
✅ **Sandbox Environment**: Safe testing without affecting production  

---

## 🎯 Quick Setup Steps (15 minutes)

### Step 1: Access Your Developer Tenant
1. Go to [Microsoft 365 Developer Program](https://developer.microsoft.com/en-us/microsoft-365/dev-program)
2. Sign in with your developer account
3. Note your tenant URL (e.g., `yourcompany.onmicrosoft.com`)

### Step 2: Set Up Teams Developer Portal
1. Go to [Teams Developer Portal](https://dev.teams.microsoft.com/)
2. Sign in with your M365 developer account
3. Click **"Apps"** in the left navigation
4. This is where you'll upload your app manifest

### Step 3: Deploy Your App
Choose one of these hosting options:

#### Option A: Quick Testing with ngrok (Recommended for development)
```bash
# In your app directory
cd f:\repos\Hack\live-share-sdk\personal-whiteboard-app
npm start

# In another terminal
npx ngrok http 3000
```
Copy the HTTPS URL (e.g., `https://abc123.ngrok.io`)

#### Option B: Azure Static Web Apps (Recommended for stable testing)
1. Go to [Azure Portal](https://portal.azure.com)
2. Create **Static Web App** resource
3. Connect to your GitHub repo or upload files
4. Get the public URL

### Step 4: Update Manifest with Your URL
1. Edit `public/manifest/manifest.json`
2. Replace all instances of `https://yourapp.com` with your actual URL:
   ```json
   "contentUrl": "https://YOUR-URL.ngrok.io/sidepanel.html?{context}"
   "configurationUrl": "https://YOUR-URL.ngrok.io/config.html?{context}"
   ```

### Step 5: Upload to Teams
1. In Teams Developer Portal, click **"Import app"**
2. Upload your updated `manifest.json` file
3. The portal will validate your manifest
4. Click **"Preview in Teams"** to test

---

## 🧪 Testing Workflow in M365 Developer Tenant

### Test 1: Side Panel (Personal Whiteboard)
1. **Create a Teams meeting** in your developer tenant
2. **Join the meeting**
3. **Open your app** from the side panel
4. **Test drawing** with pen, highlighter, eraser
5. **Verify** the canvas works on both desktop and mobile

### Test 2: Stage App (Presenter View)  
1. **In the same meeting**, click "Share to Stage" button
2. **Configure the app** using your config page
3. **Share to meeting stage**
4. **Test presenter controls**: navigate between participants, hide/show
5. **Verify** other meeting participants can see the shared view

### Test 3: Multi-User Testing
1. **Invite other users** from your developer tenant to the meeting
2. **Each user opens** their personal whiteboard
3. **Test presenter sharing** of different participants' boards
4. **Verify** the complete workflow end-to-end

---

## 📋 M365 Developer Tenant Advantages

| Feature | Production Tenant | M365 Developer Tenant |
|---------|-------------------|----------------------|
| **Custom App Upload** | ❌ Requires IT approval | ✅ Immediate upload |
| **Meeting Testing** | ⚠️ Limited test users | ✅ Multiple test accounts |
| **Development Tools** | ❌ Restricted access | ✅ Full developer access |
| **Live Share APIs** | ⚠️ May need approval | ✅ Full API access |
| **Debug Console** | ❌ Limited | ✅ Full browser dev tools |
| **Rapid Iteration** | ❌ Slow approval cycle | ✅ Instant testing |

---

## 🔧 Configuration Checklist

### Before Upload:
- [ ] App runs locally (`npm start` works)
- [ ] Public URL is accessible (test in browser)
- [ ] Manifest URLs updated with your actual domain
- [ ] HTTPS is working (Teams requires HTTPS)

### Teams Upload:
- [ ] Manifest validates in Developer Portal
- [ ] App appears in Teams app store (your tenant)
- [ ] Side panel loads without errors
- [ ] Configuration page works
- [ ] Stage app can be shared

### Meeting Testing:
- [ ] Personal whiteboard functions in side panel
- [ ] Drawing tools work (pen, highlighter, eraser)
- [ ] Share to stage button works
- [ ] Presenter controls function
- [ ] Multiple participants can join

---

## 🚨 Troubleshooting Common Issues

### "App failed to load"
**Cause**: HTTPS URL not accessible  
**Fix**: Check ngrok is running, test URL in browser

### "Manifest validation failed"
**Cause**: Invalid GUIDs or URLs  
**Fix**: Use Teams Developer Portal validator, check JSON syntax

### "Cannot add to meeting"
**Cause**: App not published to your tenant  
**Fix**: Ensure upload was successful, check app permissions

### "Drawing not working"
**Cause**: JavaScript errors or Canvas sizing  
**Fix**: Check browser console, verify touch/mouse events

### "Teams SDK not initialized"
**Cause**: Not running in Teams context  
**Fix**: Test in actual Teams meeting, not browser directly

---

## 📊 Success Validation Steps

### ✅ **Phase 1: Basic Deployment**
1. App loads in Teams without errors
2. Side panel appears in meetings
3. Stage app can be configured and shared

### ✅ **Phase 2: Functional Testing**  
1. Drawing canvas works smoothly
2. All tools function (pen, highlighter, eraser)
3. Presenter controls navigate properly

### ✅ **Phase 3: Multi-User Validation**
1. Multiple users can join and draw
2. Presenter can cycle through participants
3. Stage sharing works for all attendees

---

## 🎯 Next Steps After M365 Testing

Once basic Teams integration is validated:

1. **Add Live Share SDK** for real-time collaboration
2. **Implement canvas snapshot sharing** between users
3. **Add participant presence tracking**
4. **Enhanced error handling** for production use
5. **Performance optimization** for larger meetings

---

## 💡 Pro Tips for M365 Developer Testing

**🔄 Rapid Iteration**: Use ngrok for instant updates without re-uploading manifest  
**👥 Test Users**: Create multiple test accounts in your developer tenant  
**📱 Mobile Testing**: Test on Teams mobile app with your developer account  
**🔍 Debug Tools**: Use browser dev tools extensively for troubleshooting  
**📝 Document Issues**: Keep track of bugs/improvements for next iteration  

---

**🚀 Ready to Deploy!** Your app is fully prepared for M365 developer tenant testing. The scaffolding is complete and functional - now it's time to see it work in real Teams meetings!