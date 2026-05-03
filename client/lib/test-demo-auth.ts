// Test utilities for demo authentication

import { localDemoAuth, shouldUseLocalDemoAuth } from "./local-demo-auth";

export async function testLocalDemoAuth() {
  console.group('🧪 Testing Local Demo Auth');
  
  try {
    // Check environment detection
    const useLocal = shouldUseLocalDemoAuth();
    console.log('Environment check:', {
      hostname: window.location.hostname,
      shouldUseLocal: useLocal
    });
    
    if (!useLocal) {
      console.warn('Local demo auth not enabled for this environment');
      console.groupEnd();
      return false;
    }
    
    // Clear existing data
    localDemoAuth.clearAllDemoData();
    console.log('Cleared existing demo data');
    
    // Test user creation
    console.log('Creating demo user...');
    const demoUser = await localDemoAuth.createDemoUser();
    console.log('Demo user created:', demoUser);
    
    // Test getting current user
    const currentUser = localDemoAuth.getCurrentUser();
    console.log('Current user:', currentUser);
    
    // Test stats
    const stats = localDemoAuth.getDemoUserStats();
    console.log('Demo stats:', stats);
    
    // Test sign out
    await localDemoAuth.signOut();
    console.log('Signed out');
    
    const afterSignOut = localDemoAuth.getCurrentUser();
    console.log('User after sign out:', afterSignOut);
    
    console.log('✅ Local demo auth test completed successfully');
    console.groupEnd();
    return true;
    
  } catch (error) {
    console.error('❌ Local demo auth test failed:', error);
    console.groupEnd();
    return false;
  }
}

// Auto-run test in development
if (process.env.NODE_ENV === 'development' && typeof window !== 'undefined') {
  // Auto-login demo user immediately if Firebase is not configured
  if (shouldUseLocalDemoAuth()) {
    console.log('🚀 Auto-initializing demo authentication...');
    const existingUser = localDemoAuth.getCurrentUser();
    if (!existingUser) {
      // Create a demo user immediately
      localDemoAuth.createDemoUser().then(() => {
        console.log('✅ Demo user auto-created and ready');
      }).catch((error) => {
        console.error('❌ Failed to create demo user:', error);
      });
    } else {
      console.log('✅ Existing demo user found:', existingUser);
    }
  }
}

// Expose test function globally for manual testing
if (typeof window !== 'undefined') {
  (window as any).testLocalDemoAuth = testLocalDemoAuth;
}
