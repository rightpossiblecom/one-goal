# One Goal Release Package

This folder contains all credentials and metadata required for the Google Play Store release of the **One Goal** app.

## Keystore Credentials
**⚠️ KEEP THIS SECURE. IF LOST, YOU CANNOT UPDATE THE APP.**

- **Key Alias:** `one_goal`
- **Key Password:** `one_goal123`
- **Store Password:** `one_goal123`
- **Path:** `one_goal-release.jks`

## Play Store Listing
- App Name: One Goal
- Package ID: `com.onegoal.app`
- Listing text is located in `play_store_listing.txt`
- Privacy Policy text is located in `privacy_policy.md`

## Next Steps for Publisher
1. Create a new app in Google Play Console.
2. Fill out the App Content declarations (note that the app does NOT collect any data).
3. Upload the app bundle (`app-release.aab`) located in the root `build/app/outputs/bundle/release/` directory.
4. Upload screenshots and the feature graphic.
5. Provide the Privacy Policy link (`https://onegoal.app/privacy-policy`).
6. Submit for review!
