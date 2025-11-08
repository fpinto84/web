import * as Sentry from '@sentry/react';

/**
 * Initialize Sentry error tracking
 * Only enabled in production with a valid DSN
 */
export const initSentry = () => {
  // Get DSN from environment variable
  const dsn = import.meta.env.VITE_SENTRY_DSN;

  // Only initialize in production and if DSN is configured
  if (import.meta.env.PROD && dsn) {
    Sentry.init({
      dsn,
      environment: import.meta.env.MODE,
      integrations: [
        Sentry.browserTracingIntegration(),
        Sentry.replayIntegration({
          maskAllText: true,
          blockAllMedia: true,
        }),
      ],
      // Performance Monitoring
      tracesSampleRate: 0.1, // Capture 10% of transactions
      // Session Replay
      replaysSessionSampleRate: 0.1, // Sample 10% of sessions
      replaysOnErrorSampleRate: 1.0, // Sample 100% of sessions with errors
      // Filter out non-critical errors
      beforeSend(event, hint) {
        // Don't send development errors
        if (import.meta.env.DEV) return null;

        // Filter out known non-critical errors
        const error = hint.originalException;
        if (error instanceof Error) {
          if (error.message.includes('ResizeObserver')) return null;
          if (error.message.includes('Non-Error promise rejection')) return null;
        }

        return event;
      },
    });
  }
};

/**
 * Capture exception manually
 */
export const captureException = (error: Error, context?: Record<string, any>) => {
  if (import.meta.env.PROD) {
    Sentry.captureException(error, { extra: context });
  } else {
    console.error('Error captured:', error, context);
  }
};

/**
 * Set user context for error tracking
 */
export const setUser = (user: { id?: string; email?: string; username?: string }) => {
  Sentry.setUser(user);
};

/**
 * Add breadcrumb for debugging
 */
export const addBreadcrumb = (message: string, data?: Record<string, any>) => {
  Sentry.addBreadcrumb({
    message,
    data,
    level: 'info',
  });
};
