# Infrastructure

This package will spin up the necessary infrastructure to host and serve your micro-frontend.

# Summary of what is deployed
 
 * S3 Bucket - Hosts the built files to be served via the content deliver network.
 * Cloudfront - Content Delivery Network that will serve the S3 files.

# Useful commands

 * `npm run build`   compile typescript to js
 * `npm run watch`   watch for changes and compile
 * `npm run test`    perform the jest unit tests
 * `cdk deploy`      deploy this stack to your default AWS account/region
 * `cdk diff`        compare deployed stack with current state
 * `cdk synth`       emits the synthesized CloudFormation template
