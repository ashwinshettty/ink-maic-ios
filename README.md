# Dygno (iOS)

Capacitor app for iOS that loads **https://dygno.com** and respects safe area (notch, Dynamic Island, home indicator).

## Safe area

- **iOS**: `contentInset: "automatic"` in `capacitor.config.json` makes the WebView respect safe area insets on iPhone and iPad. The loaded site (4kal.com) uses `viewport-fit=cover` and `env(safe-area-inset-*)` in CSS for layout padding.

## Setup

```bash
npm install
npm run build
npm run cap:sync
npm run cap:open:ios
```

Or in one step: `npm run build:ios`

## Commands

| Command | Description |
|--------|-------------|
| `npm run build` | Copy web assets to `dist/` |
| `npm run cap:sync` | Sync web assets to the iOS project |
| `npm run cap:open:ios` | Open the app in Xcode |
| `npm run build:ios` | Build, sync, and open Xcode |

Build and run from Xcode on a simulator or device.
# ink-maic-ios
