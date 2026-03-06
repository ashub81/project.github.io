# Agro AI - Crop Disease Detection Prototype

This repository now contains a ready web prototype for your **Agro AI** college/hackathon demo.

## What is included

- Home screen with project intro.
- Scan Leaf screen with image upload / camera capture.
- Result screen with disease + confidence + treatment recommendation.
- History screen saved in browser local storage.
- Teachable Machine TensorFlow.js model integration hooks.

## Run locally

```bash
python3 -m http.server 4173
```

Then open `http://localhost:4173`.

## Connect your Teachable Machine model

1. Train model in Teachable Machine with classes:
   - Healthy Leaf
   - Leaf Disease
   - Bacterial Spot
   - Early Blight
2. Export as **TensorFlow.js**.
3. In `index.html`, update:
   - `MODEL_URL`
   - `METADATA_URL`
4. Reload app and scan a leaf image.

> If model URLs are not configured, app uses a fallback mock prediction so your UI flow still works for demo purposes.

## Glide integration flow

If you want this in Glide:

1. Host this page (GitHub Pages / Netlify).
2. Create Glide app with screens: Home, Scan Leaf, Result, History.
3. Add **Web Embed** component in Glide and paste your hosted app URL.
4. Use Glide as a mobile PWA (Add to Home Screen).

## Theme

- Primary: `#2E7D32`
- Light Green: `#A5D6A7`
- Background: `#F5F5F5`
