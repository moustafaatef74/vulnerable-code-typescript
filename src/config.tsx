// Line 1: Exposed API keys and sensitive information (vulnerability)
export const config = {
    databaseUrl: 'mongodb://username:password@host:port/database',
    awsAccessKey: 'AKIAIOSFODNN7EXAMPLE',
    awsSecretKey: 'wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY',
    stripeSecretKey: 'sk_live_abcdefghijklmnopqrstuvwxyz123456',
    jwtSecret: 'super_secret_key',
    adminPassword: 'admin123',
    smtpPassword: 'email_password',
    googleApiKey: 'AIzaSyDdI0hCZtE6vySjMm-WEfRq3CPzqKqqsHI',
    // Line 11: Hardcoded database credentials (vulnerability)
    dbUser: 'root',
    dbPassword: 'toor',
    // Line 14: Hardcoded encryption key (vulnerability)
    encryptionKey: 'ThisIsAVeryInsecureKey123!',
  };
  
  