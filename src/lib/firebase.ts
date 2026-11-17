import { initializeApp } from 'firebase/app';
import { getAnalytics, isSupported, logEvent } from 'firebase/analytics';
import { addDoc, collection, getFirestore, serverTimestamp } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyCoxomoeANc2q-BDb7lw1nVQcDJev98bCQ',
  authDomain: 'tarasogrod.firebaseapp.com',
  projectId: 'tarasogrod',
  storageBucket: 'tarasogrod.firebasestorage.app',
  messagingSenderId: '610060018421',
  appId: '1:610060018421:web:3b1682fa20c8170393dbbc',
  measurementId: 'G-HZQX45GQML',
};

export const app = initializeApp(firebaseConfig);

const analyticsPromise = isSupported().then((ok) => (ok ? getAnalytics(app) : null));

export async function trackEvent(name: string, params?: Record<string, string>) {
  try {
    const analytics = await analyticsPromise;
    if (analytics) {
      logEvent(analytics, name, params);
    }
  } catch {
    // Ignore analytics errors
  }
}

export interface LeadPayload {
  name: string;
  phone: string;
  email: string;
  location: string;
  area: string;
  scope: string;
  timing: string;
  message: string;
  source: string;
}

export async function submitLead(payload: LeadPayload): Promise<string> {
  const db = getFirestore(app);
  const docRef = await addDoc(collection(db, 'leads'), {
    ...payload,
    status: 'new',
    createdAt: serverTimestamp(),
    userAgent: typeof navigator !== 'undefined' ? navigator.userAgent : '',
    href: typeof window !== 'undefined' ? window.location.href : '',
  });
  await trackEvent('generate_lead', {
    scope: payload.scope,
    location: payload.location,
    timing: payload.timing,
  });
  return docRef.id;
}
