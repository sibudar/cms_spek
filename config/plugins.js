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
  // ...
});