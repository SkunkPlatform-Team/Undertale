# Electron App CI/CD 🚀  

This repository contains an Electron application that is **built automatically** using GitHub Actions. You **cannot run workflows locally**, as all builds are handled by GitHub's CI/CD pipeline.  

## 📥 Download the Windows Installer  

1. Go to the **[GitHub Actions](https://github.com/SkunkPlatform/Electron-CI/actions)** page.  
2. Select the latest **successful workflow run**.  
3. Scroll down to the **Artifacts** section.  
4. Click on **`electron-windows-installer.zip`** to download it.  
5. Extract and run the `.exe` installer.  

## 🛠️ Features  

- Fully automated **CI/CD pipeline** with GitHub Actions.  
- **Windows installer** generated with `electron-builder`.  
- No need to build manually—GitHub compiles everything for you.  

## 🏗️ How It Works  

Every time code is pushed to the **main** branch, GitHub Actions will:  
1. Install dependencies.  
2. Build the Electron app for **Windows**.  
3. Upload the installer to GitHub Actions Artifacts.  

## 📄 License  

This project is licensed under the **MIT License**.
