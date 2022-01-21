#!/usr/bin/env node
import 'source-map-support/register'
import * as cdk from 'aws-cdk-lib'
import { InfrastructureStack } from '../lib/infrastructure-stack'

const account = process.env.AWS_ACCOUNT
const region = process.env.AWS_REGION

const app = new cdk.App()
new InfrastructureStack(app, 'MicroFrontendInfrastructure', {
    env: { account, region },
})
