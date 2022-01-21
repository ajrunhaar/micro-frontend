import { CfnOutput, RemovalPolicy, Stack, StackProps } from 'aws-cdk-lib'
import { Bucket, BucketAccessControl } from 'aws-cdk-lib/aws-s3'
import { Construct } from 'constructs'
import {
    CloudFrontWebDistribution,
    OriginAccessIdentity,
} from 'aws-cdk-lib/aws-cloudfront'

export class InfrastructureStack extends Stack {
    constructor(scope: Construct, id: string, props?: StackProps) {
        super(scope, id, props)

        const s3BucketSource = new Bucket(this, 'MicroFrontendBucket', {
            accessControl: BucketAccessControl.PRIVATE,
            removalPolicy: RemovalPolicy.DESTROY, // NOT recommended for production code
        })

        const originAccessIdentity = new OriginAccessIdentity(
            this,
            'WebsiteOAI'
        )
        s3BucketSource.grantRead(originAccessIdentity)

        const cloudFrontWebDistribution = new CloudFrontWebDistribution(
            this,
            'MicroFrontEndDistribution',
            {
                defaultRootObject: '/container/latest/index.html',
                originConfigs: [
                    {
                        s3OriginSource: {
                            s3BucketSource,
                            originAccessIdentity,
                        },
                        behaviors: [{ isDefaultBehavior: true }],
                    },
                ],
                errorConfigurations: [
                    {
                        errorCode: 403,
                        responseCode: 200,
                        responsePagePath: '/container/latest/index.html'
                    }
                ],
            }
        )

        new CfnOutput(this, 'MicroFrontendBucketName', {
            value: s3BucketSource.bucketName,
            description:
                'The name of the bucket where the frontend build files are uploaded',
            exportName: 'MicroFrontendBucketName',
        })

        new CfnOutput(this, 'MicroFrontEndDistributionDomainName', {
            value: cloudFrontWebDistribution.distributionDomainName,
            description: 'The cloudfront distribution domain name',
            exportName: 'MicroFrontEndDistributionDomainName',
        })
    }
}
