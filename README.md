# Cloud Server

This is a simple express server which will be uploaded to the cloud using AWS Beanstalk.

## Author

**Jedidiah Staley**

## Deployment

The deployed site can be visited here:
[Live Site](http://test-server-env.eba-x2ub5s8t.us-east-1.elasticbeanstalk.com/)

## Process

A role was made using AWS IAM which would have the permissions required by Beanstalk. Beanstalk was then created with mostly default settings; only the framework and name were changed. [index.js](./index.js) and [package.json](./package.json) were put into a zip file, and then uploaded to the Beanstalk environment.
