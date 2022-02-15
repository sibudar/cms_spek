module.exports = ({ env }) => ({
  // ...
  upload: {
    config: {             // <-- this one 
      provider: 'aws-s3',
      providerOptions: {
        accessKeyId: 'AKIAR2Z2MX23EGZ22U7T',
        secretAccessKey: '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',
        region: 'af-south-1',
        params: {
          Bucket: 's3spek',
        },
      },
    },
  },
  email: {
    config: {
      provider: 'nodemailer',
      providerOptions: {
        host: env('SMTP_HOST', 'smtp.example.com'),
        port: env('SMTP_PORT', 587),
        auth: {
          user: env('SMTP_USERNAME'),
          pass: env('SMTP_PASSWORD'),
        },
        // ... any custom nodemailer options
      },
      settings: {
        defaultFrom: 'sibusisoj@thedigitalacademy.co.za',
        defaultReplyTo: 'sibusisoj@thedigitalacademy.co.za',
      },
    },
  },
  'bulky': {
    enabled: true,
    resolve: './src/plugins/bulky'
  },
  // ...
});