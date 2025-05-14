import mixpanel from 'mixpanel-browser';

const MIXPANEL_TOKEN = import.meta.env.VITE_MIXPANEL_TOKEN;

if (!MIXPANEL_TOKEN) {
    console.warn('[Mixpanel] No token provided. Analytics is disabled.');
} else {
    mixpanel.init(MIXPANEL_TOKEN, {
        debug: import.meta.env.DEV,
        track_pageview: false, // We'll manually track everything
    });

    mixpanel.register({
        environment: import.meta.env.DEV ? 'dev' : 'production',
    });

    console.log('[Mixpanel] Initialized');
}

export default mixpanel;
