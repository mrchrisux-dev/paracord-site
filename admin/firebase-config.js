// Firebase WEB app config for the admin dashboard.
//
// These values are public by design — Google ships them to every browser that
// loads a Firebase web app. They identify the project; they do NOT grant access.
// Access to the stats is enforced by firestore.rules (admin custom claim only).
//
// Fill in from: Firebase console → Project settings → General → Your apps →
// the "Paracord admin" web app → SDK setup and configuration → Config.
export const firebaseConfig = {
  apiKey: 'REPLACE_ME',
  authDomain: 'paracord-6e930.firebaseapp.com',
  projectId: 'paracord-6e930',
  appId: 'REPLACE_ME',
};
