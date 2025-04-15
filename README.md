# Uber Eats Clone

Welcome to the **Uber Eats Clone** project! This is a full-featured mobile application that mimics the core functionality of Uber Eats, built with **React Native** and **Expo Bare Workflow**. It features Firebase integration for authentication and distribution, native Android builds with Kotlin and Java 17, and continuous integration with GitHub Actions and Fastlane.

---

## 🚀 Features

- 🍔 Browse restaurants and food items
- 📋 View restaurant menus and item details
- 🛒 Place orders and track delivery status
- 🔐 Firebase authentication and profile management
- 🔄 Real-time Redux-powered state management
- 📦 Firebase App Distribution (via Fastlane)
- 🧪 Kotlin, Java 17 + Gradle 8.10.2 configuration
- ⚙️ CI/CD with GitHub Actions for build & release

---

## 🛠️ Installation

### 1. Clone the repository

```bash
git clone https://github.com/chiragdhunna/uber_eats_clone.git
cd uber_eats_clone
```

### 2. Install dependencies

```bash
npm install
```

### 3. Setup Firebase

- Create a Firebase project at [console.firebase.google.com](https://console.firebase.google.com)
- Configure authentication and app ID
- Place your Firebase web config in a `firebase.js` file in the root directory

### 4. Prepare for Android

```bash
cd android
./gradlew clean
cd ..
npx react-native run-android
```

> ✅ Ensure Java 17 and Android Studio are installed

### 5. (Optional) iOS Setup

Only applicable if you're building on macOS with Xcode installed.

```bash
npx react-native run-ios
```

---

## 📁 Project Structure

```
uber_eats_clone/
├── android/                  # Native Android configuration and Gradle setup
├── assets/                   # Images, icons, and animations
├── components/               # Reusable UI components
├── redux/                    # Redux slices, store, actions
├── screens/                  # All major application screens
├── firebase.js               # Firebase setup
├── App.js                    # Main app entry point
└── ...
```

---

## 🤖 CI/CD & Distribution

### Fastlane Firebase Distribution

The app uses Fastlane to distribute APKs to Firebase Testers:

- Firebase token, app ID, and keystore are stored as GitHub Secrets
- APKs are built using `assembleRelease`

### GitHub Releases

On every push to `main`, the APK is:

- Built
- Sent to Firebase
- Attached to a [GitHub Release](https://github.com/chiragdhunna/uber_eats_clone/releases)

> See `.github/workflows/build.yml` for the full pipeline setup

---

## 🤝 Contributing

We welcome contributions!

- Submit a pull request with clear descriptions
- For major changes, open an issue first to discuss
- Follow existing code style and patterns

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).

---

## 📬 Contact

Have questions, ideas, or feedback?

- Open an issue
- Or email at: `youremail@example.com`

---

**Made with ❤️ by @chiragdhunna**
