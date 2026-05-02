import { initializeApp, getApps } from "firebase/app";
import { getAnalytics, isSupported as analyticsSupported } from "firebase/analytics";
import { getAuth, connectAuthEmulator } from "firebase/auth";
import { getFirestore, connectFirestoreEmulator } from "firebase/firestore";
import { getStorage, connectStorageEmulator } from "firebase/storage";
import { getFunctions, connectFunctionsEmulator } from "firebase/functions";
import { getPerformance } from "firebase/performance";
import { getMessaging, isSupported as messagingSupported } from "firebase/messaging";

// Your web app's Firebase configuration
// Load from environment variables for security
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID
};

// Initialize Firebase only once
let app;
if (getApps().length === 0) {
  app = initializeApp(firebaseConfig);
} else {
  app = getApps()[0];
}

// Initialize Firebase services
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export const functions = getFunctions(app);

// Initialize Analytics (only in browser and if supported)
export let analytics: any = null;
export let performance: any = null;
export let messaging: any = null;

if (typeof window !== 'undefined') {
  // Analytics
  analyticsSupported().then((supported) => {
    if (supported) {
      analytics = getAnalytics(app);
      console.log('✅ Firebase Analytics initialized');
    }
  }).catch(console.warn);

  // Performance
  try {
    performance = getPerformance(app);
    console.log('✅ Firebase Performance initialized');
  } catch (error) {
    console.warn('Firebase Performance not available:', error);
  }

  // Messaging (for push notifications)
  messagingSupported().then((supported) => {
    if (supported) {
      messaging = getMessaging(app);
      console.log('✅ Firebase Messaging initialized');
    }
  }).catch(console.warn);
}

// Development emulators (only in development)
if (process.env.NODE_ENV === 'development' && typeof window !== 'undefined') {
  const hostname = window.location.hostname;
  
  // Only connect to emulators on localhost
  if (hostname === 'localhost' || hostname === '127.0.0.1') {
    console.log('🔧 Emulator connection temporarily disabled - using real Firebase services');
    console.log('📝 To use emulators: npm run emulators');
    
    // Temporarily disabled emulator connections due to setup issues
    // Uncomment the following code once emulators are properly configured:
    /*
    // Check emulator availability and connect asynchronously
    const connectEmulators = async () => {
      try {
        // Auth emulator
        if (!auth.config.emulator) {
          try {
            if (await isEmulatorRunning(9099)) {
              connectAuthEmulator(auth, 'http://localhost:9099', { disableWarnings: true });
              console.log('🔧 Connected to Auth emulator');
            } else {
              console.log('Auth emulator not running on port 9099');
            }
          } catch (authError) {
            console.log('Auth emulator not available:', authError);
          }
        }

        // Firestore emulator
        try {
          if (await isEmulatorRunning(8080) && db && !db._delegate?._settings?.host?.includes('localhost')) {
            connectFirestoreEmulator(db, 'localhost', 8080);
            console.log('🔧 Connected to Firestore emulator');
          } else if (!await isEmulatorRunning(8080)) {
            console.log('Firestore emulator not running on port 8080');
          }
        } catch (firestoreError) {
          console.log('Firestore emulator not available:', firestoreError);
        }

        // Storage emulator
        try {
          if (await isEmulatorRunning(9199) && storage && !storage._location?.bucket?.includes('localhost')) {
            connectStorageEmulator(storage, 'localhost', 9199);
            console.log('🔧 Connected to Storage emulator');
          } else if (!await isEmulatorRunning(9199)) {
            console.log('Storage emulator not running on port 9199');
          }
        } catch (storageError) {
          console.log('Storage emulator not available:', storageError);
        }

        // Functions emulator
        try {
          if (await isEmulatorRunning(5001) && functions && functions.region && functions.region !== 'localhost') {
            connectFunctionsEmulator(functions, 'localhost', 5001);
            console.log('🔧 Connected to Functions emulator');
          } else if (!await isEmulatorRunning(5001)) {
            console.log('Functions emulator not running on port 5001');
          }
        } catch (functionsError) {
          console.log('Functions emulator not available:', functionsError);
        }
      } catch (error) {
        console.log('Emulators not available:', error);
      }
    };

    // Start checking emulators after a short delay to ensure Firebase is initialized
    setTimeout(connectEmulators, 500);
    */
  }
}

// Export Firebase app instance
export default app;

// Utility functions
export const isFirebaseEnabled = () => {
  return !!(auth && db && storage);
};

// Check if emulator is running on a specific port
const isEmulatorRunning = async (port: number): Promise<boolean> => {
  try {
    const response = await fetch(`http://localhost:${port}`, { 
      method: 'HEAD',
      mode: 'no-cors'
    });
    return true;
  } catch {
    return false;
  }
};

export const getFirebaseServices = () => {
  return {
    auth,
    db,
    storage,
    functions,
    analytics,
    performance,
    messaging,
    app
  };
};

console.log('🔥 Firebase services initialized:', {
  auth: !!auth,
  firestore: !!db,
  storage: !!storage,
  functions: !!functions,
  analytics: !!analytics,
  performance: !!performance,
  messaging: !!messaging
});
