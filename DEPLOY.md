# Deployment Guide 🚀

This guide provides step-by-step instructions for deploying your Valentine's Day website to **www.grewaldseign.com** or alternative hosting platforms.

> ⚠️ **Domain Name Note**: Please double-check that "grewaldseign.com" is spelled correctly. If this is a typo, update the domain name throughout this guide before proceeding.

---

## Table of Contents
1. [Pre-Deployment Checklist](#pre-deployment-checklist)
2. [Option 1: FTP Upload (HostGator/cPanel Style)](#option-1-ftp-upload-hostgator-style)
3. [Option 2: GitHub Pages](#option-2-github-pages)
4. [Verification & Testing](#verification--testing)
5. [Troubleshooting](#troubleshooting)

---

## Pre-Deployment Checklist

Before deploying, ensure you've completed these steps:

### Content Customization
- [ ] **Customized names**: Updated `recipient-name` and `my-name` in `index.html`
- [ ] **Added couple photo**: Placed your photo as `couple-photo.png` in the `images/` folder
- [ ] **Updated footer**: Changed "Made with 💛 by G" to your initial/name
- [ ] **Customized helper messages**: Updated the playful messages in `script.js` (optional but recommended)
- [ ] **Updated success message**: Changed "See you on February 14th 🫡" to your preferred message (optional)

### Testing
- [ ] **Tested locally**: Opened `index.html` in a browser and verified all features work:
  - [ ] "Yes" button has heartbeat animation
  - [ ] "No" button dodges when hovered/clicked
  - [ ] "No" button gets smaller with each attempt
  - [ ] Different messages appear when "No" is attempted
  - [ ] Confetti triggers when "Yes" is clicked
  - [ ] Couple photo appears after "Yes"
  - [ ] Kuromi and Pug decorations animate
  - [ ] Floating emojis move up the screen
- [ ] **Tested on mobile**: Checked responsive design on a phone or using browser dev tools
- [ ] **Tested in multiple browsers**: Chrome, Firefox, Safari (especially if valentine uses iOS)
- [ ] **Checked all images load**: No broken image icons

### Domain & Hosting
- [ ] **Verified domain**: Confirmed your domain spelling is correct
- [ ] **DNS check**: Ensured your domain DNS is pointed to your hosting provider

---

## Option 1: FTP Upload (HostGator Style)

If your domain is hosted on HostGator, Bluehost, or similar cPanel-based hosting, follow these steps to upload via FTP.

### Step 1: Gather Your FTP Credentials

You'll need:
- **FTP Hostname**: Usually `ftp.grewaldseign.com` or your server IP
- **FTP Username**: Often your cPanel username or email
- **FTP Password**: Your hosting account password
- **Port**: Usually `21` (or `22` for SFTP)

**Where to find these:**
- Log in to your hosting control panel (cPanel)
- Look for "FTP Accounts" or "FTP Access" section
- Your hosting provider should have sent these credentials in your welcome email

### Step 2: Choose an FTP Client

Download and install an FTP client:
- **FileZilla** (Recommended, free): [https://filezilla-project.org](https://filezilla-project.org)
- **Cyberduck** (Mac/Windows): [https://cyberduck.io](https://cyberduck.io)
- **WinSCP** (Windows only): [https://winscp.net](https://winscp.net)

### Step 3: Connect to Your Server

1. Open your FTP client
2. Enter your FTP credentials:
   - **Host**: `ftp.grewaldseign.com` (or your server IP)
   - **Username**: Your FTP username
   - **Password**: Your FTP password
   - **Port**: `21` (or `22` for SFTP)
3. Click **"Connect"** or **"Quickconnect"**

### Step 4: Navigate to the Correct Directory

Once connected, navigate to your website's root directory:
- Common paths: `public_html/`, `www/`, or `htdocs/`
- For subdomain: `public_html/subdomain_name/`
- For main domain: Usually just `public_html/`

**Important**: This is where your `index.html` should live for www.grewaldseign.com.

### Step 5: Upload Files

1. **Clear existing files** (if this is a fresh deployment):
   - Delete any placeholder `index.html` or `coming-soon` pages in the directory
   - Keep `.htaccess` files if they exist (important for server configuration)

2. **Upload your files**:
   - Select all files and folders from your local project:
     - `index.html`
     - `styles.css`
     - `script.js`
     - `images/` folder (with all images inside)
   - Drag and drop them into the remote directory (usually `public_html/`)
   - Ensure they're in the **root directory**, not a subfolder

3. **Verify upload**:
   - Confirm all files appear in the remote directory:
     - `index.html`
     - `styles.css`
     - `script.js`
     - `images/` folder containing:
       - `couple-photo.png`
       - `kuromi-head.png`
       - `kuromi-head-2.png`
       - `pug-head.png`
       - `pug-head-2.png`
   - Check file sizes match your local files

### Step 6: Set File Permissions (if needed)

Most hosting providers set correct permissions automatically, but if needed:
- Right-click each file → **File Permissions** or **Properties**
- Set permissions to `644` for HTML/CSS/JS files
- This ensures files are readable but not writable by the public

### Step 7: Test Your Website

Open your browser and navigate to:
```
https://www.grewaldseign.com
```
or
```
http://www.grewaldseign.com
```

You should see your Valentine's website!

---

## Option 2: GitHub Pages

GitHub Pages is a free alternative for hosting static websites. Perfect if you want version control or don't have a hosting account yet.

### Step 1: Create a GitHub Account
- Sign up at [https://github.com](https://github.com) (free)

### Step 2: Create a New Repository

1. Click the **"+"** icon (top right) → **"New repository"**
2. Repository name: `valentines-website` (or any name you like)
3. Set to **Public**
4. ✅ Check **"Add a README file"** (optional)
5. Click **"Create repository"**

### Step 3: Upload Your Files

**Option A: Via GitHub Website (Easiest)**
1. In your new repository, click **"Add file"** → **"Upload files"**
2. Drag and drop all your files and folders:
   - `index.html`
   - `styles.css`
   - `script.js`
   - `images/` folder (with all images inside)
3. Add a commit message: "Initial Valentine's website"
4. Click **"Commit changes"**

**Option B: Via Git Command Line**
```bash
# Navigate to your project folder
cd /Users/garry/valentines-test

# Initialize git repository
git init

# Add all files (including images folder)
git add index.html styles.css script.js images/

# Commit
git commit -m "Initial Valentine's website"

# Add remote (replace YOUR_USERNAME and YOUR_REPO)
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### Step 4: Enable GitHub Pages

1. In your repository, click **"Settings"** (top menu)
2. Scroll down to **"Pages"** (left sidebar)
3. Under **"Source"**, select:
   - Branch: `main`
   - Folder: `/ (root)`
4. Click **"Save"**

GitHub will display your site URL:
```
https://YOUR_USERNAME.github.io/valentines-website/
```

**Wait 1-2 minutes** for deployment to complete.

### Step 5: (Optional) Use Your Custom Domain

To use www.grewaldseign.com with GitHub Pages:

1. **Add custom domain in GitHub**:
   - Settings → Pages → Custom domain
   - Enter: `www.grewaldseign.com`
   - Click **"Save"**

2. **Update DNS records** (at your domain registrar):
   - Add a **CNAME** record:
     - Name: `www`
     - Value: `YOUR_USERNAME.github.io`
     - TTL: 3600 (or automatic)

3. **Wait for DNS propagation** (can take 5 minutes to 48 hours)

4. **Enable HTTPS**:
   - Return to Settings → Pages
   - ✅ Check **"Enforce HTTPS"** (wait for certificate provisioning)

---

## Verification & Testing

After deployment, verify everything works:

### 1. Visual Check
- [ ] Website loads at your domain
- [ ] Card layout is centered and styled correctly
- [ ] Mesh gradient background is visible
- [ ] Names display correctly with custom fonts
- [ ] Kuromi decoration appears in top-right corner
- [ ] Pug decoration appears in bottom-left corner
- [ ] Floating emojis are moving up the screen
- [ ] Footer displays at the bottom

### 2. Functionality Check
- [ ] "Yes" button has heartbeat animation (pulsing)
- [ ] "No" button moves away when hovered (desktop)
- [ ] "No" button moves away when tapped (mobile)
- [ ] "No" button gets smaller with each attempt
- [ ] Different helper messages appear with each "No" attempt
- [ ] Clicking "Yes" triggers confetti
- [ ] Couple photo appears after "Yes" is clicked
- [ ] Success message displays correctly
- [ ] Intro text is replaced with "Yay! You said Yes!"
- [ ] "No" button is hidden after "Yes" is clicked
- [ ] Kuromi and Pug change to "-2" versions after "Yes"
- [ ] No console errors (F12 → Console tab)

### 3. Image Check
- [ ] Couple photo loads correctly
- [ ] Kuromi head image loads (both versions)
- [ ] Pug head image loads (both versions)
- [ ] No broken image icons (404 errors)

### 4. Mobile Check
- [ ] Open site on your phone
- [ ] Layout is responsive (no horizontal scrolling)
- [ ] Buttons are tappable and properly sized
- [ ] Text is readable
- [ ] Decorations are properly sized
- [ ] Floating emojis appear (if motion not reduced)
- [ ] "No" button dodges on tap

### 4. SSL/HTTPS Check
- [ ] URL shows padlock icon (https://)
- [ ] No mixed content warnings

---

## Troubleshooting

### Issue: Website shows a "404 Not Found" error

**Causes & Solutions:**
- **DNS not propagated**: Wait 24-48 hours or check DNS with [whatsmydns.net](https://www.whatsmydns.net)
- **Wrong directory**: Ensure files are in `public_html/` (or equivalent root directory)
- **Filename case-sensitive**: Some servers are case-sensitive—use lowercase `index.html`

### Issue: Confetti doesn't work

**Causes & Solutions:**
- **CDN blocked**: Check browser console for errors
- **Internet connection**: Confetti library loads from CDN—requires internet
- **Mixed content**: Ensure site is accessed via `https://` (not `http://`) if CDN uses HTTPS

### Issue: Styles not loading (plain HTML page)

**Causes & Solutions:**
- **File not uploaded**: Verify `styles.css` exists in the same directory as `index.html`
- **Wrong path**: Check `<link rel="stylesheet" href="styles.css">` in `index.html`
- **Browser cache**: Hard refresh (Ctrl+Shift+R or Cmd+Shift+R)

### Issue: Domain doesn't resolve / shows old content

**Causes & Solutions:**
- **DNS propagation**: Use [whatsmydns.net](https://www.whatsmydns.net) to check if DNS has updated globally
- **Browser cache**: Try in incognito/private mode
- **Hosting provider DNS**: Confirm domain is pointed to correct nameservers

### Issue: "grewaldseign.com" is a typo

If the domain name is incorrect:
1. Purchase the correct domain from a registrar (Namecheap, Google Domains, etc.)
2. Update DNS settings to point to your hosting provider
3. Follow the FTP or GitHub Pages steps above with the correct domain

---

## Additional Resources

### DNS & Domain Help
- **Check DNS propagation**: [https://www.whatsmydns.net](https://www.whatsmydns.net)
- **Domain registrar guides**: Search "[your registrar] change nameservers"

### FTP Clients
- **FileZilla**: [https://filezilla-project.org](https://filezilla-project.org)
- **Cyberduck**: [https://cyberduck.io](https://cyberduck.io)

### GitHub Pages Documentation
- **Official guide**: [https://pages.github.com](https://pages.github.com)
- **Custom domains**: [https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site)

---

## Quick Reference: File Locations

### For FTP (HostGator/cPanel):
```
Server: ftp.grewaldseign.com
Directory: /public_html/
Files:
  - public_html/index.html
  - public_html/styles.css
  - public_html/script.js
  - public_html/images/couple-photo.png
  - public_html/images/kuromi-head.png
  - public_html/images/kuromi-head-2.png
  - public_html/images/pug-head.png
  - public_html/images/pug-head-2.png
```

### For GitHub Pages:
```
Repository: https://github.com/YOUR_USERNAME/valentines-website
Files:
  - index.html
  - styles.css
  - script.js
  - images/
    - couple-photo.png
    - kuromi-head.png
    - kuromi-head-2.png
    - pug-head.png
    - pug-head-2.png
URL: https://YOUR_USERNAME.github.io/valentines-website/
```

---

## Need Help?

- **Hosting provider support**: Contact HostGator/Bluehost support for FTP or cPanel issues
- **GitHub Pages issues**: Check [GitHub Community](https://github.community)
- **DNS troubleshooting**: Contact your domain registrar's support

---

**Good luck with your deployment! 💕**

Once deployed, share the link with your valentine and watch the magic happen!
